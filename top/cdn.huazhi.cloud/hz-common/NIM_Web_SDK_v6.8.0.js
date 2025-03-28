!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.SDK = t() : e.SDK = t()
}(window, function() {
    return function(e) {
        var t = {};
        function n(r) {
            if (t[r])
                return t[r].exports;
            var s = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(s.exports, s, s.exports, n),
            s.l = !0,
            s.exports
        }
        return n.m = e,
        n.c = t,
        n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }
        ,
        n.r = function(e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return n.d(t, "a", t),
            t
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "",
        n(n.s = 498)
    }([function(e, t, n) {
        "use strict";
        var r, s = n(9), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        var o = n(76)
          , a = n(70);
        n(91);
        var c, u, m = n(13), l = m.getGlobal(), d = /\s+/;
        m.deduplicate = function(e) {
            var t = [];
            return e.forEach(function(e) {
                -1 === t.indexOf(e) && t.push(e)
            }),
            t
        }
        ,
        m.capFirstLetter = function(e) {
            return e ? (e = "" + e).slice(0, 1).toUpperCase() + e.slice(1) : ""
        }
        ,
        m.guid = (c = function() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }
        ,
        function() {
            return c() + c() + c() + c() + c() + c() + c() + c()
        }
        ),
        m.extend = function(e, t, n) {
            for (var r in t)
                void 0 !== e[r] && !0 !== n || (e[r] = t[r])
        }
        ,
        m.filterObj = function(e, t) {
            var n = {};
            return m.isString(t) && (t = t.split(d)),
            t.forEach(function(t) {
                e.hasOwnProperty(t) && (n[t] = e[t])
            }),
            n
        }
        ,
        m.copy = function(e, t) {
            return t = t || {},
            e ? (Object.keys(e).forEach(function(n) {
                m.exist(e[n]) && (t[n] = e[n])
            }),
            t) : t
        }
        ,
        m.copyWithNull = function(e, t) {
            return t = t || {},
            e ? (Object.keys(e).forEach(function(n) {
                (m.exist(e[n]) || m.isnull(e[n])) && (t[n] = e[n])
            }),
            t) : t
        }
        ,
        m.findObjIndexInArray = function(e, t) {
            e = e || [];
            var n = t.keyPath || "id"
              , r = -1;
            return e.some(function(e, s) {
                if (a(e, n) === t.value)
                    return r = s,
                    !0
            }),
            r
        }
        ,
        m.findObjInArray = function(e, t) {
            var n = m.findObjIndexInArray(e, t);
            return -1 === n ? null : e[n]
        }
        ,
        m.mergeObjArray = function() {
            var e = []
              , t = [].slice.call(arguments, 0, -1)
              , n = arguments[arguments.length - 1];
            m.isArray(n) && (t.push(n),
            n = {});
            var r, s = n.keyPath = n.keyPath || "id";
            for (n.sortPath = n.sortPath || s; !e.length && t.length; )
                e = (e = t.shift() || []).slice(0);
            return t.forEach(function(t) {
                t && t.forEach(function(t) {
                    -1 !== (r = m.findObjIndexInArray(e, {
                        keyPath: s,
                        value: a(t, s)
                    })) ? e[r] = m.merge({}, e[r], t) : e.push(t)
                })
            }),
            n.notSort || (e = m.sortObjArray(e, n)),
            e
        }
        ,
        m.cutObjArray = function(e) {
            var t = e.slice(0)
              , n = arguments.length
              , r = [].slice.call(arguments, 1, n - 1)
              , s = arguments[n - 1];
            m.isObject(s) || (r.push(s),
            s = {});
            var i, o = s.keyPath = s.keyPath || "id";
            return r.forEach(function(e) {
                m.isArray(e) || (e = [e]),
                e.forEach(function(e) {
                    e && (s.value = a(e, o),
                    -1 !== (i = m.findObjIndexInArray(t, s)) && t.splice(i, 1))
                })
            }),
            t
        }
        ,
        m.sortObjArray = function(e, t) {
            var n = (t = t || {}).sortPath || "id";
            o.insensitive = !!t.insensitive;
            var r, s, i, c = !!t.desc;
            return i = m.isFunction(t.compare) ? t.compare : function(e, t) {
                return r = a(e, n),
                s = a(t, n),
                c ? o(s, r) : o(r, s)
            }
            ,
            e.sort(i)
        }
        ,
        m.emptyFunc = function() {}
        ,
        m.isEmptyFunc = function(e) {
            return e === m.emptyFunc
        }
        ,
        m.notEmptyFunc = function(e) {
            return e !== m.emptyFunc
        }
        ,
        m.splice = function(e, t, n) {
            return [].splice.call(e, t, n)
        }
        ,
        m.reshape2d = function(e, t) {
            if (Array.isArray(e)) {
                m.verifyParamType("type", t, "number", "util::reshape2d");
                var n = e.length;
                if (n <= t)
                    return [e];
                for (var r = Math.ceil(n / t), s = [], i = 0; i < r; i++)
                    s.push(e.slice(i * t, (i + 1) * t));
                return s
            }
            return e
        }
        ,
        m.flatten2d = function(e) {
            if (Array.isArray(e)) {
                var t = [];
                return e.forEach(function(e) {
                    t = t.concat(e)
                }),
                t
            }
            return e
        }
        ,
        m.dropArrayDuplicates = function(e) {
            if (Array.isArray(e)) {
                for (var t = {}, n = []; e.length > 0; ) {
                    t[e.shift()] = !0
                }
                for (var r in t)
                    !0 === t[r] && n.push(r);
                return n
            }
            return e
        }
        ,
        m.onError = function(e) {
            throw new function(e) {
                "object" === (void 0 === e ? "undefined" : (0,
                i.default)(e)) ? (this.callFunc = e.callFunc || null,
                this.message = e.message || "UNKNOW ERROR") : this.message = e,
                this.time = new Date,
                this.timetag = +this.time
            }
            (e)
        }
        ,
        m.verifyParamPresent = function(e, t, n, r) {
            n = n || "";
            var s = !1;
            switch (m.typeOf(t)) {
            case "undefined":
            case "null":
                s = !0;
                break;
            case "string":
                "" === t && (s = !0);
                break;
            case "StrStrMap":
            case "object":
                Object.keys(t).length || (s = !0);
                break;
            case "array":
                t.length ? t.some(function(e) {
                    if (m.notexist(e))
                        return s = !0,
                        !0
                }) : s = !0
            }
            s && m.onParamAbsent(n + e, r)
        }
        ,
        m.onParamAbsent = function(e, t) {
            m.onParamError("缺少参数 " + e + ", 请确保参数不是 空字符串、空对象、空数组、null或undefined, 或数组的内容不是 null/undefined", t)
        }
        ,
        m.verifyParamAbsent = function(e, t, n, r) {
            n = n || "",
            void 0 !== t && m.onParamPresent(n + e, r)
        }
        ,
        m.onParamPresent = function(e, t) {
            m.onParamError("多余的参数 " + e, t)
        }
        ,
        m.verifyParamType = function(e, t, n, r) {
            var s = m.typeOf(t).toLowerCase();
            m.isArray(n) || (n = [n]);
            var i = !0;
            switch (-1 === (n = n.map(function(e) {
                return e.toLowerCase()
            })).indexOf(s) && (i = !1),
            s) {
            case "number":
                isNaN(t) && (i = !1);
                break;
            case "string":
                "numeric or numeric string" === n.join("") && (i = !!/^[0-9]+$/.test(t))
            }
            i || m.onParamInvalidType(e, n, "", r)
        }
        ,
        m.onParamInvalidType = function(e, t, n, r) {
            n = n || "",
            t = m.isArray(t) ? (t = t.map(function(e) {
                return '"' + e + '"'
            })).join(", ") : '"' + t + '"',
            m.onParamError('参数"' + n + e + '"类型错误, 合法的类型包括: [' + t + "]", r)
        }
        ,
        m.verifyParamValid = function(e, t, n, r) {
            m.isArray(n) || (n = [n]),
            -1 === n.indexOf(t) && m.onParamInvalidValue(e, n, r)
        }
        ,
        m.onParamInvalidValue = function(e, t, n) {
            m.isArray(t) || (t = [t]),
            t = t.map(function(e) {
                return '"' + e + '"'
            }),
            m.isArray(t) && (t = t.join(", ")),
            m.onParamError("参数 " + e + "值错误, 合法的值包括: [" + JSON.stringify(t) + "]", n)
        }
        ,
        m.verifyParamMin = function(e, t, n, r) {
            t < n && m.onParamError("参数" + e + "的值不能小于" + n, r)
        }
        ,
        m.verifyParamMax = function(e, t, n, r) {
            t > n && m.onParamError("参数" + e + "的值不能大于" + n, r)
        }
        ,
        m.verifyArrayMax = function(e, t, n, r) {
            t.length > n && m.onParamError("参数" + e + "的长度不能大于" + n, r)
        }
        ,
        m.verifyEmail = (u = /^\S+@\S+$/,
        function(e, t, n) {
            u.test(t) || m.onParamError("参数" + e + "邮箱格式错误, 合法格式必须包含@符号, @符号前后至少要各有一个字符", n)
        }
        ),
        m.verifyTel = function() {
            var e = /^[+\-()\d]+$/;
            return function(t, n, r) {
                e.test(n) || m.onParamError("参数" + t + "电话号码格式错误, 合法字符包括+、-、英文括号和数字", r)
            }
        }(),
        m.verifyBirth = function() {
            var e = /^(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
            return function(t, n, r) {
                e.test(n) || m.onParamError("参数" + t + '生日格式错误, 合法为"yyyy-MM-dd"', r)
            }
        }(),
        m.onParamError = function(e, t) {
            m.onError({
                message: e,
                callFunc: t
            })
        }
        ,
        m.verifyOptions = function(e, t, n, r, s) {
            if (e = e || {},
            t && (m.isString(t) && (t = t.split(d)),
            m.isArray(t))) {
                "boolean" != typeof n && (s = n || null,
                n = !0,
                r = "");
                var i = n ? m.verifyParamPresent : m.verifyParamAbsent;
                t.forEach(function(t) {
                    i.call(m, t, e[t], r, s)
                })
            }
            return e
        }
        ,
        m.verifyParamAtLeastPresentOne = function(e, t, n) {
            t && (m.isString(t) && (t = t.split(d)),
            m.isArray(t) && (t.some(function(t) {
                return m.exist(e[t])
            }) || m.onParamError("以下参数[" + t.join(", ") + "]至少需要传入一个", n)))
        }
        ,
        m.verifyParamPresentJustOne = function(e, t, n) {
            t && (m.isString(t) && (t = t.split(d)),
            m.isArray(t) && 1 !== t.reduce(function(t, n) {
                return m.exist(e[n]) && t++,
                t
            }, 0) && m.onParamError("以下参数[" + t.join(", ") + "]必须且只能传入一个", n))
        }
        ,
        m.verifyBooleanWithDefault = function(e, t, n, r, s) {
            m.undef(n) && (n = !0),
            d.test(t) && (t = t.split(d)),
            m.isArray(t) ? t.forEach(function(t) {
                m.verifyBooleanWithDefault(e, t, n, r, s)
            }) : void 0 === e[t] ? e[t] = n : m.isBoolean(e[t]) || m.onParamInvalidType(t, "boolean", r, s)
        }
        ,
        m.verifyFileInput = function(e, t) {
            return m.verifyParamPresent("fileInput", e, "", t),
            m.isString(e) && ((e = "undefined" == typeof document ? void 0 : document.getElementById(e)) || m.onParamError("找不到要上传的文件对应的input, 请检查fileInput id " + e, t)),
            e.tagName && "input" === e.tagName.toLowerCase() && "file" === e.type.toLowerCase() || m.onParamError("请提供正确的 fileInput, 必须为 file 类型的 input 节点 tagname:" + e.tagName + ", filetype:" + e.type, t),
            e
        }
        ,
        m.verifyFileType = function(e, t) {
            m.verifyParamValid("type", e, m.validFileTypes, t)
        }
        ,
        m.verifyCallback = function(e, t, n) {
            d.test(t) && (t = t.split(d)),
            m.isArray(t) ? t.forEach(function(t) {
                m.verifyCallback(e, t, n)
            }) : e[t] ? m.isFunction(e[t]) || m.onParamInvalidType(t, "function", "", n) : e[t] = m.emptyFunc
        }
        ,
        m.verifyFileUploadCallback = function(e, t) {
            m.verifyCallback(e, "uploadprogress uploaddone uploaderror uploadcancel", t)
        }
        ,
        m.validFileTypes = ["image", "audio", "video", "file"],
        m.validFileExts = {
            image: ["bmp", "gif", "jpg", "jpeg", "jng", "png", "webp"],
            audio: ["mp3", "wav", "aac", "wma", "wmv", "amr", "mp2", "flac", "vorbis", "ac3"],
            video: ["mp4", "rm", "rmvb", "wmv", "avi", "mpg", "mpeg"]
        },
        m.filterFiles = function(e, t) {
            var n, r, s = "file" === (t = t.toLowerCase()), i = [];
            return [].forEach.call(e, function(e) {
                if (s)
                    i.push(e);
                else if (n = e.name.slice(e.name.lastIndexOf(".") + 1),
                (r = e.type.split("/"))[0] && r[1]) {
                    (r[0].toLowerCase() === t || -1 !== m.validFileExts[t].indexOf(n)) && i.push(e)
                }
            }),
            i
        }
        ;
        var p, f, g = m.supportFormData = m.notundef(l.FormData);
        m.getFileName = function(e) {
            return e = m.verifyFileInput(e),
            g ? e.files[0].name : e.value.slice(e.value.lastIndexOf("\\") + 1)
        }
        ,
        m.getFileInfo = (p = {
            ppt: 1,
            pptx: 2,
            pdf: 3
        },
        function(e) {
            var t = {};
            if (!(e = m.verifyFileInput(e)).files)
                return t;
            var n = e.files[0];
            return g && (t.name = n.name,
            t.size = n.size,
            t.type = n.name.match(/\.(\w+)$/),
            t.type = t.type && t.type[1].toLowerCase(),
            t.transcodeType = p[t.type] || 0),
            t
        }
        ),
        m.sizeText = (f = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "BB"],
        function(e) {
            var t, n = 0;
            do {
                t = (e = Math.floor(100 * e) / 100) + f[n],
                e /= 1024,
                n++
            } while (e > 1);
            return t
        }
        ),
        m.promises2cmds = function(e) {
            return e.map(function(e) {
                return e.cmd
            })
        }
        ,
        m.objs2accounts = function(e) {
            return e.map(function(e) {
                return e.account
            })
        }
        ,
        m.teams2ids = function(e) {
            return e.map(function(e) {
                return e.teamId
            })
        }
        ,
        m.objs2ids = function(e) {
            return e.map(function(e) {
                return e.id
            })
        }
        ,
        m.getMaxUpdateTime = function(e) {
            var t = e.map(function(e) {
                return +e.updateTime
            });
            return Math.max.apply(Math, t)
        }
        ,
        m.genCheckUniqueFunc = function(e, t) {
            return e = e || "id",
            t = t || 1e3,
            function(t) {
                this.uniqueSet = this.uniqueSet || {},
                this.uniqueSet[e] = this.uniqueSet[e] || {};
                var n = this.uniqueSet[e]
                  , r = t[e];
                return !n[r] && (n[r] = !0,
                !0)
            }
        }
        ,
        m.fillPropertyWithDefault = function(e, t, n) {
            return !!m.undef(e[t]) && (e[t] = n,
            !0)
        }
        ,
        e.exports = m
    }
    , , , , , function(e, t, n) {
        "use strict";
        var r = {
            info: {
                hash: "'ecb7e94a9373d41440e2efaf2da695b2028e27af",
                shortHash: "ecb7e94a9'",
                version: "6.8.0",
                sdkVersion: "70",
                nrtcVersion: "4.8.0",
                nrtcSdkVersion: "1",
                protocolVersion: 1
            },
            agentVersion: "2.8.0.906",
            lbsUrl: "https://lbs.netease.im/lbs/webconf.jsp",
            roomserver: "roomserver.netease.im",
            connectTimeout: 8e3,
            xhrTimeout: 8e3,
            socketTimeout: 8e3,
            reconnectionDelay: 1600,
            reconnectionDelayMax: 8e3,
            reconnectionJitter: .01,
            reconnectiontimer: null,
            heartbeatInterval: 8e3,
            cmdTimeout: 8e3,
            defaultReportUrl: "https://dr.netease.im/1.gif",
            isWeixinApp: !1,
            isNodejs: !1,
            isRN: !1,
            PUSHTOKEN: "",
            PUSHCONFIG: {},
            CLIENTTYPE: 16,
            PushPermissionAsked: !1,
            iosPushConfig: null,
            androidPushConfig: null,
            netDetectAddr: "https://roomserver-dev.netease.im/v1/sdk/detect/local",
            optionDefaultLinkUrl: "",
            defaultLinkUrl: "weblink.netease.im",
            wxDefaultLinkUrl: "wlnimsc0.netease.im",
            getDefaultLinkUrl: function(e) {
                var t = r.optionDefaultLinkUrl || (r.isWeixinApp ? r.wxDefaultLinkUrl : r.defaultLinkUrl);
                if (!t)
                    return !1;
                var n = e ? "https" : "http"
                  , s = e ? "443" : "80"
                  , i = t;
                return -1 === t.indexOf("http") && (i = n + "://" + i),
                -1 === t.indexOf(":") && (i = i + ":" + s),
                i
            }
        };
        r.weixinNetcall = r.nrtcNetcall = {
            checkSumUrl: "https://nrtc.netease.im/demo/getChecksum.action",
            getChannelInfoUrl: "https://nrtc.netease.im/nrtc/getChannelInfos.action"
        },
        r.formatSocketUrl = function(e) {
            var t = e.url
              , n = e.secure ? "https" : "http";
            return -1 === t.indexOf("http") ? n + "://" + t : t
        }
        ,
        r.uploadUrl = "https://nos.netease.com",
        r.chunkUploadUrl = null,
        r.commonMaxSize = 104857600,
        r.chunkSize = 4194304,
        r.chunkMaxSize = 4194304e4,
        r.replaceUrl = "https://{bucket}-nosdn.netease.im/{object}",
        r.downloadHost = "nos.netease.com",
        r.downloadUrl = "https://{bucket}-nosdn.netease.im/{object}",
        r.httpsEnabled = !1,
        r.threshold = 0,
        r.genUploadUrl = function(e) {
            return r.uploadUrl + "/" + e
        }
        ,
        r.genChunkUploadUrl = function(e) {
            return r.chunkUploadUrl ? r.chunkUploadUrl + "/" + e.bucket + "/" + e.objectName : ""
        }
        ,
        r.genDownloadUrl = function(e, t) {
            var n = e.bucket
              , s = (e.tag,
            e.expireSec)
              , i = +new Date
              , o = s ? "&survivalTime=" + s : ""
              , a = r.replaceUrl + "?createTime=" + i + o;
            return (a = r.genNosProtocolUrl(a)).replace("{bucket}", n).replace("{object}", t)
        }
        ,
        r.genFileUrl = function(e) {
            var t = e.bucket
              , n = e.objectName;
            return r.genNosProtocolUrl(r.replaceUrl).replace("{bucket}", t).replace("{object}", n)
        }
        ,
        r.genNosProtocolUrl = function(e) {
            return /^http/.test(e) ? r.httpsEnabled && 0 !== e.indexOf("https://") && (e = e.replace("http", "https")) : e = r.httpsEnabled ? "https://" + e : "http://" + e,
            e
        }
        ,
        e.exports = r
    }
    , function(e, t) {
        var n = e.exports = {
            version: "2.5.5"
        };
        "number" == typeof __e && (__e = n)
    }
    , function(e, t, n) {
        var r = n(45)("wks")
          , s = n(31)
          , i = n(8).Symbol
          , o = "function" == typeof i;
        (e.exports = function(e) {
            return r[e] || (r[e] = o && i[e] || (o ? i : s)("Symbol." + e))
        }
        ).store = r
    }
    , function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }
    , function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = o(n(110))
          , s = o(n(100))
          , i = "function" == typeof s.default && "symbol" == typeof r.default ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : typeof e
        }
        ;
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = "function" == typeof s.default && "symbol" === i(r.default) ? function(e) {
            return void 0 === e ? "undefined" : i(e)
        }
        : function(e) {
            return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : void 0 === e ? "undefined" : i(e)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty
          , s = "~";
        function i() {}
        function o(e, t, n) {
            this.fn = e,
            this.context = t,
            this.once = n || !1
        }
        function a() {
            this._events = new i,
            this._eventsCount = 0
        }
        Object.create && (i.prototype = Object.create(null),
        (new i).__proto__ || (s = !1)),
        a.prototype.eventNames = function() {
            var e, t, n = [];
            if (0 === this._eventsCount)
                return n;
            for (t in e = this._events)
                r.call(e, t) && n.push(s ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
        }
        ,
        a.prototype.listeners = function(e, t) {
            var n = s ? s + e : e
              , r = this._events[n];
            if (t)
                return !!r;
            if (!r)
                return [];
            if (r.fn)
                return [r.fn];
            for (var i = 0, o = r.length, a = new Array(o); i < o; i++)
                a[i] = r[i].fn;
            return a
        }
        ,
        a.prototype.emit = function(e, t, n, r, i, o) {
            var a = s ? s + e : e;
            if (!this._events[a])
                return !1;
            var c, u, m = this._events[a], l = arguments.length;
            if (m.fn) {
                switch (m.once && this.removeListener(e, m.fn, void 0, !0),
                l) {
                case 1:
                    return m.fn.call(m.context),
                    !0;
                case 2:
                    return m.fn.call(m.context, t),
                    !0;
                case 3:
                    return m.fn.call(m.context, t, n),
                    !0;
                case 4:
                    return m.fn.call(m.context, t, n, r),
                    !0;
                case 5:
                    return m.fn.call(m.context, t, n, r, i),
                    !0;
                case 6:
                    return m.fn.call(m.context, t, n, r, i, o),
                    !0
                }
                for (u = 1,
                c = new Array(l - 1); u < l; u++)
                    c[u - 1] = arguments[u];
                m.fn.apply(m.context, c)
            } else {
                var d, p = m.length;
                for (u = 0; u < p; u++)
                    switch (m[u].once && this.removeListener(e, m[u].fn, void 0, !0),
                    l) {
                    case 1:
                        m[u].fn.call(m[u].context);
                        break;
                    case 2:
                        m[u].fn.call(m[u].context, t);
                        break;
                    case 3:
                        m[u].fn.call(m[u].context, t, n);
                        break;
                    case 4:
                        m[u].fn.call(m[u].context, t, n, r);
                        break;
                    default:
                        if (!c)
                            for (d = 1,
                            c = new Array(l - 1); d < l; d++)
                                c[d - 1] = arguments[d];
                        m[u].fn.apply(m[u].context, c)
                    }
            }
            return !0
        }
        ,
        a.prototype.on = function(e, t, n) {
            var r = new o(t,n || this)
              , i = s ? s + e : e;
            return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], r] : this._events[i].push(r) : (this._events[i] = r,
            this._eventsCount++),
            this
        }
        ,
        a.prototype.once = function(e, t, n) {
            var r = new o(t,n || this,!0)
              , i = s ? s + e : e;
            return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], r] : this._events[i].push(r) : (this._events[i] = r,
            this._eventsCount++),
            this
        }
        ,
        a.prototype.removeListener = function(e, t, n, r) {
            var o = s ? s + e : e;
            if (!this._events[o])
                return this;
            if (!t)
                return 0 == --this._eventsCount ? this._events = new i : delete this._events[o],
                this;
            var a = this._events[o];
            if (a.fn)
                a.fn !== t || r && !a.once || n && a.context !== n || (0 == --this._eventsCount ? this._events = new i : delete this._events[o]);
            else {
                for (var c = 0, u = [], m = a.length; c < m; c++)
                    (a[c].fn !== t || r && !a[c].once || n && a[c].context !== n) && u.push(a[c]);
                u.length ? this._events[o] = 1 === u.length ? u[0] : u : 0 == --this._eventsCount ? this._events = new i : delete this._events[o]
            }
            return this
        }
        ,
        a.prototype.removeAllListeners = function(e) {
            var t;
            return e ? (t = s ? s + e : e,
            this._events[t] && (0 == --this._eventsCount ? this._events = new i : delete this._events[t])) : (this._events = new i,
            this._eventsCount = 0),
            this
        }
        ,
        a.prototype.off = a.prototype.removeListener,
        a.prototype.addListener = a.prototype.on,
        a.prototype.setMaxListeners = function() {
            return this
        }
        ,
        a.prefixed = s,
        a.EventEmitter = a,
        e.exports = a
    }
    , function(e, t, n) {
        var r = n(14)
          , s = n(66)
          , i = n(47)
          , o = Object.defineProperty;
        t.f = n(17) ? Object.defineProperty : function(e, t, n) {
            if (r(e),
            t = i(t, !0),
            r(n),
            s)
                try {
                    return o(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported!");
            return "value"in n && (e[t] = n.value),
            e
        }
    }
    , , function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.url2origin = t.uniqueID = t.off = t.removeEventListener = t.on = t.addEventListener = t.format = t.regWhiteSpace = t.regBlank = t.emptyFunc = t.f = t.emptyObj = t.o = void 0;
            var r, s = n(9), i = (r = s) && r.__esModule ? r : {
                default: r
            };
            t.getGlobal = o,
            t.detectCSSFeature = function(e) {
                var t = !1
                  , n = "Webkit Moz ms O".split(" ");
                if ("undefined" == typeof document)
                    return void console.log("error:fn:detectCSSFeature document is undefined");
                var r = document.createElement("div")
                  , s = null;
                e = e.toLowerCase(),
                void 0 !== r.style[e] && (t = !0);
                if (!1 === t) {
                    s = e.charAt(0).toUpperCase() + e.substr(1);
                    for (var i = 0; i < n.length; i++)
                        if (void 0 !== r.style[n[i] + s]) {
                            t = !0;
                            break
                        }
                }
                return t
            }
            ,
            t.fix = a,
            t.getYearStr = c,
            t.getMonthStr = u,
            t.getDayStr = m,
            t.getHourStr = l,
            t.getMinuteStr = d,
            t.getSecondStr = p,
            t.getMillisecondStr = f,
            t.dateFromDateTimeLocal = function(e) {
                return e = "" + e,
                new Date(e.replace(/-/g, "/").replace("T", " "))
            }
            ,
            t.getClass = y,
            t.typeOf = v,
            t.isString = b,
            t.isNumber = function(e) {
                return "number" === v(e)
            }
            ,
            t.isBoolean = function(e) {
                return "boolean" === v(e)
            }
            ,
            t.isArray = T,
            t.isFunction = M,
            t.isDate = S,
            t.isRegExp = function(e) {
                return "regexp" === v(e)
            }
            ,
            t.isError = function(e) {
                return "error" === v(e)
            }
            ,
            t.isnull = k,
            t.notnull = C,
            t.undef = I,
            t.notundef = P,
            t.exist = O,
            t.notexist = x,
            t.isObject = w,
            t.isEmpty = function(e) {
                return x(e) || (b(e) || T(e)) && 0 === e.length
            }
            ,
            t.containsNode = function(e, t) {
                if (e === t)
                    return !0;
                for (; t.parentNode; ) {
                    if (t.parentNode === e)
                        return !0;
                    t = t.parentNode
                }
                return !1
            }
            ,
            t.calcHeight = function(e) {
                var t = e.parentNode || ("undefined" == typeof document ? null : document.body);
                if (!t)
                    return 0;
                (e = e.cloneNode(!0)).style.display = "block",
                e.style.opacity = 0,
                e.style.height = "auto",
                t.appendChild(e);
                var n = e.offsetHeight;
                return t.removeChild(e),
                n
            }
            ,
            t.remove = function(e) {
                e.parentNode && e.parentNode.removeChild(e)
            }
            ,
            t.dataset = function(e, t, n) {
                if (!O(n))
                    return e.getAttribute("data-" + t);
                e.setAttribute("data-" + t, n)
            }
            ,
            t.target = function(e) {
                return e.target || e.srcElement
            }
            ,
            t.createIframe = function(e) {
                if ("undefined" == typeof document)
                    return;
                var t;
                if ((e = e || {}).name)
                    try {
                        (t = document.createElement('<iframe name="' + e.name + '"></iframe>')).frameBorder = 0
                    } catch (n) {
                        (t = document.createElement("iframe")).name = e.name
                    }
                else
                    t = document.createElement("iframe");
                e.visible || (t.style.display = "none");
                M(e.onload) && _(t, "load", function n(r) {
                    if (!t.src)
                        return;
                    e.multi || U(t, "load", n);
                    e.onload(r)
                });
                (e.parent || document.body).appendChild(t);
                var n = e.src || "about:blank";
                return setTimeout(function() {
                    t.src = n
                }, 0),
                t
            }
            ,
            t.html2node = function(e) {
                if ("undefined" == typeof document)
                    return;
                var t = document.createElement("div");
                t.innerHTML = e;
                var n = []
                  , r = void 0
                  , s = void 0;
                if (t.children)
                    for (r = 0,
                    s = t.children.length; r < s; r++)
                        n.push(t.children[r]);
                else
                    for (r = 0,
                    s = t.childNodes.length; r < s; r++) {
                        var i = t.childNodes[r];
                        1 === i.nodeType && n.push(i)
                    }
                return n.length > 1 ? t : n[0]
            }
            ,
            t.scrollTop = function(e) {
                "undefined" != typeof document && O(e) && (document.documentElement.scrollTop = document.body.scrollTop = e);
                return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
            }
            ,
            t.forOwn = R,
            t.mixin = j,
            t.isJSON = F,
            t.parseJSON = function e(t) {
                try {
                    F(t) && (t = JSON.parse(t)),
                    w(t) && R(t, function(n, r) {
                        switch (v(r)) {
                        case "string":
                        case "object":
                            t[n] = e(r)
                        }
                    })
                } catch (e) {
                    console.log("error:", e)
                }
                return t
            }
            ,
            t.simpleClone = function(e) {
                var t = []
                  , n = JSON.stringify(e, function(e, n) {
                    if ("object" === (void 0 === n ? "undefined" : (0,
                    i.default)(n)) && null !== n) {
                        if (-1 !== t.indexOf(n))
                            return;
                        t.push(n)
                    }
                    return n
                });
                return JSON.parse(n)
            }
            ,
            t.merge = function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                return n.forEach(function(t) {
                    j(e, t)
                }),
                e
            }
            ,
            t.fillUndef = function(e, t) {
                return R(t, function(t, n) {
                    I(e[t]) && (e[t] = n)
                }),
                e
            }
            ,
            t.checkWithDefault = function(e, t, n) {
                var r = e[t] || e[t.toLowerCase()];
                x(r) && (r = n,
                e[t] = r);
                return r
            }
            ,
            t.fetch = function(e, t) {
                return R(e, function(n, r) {
                    O(t[n]) && (e[n] = t[n])
                }),
                e
            }
            ,
            t.string2object = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ","
                  , n = {};
                return e.split(t).forEach(function(e) {
                    var t = e.split("=")
                      , r = t.shift();
                    r && (n[decodeURIComponent(r)] = decodeURIComponent(t.join("=")))
                }),
                n
            }
            ,
            t.object2string = D,
            t.genUrlSep = function(e) {
                return e.indexOf("?") < 0 ? "?" : "&"
            }
            ,
            t.object2query = function(e) {
                return D(e, "&", !0)
            }
            ,
            t.isFileInput = L,
            t.getKeys = function(e, t) {
                var n = Object.keys(e);
                t && n.sort(function(t, n) {
                    var r = L(e[t])
                      , s = L(e[n]);
                    return r === s ? 0 : r ? 1 : -1
                });
                return n
            }
            ;
            t.o = {},
            t.emptyObj = {},
            t.f = function() {}
            ,
            t.emptyFunc = function() {}
            ,
            t.regBlank = /\s+/gi,
            t.regWhiteSpace = /\s+/gi;
            function o() {
                return "undefined" != typeof window ? window : void 0 !== e ? e : {}
            }
            function a(e, t) {
                t = t || 2;
                for (var n = "" + e; n.length < t; )
                    n = "0" + n;
                return n
            }
            function c(e) {
                return "" + e.getFullYear()
            }
            function u(e) {
                return a(e.getMonth() + 1)
            }
            function m(e) {
                return a(e.getDate())
            }
            function l(e) {
                return a(e.getHours())
            }
            function d(e) {
                return a(e.getMinutes())
            }
            function p(e) {
                return a(e.getSeconds())
            }
            function f(e) {
                return a(e.getMilliseconds(), 3)
            }
            var g, h;
            t.format = (g = /yyyy|MM|dd|hh|mm|ss|SSS/g,
            h = {
                yyyy: c,
                MM: u,
                dd: m,
                hh: l,
                mm: d,
                ss: p,
                SSS: f
            },
            function(e, t) {
                return e = new Date(e),
                isNaN(+e) ? "invalid date" : (t = t || "yyyy-MM-dd").replace(g, function(t) {
                    return h[t](e)
                })
            }
            );
            function y(e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            }
            function v(e) {
                return y(e).toLowerCase()
            }
            function b(e) {
                return "string" === v(e)
            }
            function T(e) {
                return "array" === v(e)
            }
            function M(e) {
                return "function" === v(e)
            }
            function S(e) {
                return "date" === v(e)
            }
            function k(e) {
                return null === e
            }
            function C(e) {
                return null !== e
            }
            function I(e) {
                return void 0 === e
            }
            function P(e) {
                return void 0 !== e
            }
            function O(e) {
                return P(e) && C(e)
            }
            function x(e) {
                return I(e) || k(e)
            }
            function w(e) {
                return O(e) && "object" === v(e)
            }
            var A = t.addEventListener = function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            }
              , _ = t.on = A
              , E = t.removeEventListener = function(e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            }
              , U = t.off = E;
            function R() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
                  , n = arguments[2];
                for (var r in e)
                    e.hasOwnProperty(r) && t.call(n, r, e[r])
            }
            function j(e, t) {
                R(t, function(t, n) {
                    e[t] = n
                })
            }
            var N;
            t.uniqueID = (N = 0,
            function() {
                return "" + N++
            }
            );
            function F(e) {
                return b(e) && 0 === e.indexOf("{") && e.lastIndexOf("}") === e.length - 1
            }
            function D(e, t, n) {
                if (!e)
                    return "";
                var r = [];
                return R(e, function(e, t) {
                    M(t) || (S(t) ? t = t.getTime() : T(t) ? t = t.join(",") : w(t) && (t = JSON.stringify(t)),
                    n && (t = encodeURIComponent(t)),
                    r.push(encodeURIComponent(e) + "=" + t))
                }),
                r.join(t || ",")
            }
            t.url2origin = function() {
                var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
                return function(t) {
                    return e.test(t || "") ? RegExp.$1.toLowerCase() : ""
                }
            }();
            function L(e) {
                var t = o();
                return e.tagName && "INPUT" === e.tagName.toUpperCase() || t.Blob && e instanceof t.Blob
            }
        }
        ).call(this, n(33))
    }
    , function(e, t, n) {
        var r = n(19);
        e.exports = function(e) {
            if (!r(e))
                throw TypeError(e + " is not an object!");
            return e
        }
    }
    , function(e, t, n) {
        var r = n(8)
          , s = n(6)
          , i = n(35)
          , o = n(20)
          , a = n(16)
          , c = function(e, t, n) {
            var u, m, l, d = e & c.F, p = e & c.G, f = e & c.S, g = e & c.P, h = e & c.B, y = e & c.W, v = p ? s : s[t] || (s[t] = {}), b = v.prototype, T = p ? r : f ? r[t] : (r[t] || {}).prototype;
            for (u in p && (n = t),
            n)
                (m = !d && T && void 0 !== T[u]) && a(v, u) || (l = m ? T[u] : n[u],
                v[u] = p && "function" != typeof T[u] ? n[u] : h && m ? i(l, r) : y && T[u] == l ? function(e) {
                    var t = function(t, n, r) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t,n)
                            }
                            return new e(t,n,r)
                        }
                        return e.apply(this, arguments)
                    };
                    return t.prototype = e.prototype,
                    t
                }(l) : g && "function" == typeof l ? i(Function.call, l) : l,
                g && ((v.virtual || (v.virtual = {}))[u] = l,
                e & c.R && b && !b[u] && o(b, u, l)))
        };
        c.F = 1,
        c.G = 2,
        c.S = 4,
        c.P = 8,
        c.B = 16,
        c.W = 32,
        c.U = 64,
        c.R = 128,
        e.exports = c
    }
    , function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    }
    , function(e, t, n) {
        e.exports = !n(22)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }
    , function(e, t, n) {
        var r = n(63)
          , s = n(48);
        e.exports = function(e) {
            return r(s(e))
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }
    , function(e, t, n) {
        var r = n(11)
          , s = n(27);
        e.exports = n(17) ? function(e, t, n) {
            return r.f(e, t, s(1, n))
        }
        : function(e, t, n) {
            return e[t] = n,
            e
        }
    }
    , function(e, t, n) {
        "use strict";
        (function(t) {
            var r, s = n(9), i = (r = s) && r.__esModule ? r : {
                default: r
            };
            var o = function() {
                var e = "object" === (void 0 === t ? "undefined" : (0,
                i.default)(t)) ? t : window
                  , n = Math.pow(2, 53) - 1
                  , r = /\bOpera/
                  , s = Object.prototype
                  , o = s.hasOwnProperty
                  , a = s.toString;
                function c(e) {
                    return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
                }
                function u(e) {
                    return e = f(e),
                    /^(?:webOS|i(?:OS|P))/.test(e) ? e : c(e)
                }
                function m(e, t) {
                    for (var n in e)
                        o.call(e, n) && t(e[n], n, e)
                }
                function l(e) {
                    return null == e ? c(e) : a.call(e).slice(8, -1)
                }
                function d(e) {
                    return String(e).replace(/([ -])(?!$)/g, "$1?")
                }
                function p(e, t) {
                    var r = null;
                    return function(e, t) {
                        var r = -1
                          , s = e ? e.length : 0;
                        if ("number" == typeof s && s > -1 && s <= n)
                            for (; ++r < s; )
                                t(e[r], r, e);
                        else
                            m(e, t)
                    }(e, function(n, s) {
                        r = t(r, n, s, e)
                    }),
                    r
                }
                function f(e) {
                    return String(e).replace(/^ +| +$/g, "")
                }
                return function t(n) {
                    var s = e
                      , o = n && "object" === (void 0 === n ? "undefined" : (0,
                    i.default)(n)) && "String" != l(n);
                    o && (s = n,
                    n = null);
                    var c = s.navigator || {}
                      , g = c.userAgent || "";
                    n || (n = g);
                    var h, y, v, b, T, M = o ? !!c.likeChrome : /\bChrome\b/.test(n) && !/internal|\n/i.test(a.toString()), S = o ? "Object" : "ScriptBridgingProxyObject", k = o ? "Object" : "Environment", C = o && s.java ? "JavaPackage" : l(s.java), I = o ? "Object" : "RuntimeObject", P = /\bJava/.test(C) && s.java, O = P && l(s.environment) == k, x = P ? "a" : "α", w = P ? "b" : "β", A = s.document || {}, _ = s.operamini || s.opera, E = r.test(E = o && _ ? _["[[Class]]"] : l(_)) ? E : _ = null, U = n, R = [], j = null, N = n == g, F = N && _ && "function" == typeof _.version && _.version(), D = p([{
                        label: "EdgeHTML",
                        pattern: "Edge"
                    }, "Trident", {
                        label: "WebKit",
                        pattern: "AppleWebKit"
                    }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], function(e, t) {
                        return e || RegExp("\\b" + (t.pattern || d(t)) + "\\b", "i").exec(n) && (t.label || t)
                    }), L = function(e) {
                        return p(e, function(e, t) {
                            return e || RegExp("\\b" + (t.pattern || d(t)) + "\\b", "i").exec(n) && (t.label || t)
                        })
                    }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                        label: "Microsoft Edge",
                        pattern: "Edge"
                    }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                        label: "Samsung Internet",
                        pattern: "SamsungBrowser"
                    }, "SeaMonkey", {
                        label: "Silk",
                        pattern: "(?:Cloud9|Silk-Accelerated)"
                    }, "Sleipnir", "SlimBrowser", {
                        label: "SRWare Iron",
                        pattern: "Iron"
                    }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                        label: "Opera Mini",
                        pattern: "OPiOS"
                    }, "Opera", {
                        label: "Opera",
                        pattern: "OPR"
                    }, "Chrome", {
                        label: "Chrome Mobile",
                        pattern: "(?:CriOS|CrMo)"
                    }, {
                        label: "Firefox",
                        pattern: "(?:Firefox|Minefield)"
                    }, {
                        label: "Firefox for iOS",
                        pattern: "FxiOS"
                    }, {
                        label: "IE",
                        pattern: "IEMobile"
                    }, {
                        label: "IE",
                        pattern: "MSIE"
                    }, "Safari"]), B = W([{
                        label: "BlackBerry",
                        pattern: "BB10"
                    }, "BlackBerry", {
                        label: "Galaxy S",
                        pattern: "GT-I9000"
                    }, {
                        label: "Galaxy S2",
                        pattern: "GT-I9100"
                    }, {
                        label: "Galaxy S3",
                        pattern: "GT-I9300"
                    }, {
                        label: "Galaxy S4",
                        pattern: "GT-I9500"
                    }, {
                        label: "Galaxy S5",
                        pattern: "SM-G900"
                    }, {
                        label: "Galaxy S6",
                        pattern: "SM-G920"
                    }, {
                        label: "Galaxy S6 Edge",
                        pattern: "SM-G925"
                    }, {
                        label: "Galaxy S7",
                        pattern: "SM-G930"
                    }, {
                        label: "Galaxy S7 Edge",
                        pattern: "SM-G935"
                    }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                        label: "Kindle Fire",
                        pattern: "(?:Cloud9|Silk-Accelerated)"
                    }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                        label: "Wii U",
                        pattern: "WiiU"
                    }, "Wii", "Xbox One", {
                        label: "Xbox 360",
                        pattern: "Xbox"
                    }, "Xoom"]), q = function(e) {
                        return p(e, function(e, t, r) {
                            return e || (t[B] || t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(B)] || RegExp("\\b" + d(r) + "(?:\\b|\\w*\\d)", "i").exec(n)) && r
                        })
                    }({
                        Apple: {
                            iPad: 1,
                            iPhone: 1,
                            iPod: 1
                        },
                        Archos: {},
                        Amazon: {
                            Kindle: 1,
                            "Kindle Fire": 1
                        },
                        Asus: {
                            Transformer: 1
                        },
                        "Barnes & Noble": {
                            Nook: 1
                        },
                        BlackBerry: {
                            PlayBook: 1
                        },
                        Google: {
                            "Google TV": 1,
                            Nexus: 1
                        },
                        HP: {
                            TouchPad: 1
                        },
                        HTC: {},
                        LG: {},
                        Microsoft: {
                            Xbox: 1,
                            "Xbox One": 1
                        },
                        Motorola: {
                            Xoom: 1
                        },
                        Nintendo: {
                            "Wii U": 1,
                            Wii: 1
                        },
                        Nokia: {
                            Lumia: 1
                        },
                        Samsung: {
                            "Galaxy S": 1,
                            "Galaxy S2": 1,
                            "Galaxy S3": 1,
                            "Galaxy S4": 1
                        },
                        Sony: {
                            PlayStation: 1,
                            "PlayStation Vita": 1
                        }
                    }), H = function(e) {
                        return p(e, function(e, t) {
                            var r = t.pattern || d(t);
                            return !e && (e = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(n)) && (e = function(e, t, n) {
                                var r = {
                                    "10.0": "10",
                                    6.4: "10 Technical Preview",
                                    6.3: "8.1",
                                    6.2: "8",
                                    6.1: "Server 2008 R2 / 7",
                                    "6.0": "Server 2008 / Vista",
                                    5.2: "Server 2003 / XP 64-bit",
                                    5.1: "XP",
                                    5.01: "2000 SP1",
                                    "5.0": "2000",
                                    "4.0": "NT",
                                    "4.90": "ME"
                                };
                                return t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r),
                                e = String(e),
                                t && n && (e = e.replace(RegExp(t, "i"), n)),
                                e = u(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                            }(e, r, t.label || t)),
                            e
                        })
                    }(["Windows Phone", "Android", "CentOS", {
                        label: "Chrome OS",
                        pattern: "CrOS"
                    }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
                    function W(e) {
                        return p(e, function(e, t) {
                            var r = t.pattern || d(t);
                            return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(n) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(n) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(n)) && ((e = String(t.label && !RegExp(r, "i").test(t.label) ? t.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]),
                            t = t.label || t,
                            e = u(e[0].replace(RegExp(r, "i"), t).replace(RegExp("; *(?:" + t + "[_-])?", "i"), " ").replace(RegExp("(" + t + ")[-_.]?(\\w)", "i"), "$1 $2"))),
                            e
                        })
                    }
                    if (D && (D = [D]),
                    q && !B && (B = W([q])),
                    (h = /\bGoogle TV\b/.exec(B)) && (B = h[0]),
                    /\bSimulator\b/i.test(n) && (B = (B ? B + " " : "") + "Simulator"),
                    "Opera Mini" == L && /\bOPiOS\b/.test(n) && R.push("running in Turbo/Uncompressed mode"),
                    "IE" == L && /\blike iPhone OS\b/.test(n) ? (q = (h = t(n.replace(/like iPhone OS/, ""))).manufacturer,
                    B = h.product) : /^iP/.test(B) ? (L || (L = "Safari"),
                    H = "iOS" + ((h = / OS ([\d_]+)/i.exec(n)) ? " " + h[1].replace(/_/g, ".") : "")) : "Konqueror" != L || /buntu/i.test(H) ? q && "Google" != q && (/Chrome/.test(L) && !/\bMobile Safari\b/i.test(n) || /\bVita\b/.test(B)) || /\bAndroid\b/.test(H) && /^Chrome/.test(L) && /\bVersion\//i.test(n) ? (L = "Android Browser",
                    H = /\bAndroid\b/.test(H) ? H : "Android") : "Silk" == L ? (/\bMobi/i.test(n) || (H = "Android",
                    R.unshift("desktop mode")),
                    /Accelerated *= *true/i.test(n) && R.unshift("accelerated")) : "PaleMoon" == L && (h = /\bFirefox\/([\d.]+)\b/.exec(n)) ? R.push("identifying as Firefox " + h[1]) : "Firefox" == L && (h = /\b(Mobile|Tablet|TV)\b/i.exec(n)) ? (H || (H = "Firefox OS"),
                    B || (B = h[1])) : !L || (h = !/\bMinefield\b/i.test(n) && /\b(?:Firefox|Safari)\b/.exec(L)) ? (L && !B && /[\/,]|^[^(]+?\)/.test(n.slice(n.indexOf(h + "/") + 8)) && (L = null),
                    (h = B || q || H) && (B || q || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(H)) && (L = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(H) ? H : h) + " Browser")) : "Electron" == L && (h = (/\bChrome\/([\d.]+)\b/.exec(n) || 0)[1]) && R.push("Chromium " + h) : H = "Kubuntu",
                    F || (F = p(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", d(L), "(?:Firefox|Minefield|NetFront)"], function(e, t) {
                        return e || (RegExp(t + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(n) || 0)[1] || null
                    })),
                    (h = ("iCab" == D && parseFloat(F) > 3 ? "WebKit" : /\bOpera\b/.test(L) && (/\bOPR\b/.test(n) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(n) && !/^(?:Trident|EdgeHTML)$/.test(D) && "WebKit" || !D && /\bMSIE\b/i.test(n) && ("Mac OS" == H ? "Tasman" : "Trident") || "WebKit" == D && /\bPlayStation\b(?! Vita\b)/i.test(L) && "NetFront") && (D = [h]),
                    "IE" == L && (h = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(n) || 0)[1]) ? (L += " Mobile",
                    H = "Windows Phone " + (/\+$/.test(h) ? h : h + ".x"),
                    R.unshift("desktop mode")) : /\bWPDesktop\b/i.test(n) ? (L = "IE Mobile",
                    H = "Windows Phone 8.x",
                    R.unshift("desktop mode"),
                    F || (F = (/\brv:([\d.]+)/.exec(n) || 0)[1])) : "IE" != L && "Trident" == D && (h = /\brv:([\d.]+)/.exec(n)) && (L && R.push("identifying as " + L + (F ? " " + F : "")),
                    L = "IE",
                    F = h[1]),
                    N) {
                        if (b = "global",
                        T = null != (v = s) ? (0,
                        i.default)(v[b]) : "number",
                        /^(?:boolean|number|string|undefined)$/.test(T) || "object" == T && !v[b])
                            l(h = s.runtime) == S ? (L = "Adobe AIR",
                            H = h.flash.system.Capabilities.os) : l(h = s.phantom) == I ? (L = "PhantomJS",
                            F = (h = h.version || null) && h.major + "." + h.minor + "." + h.patch) : "number" == typeof A.documentMode && (h = /\bTrident\/(\d+)/i.exec(n)) ? (F = [F, A.documentMode],
                            (h = +h[1] + 4) != F[1] && (R.push("IE " + F[1] + " mode"),
                            D && (D[1] = ""),
                            F[1] = h),
                            F = "IE" == L ? String(F[1].toFixed(1)) : F[0]) : "number" == typeof A.documentMode && /^(?:Chrome|Firefox)\b/.test(L) && (R.push("masking as " + L + " " + F),
                            L = "IE",
                            F = "11.0",
                            D = ["Trident"],
                            H = "Windows");
                        else if (P && (U = (h = P.lang.System).getProperty("os.arch"),
                        H = H || h.getProperty("os.name") + " " + h.getProperty("os.version")),
                        O) {
                            try {
                                F = s.require("ringo/engine").version.join("."),
                                L = "RingoJS"
                            } catch (e) {
                                (h = s.system) && h.global.system == s.system && (L = "Narwhal",
                                H || (H = h[0].os || null))
                            }
                            L || (L = "Rhino")
                        } else
                            "object" === (0,
                            i.default)(s.process) && !s.process.browser && (h = s.process) && ("object" === (0,
                            i.default)(h.versions) && ("string" == typeof h.versions.electron ? (R.push("Node " + h.versions.node),
                            L = "Electron",
                            F = h.versions.electron) : "string" == typeof h.versions.nw && (R.push("Chromium " + F, "Node " + h.versions.node),
                            L = "NW.js",
                            F = h.versions.nw)),
                            L || (L = "Node.js",
                            U = h.arch,
                            H = h.platform,
                            F = (F = /[\d.]+/.exec(h.version)) ? F[0] : null));
                        H = H && u(H)
                    }
                    if (F && (h = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(F) || /(?:alpha|beta)(?: ?\d)?/i.exec(n + ";" + (N && c.appMinorVersion)) || /\bMinefield\b/i.test(n) && "a") && (j = /b/i.test(h) ? "beta" : "alpha",
                    F = F.replace(RegExp(h + "\\+?$"), "") + ("beta" == j ? w : x) + (/\d+\+?/.exec(h) || "")),
                    "Fennec" == L || "Firefox" == L && /\b(?:Android|Firefox OS)\b/.test(H))
                        L = "Firefox Mobile";
                    else if ("Maxthon" == L && F)
                        F = F.replace(/\.[\d.]+/, ".x");
                    else if (/\bXbox\b/i.test(B))
                        "Xbox 360" == B && (H = null),
                        "Xbox 360" == B && /\bIEMobile\b/.test(n) && R.unshift("mobile mode");
                    else if (!/^(?:Chrome|IE|Opera)$/.test(L) && (!L || B || /Browser|Mobi/.test(L)) || "Windows CE" != H && !/Mobi/i.test(n))
                        if ("IE" == L && N)
                            try {
                                null === s.external && R.unshift("platform preview")
                            } catch (e) {
                                R.unshift("embedded")
                            }
                        else
                            (/\bBlackBerry\b/.test(B) || /\bBB10\b/.test(n)) && (h = (RegExp(B.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(n) || 0)[1] || F) ? (H = ((h = [h, /BB10/.test(n)])[1] ? (B = null,
                            q = "BlackBerry") : "Device Software") + " " + h[0],
                            F = null) : this != m && "Wii" != B && (N && _ || /Opera/.test(L) && /\b(?:MSIE|Firefox)\b/i.test(n) || "Firefox" == L && /\bOS X (?:\d+\.){2,}/.test(H) || "IE" == L && (H && !/^Win/.test(H) && F > 5.5 || /\bWindows XP\b/.test(H) && F > 8 || 8 == F && !/\bTrident\b/.test(n))) && !r.test(h = t.call(m, n.replace(r, "") + ";")) && h.name && (h = "ing as " + h.name + ((h = h.version) ? " " + h : ""),
                            r.test(L) ? (/\bIE\b/.test(h) && "Mac OS" == H && (H = null),
                            h = "identify" + h) : (h = "mask" + h,
                            L = E ? u(E.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera",
                            /\bIE\b/.test(h) && (H = null),
                            N || (F = null)),
                            D = ["Presto"],
                            R.push(h));
                    else
                        L += " Mobile";
                    (h = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(n) || 0)[1]) && (h = [parseFloat(h.replace(/\.(\d)$/, ".0$1")), h],
                    "Safari" == L && "+" == h[1].slice(-1) ? (L = "WebKit Nightly",
                    j = "alpha",
                    F = h[1].slice(0, -1)) : F != h[1] && F != (h[2] = (/\bSafari\/([\d.]+\+?)/i.exec(n) || 0)[1]) || (F = null),
                    h[1] = (/\bChrome\/([\d.]+)/i.exec(n) || 0)[1],
                    537.36 == h[0] && 537.36 == h[2] && parseFloat(h[1]) >= 28 && "WebKit" == D && (D = ["Blink"]),
                    N && (M || h[1]) ? (D && (D[1] = "like Chrome"),
                    h = h[1] || ((h = h[0]) < 530 ? 1 : h < 532 ? 2 : h < 532.05 ? 3 : h < 533 ? 4 : h < 534.03 ? 5 : h < 534.07 ? 6 : h < 534.1 ? 7 : h < 534.13 ? 8 : h < 534.16 ? 9 : h < 534.24 ? 10 : h < 534.3 ? 11 : h < 535.01 ? 12 : h < 535.02 ? "13+" : h < 535.07 ? 15 : h < 535.11 ? 16 : h < 535.19 ? 17 : h < 536.05 ? 18 : h < 536.1 ? 19 : h < 537.01 ? 20 : h < 537.11 ? "21+" : h < 537.13 ? 23 : h < 537.18 ? 24 : h < 537.24 ? 25 : h < 537.36 ? 26 : "Blink" != D ? "27" : "28")) : (D && (D[1] = "like Safari"),
                    h = (h = h[0]) < 400 ? 1 : h < 500 ? 2 : h < 526 ? 3 : h < 533 ? 4 : h < 534 ? "4+" : h < 535 ? 5 : h < 537 ? 6 : h < 538 ? 7 : h < 601 ? 8 : "8"),
                    D && (D[1] += " " + (h += "number" == typeof h ? ".x" : /[.+]/.test(h) ? "" : "+")),
                    "Safari" == L && (!F || parseInt(F) > 45) && (F = h)),
                    "Opera" == L && (h = /\bzbov|zvav$/.exec(H)) ? (L += " ",
                    R.unshift("desktop mode"),
                    "zvav" == h ? (L += "Mini",
                    F = null) : L += "Mobile",
                    H = H.replace(RegExp(" *" + h + "$"), "")) : "Safari" == L && /\bChrome\b/.exec(D && D[1]) && (R.unshift("desktop mode"),
                    L = "Chrome Mobile",
                    F = null,
                    /\bOS X\b/.test(H) ? (q = "Apple",
                    H = "iOS 4.3+") : H = null),
                    F && 0 == F.indexOf(h = /[\d.]+$/.exec(H)) && n.indexOf("/" + h + "-") > -1 && (H = f(H.replace(h, ""))),
                    D && !/\b(?:Avant|Nook)\b/.test(L) && (/Browser|Lunascape|Maxthon/.test(L) || "Safari" != L && /^iOS/.test(H) && /\bSafari\b/.test(D[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(L) && D[1]) && (h = D[D.length - 1]) && R.push(h),
                    R.length && (R = ["(" + R.join("; ") + ")"]),
                    q && B && B.indexOf(q) < 0 && R.push("on " + q),
                    B && R.push((/^on /.test(R[R.length - 1]) ? "" : "on ") + B),
                    H && (h = / ([\d.+]+)$/.exec(H),
                    y = h && "/" == H.charAt(H.length - h[0].length - 1),
                    H = {
                        architecture: 32,
                        family: h && !y ? H.replace(h[0], "") : H,
                        version: h ? h[1] : null,
                        toString: function() {
                            var e = this.version;
                            return this.family + (e && !y ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                        }
                    }),
                    (h = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(U)) && !/\bi686\b/i.test(U) ? (H && (H.architecture = 64,
                    H.family = H.family.replace(RegExp(" *" + h), "")),
                    L && (/\bWOW64\b/i.test(n) || N && /\w(?:86|32)$/.test(c.cpuClass || c.platform) && !/\bWin64; x64\b/i.test(n)) && R.unshift("32-bit")) : H && /^OS X/.test(H.family) && "Chrome" == L && parseFloat(F) >= 39 && (H.architecture = 64),
                    n || (n = null);
                    var J = {};
                    return J.description = n,
                    J.layout = D && D[0],
                    J.manufacturer = q,
                    J.name = L,
                    J.prerelease = j,
                    J.product = B,
                    J.ua = n,
                    J.version = L && F,
                    J.os = H || {
                        architecture: null,
                        family: null,
                        version: null,
                        toString: function() {
                            return "null"
                        }
                    },
                    J.parse = t,
                    J.toString = function() {
                        return this.description || ""
                    }
                    ,
                    J.version && R.unshift(F),
                    J.name && R.unshift(L),
                    H && L && (H != String(H).split(" ")[0] || H != L.split(" ")[0] && !B) && R.push(B ? "(" + H + ")" : "on " + H),
                    R.length && (J.description = R.join(" ")),
                    J
                }()
            }();
            e.exports = o
        }
        ).call(this, n(33))
    }
    , function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }
    , function(e, t) {
        e.exports = {}
    }
    , , function(e, t, n) {
        "use strict";
        var r = n(52)
          , s = n(58)
          , i = (n(26),
        n(5))
          , o = n(0)
          , a = o.undef
          , c = n(187)
          , u = n(84)
          , m = n(124);
        function l(e) {
            o.verifyOptions(e, "appKey account token", "protocol::IMProtocol"),
            o.verifyCallback(e, ["onconnect", "onerror", "onwillreconnect", "ondisconnect", "onloginportschange", "onmyinfo", "onblacklist", "onmutelist", "onfriends", "onusers", "onrobots", "onteams", "onSuperTeams", "onsessions", "onroamingmsgs", "onofflinemsgs", "onofflinefiltermsgs", "onroamingsysmsgs", "onofflinesysmsgs", "onofflinefiltersysmsgs", "onofflinecustomsysmsgs", "onofflinefiltercustomsysmsgs", "onbroadcastmsg", "onbroadcastmsgs", "onsysmsgunread", "onsyncdone", "onteammembers", "onsyncteammembersdone", "onmsg", "onsysmsg", "oncustomsysmsg", "onupdatemyinfo", "onupdateuser", "onUpdateSuperTeamMember", "onCreateSuperTeam", "onUpdateSuperTeam", "onAddSuperTeamMembers", "onRemoveSuperTeamMembers", "onUpdateSuperTeamManagers", "onDismissSuperTeam", "onTransferSuperTeam", "onUpdateSuperTeamManagers", "onUpdateSuperTeamMembersMute", "onupdateteammember", "onCreateTeam", "onUpdateTeam", "onAddTeamMembers", "onRemoveTeamMembers", "onUpdateTeamManagers", "onDismissTeam", "onTransferTeam", "onUpdateTeamMembersMute", "onTeamMsgReceipt", "onupdatesession", "onupdatesysmsgunread", "onupdatesysmsg", "onsynccreateteam", "onsyncsupercreateteam", "onsyncmarkinblacklist", "onsyncmarkinmutelist", "onsyncfriendaction", "shouldIgnoreNotification", "shouldCountNotifyUnread", "onPushNotificationMultiportConfig", "onPushNotificationMultiportConfigUpdate", "onpushevents"], "protocol::IMProtocol"),
            this.db = e.api.db = new r({
                logger: e.logger
            }),
            s.call(this, e)
        }
        var d = s.fn
          , p = l.fn = l.prototype = Object.create(d);
        p.init = function() {
            d.init.call(this),
            u.IM.setProtocol(this),
            this.parser = u.IM,
            this.sendCmd.bind(this),
            this.socketUrls = [],
            this.syncing = !0,
            this.hasSynced = !1,
            this.hasSyncedTeamMembers = !1,
            this.syncPromiseArray = [],
            this.syncResult = {},
            this.syncTeamMembersPromiseArray = [],
            this.syncSuperTeamMembersPromiseArray = [],
            this.syncTeamMembersResult = {},
            this.timetags = {},
            this.superTeamMembersData = {},
            this.sysMsgUnread = m.completeUnread({}),
            this.resetUnsettledMsgs(),
            this.resetUnsettledSysMsgs(),
            this.msgPromise = Promise.resolve(),
            this.sysMsgPromise = Promise.resolve(),
            this.sessionSet = {},
            this.msgReceiptTasks = {},
            this.userSet = {},
            this.pushNotificationMultiportConfig = c.getDefaultConfig()
        }
        ,
        p.reset = function() {
            d.reset.call(this);
            var e = this.options;
            this.db.reset(e.db),
            a(e.lbsUrl) && (e.lbsUrl = i.lbsUrl),
            this.resetAutoMarkRead()
        }
        ,
        p.resetAutoMarkRead = function() {
            var e = this.options;
            o.verifyBooleanWithDefault(e, "autoMarkRead", !0, "", "protocol::resetAutoMarkRead")
        }
        ,
        p.resetUnsettledMsgs = function() {
            this.unhandledMsgs = [],
            this.unupdatedMsgs = []
        }
        ,
        p.resetUnsettledSysMsgs = function() {
            this.unhandledSysMsgs = [],
            this.unupdatedSysMsgs = []
        }
        ,
        p.packetFromSync = function(e) {
            return !e.obj || !!e.obj.sync
        }
        ,
        e.exports = l,
        n(451),
        n(450),
        n(449),
        n(448),
        n(446),
        n(445),
        n(444),
        n(443),
        n(442),
        n(441),
        n(440),
        n(439),
        n(438),
        n(437),
        n(436),
        n(435),
        n(434),
        n(433)
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(9), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        function o(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.message = e || n.message || "",
            "object" === (void 0 === t ? "undefined" : (0,
            i.default)(t)) ? (this.event = t,
            this.code = "Other_Error") : void 0 !== t && (this.code = t),
            this.timetag = +new Date,
            void 0 !== n && (this.event = n),
            this.event && (this.callFunc = this.event.callFunc || null,
            delete this.event.callFunc)
        }
        o.prototype = Object.create(Error.prototype),
        o.prototype.name = "NIMError";
        var a = {
            201: "客户端版本不对, 需升级sdk",
            302: "用户名或密码错误, 请检查appKey和token是否有效, account和token是否匹配",
            403: "非法操作或没有权限",
            404: "对象(用户/群/聊天室)不存在",
            405: "参数长度过长",
            408: "客户端请求超时",
            414: "参数错误",
            415: "服务不可用/没有聊天室服务器可分配",
            416: "频率控制",
            417: "重复操作",
            422: "帐号被禁用",
            500: "服务器内部错误",
            501: "数据库操作失败",
            503: "服务器繁忙",
            508: "删除有效期过了",
            509: "已失效",
            7101: "被拉黑",
            801: "群人数达到上限",
            802: "没有权限",
            803: "群不存在或未发生变化",
            804: "用户不在群里面",
            805: "群类型不匹配",
            806: "创建群数量达到限制",
            807: "群成员状态不对",
            809: "已经在群里",
            811: "强推列表中帐号数量超限",
            812: "群被禁言",
            813: "因群数量限制，部分拉人成功",
            814: "禁止使用群组消息已读服务",
            815: "群管理员人数上限",
            997: "协议已失效",
            998: "解包错误",
            999: "打包错误",
            9102: "通道失效",
            9103: "已经在其他端接听/拒绝过这通电话",
            11001: "对方离线, 通话不可送达",
            13002: "聊天室状态异常",
            13003: "在黑名单中",
            13004: "在禁言名单中",
            13006: "聊天室处于整体禁言状态,只有管理员能发言",
            Connect_Failed: "无法建立连接, 请确保能 ping/telnet 到云信服务器; 如果是IE8/9, 请确保项目部署在 HTTPS 环境下",
            Error_Internet_Disconnected: "网断了",
            Error_Connection_is_not_Established: "连接未建立",
            Error_Connection_Socket_State_not_Match: "socket状态不对",
            Error_Timeout: "超时",
            Param_Error: "参数错误",
            No_File_Selected: "请选择文件",
            Wrong_File_Type: "文件类型错误",
            File_Too_Large: "文件过大",
            Cross_Origin_Iframe: "不能获取跨域Iframe的内容",
            Not_Support: "不支持",
            NO_DB: "无数据库",
            DB: "数据库错误",
            Still_In_Team: "还在群里",
            Session_Exist: "会话已存在",
            Session_Not_Exist: "会话不存在",
            Error_Unknown: "未知错误",
            Operation_Canceled: "操作取消"
        };
        [200, 406, 808, 810].forEach(function(e) {
            a[e] = null
        }),
        o.genError = function(e) {
            var t = a[e];
            return void 0 === t && (t = "操作失败"),
            null === t ? null : new o(t,e)
        }
        ,
        o.multiInstance = function(e) {
            return new o("不允许初始化多个实例","Not_Allow_Multi_Instance",e)
        }
        ,
        o.newNetworkError = function(e) {
            var t = "Error_Internet_Disconnected";
            return new o(a[t],t,e)
        }
        ,
        o.newConnectError = function(e) {
            var t = "Connect_Failed";
            return new o(a[t] || null,t,e)
        }
        ,
        o.newConnectionError = function(e) {
            var t = "Error_Connection_is_not_Established";
            return new o(a[t],t,e)
        }
        ,
        o.newSocketStateError = function(e) {
            var t = "Error_Connection_Socket_State_not_Match";
            return new o(a[t],t,e)
        }
        ,
        o.newTimeoutError = function(e) {
            var t = "Error_Timeout";
            return new o(a[t],t,e)
        }
        ,
        o.newFrequencyControlError = function(e) {
            var t = new o(a[416],416,e);
            return t.from = "local",
            t
        }
        ,
        o.newParamError = function(e, t) {
            return new o(e || a.Param_Error,"Param_Error",t)
        }
        ,
        o.newNoFileError = function(e, t) {
            var n = "No_File_Selected";
            return new o(e || a[n],n,t)
        }
        ,
        o.newWrongFileTypeError = function(e, t) {
            var n = "Wrong_File_Type";
            return new o(e || a[n],n,t)
        }
        ,
        o.newFileTooLargeError = function(e, t) {
            var n = "File_Too_Large";
            return new o(e || a[n],n,t)
        }
        ,
        o.newCORSIframeError = function(e) {
            var t = "Cross_Origin_Iframe";
            return new o(a[t],t,e)
        }
        ,
        o.newSupportError = function(e, t, n) {
            return new o("不支持" + e,"Not_Support_" + t,n)
        }
        ,
        o.newSupportDBError = function(e) {
            return o.newSupportError("数据库", "DB", e)
        }
        ,
        o.noDBError = function(e) {
            return new o(a.NO_DB,"NO_DB",e)
        }
        ,
        o.newDBError = function(e) {
            return new o(a.DB,"DB",e)
        }
        ,
        o.newUnknownError = function(e) {
            var t = "Error_Unknown";
            return new o(a[t],t,e)
        }
        ,
        o.stillInTeamError = function(e) {
            var t = "Still_In_Team";
            return new o(a[t],t,e)
        }
        ,
        o.sessionExist = function(e) {
            var t = "Session_Exist";
            return new o(a[t],t,e)
        }
        ,
        o.sessionNotExist = function(e) {
            var t = "Session_Not_Exist";
            return new o(a[t],t,e)
        }
        ,
        o.cancel = function(e) {
            var t = "Operation_Canceled";
            return new o(a[t],t,e)
        }
        ,
        o.customError = function(e, t) {
            e = e || "Other_Error";
            var n = "";
            return (t = t || {}).message || (n = a[e] || e),
            "object" !== (void 0 === e ? "undefined" : (0,
            i.default)(e)) ? new o(n,e,t) : new o(n,"Other_Error",void 0 === t ? e : t)
        }
        ,
        e.exports = o
    }
    , function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }
    , , function(e, t, n) {
        "use strict";
        var r = n(50)
          , s = n(25)
          , i = n(5)
          , o = n(432)
          , a = n(84).IM;
        function c(e) {
            return this.subType = "im",
            this.nosScene = e.nosScene || "im",
            this.nosSurvivalTime = e.nosSurvivalTime,
            e.Protocol = s,
            e.Message = o,
            e.constructor = c,
            this.init(e)
        }
        c.Protocol = s,
        c.parser = a,
        c.use = r.use,
        c.getInstance = r.getInstance,
        c.rmAllInstances = r.rmAllInstances,
        c.genInstanceName = function(e) {
            return "NIM-account-" + e.account
        }
        ;
        var u = c.fn = c.prototype = Object.create(r.prototype);
        c.info = u.info = i.info,
        e.exports = c,
        n(422),
        n(421),
        n(420),
        n(419),
        n(418),
        n(417),
        n(416),
        n(415),
        n(414),
        n(413),
        n(412),
        n(411),
        n(410),
        n(409),
        n(408),
        n(407),
        n(406),
        n(405)
    }
    , function(e, t) {
        t.f = {}.propertyIsEnumerable
    }
    , function(e, t) {
        var n = 0
          , r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    }
    , function(e, t, n) {
        var r = n(64)
          , s = n(44);
        e.exports = Object.keys || function(e) {
            return r(e, s)
        }
    }
    , function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0,
            eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }
    , function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    }
    , function(e, t, n) {
        var r = n(57);
        e.exports = function(e, t, n) {
            if (r(e),
            void 0 === t)
                return e;
            switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                }
                ;
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                }
                ;
            case 3:
                return function(n, r, s) {
                    return e.call(t, n, r, s)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(108)(!0);
        n(67)(String, "String", function(e) {
            this._t = String(e),
            this._i = 0
        }, function() {
            var e, t = this._t, n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n),
            this._i += e.length,
            {
                value: e,
                done: !1
            })
        })
    }
    , function(e, t, n) {
        var r = n(11).f
          , s = n(16)
          , i = n(7)("toStringTag");
        e.exports = function(e, t, n) {
            e && !s(e = n ? e : e.prototype, i) && r(e, i, {
                configurable: !0,
                value: t
            })
        }
    }
    , function(e, t) {
        e.exports = !0
    }
    , function(e, t, n) {
        "use strict";
        var r = n(53)
          , s = n(149)
          , i = n(148)
          , o = n(147);
        r.json = s,
        r.upload = i,
        r.chunkUpload = o,
        e.exports = r
    }
    , function(e, t, n) {
        var r = n(48);
        e.exports = function(e) {
            return Object(r(e))
        }
    }
    , function(e, t) {
        t.f = Object.getOwnPropertySymbols
    }
    , function(e, t, n) {
        var r = n(8)
          , s = n(6)
          , i = n(38)
          , o = n(43)
          , a = n(11).f;
        e.exports = function(e) {
            var t = s.Symbol || (s.Symbol = i ? {} : r.Symbol || {});
            "_" == e.charAt(0) || e in t || a(t, e, {
                value: o.f(e)
            })
        }
    }
    , function(e, t, n) {
        t.f = n(7)
    }
    , function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }
    , function(e, t, n) {
        var r = n(8)
          , s = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        e.exports = function(e) {
            return s[e] || (s[e] = {})
        }
    }
    , function(e, t, n) {
        var r = n(45)("keys")
          , s = n(31);
        e.exports = function(e) {
            return r[e] || (r[e] = s(e))
        }
    }
    , function(e, t, n) {
        var r = n(19);
        e.exports = function(e, t) {
            if (!r(e))
                return e;
            var n, s;
            if (t && "function" == typeof (n = e.toString) && !r(s = n.call(e)))
                return s;
            if ("function" == typeof (n = e.valueOf) && !r(s = n.call(e)))
                return s;
            if (!t && "function" == typeof (n = e.toString) && !r(s = n.call(e)))
                return s;
            throw TypeError("Can't convert object to primitive value")
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            if (null == e)
                throw TypeError("Can't call method on  " + e);
            return e
        }
    }
    , function(e, t) {
        var n = Math.ceil
          , r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(9), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        var o = n(10)
          , a = n(0)
          , c = a.notundef
          , u = n(320)
          , m = n(5);
        function l() {}
        var d = {};
        l.getInstance = function(e) {
            e = f(e),
            a.verifyOptions(e, "account", "api::Base.getInstance");
            var t = this.genInstanceName(e)
              , n = d[t];
            return n ? l.updateInstance(n, e) : n = d[t] = new this(e),
            n
        }
        ,
        l.updateInstance = function(e, t) {
            e.setOptions(t),
            e.connect()
        }
        ;
        var p = l.fn = l.prototype = Object.create(new o)
          , f = function(e) {
            return e.nosSurvivalTime ? (a.verifyParamType("nosSurvivalTime", e.nosSurvivalTime, "number", "api::Base.getInstance"),
            a.verifyParamMin("nosSurvivalTime", e.nosSurvivalTime, 86400, "api::Base.getInstance")) : e.nosSurvivalTime = 1 / 0,
            e
        };
        p.updatePrivateConf = function(e) {
            if (e && "object" === (0,
            i.default)(e.privateConf)) {
                var t = e.privateConf;
                "string" == typeof t.lbs_web && (e.lbsUrl = t.lbs_web),
                "boolean" == typeof t.link_ssl_web && (e.secure = t.link_ssl_web),
                "boolean" == typeof t.https_enabled && (e.httpsEnabled = t.https_enabled),
                e.uploadUrl = t.nos_uploader_web ? t.nos_uploader_web : null,
                e.chunkUploadUrl = t.nos_uploader_web ? t.nos_uploader_web : null,
                e.replaceUrl = t.nos_downloader ? t.nos_downloader : null,
                e.downloadUrl = t.nos_accelerate ? t.nos_accelerate : null,
                e.downloadHost = t.nos_accelerate_host ? t.nos_accelerate_host : null,
                e.ntServerAddress = t.nt_server || null,
                e.kibanaServer = t.kibana_server,
                e.statisticServer = t.statistic_server,
                e.reportGlobalServer = t.report_global_server
            }
            return null === e.ntServerAddress || "" === e.ntServerAddress ? m.ntServerAddress = null : m.ntServerAddress = e.ntServerAddress || m.defaultReportUrl,
            m.uploadUrl = e.uploadUrl || m.uploadUrl,
            m.chunkUploadUrl = e.chunkUploadUrl || m.chunkUploadUrl,
            m.downloadUrl = e.downloadUrl || m.downloadUrl,
            m.downloadHost = e.downloadHost || m.downloadHost,
            m.replaceUrl = e.replaceUrl || m.replaceUrl,
            m.httpsEnabled = e.httpsEnabled || m.httpsEnabled,
            e
        }
        ,
        p.init = function(e) {
            a.verifyOptions(e, "account", "api::Base.init"),
            e = this.updatePrivateConf(e);
            var t = this.account = e.account = e.account + ""
              , n = e.constructor.genInstanceName(e)
              , r = d[n];
            if (e._disableSingleton && (r = null),
            r)
                return l.updateInstance(r, e),
                r;
            this.name = n,
            d[n] = this,
            this.logger = e.logger = new u({
                debug: e.debug,
                logFunc: e.logFunc,
                prefix: this.subType
            }),
            e.api = this;
            var s = this.protocol = new e.Protocol(e);
            return s.name = "Protocol-" + n,
            s.account = t,
            s.api = this,
            s.message = this.message = new e.Message({
                account: t
            }),
            this.options = a.copy(e),
            this.reset(),
            this
        }
        ,
        p.destroy = function(e) {
            var t = this
              , n = this.protocol.reconnectTimer;
            e = e || {};
            var r = this.name;
            r && (this.protocol && this.protocol.resetPush && this.protocol.resetPush(),
            this.disconnect({
                done: function(s) {
                    t.logger.warn("ApiBase::destroy: instance destroyed ..."),
                    Object.getOwnPropertyNames(t).forEach(function(e) {
                        delete t[e]
                    }),
                    d && (delete d[r],
                    d[r] = null,
                    clearTimeout(n)),
                    e.done instanceof Function && e.done(s)
                }
            }))
        }
        ,
        p.reset = function() {
            var e = this.updatePrivateConf(this.options);
            a.verifyBooleanWithDefault(e, "exifOrientation", !0, "", "api::Base.reset")
        }
        ,
        p.setOptions = function(e) {
            this.reset(),
            this.protocol.setOptions(e)
        }
        ,
        p.processCallback = function(e, t) {
            g(e, t)
        }
        ,
        p.processCallbackPromise = function(e, t) {
            return new Promise(function(n, r) {
                g(e, t, !0, n, r)
            }
            )
        }
        ;
        var g = function(e, t, n, r, s) {
            var i = "api::processCallback";
            n && (i = "api::processCallbackPromise"),
            a.verifyCallback(e, "done", i),
            e.callback = function(o, u, m) {
                var l = e.callback.options;
                if (u = u || l,
                t && (u = l),
                a.isFunction(e.cbaop)) {
                    var d = e.cbaop(o, u);
                    c(d) && (u = d)
                }
                var p = e.done;
                a.isObject(u) && (delete u.done,
                delete u.cb,
                delete u.callback),
                n ? o ? s({
                    message: "生成接口回调错误",
                    callFunc: i,
                    event: o
                }) : r(u) : p(o, u, m)
            }
            ,
            e.callback.options = a.copy(e)
        };
        p.processPs = function(e) {
            a.notexist(e.ps) && (e.ps = "")
        }
        ,
        p.processCustom = function(e) {
            a.notexist(e.custom) && (e.custom = "")
        }
        ,
        p.sendCmd = function() {
            this.protocol.sendCmd.apply(this.protocol, arguments)
        }
        ,
        p.sendCmdWithResp = function(e, t, n) {
            this.sendCmd(e, t, function(e, t, r) {
                a.isFunction(n) && (e ? n(e, t) : n(null, r))
            })
        }
        ,
        p.cbAndSendCmd = function(e, t) {
            var n = this.processCallbackPromise(t);
            return this.sendCmd(e, t),
            n
        }
        ,
        p.sendCmdUsePromise = function(e, t) {
            var n = this;
            return new Promise(function(r, s) {
                n.sendCmd(e, t, function(e, t, n) {
                    if (e)
                        s(e);
                    else {
                        var i = a.merge({}, t, n);
                        r(i)
                    }
                })
            }
            )
        }
        ,
        l.use = function(e, t) {
            e && e.install && a.isFunction(e.install) && e.install(this, t)
        }
        ,
        l.rmAllInstances = function() {
            for (var e in d)
                d[e].destroy();
            d = {}
        }
        ,
        p.logout = function(e) {
            this.protocol.shouldReconnect = !1,
            this.protocol.doLogout = !0,
            this.processCallback(e),
            this.sendCmd("logout", e, e.callback)
        }
        ,
        e.exports = l,
        n(319),
        n(318),
        n(315),
        n(314),
        n(313),
        n(312),
        n(311)
    }
    , function(e, t, n) {
        n(103);
        for (var r = n(8), s = n(20), i = n(23), o = n(7)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < a.length; c++) {
            var u = a[c]
              , m = r[u]
              , l = m && m.prototype;
            l && !l[o] && s(l, o, u),
            i[u] = i.Array
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(465);
        r.fn = r.prototype,
        e.exports = r,
        n(462),
        n(461),
        n(460),
        n(459),
        n(458),
        n(457),
        n(456),
        n(455),
        n(454),
        n(453),
        n(452)
    }
    , function(e, t, n) {
        "use strict";
        var r = n(13)
          , s = n(153)
          , i = n(151)
          , o = n(150)
          , a = {}
          , c = r.f;
        function u(e) {
            var t = e.upload = "multipart/form-data" === (e.headers || r.o)["Content-Type"]
              , n = !1;
            try {
                n = (location.protocol + "//" + location.host).toLowerCase() !== r.url2origin(e.url)
            } catch (e) {}
            return e.cors = n,
            t || n || e.mode ? function(e) {
                var t = e.mode
                  , n = s
                  , a = r.getGlobal();
                return !a.FormData && a.document && (t = "iframe"),
                "iframe" === t && (n = e.upload ? i : o),
                new n(e)
            }(e) : new s(e)
        }
        function m(e, t, n) {
            var r = a[e];
            if (r) {
                "onload" === t && r.result && (n = function(e, t) {
                    t = {
                        data: t
                    };
                    var n = e.result.headers;
                    return n && (t.headers = e.req.header(n)),
                    t
                }(r, n)),
                function(e) {
                    var t = a[e];
                    t && (t.req.destroy(),
                    delete a[e])
                }(e);
                var s = {
                    type: t,
                    result: n
                };
                c(s),
                s.stopped || r[t](s.result)
            }
        }
        function l(e, t) {
            var n = r.genUrlSep(e);
            return t = t || "",
            r.isObject(t) && (t = r.object2query(t)),
            t && (e += n + t),
            e
        }
        function d(e, t) {
            t = t || {};
            var n = r.uniqueID()
              , s = {
                result: t.result,
                onload: t.onload || r.f,
                onerror: t.onerror || r.f
            };
            a[n] = s,
            t.onload = function(e, t) {
                m(e, "onload", t)
            }
            .bind(null, n),
            t.onerror = function(e, t) {
                m(e, "onerror", t)
            }
            .bind(null, n),
            t.query && (e = l(e, t.query));
            var i = t.method || "";
            return i && !/get/i.test(i) || !t.data || (e = l(e, t.data),
            t.data = null),
            t.url = e,
            s.req = u(t),
            n
        }
        d.filter = function(e) {
            r.isFunction(e) && (c = e)
        }
        ,
        d.abort = function(e) {
            var t = a[e];
            t && t.req && t.req.abort()
        }
        ,
        e.exports = d
    }
    , function(e, t, n) {
        var r = n(14)
          , s = n(106)
          , i = n(44)
          , o = n(46)("IE_PROTO")
          , a = function() {}
          , c = function() {
            var e, t = n(55)("iframe"), r = i.length;
            for (t.style.display = "none",
            n(79).appendChild(t),
            t.src = "javascript:",
            (e = t.contentWindow.document).open(),
            e.write("<script>document.F=Object<\/script>"),
            e.close(),
            c = e.F; r--; )
                delete c.prototype[i[r]];
            return c()
        };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (a.prototype = r(e),
            n = new a,
            a.prototype = null,
            n[o] = e) : n = c(),
            void 0 === t ? n : s(n, t)
        }
    }
    , function(e, t, n) {
        var r = n(19)
          , s = n(8).document
          , i = r(s) && r(s.createElement);
        e.exports = function(e) {
            return i ? s.createElement(e) : {}
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = {
            init: function() {
                s.deviceId = r.guid()
            }
        };
        s.init(),
        s.clientTypeMap = {
            1: "Android",
            2: "iOS",
            4: "PC",
            8: "WindowsPhone",
            16: "Web",
            32: "Server",
            64: "Mac"
        },
        s.db = {
            open: function() {}
        },
        e.exports = s
    }
    , function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e)
                throw TypeError(e + " is not a function!");
            return e
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = n(5)
          , i = n(26);
        function o(e) {
            r.undef(e.secure) && (e.secure = !0),
            this.options = r.copy(e),
            this.keepNosSafeUrl = this.options.keepNosSafeUrl || !1,
            r.notundef(e.defaultLinkUrl) && r.isString(e.defaultLinkUrl) ? s.optionDefaultLinkUrl = this.options.defaultLinkUrl.trim() : s.optionDefaultLinkUrl = "",
            this.init(),
            this.connect(),
            this.initConnecting = !0
        }
        var a = o.fn = o.prototype;
        a.init = function() {
            this.logger = this.options.logger,
            this.getNosOriginUrlReqNum = 0,
            this.checkNosReqNum = 0,
            this.cmdTaskArray = [],
            this.timerMap = {},
            this.cmdCallbackMap = {},
            this.cmdContentMap = {},
            this.initConnect(),
            this.reset()
        }
        ,
        a.reset = function() {
            this.resetConnect()
        }
        ,
        a.setOptions = function(e) {
            var t = this.options
              , n = Object.keys(t)
              , s = n.indexOf("account");
            -1 !== s && n.splice(s, 1),
            e = r.filterObj(e, n),
            this.options = r.merge(t, e),
            this.reset()
        }
        ,
        a.sendCmd = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , n = arguments[2];
            this.heartbeat(),
            "heartbeat" !== e && this.logger.warn("protocol::sendCmd: " + e, t);
            var r, s = e, i = (e = this.parser.createCmd(e, t)).SER;
            t = t || {},
            this.cmdContentMap[i] = t,
            t.single && (delete t.single,
            1 === (r = Object.keys(t)).length && (this.cmdContentMap[i] = t[r[0]])),
            t.NOTSTORE && ((r = t.NOTSTORE.split(" ")).forEach(function(e) {
                delete t[e]
            }),
            delete t.NOTSTORE),
            (n = n || t.callback) && (this.cmdCallbackMap[i] = n),
            this.cmdTaskArray.push({
                cmdName: s,
                cmd: JSON.stringify(e)
            }),
            this.startCmdTaskTimer()
        }
        ,
        a.startCmdTaskTimer = function() {
            var e = this;
            e.cmdTaskTimer || (e.cmdTaskTimer = setTimeout(function() {
                var t = e.cmdTaskArray.shift();
                e.cmdTaskTimer = null,
                t && e.executeCmdTask(t),
                e.cmdTaskArray.length && e.startCmdTaskTimer()
            }, 0))
        }
        ,
        a.executeCmdTask = function(e) {
            var t = e.cmdName
              , n = e.cmd
              , r = (n = JSON.parse(n)).SER;
            this.isFrequencyControlled(t) ? (this.logger.warn("protocol::executeCmdTask: " + t + " hit freq control"),
            this.markCallbackInvalid(r, i.newFrequencyControlError({
                callFunc: "protocol::executeCmdTask",
                message: t + " hit freq control"
            }))) : this.isConnected() ? ("heartbeat" !== t && this.logger.log("protocol::sendCmd: " + t + " " + JSON.stringify(n)),
            this.doSendCmd(n)) : (this.logger.warn("protocol::executeCmdTask: " + t + " not connected"),
            this.markCallbackInvalid(r, i.newSocketStateError({
                callFunc: "protocol::executeCmdTask",
                message: t + " not connected"
            })))
        }
        ,
        a.isFrequencyControlled = function(e) {
            var t = this.frequencyControlMap && this.frequencyControlMap[e];
            if (t) {
                if (Date.now() < t.from + t.duration)
                    return !0;
                delete this.frequencyControlMap[e]
            }
        }
        ,
        a.doSendCmd = function(e) {
            var t = this
              , n = e.SER;
            function r() {
                t.markCallbackInvalid(n, i.newSocketStateError({
                    callFunc: "protocol::doSendCmd",
                    message: "ser " + n + " socketSendJson Error"
                })),
                t.onDisconnect(!0, "protocol::doSendCmd:socketSendJson")
            }
            t.timerMap[n] = setTimeout(function() {
                t.markCallbackInvalid(n, i.newTimeoutError({
                    callFunc: "protocol::doSendCmd",
                    message: "ser " + n + " Timeout Error"
                }))
            }, s.cmdTimeout);
            try {
                t.socket && t.socket.send ? t.socket.send(JSON.stringify(e)) : r()
            } catch (e) {
                r()
            }
        }
        ,
        a.getObjWithSer = function(e) {
            var t = this.cmdContentMap[e];
            return t && !t.isImSyncDataObj && delete this.cmdContentMap[e],
            t && r.copy(t)
        }
        ,
        a.getCallbackWithSer = function(e) {
            var t = this.cmdCallbackMap[e];
            return t && !t.isImSyncDataCb && delete this.cmdCallbackMap[e],
            t
        }
        ,
        a.getTimerWithSer = function(e) {
            var t = this.timerMap[e];
            return delete this.timerMap[e],
            t
        }
        ,
        a.clearTimerWithSer = function(e) {
            var t = this.getTimerWithSer(e);
            t && clearTimeout(t)
        }
        ,
        a.markCallbackInvalid = function(e, t) {
            this.getObjWithSer(e),
            this.clearTimerWithSer(e);
            var n = this.getCallbackWithSer(e);
            if (n) {
                var r = n.options;
                setTimeout(function() {
                    n(t || i.newUnknownError({
                        ser: e
                    }), r)
                }, 0)
            }
        }
        ,
        a.markAllCallbackInvalid = function(e) {
            var t = this;
            Object.keys(this.cmdCallbackMap).forEach(function(n) {
                t.markCallbackInvalid(n, e)
            })
        }
        ,
        a.getPacketObj = function(e) {
            var t = null;
            if (e && e.raw) {
                var n = e.raw.ser;
                r.notundef(n) && (t = this.getObjWithSer(n))
            }
            return t
        }
        ,
        a.callPacketAckCallback = function(e) {
            var t = this;
            if (e && e.raw) {
                var n = e.raw.ser;
                if (r.notundef(n)) {
                    t.clearTimerWithSer(n);
                    var s = t.getCallbackWithSer(n);
                    s && (s.originUrl && e.obj && e.obj.file && (e.obj.file._url_safe = e.obj.file.url,
                    e.obj.file.url = s.originUrl,
                    "audio" === e.obj.type && (e.obj.file.mp3Url = s.originUrl + (~s.originUrl.indexOf("?") ? "&" : "?") + "audioTrans&type=mp3")),
                    e.promise ? e.promise.then(function() {
                        s(e.error, e.obj)
                    }, function(r) {
                        r.callFunc = "protocol::callPacketAckCallback",
                        r.message = "Resp Promoise Error: cmd: " + e.cmd + ", ser: " + n;
                        var o = i.customError("CALLBACK_ACK_ERR", r);
                        t.logger.error("protocol::callPacketAckCallback: promise error " + JSON.stringify(r)),
                        s(o, e.obj, e.content)
                    }) : s(e.error, e.obj, e.content))
                }
            }
        }
        ,
        a.onMessage = function(e) {
            var t = this;
            t.heartbeat(),
            t.parser.parseResponse(e).then(function(e) {
                e.notFound && t.logger.warn("protocol::onMessage: packet not found " + JSON.stringify(e)),
                e.error ? (e.error.message = e.cmd + " error: " + e.error.message,
                t.logger.error("protocol::onMessage: packet error " + JSON.stringify(e.error))) : e.content || "heartbeat" === e.cmd || t.logger.warn("protocol::onMessage: packet.content undefined " + JSON.stringify(e)),
                e.frequencyControlDuration && (t.logger.error("protocol::onMessage: server freq control " + JSON.stringify(e.cmd)),
                t.frequencyControlMap = t.frequencyControlMap || {},
                t.frequencyControlMap[e.cmd] = {
                    from: +new Date,
                    duration: e.frequencyControlDuration
                }),
                e.obj = t.getPacketObj(e),
                "heartbeat" !== e.cmd && "getClientAntispam" !== e.cmd && t.logger.log("protocol::recvCmd: " + e.cmd + " " + e.rawStr);
                var n = "process" + r.capFirstLetter(e.service);
                if (t[n])
                    if ("heartbeat" !== e.cmd && t.logger.warn("protocol::recvCmd: " + e.cmd + " " + n, e.content),
                    "syncDone" === e.cmd) {
                        if (t.cmdCallbackMap[e.raw.ser] && t.cmdCallbackMap[e.raw.ser].isImSyncDataCb) {
                            t.cmdCallbackMap[e.raw.ser].isImSyncDataCb = !1;
                            var s = function(e, t) {
                                this.checkNosReqNum++,
                                this.getNosOriginUrlReqNum <= 0 || this.checkNosReqNum >= 10 ? this[e](t) : setTimeout(s, 300)
                            }
                            .bind(t, n, e);
                            s.call(t, n, e)
                        }
                    } else
                        t[n](e);
                else
                    t.logger.warn("protocol::onMessage: " + n + " not found");
                t.callPacketAckCallback(e)
            })
        }
        ,
        a.onMiscError = function(e, t, n) {
            t && this.notifyError(e, t, n)
        }
        ,
        a.onCustomError = function(e, t) {
            var n = i.customError(e, t)
              , r = t.message || "未知错误";
            this.onMiscError(r, n)
        }
        ,
        a.notifyError = function(e, t, n) {
            this.isConnected() && (this.logger.error((e || "") + " " + this.name, t, n),
            this.options.onerror(t, n))
        }
        ,
        a.emitAPI = function(e) {
            var t = e.type
              , n = e.obj;
            this.api.emit(t, n)
        }
        ,
        e.exports = o,
        n(310),
        n(308),
        n(307),
        n(306),
        n(305)
    }
    , function(e, t, n) {
        var r = n(49)
          , s = Math.min;
        e.exports = function(e) {
            return e > 0 ? s(r(e), 9007199254740991) : 0
        }
    }
    , function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, s = n(89), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        t.default = i.default || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
    }
    , function(e, t, n) {
        var r = n(30)
          , s = n(27)
          , i = n(18)
          , o = n(47)
          , a = n(16)
          , c = n(66)
          , u = Object.getOwnPropertyDescriptor;
        t.f = n(17) ? u : function(e, t) {
            if (e = i(e),
            t = o(t, !0),
            c)
                try {
                    return u(e, t)
                } catch (e) {}
            if (a(e, t))
                return s(!r.f.call(e, t), e[t])
        }
    }
    , function(e, t, n) {
        var r = n(64)
          , s = n(44).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) {
            return r(e, s)
        }
    }
    , function(e, t, n) {
        var r = n(34);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    }
    , function(e, t, n) {
        var r = n(16)
          , s = n(18)
          , i = n(105)(!1)
          , o = n(46)("IE_PROTO");
        e.exports = function(e, t) {
            var n, a = s(e), c = 0, u = [];
            for (n in a)
                n != o && r(a, n) && u.push(n);
            for (; t.length > c; )
                r(a, n = t[c++]) && (~i(u, n) || u.push(n));
            return u
        }
    }
    , function(e, t, n) {
        e.exports = n(20)
    }
    , function(e, t, n) {
        e.exports = !n(17) && !n(22)(function() {
            return 7 != Object.defineProperty(n(55)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }
    , function(e, t, n) {
        "use strict";
        var r = n(38)
          , s = n(15)
          , i = n(65)
          , o = n(20)
          , a = n(23)
          , c = n(107)
          , u = n(37)
          , m = n(78)
          , l = n(7)("iterator")
          , d = !([].keys && "next"in [].keys())
          , p = function() {
            return this
        };
        e.exports = function(e, t, n, f, g, h, y) {
            c(n, t, f);
            var v, b, T, M = function(e) {
                if (!d && e in I)
                    return I[e];
                switch (e) {
                case "keys":
                case "values":
                    return function() {
                        return new n(this,e)
                    }
                }
                return function() {
                    return new n(this,e)
                }
            }, S = t + " Iterator", k = "values" == g, C = !1, I = e.prototype, P = I[l] || I["@@iterator"] || g && I[g], O = P || M(g), x = g ? k ? M("entries") : O : void 0, w = "Array" == t && I.entries || P;
            if (w && (T = m(w.call(new e))) !== Object.prototype && T.next && (u(T, S, !0),
            r || "function" == typeof T[l] || o(T, l, p)),
            k && P && "values" !== P.name && (C = !0,
            O = function() {
                return P.call(this)
            }
            ),
            r && !y || !d && !C && I[l] || o(I, l, O),
            a[t] = O,
            a[S] = p,
            g)
                if (v = {
                    values: k ? O : M("values"),
                    keys: h ? O : M("keys"),
                    entries: x
                },
                y)
                    for (b in v)
                        b in I || i(I, b, v[b]);
                else
                    s(s.P + s.F * (d || C), t, v);
            return v
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(13)
          , s = r.f
          , i = n(152);
        function o(e) {
            e.onload && this.once("load", e.onload),
            e.onerror && this.once("error", e.onerror),
            e.onbeforesend && this.once("beforesend", e.onbeforesend),
            e.onaftersend && this.once("aftersend", e.onaftersend);
            var t = (e = this.options = r.fetch({
                method: "GET",
                url: "",
                sync: !1,
                data: null,
                headers: {},
                cookie: !1,
                timeout: 6e4,
                type: "text",
                form: null,
                input: null,
                putFileAtEnd: !1,
                proxyUrl: ""
            }, e)).headers;
            r.notexist(t["Content-Type"]) && (t["Content-Type"] = "application/x-www-form-urlencoded"),
            this.send()
        }
        var a = o.prototype = Object.create(i.prototype);
        a.send = function() {
            var e = this
              , t = e.options;
            setTimeout(function() {
                try {
                    try {
                        e.emit("beforesend", t)
                    } catch (e) {
                        console.log("error:", "ignore error ajax beforesend,", e)
                    }
                    e.doSend()
                } catch (t) {
                    console.log("error:", "ignore error server error,", t),
                    e.onError("serverError", "请求失败:" + t.message)
                }
            }, 0)
        }
        ,
        a.doSend = s,
        a.afterSend = function() {
            var e = this;
            setTimeout(function() {
                e.emit("aftersend", e.options)
            }, 0)
        }
        ,
        a.onLoad = function(e) {
            var t = this.options
              , n = e.status
              , r = e.result;
            if (0 === ("" + n).indexOf("2")) {
                if ("json" === t.type)
                    try {
                        r = JSON.parse(r)
                    } catch (e) {
                        return console.log("error:", "ignore error parse json,", e),
                        void this.onError("parseError", r)
                    }
                this.emit("load", r)
            } else
                this.onError("serverError", "服务器返回异常状态", {
                    status: n,
                    result: r
                })
        }
        ,
        a.onError = function(e, t, n) {
            var s = r.isObject(n) ? n : {};
            s.code = e || "error",
            s.message = t || "发生错误",
            this.emit("error", s)
        }
        ,
        a.onTimeout = function() {
            this.onError("timeout", "请求超时")
        }
        ,
        a.abort = function() {
            this.onError("abort", "客户端中止")
        }
        ,
        a.header = function(e) {
            var t = this;
            if (!r.isArray(e))
                return t.getResponseHeader(e || "");
            var n = {};
            return e.forEach(function(e) {
                n[e] = t.header(e)
            }),
            n
        }
        ,
        a.getResponseHeader = s,
        a.destroy = s,
        e.exports = o
    }
    , function(e, t, n) {
        "use strict";
        var r = n(5)
          , s = {
            genUrlSep: function(e) {
                return -1 === (e = "" + e).indexOf("?") ? "?imageView&" : "&"
            },
            urlQuery2Object: function(e) {
                if ("[object String]" !== Object.prototype.toString.call(e) || "" === e)
                    return {};
                var t = e.indexOf("?");
                if (-1 !== t) {
                    var n = e.slice(t + 1).split("&")
                      , r = {};
                    return n.forEach(function(e) {
                        if (~e.indexOf("=")) {
                            var t = e.split("=");
                            r[t[0]] = decodeURIComponent(t[1])
                        } else
                            r[e] = ""
                    }),
                    r
                }
            },
            url2object: function(e) {
                "[object String]" !== Object.prototype.toString.call(e) && (e = "");
                var t = (e = e || "").indexOf("https") >= 0 ? "https://" : "http://"
                  , n = e.replace(t, "");
                n.indexOf("?") >= 0 && (n = n.substring(0, n.indexOf("?")));
                var r = n.split("/");
                n = r[0];
                var s = "";
                if (r.length > 0 && (s = r.slice(1).join("/")),
                -1 === e.indexOf("?"))
                    return {
                        protocol: t,
                        hostname: n,
                        path: s,
                        query: {}
                    };
                var i = e.substr(e.indexOf("?") + 1).split("&")
                  , o = {};
                return i.forEach(function(e) {
                    if (e.indexOf("=") > 0) {
                        var t = e.split("=");
                        o[t[0]] = decodeURIComponent(t[1])
                    } else
                        o[e] = ""
                }),
                {
                    protocol: t,
                    hostname: n,
                    path: s,
                    query: o
                }
            },
            object2url: function(e) {
                var t = e.protocol
                  , n = e.hostname
                  , r = e.path
                  , s = e.query;
                t = t || "http://",
                n = n || "",
                r && (n = n + "/" + r),
                s = s || {};
                var i = [];
                for (var o in s)
                    "imageView" !== o && i.push(o + "=" + encodeURIComponent(s[o]));
                return i.length > 0 ? "" + t + n + "?imageView&" + i.join("&") : "" + t + n
            },
            genPrivateUrl: function(e) {
                var t = s.url2object(e)
                  , n = t.hostname
                  , i = t.path
                  , o = r.downloadHost
                  , a = r.downloadUrl;
                if (n === o) {
                    var c = i.indexOf("/");
                    if (-1 !== c) {
                        var u = i.substring(0, c)
                          , m = i.substring(c + 1);
                        return a.replace("{bucket}", u).replace("{object}", m)
                    }
                } else if (n && "[object String]" == Object.prototype.toString.call(n) && ~n.indexOf(o)) {
                    var l = t.path
                      , d = l.indexOf(".");
                    if (-1 !== d) {
                        var p = l.substring(0, d)
                          , f = l;
                        return a.replace("{bucket}", p).replace("{object}", f)
                    }
                }
                return e
            }
        };
        e.exports = s
    }
    , function(e, t) {
        e.exports = function(e, t) {
            var n = t.split(".");
            for (; n.length; ) {
                var r = n.shift()
                  , s = !1;
                if ("?" == r[r.length - 1] && (r = r.slice(0, -1),
                s = !0),
                !(e = e[r]) && s)
                    return e
            }
            return e
        }
    }
    , , function(e, t, n) {
        "use strict";
        var r, s = n(9), i = (r = s) && r.__esModule ? r : {
            default: r
        }, o = n(69);
        var a = n(0)
          , c = a.notundef
          , u = a.exist
          , m = n(125)
          , l = n(167)
          , d = l.typeMap;
        function p(e) {
            e.resend ? (a.verifyOptions(e, "idClient", "msg::Message"),
            this.idClient = e.idClient) : this.idClient = a.guid(),
            this.type = d[e.type],
            this.resend = e.resend ? 1 : 0,
            c(e.custom) && ("object" === (0,
            i.default)(e.custom) ? this.custom = JSON.stringify(e.custom) : this.custom = "" + e.custom),
            c(e.text) && (this.body = "" + e.text),
            c(e.body) && (this.body = "" + e.body),
            c(e.yidunEnable) && (this.yidunEnable = e.yidunEnable ? 1 : 0),
            c(e.antiSpamUsingYidun) && (this.antiSpamUsingYidun = e.antiSpamUsingYidun ? 1 : 0),
            c(e.antiSpamContent) && ("object" === (0,
            i.default)(e.antiSpamContent) ? this.antiSpamContent = JSON.stringify(e.antiSpamContent) : this.antiSpamContent = "" + e.antiSpamContent),
            c(e.antiSpamBusinessId) && ("object" === (0,
            i.default)(e.antiSpamBusinessId) ? this.antiSpamBusinessId = JSON.stringify(e.antiSpamBusinessId) : this.antiSpamBusinessId = "" + e.antiSpamBusinessId),
            c(e.skipHistory) && (this.skipHistory = e.skipHistory ? 1 : 0),
            c(e.highPriority) && (this.highPriority = e.highPriority ? 1 : 0),
            c(e.clientAntiSpam) && (this.clientAntiSpam = e.clientAntiSpam ? 1 : 0)
        }
        p.validTypes = l.validTypes,
        a.merge(p.prototype, l.prototype),
        p.getType = l.getType,
        p.reverse = function(e) {
            var t = a.filterObj(e, "chatroomId idClient from fromNick fromAvatar _fromAvatar_safe fromCustom userUpdateTime custom status");
            return c(t.fromAvatar) && (t.fromAvatar = (0,
            o.genPrivateUrl)(t.fromAvatar)),
            t = a.merge(t, {
                fromClientType: m.reverseType(e.fromClientType),
                time: +e.time,
                type: p.getType(e),
                text: u(e.body) ? e.body : "",
                resend: 1 == +e.resend
            }),
            c(t.userUpdateTime) && (t.userUpdateTime = +t.userUpdateTime),
            t.status = t.status || "success",
            t
        }
        ,
        p.setExtra = function(e, t) {
            l.setFlow(e, t)
        }
        ,
        e.exports = p
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(9), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        var o = n(0)
          , a = o.undef
          , c = o.notundef
          , u = o.exist
          , m = n(125)
          , l = n(167)
          , d = "#%@all@%#"
          , p = {
            p2p: 0,
            team: 1,
            superTeam: 5
        }
          , f = {
            0: "p2p",
            1: "team",
            5: "superTeam"
        }
          , g = Object.keys(p)
          , h = l.typeMap
          , y = l.validTypes;
        function v(e) {
            o.verifyOptions(e, "scene to type", "msg::Message"),
            o.verifyParamValid("scene", e.scene, g, "msg::Message");
            this.scene = p[e.scene],
            this.to = "" + e.to,
            this.type = h[e.type],
            this.resend = e.resend ? 1 : 0,
            e.resend ? (o.verifyOptions(e, "idClient", "msg::Message"),
            this.idClient = e.idClient) : this.idClient = o.guid(),
            c(e.text) && (this.body = "" + e.text),
            c(e.custom) && ("object" === (0,
            i.default)(e.custom) ? this.custom = JSON.stringify(e.custom) : this.custom = "" + e.custom),
            c(e.body) && (this.body = "" + e.body),
            c(e.pushContent) && (this.pushContent = "" + e.pushContent),
            c(e.pushPayload) && (this.pushPayload = "" + e.pushPayload);
            var t = e.apns;
            if (c(t) && "team" === e.scene) {
                var n = t.accounts;
                c(n) && o.verifyParamType("apns.accounts", n, "array", "msg::Message"),
                this.apnsAccounts = n ? JSON.stringify(n) : d,
                this.apnsContent = t.content || e.pushContent || "",
                o.verifyBooleanWithDefault(t, "forcePush", !0, "options.apns", "msg::Message"),
                this.apnsForcePush = t.forcePush ? 1 : 0
            }
            c(e.isHistoryable) && (this.isHistoryable = e.isHistoryable ? 1 : 0),
            c(e.isRoamingable) && (this.isRoamingable = e.isRoamingable ? 1 : 0),
            c(e.isSyncable) && (this.isSyncable = e.isSyncable ? 1 : 0),
            c(e.cc) && (this.cc = e.cc ? 1 : 0),
            c(e.isPushable) && (this.isPushable = e.isPushable ? 1 : 0),
            c(e.isOfflinable) && (this.isOfflinable = e.isOfflinable ? 1 : 0),
            c(e.isUnreadable) && (this.isUnreadable = e.isUnreadable ? 1 : 0),
            c(e.needPushNick) && (this.needPushNick = e.needPushNick ? 1 : 0),
            c(e.needMsgReceipt) && (this.needMsgReceipt = e.needMsgReceipt ? 1 : 0),
            c(e.yidunEnable) && (this.yidunEnable = e.yidunEnable ? 1 : 0),
            c(e.antiSpamUsingYidun) && (this.antiSpamUsingYidun = e.antiSpamUsingYidun ? 1 : 0),
            c(e.clientAntiSpam) && (this.clientAntiSpam = e.clientAntiSpam ? 1 : 0),
            c(e.antiSpamContent) && ("object" === (0,
            i.default)(e.antiSpamContent) ? this.antiSpamContent = JSON.stringify(e.antiSpamContent) : this.antiSpamContent = "" + e.antiSpamContent),
            c(e.antiSpamBusinessId) && ("object" === (0,
            i.default)(e.antiSpamBusinessId) ? this.antiSpamBusinessId = JSON.stringify(e.antiSpamBusinessId) : this.antiSpamBusinessId = "" + e.antiSpamBusinessId)
        }
        o.merge(v.prototype, l.prototype),
        v.prototype.getScene = function() {
            return f[this.scene]
        }
        ,
        v.getType = l.getType,
        v.reverse = function(e) {
            var t = {
                scene: f[e.scene] || e.scene,
                from: e.from,
                fromNick: e.fromNick,
                fromClientType: m.reverseType(e.fromClientType),
                fromDeviceId: e.fromDeviceId,
                to: "" + e.to,
                time: +e.time,
                type: v.getType(e),
                text: u(e.body) ? e.body : "",
                isHistoryable: a(e.isHistoryable) || 1 == +e.isHistoryable,
                isRoamingable: a(e.isRoamingable) || 1 == +e.isRoamingable,
                isSyncable: a(e.isSyncable) || 1 == +e.isSyncable,
                cc: a(e.cc) || 1 == +e.cc,
                isPushable: a(e.isPushable) || 1 == +e.isPushable,
                isOfflinable: a(e.isOfflinable) || 1 == +e.isOfflinable,
                isUnreadable: a(e.isUnreadable) || 1 == +e.isUnreadable,
                isReplyMsg: a(e.isReplyMsg) || 1 == +e.isReplyMsg,
                needPushNick: a(e.needPushNick) || 1 == +e.needPushNick,
                needMsgReceipt: 1 == +e.needMsgReceipt,
                isLocal: !1
            };
            if (e.isInBlackList && (t.isInBlackList = 1 == +e.isInBlackList),
            c(e.isMuted) && (t.isMuted = 1 == +e.isMuted),
            c(e.resend) && (t.resend = 1 == +e.resend),
            c(e.idClient) && (t.idClient = e.idClient),
            c(e.idServer) && (t.idServer = "" + e.idServer),
            c(e.userUpdateTime) && (t.userUpdateTime = +e.userUpdateTime),
            c(e.custom) && (t.custom = e.custom),
            c(e.pushContent) && (t.pushContent = e.pushContent),
            c(e.pushPayload) && (t.pushPayload = e.pushPayload),
            c(e.tempTeamMemberCount) && (t.tempTeamMemberCount = +e.tempTeamMemberCount),
            c(e.apnsAccounts)) {
                if (t.apns = {},
                e.apnsAccounts !== d) {
                    var n = e.apnsAccounts;
                    try {
                        t.apns.accounts = JSON.parse(n)
                    } catch (e) {
                        t.apns.accounts = []
                    }
                }
                t.apns.content = e.apnsContent || "",
                t.apns.forcePush = 1 == +e.apnsForcePush
            }
            return t.status = e.status || "success",
            c(e.filter) && (t.filter = e.filter),
            t
        }
        ,
        v.setExtra = function(e, t) {
            e.target = v.getMsgTarget(e, t),
            e.sessionId = e.scene + "-" + e.target,
            l.setFlow(e, t)
        }
        ,
        v.getMsgTarget = function(e, t) {
            return "p2p" === e.scene ? e.to === t ? e.from : e.to : "team" === e.scene || "superTeam" === e.scene ? e.to : void 0
        }
        ,
        v.deduplication = function(e) {
            var t, n = {}, r = [];
            return e.forEach(function(e) {
                t = e.idClient,
                n[t] || (n[t] = !0,
                r.push(e))
            }),
            r
        }
        ,
        v.sortMsgs = function(e) {
            return e = e.slice(0),
            o.sortObjArray(e, {
                sortPath: "time"
            }),
            e
        }
        ,
        v.getLastMsg = function(e) {
            return (e = v.sortMsgs(e))[e.length - 1]
        }
        ,
        v.getLastNotIgnoredMsg = function(e) {
            for (var t = null, n = (e = v.sortMsgs(e)).length - 1; n >= 0; n--)
                if (!(t = e[n]).ignore)
                    return t;
            return null
        }
        ,
        v.getMaxTimetag = function(e) {
            return v.getLastMsg(e).time
        }
        ,
        v.validScenes = g,
        v.validTypes = y,
        e.exports = v
    }
    , function(e, t, n) {
        var r = n(34)
          , s = n(7)("toStringTag")
          , i = "Arguments" == r(function() {
            return arguments
        }());
        e.exports = function(e) {
            var t, n, o;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), s)) ? n : i ? r(t) : "Object" == (o = r(t)) && "function" == typeof t.callee ? "Arguments" : o
        }
    }
    , function(e, t, n) {
        var r = n(74)
          , s = n(7)("iterator")
          , i = n(23);
        e.exports = n(6).getIteratorMethod = function(e) {
            if (null != e)
                return e[s] || e["@@iterator"] || i[r(e)]
        }
    }
    , function(e, t) {
        e.exports = function e(t, n) {
            "use strict";
            var r, s, i = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi, o = /(^[ ]*|[ ]*$)/g, a = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/, c = /^0x[0-9a-f]+$/i, u = /^0/, m = function(t) {
                return e.insensitive && ("" + t).toLowerCase() || "" + t
            }, l = m(t).replace(o, "") || "", d = m(n).replace(o, "") || "", p = l.replace(i, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), f = d.replace(i, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), g = parseInt(l.match(c), 16) || 1 !== p.length && l.match(a) && Date.parse(l), h = parseInt(d.match(c), 16) || g && d.match(a) && Date.parse(d) || null;
            if (h) {
                if (g < h)
                    return -1;
                if (g > h)
                    return 1
            }
            for (var y = 0, v = Math.max(p.length, f.length); y < v; y++) {
                if (r = !(p[y] || "").match(u) && parseFloat(p[y]) || p[y] || 0,
                s = !(f[y] || "").match(u) && parseFloat(f[y]) || f[y] || 0,
                isNaN(r) !== isNaN(s))
                    return isNaN(r) ? 1 : -1;
                if (typeof r != typeof s && (r += "",
                s += ""),
                r < s)
                    return -1;
                if (r > s)
                    return 1
            }
            return 0
        }
    }
    , function(e, t) {}
    , function(e, t, n) {
        var r = n(16)
          , s = n(40)
          , i = n(46)("IE_PROTO")
          , o = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = s(e),
            r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null
        }
    }
    , function(e, t, n) {
        var r = n(8).document;
        e.exports = r && r.documentElement
    }
    , , , function(e, t, n) {
        "use strict";
        var r = {
            link: {
                id: 1,
                heartbeat: 2
            },
            sync: {
                id: 5,
                sync: 1,
                syncTeamMembers: 2
            },
            misc: {
                id: 6,
                getSimpleNosToken: 1,
                getNosToken: 2,
                notifyUploadLog: 3,
                uploadSdkLogUrl: 4,
                audioToText: 5,
                processImage: 6,
                getNosTokenTrans: 7,
                notifyTransLog: 8,
                fetchFile: 9,
                fetchFileList: 10,
                removeFile: 11,
                getClientAntispam: 17,
                fileQuickTransfer: 18,
                getNosOriginUrl: 22,
                getServerTime: 23
            },
            avSignal: {
                id: 15,
                signalingCreate: 1,
                signalingDelay: 2,
                signalingClose: 3,
                signalingJoin: 4,
                signalingLeave: 5,
                signalingInvite: 6,
                signalingCancel: 7,
                signalingReject: 8,
                signalingAccept: 9,
                signalingControl: 10,
                signalingNotify: 11,
                signalingMutilClientSyncNotify: 12,
                signalingUnreadMessageSyncNotify: 13,
                signalingChannelsSyncNotify: 14,
                signalingGetChannelInfo: 15
            }
        }
          , s = {
            heartbeat: {
                sid: r.link.id,
                cid: r.link.heartbeat
            },
            getSimpleNosToken: {
                sid: r.misc.id,
                cid: r.misc.getSimpleNosToken,
                params: [{
                    type: "int",
                    name: "num"
                }]
            },
            getNosToken: {
                sid: r.misc.id,
                cid: r.misc.getNosToken,
                params: [{
                    type: "String",
                    name: "responseBody"
                }, {
                    type: "Property",
                    name: "nosToken",
                    entity: "nosToken"
                }]
            },
            uploadSdkLogUrl: {
                sid: r.misc.id,
                cid: r.misc.uploadSdkLogUrl,
                params: [{
                    type: "string",
                    name: "url"
                }]
            },
            audioToText: {
                sid: r.misc.id,
                cid: r.misc.audioToText,
                params: [{
                    type: "Property",
                    name: "audioToText"
                }]
            },
            processImage: {
                sid: r.misc.id,
                cid: r.misc.processImage,
                params: [{
                    type: "String",
                    name: "url"
                }, {
                    type: "PropertyArray",
                    name: "imageOps",
                    entity: "imageOp"
                }]
            },
            getClientAntispam: {
                sid: r.misc.id,
                cid: r.misc.getClientAntispam,
                params: [{
                    type: "Property",
                    name: "clientAntispam"
                }]
            },
            fileQuickTransfer: {
                sid: r.misc.id,
                cid: r.misc.fileQuickTransfer,
                params: [{
                    type: "Property",
                    name: "fileQuickTransfer"
                }]
            },
            getNosOriginUrl: {
                sid: r.misc.id,
                cid: r.misc.getNosOriginUrl,
                params: [{
                    type: "Property",
                    name: "nosFileUrlTag"
                }]
            },
            getServerTime: {
                sid: r.misc.id,
                cid: r.misc.getServerTime,
                params: []
            },
            getNosTokenTrans: {
                sid: r.misc.id,
                cid: r.misc.getNosTokenTrans,
                params: [{
                    type: "Property",
                    name: "transToken"
                }]
            },
            fetchFile: {
                sid: r.misc.id,
                cid: r.misc.fetchFile,
                params: [{
                    type: "String",
                    name: "docId"
                }]
            },
            fetchFileList: {
                sid: r.misc.id,
                cid: r.misc.fetchFileList,
                params: [{
                    type: "Property",
                    name: "fileListParam"
                }]
            },
            removeFile: {
                sid: r.misc.id,
                cid: r.misc.removeFile,
                params: [{
                    type: "String",
                    name: "docId"
                }]
            },
            signalingCreate: {
                sid: r.avSignal.id,
                cid: r.avSignal.signalingCreate,
                params: [{
                    type: "Property",
                    name: "avSignalTag"
                }]
            },
            signalingDelay: {
                sid: r.avSignal.id,
                cid: r.avSignal.signalingDelay,
                params: [{
                    type: "Property",
                    name: "avSignalTag"
                }]
            },
            signalingClose: {
                sid: r.avSignal.id,
                cid: r.avSignal.signalingClose,
                params: [{
                    type: "Property",
                    name: "avSignalTag"
                }]
            },
            signalingJoin: {
                sid: r.avSignal.id,
                cid: r.avSignal.signalingJoin,
                params: [{
                    type: "Property",
                    name: "avSignalTag"
                }]
            },
            signalingLeave: {
                sid: r.avSignal.id,
                cid: r.avSignal.signalingLeave,
                params: [{
                    type: "Property",
                    name: "avSignalTag"
                }]
            },
            signalingInvite: {
                sid: r.avSignal.id,
                cid: r.avSignal.signalingInvite,
                params: [{
                    type: "Property",
                    name: "avSignalTag"
                }]
            },
            signalingCancel: {
                sid: r.avSignal.id,
                cid: r.avSignal.signalingCancel,
                params: [{
                    type: "Property",
                    name: "avSignalTag"
                }]
            },
            signalingReject: {
                sid: r.avSignal.id,
                cid: r.avSignal.signalingReject,
                params: [{
                    type: "Property",
                    name: "avSignalTag"
                }]
            },
            signalingAccept: {
                sid: r.avSignal.id,
                cid: r.avSignal.signalingAccept,
                params: [{
                    type: "Property",
                    name: "avSignalTag"
                }]
            },
            signalingControl: {
                sid: r.avSignal.id,
                cid: r.avSignal.signalingControl,
                params: [{
                    type: "Property",
                    name: "avSignalTag"
                }]
            },
            signalingGetChannelInfo: {
                sid: r.avSignal.id,
                cid: r.avSignal.signalingGetChannelInfo,
                params: [{
                    type: "Property",
                    name: "avSignalTag"
                }]
            }
        };
        e.exports = {
            idMap: r,
            cmdConfig: s,
            packetConfig: {
                "1_2": {
                    service: "link",
                    cmd: "heartbeat"
                },
                "6_1": {
                    service: "misc",
                    cmd: "getSimpleNosToken",
                    response: [{
                        type: "PropertyArray",
                        name: "nosTokens",
                        entity: "nosToken"
                    }]
                },
                "6_2": {
                    service: "misc",
                    cmd: "getNosToken",
                    response: [{
                        type: "Property",
                        name: "nosToken"
                    }]
                },
                "6_3": {
                    service: "misc",
                    cmd: "notifyUploadLog"
                },
                "6_5": {
                    service: "misc",
                    cmd: "audioToText",
                    response: [{
                        type: "String",
                        name: "text"
                    }]
                },
                "6_6": {
                    service: "misc",
                    cmd: "processImage",
                    response: [{
                        type: "String",
                        name: "url"
                    }]
                },
                "6_7": {
                    service: "misc",
                    cmd: "getNosTokenTrans",
                    response: [{
                        type: "Property",
                        name: "nosToken"
                    }, {
                        type: "String",
                        name: "docId"
                    }]
                },
                "6_8": {
                    service: "misc",
                    cmd: "notifyTransLog",
                    response: [{
                        type: "Property",
                        name: "transInfo"
                    }]
                },
                "6_9": {
                    service: "misc",
                    cmd: "fetchFile",
                    response: [{
                        type: "Property",
                        name: "info",
                        entity: "transInfo"
                    }]
                },
                "6_10": {
                    service: "misc",
                    cmd: "fetchFileList",
                    response: [{
                        type: "PropertyArray",
                        name: "list",
                        entity: "transInfo"
                    }, {
                        type: "Number",
                        name: "totalCount"
                    }]
                },
                "6_11": {
                    service: "misc",
                    cmd: "removeFile",
                    response: [{
                        type: "String",
                        name: "res"
                    }]
                },
                "6_17": {
                    service: "misc",
                    cmd: "getClientAntispam",
                    response: [{
                        type: "Property",
                        name: "clientAntispam"
                    }]
                },
                "6_18": {
                    service: "misc",
                    cmd: "fileQuickTransfer",
                    response: [{
                        type: "Property",
                        name: "fileQuickTransfer"
                    }]
                },
                "6_22": {
                    service: "misc",
                    cmd: "getNosOriginUrl",
                    response: [{
                        type: "Property",
                        name: "nosFileUrlTag"
                    }]
                },
                "6_23": {
                    service: "misc",
                    cmd: "getServerTime",
                    response: [{
                        type: "Number",
                        name: "time"
                    }]
                },
                "15_1": {
                    service: "avSignal",
                    cmd: "signalingCreate",
                    response: [{
                        type: "Property",
                        name: "avSignalTag"
                    }]
                },
                "15_2": {
                    service: "avSignal",
                    cmd: "signalingDelay",
                    response: [{
                        type: "Property",
                        name: "avSignalTag"
                    }]
                },
                "15_3": {
                    service: "avSignal",
                    cmd: "signalingClose",
                    response: [{
                        type: "Property",
                        name: "avSignalTag"
                    }]
                },
                "15_4": {
                    service: "avSignal",
                    cmd: "signalingJoin",
                    response: [{
                        type: "Property",
                        name: "avSignalTag"
                    }]
                },
                "15_5": {
                    service: "avSignal",
                    cmd: "signalingLeave",
                    response: []
                },
                "15_6": {
                    service: "avSignal",
                    cmd: "signalingInvite",
                    response: []
                },
                "15_7": {
                    service: "avSignal",
                    cmd: "signalingCancel",
                    response: []
                },
                "15_8": {
                    service: "avSignal",
                    cmd: "signalingReject",
                    response: []
                },
                "15_9": {
                    service: "avSignal",
                    cmd: "signalingAccept",
                    response: []
                },
                "15_10": {
                    service: "avSignal",
                    cmd: "signalingControl",
                    response: []
                },
                "15_11": {
                    service: "avSignal",
                    cmd: "signalingNotify",
                    response: [{
                        type: "Property",
                        name: "avSignalTag"
                    }]
                },
                "15_12": {
                    service: "avSignal",
                    cmd: "signalingMutilClientSyncNotify",
                    response: [{
                        type: "Property",
                        name: "avSignalTag"
                    }]
                },
                "15_13": {
                    service: "avSignal",
                    cmd: "signalingUnreadMessageSyncNotify",
                    response: [{
                        type: "PropertyArray",
                        name: "avSignalTag"
                    }]
                },
                "15_14": {
                    service: "avSignal",
                    cmd: "signalingChannelsSyncNotify",
                    response: [{
                        type: "PropertyArray",
                        name: "avSignalTag"
                    }]
                },
                "15_15": {
                    service: "avSignal",
                    cmd: "signalingGetChannelInfo",
                    response: [{
                        type: "Property",
                        name: "avSignalTag"
                    }]
                }
            }
        }
    }
    , , function(e, t, n) {
        "use strict";
        var r, s = n(69), i = n(0), o = n(26), a = n(186), c = n(304), u = n(303), m = n(302), l = n(301), d = n(300);
        function p(e) {
            this.mixin(e)
        }
        p.prototype = Object.create(function() {}
        .prototype, {
            protocol: {
                value: null,
                writable: !0,
                enumerable: !0,
                configurable: !0
            }
        }),
        p.prototype.setProtocol = function(e) {
            this.protocol = e
        }
        ,
        p.prototype.mixin = function(e) {
            var t = this;
            this.configMap = this.configMap || {},
            ["idMap", "cmdConfig", "packetConfig"].forEach(function(n) {
                t.configMap[n] = i.merge({}, t.configMap[n], e.configMap && e.configMap[n])
            }),
            ["serializeMap", "unserializeMap"].forEach(function(n) {
                t[n] = i.merge({}, t[n], e[n])
            })
        }
        ,
        p.prototype.createCmd = (r = 1,
        function(e, t) {
            var n = this
              , s = this.configMap.cmdConfig[e]
              , o = "heartbeat" === e ? 0 : r++;
            return o > 32767 && (o = 1,
            r = 2),
            e = {
                SID: s.sid,
                CID: s.cid,
                SER: o
            },
            s.params && (e.Q = [],
            s.params.forEach(function(r) {
                var s = r.type
                  , o = r.name
                  , a = r.entity
                  , c = t[o];
                if (!i.undef(c)) {
                    switch (s) {
                    case "PropertyArray":
                        s = "ArrayMable",
                        c = c.map(function(e) {
                            return {
                                t: "Property",
                                v: n.serialize(e, a)
                            }
                        });
                        break;
                    case "Property":
                        c = n.serialize(c, o);
                        break;
                    case "bool":
                        c = c ? "true" : "false"
                    }
                    e.Q.push({
                        t: s,
                        v: c
                    })
                }
            })),
            e
        }
        ),
        p.prototype.parseResponse = function(e) {
            var t = this;
            return new Promise(function(n, r) {
                var s = JSON.parse(e)
                  , a = {
                    raw: s,
                    rawStr: e,
                    error: o.genError(s.code)
                }
                  , c = t.configMap.packetConfig[s.sid + "_" + s.cid];
                if (!c)
                    return a.notFound = {
                        sid: s.sid,
                        cid: s.cid
                    },
                    void n(a);
                var u = s.r
                  , m = "notify" === c.service && !c.cmd;
                if (a.isNotify = m,
                m) {
                    var l = s.r[1].headerPacket;
                    if (c = t.configMap.packetConfig[l.sid + "_" + l.cid],
                    u = s.r[1].body,
                    !c)
                        return a.notFound = {
                            sid: l.sid,
                            cid: l.cid
                        },
                        void n(a)
                }
                if (a.service = c.service,
                a.cmd = c.cmd,
                a.error) {
                    var d = s.sid + "_" + s.cid;
                    if (m && (d = l.sid + "_" + l.cid),
                    a.error.cmd = a.cmd,
                    a.error.callFunc = "protocol::parseResponse: " + d,
                    416 === a.error.code) {
                        var p = u[0];
                        p && (a.frequencyControlDuration = 1e3 * p)
                    }
                }
                var f = !1;
                a.error && c.trivialErrorCodes && (f = -1 !== c.trivialErrorCodes.indexOf(a.error.code));
                var g = [];
                if ((!a.error || f) && c.response) {
                    a.content = {};
                    var h = function(e, t, n, r) {
                        if (e && "msg" === r || "sysMsg" === r) {
                            var s = n.content[r];
                            i.isObject(s) && !s.idServer && (s.idServer = "" + t.r[0])
                        }
                    };
                    c.response.forEach(function(e, n) {
                        var r = u[n];
                        if (!i.undef(r)) {
                            var o = e.type
                              , c = e.name
                              , l = e.entity || c;
                            switch (o) {
                            case "Property":
                                g.push(t.unserialize(r, l).then(function(e, t, n, r, s) {
                                    n.content[r] = s,
                                    h(e, t, n, r)
                                }
                                .bind(this, m, s, a, c)));
                                break;
                            case "PropertyArray":
                                a.content[c] = [],
                                r.forEach(function(e) {
                                    g.push(t.unserialize(e, l).then(function(e, t, n) {
                                        e.content[t].push(n)
                                    }
                                    .bind(this, a, c)))
                                });
                                break;
                            case "KVArray":
                                a.content[c] = r,
                                h(m, s, a, c);
                                break;
                            case "long":
                            case "Long":
                            case "byte":
                            case "Byte":
                            case "Number":
                                a.content[c] = +r;
                                break;
                            default:
                                a.content[c] = r,
                                h(m, s, a, c)
                            }
                        }
                    })
                }
                Promise.all(g).then(function() {
                    n(a)
                })
            }
            )
        }
        ,
        p.prototype.serialize = function(e, t) {
            var n = this.serializeMap[t]
              , r = {};
            for (var s in n)
                e.hasOwnProperty(s) && (r[n[s]] = e[s]);
            return r
        }
        ,
        p.prototype.matchNosSafeUrl = function(e) {
            if (!i.isString(e) || !~e.indexOf("_im_url=1"))
                return !1;
            var t = (0,
            s.urlQuery2Object)(e);
            return !(!t || !t._im_url || 1 != t._im_url)
        }
        ,
        p.prototype.getOneNosOriginUrl = function(e, t, n) {
            var r = this;
            return new Promise(function(s, i) {
                r.protocol.getNosOriginUrlReqNum++,
                r.protocol.sendCmd("getNosOriginUrl", {
                    nosFileUrlTag: {
                        safeUrl: e
                    }
                }, function(e, i, o) {
                    r.protocol.getNosOriginUrlReqNum--,
                    e ? console.warn("error: get nos originUrl failed", e) : (t["_" + n + "_safe"] = t[n],
                    t[n] = o.nosFileUrlTag && o.nosFileUrlTag.originUrl),
                    s()
                })
            }
            )
        }
        ,
        p.prototype.checkObjSafeUrl = function(e, t, n) {
            var r = this;
            for (var s in e)
                if (e.hasOwnProperty(s)) {
                    var o = e[s];
                    if (i.isString(o)) {
                        if (this.matchNosSafeUrl(o)) {
                            var a = this.getOneNosOriginUrl(o, e, s);
                            t.push(a),
                            n.push(a)
                        }
                    } else
                        i.isObject(o) ? this.checkObjSafeUrl(o, t, n) : i.isArray(o) && o.forEach(function(e) {
                            i.isObject(e) && r.checkObjSafeUrl(e, t, n)
                        })
                }
        }
        ;
        var f = ["url", "avatar", "fromAvatar", "chatroomAvatar"];
        p.prototype.unserialize = function(e, t) {
            var n = this;
            return new Promise(function(r, s) {
                var i = n.unserializeMap[t]
                  , o = {}
                  , a = [];
                if (e)
                    for (var c in i) {
                        var u = [];
                        if (e.hasOwnProperty(c) && (o[i[c]] = e[c],
                        !n.protocol.keepNosSafeUrl))
                            if ("attach" === i[c] && e[c] && e[c].indexOf && ~e[c].indexOf("_im_url=1"))
                                try {
                                    var m = JSON.parse(e[c]);
                                    n.checkObjSafeUrl(m, u, a),
                                    Promise.all(u).then(function(e, t) {
                                        e.attach = JSON.stringify(t)
                                    }
                                    .bind(n, o, m))
                                } catch (e) {
                                    console.warn(e)
                                }
                            else
                                ~f.indexOf(i[c]) && e[c] && n.matchNosSafeUrl(e[c]) && a.push(n.getOneNosOriginUrl(e[c], o, i[c]))
                    }
                Promise.all(a).then(function(e) {
                    r(o)
                })
            }
            )
        }
        ,
        p.prototype.syncUnserialize = function(e, t) {
            var n = this.unserializeMap[t]
              , r = {};
            if (e)
                for (var s in n)
                    e.hasOwnProperty(s) && (r[n[s]] = e[s]);
            return r
        }
        ;
        var g = new p({
            configMap: a,
            serializeMap: c,
            unserializeMap: u
        })
          , h = new p({
            configMap: m,
            serializeMap: l,
            unserializeMap: d
        });
        e.exports = {
            IM: g,
            Chatroom: h
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(13)
          , s = r.getGlobal()
          , i = {}
          , o = s.name || "_parent"
          , a = []
          , c = [];
        i.addMsgListener = function(e) {
            a.push(e)
        }
        ;
        var u, m, l, d, p = (u = /^([\w]+?:\/\/.*?(?=\/|$))/i,
        function(e) {
            return e = e || "",
            u.test(e) ? RegExp.$1 : "*"
        }
        ), f = function() {
            var e = unescape(s.name || "").trim();
            if (e && 0 === e.indexOf("MSG|")) {
                s.name = "";
                var t = r.string2object(e.replace("MSG|", ""), "|")
                  , n = (t.origin || "").toLowerCase();
                n && "*" !== n && 0 !== location.href.toLowerCase().indexOf(n) || function(e) {
                    for (var t = 0, n = a.length; t < n; t++)
                        try {
                            a[t].call(null, e)
                        } catch (e) {}
                }({
                    data: JSON.parse(t.data || "null"),
                    source: s.frames[t.self] || t.self,
                    origin: p(t.ref || ("undefined" == typeof document ? "" : document.referrer))
                })
            }
        }, g = (l = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return !0;
            return !1
        }
        ,
        function() {
            if (c.length) {
                m = [];
                for (var e, t = c.length - 1; t >= 0; t--)
                    e = c[t],
                    l(m, e.w) || (m.push(e.w),
                    c.splice(t, 1),
                    e.w.name = e.d);
                m = null
            }
        }
        ), h = i.startTimer = (d = !1,
        function() {
            d || (d = !0,
            s.postMessage || (setInterval(g, 100),
            setInterval(f, 20)))
        }
        );
        i.postMessage = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (r.fillUndef(t, {
                origin: "*",
                source: o
            }),
            s.postMessage) {
                var n = t.data;
                s.FormData || (n = JSON.stringify(n)),
                e.postMessage(n, t.origin)
            } else {
                if (h(),
                r.isObject(t)) {
                    var i = {};
                    i.origin = t.origin || "",
                    i.ref = location.href,
                    i.self = t.source,
                    i.data = JSON.stringify(t.data),
                    t = "MSG|" + r.object2string(i, "|", !0)
                }
                c.unshift({
                    w: e,
                    d: escape(t)
                })
            }
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = n(32)
          , s = n(41)
          , i = n(30)
          , o = n(40)
          , a = n(63)
          , c = Object.assign;
        e.exports = !c || n(22)(function() {
            var e = {}
              , t = {}
              , n = Symbol()
              , r = "abcdefghijklmnopqrst";
            return e[n] = 7,
            r.split("").forEach(function(e) {
                t[e] = e
            }),
            7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != r
        }) ? function(e, t) {
            for (var n = o(e), c = arguments.length, u = 1, m = s.f, l = i.f; c > u; )
                for (var d, p = a(arguments[u++]), f = m ? r(p).concat(m(p)) : r(p), g = f.length, h = 0; g > h; )
                    l.call(p, d = f[h++]) && (n[d] = p[d]);
            return n
        }
        : c
    }
    , function(e, t, n) {
        var r = n(15);
        r(r.S + r.F, "Object", {
            assign: n(86)
        })
    }
    , function(e, t, n) {
        n(87),
        e.exports = n(6).Object.assign
    }
    , function(e, t, n) {
        e.exports = {
            default: n(88),
            __esModule: !0
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = r.notundef
          , i = r.fillPropertyWithDefault
          , o = {
            0: "normal",
            1: "owner",
            2: "manager"
        };
        function a(e) {
            r.verifyOptions(e, "teamId", "team::TeamMember"),
            r.verifyParamAtLeastPresentOne(e, "nickInTeam muteTeam muteNotiType custom", "team::TeamMember"),
            this.teamId = e.teamId,
            s(e.account) && (this.account = e.account),
            s(e.nickInTeam) && (this.nickInTeam = e.nickInTeam),
            s(e.muteNotiType) ? this.bits = e.muteNotiType : s(e.muteTeam) && (this.bits = 0,
            e.muteTeam && (this.bits += 1)),
            s(e.mute) && (this.mute = e.mute ? 1 : 0),
            s(e.custom) && (this.custom = "" + e.custom)
        }
        a.reverse = function(e) {
            var t = r.copy(e);
            if (s(t.teamId) && (t.teamId = "" + t.teamId),
            s(t.type) && (t.type = o[t.type]),
            s(t.active) && (t.active = 1 == +t.active),
            s(t.valid) && (t.valid = 1 == +t.valid),
            s(t.mute) && (t.mute = 1 == +t.mute),
            s(t.joinTime) && (t.joinTime = +t.joinTime),
            s(t.updateTime) && (t.updateTime = +t.updateTime),
            s(t.bits)) {
                var n = t.bits;
                delete t.bits,
                t.muteTeam = !!(1 & n),
                t.muteNotiType = n
            }
            return s(t.teamId) && s(t.account) && (t.id = a.genId(t.teamId, t.account)),
            t
        }
        ,
        a.reverseMembers = function(e) {
            return e.map(function(e) {
                return a.reverse(e)
            })
        }
        ,
        a.fillProperties = function(e) {
            var t = i(e, "mute", !1)
              , n = i(e, "custom", "");
            return t || n
        }
        ,
        a.genId = function(e, t) {
            return e + "-" + t
        }
        ,
        a.accounts2ids = function(e, t) {
            return t.map(function(t) {
                return a.genId(e, t)
            })
        }
        ,
        a.assembleMembers = function(e, t) {
            return r.isArray(t) || (t = [t]),
            t.map(function(t) {
                return a.assembleMember(e, t)
            })
        }
        ,
        a.assembleMember = function(e, t) {
            return {
                id: a.genId(e.teamId, t),
                account: t,
                teamId: e.teamId,
                type: "normal",
                nickInTeam: "",
                muteTeam: !1,
                mute: !1,
                joinTime: e.memberUpdateTime,
                updateTime: e.memberUpdateTime,
                active: !0,
                valid: !0,
                invitorAccid: ""
            }
        }
        ,
        a.assembleOwner = function(e) {
            var t = a.assembleMember(e, e.owner);
            return t.type = "owner",
            t
        }
        ,
        e.exports = a
    }
    , function(e, t, n) {
        "use strict";
        var r = n(5);
        "undefined" != typeof window && (window.console || r.isWeixinApp || (window.console = {
            log: function() {},
            info: function() {},
            warn: function() {},
            error: function() {}
        }))
    }
    , function(e, t, n) {
        n(42)("observable")
    }
    , function(e, t, n) {
        n(42)("asyncIterator")
    }
    , function(e, t, n) {
        var r = n(18)
          , s = n(62).f
          , i = {}.toString
          , o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function(e) {
            return o && "[object Window]" == i.call(e) ? function(e) {
                try {
                    return s(e)
                } catch (e) {
                    return o.slice()
                }
            }(e) : s(r(e))
        }
    }
    , function(e, t, n) {
        var r = n(34);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    }
    , function(e, t, n) {
        var r = n(32)
          , s = n(41)
          , i = n(30);
        e.exports = function(e) {
            var t = r(e)
              , n = s.f;
            if (n)
                for (var o, a = n(e), c = i.f, u = 0; a.length > u; )
                    c.call(e, o = a[u++]) && t.push(o);
            return t
        }
    }
    , function(e, t, n) {
        var r = n(31)("meta")
          , s = n(19)
          , i = n(16)
          , o = n(11).f
          , a = 0
          , c = Object.isExtensible || function() {
            return !0
        }
          , u = !n(22)(function() {
            return c(Object.preventExtensions({}))
        })
          , m = function(e) {
            o(e, r, {
                value: {
                    i: "O" + ++a,
                    w: {}
                }
            })
        }
          , l = e.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(e, t) {
                if (!s(e))
                    return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!i(e, r)) {
                    if (!c(e))
                        return "F";
                    if (!t)
                        return "E";
                    m(e)
                }
                return e[r].i
            },
            getWeak: function(e, t) {
                if (!i(e, r)) {
                    if (!c(e))
                        return !0;
                    if (!t)
                        return !1;
                    m(e)
                }
                return e[r].w
            },
            onFreeze: function(e) {
                return u && l.NEED && c(e) && !i(e, r) && m(e),
                e
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(8)
          , s = n(16)
          , i = n(17)
          , o = n(15)
          , a = n(65)
          , c = n(97).KEY
          , u = n(22)
          , m = n(45)
          , l = n(37)
          , d = n(31)
          , p = n(7)
          , f = n(43)
          , g = n(42)
          , h = n(96)
          , y = n(95)
          , v = n(14)
          , b = n(19)
          , T = n(18)
          , M = n(47)
          , S = n(27)
          , k = n(54)
          , C = n(94)
          , I = n(61)
          , P = n(11)
          , O = n(32)
          , x = I.f
          , w = P.f
          , A = C.f
          , _ = r.Symbol
          , E = r.JSON
          , U = E && E.stringify
          , R = p("_hidden")
          , j = p("toPrimitive")
          , N = {}.propertyIsEnumerable
          , F = m("symbol-registry")
          , D = m("symbols")
          , L = m("op-symbols")
          , B = Object.prototype
          , q = "function" == typeof _
          , H = r.QObject
          , W = !H || !H.prototype || !H.prototype.findChild
          , J = i && u(function() {
            return 7 != k(w({}, "a", {
                get: function() {
                    return w(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(e, t, n) {
            var r = x(B, t);
            r && delete B[t],
            w(e, t, n),
            r && e !== B && w(B, t, r)
        }
        : w
          , z = function(e) {
            var t = D[e] = k(_.prototype);
            return t._k = e,
            t
        }
          , V = q && "symbol" == typeof _.iterator ? function(e) {
            return "symbol" == typeof e
        }
        : function(e) {
            return e instanceof _
        }
          , X = function(e, t, n) {
            return e === B && X(L, t, n),
            v(e),
            t = M(t, !0),
            v(n),
            s(D, t) ? (n.enumerable ? (s(e, R) && e[R][t] && (e[R][t] = !1),
            n = k(n, {
                enumerable: S(0, !1)
            })) : (s(e, R) || w(e, R, S(1, {})),
            e[R][t] = !0),
            J(e, t, n)) : w(e, t, n)
        }
          , $ = function(e, t) {
            v(e);
            for (var n, r = h(t = T(t)), s = 0, i = r.length; i > s; )
                X(e, n = r[s++], t[n]);
            return e
        }
          , G = function(e) {
            var t = N.call(this, e = M(e, !0));
            return !(this === B && s(D, e) && !s(L, e)) && (!(t || !s(this, e) || !s(D, e) || s(this, R) && this[R][e]) || t)
        }
          , K = function(e, t) {
            if (e = T(e),
            t = M(t, !0),
            e !== B || !s(D, t) || s(L, t)) {
                var n = x(e, t);
                return !n || !s(D, t) || s(e, R) && e[R][t] || (n.enumerable = !0),
                n
            }
        }
          , Q = function(e) {
            for (var t, n = A(T(e)), r = [], i = 0; n.length > i; )
                s(D, t = n[i++]) || t == R || t == c || r.push(t);
            return r
        }
          , Y = function(e) {
            for (var t, n = e === B, r = A(n ? L : T(e)), i = [], o = 0; r.length > o; )
                !s(D, t = r[o++]) || n && !s(B, t) || i.push(D[t]);
            return i
        };
        q || (a((_ = function() {
            if (this instanceof _)
                throw TypeError("Symbol is not a constructor!");
            var e = d(arguments.length > 0 ? arguments[0] : void 0)
              , t = function(n) {
                this === B && t.call(L, n),
                s(this, R) && s(this[R], e) && (this[R][e] = !1),
                J(this, e, S(1, n))
            };
            return i && W && J(B, e, {
                configurable: !0,
                set: t
            }),
            z(e)
        }
        ).prototype, "toString", function() {
            return this._k
        }),
        I.f = K,
        P.f = X,
        n(62).f = C.f = Q,
        n(30).f = G,
        n(41).f = Y,
        i && !n(38) && a(B, "propertyIsEnumerable", G, !0),
        f.f = function(e) {
            return z(p(e))
        }
        ),
        o(o.G + o.W + o.F * !q, {
            Symbol: _
        });
        for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Z.length > ee; )
            p(Z[ee++]);
        for (var te = O(p.store), ne = 0; te.length > ne; )
            g(te[ne++]);
        o(o.S + o.F * !q, "Symbol", {
            for: function(e) {
                return s(F, e += "") ? F[e] : F[e] = _(e)
            },
            keyFor: function(e) {
                if (!V(e))
                    throw TypeError(e + " is not a symbol!");
                for (var t in F)
                    if (F[t] === e)
                        return t
            },
            useSetter: function() {
                W = !0
            },
            useSimple: function() {
                W = !1
            }
        }),
        o(o.S + o.F * !q, "Object", {
            create: function(e, t) {
                return void 0 === t ? k(e) : $(k(e), t)
            },
            defineProperty: X,
            defineProperties: $,
            getOwnPropertyDescriptor: K,
            getOwnPropertyNames: Q,
            getOwnPropertySymbols: Y
        }),
        E && o(o.S + o.F * (!q || u(function() {
            var e = _();
            return "[null]" != U([e]) || "{}" != U({
                a: e
            }) || "{}" != U(Object(e))
        })), "JSON", {
            stringify: function(e) {
                for (var t, n, r = [e], s = 1; arguments.length > s; )
                    r.push(arguments[s++]);
                if (n = t = r[1],
                (b(t) || void 0 !== e) && !V(e))
                    return y(t) || (t = function(e, t) {
                        if ("function" == typeof n && (t = n.call(this, e, t)),
                        !V(t))
                            return t
                    }
                    ),
                    r[1] = t,
                    U.apply(E, r)
            }
        }),
        _.prototype[j] || n(20)(_.prototype, j, _.prototype.valueOf),
        l(_, "Symbol"),
        l(Math, "Math", !0),
        l(r.JSON, "JSON", !0)
    }
    , function(e, t, n) {
        n(98),
        n(77),
        n(93),
        n(92),
        e.exports = n(6).Symbol
    }
    , function(e, t, n) {
        e.exports = {
            default: n(99),
            __esModule: !0
        }
    }
    , function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    }
    , function(e, t) {
        e.exports = function() {}
    }
    , function(e, t, n) {
        "use strict";
        var r = n(102)
          , s = n(101)
          , i = n(23)
          , o = n(18);
        e.exports = n(67)(Array, "Array", function(e, t) {
            this._t = o(e),
            this._i = 0,
            this._k = t
        }, function() {
            var e = this._t
              , t = this._k
              , n = this._i++;
            return !e || n >= e.length ? (this._t = void 0,
            s(1)) : s(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }, "values"),
        i.Arguments = i.Array,
        r("keys"),
        r("values"),
        r("entries")
    }
    , function(e, t, n) {
        var r = n(49)
          , s = Math.max
          , i = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? s(e + t, 0) : i(e, t)
        }
    }
    , function(e, t, n) {
        var r = n(18)
          , s = n(59)
          , i = n(104);
        e.exports = function(e) {
            return function(t, n, o) {
                var a, c = r(t), u = s(c.length), m = i(o, u);
                if (e && n != n) {
                    for (; u > m; )
                        if ((a = c[m++]) != a)
                            return !0
                } else
                    for (; u > m; m++)
                        if ((e || m in c) && c[m] === n)
                            return e || m || 0;
                return !e && -1
            }
        }
    }
    , function(e, t, n) {
        var r = n(11)
          , s = n(14)
          , i = n(32);
        e.exports = n(17) ? Object.defineProperties : function(e, t) {
            s(e);
            for (var n, o = i(t), a = o.length, c = 0; a > c; )
                r.f(e, n = o[c++], t[n]);
            return e
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(54)
          , s = n(27)
          , i = n(37)
          , o = {};
        n(20)(o, n(7)("iterator"), function() {
            return this
        }),
        e.exports = function(e, t, n) {
            e.prototype = r(o, {
                next: s(1, n)
            }),
            i(e, t + " Iterator")
        }
    }
    , function(e, t, n) {
        var r = n(49)
          , s = n(48);
        e.exports = function(e) {
            return function(t, n) {
                var i, o, a = String(s(t)), c = r(n), u = a.length;
                return c < 0 || c >= u ? e ? "" : void 0 : (i = a.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (o = a.charCodeAt(c + 1)) < 56320 || o > 57343 ? e ? a.charAt(c) : i : e ? a.slice(c, c + 2) : o - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }
    , function(e, t, n) {
        n(36),
        n(51),
        e.exports = n(43).f("iterator")
    }
    , function(e, t, n) {
        e.exports = {
            default: n(109),
            __esModule: !0
        }
    }
    , , function(e, t, n) {
        var r = n(7)("iterator")
          , s = !1;
        try {
            var i = [7][r]();
            i.return = function() {
                s = !0
            }
            ,
            Array.from(i, function() {
                throw 2
            })
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !s)
                return !1;
            var n = !1;
            try {
                var i = [7]
                  , o = i[r]();
                o.next = function() {
                    return {
                        done: n = !0
                    }
                }
                ,
                i[r] = function() {
                    return o
                }
                ,
                e(i)
            } catch (e) {}
            return n
        }
    }
    , function(e, t, n) {
        var r = n(23)
          , s = n(7)("iterator")
          , i = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (r.Array === e || i[s] === e)
        }
    }
    , function(e, t, n) {
        var r = n(14);
        e.exports = function(e, t, n, s) {
            try {
                return s ? t(r(n)[0], n[1]) : t(n)
            } catch (t) {
                var i = e.return;
                throw void 0 !== i && r(i.call(e)),
                t
            }
        }
    }
    , , , , , , , function(e, t, n) {
        "use strict";
        var r = n(58)
          , s = n(0)
          , i = s.undef
          , o = s.notundef
          , a = n(5)
          , c = n(84)
          , u = n(290)
          , m = n(184);
        function l(e) {
            s.verifyOptions(e, "appKey account chatroomId chatroomAddresses", "protocol::ChatroomProtocol"),
            e.isAnonymous || s.verifyOptions(e, "token", "protocol::ChatroomProtocol"),
            s.verifyParamType("chatroomAddresses", e.chatroomAddresses, "array", "protocol::ChatroomProtocol"),
            s.verifyCallback(e, "onconnect onerror onwillreconnect ondisconnect onmsg onmsgs onrobots", "protocol::ChatroomProtocol"),
            r.call(this, e)
        }
        var d = r.fn
          , p = l.fn = l.prototype = Object.create(d);
        p.init = function() {
            d.init.call(this),
            c.Chatroom.setProtocol(this),
            this.parser = c.Chatroom,
            this.sendCmd.bind(this),
            this.syncResult = {},
            this.timetags = {},
            this.msgBuffer = []
        }
        ,
        p.reset = function() {
            var e = this;
            d.reset.call(e);
            var t = e.options;
            i(t.msgBufferInterval) && (t.msgBufferInterval = 300),
            s.verifyParamType("msgBufferInterval", t.msgBufferInterval, "number", "protocol::ChatroomProtocol.reset"),
            i(t.msgBufferSize) && (t.msgBufferSize = 500),
            s.verifyParamType("msgBufferSize", t.msgBufferSize, "number", "protocol::ChatroomProtocol.reset"),
            o(t.chatroomAddresses) && (e.socketUrls = t.chatroomAddresses.map(function(t) {
                return a.formatSocketUrl({
                    url: t,
                    secure: e.options.secure
                })
            }),
            e.socketUrlsBackup = e.socketUrls.slice(0))
        }
        ,
        p.processChatroom = function(e) {
            switch (e.cmd) {
            case "login":
                e.error || (e.obj = {
                    chatroom: u.reverse(e.content.chatroom),
                    member: m.reverse(e.content.chatroomMember)
                });
                break;
            case "kicked":
                this.onKicked(e);
                break;
            case "logout":
                break;
            case "sendMsg":
                this.onSendMsg(e);
                break;
            case "msg":
                this.onMsg(e);
                break;
            case "getChatroomMembers":
                this.onChatroomMembers(e);
                break;
            case "getHistoryMsgs":
                this.onHistoryMsgs(e);
                break;
            case "markChatroomMember":
                this.onMarkChatroomMember(e);
                break;
            case "closeChatroom":
                break;
            case "getChatroom":
                this.onChatroom(e);
                break;
            case "updateChatroom":
                break;
            case "updateMyChatroomMemberInfo":
                delete e.obj.chatroomMember;
                break;
            case "getChatroomMembersInfo":
                this.onChatroomMembersInfo(e);
                break;
            case "kickChatroomMember":
            case "updateChatroomMemberTempMute":
                break;
            case "queueList":
                e.error || (e.obj = e.content);
                break;
            case "syncRobot":
                this.onSyncRobot(e)
            }
        }
        ,
        p.onChatroom = function(e) {
            e.error || (e.obj.chatroom = u.reverse(e.content.chatroom))
        }
        ,
        e.exports = l,
        n(401),
        n(400),
        n(399),
        n(398)
    }
    , function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = i(n(139))
          , s = i(n(136));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = function() {
            return function(e, t) {
                if (Array.isArray(e))
                    return e;
                if ((0,
                r.default)(Object(e)))
                    return function(e, t) {
                        var n = []
                          , r = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, c = (0,
                            s.default)(e); !(r = (a = c.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            o = e
                        } finally {
                            try {
                                !r && c.return && c.return()
                            } finally {
                                if (i)
                                    throw o
                            }
                        }
                        return n
                    }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        function s() {}
        s.parse = function(e) {
            var t = e.split("|");
            return {
                scene: t[0],
                to: t[1]
            }
        }
        ,
        s.genSessionByMsg = function(e) {
            return {
                id: e.sessionId,
                scene: e.scene,
                to: e.target,
                updateTime: e.time,
                lastMsg: e
            }
        }
        ,
        s.appendLastMsg = function(e) {
            var t = e.lastMsg;
            e["last" + r.capFirstLetter(t.type) + "Msg"] = t,
            e["last" + r.capFirstLetter(t.flow) + "Msg"] = t
        }
        ,
        s.genSessionByMsgs = function(e, t) {
            var n = e.getLastNotIgnoredMsg(t);
            return n ? s.genSessionByMsg(n) : null
        }
        ,
        s.trim = function(e) {
            delete e.msgReceiptSendTime,
            delete e.msgReceiptServerTime,
            delete e.ack,
            delete e.unreadMsgs
        }
        ,
        s.isComplete = function(e) {
            return e.id && e.scene && e.to
        }
        ,
        e.exports = s
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(9), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        var o = n(0)
          , a = o.undef
          , c = o.notundef
          , u = n(84).IM
          , m = n(126)
          , l = n(90)
          , d = {
            customP2p: 100,
            customTeam: 101,
            deleteMsgP2p: 7,
            deleteMsgTeam: 8
        }
          , p = {
            0: "applyTeam",
            1: "rejectTeamApply",
            2: "teamInvite",
            3: "rejectTeamInvite",
            5: "friendRequest",
            6: "deleteFriend",
            7: "deleteMsgP2p",
            8: "deleteMsgTeam",
            100: "customP2p",
            101: "customTeam",
            102: "customP2p"
        }
          , f = {
            1: "addFriend",
            2: "applyFriend",
            3: "passFriendApply",
            4: "rejectFriendApply"
        }
          , g = ["team", "friend", "msg"]
          , h = {
            applyTeam: "team",
            rejectTeamApply: "team",
            teamInvite: "team",
            rejectTeamInvite: "team",
            addFriend: "friend",
            applyFriend: "friend",
            passFriendApply: "friend",
            rejectFriendApply: "friend",
            deleteFriend: "friend",
            deleteMsg: "msg"
        };
        function y(e) {
            o.verifyOptions(e, "type to", "sysmsg::SystemMessage"),
            o.verifyParamValid("type", e.type, y.validTypes, "sysmsg::SystemMessage"),
            -1 !== e.type.indexOf("custom") && (o.verifyOptions(e, "content", "sysmsg::SystemMessage"),
            this.attach = e.content,
            c(e.apnsText) && (this.apnsText = "" + e.apnsText),
            c(e.pushPayload) && ("object" === (0,
            i.default)(e.pushPayload) ? this.pushPayload = JSON.stringify(e.pushPayload) : this.pushPayload = "" + e.pushPayload),
            c(e.sendToOnlineUsersOnly) && (this.sendToOnlineUsersOnly = e.sendToOnlineUsersOnly ? 0 : 1),
            c(e.cc) && (this.cc = e.cc ? 1 : 0),
            c(e.isPushable) && (this.isPushable = e.isPushable ? 1 : 0),
            c(e.isUnreadable) && (this.isUnreadable = e.isUnreadable ? 1 : 0),
            c(e.needPushNick) && (this.needPushNick = e.needPushNick ? 1 : 0)),
            this.time = e.time || +new Date,
            this.type = d[e.type],
            this.to = e.to,
            c(e.from) && (this.from = e.from),
            c(e.ps) && (this.ps = e.ps),
            c(e.deletedIdClient) && (this.deletedIdClient = e.deletedIdClient),
            c(e.deletedIdServer) && (this.deletedIdServer = e.deletedIdServer),
            c(e.opeAccount) && (this.opeAccount = e.opeAccount),
            c(e.yidunEnable) && (this.yidunEnable = e.yidunEnable ? 1 : 0),
            c(e.antiSpamContent) && ("object" === (0,
            i.default)(e.antiSpamContent) ? this.antiSpamContent = JSON.stringify(e.antiSpamContent) : this.antiSpamContent = "" + e.antiSpamContent),
            c(e.antiSpamBusinessId) && ("object" === (0,
            i.default)(e.antiSpamBusinessId) ? this.antiSpamBusinessId = JSON.stringify(e.antiSpamBusinessId) : this.antiSpamBusinessId = "" + e.antiSpamBusinessId),
            this.idClient = e.idClient || o.guid()
        }
        y.validTypes = Object.keys(d).concat(Object.keys(h)),
        y.validCategories = ["team", "friend"],
        y.isCustom = function(e) {
            return "custom" === e.type
        }
        ,
        y.reverse = function(e) {
            var t = {
                time: +e.time,
                to: e.to,
                type: p[e.type]
            };
            if (c(e.from) && (t.from = e.from),
            c(e.idServer) && (t.idServer = "" + e.idServer),
            c(e.deletedIdClient) && (t.deletedIdClient = e.deletedIdClient),
            c(e.deletedIdServer) && (t.deletedIdServer = "" + e.deletedIdServer),
            c(e.deletedMsgTime) && (t.deletedMsgTime = +e.deletedMsgTime),
            c(e.deletedMsgFromNick) && (t.deletedMsgFromNick = "" + e.deletedMsgFromNick),
            c(e.opeAccount) && (t.opeAccount = e.opeAccount),
            c(e.ps) && (t.ps = e.ps),
            e.attach = e.attach ? "" + e.attach : "",
            "customP2p" === t.type || "customTeam" === t.type)
                t.content = e.attach,
                c(e.apnsText) && (t.apnsText = e.apnsText),
                c(e.pushPayload) && (t.pushPayload = e.pushPayload),
                o.merge(t, {
                    sendToOnlineUsersOnly: a(e.sendToOnlineUsersOnly) || 0 == +e.sendToOnlineUsersOnly,
                    cc: a(e.cc) || 1 == +e.cc,
                    isPushable: a(e.isPushable) || 1 == +e.isPushable,
                    isUnreadable: a(e.isUnreadable) || 1 == +e.isUnreadable,
                    needPushNick: c(e.needPushNick) && 1 == +e.needPushNick
                }),
                t.scene = t.type.slice(6).toLowerCase(),
                t.type = "custom";
            else if ("deleteMsgP2p" === t.type || "deleteMsgTeam" === t.type)
                t.scene = t.type.slice(9).toLowerCase(),
                t.type = "deleteMsg";
            else {
                if (e.attach) {
                    t.attach = {};
                    var n = JSON.parse(e.attach);
                    c(n.vt) ? (t.type = f[n.vt],
                    delete t.attach) : (c(n.tinfo) && (t.attach.team = m.reverse(u.syncUnserialize(n.tinfo, "team"))),
                    c(n.tlist) && (t.attach.member = l.reverse(u.syncUnserialize(n.tlist, "teamMember"))),
                    c(n.attach) && (t.attach.custom = n.attach))
                }
                t.category = h[t.type],
                t.read = !1,
                t.state = "init"
            }
            return c(e.cc) && (t.cc = 1 == +e.cc),
            t.status = e.status || "success",
            c(e.filter) && (t.filter = e.filter),
            t
        }
        ,
        y.reverseSysMsgs = function(e, t) {
            var n = (t = t || {}).mapper
              , r = o.isFunction(n);
            return e.map(function(e) {
                return e = y.reverse(e),
                r && (e = n(e)),
                e
            })
        }
        ,
        y.completeUnread = function(e) {
            var t;
            return e = e || {},
            g.forEach(function(t) {
                delete e[t]
            }),
            Object.keys(h).forEach(function(n) {
                e[n] = e[n] || 0,
                e[n] < 0 && (e[n] = 0),
                e[t = h[n]] = e[t] || 0,
                e[t] = e[t] + e[n]
            }),
            e.total = 0,
            g.forEach(function(t) {
                e.total += e[t]
            }),
            e
        }
        ,
        e.exports = y
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(56);
        var i = ((r = s) && r.__esModule ? r : {
            default: r
        }).default.clientTypeMap;
        function o() {}
        o.reverse = function(e) {
            var t = e;
            return t.type = i[t.type],
            t
        }
        ,
        o.reverseType = function(e) {
            return i[e] || e
        }
        ,
        e.exports = o
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = r.notundef
          , i = r.fillPropertyWithDefault
          , o = Object.keys
          , a = {}
          , c = {}
          , u = []
          , m = {}
          , l = {
            normal: 0,
            advanced: 1
        }
          , d = {
            0: "normal",
            1: "advanced"
        }
          , p = o(l)
          , f = a.joinMode = {
            noVerify: 0,
            needVerify: 1,
            rejectAll: 2
        };
        c.joinMode = {
            0: "noVerify",
            1: "needVerify",
            2: "rejectAll"
        },
        u.push("join"),
        m.joinMode = o(f);
        var g = a.beInviteMode = {
            needVerify: 0,
            noVerify: 1
        };
        c.beInviteMode = {
            0: "needVerify",
            1: "noVerify"
        },
        u.push("beInvite"),
        m.beInviteMode = o(g);
        var h = a.inviteMode = {
            manager: 0,
            all: 1
        };
        c.inviteMode = {
            0: "manager",
            1: "all"
        },
        u.push("invite"),
        m.inviteMode = o(h);
        var y = a.updateTeamMode = {
            manager: 0,
            all: 1
        };
        c.updateTeamMode = {
            0: "manager",
            1: "all"
        },
        u.push("updateTeam"),
        m.updateTeamMode = o(y);
        var v = a.updateCustomMode = {
            manager: 0,
            all: 1
        };
        function b(e) {
            switch (r.verifyOptions(e, "action", "team::Team"),
            e.action) {
            case "create":
                r.verifyOptions(e, "teamId", !1, "team::Team"),
                r.verifyOptions(e, "type name", "team::Team"),
                r.verifyParamValid("type", e.type, p, "team::Team"),
                s(e.level) && (r.verifyParamType("level", e.level, "number", "team::Team"),
                this.level = e.level);
                break;
            case "update":
                r.verifyOptions(e, "teamId", "team::Team"),
                r.verifyOptions(e, "type", !1, "team::Team")
            }
            s(e.teamId) && (this.teamId = e.teamId),
            s(e.type) && (this.type = l[e.type]),
            s(e.avatar) && (this.avatar = "" + e.avatar),
            s(e.name) && (this.name = "" + e.name),
            s(e.intro) && (this.intro = "" + e.intro),
            s(e.announcement) && (this.announcement = "" + e.announcement),
            u.forEach(this.setMode.bind(this, e)),
            s(e.custom) && (this.custom = "" + e.custom)
        }
        c.updateCustomMode = {
            0: "manager",
            1: "all"
        },
        u.push("updateCustom"),
        m.updateCustomMode = o(v),
        b.prototype.setMode = function(e, t) {
            s(e[t += "Mode"]) && (r.verifyParamValid(t, e[t], m[t], "team::Team"),
            this[t] = a[t][e[t]])
        }
        ,
        b.reverse = function(e, t) {
            var n = r.copy(e);
            if (s(n.teamId) && (n.teamId = "" + n.teamId),
            s(n.type) && (n.type = d[n.type]),
            s(n.level) && (n.level = +n.level),
            s(n.valid) && (n.valid = 1 == +n.valid),
            s(n.memberNum) && (n.memberNum = +n.memberNum),
            s(n.memberUpdateTime) && (n.memberUpdateTime = +n.memberUpdateTime),
            s(n.createTime) && (n.createTime = +n.createTime),
            s(n.updateTime) && (n.updateTime = +n.updateTime),
            s(n.validToCurrentUser) && (n.validToCurrentUser = "1" === n.validToCurrentUser),
            s(n.mute) && (n.mute = "1" === n.mute),
            s(n.muteType))
                switch (n.muteType) {
                case "0":
                    n.mute = !1,
                    n.muteType = "none";
                    break;
                case "1":
                    n.mute = !0,
                    n.muteType = "normal";
                    break;
                case "3":
                    n.mute = !0,
                    n.muteType = "all"
                }
            else
                s(n.mute) && (1 === n.mute ? (n.mute = !0,
                n.muteType = "normal") : (n.mute = !1,
                n.muteType = "none"));
            return u.forEach(function(e, t) {
                s(e[t += "Mode"]) && (e[t] = c[t][e[t]])
            }
            .bind(null, n)),
            delete n.bits,
            t || b.fillProperties(n),
            n
        }
        ,
        b.fillProperties = function(e) {
            var t = i(e, "beInviteMode", "needVerify")
              , n = i(e, "inviteMode", "manager")
              , r = i(e, "updateTeamMode", "manager")
              , s = i(e, "updateCustomMode", "manager")
              , o = i(e, "avatar", "");
            return t || n || r || s || o
        }
        ,
        e.exports = b
    }
    , , , , , function(e, t, n) {
        "use strict";
        var r = n(69)
          , s = n(72)
          , i = n(0)
          , o = n(5);
        function a(e) {
            switch (i.notundef(e.type) ? i.verifyFileType(e.type, "msg::FileMessage") : e.type = "file",
            i.verifyOptions(e, "file", "msg::FileMessage"),
            i.verifyOptions(e.file, "url ext size", !0, "file.", "msg::FileMessage"),
            e.type) {
            case "image":
                c.verifyFile(e.file, "msg::FileMessage");
                break;
            case "audio":
                u.verifyFile(e.file, "msg::FileMessage");
                break;
            case "video":
                m.verifyFile(e.file, "msg::FileMessage")
            }
            s.call(this, e),
            this.attach = JSON.stringify(e.file)
        }
        a.prototype = Object.create(s.prototype),
        a.reverse = function(e) {
            var t = s.reverse(e);
            return e.attach = e.attach ? "" + e.attach : "",
            t.file = e.attach ? JSON.parse(e.attach) : {},
            t.file.url = (0,
            r.genPrivateUrl)(t.file.url),
            "audio" !== t.type || t.file.mp3Url || (t.file.mp3Url = t.file.url + (~t.file.url.indexOf("?") ? "&" : "?") + "audioTrans&type=mp3"),
            o.httpsEnabled && 0 !== t.file.url.indexOf("https://") && (t.file.url = t.file.url.replace("http", "https")),
            t
        }
        ,
        e.exports = a;
        var c = n(395)
          , u = n(394)
          , m = n(393)
    }
    , function(e, t, n) {
        "use strict";
        var r = n(50)
          , s = n(121)
          , i = n(5)
          , o = n(290)
          , a = n(397)
          , c = n(0)
          , u = c.verifyOptions
          , m = c.verifyParamType
          , l = n(84).Chatroom;
        function d(e) {
            return this.subType = "chatroom",
            this.nosScene = e.nosScene || "chatroom",
            this.nosSurvivalTime = e.nosSurvivalTime,
            e.Protocol = s,
            e.Message = a,
            e.constructor = d,
            e.isAnonymous && (e.account = e.account || "nimanon_" + c.guid(),
            e.isAnonymous = 1,
            c.verifyOptions(e, "chatroomNick", "api::Chatroom"),
            e.chatroomAvatar = e.chatroomAvatar || " "),
            this.init(e)
        }
        d.Protocol = s,
        d.parser = l,
        d.use = r.use,
        d.getInstance = function(e) {
            return e.isAnonymous && (e.account = e.account || "nimanon_" + c.guid(),
            e.isAnonymous = 1,
            c.verifyOptions(e, "chatroomNick", "api::Chatroom.getInstance"),
            e.chatroomAvatar = e.chatroomAvatar || " "),
            r.getInstance.call(this, e)
        }
        ,
        d.genInstanceName = function(e) {
            return c.verifyOptions(e, "chatroomId", "api::Chatroom.genInstanceName"),
            "Chatroom-account-" + e.account + "-chatroomId-" + e.chatroomId
        }
        ;
        var p = d.fn = d.prototype = Object.create(r.prototype);
        d.info = p.info = i.info,
        p.getChatroom = function(e) {
            this.processCallback(e),
            this.sendCmd("getChatroom", e)
        }
        ,
        p.updateChatroom = function(e) {
            u(e, "chatroom needNotify", "api::updateChatroom"),
            m("needNotify", e.needNotify, "boolean"),
            this.processCustom(e),
            this.processCallback(e),
            e.chatroom = new o(e.chatroom),
            this.sendCmd("updateChatroom", e)
        }
        ,
        p.closeChatroom = function(e) {
            this.processCustom(e),
            this.processCallback(e),
            this.sendCmd("closeChatroom", e)
        }
        ,
        e.exports = d,
        n(387),
        n(386),
        n(385)
    }
    , function(e, t, n) {
        "use strict";
        var r = n(69)
          , s = n(73)
          , i = n(0)
          , o = n(5);
        function a(e) {
            switch (i.notundef(e.type) ? i.verifyFileType(e.type, "msg::FileMessage") : e.type = "file",
            i.verifyOptions(e, "file", "msg::FileMessage"),
            i.verifyOptions(e.file, "url ext size", !0, "file.", "msg::FileMessage"),
            e.type) {
            case "image":
                c.verifyFile(e.file, "msg::FileMessage");
                break;
            case "audio":
                u.verifyFile(e.file, "msg::FileMessage");
                break;
            case "video":
                m.verifyFile(e.file, "msg::FileMessage")
            }
            s.call(this, e),
            this.attach = JSON.stringify(e.file)
        }
        a.prototype = Object.create(s.prototype),
        a.reverse = function(e) {
            var t = s.reverse(e);
            return e.attach = e.attach ? "" + e.attach : "",
            t.file = e.attach ? JSON.parse(e.attach) : {},
            t.file.url = (0,
            r.genPrivateUrl)(t.file.url),
            "audio" !== t.type || t.file.mp3Url || (t.file.mp3Url = t.file.url + (~t.file.url.indexOf("?") ? "&" : "?") + "audioTrans&type=mp3"),
            o.httpsEnabled && 0 !== t.file.url.indexOf("https://") && (t.file.url = t.file.url.replace("http", "https")),
            t
        }
        ,
        e.exports = a;
        var c = n(430)
          , u = n(429)
          , m = n(428)
    }
    , function(e, t, n) {
        var r = n(14)
          , s = n(75);
        e.exports = n(6).getIterator = function(e) {
            var t = s(e);
            if ("function" != typeof t)
                throw TypeError(e + " is not iterable!");
            return r(t.call(e))
        }
    }
    , function(e, t, n) {
        n(51),
        n(36),
        e.exports = n(134)
    }
    , function(e, t, n) {
        e.exports = {
            default: n(135),
            __esModule: !0
        }
    }
    , function(e, t, n) {
        var r = n(74)
          , s = n(7)("iterator")
          , i = n(23);
        e.exports = n(6).isIterable = function(e) {
            var t = Object(e);
            return void 0 !== t[s] || "@@iterator"in t || i.hasOwnProperty(r(t))
        }
    }
    , function(e, t, n) {
        n(51),
        n(36),
        e.exports = n(137)
    }
    , function(e, t, n) {
        e.exports = {
            default: n(138),
            __esModule: !0
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(69)
          , s = n(0)
          , i = {
            unknown: 0,
            male: 1,
            female: 2
        }
          , o = {
            0: "unknown",
            1: "male",
            2: "female"
        };
        function a(e) {
            s.merge(this, e),
            s.notundef(this.gender) && (s.verifyParamValid("gender", this.gender, a.validGenders, "user::User"),
            this.gender = i[this.gender]),
            s.notundef(this.email) && "" !== this.email && s.verifyEmail("email", this.email, "user::User"),
            s.notundef(this.birth) && "" !== this.birth && s.verifyBirth("birth", this.birth, "user::User"),
            s.notundef(this.tel) && "" !== this.tel && s.verifyTel("tel", this.tel, "user::User")
        }
        a.reverse = function(e) {
            var t = s.filterObj(e, "account nick avatar _avatar_safe sign gender email birth tel custom createTime updateTime");
            return s.notundef(t.avatar) && (t.avatar = (0,
            r.genPrivateUrl)(t.avatar)),
            s.notundef(t.gender) && (t.gender = o[t.gender]),
            s.notundef(t.createTime) && (t.createTime = +t.createTime),
            s.notundef(t.updateTime) && (t.updateTime = +t.updateTime),
            t
        }
        ,
        a.reverseUsers = function(e) {
            return e.map(function(e) {
                return a.reverse(e)
            })
        }
        ,
        a.validGenders = Object.keys(i),
        e.exports = a
    }
    , function(e, t, n) {
        "use strict";
        var r = n(11)
          , s = n(27);
        e.exports = function(e, t, n) {
            t in e ? r.f(e, t, s(0, n)) : e[t] = n
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(35)
          , s = n(15)
          , i = n(40)
          , o = n(114)
          , a = n(113)
          , c = n(59)
          , u = n(141)
          , m = n(75);
        s(s.S + s.F * !n(112)(function(e) {
            Array.from(e)
        }), "Array", {
            from: function(e) {
                var t, n, s, l, d = i(e), p = "function" == typeof this ? this : Array, f = arguments.length, g = f > 1 ? arguments[1] : void 0, h = void 0 !== g, y = 0, v = m(d);
                if (h && (g = r(g, f > 2 ? arguments[2] : void 0, 2)),
                null == v || p == Array && a(v))
                    for (n = new p(t = c(d.length)); t > y; y++)
                        u(n, y, h ? g(d[y], y) : d[y]);
                else
                    for (l = v.call(d),
                    n = new p; !(s = l.next()).done; y++)
                        u(n, y, h ? o(l, g, [s.value, y], !0) : s.value);
                return n.length = y,
                n
            }
        })
    }
    , function(e, t, n) {
        n(36),
        n(142),
        e.exports = n(6).Array.from
    }
    , function(e, t, n) {
        e.exports = {
            default: n(143),
            __esModule: !0
        }
    }
    , function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, s = n(144), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        t.default = function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                return n
            }
            return (0,
            i.default)(e)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = r.notundef
          , i = r.fillPropertyWithDefault
          , o = {
            0: "normal",
            1: "owner",
            2: "manager"
        };
        function a(e) {
            r.verifyOptions(e, "teamId", "superTeam::TeamMember"),
            r.verifyParamAtLeastPresentOne(e, "nickInTeam muteTeam custom", "superTeam::SuperTeamMember"),
            this.teamId = e.teamId,
            s(e.account) && (this.account = e.account),
            s(e.nickInTeam) && (this.nickInTeam = e.nickInTeam),
            s(e.muteTeam) && (this.bits = 0,
            e.muteTeam && (this.bits += 1)),
            s(e.mute) && (this.mute = e.mute ? 1 : 0),
            s(e.custom) && (this.custom = "" + e.custom)
        }
        a.reverse = function(e) {
            var t = r.copy(e);
            if (s(t.teamId) && (t.teamId = "" + t.teamId),
            s(t.type) && (t.type = o[t.type]),
            s(t.active) && (t.active = 1 == +t.active),
            s(t.valid) && (t.valid = 1 == +t.valid),
            s(t.mute) && (t.mute = 1 == +t.mute),
            s(t.joinTime) && (t.joinTime = +t.joinTime),
            s(t.updateTime) && (t.updateTime = +t.updateTime),
            s(t.bits)) {
                var n = t.bits;
                delete t.bits,
                t.muteTeam = !!(1 & n)
            }
            return s(t.teamId) && s(t.account) && (t.id = a.genId(t.teamId, t.account)),
            t
        }
        ,
        a.reverseMembers = function(e) {
            return e.map(function(e) {
                return a.reverse(e)
            })
        }
        ,
        a.fillProperties = function(e) {
            var t = i(e, "mute", !1)
              , n = i(e, "custom", "");
            return t || n
        }
        ,
        a.genId = function(e, t) {
            return e + "-" + t
        }
        ,
        a.accounts2ids = function(e, t) {
            return t.map(function(t) {
                return a.genId(e, t)
            })
        }
        ,
        a.assembleMembers = function(e, t) {
            return r.isArray(t) || (t = [t]),
            t.map(function(t) {
                return a.assembleMember(e, t)
            })
        }
        ,
        a.assembleMember = function(e, t) {
            return {
                id: a.genId(e.teamId, t),
                account: t,
                teamId: e.teamId,
                type: "normal",
                nickInTeam: "",
                muteTeam: !1,
                mute: !1,
                joinTime: e.memberUpdateTime,
                updateTime: e.memberUpdateTime,
                active: !0,
                valid: !0
            }
        }
        ,
        a.assembleOwner = function(e) {
            var t = a.assembleMember(e, e.owner);
            return t.type = "owner",
            t
        }
        ,
        e.exports = a
    }
    , function(e, t, n) {
        "use strict";
        var r = n(5)
          , s = r.chunkSize
          , i = (n(0),
        n(53));
        e.exports = function(e, t, n) {
            var o = {
                file: e.data[t],
                fileSize: e.data[t].size,
                fileUoloadedSize: 0,
                percentage: 0
            };
            function a(t) {
                var n = o.fileUoloadedSize + t.loaded
                  , r = Math.floor(1e4 * n / o.fileSize) / 100;
                if (parseInt(r) >= 100 && (r = 100,
                a = function() {}
                ),
                o.percentage !== r) {
                    o.percentage = r;
                    var s = {
                        docId: e.docId,
                        total: o.fileSize,
                        loaded: n,
                        percentage: r,
                        percentageText: r + "%"
                    };
                    e.fileInput && (s.fileInput = e.fileInput),
                    e.blob && (s.blob = e.blob),
                    e.uploadprogress(s)
                }
            }
            function c(t) {
                try {
                    t = JSON.parse(t)
                } catch (e) {
                    return void n.onError(e)
                }
                if (t.errMsg || t.errCode)
                    n.onError(t);
                else if (t.offset < o.fileSize)
                    delete m.onaftersend,
                    o.fileUoloadedSize = t.offset,
                    n.sn = function(e, t, n, r, o) {
                        var m = t.offset
                          , l = t.offset + s;
                        return n.data = o.file.slice(m, l),
                        n.query.offset = t.offset,
                        n.query.complete = l >= o.fileSize,
                        n.query.context = t.context,
                        n.onuploading = a,
                        n.onload = c,
                        n.onerror = u,
                        i(e, n)
                    }(e.url, t, m, 0, o);
                else {
                    var l = function(e) {
                        n.onError(e)
                    }
                      , d = r.genFileUrl(e.nosToken);
                    "image" === e.type ? i(d + "?imageInfo", {
                        onload: function(n) {
                            try {
                                n = JSON.parse(n),
                                e.uploaddone(null, {
                                    docId: t.docId,
                                    w: n.Width,
                                    h: n.Height,
                                    orientation: n.Orientation || "",
                                    type: n.Type,
                                    size: n.Size || o.fileSize
                                })
                            } catch (e) {
                                l(e)
                            }
                        },
                        onerror: l
                    }) : "video" === e.type || "audio" === e.type ? i(d + "?vinfo", {
                        onload: function(n) {
                            try {
                                (n = JSON.parse(n)).GetVideoInfo && n.GetVideoInfo.VideoInfo && (n = n.GetVideoInfo.VideoInfo),
                                e.uploaddone(null, {
                                    docId: t.docId,
                                    w: n.Width,
                                    h: n.Height,
                                    dur: n.Duration,
                                    orientation: n.Rotate,
                                    audioCodec: n.AudioCodec,
                                    videoCodec: n.VideoCodec,
                                    container: n.Container,
                                    size: n.Size || o.fileSize
                                })
                            } catch (e) {
                                l(e)
                            }
                        },
                        onerror: l
                    }) : e.uploaddone(null, {
                        docId: t.docId,
                        size: o.fileSize
                    })
                }
            }
            function u(e) {
                try {
                    if (e.result)
                        var t = JSON.parse(e.result);
                    else
                        t = e;
                    n.onError(t)
                } catch (e) {
                    n.onError(e)
                }
            }
            var m = {
                query: {
                    offset: 0,
                    complete: s >= o.fileSize,
                    version: "1.0"
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "x-nos-token": e.nosToken.token
                },
                method: "POST",
                timeout: 0,
                onaftersend: function() {
                    e.beginupload(n)
                },
                onuploading: a,
                onload: c,
                onerror: u
            };
            return m.data = o.file.slice(0, s),
            i(e.url, m)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(53);
        e.exports = function(e, t) {
            return t.method = "POST",
            t.headers = t.headers || {},
            t.headers["Content-Type"] = "multipart/form-data",
            t.timeout = 0,
            t.type = t.type || "json",
            r(e, t)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r, s, i = n(13), o = n(53), a = (r = /json/i,
        s = /post/i,
        function(e, t) {
            var n = (t = t || {}).data = t.data || {}
              , a = t.headers = t.headers || {}
              , c = i.checkWithDefault(a, "Accept", "application/json")
              , u = i.checkWithDefault(a, "Content-Type", "application/json");
            return r.test(c) && (t.type = "json"),
            s.test(t.method) && r.test(u) && (t.data = JSON.stringify(n)),
            o(e, t)
        }
        );
        e.exports = a
    }
    , function(e, t, n) {
        "use strict";
        var r = n(13)
          , s = n(85)
          , i = n(68)
          , o = {};
        function a(e) {
            this.init(),
            i.call(this, e)
        }
        var c = i.prototype
          , u = a.prototype = Object.create(c);
        u.init = function() {
            var e = "NEJ-AJAX-DATA:"
              , t = !1;
            function n(t) {
                var n = t.data;
                if (0 === n.indexOf(e)) {
                    var r = (n = JSON.parse(n.replace(e, ""))).key
                      , s = o[r];
                    s && (delete o[r],
                    n.result = decodeURIComponent(n.result || ""),
                    s.onLoad(n))
                }
            }
            return function() {
                !function() {
                    if (!t) {
                        t = !0;
                        var e = r.getGlobal();
                        e.postMessage ? r.on(e, "message", n) : s.addMsgListener(n)
                    }
                }()
            }
        }(),
        u.doSend = function() {
            var e = this.options
              , t = r.url2origin(e.url)
              , n = e.proxyUrl || t + "/res/nej_proxy_frame.html"
              , i = o[n];
            if (r.isArray(i))
                i.push(this.doSend.bind(this, e));
            else {
                if (!i)
                    return o[n] = [this.doSend.bind(this, e)],
                    void r.createIframe({
                        src: n,
                        onload: function(e) {
                            var t = o[n];
                            o[n] = r.target(e).contentWindow,
                            t.forEach(function(e) {
                                try {
                                    e()
                                } catch (e) {
                                    console.log("error:", e)
                                }
                            })
                        }
                    });
                if (!this.aborted) {
                    var a = this.key = r.uniqueID();
                    o[a] = this;
                    var c = r.fetch({
                        method: "GET",
                        url: "",
                        data: null,
                        headers: {},
                        timeout: 0
                    }, e);
                    c.key = a,
                    s.postMessage(i, {
                        data: c
                    }),
                    this.afterSend()
                }
            }
        }
        ,
        u.abort = function() {
            this.aborted = !0,
            delete o[this.key],
            c.abort.call(this)
        }
        ,
        e.exports = a
    }
    , function(e, t, n) {
        "use strict";
        var r = n(13)
          , s = n(68)
          , i = n(85)
          , o = "NEJ-UPLOAD-RESULT:"
          , a = {};
        function c(e) {
            this.init(),
            s.call(this, e)
        }
        var u = s.prototype
          , m = c.prototype = Object.create(u);
        m.init = function() {
            var e = !1;
            function t(e) {
                var t = e.data;
                if (0 === t.indexOf(o)) {
                    var n = (t = JSON.parse(t.replace(o, ""))).key
                      , r = a[n];
                    r && (delete a[n],
                    t.result = decodeURIComponent(t.result || ""),
                    r.onLoad(t.result))
                }
            }
            return function() {
                !function() {
                    if (!e) {
                        e = !0;
                        var n = r.getGlobal();
                        n.postMessage ? r.on(n, "message", t) : (i.addMsgListener(t),
                        i.startTimer())
                    }
                }()
            }
        }(),
        m.doSend = function() {
            var e = this
              , t = e.options
              , n = e.key = "zoro-ajax-upload-iframe-" + r.uniqueID();
            a[n] = e;
            var s = e.form = r.html2node('<form style="display:none;"></form>');
            "undefined" == typeof document ? console.log("error: document is undefined") : document.body.appendChild(s),
            s.target = n,
            s.method = "POST",
            s.enctype = "multipart/form-data",
            s.encoding = "multipart/form-data";
            var i = t.url
              , o = r.genUrlSep(i);
            s.action = i + o + "_proxy_=form";
            var c = t.data
              , u = []
              , m = [];
            function l() {
                u.forEach(function(e, t) {
                    var n = m[t];
                    n.parentNode && (e.name = n.name,
                    r.isFunction(e.setAttribute) && e.setAttribute("form", n.getAttribute("form")),
                    n.parentNode.replaceChild(e, n))
                })
            }
            c && r.getKeys(c, t.putFileAtEnd).forEach(function(e) {
                var t = c[e];
                if (t.tagName && "INPUT" === t.tagName.toUpperCase()) {
                    if ("file" === t.type) {
                        var n = t
                          , i = n.cloneNode(!0);
                        n.parentNode.insertBefore(i, n);
                        var o = r.dataset(n, "name");
                        o && (n.name = o),
                        s.appendChild(n),
                        r.isFunction(n.setAttribute) && (n.setAttribute("form", ""),
                        n.removeAttribute("form")),
                        u.push(t),
                        m.push(i)
                    }
                } else {
                    var a = r.html2node('<input type="hidden"/>');
                    a.name = e,
                    a.value = t,
                    s.appendChild(a)
                }
            });
            var d = e.iframe = r.createIframe({
                name: n,
                onload: function() {
                    e.aborted ? l() : (r.on(d, "load", e.checkResult.bind(e)),
                    s.submit(),
                    l(),
                    e.afterSend())
                }
            })
        }
        ,
        m.checkResult = function() {
            var e, t;
            try {
                if ((t = ((e = this.iframe.contentWindow.document.body).innerText || e.textContent || "").trim()).indexOf(o) >= 0 || e.innerHTML.indexOf(o) >= 0)
                    return
            } catch (e) {
                return void console.log("error:", "ignore error if not same domain,", e)
            }
            this.onLoad(t)
        }
        ,
        m.onLoad = function(e) {
            u.onLoad.call(this, {
                status: 200,
                result: e
            }),
            r.remove(this.form),
            r.remove(this.iframe),
            u.destroy.call(this)
        }
        ,
        m.destroy = function() {
            r.remove(this.iframe),
            r.remove(this.form)
        }
        ,
        m.abort = function() {
            this.aborted = !0,
            delete a[this.key],
            u.abort.call(this)
        }
        ,
        e.exports = c
    }
    , function(e, t, n) {
        var r;
        /*!
 * EventEmitter v5.2.4 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */
        !function(t) {
            "use strict";
            function s() {}
            var i = s.prototype
              , o = t.EventEmitter;
            function a(e, t) {
                for (var n = e.length; n--; )
                    if (e[n].listener === t)
                        return n;
                return -1
            }
            function c(e) {
                return function() {
                    return this[e].apply(this, arguments)
                }
            }
            i.getListeners = function(e) {
                var t, n, r = this._getEvents();
                if (e instanceof RegExp)
                    for (n in t = {},
                    r)
                        r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]);
                else
                    t = r[e] || (r[e] = []);
                return t
            }
            ,
            i.flattenListeners = function(e) {
                var t, n = [];
                for (t = 0; t < e.length; t += 1)
                    n.push(e[t].listener);
                return n
            }
            ,
            i.getListenersAsObject = function(e) {
                var t, n = this.getListeners(e);
                return n instanceof Array && ((t = {})[e] = n),
                t || n
            }
            ,
            i.addListener = function(e, t) {
                if (!function e(t) {
                    return "function" == typeof t || t instanceof RegExp || !(!t || "object" != typeof t) && e(t.listener)
                }(t))
                    throw new TypeError("listener must be a function");
                var n, r = this.getListenersAsObject(e), s = "object" == typeof t;
                for (n in r)
                    r.hasOwnProperty(n) && -1 === a(r[n], t) && r[n].push(s ? t : {
                        listener: t,
                        once: !1
                    });
                return this
            }
            ,
            i.on = c("addListener"),
            i.addOnceListener = function(e, t) {
                return this.addListener(e, {
                    listener: t,
                    once: !0
                })
            }
            ,
            i.once = c("addOnceListener"),
            i.defineEvent = function(e) {
                return this.getListeners(e),
                this
            }
            ,
            i.defineEvents = function(e) {
                for (var t = 0; t < e.length; t += 1)
                    this.defineEvent(e[t]);
                return this
            }
            ,
            i.removeListener = function(e, t) {
                var n, r, s = this.getListenersAsObject(e);
                for (r in s)
                    s.hasOwnProperty(r) && -1 !== (n = a(s[r], t)) && s[r].splice(n, 1);
                return this
            }
            ,
            i.off = c("removeListener"),
            i.addListeners = function(e, t) {
                return this.manipulateListeners(!1, e, t)
            }
            ,
            i.removeListeners = function(e, t) {
                return this.manipulateListeners(!0, e, t)
            }
            ,
            i.manipulateListeners = function(e, t, n) {
                var r, s, i = e ? this.removeListener : this.addListener, o = e ? this.removeListeners : this.addListeners;
                if ("object" != typeof t || t instanceof RegExp)
                    for (r = n.length; r--; )
                        i.call(this, t, n[r]);
                else
                    for (r in t)
                        t.hasOwnProperty(r) && (s = t[r]) && ("function" == typeof s ? i.call(this, r, s) : o.call(this, r, s));
                return this
            }
            ,
            i.removeEvent = function(e) {
                var t, n = typeof e, r = this._getEvents();
                if ("string" === n)
                    delete r[e];
                else if (e instanceof RegExp)
                    for (t in r)
                        r.hasOwnProperty(t) && e.test(t) && delete r[t];
                else
                    delete this._events;
                return this
            }
            ,
            i.removeAllListeners = c("removeEvent"),
            i.emitEvent = function(e, t) {
                var n, r, s, i, o = this.getListenersAsObject(e);
                for (i in o)
                    if (o.hasOwnProperty(i))
                        for (n = o[i].slice(0),
                        s = 0; s < n.length; s++)
                            !0 === (r = n[s]).once && this.removeListener(e, r.listener),
                            r.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, r.listener);
                return this
            }
            ,
            i.trigger = c("emitEvent"),
            i.emit = function(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(e, t)
            }
            ,
            i.setOnceReturnValue = function(e) {
                return this._onceReturnValue = e,
                this
            }
            ,
            i._getOnceReturnValue = function() {
                return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
            }
            ,
            i._getEvents = function() {
                return this._events || (this._events = {})
            }
            ,
            s.noConflict = function() {
                return t.EventEmitter = o,
                s
            }
            ,
            void 0 === (r = function() {
                return s
            }
            .call(t, n, t, e)) || (e.exports = r)
        }(this || {})
    }
    , function(e, t, n) {
        "use strict";
        var r = n(13)
          , s = n(68);
        function i(e) {
            e.onuploading && this.on("uploading", e.onuploading),
            s.call(this, e)
        }
        var o = s.prototype
          , a = i.prototype = Object.create(o);
        a.doSend = function() {
            var e = this.options
              , t = e.headers
              , n = this.xhr = new XMLHttpRequest;
            if ("multipart/form-data" === t["Content-Type"]) {
                delete t["Content-Type"],
                n.upload.onprogress = this.onProgress.bind(this),
                n.upload.onload = this.onProgress.bind(this);
                var s = e.data;
                e.data = new window.FormData,
                s && r.getKeys(s, e.putFileAtEnd).forEach(function(t) {
                    var n = s[t];
                    n.tagName && "INPUT" === n.tagName.toUpperCase() ? "file" === n.type && [].forEach.call(n.files, function(t) {
                        e.data.append(r.dataset(n, "name") || n.name || t.name || "file-" + r.uniqueID(), t)
                    }) : e.data.append(t, n)
                })
            } else
                t["x-nos-token"] && (n.upload.onprogress = this.onProgress.bind(this),
                n.upload.onload = this.onProgress.bind(this));
            n.onreadystatechange = this.onStateChange.bind(this),
            0 !== e.timeout && (this.timer = setTimeout(this.onTimeout.bind(this), e.timeout)),
            n.open(e.method, e.url, !e.sync),
            Object.keys(t).forEach(function(e) {
                n.setRequestHeader(e, t[e])
            }),
            e.cookie && "withCredentials"in n && (n.withCredentials = !0),
            n.send(e.data),
            this.afterSend()
        }
        ,
        a.onProgress = function(e) {
            e.lengthComputable && e.loaded <= e.total && this.emit("uploading", e)
        }
        ,
        a.onStateChange = function() {
            var e = this.xhr;
            4 === e.readyState && this.onLoad({
                status: e.status,
                result: e.responseText || ""
            })
        }
        ,
        a.getResponseHeader = function(e) {
            var t = this.xhr;
            return t ? t.getResponseHeader(e) : ""
        }
        ,
        a.destroy = function() {
            clearTimeout(this.timer);
            try {
                this.xhr.onreadystatechange = r.f,
                this.xhr.abort()
            } catch (e) {
                console.log("error:", "ignore error ajax destroy,", e)
            }
            o.destroy.call(this)
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        n(192).polyfill(),
        n(5).isBrowser = !0
    }
    , , , , , , , , , , , , function(e, t) {
        e.exports = function(e) {
            var t = n.call(e);
            return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
        }
        ;
        var n = Object.prototype.toString
    }
    , function(e, t, n) {
        "use strict";
        var r = n(56);
        function s() {}
        s.typeMap = {
            text: 0,
            image: 1,
            audio: 2,
            video: 3,
            geo: 4,
            notification: 5,
            file: 6,
            tip: 10,
            robot: 11,
            custom: 100
        };
        var i = s.typeReverseMap = {
            0: "text",
            1: "image",
            2: "audio",
            3: "video",
            4: "geo",
            5: "notification",
            6: "file",
            10: "tip",
            11: "robot",
            100: "custom"
        };
        s.validTypes = Object.keys(s.typeMap),
        s.setFlow = function(e, t) {
            var n = t === e.from;
            n && t === e.to && (n = r.deviceId === e.fromDeviceId),
            e.flow = n ? "out" : "in",
            "robot" === e.type && e.content && e.content.msgOut && (e.flow = "in")
        }
        ,
        s.getType = function(e) {
            var t = e.type;
            return i[t] || t
        }
        ,
        e.exports = s
    }
    , function(module, exports, __webpack_require__) {
        (function(global, module) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            /*! Socket.IO.js build:0.9.11, development. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */
            function getGlobal() {
                return "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0 !== global ? global : {}
            }
            var root = getGlobal()
              , io = module.exports;
            void 0 === root.location && (root.location = null),
            root.io ? module && (module.exports = io = root.io) : root.io = io,
            function() {
                !function(e, t) {
                    var n = e;
                    n.version = "0.9.11",
                    n.protocol = 1,
                    n.transports = [],
                    n.j = [],
                    n.sockets = {},
                    n.connect = function(e, r) {
                        var s, i, o = n.util.parseUri(e);
                        t && t.location && (o.protocol = o.protocol || t.location.protocol.slice(0, -1),
                        o.host = o.host || (t.document ? t.document.domain : t.location.hostname),
                        o.port = o.port || t.location.port),
                        s = n.util.uniqueUri(o);
                        var a = {
                            host: o.host,
                            secure: "https" === o.protocol,
                            port: o.port || ("https" === o.protocol ? 443 : 80),
                            query: o.query || ""
                        };
                        return n.util.merge(a, r),
                        !a["force new connection"] && n.sockets[s] || (i = new n.Socket(a)),
                        !a["force new connection"] && i && (n.sockets[s] = i),
                        (i = i || n.sockets[s]).of(o.path.length > 1 ? o.path : "")
                    }
                }(module.exports, root),
                function(e, t) {
                    var n = e.util = {}
                      , r = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                      , s = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                    n.parseUri = function(e) {
                        for (var t = r.exec(e || ""), n = {}, i = 14; i--; )
                            n[s[i]] = t[i] || "";
                        return n
                    }
                    ,
                    n.uniqueUri = function(e) {
                        var n = e.protocol
                          , r = e.host
                          , s = e.port;
                        return "document"in t && t.document ? (r = r || document.domain,
                        s = s || ("https" == n && "https:" !== document.location.protocol ? 443 : document.location.port)) : (r = r || "localhost",
                        s || "https" != n || (s = 443)),
                        (n || "http") + "://" + r + ":" + (s || 80)
                    }
                    ,
                    n.query = function(e, t) {
                        var r = n.chunkQuery(e || "")
                          , s = [];
                        for (var i in n.merge(r, n.chunkQuery(t || "")),
                        r)
                            r.hasOwnProperty(i) && s.push(i + "=" + r[i]);
                        return s.length ? "?" + s.join("&") : ""
                    }
                    ,
                    n.chunkQuery = function(e) {
                        for (var t, n = {}, r = e.split("&"), s = 0, i = r.length; s < i; ++s)
                            (t = r[s].split("="))[0] && (n[t[0]] = t[1]);
                        return n
                    }
                    ;
                    var i = !1;
                    n.load = function(e) {
                        if ("undefined" != typeof document && document && "complete" === document.readyState || i)
                            return e();
                        n.on(t, "load", e, !1)
                    }
                    ,
                    n.on = function(e, t, n, r) {
                        e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener && e.addEventListener(t, n, r)
                    }
                    ,
                    n.request = function(e) {
                        if (e && "undefined" != typeof XDomainRequest && !n.ua.hasCORS)
                            return new XDomainRequest;
                        if ("undefined" != typeof XMLHttpRequest && (!e || n.ua.hasCORS))
                            return new XMLHttpRequest;
                        if (!e)
                            try {
                                return new (root[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                            } catch (e) {}
                        return null
                    }
                    ,
                    void 0 !== root && n.load(function() {
                        i = !0
                    }),
                    n.defer = function(e) {
                        if (!n.ua.webkit || "undefined" != typeof importScripts)
                            return e();
                        n.load(function() {
                            setTimeout(e, 100)
                        })
                    }
                    ,
                    n.merge = function(e, t, r, s) {
                        var i, o = s || [], a = void 0 === r ? 2 : r;
                        for (i in t)
                            t.hasOwnProperty(i) && n.indexOf(o, i) < 0 && ("object" == typeof e[i] && a ? n.merge(e[i], t[i], a - 1, o) : (e[i] = t[i],
                            o.push(t[i])));
                        return e
                    }
                    ,
                    n.mixin = function(e, t) {
                        n.merge(e.prototype, t.prototype)
                    }
                    ,
                    n.inherit = function(e, t) {
                        function n() {}
                        n.prototype = t.prototype,
                        e.prototype = new n
                    }
                    ,
                    n.isArray = Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }
                    ,
                    n.intersect = function(e, t) {
                        for (var r = [], s = e.length > t.length ? e : t, i = e.length > t.length ? t : e, o = 0, a = i.length; o < a; o++)
                            ~n.indexOf(s, i[o]) && r.push(i[o]);
                        return r
                    }
                    ,
                    n.indexOf = function(e, t, n) {
                        var r = e.length;
                        for (n = n < 0 ? n + r < 0 ? 0 : n + r : n || 0; n < r && e[n] !== t; n++)
                            ;
                        return r <= n ? -1 : n
                    }
                    ,
                    n.toArray = function(e) {
                        for (var t = [], n = 0, r = e.length; n < r; n++)
                            t.push(e[n]);
                        return t
                    }
                    ,
                    n.ua = {},
                    n.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() {
                        try {
                            var e = new XMLHttpRequest
                        } catch (e) {
                            return !1
                        }
                        return null != e.withCredentials
                    }(),
                    n.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent),
                    n.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
                }(void 0 !== io ? io : module.exports, root),
                function(e, t) {
                    function n() {}
                    e.EventEmitter = n,
                    n.prototype.on = function(e, n) {
                        return this.$events || (this.$events = {}),
                        this.$events[e] ? t.util.isArray(this.$events[e]) ? this.$events[e].push(n) : this.$events[e] = [this.$events[e], n] : this.$events[e] = n,
                        this
                    }
                    ,
                    n.prototype.addListener = n.prototype.on,
                    n.prototype.once = function(e, t) {
                        var n = this;
                        function r() {
                            n.removeListener(e, r),
                            t.apply(this, arguments)
                        }
                        return r.listener = t,
                        this.on(e, r),
                        this
                    }
                    ,
                    n.prototype.removeListener = function(e, n) {
                        if (this.$events && this.$events[e]) {
                            var r = this.$events[e];
                            if (t.util.isArray(r)) {
                                for (var s = -1, i = 0, o = r.length; i < o; i++)
                                    if (r[i] === n || r[i].listener && r[i].listener === n) {
                                        s = i;
                                        break
                                    }
                                if (s < 0)
                                    return this;
                                r.splice(s, 1),
                                r.length || delete this.$events[e]
                            } else
                                (r === n || r.listener && r.listener === n) && delete this.$events[e]
                        }
                        return this
                    }
                    ,
                    n.prototype.removeAllListeners = function(e) {
                        return void 0 === e ? (this.$events = {},
                        this) : (this.$events && this.$events[e] && (this.$events[e] = null),
                        this)
                    }
                    ,
                    n.prototype.listeners = function(e) {
                        return this.$events || (this.$events = {}),
                        this.$events[e] || (this.$events[e] = []),
                        t.util.isArray(this.$events[e]) || (this.$events[e] = [this.$events[e]]),
                        this.$events[e]
                    }
                    ,
                    n.prototype.emit = function(e) {
                        if (!this.$events)
                            return !1;
                        var n = this.$events[e];
                        if (!n)
                            return !1;
                        var r = Array.prototype.slice.call(arguments, 1);
                        if ("function" == typeof n)
                            n.apply(this, r);
                        else {
                            if (!t.util.isArray(n))
                                return !1;
                            for (var s = n.slice(), i = 0, o = s.length; i < o; i++)
                                s[i].apply(this, r)
                        }
                        return !0
                    }
                }(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports),
                function(exports, nativeJSON) {
                    "use strict";
                    if (nativeJSON && nativeJSON.parse)
                        return exports.JSON = {
                            parse: nativeJSON.parse,
                            stringify: nativeJSON.stringify
                        };
                    var JSON = exports.JSON = {};
                    function f(e) {
                        return e < 10 ? "0" + e : e
                    }
                    function date(e, t) {
                        return isFinite(e.valueOf()) ? e.getUTCFullYear() + "-" + f(e.getUTCMonth() + 1) + "-" + f(e.getUTCDate()) + "T" + f(e.getUTCHours()) + ":" + f(e.getUTCMinutes()) + ":" + f(e.getUTCSeconds()) + "Z" : null
                    }
                    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    }, rep;
                    function quote(e) {
                        return escapable.lastIndex = 0,
                        escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                            var t = meta[e];
                            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"' : '"' + e + '"'
                    }
                    function str(e, t) {
                        var n, r, s, i, o, a = gap, c = t[e];
                        switch (c instanceof Date && (c = date(e)),
                        "function" == typeof rep && (c = rep.call(t, e, c)),
                        typeof c) {
                        case "string":
                            return quote(c);
                        case "number":
                            return isFinite(c) ? String(c) : "null";
                        case "boolean":
                        case "null":
                            return String(c);
                        case "object":
                            if (!c)
                                return "null";
                            if (gap += indent,
                            o = [],
                            "[object Array]" === Object.prototype.toString.apply(c)) {
                                for (i = c.length,
                                n = 0; n < i; n += 1)
                                    o[n] = str(n, c) || "null";
                                return s = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + a + "]" : "[" + o.join(",") + "]",
                                gap = a,
                                s
                            }
                            if (rep && "object" == typeof rep)
                                for (i = rep.length,
                                n = 0; n < i; n += 1)
                                    "string" == typeof rep[n] && (s = str(r = rep[n], c)) && o.push(quote(r) + (gap ? ": " : ":") + s);
                            else
                                for (r in c)
                                    Object.prototype.hasOwnProperty.call(c, r) && (s = str(r, c)) && o.push(quote(r) + (gap ? ": " : ":") + s);
                            return s = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + a + "}" : "{" + o.join(",") + "}",
                            gap = a,
                            s
                        }
                    }
                    JSON.stringify = function(e, t, n) {
                        var r;
                        if (gap = "",
                        indent = "",
                        "number" == typeof n)
                            for (r = 0; r < n; r += 1)
                                indent += " ";
                        else
                            "string" == typeof n && (indent = n);
                        if (rep = t,
                        t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))
                            throw new Error("socket.io:: replacer cannot JSON.stringify");
                        return str("", {
                            "": e
                        })
                    }
                    ,
                    JSON.parse = function(text, reviver) {
                        var j;
                        function walk(e, t) {
                            var n, r, s = e[t];
                            if (s && "object" == typeof s)
                                for (n in s)
                                    Object.prototype.hasOwnProperty.call(s, n) && (void 0 !== (r = walk(s, n)) ? s[n] = r : delete s[n]);
                            return reviver.call(e, t, s)
                        }
                        if (text = String(text),
                        cx.lastIndex = 0,
                        cx.test(text) && (text = text.replace(cx, function(e) {
                            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        })),
                        /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                            return j = eval("(" + text + ")"),
                            "function" == typeof reviver ? walk({
                                "": j
                            }, "") : j;
                        throw new SyntaxError("socket.io:: reviver cannot JSON.parse")
                    }
                }(void 0 !== io ? io : module.exports, "undefined" != typeof JSON ? JSON : void 0),
                function(e, t) {
                    var n = e.parser = {}
                      , r = n.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"]
                      , s = n.reasons = ["transport not supported", "client not handshaken", "unauthorized"]
                      , i = n.advice = ["reconnect"]
                      , o = t.JSON
                      , a = t.util.indexOf;
                    n.encodePacket = function(e) {
                        var t = a(r, e.type)
                          , n = e.id || ""
                          , c = e.endpoint || ""
                          , u = e.ack
                          , m = null;
                        switch (e.type) {
                        case "error":
                            var l = e.reason ? a(s, e.reason) : ""
                              , d = e.advice ? a(i, e.advice) : "";
                            "" === l && "" === d || (m = l + ("" !== d ? "+" + d : ""));
                            break;
                        case "message":
                            "" !== e.data && (m = e.data);
                            break;
                        case "event":
                            var p = {
                                name: e.name
                            };
                            e.args && e.args.length && (p.args = e.args),
                            m = o.stringify(p);
                            break;
                        case "json":
                            m = o.stringify(e.data);
                            break;
                        case "connect":
                            e.qs && (m = e.qs);
                            break;
                        case "ack":
                            m = e.ackId + (e.args && e.args.length ? "+" + o.stringify(e.args) : "")
                        }
                        var f = [t, n + ("data" == u ? "+" : ""), c];
                        return null != m && f.push(m),
                        f.join(":")
                    }
                    ,
                    n.encodePayload = function(e) {
                        var t = "";
                        if (1 == e.length)
                            return e[0];
                        for (var n = 0, r = e.length; n < r; n++) {
                            t += "�" + e[n].length + "�" + e[n]
                        }
                        return t
                    }
                    ;
                    var c = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
                    n.decodePacket = function(e) {
                        if (!(a = e.match(c)))
                            return {};
                        var t = a[2] || ""
                          , n = (e = a[5] || "",
                        {
                            type: r[a[1]],
                            endpoint: a[4] || ""
                        });
                        switch (t && (n.id = t,
                        a[3] ? n.ack = "data" : n.ack = !0),
                        n.type) {
                        case "error":
                            var a = e.split("+");
                            n.reason = s[a[0]] || "",
                            n.advice = i[a[1]] || "";
                            break;
                        case "message":
                            n.data = e || "";
                            break;
                        case "event":
                            try {
                                var u = o.parse(e);
                                n.name = u.name,
                                n.args = u.args
                            } catch (e) {}
                            n.args = n.args || [];
                            break;
                        case "json":
                            try {
                                n.data = o.parse(e)
                            } catch (e) {}
                            break;
                        case "connect":
                            n.qs = e || "";
                            break;
                        case "ack":
                            if ((a = e.match(/^([0-9]+)(\+)?(.*)/)) && (n.ackId = a[1],
                            n.args = [],
                            a[3]))
                                try {
                                    n.args = a[3] ? o.parse(a[3]) : []
                                } catch (e) {}
                        }
                        return n
                    }
                    ,
                    n.decodePayload = function(e) {
                        var t = function(e, t) {
                            for (var n = 0, r = e; r < t.length; r++) {
                                if ("�" == t.charAt(r))
                                    return n;
                                n++
                            }
                            return n
                        };
                        if ("�" == e.charAt(0)) {
                            for (var r = [], s = 1, i = ""; s < e.length; s++)
                                if ("�" == e.charAt(s)) {
                                    var o = e.substr(s + 1).substr(0, i);
                                    if ("�" != e.charAt(s + 1 + Number(i)) && s + 1 + Number(i) != e.length) {
                                        var a = Number(i);
                                        l = t(s + a + 1, e),
                                        o = e.substr(s + 1).substr(0, a + l),
                                        s += l
                                    }
                                    r.push(n.decodePacket(o)),
                                    s += Number(i) + 1,
                                    i = ""
                                } else
                                    i += e.charAt(s);
                            return r
                        }
                        return [n.decodePacket(e)]
                    }
                }(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports),
                function(e, t) {
                    function n(e, t) {
                        this.socket = e,
                        this.sessid = t
                    }
                    e.Transport = n,
                    t.util.mixin(n, t.EventEmitter),
                    n.prototype.heartbeats = function() {
                        return !0
                    }
                    ,
                    n.prototype.onData = function(e) {
                        if (this !== this.socket.transport)
                            return this;
                        if (this.clearCloseTimeout(),
                        (this.socket.connected || this.socket.connecting || this.socket.reconnecting) && this.setCloseTimeout(),
                        "" !== e) {
                            var n = t.parser.decodePayload(e);
                            if (n && n.length)
                                for (var r = 0, s = n.length; r < s; r++)
                                    this.onPacket(n[r])
                        }
                        return this
                    }
                    ,
                    n.prototype.onPacket = function(e) {
                        return this.socket.setHeartbeatTimeout(),
                        "heartbeat" == e.type ? this.onHeartbeat() : ("connect" == e.type && "" == e.endpoint && this.onConnect(),
                        "error" == e.type && "reconnect" == e.advice && (this.isOpen = !1),
                        this.socket.onPacket(e),
                        this)
                    }
                    ,
                    n.prototype.setCloseTimeout = function() {
                        if (!this.closeTimeout) {
                            var e = this;
                            this.closeTimeout = setTimeout(function() {
                                e.onDisconnect()
                            }, this.socket.closeTimeout)
                        }
                    }
                    ,
                    n.prototype.onDisconnect = function() {
                        return this.isOpen && this.close(),
                        this.clearTimeouts(),
                        this.socket ? (this.socket.transport === this ? this.socket.onDisconnect() : this.socket.setBuffer(!1),
                        this) : this
                    }
                    ,
                    n.prototype.onConnect = function() {
                        return this.socket.onConnect(),
                        this
                    }
                    ,
                    n.prototype.clearCloseTimeout = function() {
                        this.closeTimeout && (clearTimeout(this.closeTimeout),
                        this.closeTimeout = null)
                    }
                    ,
                    n.prototype.clearTimeouts = function() {
                        this.clearCloseTimeout(),
                        this.reopenTimeout && clearTimeout(this.reopenTimeout)
                    }
                    ,
                    n.prototype.packet = function(e) {
                        this.send(t.parser.encodePacket(e))
                    }
                    ,
                    n.prototype.onHeartbeat = function(e) {
                        this.packet({
                            type: "heartbeat"
                        })
                    }
                    ,
                    n.prototype.onOpen = function() {
                        this.isOpen = !0,
                        this.clearCloseTimeout(),
                        this.socket.onOpen()
                    }
                    ,
                    n.prototype.onClose = function() {
                        this.isOpen = !1,
                        this.socket.transport === this ? this.socket.onClose() : this.socket.setBuffer(!1),
                        this.onDisconnect(),
                        this.onDisconnectDone instanceof Function && this.onDisconnectDone(null),
                        this.onConnectionOver instanceof Function && this.onConnectionOver(null)
                    }
                    ,
                    n.prototype.onDisconnectDone = function() {}
                    ,
                    n.prototype.onConnectionOver = function() {}
                    ,
                    n.prototype.prepareUrl = function() {
                        var e = this.socket.options;
                        return this.scheme() + "://" + e.host + ":" + e.port + "/" + e.resource + "/" + t.protocol + "/" + this.name + "/" + this.sessid
                    }
                    ,
                    n.prototype.ready = function(e, t) {
                        t.call(this)
                    }
                }(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports),
                function(e, t, n) {
                    function r(e) {
                        if (this.options = {
                            port: 80,
                            secure: !1,
                            document: "document"in n && document,
                            resource: "socket.io",
                            transports: e.transports || t.transports,
                            "connect timeout": 1e4,
                            "try multiple transports": !0,
                            reconnect: !0,
                            "reconnection delay": 500,
                            "reconnection limit": 1 / 0,
                            "reopen delay": 3e3,
                            "max reconnection attempts": 10,
                            "sync disconnect on unload": !1,
                            "auto connect": !0,
                            "flash policy port": 10843,
                            manualFlush: !1
                        },
                        t.util.merge(this.options, e),
                        this.connected = !1,
                        this.open = !1,
                        this.connecting = !1,
                        this.reconnecting = !1,
                        this.namespaces = {},
                        this.buffer = [],
                        this.doBuffer = !1,
                        this.options["sync disconnect on unload"] && (!this.isXDomain() || t.util.ua.hasCORS)) {
                            var r = this;
                            t.util.on(n, "beforeunload", function() {
                                r.disconnectSync()
                            }, !1)
                        }
                        this.options["auto connect"] && this.connect()
                    }
                    function s() {}
                    e.Socket = r,
                    t.util.mixin(r, t.EventEmitter),
                    r.prototype.of = function(e) {
                        return this.namespaces[e] || (this.namespaces[e] = new t.SocketNamespace(this,e),
                        "" !== e && this.namespaces[e].packet({
                            type: "connect"
                        })),
                        this.namespaces[e]
                    }
                    ,
                    r.prototype.publish = function() {
                        var e;
                        for (var t in this.emit.apply(this, arguments),
                        this.namespaces)
                            this.namespaces.hasOwnProperty(t) && (e = this.of(t)).$emit.apply(e, arguments)
                    }
                    ,
                    r.prototype.handshake = function(e) {
                        var n = this
                          , r = this.options;
                        function i(t) {
                            t instanceof Error ? (n.connecting = !1,
                            n.onError(t.message)) : e.apply(null, t.split(":"))
                        }
                        var o = ["http" + (r.secure ? "s" : "") + ":/", r.host + ":" + r.port, r.resource, t.protocol, t.util.query(this.options.query, "t=" + +new Date)].join("/");
                        if (this.isXDomain() && !t.util.ua.hasCORS && "undefined" != typeof document && document && document.getElementsByTagName) {
                            var a = document.getElementsByTagName("script")[0]
                              , c = document.createElement("script");
                            c.src = o + "&jsonp=" + t.j.length,
                            c.onreadystatechange = function() {
                                "loaded" == this.readyState && c.parentNode && (c.parentNode.removeChild(c),
                                n.connecting = !1,
                                !n.reconnecting && n.onError("Server down or port not open"),
                                n.publish("handshake_failed"))
                            }
                            ,
                            a.parentNode.insertBefore(c, a),
                            t.j.push(function(e) {
                                i(e),
                                c.parentNode.removeChild(c)
                            })
                        } else {
                            var u = t.util.request();
                            u.open("GET", o, !0),
                            u.timeout = 1e4,
                            this.isXDomain() && (u.withCredentials = !0),
                            u.onreadystatechange = function() {
                                4 == u.readyState && (u.onreadystatechange = s,
                                200 == u.status ? i(u.responseText) : 403 == u.status ? (n.connecting = !1,
                                n.onError(u.responseText),
                                n.publish("handshake_failed")) : (n.connecting = !1,
                                !n.reconnecting && n.onError(u.responseText),
                                n.publish("handshake_failed")))
                            }
                            ,
                            u.ontimeout = function(e) {
                                n.connecting = !1,
                                !n.reconnecting && n.onError(u.responseText),
                                n.publish("handshake_failed")
                            }
                            ,
                            u.send(null)
                        }
                    }
                    ,
                    r.prototype.connect = function(e) {
                        if (this.connecting)
                            return this;
                        var n = this;
                        return n.connecting = !0,
                        this.handshake(function(r, s, i, o) {
                            n.sessionid = r,
                            n.closeTimeout = 1e3 * i,
                            n.heartbeatTimeout = 1e3 * s,
                            n.transports || (n.transports = n.origTransports = o ? t.util.intersect(o.split(","), n.options.transports) : n.options.transports),
                            n.setHeartbeatTimeout(),
                            n.once("connect", function() {
                                clearTimeout(n.connectTimeoutTimer),
                                n.connectTimeoutTimer = null,
                                e && "function" == typeof e && e()
                            }),
                            n.doConnect()
                        }),
                        this
                    }
                    ,
                    r.prototype.doConnect = function() {
                        var e = this;
                        if (e.transport && e.transport.clearTimeouts(),
                        e.transport = e.getTransport(e.transports),
                        !e.transport)
                            return e.publish("connect_failed");
                        e.transport.ready(e, function() {
                            e.connecting = !0,
                            e.publish("connecting", e.transport.name),
                            e.transport.open(),
                            e.options["connect timeout"] && (e.connectTimeoutTimer && clearTimeout(e.connectTimeoutTimer),
                            e.connectTimeoutTimer = setTimeout(e.tryNextTransport.bind(e), e.options["connect timeout"]))
                        })
                    }
                    ,
                    r.prototype.getTransport = function(e) {
                        for (var n, r = e || this.transports, s = 0; n = r[s]; s++) {
                            if (t.Transport[n] && t.Transport[n].check(this) && (!this.isXDomain() || t.Transport[n].xdomainCheck(this)))
                                return new t.Transport[n](this,this.sessionid)
                        }
                        return null
                    }
                    ,
                    r.prototype.tryNextTransport = function() {
                        if (!this.connected && (this.connecting = !1,
                        this.options["try multiple transports"])) {
                            for (var e = this.transports; e.length > 0 && e.splice(0, 1)[0] != this.transport.name; )
                                ;
                            e.length ? this.doConnect() : this.publish("connect_failed")
                        }
                    }
                    ,
                    r.prototype.setHeartbeatTimeout = function() {
                        if (clearTimeout(this.heartbeatTimeoutTimer),
                        !this.transport || this.transport.heartbeats()) {
                            var e = this;
                            this.heartbeatTimeoutTimer = setTimeout(function() {
                                e.transport && e.transport.onClose()
                            }, this.heartbeatTimeout)
                        }
                    }
                    ,
                    r.prototype.packet = function(e) {
                        return this.connected && !this.doBuffer ? this.transport.packet(e) : this.buffer.push(e),
                        this
                    }
                    ,
                    r.prototype.setBuffer = function(e) {
                        this.doBuffer = e,
                        !e && this.connected && this.buffer.length && (this.options.manualFlush || this.flushBuffer())
                    }
                    ,
                    r.prototype.flushBuffer = function() {
                        this.transport.payload(this.buffer),
                        this.buffer = []
                    }
                    ,
                    r.prototype.disconnect = function() {
                        return (this.connected || this.connecting) && (this.open && this.of("").packet({
                            type: "disconnect"
                        }),
                        this.onDisconnect("booted")),
                        this
                    }
                    ,
                    r.prototype.disconnectSync = function() {
                        var e = t.util.request()
                          , n = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, t.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
                        e.open("GET", n, !1),
                        e.send(null),
                        this.onDisconnect("booted")
                    }
                    ,
                    r.prototype.isXDomain = function() {
                        var e = n.location.port || ("https:" == n.location.protocol ? 443 : 80);
                        return this.options.host !== n.location.hostname || this.options.port != e
                    }
                    ,
                    r.prototype.onConnect = function() {
                        this.connected || (this.connected = !0,
                        this.connecting = !1,
                        this.doBuffer || this.setBuffer(!1),
                        this.emit("connect"))
                    }
                    ,
                    r.prototype.onOpen = function() {
                        this.open = !0
                    }
                    ,
                    r.prototype.onClose = function() {
                        this.open = !1,
                        clearTimeout(this.heartbeatTimeoutTimer)
                    }
                    ,
                    r.prototype.onPacket = function(e) {
                        this.of(e.endpoint).onPacket(e)
                    }
                    ,
                    r.prototype.onError = function(e) {
                        e && e.advice && "reconnect" === e.advice && (this.connected || this.connecting) && (this.disconnect(),
                        this.options.reconnect && this.reconnect()),
                        this.publish("error", e && e.reason ? e.reason : e)
                    }
                    ,
                    r.prototype.onDisconnect = function(e) {
                        var t = this.connected
                          , n = this.connecting;
                        this.connected = !1,
                        this.connecting = !1,
                        this.open = !1,
                        (t || n) && (this.transport.close(),
                        this.transport.clearTimeouts(),
                        t && (this.publish("disconnect", e),
                        "booted" != e && this.options.reconnect && !this.reconnecting && this.reconnect()),
                        n && (this.connectTimeoutTimer && clearTimeout(this.connectTimeoutTimer),
                        this.tryNextTransport()))
                    }
                    ,
                    r.prototype.reconnect = function() {
                        this.reconnecting = !0,
                        this.reconnectionAttempts = 0,
                        this.reconnectionDelay = this.options["reconnection delay"];
                        var e = this
                          , t = this.options["max reconnection attempts"]
                          , n = this.options["try multiple transports"]
                          , r = this.options["reconnection limit"];
                        function s() {
                            if (e.connected) {
                                for (var t in e.namespaces)
                                    e.namespaces.hasOwnProperty(t) && "" !== t && e.namespaces[t].packet({
                                        type: "connect"
                                    });
                                e.publish("reconnect", e.transport.name, e.reconnectionAttempts)
                            }
                            clearTimeout(e.reconnectionTimer),
                            e.removeListener("connect_failed", i),
                            e.removeListener("connect", i),
                            e.reconnecting = !1,
                            delete e.reconnectionAttempts,
                            delete e.reconnectionDelay,
                            delete e.reconnectionTimer,
                            delete e.redoTransports,
                            e.options["try multiple transports"] = n
                        }
                        function i() {
                            if (e.reconnecting)
                                return e.connected ? s() : e.connecting && e.reconnecting ? e.reconnectionTimer = setTimeout(i, 1e3) : void (e.reconnectionAttempts++ >= t ? e.redoTransports ? (e.publish("reconnect_failed"),
                                s()) : (e.on("connect_failed", i),
                                e.options["try multiple transports"] = !0,
                                e.transports = e.origTransports,
                                e.transport = e.getTransport(),
                                e.redoTransports = !0,
                                e.connect()) : (e.reconnectionDelay < r && (e.reconnectionDelay *= 2),
                                e.connect(),
                                e.publish("reconnecting", e.reconnectionDelay, e.reconnectionAttempts),
                                e.reconnectionTimer = setTimeout(i, e.reconnectionDelay)))
                        }
                        this.options["try multiple transports"] = !1,
                        this.reconnectionTimer = setTimeout(i, this.reconnectionDelay),
                        this.on("connect", i)
                    }
                }(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports, root),
                function(e, t) {
                    function n(e, t) {
                        this.socket = e,
                        this.name = t || "",
                        this.flags = {},
                        this.json = new r(this,"json"),
                        this.ackPackets = 0,
                        this.acks = {}
                    }
                    function r(e, t) {
                        this.namespace = e,
                        this.name = t
                    }
                    e.SocketNamespace = n,
                    t.util.mixin(n, t.EventEmitter),
                    n.prototype.$emit = t.EventEmitter.prototype.emit,
                    n.prototype.of = function() {
                        return this.socket.of.apply(this.socket, arguments)
                    }
                    ,
                    n.prototype.packet = function(e) {
                        return e.endpoint = this.name,
                        this.socket.packet(e),
                        this.flags = {},
                        this
                    }
                    ,
                    n.prototype.send = function(e, t) {
                        var n = {
                            type: this.flags.json ? "json" : "message",
                            data: e
                        };
                        return "function" == typeof t && (n.id = ++this.ackPackets,
                        n.ack = !0,
                        this.acks[n.id] = t),
                        this.packet(n)
                    }
                    ,
                    n.prototype.emit = function(e) {
                        var t = Array.prototype.slice.call(arguments, 1)
                          , n = t[t.length - 1]
                          , r = {
                            type: "event",
                            name: e
                        };
                        return "function" == typeof n && (r.id = ++this.ackPackets,
                        r.ack = "data",
                        this.acks[r.id] = n,
                        t = t.slice(0, t.length - 1)),
                        r.args = t,
                        this.packet(r)
                    }
                    ,
                    n.prototype.disconnect = function() {
                        return "" === this.name ? this.socket.disconnect() : (this.packet({
                            type: "disconnect"
                        }),
                        this.$emit("disconnect")),
                        this
                    }
                    ,
                    n.prototype.onPacket = function(e) {
                        var n = this;
                        function r() {
                            n.packet({
                                type: "ack",
                                args: t.util.toArray(arguments),
                                ackId: e.id
                            })
                        }
                        switch (e.type) {
                        case "connect":
                            this.$emit("connect");
                            break;
                        case "disconnect":
                            "" === this.name ? this.socket.onDisconnect(e.reason || "booted") : this.$emit("disconnect", e.reason);
                            break;
                        case "message":
                        case "json":
                            var s = ["message", e.data];
                            "data" == e.ack ? s.push(r) : e.ack && this.packet({
                                type: "ack",
                                ackId: e.id
                            }),
                            this.$emit.apply(this, s);
                            break;
                        case "event":
                            s = [e.name].concat(e.args);
                            "data" == e.ack && s.push(r),
                            this.$emit.apply(this, s);
                            break;
                        case "ack":
                            this.acks[e.ackId] && (this.acks[e.ackId].apply(this, e.args),
                            delete this.acks[e.ackId]);
                            break;
                        case "error":
                            console.error("SocketIO on packet error: ", e),
                            e.advice ? this.socket.onError(e) : "unauthorized" === e.reason ? this.$emit("connect_failed", e.reason) : this.$emit("error", e.reason)
                        }
                    }
                    ,
                    r.prototype.send = function() {
                        this.namespace.flags[this.name] = !0,
                        this.namespace.send.apply(this.namespace, arguments)
                    }
                    ,
                    r.prototype.emit = function() {
                        this.namespace.flags[this.name] = !0,
                        this.namespace.emit.apply(this.namespace, arguments)
                    }
                }(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports),
                function(e, t, n) {
                    function r(e) {
                        t.Transport.apply(this, arguments)
                    }
                    e.websocket = r,
                    t.util.inherit(r, t.Transport),
                    r.prototype.name = "websocket",
                    r.prototype.open = function() {
                        var e, r = t.util.query(this.socket.options.query), s = this;
                        return e || (e = n.MozWebSocket || n.WebSocket),
                        this.websocket = new e(this.prepareUrl() + r),
                        this.websocket.onopen = function() {
                            s.onOpen(),
                            s.socket.setBuffer(!1)
                        }
                        ,
                        this.websocket.onmessage = function(e) {
                            s.onData(e.data)
                        }
                        ,
                        this.websocket.onclose = function() {
                            s.socket.setBuffer(!0),
                            s.onClose()
                        }
                        ,
                        this.websocket.onerror = function(e) {
                            s.onError(e)
                        }
                        ,
                        this
                    }
                    ,
                    t.util.ua.iDevice ? r.prototype.send = function(e) {
                        var t = this;
                        return setTimeout(function() {
                            t.websocket.send(e)
                        }, 0),
                        this
                    }
                    : r.prototype.send = function(e) {
                        return this.websocket.send(e),
                        this
                    }
                    ,
                    r.prototype.payload = function(e) {
                        for (var t = 0, n = e.length; t < n; t++)
                            this.packet(e[t]);
                        return this
                    }
                    ,
                    r.prototype.close = function() {
                        return this.websocket.close(),
                        this
                    }
                    ,
                    r.prototype.onError = function(e) {
                        this.socket.onError(e)
                    }
                    ,
                    r.prototype.scheme = function() {
                        return this.socket.options.secure ? "wss" : "ws"
                    }
                    ,
                    r.check = function() {
                        return "WebSocket"in n && !("__addTask"in WebSocket) || "MozWebSocket"in n
                    }
                    ,
                    r.xdomainCheck = function() {
                        return !0
                    }
                    ,
                    t.transports.push("websocket")
                }(void 0 !== io ? io.Transport : module.exports, void 0 !== io ? io : module.parent.exports, root),
                function(e, t, n) {
                    function r(e) {
                        e && (t.Transport.apply(this, arguments),
                        this.sendBuffer = [])
                    }
                    function s() {}
                    e.XHR = r,
                    t.util.inherit(r, t.Transport),
                    r.prototype.open = function() {
                        return this.socket.setBuffer(!1),
                        this.onOpen(),
                        this.get(),
                        this.setCloseTimeout(),
                        this
                    }
                    ,
                    r.prototype.payload = function(e) {
                        for (var n = [], r = 0, s = e.length; r < s; r++)
                            n.push(t.parser.encodePacket(e[r]));
                        this.send(t.parser.encodePayload(n))
                    }
                    ,
                    r.prototype.send = function(e) {
                        return this.post(e),
                        this
                    }
                    ,
                    r.prototype.post = function(e) {
                        var t = this;
                        this.socket.setBuffer(!0),
                        this.sendXHR = this.request("POST"),
                        n.XDomainRequest && this.sendXHR instanceof XDomainRequest ? this.sendXHR.onload = this.sendXHR.onerror = function() {
                            this.onload = s,
                            t.socket.setBuffer(!1)
                        }
                        : this.sendXHR.onreadystatechange = function() {
                            4 == this.readyState && (this.onreadystatechange = s,
                            t.posting = !1,
                            200 == this.status ? t.socket.setBuffer(!1) : t.onClose())
                        }
                        ,
                        this.sendXHR.send(e)
                    }
                    ,
                    r.prototype.close = function() {
                        return this.onClose(),
                        this
                    }
                    ,
                    r.prototype.request = function(e) {
                        var n = t.util.request(this.socket.isXDomain())
                          , r = t.util.query(this.socket.options.query, "t=" + +new Date);
                        if (n.open(e || "GET", this.prepareUrl() + r, !0),
                        "POST" == e)
                            try {
                                n.setRequestHeader ? n.setRequestHeader("Content-type", "text/plain;charset=UTF-8") : n.contentType = "text/plain"
                            } catch (e) {}
                        return n
                    }
                    ,
                    r.prototype.scheme = function() {
                        return this.socket.options.secure ? "https" : "http"
                    }
                    ,
                    r.check = function(e, r) {
                        try {
                            var s = t.util.request(r)
                              , i = n.XDomainRequest && s instanceof XDomainRequest
                              , o = e && e.options && e.options.secure ? "https:" : "http:"
                              , a = n.location && o != n.location.protocol;
                            if (s && (!i || !a))
                                return !0
                        } catch (e) {}
                        return !1
                    }
                    ,
                    r.xdomainCheck = function(e) {
                        return r.check(e, !0)
                    }
                }(void 0 !== io ? io.Transport : module.exports, void 0 !== io ? io : module.parent.exports, root),
                function(e, t, n) {
                    function r() {
                        t.Transport.XHR.apply(this, arguments)
                    }
                    function s() {}
                    e["xhr-polling"] = r,
                    t.util.inherit(r, t.Transport.XHR),
                    t.util.merge(r, t.Transport.XHR),
                    r.prototype.name = "xhr-polling",
                    r.prototype.heartbeats = function() {
                        return !1
                    }
                    ,
                    r.prototype.open = function() {
                        return t.Transport.XHR.prototype.open.call(this),
                        !1
                    }
                    ,
                    r.prototype.get = function() {
                        if (this.isOpen) {
                            var e = this;
                            this.xhr = this.request(),
                            n.XDomainRequest && this.xhr instanceof XDomainRequest ? (this.xhr.onload = function() {
                                this.onload = s,
                                this.onerror = s,
                                e.retryCounter = 1,
                                e.onData(this.responseText),
                                e.get()
                            }
                            ,
                            this.xhr.onerror = function() {
                                e.retryCounter++,
                                !e.retryCounter || e.retryCounter > 3 ? e.onClose() : e.get()
                            }
                            ) : this.xhr.onreadystatechange = function() {
                                4 == this.readyState && (this.onreadystatechange = s,
                                200 == this.status ? (e.onData(this.responseText),
                                e.get()) : e.onClose())
                            }
                            ,
                            this.xhr.send(null)
                        }
                    }
                    ,
                    r.prototype.onClose = function() {
                        if (t.Transport.XHR.prototype.onClose.call(this),
                        this.xhr) {
                            this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = s;
                            try {
                                this.xhr.abort()
                            } catch (e) {}
                            this.xhr = null
                        }
                    }
                    ,
                    r.prototype.ready = function(e, n) {
                        var r = this;
                        t.util.defer(function() {
                            n.call(r)
                        })
                    }
                    ,
                    t.transports.push("xhr-polling")
                }(void 0 !== io ? io.Transport : module.exports, void 0 !== io ? io : module.parent.exports, root),
                __WEBPACK_AMD_DEFINE_ARRAY__ = [],
                __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return io
                }
                .apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
                void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
            }()
        }
        ).call(this, __webpack_require__(33), __webpack_require__(309)(module))
    }
    , function(e, t, n) {
        "use strict";
        var r = {
            1: "ROOM_CLOSE",
            2: "ROOM_JOIN",
            3: "INVITE",
            4: "CANCEL_INVITE",
            5: "REJECT",
            6: "ACCEPT",
            7: "LEAVE",
            8: "CONTROL"
        }
          , s = {
            1: "accid",
            2: "uid",
            3: "createTime",
            4: "expireTime",
            5: "web_uid"
        }
          , i = {
            10404: "ROOM_NOT_EXISTS",
            10405: "ROOM_HAS_EXISTS",
            10406: "ROOM_MEMBER_NOT_EXISTS",
            10407: "ROOM_MEMBER_HAS_EXISTS",
            10408: "INVITE_NOT_EXISTS",
            10409: "INVITE_HAS_REJECT",
            10410: "INVITE_HAS_ACCEPT",
            10201: "PEER_NIM_OFFLINE",
            10202: "PEER_PUSH_OFFLINE",
            10419: "ROOM_MEMBER_EXCEED",
            10420: "ROOM_MEMBER_HAS_EXISTS_OTHER_CLIENT",
            10417: "UID_CONFLICT"
        };
        e.exports = {
            parseAvSignalType: function(e) {
                return r[e] || e
            },
            parseAvSignalMember: function(e) {
                var t = {};
                return Object.keys(e).forEach(function(n) {
                    t[s[n]] = e[n]
                }),
                t
            },
            parseAvSignalError: function(e) {
                return e.message = i[e.code] || e.message || e,
                e
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = {
            stripmeta: 0,
            blur: 2,
            quality: 3,
            crop: 4,
            rotate: 5,
            thumbnail: 7,
            interlace: 9
        }
          , i = {
            0: "stripmeta",
            1: "type",
            2: "blur",
            3: "quality",
            4: "crop",
            5: "rotate",
            6: "pixel",
            7: "thumbnail",
            8: "watermark",
            9: "interlace",
            10: "tmp"
        };
        function o(e) {
            r.verifyOptions(e, "type", "image-preview::ImageOp"),
            r.verifyParamValid("type", e.type, o.validTypes, "image-preview::ImageOp"),
            r.merge(this, e),
            this.type = s[e.type]
        }
        o.validTypes = Object.keys(s),
        o.reverse = function(e) {
            var t = r.copy(e);
            return t.type = i[t.type],
            t
        }
        ,
        o.reverseImageOps = function(e) {
            return e.map(function(e) {
                return o.reverse(e)
            })
        }
        ,
        e.exports = o
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = {
            fromDataURL: function(e) {
                var t = r.getGlobal()
                  , n = void 0;
                n = e.split(",")[0].indexOf("base64") >= 0 ? t.atob(e.split(",")[1]) : t.decodeURIComponent(e.split(",")[1]);
                for (var s = e.split(",")[0].split(":")[1].split(";")[0], i = new Uint8Array(n.length), o = 0; o < n.length; o++)
                    i[o] = n.charCodeAt(o);
                return new t.Blob([i],{
                    type: s
                })
            }
        };
        e.exports = s
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = {
            file: {
                md5: "$(Etag)",
                size: "$(ObjectSize)"
            },
            image: {
                md5: "$(Etag)",
                size: "$(ObjectSize)",
                w: "$(ImageInfo.Width)",
                h: "$(ImageInfo.Height)",
                orientation: "$(ImageInfo.Orientation)"
            },
            audio: {
                md5: "$(Etag)",
                size: "$(ObjectSize)",
                dur: "$(AVinfo.Audio.Duration)"
            },
            video: {
                md5: "$(Etag)",
                size: "$(ObjectSize)",
                dur: "$(AVinfo.Video.Duration)",
                w: "$(AVinfo.Video.Width)",
                h: "$(AVinfo.Video.Height)"
            }
        }
          , i = {
            genResponseBody: function(e) {
                return s[e = e || "file"]
            },
            parseResponse: function(e, t) {
                r.notundef(e.size) && (e.size = +e.size),
                r.notundef(e.w) && (e.w = +e.w),
                r.notundef(e.h) && (e.h = +e.h),
                r.notundef(e.dur) && (e.dur = +e.dur);
                var n = e.orientation;
                if (r.notundef(n) && (delete e.orientation,
                t && ("right, top" === n || "left, bottom" === n))) {
                    var s = e.w;
                    e.w = e.h,
                    e.h = s
                }
                return e
            }
        };
        e.exports = i
    }
    , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        var r = n(69)
          , s = n(0)
          , i = s.notundef
          , o = {
            "-2": "unset",
            "-1": "restricted",
            0: "common",
            1: "owner",
            2: "manager",
            3: "guest",
            4: "anonymous"
        };
        function a(e) {
            i(e.nick) && (this.nick = "" + e.nick),
            i(e.avatar) && (this.avatar = "" + e.avatar),
            i(e.custom) && (this.custom = "" + e.custom)
        }
        a.reverse = function(e) {
            var t = s.copy(e);
            return i(t.chatroomId) && (t.chatroomId = "" + t.chatroomId),
            i(t.avatar) && (t.avatar = (0,
            r.genPrivateUrl)(t.avatar)),
            i(t.type) && (t.type = o[t.type]),
            i(t.level) && (t.level = +t.level),
            i(t.online) && (t.online = 1 == +t.online),
            i(t.enterTime) && (t.enterTime = +t.enterTime),
            i(t.guest) && (t.guest = 1 == +t.guest),
            i(t.blacked) && (t.blacked = 1 == +t.blacked),
            i(t.gaged) && (t.gaged = 1 == +t.gaged),
            i(t.valid) && (t.valid = 1 == +t.valid),
            i(t.updateTime) && (t.updateTime = +t.updateTime),
            i(t.tempMuted) ? t.tempMuted = 1 == +t.tempMuted : t.tempMuted = !1,
            i(t.tempMuteDuration) ? t.tempMuteDuration = +t.tempMuteDuration : t.tempMuteDuration = 0,
            t.online || delete t.enterTime,
            t.guest && (t.type = "guest",
            delete t.valid),
            "common" !== t.type && delete t.level,
            delete t.guest,
            t
        }
        ,
        a.reverseMembers = function(e) {
            return e.map(function(e) {
                return a.reverse(e)
            })
        }
        ,
        a.validTypes = Object.keys(o),
        a.typeReverseMap = o,
        e.exports = a
    }
    , function(e, t, n) {
        "use strict";
        var r = n(21)
          , s = n(298)
          , i = n(168)
          , o = n(76)
          , a = n(70)
          , c = n(0)
          , u = n(190)
          , m = n(171)
          , l = n(39)
          , d = n(292)
          , p = n(291);
        e.exports = function(e) {
            c.merge(e, {
                platform: r,
                xhr: s,
                io: i,
                naturalSort: o,
                deepAccess: a,
                util: c,
                support: u,
                blob: m,
                ajax: l,
                LoggerPlugin: d,
                usePlugin: p
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = n(82)
          , i = r.merge({}, s.idMap, {
            auth: {
                id: 2,
                login: 3,
                kicked: 5,
                logout: 6,
                multiPortLogin: 7,
                kick: 8
            },
            user: {
                id: 3,
                updatePushToken: 1,
                appBackground: 2,
                markInBlacklist: 3,
                getBlacklist: 4,
                markInMutelist: 5,
                getMutelist: 6,
                getRelations: 8,
                getUsers: 7,
                updateMyInfo: 10,
                updateDonnop: 15,
                syncMyInfo: 109,
                syncUpdateMyInfo: 110
            },
            notify: {
                id: 4,
                markRead: 3,
                syncOfflineMsgs: 4,
                batchMarkRead: 5,
                syncOfflineSysMsgs: 6,
                syncOfflineNetcallMsgs: 8,
                syncRoamingMsgs: 9,
                syncMsgReceipts: 12,
                syncRobots: 15,
                syncBroadcastMsgs: 16,
                syncSuperTeamRoamingMsgs: 17
            },
            sync: {
                id: 5,
                sync: 1,
                syncTeamMembers: 2,
                syncSuperTeamMembers: 3
            },
            msg: {
                id: 7,
                sendMsg: 1,
                msg: 2,
                sysMsg: 3,
                getHistoryMsgs: 6,
                sendCustomSysMsg: 7,
                searchHistoryMsgs: 8,
                deleteSessions: 9,
                getSessions: 10,
                syncSendMsg: 101,
                sendMsgReceipt: 11,
                msgReceipt: 12,
                deleteMsg: 13,
                msgDeleted: 14,
                markSessionAck: 16,
                broadcastMsg: 17,
                clearServerHistoryMsgs: 18
            },
            team: {
                id: 8,
                createTeam: 1,
                sendTeamMsg: 2,
                teamMsg: 3,
                teamMsgs: 4,
                addTeamMembers: 5,
                removeTeamMembers: 6,
                updateTeam: 7,
                leaveTeam: 8,
                getTeam: 9,
                getTeams: 10,
                getTeamMembers: 11,
                dismissTeam: 12,
                applyTeam: 13,
                passTeamApply: 14,
                rejectTeamApply: 15,
                addTeamManagers: 16,
                removeTeamManagers: 17,
                transferTeam: 18,
                updateInfoInTeam: 19,
                updateNickInTeam: 20,
                acceptTeamInvite: 21,
                rejectTeamInvite: 22,
                getTeamHistoryMsgs: 23,
                searchTeamHistoryMsgs: 24,
                updateMuteStateInTeam: 25,
                getMyTeamMembers: 26,
                getMutedTeamMembers: 27,
                sendTeamMsgReceipt: 28,
                getTeamMsgReads: 29,
                getTeamMsgReadAccounts: 30,
                notifyTeamMsgReads: 31,
                muteTeamAll: 32,
                getTeamMemberInvitorAccid: 33,
                syncMyTeamMembers: 126,
                syncTeams: 109,
                syncTeamMembers: 111,
                syncCreateTeam: 101,
                syncSendTeamMsg: 102,
                syncUpdateTeamMember: 119
            },
            superTeam: {
                id: 21,
                sendSuperTeamMsg: 2,
                superTeamMsg: 3,
                addSuperTeamMembers: 5,
                removeSuperTeamMembers: 6,
                leaveSuperTeam: 7,
                updateSuperTeam: 8,
                getSuperTeam: 9,
                getSuperTeams: 12,
                updateInfoInSuperTeam: 10,
                getMySuperTeamMembers: 11,
                getSuperTeamMembers: 13,
                getSuperTeamHistoryMsgs: 14,
                getSuperTeamMembersByJoinTime: 15,
                syncMySuperTeamMembers: 111,
                syncSuperTeams: 109,
                syncSuperTeamMembers: 113,
                syncCreateSuperTeam: 101,
                syncSendSuperTeamMsg: 102,
                syncUpdateSuperTeamMember: 110
            },
            friend: {
                id: 12,
                friendRequest: 1,
                syncFriendRequest: 101,
                deleteFriend: 2,
                syncDeleteFriend: 102,
                updateFriend: 3,
                syncUpdateFriend: 103,
                getFriends: 4
            },
            chatroom: {
                id: 13,
                getChatroomAddress: 1
            },
            filter: {
                id: 101,
                sendFilterMsg: 1,
                filterMsg: 2,
                filterSysMsg: 3,
                sendFilterCustomSysMsg: 7
            },
            eventService: {
                id: 14,
                publishEvent: 1,
                pushEvent: 2,
                subscribeEvent: 3,
                unSubscribeEventsByAccounts: 4,
                unSubscribeEventsByType: 5,
                querySubscribeEventsByAccounts: 6,
                querySubscribeEventsByType: 7,
                pushEvents: 9
            }
        })
          , o = r.merge({}, s.cmdConfig, {
            login: {
                sid: i.auth.id,
                cid: i.auth.login,
                params: [{
                    type: "Property",
                    name: "login"
                }]
            },
            logout: {
                sid: i.auth.id,
                cid: i.auth.logout
            },
            kick: {
                sid: i.auth.id,
                cid: i.auth.kick,
                params: [{
                    type: "StrArray",
                    name: "deviceIds"
                }]
            },
            updatePushToken: {
                sid: i.user.id,
                cid: i.user.updatePushToken,
                params: [{
                    type: "String",
                    name: "tokenName"
                }, {
                    type: "String",
                    name: "token"
                }, {
                    type: "int",
                    name: "pushkit"
                }]
            },
            appBackground: {
                sid: i.user.id,
                cid: i.user.appBackground,
                params: [{
                    type: "bool",
                    name: "isBackground"
                }, {
                    type: "Int",
                    name: "badge"
                }]
            },
            markInBlacklist: {
                sid: i.user.id,
                cid: i.user.markInBlacklist,
                params: [{
                    type: "String",
                    name: "account"
                }, {
                    type: "bool",
                    name: "isAdd"
                }]
            },
            getBlacklist: {
                sid: i.user.id,
                cid: i.user.getBlacklist,
                params: [{
                    type: "long",
                    name: "time"
                }]
            },
            markInMutelist: {
                sid: i.user.id,
                cid: i.user.markInMutelist,
                params: [{
                    type: "String",
                    name: "account"
                }, {
                    type: "bool",
                    name: "isAdd"
                }]
            },
            getMutelist: {
                sid: i.user.id,
                cid: i.user.getMutelist,
                params: [{
                    type: "long",
                    name: "time"
                }]
            },
            getRelations: {
                sid: i.user.id,
                cid: i.user.getRelations,
                params: [{
                    type: "long",
                    name: "timetag"
                }]
            },
            getUsers: {
                sid: i.user.id,
                cid: i.user.getUsers,
                params: [{
                    type: "StrArray",
                    name: "accounts"
                }]
            },
            updateMyInfo: {
                sid: i.user.id,
                cid: i.user.updateMyInfo,
                params: [{
                    type: "Property",
                    name: "user"
                }]
            },
            updateDonnop: {
                sid: i.user.id,
                cid: i.user.updateDonnop,
                params: [{
                    type: "Property",
                    name: "donnop"
                }]
            },
            markRead: {
                sid: i.notify.id,
                cid: i.notify.markRead,
                params: [{
                    type: "long",
                    name: "id"
                }, {
                    type: "ph",
                    name: "ph"
                }]
            },
            batchMarkRead: {
                sid: i.notify.id,
                cid: i.notify.batchMarkRead,
                params: [{
                    type: "byte",
                    name: "sid"
                }, {
                    type: "byte",
                    name: "cid"
                }, {
                    type: "LongArray",
                    name: "ids"
                }]
            },
            sync: {
                sid: i.sync.id,
                cid: i.sync.sync,
                params: [{
                    type: "Property",
                    name: "sync"
                }]
            },
            syncTeamMembers: {
                sid: i.sync.id,
                cid: i.sync.syncTeamMembers,
                params: [{
                    type: "LongLongMap",
                    name: "sync"
                }]
            },
            syncSuperTeamMembers: {
                sid: i.sync.id,
                cid: i.sync.syncSuperTeamMembers,
                params: [{
                    type: "LongLongMap",
                    name: "sync"
                }]
            },
            sendMsg: {
                sid: i.msg.id,
                cid: i.msg.sendMsg,
                params: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            getHistoryMsgs: {
                sid: i.msg.id,
                cid: i.msg.getHistoryMsgs,
                params: [{
                    type: "String",
                    name: "to"
                }, {
                    type: "long",
                    name: "beginTime"
                }, {
                    type: "long",
                    name: "endTime"
                }, {
                    type: "long",
                    name: "lastMsgId"
                }, {
                    type: "int",
                    name: "limit"
                }, {
                    type: "bool",
                    name: "reverse"
                }, {
                    type: "LongArray",
                    name: "msgTypes"
                }]
            },
            sendCustomSysMsg: {
                sid: i.msg.id,
                cid: i.msg.sendCustomSysMsg,
                params: [{
                    type: "Property",
                    name: "sysMsg"
                }]
            },
            searchHistoryMsgs: {
                sid: i.msg.id,
                cid: i.msg.searchHistoryMsgs,
                params: [{
                    type: "String",
                    name: "to"
                }, {
                    type: "long",
                    name: "beginTime"
                }, {
                    type: "long",
                    name: "endTime"
                }, {
                    type: "String",
                    name: "keyword"
                }, {
                    type: "int",
                    name: "limit"
                }, {
                    type: "bool",
                    name: "reverse"
                }]
            },
            getSessions: {
                sid: i.msg.id,
                cid: i.msg.getSessions,
                params: [{
                    type: "long",
                    name: "time"
                }]
            },
            deleteSessions: {
                sid: i.msg.id,
                cid: i.msg.deleteSessions,
                params: [{
                    type: "StrArray",
                    name: "sessions"
                }]
            },
            sendMsgReceipt: {
                sid: i.msg.id,
                cid: i.msg.sendMsgReceipt,
                params: [{
                    type: "Property",
                    name: "msgReceipt"
                }]
            },
            deleteMsg: {
                sid: i.msg.id,
                cid: i.msg.deleteMsg,
                params: [{
                    type: "Property",
                    name: "sysMsg"
                }]
            },
            markSessionAck: {
                sid: i.msg.id,
                cid: i.msg.markSessionAck,
                params: [{
                    type: "byte",
                    name: "scene"
                }, {
                    type: "String",
                    name: "to"
                }, {
                    type: "long",
                    name: "timetag"
                }]
            },
            clearServerHistoryMsgs: {
                sid: i.msg.id,
                cid: i.msg.clearServerHistoryMsgs,
                params: [{
                    type: "Property",
                    name: "clearMsgsParams"
                }]
            },
            sendSuperTeamMsg: {
                sid: i.superTeam.id,
                cid: i.superTeam.sendSuperTeamMsg,
                params: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            addSuperTeamMembers: {
                sid: i.superTeam.id,
                cid: i.superTeam.addSuperTeamMembers,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "StrArray",
                    name: "accounts"
                }]
            },
            removeSuperTeamMembers: {
                sid: i.superTeam.id,
                cid: i.superTeam.removeSuperTeamMembers,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "StrArray",
                    name: "accounts"
                }]
            },
            leaveSuperTeam: {
                sid: i.superTeam.id,
                cid: i.superTeam.leaveSuperTeam,
                params: [{
                    type: "long",
                    name: "teamId"
                }]
            },
            updateSuperTeam: {
                sid: i.superTeam.id,
                cid: i.superTeam.updateSuperTeam,
                params: [{
                    type: "Property",
                    name: "team"
                }]
            },
            getSuperTeam: {
                sid: i.superTeam.id,
                cid: i.superTeam.getSuperTeam,
                params: [{
                    type: "long",
                    name: "teamId"
                }]
            },
            getSuperTeams: {
                sid: i.superTeam.id,
                cid: i.superTeam.getSuperTeams,
                params: [{
                    type: "long",
                    name: "timetag"
                }]
            },
            getSuperTeamMembers: {
                sid: i.superTeam.id,
                cid: i.superTeam.getSuperTeamMembers,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "long",
                    name: "timetag"
                }]
            },
            updateInfoInSuperTeam: {
                sid: i.superTeam.id,
                cid: i.superTeam.updateInfoInSuperTeam,
                params: [{
                    type: "Property",
                    name: "superTeamMember"
                }]
            },
            getSuperTeamHistoryMsgs: {
                sid: i.superTeam.id,
                cid: i.superTeam.getSuperTeamHistoryMsgs,
                params: [{
                    type: "long",
                    name: "to"
                }, {
                    type: "long",
                    name: "beginTime"
                }, {
                    type: "long",
                    name: "endTime"
                }, {
                    type: "long",
                    name: "lastMsgId"
                }, {
                    type: "int",
                    name: "limit"
                }, {
                    type: "bool",
                    name: "reverse"
                }, {
                    type: "LongArray",
                    name: "msgTypes"
                }]
            },
            getSuperTeamMembersByJoinTime: {
                sid: i.superTeam.id,
                cid: i.superTeam.getSuperTeamMembersByJoinTime,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "long",
                    name: "joinTime"
                }, {
                    type: "int",
                    name: "limit"
                }, {
                    type: "bool",
                    name: "reverse"
                }]
            },
            getMySuperTeamMembers: {
                sid: i.superTeam.id,
                cid: i.superTeam.getMySuperTeamMembers,
                params: [{
                    type: "LongArray",
                    name: "teamIds"
                }]
            },
            createTeam: {
                sid: i.team.id,
                cid: i.team.createTeam,
                params: [{
                    type: "Property",
                    name: "team"
                }, {
                    type: "StrArray",
                    name: "accounts"
                }, {
                    type: "String",
                    name: "ps"
                }]
            },
            sendTeamMsg: {
                sid: i.team.id,
                cid: i.team.sendTeamMsg,
                params: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            addTeamMembers: {
                sid: i.team.id,
                cid: i.team.addTeamMembers,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "StrArray",
                    name: "accounts"
                }, {
                    type: "String",
                    name: "ps"
                }, {
                    type: "String",
                    name: "attach"
                }]
            },
            removeTeamMembers: {
                sid: i.team.id,
                cid: i.team.removeTeamMembers,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "StrArray",
                    name: "accounts"
                }]
            },
            updateTeam: {
                sid: i.team.id,
                cid: i.team.updateTeam,
                params: [{
                    type: "Property",
                    name: "team"
                }]
            },
            leaveTeam: {
                sid: i.team.id,
                cid: i.team.leaveTeam,
                params: [{
                    type: "long",
                    name: "teamId"
                }]
            },
            getTeam: {
                sid: i.team.id,
                cid: i.team.getTeam,
                params: [{
                    type: "long",
                    name: "teamId"
                }]
            },
            getTeams: {
                sid: i.team.id,
                cid: i.team.getTeams,
                params: [{
                    type: "long",
                    name: "timetag"
                }]
            },
            getTeamMembers: {
                sid: i.team.id,
                cid: i.team.getTeamMembers,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "long",
                    name: "timetag"
                }]
            },
            dismissTeam: {
                sid: i.team.id,
                cid: i.team.dismissTeam,
                params: [{
                    type: "long",
                    name: "teamId"
                }]
            },
            applyTeam: {
                sid: i.team.id,
                cid: i.team.applyTeam,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "String",
                    name: "ps"
                }]
            },
            passTeamApply: {
                sid: i.team.id,
                cid: i.team.passTeamApply,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "String",
                    name: "from"
                }]
            },
            rejectTeamApply: {
                sid: i.team.id,
                cid: i.team.rejectTeamApply,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "String",
                    name: "from"
                }, {
                    type: "String",
                    name: "ps"
                }]
            },
            addTeamManagers: {
                sid: i.team.id,
                cid: i.team.addTeamManagers,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "StrArray",
                    name: "accounts"
                }]
            },
            removeTeamManagers: {
                sid: i.team.id,
                cid: i.team.removeTeamManagers,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "StrArray",
                    name: "accounts"
                }]
            },
            transferTeam: {
                sid: i.team.id,
                cid: i.team.transferTeam,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "String",
                    name: "account"
                }, {
                    type: "bool",
                    name: "leave"
                }]
            },
            updateInfoInTeam: {
                sid: i.team.id,
                cid: i.team.updateInfoInTeam,
                params: [{
                    type: "Property",
                    name: "teamMember"
                }]
            },
            updateNickInTeam: {
                sid: i.team.id,
                cid: i.team.updateNickInTeam,
                params: [{
                    type: "Property",
                    name: "teamMember"
                }]
            },
            acceptTeamInvite: {
                sid: i.team.id,
                cid: i.team.acceptTeamInvite,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "String",
                    name: "from"
                }]
            },
            rejectTeamInvite: {
                sid: i.team.id,
                cid: i.team.rejectTeamInvite,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "String",
                    name: "from"
                }, {
                    type: "String",
                    name: "ps"
                }]
            },
            getTeamHistoryMsgs: {
                sid: i.team.id,
                cid: i.team.getTeamHistoryMsgs,
                params: [{
                    type: "long",
                    name: "to"
                }, {
                    type: "long",
                    name: "beginTime"
                }, {
                    type: "long",
                    name: "endTime"
                }, {
                    type: "long",
                    name: "lastMsgId"
                }, {
                    type: "int",
                    name: "limit"
                }, {
                    type: "bool",
                    name: "reverse"
                }, {
                    type: "LongArray",
                    name: "msgTypes"
                }]
            },
            searchTeamHistoryMsgs: {
                sid: i.team.id,
                cid: i.team.searchTeamHistoryMsgs,
                params: [{
                    type: "long",
                    name: "to"
                }, {
                    type: "long",
                    name: "beginTime"
                }, {
                    type: "long",
                    name: "endTime"
                }, {
                    type: "String",
                    name: "keyword"
                }, {
                    type: "int",
                    name: "limit"
                }, {
                    type: "bool",
                    name: "reverse"
                }]
            },
            updateMuteStateInTeam: {
                sid: i.team.id,
                cid: i.team.updateMuteStateInTeam,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "String",
                    name: "account"
                }, {
                    type: "int",
                    name: "mute"
                }]
            },
            getMyTeamMembers: {
                sid: i.team.id,
                cid: i.team.getMyTeamMembers,
                params: [{
                    type: "LongArray",
                    name: "teamIds"
                }]
            },
            getMutedTeamMembers: {
                sid: i.team.id,
                cid: i.team.getMutedTeamMembers,
                params: [{
                    type: "long",
                    name: "teamId"
                }]
            },
            sendTeamMsgReceipt: {
                sid: i.team.id,
                cid: i.team.sendTeamMsgReceipt,
                params: [{
                    type: "PropertyArray",
                    name: "teamMsgReceipts",
                    entity: "teamMsgReceipt"
                }]
            },
            getTeamMsgReads: {
                sid: i.team.id,
                cid: i.team.getTeamMsgReads,
                params: [{
                    type: "PropertyArray",
                    name: "teamMsgReceipts",
                    entity: "teamMsgReceipt"
                }]
            },
            getTeamMsgReadAccounts: {
                sid: i.team.id,
                cid: i.team.getTeamMsgReadAccounts,
                params: [{
                    type: "Property",
                    name: "teamMsgReceipt"
                }]
            },
            muteTeamAll: {
                sid: i.team.id,
                cid: i.team.muteTeamAll,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "int",
                    name: "muteType"
                }]
            },
            getTeamMemberInvitorAccid: {
                sid: i.team.id,
                cid: i.team.getTeamMemberInvitorAccid,
                params: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "StrArray",
                    name: "accounts"
                }]
            },
            friendRequest: {
                sid: i.friend.id,
                cid: i.friend.friendRequest,
                params: [{
                    type: "String",
                    name: "account"
                }, {
                    type: "byte",
                    name: "type"
                }, {
                    type: "String",
                    name: "ps"
                }]
            },
            deleteFriend: {
                sid: i.friend.id,
                cid: i.friend.deleteFriend,
                params: [{
                    type: "String",
                    name: "account"
                }, {
                    type: "Property",
                    name: "delFriendParams"
                }]
            },
            updateFriend: {
                sid: i.friend.id,
                cid: i.friend.updateFriend,
                params: [{
                    type: "Property",
                    name: "friend"
                }]
            },
            getFriends: {
                sid: i.friend.id,
                cid: i.friend.getFriends,
                params: [{
                    type: "long",
                    name: "timetag"
                }]
            },
            getChatroomAddress: {
                sid: i.chatroom.id,
                cid: i.chatroom.getChatroomAddress,
                params: [{
                    type: "long",
                    name: "chatroomId"
                }, {
                    type: "bool",
                    name: "isWeixinApp"
                }]
            },
            sendFilterMsg: {
                sid: i.filter.id,
                cid: i.filter.sendFilterMsg,
                params: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            sendFilterCustomSysMsg: {
                sid: i.filter.id,
                cid: i.filter.sendFilterCustomSysMsg,
                params: [{
                    type: "Property",
                    name: "sysMsg"
                }]
            },
            publishEvent: {
                sid: i.eventService.id,
                cid: i.eventService.publishEvent,
                params: [{
                    type: "Property",
                    name: "msgEvent"
                }]
            },
            pushEvent: {
                sid: i.eventService.id,
                cid: i.eventService.pushEvent
            },
            subscribeEvent: {
                sid: i.eventService.id,
                cid: i.eventService.subscribeEvent,
                params: [{
                    type: "Property",
                    name: "msgEventSubscribe"
                }, {
                    type: "StrArray",
                    name: "accounts"
                }]
            },
            unSubscribeEventsByAccounts: {
                sid: i.eventService.id,
                cid: i.eventService.unSubscribeEventsByAccounts,
                params: [{
                    type: "Property",
                    name: "msgEventSubscribe"
                }, {
                    type: "StrArray",
                    name: "accounts"
                }]
            },
            unSubscribeEventsByType: {
                sid: i.eventService.id,
                cid: i.eventService.unSubscribeEventsByType,
                params: [{
                    type: "Property",
                    name: "msgEventSubscribe"
                }]
            },
            querySubscribeEventsByAccounts: {
                sid: i.eventService.id,
                cid: i.eventService.querySubscribeEventsByAccounts,
                params: [{
                    type: "Property",
                    name: "msgEventSubscribe"
                }, {
                    type: "StrArray",
                    name: "accounts"
                }]
            },
            querySubscribeEventsByType: {
                sid: i.eventService.id,
                cid: i.eventService.querySubscribeEventsByType,
                params: [{
                    type: "Property",
                    name: "msgEventSubscribe"
                }]
            },
            pushEvents: {
                sid: i.eventService.id,
                cid: i.eventService.pushEvents
            }
        })
          , a = r.merge({}, s.packetConfig, {
            "2_3": {
                service: "auth",
                cmd: "login",
                response: [{
                    type: "Property",
                    name: "loginRes"
                }, {
                    type: "PropertyArray",
                    name: "loginPorts",
                    entity: "loginPort"
                }, {
                    type: "Property",
                    name: "aosPushInfo"
                }]
            },
            "2_5": {
                service: "auth",
                cmd: "kicked",
                response: [{
                    type: "Number",
                    name: "from"
                }, {
                    type: "Number",
                    name: "reason"
                }]
            },
            "2_6": {
                service: "auth",
                cmd: "logout"
            },
            "2_7": {
                service: "auth",
                cmd: "multiPortLogin",
                response: [{
                    type: "Number",
                    name: "state"
                }, {
                    type: "PropertyArray",
                    name: "loginPorts",
                    entity: "loginPort"
                }]
            },
            "2_8": {
                service: "auth",
                cmd: "kick",
                response: [{
                    type: "StrArray",
                    name: "deviceIds"
                }]
            },
            "3_1": {
                service: "user",
                cmd: "updatePushToken"
            },
            "3_2": {
                service: "user",
                cmd: "appBackground"
            },
            "3_3": {
                service: "user",
                cmd: "markInBlacklist"
            },
            "3_103": {
                service: "user",
                cmd: "syncMarkInBlacklist",
                response: [{
                    type: "String",
                    name: "account"
                }, {
                    type: "Boolean",
                    name: "isAdd"
                }]
            },
            "3_4": {
                service: "user",
                cmd: "getBlacklist",
                response: [{
                    type: "StrArray",
                    name: "blacklist"
                }]
            },
            "3_5": {
                service: "user",
                cmd: "markInMutelist"
            },
            "3_105": {
                service: "user",
                cmd: "syncMarkInMutelist",
                response: [{
                    type: "String",
                    name: "account"
                }, {
                    type: "Boolean",
                    name: "isAdd"
                }]
            },
            "3_6": {
                service: "user",
                cmd: "getMutelist",
                response: [{
                    type: "StrArray",
                    name: "mutelist"
                }]
            },
            "3_8": {
                service: "user",
                cmd: "getRelations",
                response: [{
                    type: "PropertyArray",
                    name: "specialRelations",
                    entity: "specialRelation"
                }, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "3_7": {
                service: "user",
                cmd: "getUsers",
                response: [{
                    type: "PropertyArray",
                    name: "users",
                    entity: "user"
                }]
            },
            "3_10": {
                service: "user",
                cmd: "updateMyInfo",
                response: [{
                    type: "Number",
                    name: "timetag"
                }]
            },
            "3_15": {
                service: "user",
                cmd: "updateDonnop",
                response: [{
                    type: "Number",
                    name: "timetag"
                }]
            },
            "3_115": {
                service: "user",
                cmd: "syncUpdateDonnop",
                response: [{
                    type: "Property",
                    name: "donnop"
                }, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "3_109": {
                service: "user",
                cmd: "syncMyInfo",
                response: [{
                    type: "Property",
                    name: "user"
                }, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "3_110": {
                service: "user",
                cmd: "syncUpdateMyInfo",
                response: [{
                    type: "Property",
                    name: "user"
                }]
            },
            "4_1": {
                service: "notify"
            },
            "4_2": {
                service: "notify"
            },
            "4_3": {
                service: "notify",
                cmd: "markRead"
            },
            "4_4": {
                service: "notify",
                cmd: "syncOfflineMsgs",
                response: [{
                    type: "PropertyArray",
                    name: "msgs",
                    entity: "msg"
                }]
            },
            "4_5": {
                service: "notify",
                cmd: "batchMarkRead"
            },
            "4_6": {
                service: "notify",
                cmd: "syncOfflineSysMsgs",
                response: [{
                    type: "PropertyArray",
                    name: "sysMsgs",
                    entity: "sysMsg"
                }]
            },
            "4_8": {
                service: "notify",
                cmd: "syncOfflineNetcallMsgs",
                response: [{
                    type: "PropertyArray",
                    name: "msgs",
                    entity: "msg"
                }]
            },
            "4_9": {
                service: "notify",
                cmd: "syncRoamingMsgs",
                response: [{
                    type: "PropertyArray",
                    name: "msgs",
                    entity: "msg"
                }]
            },
            "4_17": {
                service: "notify",
                cmd: "syncSuperTeamRoamingMsgs",
                response: [{
                    type: "PropertyArray",
                    name: "msgs",
                    entity: "msg"
                }]
            },
            "4_12": {
                service: "notify",
                cmd: "syncMsgReceipts",
                response: [{
                    type: "PropertyArray",
                    name: "msgReceipts",
                    entity: "msgReceipt"
                }, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "4_13": {
                service: "notify",
                cmd: "syncDonnop",
                response: [{
                    type: "Property",
                    name: "donnop"
                }, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "4_14": {
                service: "notify",
                cmd: "syncSessionAck",
                response: [{
                    type: "StrLongMap",
                    name: "p2p"
                }, {
                    type: "LongLongMap",
                    name: "team"
                }, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "4_15": {
                service: "notify",
                cmd: "syncRobots",
                response: [{
                    type: "PropertyArray",
                    name: "robots",
                    entity: "robot"
                }]
            },
            "4_16": {
                service: "notify",
                cmd: "syncBroadcastMsgs",
                response: [{
                    type: "PropertyArray",
                    name: "broadcastMsgs",
                    entity: "broadcastMsg"
                }]
            },
            "4_100": {
                service: "notify",
                cmd: "syncOfflineFilterMsgs",
                response: [{
                    type: "PropertyArray",
                    name: "msgs",
                    entity: "msg"
                }]
            },
            "4_101": {
                service: "notify",
                cmd: "syncOfflineFilterSysMsgs",
                response: [{
                    type: "PropertyArray",
                    name: "sysMsgs",
                    entity: "sysMsg"
                }]
            },
            "5_1": {
                service: "sync",
                cmd: "syncDone",
                response: [{
                    type: "Number",
                    name: "timetag"
                }]
            },
            "5_2": {
                service: "sync",
                cmd: "syncTeamMembersDone",
                response: [{
                    type: "Number",
                    name: "timetag"
                }]
            },
            "5_3": {
                service: "sync",
                cmd: "syncSuperTeamMembersDone",
                response: [{
                    type: "Number",
                    name: "timetag"
                }]
            },
            "7_1": {
                service: "msg",
                cmd: "sendMsg",
                response: [{
                    type: "Property",
                    name: "msg"
                }],
                trivialErrorCodes: [7101]
            },
            "7_2": {
                service: "msg",
                cmd: "msg",
                response: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            "7_3": {
                service: "msg",
                cmd: "sysMsg",
                response: [{
                    type: "Property",
                    name: "sysMsg"
                }]
            },
            "7_6": {
                service: "msg",
                cmd: "getHistoryMsgs",
                response: [{
                    type: "PropertyArray",
                    name: "msgs",
                    entity: "msg"
                }]
            },
            "7_7": {
                service: "msg",
                cmd: "sendCustomSysMsg",
                trivialErrorCodes: [7101]
            },
            "7_8": {
                service: "msg",
                cmd: "searchHistoryMsgs",
                response: [{
                    type: "PropertyArray",
                    name: "msgs",
                    entity: "msg"
                }]
            },
            "7_9": {
                service: "msg",
                cmd: "deleteSessions"
            },
            "7_10": {
                service: "msg",
                cmd: "getSessions",
                response: [{
                    type: "StrArray",
                    name: "sessions"
                }]
            },
            "7_101": {
                service: "msg",
                cmd: "syncSendMsg",
                response: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            "7_11": {
                service: "msg",
                cmd: "sendMsgReceipt",
                response: [{
                    type: "Property",
                    name: "msgReceipt"
                }]
            },
            "7_12": {
                service: "msg",
                cmd: "msgReceipt",
                response: [{
                    type: "Property",
                    name: "msgReceipt"
                }]
            },
            "7_13": {
                service: "msg",
                cmd: "onDeleteMsg"
            },
            "7_14": {
                service: "msg",
                cmd: "onMsgDeleted",
                response: [{
                    type: "Property",
                    name: "sysMsg"
                }]
            },
            "7_15": {
                service: "msg",
                cmd: "onDeleteMsgOfflineRoaming",
                response: [{
                    type: "PropertyArray",
                    name: "sysMsgs",
                    entity: "sysMsg"
                }, {
                    type: "Number",
                    name: "timetag"
                }, {
                    type: "Number",
                    name: "type"
                }]
            },
            "7_16": {
                service: "msg",
                cmd: "onMarkSessionAck"
            },
            "7_17": {
                service: "msg",
                cmd: "broadcastMsg",
                response: [{
                    type: "Property",
                    name: "broadcastMsg"
                }]
            },
            "7_18": {
                service: "msg",
                cmd: "clearServerHistoryMsgs"
            },
            "7_116": {
                service: "msg",
                cmd: "syncMarkSessionAck",
                response: [{
                    type: "Number",
                    name: "scene"
                }, {
                    type: "String",
                    name: "to"
                }, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "21_2": {
                service: "superTeam",
                cmd: "sendSuperTeamMsg",
                response: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            "21_3": {
                service: "superTeam",
                cmd: "superTeamMsg",
                response: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            "21_5": {
                service: "superTeam",
                cmd: "addSuperTeamMembers",
                response: [{
                    type: "StrArray",
                    name: "abortedAccidList"
                }, {
                    type: "long",
                    name: "timetag"
                }]
            },
            "21_6": {
                service: "superTeam",
                cmd: "removeSuperTeamMembers"
            },
            "21_7": {
                service: "superTeam",
                cmd: "leaveSuperTeam"
            },
            "21_8": {
                service: "superTeam",
                cmd: "updateSuperTeam",
                response: [{
                    type: "long",
                    name: "teamId"
                }, {
                    type: "long",
                    name: "timetag"
                }]
            },
            "21_9": {
                service: "superTeam",
                cmd: "getSuperTeam",
                response: [{
                    type: "Property",
                    name: "team"
                }]
            },
            "21_12": {
                service: "superTeam",
                cmd: "getSuperTeams",
                response: [{
                    type: "PropertyArray",
                    name: "teams",
                    entity: "superTeam"
                }, {
                    type: "bool",
                    name: "isAll"
                }, {
                    type: "long",
                    name: "timetag"
                }]
            },
            "21_10": {
                service: "superTeam",
                cmd: "updateInfoInSuperTeam"
            },
            "21_13": {
                service: "superTeam",
                cmd: "getSuperTeamMembers",
                response: [{
                    type: "long",
                    name: "timetag"
                }]
            },
            "21_11": {
                service: "superTeam",
                cmd: "getMySuperTeamMembers",
                response: [{
                    type: "PropertyArray",
                    name: "members",
                    entity: "superTeamMember"
                }]
            },
            "21_14": {
                service: "superTeam",
                cmd: "getSuperTeamHistoryMsgs",
                response: [{
                    type: "PropertyArray",
                    name: "msgs",
                    entity: "msg"
                }]
            },
            "21_15": {
                service: "superTeam",
                cmd: "getSuperTeamMembersByJoinTime",
                response: [{
                    type: "PropertyArray",
                    name: "members",
                    entity: "superTeamMember"
                }]
            },
            "21_113": {
                service: "superTeam",
                cmd: "syncSuperTeamMembers",
                response: [{
                    type: "Number",
                    name: "teamId"
                }, {
                    type: "PropertyArray",
                    name: "members",
                    entity: "superTeamMember"
                }, {
                    type: "bool",
                    name: "isAll"
                }, {
                    type: "long",
                    name: "timetag"
                }]
            },
            "21_111": {
                service: "superTeam",
                cmd: "syncMySuperTeamMembers",
                response: [{
                    type: "PropertyArray",
                    name: "teamMembers",
                    entity: "superTeamMember"
                }, {
                    type: "long",
                    name: "timetag"
                }]
            },
            "21_109": {
                service: "superTeam",
                cmd: "syncSuperTeams",
                response: [{
                    type: "PropertyArray",
                    name: "teams",
                    entity: "superTeam"
                }, {
                    type: "bool",
                    name: "isAll"
                }, {
                    type: "long",
                    name: "timetag"
                }]
            },
            "21_101": {
                service: "superTeam",
                cmd: "syncCreateSuperTeam",
                response: [{
                    type: "Property",
                    name: "team"
                }]
            },
            "21_102": {
                service: "superTeam",
                cmd: "syncSendSuperTeamMsg",
                response: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            "21_110": {
                service: "superTeam",
                cmd: "syncUpdateSuperTeamMember",
                response: [{
                    type: "Property",
                    name: "teamMember",
                    entity: "superTeamMember"
                }]
            },
            "8_1": {
                service: "team",
                cmd: "createTeam",
                response: [{
                    type: "Property",
                    name: "team"
                }, {
                    type: "StrArray",
                    name: "abortedAccidList"
                }]
            },
            "8_2": {
                service: "team",
                cmd: "sendTeamMsg",
                response: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            "8_3": {
                service: "team",
                cmd: "teamMsg",
                response: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            "8_4": {
                service: "team",
                cmd: "teamMsgs",
                response: [{
                    type: "PropertyArray",
                    name: "msgs",
                    entity: "msg"
                }]
            },
            "8_5": {
                service: "team",
                cmd: "addTeamMembers",
                response: [{
                    type: "long",
                    name: "time"
                }, {
                    type: "StrArray",
                    name: "abortedAccidList"
                }]
            },
            "8_6": {
                service: "team",
                cmd: "removeTeamMembers"
            },
            "8_7": {
                service: "team",
                cmd: "updateTeam",
                response: [{
                    type: "Number",
                    name: "id"
                }, {
                    type: "Number",
                    name: "time"
                }]
            },
            "8_8": {
                service: "team",
                cmd: "leaveTeam"
            },
            "8_9": {
                service: "team",
                cmd: "getTeam",
                response: [{
                    type: "Property",
                    name: "team"
                }]
            },
            "8_10": {
                service: "team",
                cmd: "getTeams",
                response: [{
                    type: "PropertyArray",
                    name: "teams",
                    entity: "team"
                }, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "8_11": {
                service: "team",
                cmd: "getTeamMembers",
                response: [{
                    type: "Number",
                    name: "teamId"
                }, {
                    type: "PropertyArray",
                    name: "members",
                    entity: "teamMember"
                }, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "8_12": {
                service: "team",
                cmd: "dismissTeam"
            },
            "8_13": {
                service: "team",
                cmd: "applyTeam",
                response: [{
                    type: "Property",
                    name: "team"
                }]
            },
            "8_14": {
                service: "team",
                cmd: "passTeamApply"
            },
            "8_15": {
                service: "team",
                cmd: "rejectTeamApply"
            },
            "8_16": {
                service: "team",
                cmd: "addTeamManagers"
            },
            "8_17": {
                service: "team",
                cmd: "removeTeamManagers"
            },
            "8_18": {
                service: "team",
                cmd: "transferTeam"
            },
            "8_19": {
                service: "team",
                cmd: "updateInfoInTeam"
            },
            "8_20": {
                service: "team",
                cmd: "updateNickInTeam"
            },
            "8_21": {
                service: "team",
                cmd: "acceptTeamInvite",
                response: [{
                    type: "Property",
                    name: "team"
                }]
            },
            "8_22": {
                service: "team",
                cmd: "rejectTeamInvite"
            },
            "8_23": {
                service: "team",
                cmd: "getTeamHistoryMsgs",
                response: [{
                    type: "PropertyArray",
                    name: "msgs",
                    entity: "msg"
                }]
            },
            "8_24": {
                service: "team",
                cmd: "searchTeamHistoryMsgs",
                response: [{
                    type: "PropertyArray",
                    name: "msgs",
                    entity: "msg"
                }]
            },
            "8_25": {
                service: "team",
                cmd: "updateMuteStateInTeam"
            },
            "8_26": {
                service: "team",
                cmd: "getMyTeamMembers",
                response: [{
                    type: "PropertyArray",
                    name: "teamMembers",
                    entity: "teamMember"
                }]
            },
            "8_27": {
                service: "team",
                cmd: "getMutedTeamMembers",
                response: [{
                    type: "Number",
                    name: "teamId"
                }, {
                    type: "PropertyArray",
                    name: "teamMembers",
                    entity: "teamMember"
                }]
            },
            "8_28": {
                service: "team",
                cmd: "sendTeamMsgReceipt",
                response: [{
                    type: "PropertyArray",
                    name: "teamMsgReceipts",
                    entity: "teamMsgReceipt"
                }]
            },
            "8_29": {
                service: "team",
                cmd: "getTeamMsgReads",
                response: [{
                    type: "PropertyArray",
                    name: "teamMsgReceipts",
                    entity: "teamMsgReceipt"
                }]
            },
            "8_30": {
                service: "team",
                cmd: "getTeamMsgReadAccounts",
                response: [{
                    type: "String",
                    name: "idClient"
                }, {
                    type: "StrArray",
                    name: "readAccounts"
                }, {
                    type: "StrArray",
                    name: "unreadAccounts"
                }]
            },
            "8_31": {
                service: "team",
                cmd: "notifyTeamMsgReads",
                response: [{
                    type: "PropertyArray",
                    name: "teamMsgReceipts",
                    entity: "teamMsgReceipt"
                }]
            },
            "8_32": {
                service: "team",
                cmd: "muteTeamAll",
                response: []
            },
            "8_33": {
                service: "team",
                cmd: "getTeamMemberInvitorAccid",
                response: [{
                    type: "object",
                    name: "accountsMap"
                }]
            },
            "8_126": {
                service: "team",
                cmd: "syncMyTeamMembers",
                response: [{
                    type: "PropertyArray",
                    name: "teamMembers",
                    entity: "teamMember"
                }, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "8_109": {
                service: "team",
                cmd: "syncTeams",
                response: [{
                    type: "Number",
                    name: "timetag"
                }, {
                    type: "PropertyArray",
                    name: "teams",
                    entity: "team"
                }]
            },
            "8_111": {
                service: "team",
                cmd: "syncTeamMembers",
                response: [{
                    type: "Number",
                    name: "teamId"
                }, {
                    type: "PropertyArray",
                    name: "members",
                    entity: "teamMember"
                }, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "8_101": {
                service: "team",
                cmd: "syncCreateTeam",
                response: [{
                    type: "Property",
                    name: "team"
                }]
            },
            "8_102": {
                service: "team",
                cmd: "syncSendTeamMsg",
                response: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            "8_119": {
                service: "team",
                cmd: "syncUpdateTeamMember",
                response: [{
                    type: "Property",
                    name: "teamMember"
                }]
            },
            "12_1": {
                service: "friend",
                cmd: "friendRequest"
            },
            "12_101": {
                service: "friend",
                cmd: "syncFriendRequest",
                response: [{
                    type: "String",
                    name: "account"
                }, {
                    type: "Number",
                    name: "type"
                }, {
                    type: "String",
                    name: "ps"
                }]
            },
            "12_2": {
                service: "friend",
                cmd: "deleteFriend"
            },
            "12_102": {
                service: "friend",
                cmd: "syncDeleteFriend",
                response: [{
                    type: "String",
                    name: "account"
                }]
            },
            "12_3": {
                service: "friend",
                cmd: "updateFriend"
            },
            "12_103": {
                service: "friend",
                cmd: "syncUpdateFriend",
                response: [{
                    type: "Property",
                    name: "friend"
                }]
            },
            "12_4": {
                service: "friend",
                cmd: "getFriends",
                response: [{
                    type: "PropertyArray",
                    name: "friends",
                    entity: "friend"
                }, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "12_5": {
                service: "friend",
                cmd: "syncFriends",
                response: [{
                    type: "PropertyArray",
                    name: "friends",
                    entity: "friend"
                }, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "12_6": {
                service: "friend",
                cmd: "syncFriendUsers",
                response: [{
                    type: "PropertyArray",
                    name: "users",
                    entity: "user"
                }, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "13_1": {
                service: "chatroom",
                cmd: "getChatroomAddress",
                response: [{
                    type: "StrArray",
                    name: "address"
                }]
            },
            "14_1": {
                service: "eventService",
                cmd: "publishEvent",
                response: [{
                    type: "Property",
                    name: "msgEvent"
                }]
            },
            "14_2": {
                service: "eventService",
                cmd: "pushEvent",
                response: [{
                    type: "Property",
                    name: "msgEvent"
                }]
            },
            "14_3": {
                service: "eventService",
                cmd: "subscribeEvent",
                response: [{
                    type: "StrArray",
                    name: "accounts"
                }]
            },
            "14_4": {
                service: "eventService",
                cmd: "unSubscribeEventsByAccounts",
                response: [{
                    type: "StrArray",
                    name: "accounts"
                }]
            },
            "14_5": {
                service: "eventService",
                cmd: "unSubscribeEventsByType"
            },
            "14_6": {
                service: "eventService",
                cmd: "querySubscribeEventsByAccounts",
                response: [{
                    type: "PropertyArray",
                    name: "msgEventSubscribes",
                    entity: "msgEventSubscribe"
                }]
            },
            "14_7": {
                service: "eventService",
                cmd: "querySubscribeEventsByType",
                response: [{
                    type: "PropertyArray",
                    name: "msgEventSubscribes",
                    entity: "msgEventSubscribe"
                }]
            },
            "14_9": {
                service: "eventService",
                cmd: "pushEvents",
                response: [{
                    type: "PropertyArray",
                    name: "msgEvents",
                    entity: "msgEvent"
                }]
            },
            "101_1": {
                service: "filter",
                cmd: "sendFilterMsg",
                response: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            "101_2": {
                service: "filter",
                cmd: "filterMsg",
                response: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            "101_3": {
                service: "filter",
                cmd: "filterSysMsg",
                response: [{
                    type: "Property",
                    name: "sysMsg"
                }]
            },
            "101_7": {
                service: "filter",
                cmd: "sendFilterCustomSysMsg"
            }
        });
        e.exports = {
            idMap: i,
            cmdConfig: o,
            packetConfig: a
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0).notundef;
        function s(e) {
            r(e.shouldPushNotificationWhenPCOnline) && (this.open = e.shouldPushNotificationWhenPCOnline ? 2 : 1)
        }
        s.getDefaultConfig = function() {
            return {
                shouldPushNotificationWhenPCOnline: !0
            }
        }
        ,
        s.reverse = function(e) {
            return {
                shouldPushNotificationWhenPCOnline: 1 != +e.open
            }
        }
        ,
        e.exports = s
    }
    , function(e, t) {
        function n(e) {
            e = e || {},
            this.ms = e.min || 100,
            this.max = e.max || 1e4,
            this.factor = e.factor || 2,
            this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0,
            this.attempts = 0
        }
        e.exports = n,
        n.prototype.duration = function() {
            var e = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
                var t = Math.random()
                  , n = Math.floor(t * this.jitter * e);
                e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
            }
            return 0 | Math.min(e, this.max)
        }
        ,
        n.prototype.reset = function() {
            this.attempts = 0
        }
        ,
        n.prototype.setMin = function(e) {
            this.ms = e
        }
        ,
        n.prototype.setMax = function(e) {
            this.max = e
        }
        ,
        n.prototype.setJitter = function(e) {
            this.jitter = e
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = r.notundef
          , i = r.fillPropertyWithDefault
          , o = (Object.keys,
        {})
          , a = {}
          , c = {}
          , u = []
          , m = {
            normal: 0,
            advanced: 1
        }
          , l = {
            0: "normal",
            1: "advanced"
        };
        function d(e) {
            r.verifyOptions(e, "action", "superTeam::SuperTeam"),
            r.verifyOptions(e, "teamId", "superTeam::SuperTeam"),
            s(e.teamId) && (this.teamId = e.teamId),
            s(e.type) && (this.type = m[e.type]),
            s(e.avatar) && (this.avatar = "" + e.avatar),
            s(e.name) && (this.name = "" + e.name),
            s(e.intro) && (this.intro = "" + e.intro),
            s(e.announcement) && (this.announcement = "" + e.announcement),
            s(e.custom) && (this.custom = "" + e.custom),
            u.forEach(this.setMode.bind(this, e))
        }
        d.prototype.setMode = function(e, t) {
            s(e[t += "Mode"]) && (r.verifyParamValid(t, e[t], c[t], "Superteam::Team"),
            this[t] = o[t][e[t]])
        }
        ,
        d.reverse = function(e, t) {
            var n = r.copy(e);
            if (s(n.teamId) && (n.teamId = "" + n.teamId),
            s(n.type) && (n.type = l[n.type]),
            s(n.level) && (n.level = +n.level),
            s(n.valid) && (n.valid = 1 == +n.valid),
            s(n.memberNum) && (n.memberNum = +n.memberNum),
            s(n.memberUpdateTime) && (n.memberUpdateTime = +n.memberUpdateTime),
            s(n.createTime) && (n.createTime = +n.createTime),
            s(n.updateTime) && (n.updateTime = +n.updateTime),
            s(n.validToCurrentUser) && (n.validToCurrentUser = "1" === n.validToCurrentUser),
            s(n.mute) && (n.mute = "1" === n.mute),
            s(n.muteType))
                switch (n.muteType) {
                case "0":
                    n.mute = !1,
                    n.muteType = "none";
                    break;
                case "1":
                    n.mute = !0,
                    n.muteType = "normal";
                    break;
                case "3":
                    n.mute = !0,
                    n.muteType = "all"
                }
            else
                s(n.mute) && (1 === n.mute ? (n.mute = !0,
                n.muteType = "normal") : (n.mute = !1,
                n.muteType = "none"));
            return u.forEach(function(e, t) {
                s(e[t += "Mode"]) && (e[t] = a[t][e[t]])
            }
            .bind(null, n)),
            delete n.bits,
            t || d.fillProperties(n),
            n
        }
        ,
        d.fillProperties = function(e) {
            return i(e, "avatar", "")
        }
        ,
        e.exports = d
    }
    , function(e, t, n) {
        "use strict";
        var r = {
            set: function(e, t, n) {
                r[e] = t,
                n && (n.support = t)
            }
        };
        e.exports = r
    }
    , function(e, t) {
        var n, r, s = e.exports = {};
        function i() {
            throw new Error("setTimeout has not been defined")
        }
        function o() {
            throw new Error("clearTimeout has not been defined")
        }
        function a(e) {
            if (n === setTimeout)
                return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout)
                return n = setTimeout,
                setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (e) {
                r = o
            }
        }();
        var c, u = [], m = !1, l = -1;
        function d() {
            m && c && (m = !1,
            c.length ? u = c.concat(u) : l = -1,
            u.length && p())
        }
        function p() {
            if (!m) {
                var e = a(d);
                m = !0;
                for (var t = u.length; t; ) {
                    for (c = u,
                    u = []; ++l < t; )
                        c && c[l].run();
                    l = -1,
                    t = u.length
                }
                c = null,
                m = !1,
                function(e) {
                    if (r === clearTimeout)
                        return clearTimeout(e);
                    if ((r === o || !r) && clearTimeout)
                        return r = clearTimeout,
                        clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function f(e, t) {
            this.fun = e,
            this.array = t
        }
        function g() {}
        s.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            u.push(new f(e,t)),
            1 !== u.length || m || a(p)
        }
        ,
        f.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        s.title = "browser",
        s.browser = !0,
        s.env = {},
        s.argv = [],
        s.version = "",
        s.versions = {},
        s.on = g,
        s.addListener = g,
        s.once = g,
        s.off = g,
        s.removeListener = g,
        s.removeAllListeners = g,
        s.emit = g,
        s.prependListener = g,
        s.prependOnceListener = g,
        s.listeners = function(e) {
            return []
        }
        ,
        s.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        s.cwd = function() {
            return "/"
        }
        ,
        s.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        s.umask = function() {
            return 0
        }
    }
    , function(e, t, n) {
        (function(t, n) {
            /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
            var r;
            r = function() {
                "use strict";
                function e(e) {
                    return "function" == typeof e
                }
                var r = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }
                  , s = 0
                  , i = void 0
                  , o = void 0
                  , a = function(e, t) {
                    f[s] = e,
                    f[s + 1] = t,
                    2 === (s += 2) && (o ? o(g) : T())
                };
                var c = "undefined" != typeof window ? window : void 0
                  , u = c || {}
                  , m = u.MutationObserver || u.WebKitMutationObserver
                  , l = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t)
                  , d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
                function p() {
                    var e = setTimeout;
                    return function() {
                        return e(g, 1)
                    }
                }
                var f = new Array(1e3);
                function g() {
                    for (var e = 0; e < s; e += 2) {
                        (0,
                        f[e])(f[e + 1]),
                        f[e] = void 0,
                        f[e + 1] = void 0
                    }
                    s = 0
                }
                var h, y, v, b, T = void 0;
                function M(e, t) {
                    var n = this
                      , r = new this.constructor(C);
                    void 0 === r[k] && L(r);
                    var s = n._state;
                    if (s) {
                        var i = arguments[s - 1];
                        a(function() {
                            return F(s, r, i, n._result)
                        })
                    } else
                        j(n, r, e, t);
                    return r
                }
                function S(e) {
                    if (e && "object" == typeof e && e.constructor === this)
                        return e;
                    var t = new this(C);
                    return _(t, e),
                    t
                }
                l ? T = function() {
                    return t.nextTick(g)
                }
                : m ? (y = 0,
                v = new m(g),
                b = document.createTextNode(""),
                v.observe(b, {
                    characterData: !0
                }),
                T = function() {
                    b.data = y = ++y % 2
                }
                ) : d ? ((h = new MessageChannel).port1.onmessage = g,
                T = function() {
                    return h.port2.postMessage(0)
                }
                ) : T = void 0 === c ? function() {
                    try {
                        var e = Function("return this")().require("vertx");
                        return void 0 !== (i = e.runOnLoop || e.runOnContext) ? function() {
                            i(g)
                        }
                        : p()
                    } catch (e) {
                        return p()
                    }
                }() : p();
                var k = Math.random().toString(36).substring(2);
                function C() {}
                var I = void 0
                  , P = 1
                  , O = 2
                  , x = {
                    error: null
                };
                function w(e) {
                    try {
                        return e.then
                    } catch (e) {
                        return x.error = e,
                        x
                    }
                }
                function A(t, n, r) {
                    n.constructor === t.constructor && r === M && n.constructor.resolve === S ? function(e, t) {
                        t._state === P ? U(e, t._result) : t._state === O ? R(e, t._result) : j(t, void 0, function(t) {
                            return _(e, t)
                        }, function(t) {
                            return R(e, t)
                        })
                    }(t, n) : r === x ? (R(t, x.error),
                    x.error = null) : void 0 === r ? U(t, n) : e(r) ? function(e, t, n) {
                        a(function(e) {
                            var r = !1
                              , s = function(e, t, n, r) {
                                try {
                                    e.call(t, n, r)
                                } catch (e) {
                                    return e
                                }
                            }(n, t, function(n) {
                                r || (r = !0,
                                t !== n ? _(e, n) : U(e, n))
                            }, function(t) {
                                r || (r = !0,
                                R(e, t))
                            }, e._label);
                            !r && s && (r = !0,
                            R(e, s))
                        }, e)
                    }(t, n, r) : U(t, n)
                }
                function _(e, t) {
                    var n, r;
                    e === t ? R(e, new TypeError("You cannot resolve a promise with itself")) : (r = typeof (n = t),
                    null === n || "object" !== r && "function" !== r ? U(e, t) : A(e, t, w(t)))
                }
                function E(e) {
                    e._onerror && e._onerror(e._result),
                    N(e)
                }
                function U(e, t) {
                    e._state === I && (e._result = t,
                    e._state = P,
                    0 !== e._subscribers.length && a(N, e))
                }
                function R(e, t) {
                    e._state === I && (e._state = O,
                    e._result = t,
                    a(E, e))
                }
                function j(e, t, n, r) {
                    var s = e._subscribers
                      , i = s.length;
                    e._onerror = null,
                    s[i] = t,
                    s[i + P] = n,
                    s[i + O] = r,
                    0 === i && e._state && a(N, e)
                }
                function N(e) {
                    var t = e._subscribers
                      , n = e._state;
                    if (0 !== t.length) {
                        for (var r = void 0, s = void 0, i = e._result, o = 0; o < t.length; o += 3)
                            r = t[o],
                            s = t[o + n],
                            r ? F(n, r, s, i) : s(i);
                        e._subscribers.length = 0
                    }
                }
                function F(t, n, r, s) {
                    var i = e(r)
                      , o = void 0
                      , a = void 0
                      , c = void 0
                      , u = void 0;
                    if (i) {
                        if ((o = function(e, t) {
                            try {
                                return e(t)
                            } catch (e) {
                                return x.error = e,
                                x
                            }
                        }(r, s)) === x ? (u = !0,
                        a = o.error,
                        o.error = null) : c = !0,
                        n === o)
                            return void R(n, new TypeError("A promises callback cannot return that same promise."))
                    } else
                        o = s,
                        c = !0;
                    n._state !== I || (i && c ? _(n, o) : u ? R(n, a) : t === P ? U(n, o) : t === O && R(n, o))
                }
                var D = 0;
                function L(e) {
                    e[k] = D++,
                    e._state = void 0,
                    e._result = void 0,
                    e._subscribers = []
                }
                var B = function() {
                    function e(e, t) {
                        this._instanceConstructor = e,
                        this.promise = new e(C),
                        this.promise[k] || L(this.promise),
                        r(t) ? (this.length = t.length,
                        this._remaining = t.length,
                        this._result = new Array(this.length),
                        0 === this.length ? U(this.promise, this._result) : (this.length = this.length || 0,
                        this._enumerate(t),
                        0 === this._remaining && U(this.promise, this._result))) : R(this.promise, new Error("Array Methods must be provided an Array"))
                    }
                    return e.prototype._enumerate = function(e) {
                        for (var t = 0; this._state === I && t < e.length; t++)
                            this._eachEntry(e[t], t)
                    }
                    ,
                    e.prototype._eachEntry = function(e, t) {
                        var n = this._instanceConstructor
                          , r = n.resolve;
                        if (r === S) {
                            var s = w(e);
                            if (s === M && e._state !== I)
                                this._settledAt(e._state, t, e._result);
                            else if ("function" != typeof s)
                                this._remaining--,
                                this._result[t] = e;
                            else if (n === q) {
                                var i = new n(C);
                                A(i, e, s),
                                this._willSettleAt(i, t)
                            } else
                                this._willSettleAt(new n(function(t) {
                                    return t(e)
                                }
                                ), t)
                        } else
                            this._willSettleAt(r(e), t)
                    }
                    ,
                    e.prototype._settledAt = function(e, t, n) {
                        var r = this.promise;
                        r._state === I && (this._remaining--,
                        e === O ? R(r, n) : this._result[t] = n),
                        0 === this._remaining && U(r, this._result)
                    }
                    ,
                    e.prototype._willSettleAt = function(e, t) {
                        var n = this;
                        j(e, void 0, function(e) {
                            return n._settledAt(P, t, e)
                        }, function(e) {
                            return n._settledAt(O, t, e)
                        })
                    }
                    ,
                    e
                }();
                var q = function() {
                    function e(t) {
                        this[k] = D++,
                        this._result = this._state = void 0,
                        this._subscribers = [],
                        C !== t && ("function" != typeof t && function() {
                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                        }(),
                        this instanceof e ? function(e, t) {
                            try {
                                t(function(t) {
                                    _(e, t)
                                }, function(t) {
                                    R(e, t)
                                })
                            } catch (t) {
                                R(e, t)
                            }
                        }(this, t) : function() {
                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                        }())
                    }
                    return e.prototype.catch = function(e) {
                        return this.then(null, e)
                    }
                    ,
                    e.prototype.finally = function(e) {
                        var t = this.constructor;
                        return this.then(function(n) {
                            return t.resolve(e()).then(function() {
                                return n
                            })
                        }, function(n) {
                            return t.resolve(e()).then(function() {
                                throw n
                            })
                        })
                    }
                    ,
                    e
                }();
                return q.prototype.then = M,
                q.all = function(e) {
                    return new B(this,e).promise
                }
                ,
                q.race = function(e) {
                    var t = this;
                    return r(e) ? new t(function(n, r) {
                        for (var s = e.length, i = 0; i < s; i++)
                            t.resolve(e[i]).then(n, r)
                    }
                    ) : new t(function(e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    }
                    )
                }
                ,
                q.resolve = S,
                q.reject = function(e) {
                    var t = new this(C);
                    return R(t, e),
                    t
                }
                ,
                q._setScheduler = function(e) {
                    o = e
                }
                ,
                q._setAsap = function(e) {
                    a = e
                }
                ,
                q._asap = a,
                q.polyfill = function() {
                    var e = void 0;
                    if (void 0 !== n)
                        e = n;
                    else if ("undefined" != typeof self)
                        e = self;
                    else
                        try {
                            e = Function("return this")()
                        } catch (e) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                    var t = e.Promise;
                    if (t) {
                        var r = null;
                        try {
                            r = Object.prototype.toString.call(t.resolve())
                        } catch (e) {}
                        if ("[object Promise]" === r && !t.cast)
                            return
                    }
                    e.Promise = q
                }
                ,
                q.Promise = q,
                q
            }
            ,
            e.exports = r()
        }
        ).call(this, n(191), n(33))
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = r.notundef
          , i = r.undef;
        function o(e) {
            s(e.name) && (this.name = "" + e.name),
            s(e.announcement) && (this.announcement = "" + e.announcement),
            s(e.broadcastUrl) && (this.broadcastUrl = "" + e.broadcastUrl),
            s(e.custom) && (this.custom = "" + e.custom),
            s(e.queuelevel) && (this.queuelevel = parseInt(e.queuelevel))
        }
        o.reverse = function(e) {
            var t = r.copy(e);
            return i(t.announcement) && (t.announcement = ""),
            i(t.broadcastUrl) && (t.broadcastUrl = ""),
            i(t.custom) && (t.custom = ""),
            s(t.createTime) && (t.createTime = +t.createTime),
            s(t.updateTime) && (t.updateTime = +t.updateTime),
            s(t.onlineMemberNum) && (t.onlineMemberNum = +t.onlineMemberNum),
            s(t.mute) && (t.mute = "1" === t.mute),
            t
        }
        ,
        e.exports = o
    }
    , function(e, t, n) {
        "use strict";
        var r = n(56);
        e.exports = function(e) {
            e.db && (r.db = e.db)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(9), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        function o(e) {
            var t = this
              , n = e.url || null;
            t.level = {
                debug: 0,
                log: 1,
                info: 2,
                warn: 3,
                error: 4
            }[e.level] || 0,
            t.logCache = [],
            t.logNum = 1,
            t.timeInterval = 5e3,
            window.onerror = function(e, n, r, s, i) {
                t.error(i)
            }
            ,
            setInterval(function() {
                t.logCache.length > 0 && n && t.postLogs(n, t.logCache)
            }, t.timeInterval)
        }
        o.prototype.debug = function() {
            this.level > 0 || (console.debug.apply(this, arguments),
            this.cacheLogs.apply(this, ["[degbug]"].concat(arguments)))
        }
        ,
        o.prototype.log = function() {
            this.level > 1 || (console.log.apply(this, arguments),
            this.cacheLogs.apply(this, ["[log]"].concat(arguments)))
        }
        ,
        o.prototype.info = function() {
            this.level > 2 || (console.info.apply(this, arguments),
            this.cacheLogs.apply(this, ["[info]"].concat(arguments)))
        }
        ,
        o.prototype.warn = function() {
            this.level > 3 || (console.warn.apply(this, arguments),
            this.cacheLogs.apply(this, ["[warn]"].concat(arguments)))
        }
        ,
        o.prototype.error = function() {
            this.level > 4 || (console.error.apply(this, arguments),
            this.cacheLogs.apply(this, ["[error]"].concat(arguments)))
        }
        ,
        o.prototype.cacheLogs = function(e, t) {
            for (var n = [], r = 0; r < t.length; r++) {
                var s = t[r];
                "object" === (void 0 === s ? "undefined" : (0,
                i.default)(s)) ? n.push(JSON.stringify(s)) : n.push(s)
            }
            var o = this.logNum++ + " " + e + " " + n.join("; ");
            this.logCache.push(o.replace("%c", ""))
        }
        ,
        o.prototype.postLogs = function(e, t) {
            var n = this
              , r = new XMLHttpRequest;
            r.onreadystatechange = function() {
                4 === r.readyState && (200 === r.status ? (console.info("LoggerPlugin::日志上报完成"),
                n.logCache = [],
                n.timeInterval = 5e3) : n.timeInterval += 5e3)
            }
            ,
            r.open("POST", e),
            r.setRequestHeader("Content-Type", "plain/text;charset=utf-8"),
            r.timeout = 360,
            r.send(t.join("\n"))
        }
        ,
        e.exports = o
    }
    , function(e, t) {
        e.exports = function() {
            for (var e = {}, t = 0; t < arguments.length; t++) {
                var r = arguments[t];
                for (var s in r)
                    n.call(r, s) && (e[s] = r[s])
            }
            return e
        }
        ;
        var n = Object.prototype.hasOwnProperty
    }
    , function(e, t, n) {
        var r = n(166);
        e.exports = function(e, t, n) {
            if (!r(t))
                throw new TypeError("iterator must be a function");
            arguments.length < 3 && (n = this);
            "[object Array]" === s.call(e) ? function(e, t, n) {
                for (var r = 0, s = e.length; r < s; r++)
                    i.call(e, r) && t.call(n, e[r], r, e)
            }(e, t, n) : "string" == typeof e ? function(e, t, n) {
                for (var r = 0, s = e.length; r < s; r++)
                    t.call(n, e.charAt(r), r, e)
            }(e, t, n) : function(e, t, n) {
                for (var r in e)
                    i.call(e, r) && t.call(n, e[r], r, e)
            }(e, t, n)
        }
        ;
        var s = Object.prototype.toString
          , i = Object.prototype.hasOwnProperty
    }
    , function(e, t) {
        (t = e.exports = function(e) {
            return e.replace(/^\s*|\s*$/g, "")
        }
        ).left = function(e) {
            return e.replace(/^\s*/, "")
        }
        ,
        t.right = function(e) {
            return e.replace(/\s*$/, "")
        }
    }
    , function(e, t, n) {
        var r = n(295)
          , s = n(294);
        e.exports = function(e) {
            if (!e)
                return {};
            var t = {};
            return s(r(e).split("\n"), function(e) {
                var n, s = e.indexOf(":"), i = r(e.slice(0, s)).toLowerCase(), o = r(e.slice(s + 1));
                void 0 === t[i] ? t[i] = o : (n = t[i],
                "[object Array]" === Object.prototype.toString.call(n) ? t[i].push(o) : t[i] = [t[i], o])
            }),
            t
        }
    }
    , function(e, t, n) {
        (function(t) {
            var n;
            n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
            e.exports = n
        }
        ).call(this, n(33))
    }
    , function(e, t, n) {
        "use strict";
        var r = n(297)
          , s = n(166)
          , i = n(296)
          , o = n(293);
        function a(e, t, n) {
            var r = e;
            return s(t) ? (n = t,
            "string" == typeof e && (r = {
                uri: e
            })) : r = o(t, {
                uri: e
            }),
            r.callback = n,
            r
        }
        function c(e, t, n) {
            return u(t = a(e, t, n))
        }
        function u(e) {
            if (void 0 === e.callback)
                throw new Error("callback argument missing");
            var t = !1
              , n = function(n, r, s) {
                t || (t = !0,
                e.callback(n, r, s))
            };
            function r(e) {
                return clearTimeout(m),
                e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))),
                e.statusCode = 0,
                n(e, y)
            }
            function s() {
                if (!a) {
                    var t;
                    clearTimeout(m),
                    t = e.useXDR && void 0 === u.status ? 200 : 1223 === u.status ? 204 : u.status;
                    var r = y
                      , s = null;
                    return 0 !== t ? (r = {
                        body: function() {
                            var e = void 0;
                            if (e = u.response ? u.response : u.responseText || function(e) {
                                try {
                                    if ("document" === e.responseType)
                                        return e.responseXML;
                                    var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                                    if ("" === e.responseType && !t)
                                        return e.responseXML
                                } catch (e) {}
                                return null
                            }(u),
                            h)
                                try {
                                    e = JSON.parse(e)
                                } catch (e) {}
                            return e
                        }(),
                        statusCode: t,
                        method: d,
                        headers: {},
                        url: l,
                        rawRequest: u
                    },
                    u.getAllResponseHeaders && (r.headers = i(u.getAllResponseHeaders()))) : s = new Error("Internal XMLHttpRequest Error"),
                    n(s, r, r.body)
                }
            }
            var o, a, u = e.xhr || null;
            u || (u = e.cors || e.useXDR ? new c.XDomainRequest : new c.XMLHttpRequest);
            var m, l = u.url = e.uri || e.url, d = u.method = e.method || "GET", p = e.body || e.data, f = u.headers = e.headers || {}, g = !!e.sync, h = !1, y = {
                body: void 0,
                headers: {},
                statusCode: 0,
                method: d,
                url: l,
                rawRequest: u
            };
            if ("json"in e && !1 !== e.json && (h = !0,
            f.accept || f.Accept || (f.Accept = "application/json"),
            "GET" !== d && "HEAD" !== d && (f["content-type"] || f["Content-Type"] || (f["Content-Type"] = "application/json"),
            p = JSON.stringify(!0 === e.json ? p : e.json))),
            u.onreadystatechange = function() {
                4 === u.readyState && setTimeout(s, 0)
            }
            ,
            u.onload = s,
            u.onerror = r,
            u.onprogress = function() {}
            ,
            u.onabort = function() {
                a = !0
            }
            ,
            u.ontimeout = r,
            u.open(d, l, !g, e.username, e.password),
            g || (u.withCredentials = !!e.withCredentials),
            !g && e.timeout > 0 && (m = setTimeout(function() {
                if (!a) {
                    a = !0,
                    u.abort("timeout");
                    var e = new Error("XMLHttpRequest timeout");
                    e.code = "ETIMEDOUT",
                    r(e)
                }
            }, e.timeout)),
            u.setRequestHeader)
                for (o in f)
                    f.hasOwnProperty(o) && u.setRequestHeader(o, f[o]);
            else if (e.headers && !function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t))
                        return !1;
                return !0
            }(e.headers))
                throw new Error("Headers cannot be set on an XDomainRequest object");
            return "responseType"in e && (u.responseType = e.responseType),
            "beforeSend"in e && "function" == typeof e.beforeSend && e.beforeSend(u),
            u.send(p || null),
            u
        }
        e.exports = c,
        c.XMLHttpRequest = r.XMLHttpRequest || function() {}
        ,
        c.XDomainRequest = "withCredentials"in new c.XMLHttpRequest ? c.XMLHttpRequest : r.XDomainRequest,
        function(e, t) {
            for (var n = 0; n < e.length; n++)
                t(e[n])
        }(["get", "put", "post", "patch", "head", "delete"], function(e) {
            c["delete" === e ? "del" : e] = function(t, n, r) {
                return (n = a(t, n, r)).method = e.toUpperCase(),
                u(n)
            }
        })
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = r.notundef
          , i = {
            addFriend: 1,
            applyFriend: 2,
            passFriendApply: 3,
            rejectFriendApply: 4
        }
          , o = {
            1: "addFriend",
            2: "applyFriend",
            3: "passFriendApply",
            4: "rejectFriendApply"
        };
        function a(e) {
            r.verifyOptions(e, "account", "friend::Friend"),
            r.verifyParamAtLeastPresentOne(e, "alias custom", "friend::Friend"),
            this.account = e.account,
            s(e.alias) && (this.alias = e.alias),
            s(e.custom) && (this.custom = e.custom)
        }
        a.reverse = function(e) {
            var t = r.filterObj(e, "account alias custom createTime updateTime serverex");
            return s(e.flag) && (t.valid = "1" === e.flag),
            s(t.createTime) && (t.createTime = +t.createTime),
            s(t.updateTime) && (t.updateTime = +t.updateTime),
            t
        }
        ,
        a.validTypes = function() {
            return Object.keys(i)
        }
        ,
        a.getByteFromType = function(e) {
            return i[e]
        }
        ,
        a.getTypeFromByte = function(e) {
            return o[e]
        }
        ,
        a.assembleFriend = function(e) {
            var t = +new Date;
            return {
                account: e,
                alias: "",
                createTime: t,
                custom: "",
                updateTime: t,
                valid: !0
            }
        }
        ,
        e.exports = a
    }
    , function(e, t, n) {
        "use strict";
        e.exports = {
            imLogin: {
                3: "clientType",
                4: "os",
                6: "sdkVersion",
                8: "appLogin",
                9: "protocolVersion",
                10: "pushTokenName",
                11: "pushToken",
                13: "deviceId",
                18: "appKey",
                19: "account",
                24: "browser",
                26: "session",
                32: "deviceInfo",
                38: "customTag",
                112: "isReactNative",
                1000: "token"
            },
            nosToken: {
                1: "objectName",
                2: "token",
                3: "bucket",
                4: "expireTime",
                7: "expireSec",
                8: "tag",
                9: "shortUrl"
            },
            audioToText: {
                2: "url"
            },
            imageOp: {
                0: "type",
                1: "stripmeta",
                2: "typeType",
                3: "blurRadius",
                4: "blurSigma",
                5: "qualityQuality",
                6: "cropX",
                7: "cropY",
                8: "cropWidth",
                9: "cropHeight",
                10: "rotateAngle",
                11: "pixelPixel",
                12: "thumbnailMode",
                13: "thumbnailWidth",
                14: "thumbnailHeight",
                15: "thumbnailAxisX",
                16: "thumbnailAxisY",
                17: "thumbnailCenterX",
                18: "thumbnailCenterY",
                19: "thumbnailEnlarge",
                20: "thumbnailToStatic",
                21: "watermarkType",
                22: "watermarkGravity",
                23: "watermarkDissolve",
                24: "watermarkDx",
                25: "watermarkDy",
                26: "watermarkImage",
                27: "watermarkText",
                28: "watermarkFont",
                29: "watermarkFontSize",
                30: "watermarkFontColor",
                31: "interlace"
            },
            robot: {
                4: "account",
                5: "nick",
                6: "avatar",
                7: "intro",
                8: "config",
                9: "valid",
                10: "createTime",
                11: "updateTime",
                12: "custid",
                13: "botid",
                14: "bindTime",
                _6_safe: "_avatar_safe"
            },
            clientAntispam: {
                1: "version",
                2: "md5",
                3: "nosurl",
                4: "thesaurus"
            },
            fileQuickTransfer: {
                1: "md5",
                2: "url",
                3: "size",
                4: "threshold",
                _2_safe: "_url_safe"
            },
            transToken: {
                1: "name",
                2: "type",
                3: "transType",
                4: "size",
                5: "extra",
                6: "body"
            },
            transInfo: {
                1: "docId",
                2: "name",
                3: "prefix",
                4: "size",
                5: "type",
                6: "state",
                7: "transType",
                8: "transSize",
                9: "pageCount",
                10: "picInfo",
                11: "extra",
                12: "flag"
            },
            nosFileUrlTag: {
                0: "safeUrl",
                1: "originUrl"
            },
            fileListParam: {
                1: "fromDocId",
                2: "limit"
            },
            avSignalTag: {
                1: "type",
                2: "channelName",
                3: "channelId",
                4: "channelCreateTime",
                5: "channelExpireTime",
                6: "creator",
                7: "ext",
                8: "channelInValid",
                10: "from",
                11: "to",
                12: "requestId",
                13: "needPush",
                14: "pushTitle",
                15: "pushContent",
                16: "pushPayload",
                17: "needBadge",
                18: "members",
                19: "attach",
                20: "attachExt",
                21: "isSave",
                22: "msgid",
                23: "uid",
                24: "time"
            },
            login: {
                1: "appKey",
                2: "account",
                3: "deviceId",
                5: "chatroomId",
                8: "appLogin",
                20: "chatroomNick",
                21: "chatroomAvatar",
                22: "chatroomCustom",
                23: "chatroomEnterCustom",
                26: "session",
                38: "isAnonymous",
                _21_safe: "_chatroomAvatar_safe"
            },
            chatroom: {
                1: "id",
                3: "name",
                4: "announcement",
                5: "broadcastUrl",
                12: "custom",
                14: "createTime",
                15: "updateTime",
                16: "queuelevel",
                100: "creator",
                101: "onlineMemberNum",
                102: "mute"
            },
            msg: {
                1: "idClient",
                2: "type",
                3: "attach",
                4: "custom",
                5: "resend",
                6: "userUpdateTime",
                7: "fromNick",
                8: "fromAvatar",
                9: "fromCustom",
                10: "yidunEnable",
                11: "antiSpamContent",
                12: "skipHistory",
                13: "body",
                14: "antiSpamBusinessId",
                15: "clientAntiSpam",
                16: "antiSpamUsingYidun",
                20: "time",
                21: "from",
                22: "chatroomId",
                23: "fromClientType",
                25: "highPriority",
                _8_safe: "_fromAvatar_safe"
            },
            chatroomMember: {
                1: "chatroomId",
                2: "account",
                3: "type",
                4: "level",
                5: "nick",
                6: "avatar",
                7: "custom",
                8: "online",
                9: "guest",
                10: "enterTime",
                12: "blacked",
                13: "gaged",
                14: "valid",
                15: "updateTime",
                16: "tempMuted",
                17: "tempMuteDuration",
                _6_safe: "_avatar_safe"
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = {
            imLogin: {
                clientType: 3,
                os: 4,
                sdkVersion: 6,
                appLogin: 8,
                protocolVersion: 9,
                pushTokenName: 10,
                pushToken: 11,
                deviceId: 13,
                appKey: 18,
                account: 19,
                browser: 24,
                session: 26,
                deviceInfo: 32,
                isReactNative: 112,
                token: 1e3,
                customTag: 38
            },
            nosToken: {
                objectName: 1,
                token: 2,
                bucket: 3,
                expireTime: 4,
                expireSec: 7,
                tag: 8,
                shortUrl: 9
            },
            audioToText: {
                url: 2
            },
            imageOp: {
                type: 0,
                stripmeta: 1,
                typeType: 2,
                blurRadius: 3,
                blurSigma: 4,
                qualityQuality: 5,
                cropX: 6,
                cropY: 7,
                cropWidth: 8,
                cropHeight: 9,
                rotateAngle: 10,
                pixelPixel: 11,
                thumbnailMode: 12,
                thumbnailWidth: 13,
                thumbnailHeight: 14,
                thumbnailAxisX: 15,
                thumbnailAxisY: 16,
                thumbnailCenterX: 17,
                thumbnailCenterY: 18,
                thumbnailEnlarge: 19,
                thumbnailToStatic: 20,
                watermarkType: 21,
                watermarkGravity: 22,
                watermarkDissolve: 23,
                watermarkDx: 24,
                watermarkDy: 25,
                watermarkImage: 26,
                watermarkText: 27,
                watermarkFont: 28,
                watermarkFontSize: 29,
                watermarkFontColor: 30,
                interlace: 31
            },
            robot: {
                account: 4,
                nick: 5,
                avatar: 6,
                intro: 7,
                config: 8,
                valid: 9,
                createTime: 10,
                updateTime: 11,
                custid: 12,
                botid: 13,
                bindTime: 14
            },
            clientAntispam: {
                version: 1,
                md5: 2,
                nosurl: 3,
                thesaurus: 4
            },
            fileQuickTransfer: {
                md5: 1,
                url: 2,
                size: 3,
                threshold: 4
            },
            transToken: {
                name: 1,
                type: 2,
                transType: 3,
                size: 4,
                extra: 5,
                body: 6
            },
            transInfo: {
                docId: 1,
                name: 2,
                prefix: 3,
                size: 4,
                type: 5,
                state: 6,
                transType: 7,
                transSize: 8,
                pageCount: 9,
                picInfo: 10,
                extra: 11,
                flag: 12
            },
            nosFileUrlTag: {
                safeUrl: 0,
                originUrl: 1
            },
            fileListParam: {
                fromDocId: 1,
                limit: 2
            },
            avSignalTag: {
                type: 1,
                channelName: 2,
                channelId: 3,
                channelCreateTime: 4,
                channelExpireTime: 5,
                creator: 6,
                ext: 7,
                channelInValid: 8,
                from: 10,
                to: 11,
                requestId: 12,
                needPush: 13,
                pushTitle: 14,
                pushContent: 15,
                pushPayload: 16,
                needBadge: 17,
                members: 18,
                attach: 19,
                attachExt: 20,
                isSave: 21,
                msgid: 22,
                uid: 23,
                time: 24
            },
            login: {
                appKey: 1,
                account: 2,
                deviceId: 3,
                chatroomId: 5,
                appLogin: 8,
                chatroomNick: 20,
                chatroomAvatar: 21,
                chatroomCustom: 22,
                chatroomEnterCustom: 23,
                session: 26,
                isAnonymous: 38
            },
            chatroom: {
                id: 1,
                name: 3,
                announcement: 4,
                broadcastUrl: 5,
                custom: 12,
                createTime: 14,
                updateTime: 15,
                queuelevel: 16,
                creator: 100,
                onlineMemberNum: 101,
                mute: 102
            },
            msg: {
                idClient: 1,
                type: 2,
                attach: 3,
                custom: 4,
                resend: 5,
                userUpdateTime: 6,
                fromNick: 7,
                fromAvatar: 8,
                fromCustom: 9,
                yidunEnable: 10,
                antiSpamContent: 11,
                skipHistory: 12,
                body: 13,
                antiSpamBusinessId: 14,
                clientAntiSpam: 15,
                antiSpamUsingYidun: 16,
                time: 20,
                from: 21,
                chatroomId: 22,
                fromClientType: 23,
                highPriority: 25
            },
            chatroomMember: {
                chatroomId: 1,
                account: 2,
                type: 3,
                level: 4,
                nick: 5,
                avatar: 6,
                custom: 7,
                online: 8,
                guest: 9,
                enterTime: 10,
                blacked: 12,
                gaged: 13,
                valid: 14,
                updateTime: 15,
                tempMuted: 16,
                tempMuteDuration: 17
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = n(82)
          , i = r.merge({}, s.idMap, {
            chatroom: {
                id: 13,
                login: 2,
                kicked: 3,
                logout: 4,
                sendMsg: 6,
                msg: 7,
                getChatroomMembers: 8,
                getHistoryMsgs: 9,
                markChatroomMember: 11,
                closeChatroom: 12,
                getChatroom: 13,
                updateChatroom: 14,
                updateMyChatroomMemberInfo: 15,
                getChatroomMembersInfo: 16,
                kickChatroomMember: 17,
                updateChatroomMemberTempMute: 19,
                queueOffer: 20,
                queuePoll: 21,
                queueList: 22,
                peak: 23,
                queueDrop: 24,
                queueInit: 25,
                queueChange: 26
            },
            user: {
                id: 3,
                syncRobot: 16
            }
        })
          , o = r.merge({}, s.cmdConfig, {
            login: {
                sid: i.chatroom.id,
                cid: i.chatroom.login,
                params: [{
                    type: "byte",
                    name: "type"
                }, {
                    type: "Property",
                    name: "login"
                }, {
                    type: "Property",
                    name: "imLogin"
                }]
            },
            logout: {
                sid: i.chatroom.id,
                cid: i.chatroom.logout
            },
            sendMsg: {
                sid: i.chatroom.id,
                cid: i.chatroom.sendMsg,
                params: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            getChatroomMembers: {
                sid: i.chatroom.id,
                cid: i.chatroom.getChatroomMembers,
                params: [{
                    type: "byte",
                    name: "type"
                }, {
                    type: "long",
                    name: "time"
                }, {
                    type: "int",
                    name: "limit"
                }]
            },
            getHistoryMsgs: {
                sid: i.chatroom.id,
                cid: i.chatroom.getHistoryMsgs,
                params: [{
                    type: "long",
                    name: "timetag"
                }, {
                    type: "int",
                    name: "limit"
                }, {
                    type: "bool",
                    name: "reverse"
                }, {
                    type: "LongArray",
                    name: "msgTypes"
                }]
            },
            markChatroomMember: {
                sid: i.chatroom.id,
                cid: i.chatroom.markChatroomMember,
                params: [{
                    type: "string",
                    name: "account"
                }, {
                    type: "int",
                    name: "type"
                }, {
                    type: "bool",
                    name: "isAdd"
                }, {
                    type: "int",
                    name: "level"
                }, {
                    type: "string",
                    name: "custom"
                }]
            },
            closeChatroom: {
                sid: i.chatroom.id,
                cid: i.chatroom.closeChatroom,
                params: [{
                    type: "string",
                    name: "custom"
                }]
            },
            getChatroom: {
                sid: i.chatroom.id,
                cid: i.chatroom.getChatroom
            },
            updateChatroom: {
                sid: i.chatroom.id,
                cid: i.chatroom.updateChatroom,
                params: [{
                    type: "Property",
                    name: "chatroom"
                }, {
                    type: "bool",
                    name: "needNotify"
                }, {
                    type: "String",
                    name: "custom"
                }]
            },
            updateMyChatroomMemberInfo: {
                sid: i.chatroom.id,
                cid: i.chatroom.updateMyChatroomMemberInfo,
                params: [{
                    type: "Property",
                    name: "chatroomMember"
                }, {
                    type: "bool",
                    name: "needNotify"
                }, {
                    type: "String",
                    name: "custom"
                }, {
                    type: "bool",
                    name: "needSave"
                }]
            },
            getChatroomMembersInfo: {
                sid: i.chatroom.id,
                cid: i.chatroom.getChatroomMembersInfo,
                params: [{
                    type: "StrArray",
                    name: "accounts"
                }]
            },
            kickChatroomMember: {
                sid: i.chatroom.id,
                cid: i.chatroom.kickChatroomMember,
                params: [{
                    type: "string",
                    name: "account"
                }, {
                    type: "string",
                    name: "custom"
                }]
            },
            updateChatroomMemberTempMute: {
                sid: i.chatroom.id,
                cid: i.chatroom.updateChatroomMemberTempMute,
                params: [{
                    type: "String",
                    name: "account"
                }, {
                    type: "long",
                    name: "duration"
                }, {
                    type: "bool",
                    name: "needNotify"
                }, {
                    type: "String",
                    name: "custom"
                }]
            },
            queueOffer: {
                sid: i.chatroom.id,
                cid: i.chatroom.queueOffer,
                params: [{
                    type: "string",
                    name: "elementKey"
                }, {
                    type: "string",
                    name: "elementValue"
                }, {
                    type: "bool",
                    name: "transient"
                }]
            },
            queuePoll: {
                sid: i.chatroom.id,
                cid: i.chatroom.queuePoll,
                params: [{
                    type: "string",
                    name: "elementKey"
                }]
            },
            queueList: {
                sid: i.chatroom.id,
                cid: i.chatroom.queueList
            },
            peak: {
                sid: i.chatroom.id,
                cid: i.chatroom.peak
            },
            queueDrop: {
                sid: i.chatroom.id,
                cid: i.chatroom.queueDrop
            },
            queueInit: {
                sid: i.chatroom.id,
                cid: i.chatroom.queueInit,
                params: [{
                    type: "int",
                    name: "limit"
                }]
            },
            queueChange: {
                sid: i.chatroom.id,
                cid: i.chatroom.queueChange,
                params: [{
                    type: "StrStrMap",
                    name: "elementMap"
                }, {
                    type: "bool",
                    name: "needNotify"
                }, {
                    type: "string",
                    name: "notifyExt"
                }]
            },
            syncRobot: {
                sid: i.user.id,
                cid: i.user.syncRobot,
                params: [{
                    type: "long",
                    name: "timetag"
                }]
            }
        })
          , a = r.merge({}, s.packetConfig, {
            "4_10": {
                service: "notify"
            },
            "4_11": {
                service: "notify"
            },
            "3_16": {
                service: "chatroom",
                cmd: "syncRobot",
                response: [{
                    type: "PropertyArray",
                    name: "robots",
                    entity: "robot"
                }]
            },
            "13_2": {
                service: "chatroom",
                cmd: "login",
                response: [{
                    type: "Property",
                    name: "chatroom"
                }, {
                    type: "Property",
                    name: "chatroomMember"
                }]
            },
            "13_3": {
                service: "chatroom",
                cmd: "kicked",
                response: [{
                    type: "Number",
                    name: "reason"
                }, {
                    type: "String",
                    name: "custom"
                }]
            },
            "13_4": {
                service: "chatroom",
                cmd: "logout"
            },
            "13_6": {
                service: "chatroom",
                cmd: "sendMsg",
                response: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            "13_7": {
                service: "chatroom",
                cmd: "msg",
                response: [{
                    type: "Property",
                    name: "msg"
                }]
            },
            "13_8": {
                service: "chatroom",
                cmd: "getChatroomMembers",
                response: [{
                    type: "PropertyArray",
                    name: "members",
                    entity: "chatroomMember"
                }]
            },
            "13_9": {
                service: "chatroom",
                cmd: "getHistoryMsgs",
                response: [{
                    type: "PropertyArray",
                    name: "msgs",
                    entity: "msg"
                }]
            },
            "13_11": {
                service: "chatroom",
                cmd: "markChatroomMember",
                response: [{
                    type: "Property",
                    name: "chatroomMember"
                }]
            },
            "13_12": {
                service: "chatroom",
                cmd: "closeChatroom"
            },
            "13_13": {
                service: "chatroom",
                cmd: "getChatroom",
                response: [{
                    type: "Property",
                    name: "chatroom"
                }]
            },
            "13_14": {
                service: "chatroom",
                cmd: "updateChatroom"
            },
            "13_15": {
                service: "chatroom",
                cmd: "updateMyChatroomMemberInfo"
            },
            "13_16": {
                service: "chatroom",
                cmd: "getChatroomMembersInfo",
                response: [{
                    type: "PropertyArray",
                    name: "members",
                    entity: "chatroomMember"
                }]
            },
            "13_17": {
                service: "chatroom",
                cmd: "kickChatroomMember"
            },
            "13_19": {
                service: "chatroom",
                cmd: "updateChatroomMemberTempMute"
            },
            "13_20": {
                service: "chatroom",
                cmd: "queueOffer"
            },
            "13_21": {
                service: "chatroom",
                cmd: "queuePoll",
                response: [{
                    type: "String",
                    name: "elementKey"
                }, {
                    type: "String",
                    name: "elementValue"
                }]
            },
            "13_22": {
                service: "chatroom",
                cmd: "queueList",
                response: [{
                    type: "KVArray",
                    name: "queueList"
                }]
            },
            "13_23": {
                service: "chatroom",
                cmd: "peak",
                response: [{
                    type: "String",
                    name: "elementKey"
                }, {
                    type: "String",
                    name: "elementValue"
                }]
            },
            "13_24": {
                service: "chatroom",
                cmd: "queueDrop"
            },
            "13_25": {
                service: "chatroom",
                cmd: "queueInit"
            },
            "13_26": {
                service: "chatroom",
                cmd: "queueChange",
                response: [{
                    type: "StrArray",
                    name: "elementKeyArray"
                }]
            }
        });
        e.exports = {
            idMap: i,
            cmdConfig: o,
            packetConfig: a
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = {
            nosToken: {
                1: "objectName",
                2: "token",
                3: "bucket",
                4: "expireTime",
                7: "expireSec",
                8: "tag",
                9: "shortUrl"
            },
            audioToText: {
                2: "url"
            },
            imageOp: {
                0: "type",
                1: "stripmeta",
                2: "typeType",
                3: "blurRadius",
                4: "blurSigma",
                5: "qualityQuality",
                6: "cropX",
                7: "cropY",
                8: "cropWidth",
                9: "cropHeight",
                10: "rotateAngle",
                11: "pixelPixel",
                12: "thumbnailMode",
                13: "thumbnailWidth",
                14: "thumbnailHeight",
                15: "thumbnailAxisX",
                16: "thumbnailAxisY",
                17: "thumbnailCenterX",
                18: "thumbnailCenterY",
                19: "thumbnailEnlarge",
                20: "thumbnailToStatic",
                21: "watermarkType",
                22: "watermarkGravity",
                23: "watermarkDissolve",
                24: "watermarkDx",
                25: "watermarkDy",
                26: "watermarkImage",
                27: "watermarkText",
                28: "watermarkFont",
                29: "watermarkFontSize",
                30: "watermarkFontColor",
                31: "interlace"
            },
            robot: {
                4: "account",
                5: "nick",
                6: "avatar",
                7: "intro",
                8: "config",
                9: "valid",
                10: "createTime",
                11: "updateTime",
                12: "custid",
                13: "botid",
                14: "bindTime",
                _6_safe: "_avatar_safe"
            },
            clientAntispam: {
                1: "version",
                2: "md5",
                3: "nosurl",
                4: "thesaurus"
            },
            fileQuickTransfer: {
                1: "md5",
                2: "url",
                3: "size",
                4: "threshold",
                _2_safe: "_url_safe"
            },
            transToken: {
                1: "name",
                2: "type",
                3: "transType",
                4: "size",
                5: "extra",
                6: "body"
            },
            transInfo: {
                1: "docId",
                2: "name",
                3: "prefix",
                4: "size",
                5: "type",
                6: "state",
                7: "transType",
                8: "transSize",
                9: "pageCount",
                10: "picInfo",
                11: "extra",
                12: "flag"
            },
            nosFileUrlTag: {
                0: "safeUrl",
                1: "originUrl"
            },
            fileListParam: {
                1: "fromDocId",
                2: "limit"
            },
            avSignalTag: {
                1: "type",
                2: "channelName",
                3: "channelId",
                4: "channelCreateTime",
                5: "channelExpireTime",
                6: "creator",
                7: "ext",
                8: "channelInValid",
                10: "from",
                11: "to",
                12: "requestId",
                13: "needPush",
                14: "pushTitle",
                15: "pushContent",
                16: "pushPayload",
                17: "needBadge",
                18: "members",
                19: "attach",
                20: "attachExt",
                21: "isSave",
                22: "msgid",
                23: "uid",
                24: "time"
            },
            login: {
                3: "clientType",
                4: "os",
                6: "sdkVersion",
                8: "appLogin",
                9: "protocolVersion",
                10: "pushTokenName",
                11: "pushToken",
                13: "deviceId",
                18: "appKey",
                19: "account",
                24: "browser",
                26: "session",
                32: "deviceInfo",
                38: "customTag",
                112: "isReactNative",
                1000: "token"
            },
            loginRes: {
                17: "lastLoginDeviceId",
                38: "customTag",
                102: "connectionId",
                103: "ip",
                104: "port",
                106: "country",
                111: "hasXMPush"
            },
            loginPort: {
                3: "type",
                4: "os",
                5: "mac",
                13: "deviceId",
                19: "account",
                32: "deviceInfo",
                38: "customTag",
                102: "connectionId",
                103: "ip",
                109: "time"
            },
            aosPushInfo: {
                110: "pushType",
                111: "hasTokenPreviously"
            },
            sync: {
                1: "myInfo",
                2: "offlineMsgs",
                3: "teams",
                6: "netcallMsgs",
                7: "roamingMsgs",
                9: "relations",
                11: "friends",
                12: "sessions",
                13: "friendUsers",
                14: "msgReceipts",
                15: "myTeamMembers",
                16: "donnop",
                17: "deleteMsg",
                18: "sessionAck",
                19: "robots",
                20: "broadcastMsgs",
                21: "avSignal",
                22: "superTeams",
                23: "myInfoInSuperTeams",
                24: "superTeamRoamingMsgs",
                100: "filterMsgs"
            },
            donnop: {
                1: "open"
            },
            superTeam: {
                1: "teamId",
                3: "name",
                4: "type",
                5: "owner",
                6: "level",
                7: "selfCustom",
                8: "valid",
                9: "memberNum",
                10: "memberUpdateTime",
                11: "createTime",
                12: "updateTime",
                13: "validToCurrentUser",
                14: "intro",
                15: "announcement",
                16: "joinMode",
                17: "bits",
                18: "custom",
                19: "serverCustom",
                20: "avatar",
                21: "beInviteMode",
                22: "inviteMode",
                23: "updateTeamMode",
                24: "updateCustomMode",
                100: "mute",
                101: "muteType",
                _20_safe: "_avatar_safe"
            },
            superTeamMember: {
                1: "teamId",
                3: "account",
                4: "type",
                5: "nickInTeam",
                7: "bits",
                8: "active",
                9: "valid",
                10: "createTime",
                11: "updateTime",
                12: "custom",
                13: "mute",
                14: "invitoraccid",
                15: "joinTime"
            },
            team: {
                1: "teamId",
                3: "name",
                4: "type",
                5: "owner",
                6: "level",
                7: "selfCustom",
                8: "valid",
                9: "memberNum",
                10: "memberUpdateTime",
                11: "createTime",
                12: "updateTime",
                13: "validToCurrentUser",
                14: "intro",
                15: "announcement",
                16: "joinMode",
                17: "bits",
                18: "custom",
                19: "serverCustom",
                20: "avatar",
                21: "beInviteMode",
                22: "inviteMode",
                23: "updateTeamMode",
                24: "updateCustomMode",
                100: "mute",
                101: "muteType",
                _20_safe: "_avatar_safe"
            },
            teamMember: {
                1: "teamId",
                3: "account",
                4: "type",
                5: "nickInTeam",
                7: "bits",
                8: "active",
                9: "valid",
                10: "joinTime",
                11: "updateTime",
                12: "custom",
                13: "mute",
                14: "invitorAccid"
            },
            msg: {
                0: "scene",
                1: "to",
                2: "from",
                4: "fromClientType",
                5: "fromDeviceId",
                6: "fromNick",
                7: "time",
                8: "type",
                9: "body",
                10: "attach",
                11: "idClient",
                12: "idServer",
                13: "resend",
                14: "userUpdateTime",
                15: "custom",
                16: "pushPayload",
                17: "pushContent",
                18: "apnsAccounts",
                19: "apnsContent",
                20: "apnsForcePush",
                21: "yidunEnable",
                22: "antiSpamContent",
                23: "antiSpamBusinessId",
                24: "clientAntiSpam",
                25: "antiSpamUsingYidun",
                26: "needMsgReceipt",
                100: "isHistoryable",
                101: "isRoamingable",
                102: "isSyncable",
                104: "isMuted",
                105: "cc",
                106: "isInBlackList",
                107: "isPushable",
                108: "isOfflinable",
                109: "isUnreadable",
                110: "needPushNick",
                111: "isReplyMsg",
                112: "tempTeamMemberCount"
            },
            msgReceipt: {
                1: "to",
                2: "from",
                7: "time",
                11: "idClient"
            },
            teamMsgReceipt: {
                0: "teamId",
                1: "idServer",
                100: "read",
                101: "unread",
                102: "idClient",
                103: "account"
            },
            sysMsg: {
                0: "time",
                1: "type",
                2: "to",
                3: "from",
                4: "ps",
                5: "attach",
                6: "idServer",
                7: "sendToOnlineUsersOnly",
                8: "apnsText",
                9: "pushPayload",
                10: "deletedIdClient",
                11: "deletedIdServer",
                12: "yidunEnable",
                13: "antiSpamContent",
                14: "deletedMsgTime",
                15: "deletedMsgFromNick",
                16: "opeAccount",
                105: "cc",
                107: "isPushable",
                109: "isUnreadable",
                110: "needPushNick"
            },
            broadcastMsg: {
                1: "broadcastId",
                2: "fromAccid",
                3: "fromUid",
                4: "timestamp",
                5: "body"
            },
            friend: {
                4: "account",
                5: "flag",
                6: "beflag",
                7: "source",
                8: "alias",
                9: "bits",
                10: "custom",
                11: "createTime",
                12: "updateTime",
                13: "serverex"
            },
            user: {
                1: "account",
                3: "nick",
                4: "avatar",
                5: "sign",
                6: "gender",
                7: "email",
                8: "birth",
                9: "tel",
                10: "custom",
                12: "createTime",
                13: "updateTime",
                _4_safe: "_avatar_safe"
            },
            specialRelation: {
                0: "account",
                1: "isMuted",
                2: "isBlacked",
                3: "createTime",
                4: "updateTime"
            },
            msgType: {
                0: "text",
                1: "picture",
                2: "audio",
                3: "video",
                4: "location",
                5: "notification",
                6: "file",
                7: "netcall_audio",
                8: "netcall_vedio",
                9: "datatunnel_new",
                10: "tips",
                11: "robot",
                100: "custom"
            },
            msgEvent: {
                1: "type",
                2: "value",
                3: "idClient",
                4: "custom",
                5: "validTime",
                6: "broadcastType",
                7: "sync",
                8: "validTimeType",
                9: "durable",
                10: "time",
                11: "idServer",
                12: "clientType",
                13: "serverConfig",
                14: "serverCustom",
                101: "appid",
                103: "account",
                104: "enableMultiClient",
                106: "consid"
            },
            msgEventSubscribe: {
                1: "type",
                2: "subscribeTime",
                3: "sync",
                102: "to",
                104: "from",
                105: "time"
            },
            clearMsgsParams: {
                1: "account",
                2: "delRoam"
            },
            delFriendParams: {
                1: "delAlias"
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = {
            nosToken: {
                objectName: 1,
                token: 2,
                bucket: 3,
                expireTime: 4,
                expireSec: 7,
                tag: 8,
                shortUrl: 9
            },
            audioToText: {
                url: 2
            },
            imageOp: {
                type: 0,
                stripmeta: 1,
                typeType: 2,
                blurRadius: 3,
                blurSigma: 4,
                qualityQuality: 5,
                cropX: 6,
                cropY: 7,
                cropWidth: 8,
                cropHeight: 9,
                rotateAngle: 10,
                pixelPixel: 11,
                thumbnailMode: 12,
                thumbnailWidth: 13,
                thumbnailHeight: 14,
                thumbnailAxisX: 15,
                thumbnailAxisY: 16,
                thumbnailCenterX: 17,
                thumbnailCenterY: 18,
                thumbnailEnlarge: 19,
                thumbnailToStatic: 20,
                watermarkType: 21,
                watermarkGravity: 22,
                watermarkDissolve: 23,
                watermarkDx: 24,
                watermarkDy: 25,
                watermarkImage: 26,
                watermarkText: 27,
                watermarkFont: 28,
                watermarkFontSize: 29,
                watermarkFontColor: 30,
                interlace: 31
            },
            robot: {
                account: 4,
                nick: 5,
                avatar: 6,
                intro: 7,
                config: 8,
                valid: 9,
                createTime: 10,
                updateTime: 11,
                custid: 12,
                botid: 13,
                bindTime: 14
            },
            clientAntispam: {
                version: 1,
                md5: 2,
                nosurl: 3,
                thesaurus: 4
            },
            fileQuickTransfer: {
                md5: 1,
                url: 2,
                size: 3,
                threshold: 4
            },
            transToken: {
                name: 1,
                type: 2,
                transType: 3,
                size: 4,
                extra: 5,
                body: 6
            },
            transInfo: {
                docId: 1,
                name: 2,
                prefix: 3,
                size: 4,
                type: 5,
                state: 6,
                transType: 7,
                transSize: 8,
                pageCount: 9,
                picInfo: 10,
                extra: 11,
                flag: 12
            },
            nosFileUrlTag: {
                safeUrl: 0,
                originUrl: 1
            },
            fileListParam: {
                fromDocId: 1,
                limit: 2
            },
            avSignalTag: {
                type: 1,
                channelName: 2,
                channelId: 3,
                channelCreateTime: 4,
                channelExpireTime: 5,
                creator: 6,
                ext: 7,
                channelInValid: 8,
                from: 10,
                to: 11,
                requestId: 12,
                needPush: 13,
                pushTitle: 14,
                pushContent: 15,
                pushPayload: 16,
                needBadge: 17,
                members: 18,
                attach: 19,
                attachExt: 20,
                isSave: 21,
                msgid: 22,
                uid: 23,
                time: 24
            },
            login: {
                clientType: 3,
                os: 4,
                sdkVersion: 6,
                appLogin: 8,
                protocolVersion: 9,
                pushTokenName: 10,
                pushToken: 11,
                deviceId: 13,
                appKey: 18,
                account: 19,
                browser: 24,
                session: 26,
                deviceInfo: 32,
                isReactNative: 112,
                token: 1e3,
                customTag: 38
            },
            loginRes: {
                lastLoginDeviceId: 17,
                customTag: 38,
                connectionId: 102,
                ip: 103,
                port: 104,
                country: 106,
                hasXMPush: 111
            },
            loginPort: {
                type: 3,
                os: 4,
                mac: 5,
                deviceId: 13,
                account: 19,
                deviceInfo: 32,
                connectionId: 102,
                ip: 103,
                time: 109,
                customTag: 38
            },
            aosPushInfo: {
                pushType: 110,
                hasTokenPreviously: 111
            },
            sync: {
                myInfo: 1,
                offlineMsgs: 2,
                teams: 3,
                netcallMsgs: 6,
                roamingMsgs: 7,
                relations: 9,
                friends: 11,
                sessions: 12,
                friendUsers: 13,
                msgReceipts: 14,
                myTeamMembers: 15,
                donnop: 16,
                deleteMsg: 17,
                sessionAck: 18,
                robots: 19,
                broadcastMsgs: 20,
                avSignal: 21,
                superTeams: 22,
                myInfoInSuperTeams: 23,
                superTeamRoamingMsgs: 24,
                filterMsgs: 100
            },
            donnop: {
                open: 1
            },
            superTeam: {
                teamId: 1,
                name: 3,
                type: 4,
                owner: 5,
                level: 6,
                selfCustom: 7,
                valid: 8,
                memberNum: 9,
                memberUpdateTime: 10,
                createTime: 11,
                updateTime: 12,
                validToCurrentUser: 13,
                intro: 14,
                announcement: 15,
                joinMode: 16,
                bits: 17,
                custom: 18,
                serverCustom: 19,
                avatar: 20,
                beInviteMode: 21,
                inviteMode: 22,
                updateTeamMode: 23,
                updateCustomMode: 24,
                mute: 100,
                muteType: 101
            },
            superTeamMember: {
                teamId: 1,
                account: 3,
                type: 4,
                nickInTeam: 5,
                bits: 7,
                active: 8,
                valid: 9,
                createTime: 10,
                updateTime: 11,
                custom: 12,
                mute: 13,
                invitoraccid: 14,
                joinTime: 15
            },
            team: {
                teamId: 1,
                name: 3,
                type: 4,
                owner: 5,
                level: 6,
                selfCustom: 7,
                valid: 8,
                memberNum: 9,
                memberUpdateTime: 10,
                createTime: 11,
                updateTime: 12,
                validToCurrentUser: 13,
                intro: 14,
                announcement: 15,
                joinMode: 16,
                bits: 17,
                custom: 18,
                serverCustom: 19,
                avatar: 20,
                beInviteMode: 21,
                inviteMode: 22,
                updateTeamMode: 23,
                updateCustomMode: 24,
                mute: 100,
                muteType: 101
            },
            teamMember: {
                teamId: 1,
                account: 3,
                type: 4,
                nickInTeam: 5,
                bits: 7,
                active: 8,
                valid: 9,
                joinTime: 10,
                updateTime: 11,
                custom: 12,
                mute: 13,
                invitorAccid: 14
            },
            msg: {
                scene: 0,
                to: 1,
                from: 2,
                fromClientType: 4,
                fromDeviceId: 5,
                fromNick: 6,
                time: 7,
                type: 8,
                body: 9,
                attach: 10,
                idClient: 11,
                idServer: 12,
                resend: 13,
                userUpdateTime: 14,
                custom: 15,
                pushPayload: 16,
                pushContent: 17,
                apnsAccounts: 18,
                apnsContent: 19,
                apnsForcePush: 20,
                yidunEnable: 21,
                antiSpamContent: 22,
                antiSpamBusinessId: 23,
                clientAntiSpam: 24,
                antiSpamUsingYidun: 25,
                needMsgReceipt: 26,
                isHistoryable: 100,
                isRoamingable: 101,
                isSyncable: 102,
                isMuted: 104,
                cc: 105,
                isInBlackList: 106,
                isPushable: 107,
                isOfflinable: 108,
                isUnreadable: 109,
                needPushNick: 110,
                isReplyMsg: 111,
                tempTeamMemberCount: 112
            },
            msgReceipt: {
                to: 1,
                from: 2,
                time: 7,
                idClient: 11
            },
            teamMsgReceipt: {
                teamId: 0,
                idServer: 1,
                read: 100,
                unread: 101,
                idClient: 102,
                account: 103
            },
            sysMsg: {
                time: 0,
                type: 1,
                to: 2,
                from: 3,
                ps: 4,
                attach: 5,
                idServer: 6,
                sendToOnlineUsersOnly: 7,
                apnsText: 8,
                pushPayload: 9,
                deletedIdClient: 10,
                deletedIdServer: 11,
                yidunEnable: 12,
                antiSpamContent: 13,
                deletedMsgTime: 14,
                deletedMsgFromNick: 15,
                opeAccount: 16,
                cc: 105,
                isPushable: 107,
                isUnreadable: 109,
                needPushNick: 110
            },
            broadcastMsg: {
                broadcastId: 1,
                fromAccid: 2,
                fromUid: 3,
                timestamp: 4,
                body: 5
            },
            friend: {
                account: 4,
                flag: 5,
                beflag: 6,
                source: 7,
                alias: 8,
                bits: 9,
                custom: 10,
                createTime: 11,
                updateTime: 12,
                serverex: 13
            },
            user: {
                account: 1,
                nick: 3,
                avatar: 4,
                sign: 5,
                gender: 6,
                email: 7,
                birth: 8,
                tel: 9,
                custom: 10,
                createTime: 12,
                updateTime: 13
            },
            specialRelation: {
                account: 0,
                isMuted: 1,
                isBlacked: 2,
                createTime: 3,
                updateTime: 4
            },
            msgType: {
                text: 0,
                picture: 1,
                audio: 2,
                video: 3,
                location: 4,
                notification: 5,
                file: 6,
                netcall_audio: 7,
                netcall_vedio: 8,
                datatunnel_new: 9,
                tips: 10,
                robot: 11,
                custom: 100
            },
            msgEvent: {
                type: 1,
                value: 2,
                idClient: 3,
                custom: 4,
                validTime: 5,
                broadcastType: 6,
                sync: 7,
                validTimeType: 8,
                durable: 9,
                time: 10,
                idServer: 11,
                clientType: 12,
                serverConfig: 13,
                serverCustom: 14,
                appid: 101,
                account: 103,
                enableMultiClient: 104,
                consid: 106
            },
            msgEventSubscribe: {
                type: 1,
                subscribeTime: 2,
                sync: 3,
                to: 102,
                from: 104,
                time: 105
            },
            clearMsgsParams: {
                account: 1,
                delRoam: 2
            },
            delFriendParams: {
                delAlias: 1
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(58).fn
          , s = n(0)
          , i = n(169);
        r.processAvSignal = function(e) {
            switch (e.cmd) {
            case "signalingCreate":
            case "signalingDelay":
            case "signalingClose":
            case "signalingJoin":
            case "signalingLeave":
            case "signalingInvite":
            case "signalingCancel":
            case "signalingReject":
            case "signalingAccept":
            case "signalingControl":
            case "signalingSyncMsgRead":
            case "signalingGetChannelInfo":
                break;
            case "signalingNotify":
                this.onSignalingNotify(e);
                break;
            case "signalingMutilClientSyncNotify":
                this.onSignalingMutilClientSyncNotify(e);
                break;
            case "signalingUnreadMessageSyncNotify":
                this.onSignalingUnreadMessageSyncNotify(e);
                break;
            case "signalingChannelsSyncNotify":
                this.onSignalingMembersSyncNotify(e);
                break;
            default:
                this.logger.log("avSignal::unhandled cmd:", e.cmd)
            }
        }
        ;
        var o = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (e.needPush && (e.needPush = "1" === e.needPush),
            e.needBadge && (e.needBadge = "1" === e.needBadge),
            e.channelInValid && (e.channelInValid = "1" === e.channelInValid),
            e.attach) {
                var t = JSON.parse(e.attach);
                e.eventType = i.parseAvSignalType(t.type)
            }
            if (e.members) {
                var n = JSON.parse(e.members);
                e.members = n.map(function(e) {
                    return i.parseAvSignalMember(e)
                })
            }
            return e
        };
        r.onSignalingNotify = function(e) {
            if (e.error) {
                var t = e.error;
                this.logger.error("protocal::avSignal:onSignalingNotify error", t),
                this.emitAPI({
                    type: "error",
                    error: t
                }),
                this.options.onerror(t)
            } else {
                e.raw && e.raw.r && e.raw.r.length && e.content && e.content.avSignalTag && (e.content.avSignalTag.msgid = e.raw.r[0]);
                var n = e.content.avSignalTag;
                n = Array.isArray(n) ? n.map(function(e) {
                    return o(e)
                }) : o(n),
                this.emitAPI({
                    type: "signalingNotify",
                    obj: n
                }),
                s.isFunction(this.options.onSignalingNotify) && this.options.onSignalingNotify(n)
            }
        }
        ,
        r.onSignalingMutilClientSyncNotify = function(e) {
            if (e.error) {
                var t = e.error;
                this.logger.error("protocal::avSignal:onSignalingMutilClientSyncNotify error", t),
                this.emitAPI({
                    type: "error",
                    error: t
                }),
                this.options.onerror(t)
            } else
                this.emitAPI({
                    type: "signalingMutilClientSyncNotify",
                    obj: e.content
                }),
                s.isFunction(this.options.onSignalingMutilClientSyncNotify) && this.options.onSignalingMutilClientSyncNotify(e.content)
        }
        ,
        r.onSignalingUnreadMessageSyncNotify = function(e) {
            if (e.error) {
                var t = e.error;
                this.logger.error("protocal::avSignal:onSignalingUnreadMessageSyncNotify error", t),
                this.emitAPI({
                    type: "error",
                    error: t
                }),
                this.options.onerror(t)
            } else {
                var n = e.content.avSignalTag;
                Array.isArray(n) && (n = n.map(function(e) {
                    return o(e)
                })),
                this.emitAPI({
                    type: "signalingUnreadMessageSyncNotify",
                    obj: n
                }),
                s.isFunction(this.options.onSignalingUnreadMessageSyncNotify) && this.options.onSignalingUnreadMessageSyncNotify(n)
            }
        }
        ,
        r.onSignalingMembersSyncNotify = function(e) {
            if (e.error) {
                var t = e.error;
                this.logger.error("protocal::avSignal:onSignalingMembersSyncNotify error", t),
                this.emitAPI({
                    type: "error",
                    error: t
                }),
                this.options.onerror(t)
            } else {
                var n = e.content.avSignalTag;
                Array.isArray(n) || (n = [n]),
                n = n.map(function(e) {
                    return o(e)
                }),
                this.emitAPI({
                    type: "signalingChannelsSyncNotify",
                    obj: n
                }),
                s.isFunction(this.options.onSignalingMembersSyncNotify) && this.options.onSignalingMembersSyncNotify(n)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(58).fn
          , s = n(170);
        r.processMisc = function(e) {
            switch (e.cmd) {
            case "getSimpleNosToken":
                e.error || (e.obj = e.content.nosTokens[0]);
                break;
            case "getNosToken":
                e.error || (e.obj = e.content.nosToken);
                break;
            case "notifyUploadLog":
                e.error || this.emitAPI({
                    type: "notifyUploadLog"
                });
                break;
            case "audioToText":
                e.error || (e.obj.text = e.content.text);
                break;
            case "processImage":
                e.obj.imageOps = s.reverseImageOps(e.obj.imageOps),
                e.error || (e.obj = {
                    url: e.content.url
                });
                break;
            case "getNosTokenTrans":
                e.error || (e.obj = {
                    nosToken: e.content.nosToken,
                    docId: e.content.docId
                });
                break;
            case "getNosOriginUrl":
                e.error || (e.obj = e.content.nosFileUrlTag.originUrl);
                break;
            case "notifyTransLog":
                e.error || this.emitAPI({
                    type: "notifyTransLog",
                    obj: e.content.transInfo
                });
                break;
            case "fetchFile":
            case "fetchFileList":
            case "removeFile":
                e.error || (e.obj = e.content);
                break;
            case "getServerTime":
                e.obj = e.content.time
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(58).fn
          , s = n(5);
        r.processLink = function(e) {
            e.cmd
        }
        ,
        r.startHeartbeat = function() {
            var e = this;
            e.stopHeartbeat(),
            e.heartbeatTimer = setTimeout(function() {
                e.sendCmd("heartbeat", null, e.onHeartbeat.bind(e))
            }, s.heartbeatInterval)
        }
        ,
        r.stopHeartbeat = function() {
            this.heartbeatTimer && (clearTimeout(this.heartbeatTimer),
            this.heartbeatTimer = null)
        }
        ,
        r.onHeartbeat = function(e, t) {
            e ? (e.callFunc = "link::onHeartbeat",
            this.api.reportLogs({
                event: "ping_timeout"
            }),
            this.onCustomError("heartbeat error", "HEARTBEAT_ERROR", e)) : this.startHeartbeat()
        }
        ,
        r.heartbeat = function() {}
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(60), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        var o, a = n(58).fn, c = n(26), u = n(21), m = n(125), l = n(56), d = n(5), p = n(0), f = p.notundef;
        a.login = function() {
            var e = this;
            Promise.resolve().then(function() {
                return e.assembleLogin()
            }).then(function(t) {
                e.sendCmd("login", (0,
                i.default)({}, t), e.onLogin.bind(e))
            }),
            e.autoconnect = !1
        }
        ,
        a.genSessionKey = (o = {},
        function() {
            var e = this.name;
            return o[e] = o[e] || p.guid()
        }
        ),
        a.assembleIMLogin = function() {
            var e = this.options
              , t = e.account
              , n = this.autoconnect ? 0 : 1;
            return this.sdkSession = this.genSessionKey(),
            {
                appLogin: n,
                appKey: e.appKey,
                account: t,
                token: e.token,
                sdkVersion: d.info.sdkVersion,
                protocolVersion: d.info.protocolVersion,
                os: u.os.toString(),
                browser: u.name + " " + u.version,
                clientType: d.CLIENTTYPE || 16,
                session: this.sdkSession,
                deviceId: l.deviceId,
                isReactNative: d.isRN ? 1 : 0,
                customTag: e.customTag || ""
            }
        }
        ,
        a.onLogin = function(e, t) {
            this.loginResult = t,
            e ? this.onAuthError(e, "link::onLogin") : (this.startHeartbeat(),
            this.afterLogin(t))
        }
        ,
        a.afterLogin = p.emptyFunc,
        a.notifyLogin = function() {
            var e = this.loginResult;
            this.logger.info("link::notifyLogin: on connect", e),
            this.options.onconnect(e)
        }
        ,
        a.logout = function() {
            var e = "done disconnect";
            if (this.doLogout)
                return this.doLogout = !1,
                e = "done logout",
                void this.onAuthError(new c(e,"logout"), "link::logout");
            if (this.isConnected()) {
                var t = new c(e,"logout");
                this.onAuthError(t, "link::logout")
            }
        }
        ,
        a.onKicked = function(e) {
            var t = e.content
              , n = t.from
              , r = t.reason
              , s = t.custom
              , i = {
                reason: this.kickedReasons[r] || "unknown",
                message: this.kickedMessages[r] || "未知原因"
            };
            if (f(n) && (i.from = m.reverseType(n)),
            f(s) && (i.custom = s),
            this.shouldNotifyKicked(i)) {
                var o = new c("被踢了","kicked");
                p.merge(o, i),
                this.onAuthError(o, "link::onKicked")
            } else
                this.logger.warn("link::onKicked: silentlyKick"),
                this.shouldReconnect = !0,
                this.hasNotifyDisconnected = !0,
                this.disconnectSocket()
        }
        ,
        a.shouldNotifyKicked = function(e) {
            return "silentlyKick" !== e.reason
        }
        ,
        a.onAuthError = function(e, t) {
            this.shouldReconnect = !1,
            (e = e || c.newConnectionError({
                callFunc: t
            })).callFunc = e.callFunc || t || null,
            this.markAllCallbackInvalid(e),
            this.notifyDisconnect(e)
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}
            ,
            e.paths = [],
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }),
            Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }),
            e.webpackPolyfill = 1),
            e
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(58).fn
          , s = n(26)
          , i = n(188)
          , o = n(168)
          , a = n(5)
          , c = n(0);
        r.initConnect = function() {
            this.socket = null,
            this.retryCount = 0,
            this.connecting = !1,
            this.initConnecting = !1,
            this.shouldReconnect = !0,
            this.hasNotifyDisconnected = !1,
            this.doLogout = !1
        }
        ,
        r.resetConnect = function() {
            var e = this.options;
            c.notundef(e.needReconnect) ? (c.verifyParamType("needReconnect", e.needReconnect, "boolean", "link::resetConnect"),
            this.needReconnect = e.needReconnect) : this.needReconnect = !0,
            this.logger.log("link::resetConnect: needReconnect " + this.needReconnect),
            c.notundef(e.reconnectionAttempts) && c.verifyParamType("reconnectionAttempts", e.reconnectionAttempts, "number", "link::resetConnect"),
            c.notundef(e.noCacheLinkUrl) && c.verifyParamType("noCacheLinkUrl", e.noCacheLinkUrl, "boolean", "link::resetConnect"),
            this.reconnectionAttempts = "number" == typeof e.reconnectionAttempts ? e.reconnectionAttempts : 1 / 0,
            this.backoff = new i({
                min: a.reconnectionDelay,
                max: a.reconnectionDelayMax,
                jitter: a.reconnectionJitter
            })
        }
        ,
        r.connect = function(e) {
            if (e) {
                if (this.initConnecting)
                    return void this.logger.warn("link::connect: already init connecting");
                clearTimeout(this.reconnectTimer)
            }
            if (this.isConnected())
                this.logger.warn("link::connect: already connected");
            else if (this.connecting)
                this.logger.warn("link::connect: already connecting");
            else if (this.connecting = !0,
            this.hasNotifyDisconnected = !1,
            this.socket && this.socket && this.socket.socket)
                this.logger.info("link::connect: try connecting..."),
                this.socket.socket.connect();
            else if (this.options.socketUrl && "string" == typeof this.options.socketUrl)
                this.connectToUrl(this.options.socketUrl);
            else {
                var t = this.getNextSocketUrl();
                t && !this.options.noCacheLinkUrl ? this.connectToUrl(t) : this.refreshSocketUrl()
            }
        }
        ,
        r.getNextSocketUrl = function() {
            return this.socketUrls.shift()
        }
        ,
        r.isConnected = function() {
            return !!this.socket && !!this.socket.socket && this.socket.socket.connected
        }
        ,
        r.connectToUrl = function(e) {
            var t = this;
            if (e = e || "",
            t.logger.log("link::connectToUrl: " + e),
            "undefined" == typeof window) {
                var n = c.getGlobal()
                  , r = e.split(":");
                n && !n.location && r.length > 1 && (n.location = {
                    protocol: r[0],
                    hostname: r[1].slice(2),
                    port: r[2]
                }),
                this.options.transports = ["websocket"]
            }
            var s = this.options.transports || ["websocket", "xhr-polling"];
            t.socket = o.connect(e, {
                transports: s,
                reconnect: !1,
                "force new connection": !0,
                "connect timeout": a.connectTimeout
            }),
            t.logger.info("link::connectToUrl: socket url: " + e + ", transports: " + JSON.stringify(s)),
            t.socket.on("connect", t.onConnect.bind(t)),
            t.socket.on("handshake_failed", t.onHandshakeFailed.bind(t)),
            t.socket.on("connect_failed", t.onConnectFailed.bind(t)),
            t.socket.on("error", t.onError.bind(t)),
            t.socket.on("message", t.onMessage.bind(t)),
            t.socket.on("disconnect", function(n) {
                t.logger.warn("link::connectToUrl: socket url: " + e + ", disconnected"),
                t.doLogout ? t.logout() : t.onDisconnect(!0, "link::socketDisconnect")
            })
        }
        ,
        r.disconnect = function(e) {
            var t = this;
            function n(n) {
                t.logger.info("link::disconnect: socket finally closed, ", n),
                clearTimeout(t.disconnectCallbackTimer),
                e(n)
            }
            e instanceof Function || (e = function() {}
            ),
            clearTimeout(t.connectTimer),
            t.disconnectCallbackTimer = setTimeout(function() {
                e.call(t, "mark disconnected due to timeout")
            }, 1e4),
            t.socket && t.socket.socket && t.socket.socket.transport ? t.socket.socket.transport.onDisconnectDone = function(e) {
                n(e)
            }
            : n(null),
            t.isConnected() ? (t.logger.log("link::disconnect: start disconnecting"),
            t.logout()) : t.connecting ? (t.logger.log("link::disconnect: abort connecting"),
            t.disconnectSocket()) : (t.logger.log("link::disconnect: start otherwise"),
            t.connecting = !1,
            t.shouldReconnect = !1,
            t.needReconnect = !1,
            t.options.ondisconnect({
                callFunc: "link::disconnect",
                message: "manually disconnect status"
            }))
        }
        ,
        r.onConnect = function() {
            this.backoff && this.backoff.reset(),
            this.reconnectStatus = this.retryCount > 0 ? 1 : 0,
            this.retryCount = 0,
            this.connecting = !1,
            this.initConnecting = !1,
            this.shouldReconnect = !0,
            this.hasNotifyDisconnected = !1,
            this.logger.log("link::onConnect: socket onconnected, start login"),
            this.login(),
            this.api.reportLogs({
                event: "ws_connected"
            })
        }
        ,
        r.onHandshakeFailed = function() {
            this.api.reportLogs({
                event: "ws_handshake_failed"
            }),
            this.onDisconnect(!1, "link::onHandshakeFailed")
        }
        ,
        r.onConnectFailed = function() {
            this.api.reportLogs({
                event: "ws_connect_failed"
            }),
            this.onDisconnect(!1, "link::onConnectFailed")
        }
        ,
        r.onError = function() {
            var e = arguments[0];
            if (e) {
                if (this.api.reportLogs({
                    event: "connect_timeout"
                }),
                void 0 !== e.x5ImgDecodeStatus)
                    return;
                if ("[object Object]" === Object.prototype.toString.call(e) && Object.keys(e).length <= 0)
                    return;
                this.onMiscError("连接错误", new s(e,"LINK_ERROR",{
                    callFunc: "link::onError"
                }))
            }
            this.connecting = !1
        }
        ,
        r.onDisconnect = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            this.connected = e,
            this.connecting = !1,
            this.markAllCallbackInvalid(s.newNetworkError({
                callFunc: t
            })),
            this.stopHeartbeat(),
            this.reconnect()
        }
        ,
        r.willReconnect = function() {
            return this.shouldReconnect && this.needReconnect && this.retryCount < this.reconnectionAttempts
        }
        ,
        r.reconnect = function() {
            var e = this;
            if (e.willReconnect())
                if (e.socket && e.socket.socket && e.socket.socket.transport && e.socket.socket.transport.websocket) {
                    e.logger.info("link::reconnect: on socket closed"),
                    e.socket.socket.transport.onConnectionOver = function() {
                        e.logger.log("link::reconnect: on connectionOver"),
                        clearTimeout(e.reconnectTimer),
                        e.doReconnect()
                    }
                    ;
                    try {
                        e.socket.socket.transport.websocket.close()
                    } catch (t) {
                        e.logger.warn("link::reconnect: force disconnect error:", t)
                    }
                } else
                    clearTimeout(e.reconnectTimer),
                    e.reconnectTimer = setTimeout(function() {
                        e.logger.info("link::reconnect: on socket timeout"),
                        e.doReconnect()
                    }, 3e4);
            else
                e.notifyDisconnect()
        }
        ,
        r.doReconnect = function() {
            var e = this;
            e.socket = null,
            e.connected && (e.autoconnect = !0),
            e.retryCount++,
            e.appLogin = 1;
            var t = e.backoff.duration();
            e.logger.info("link::reconnect: will retry after " + t + "ms, retryCount " + e.retryCount),
            e.options.onwillreconnect({
                retryCount: e.retryCount,
                duration: t
            }),
            clearTimeout(e.connectTimer),
            e.connectTimer = setTimeout(function() {
                e.connect()
            }, t)
        }
        ,
        r.notifyConnectError = function(e) {
            var t = s.newConnectError({
                message: e,
                callFunc: "link::notifyConnectError"
            });
            this.logger.error("link::notifyConnectError:", t),
            this.options.onerror(t)
        }
        ,
        r.notifyDisconnect = function(e) {
            var t = this;
            t.hasNotifyDisconnected || (t.hasNotifyDisconnected = !0,
            t.disconnectSocket(),
            (e = e || new s).retryCount = t.retryCount,
            e.willReconnect = t.willReconnect(),
            t.backoff && t.backoff.reset(),
            t.retryCount = 0,
            t.socket && t.socket.socket && t.socket.socket.transport && t.socket.socket.transport.websocket ? (t.logger.info("link::notifyDisconnect: ondisconnected", e),
            t.socket.socket.transport.onConnectionOver = function() {
                t.socket = null,
                t.options.ondisconnect(e)
            }
            ) : (t.logger.info("link::notifyDisconnect: ondisconnected/no transport ws", e),
            t.options.ondisconnect(e)),
            t.onWbNotifyHangup instanceof Function && t.onWbNotifyHangup({
                content: {
                    account: t.account,
                    channelId: null,
                    timetag: +Date()
                }
            }))
        }
        ,
        r.disconnectSocket = function() {
            if (this.isConnected() || this.connecting)
                try {
                    this.connecting = !1,
                    this.shouldReconnect = !1,
                    this.needReconnect = !1,
                    this.socket.disconnect()
                } catch (e) {
                    this.logger.info("link::disconnectSocket: disconnect failed, error ", e)
                }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(9), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        var o = n(50).fn
          , a = n(0)
          , c = n(82)
          , u = n(169);
        o.signalingCreate = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.type
              , n = e.channelName
              , r = e.ext;
            return a.verifyOptions(e, "type", "api::signalling"),
            this.sendCmdUsePromise("signalingCreate", {
                avSignalTag: {
                    type: t,
                    channelName: n,
                    ext: r
                }
            }).then(function(e) {
                var t = e.avSignalTag;
                return Promise.resolve(t)
            }).catch(function(e) {
                return Promise.reject(u.parseAvSignalError(e))
            })
        }
        ,
        o.signalingDelay = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return a.verifyOptions(e, "channelId", "api::signalling"),
            this.sendCmdUsePromise("signalingDelay", {
                avSignalTag: e
            }).then(function(e) {
                var t = e.avSignalTag;
                return Promise.resolve(t)
            }).catch(function(e) {
                return Promise.reject(u.parseAvSignalError(e))
            })
        }
        ,
        o.signalingClose = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.offlineEnabled;
            return a.verifyOptions(e, "channelId", "api::signalling"),
            this.sendCmdUsePromise("signalingClose", {
                avSignalTag: a.merge(e, {
                    isSave: !0 === t ? 1 : 0
                })
            }).then(function(e) {
                var t = e.avSignalTag;
                return t.offlineEnabled = 1 === t.isSave,
                delete t.isSave,
                Promise.resolve(t)
            }).catch(function(e) {
                return Promise.reject(u.parseAvSignalError(e))
            })
        }
        ,
        o.signalingJoin = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.offlineEnabled;
            return a.verifyOptions(e, "channelId", "api::signalling"),
            this.sendCmdUsePromise("signalingJoin", {
                avSignalTag: a.merge(e, {
                    isSave: !0 === t ? 1 : 0
                })
            }).then(function(e) {
                var t = e.avSignalTag
                  , n = t.members;
                return "string" == typeof t.members && (n = JSON.parse(t.members).map(function(e) {
                    return u.parseAvSignalMember(e)
                })),
                t.members = n,
                Promise.resolve(t)
            }).catch(function(e) {
                return Promise.reject(u.parseAvSignalError(e))
            })
        }
        ,
        o.signalingLeave = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.offlineEnabled;
            return a.verifyOptions(e, "channelId", "api::signalling"),
            this.sendCmdUsePromise("signalingLeave", {
                avSignalTag: a.merge(e, {
                    isSave: !0 === t ? 1 : 0
                })
            }).then(function(e) {
                var t = e.avSignalTag;
                return t.offlineEnabled = 1 === t.isSave,
                delete t.isSave,
                Promise.resolve(t)
            }).catch(function(e) {
                return Promise.reject(u.parseAvSignalError(e))
            })
        }
        ,
        o.signalingGetChannelInfo = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.channelName;
            return a.verifyOptions(e, "channelName", "api::signalling"),
            this.sendCmdUsePromise("signalingGetChannelInfo", {
                avSignalTag: {
                    channelName: t
                }
            }).then(function(e) {
                var t = e.avSignalTag
                  , n = t.members;
                return "string" == typeof t.members && (n = JSON.parse(t.members).map(function(e) {
                    return u.parseAvSignalMember(e)
                })),
                t.members = n,
                Promise.resolve(t)
            }).catch(function(e) {
                return Promise.reject(u.parseAvSignalError(e))
            })
        }
        ,
        o.signalingInvite = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.account
              , n = e.offlineEnabled
              , r = e.pushInfo
              , s = void 0 === r ? {} : r;
            a.verifyOptions(e, "channelId requestId account", "api::signalling"),
            "object" === (0,
            i.default)(s.pushPayload) && (s.pushPayload = JSON.stringify(s.pushPayload));
            var o = a.merge(e, s, {
                to: t,
                isSave: !0 === n ? 1 : 0,
                needPush: !0 === s.needPush ? 1 : 0,
                needBadge: !1 === s.needBadge ? 0 : 1
            });
            return this.sendCmdUsePromise("signalingInvite", {
                avSignalTag: o
            }).then(function(e) {
                var t = e.avSignalTag;
                return t.offlineEnabled = 1 === t.isSave,
                t.needBadge = 1 === t.needBadge,
                t.needPush = 1 === t.needPush,
                delete t.isSave,
                Promise.resolve(t)
            }).catch(function(e) {
                return Promise.reject(u.parseAvSignalError(e))
            })
        }
        ,
        o.signalingCancel = function(e) {
            var t = e.account
              , n = e.offlineEnabled;
            return a.verifyOptions(e, "channelId requestId account", "api::signalling"),
            this.sendCmdUsePromise("signalingCancel", {
                avSignalTag: a.merge(e, {
                    to: t,
                    isSave: !0 === n ? 1 : 0
                })
            }).then(function(e) {
                var t = e.avSignalTag;
                return t.offlineEnabled = 1 === t.isSave,
                delete t.isSave,
                Promise.resolve(t)
            }).catch(function(e) {
                return Promise.reject(u.parseAvSignalError(e))
            })
        }
        ,
        o.signalingCreateAndJoin = function(e) {
            var t = this
              , n = e.channelName
              , r = e.uid
              , s = void 0 === r ? 0 : r
              , i = e.offlineEnabled
              , o = void 0 === i || i
              , c = e.attachExt
              , u = void 0 === c ? "" : c;
            return this.signalingCreate(e).catch(function(e) {
                return 10405 === e.code ? (t.logger.warn("api::avSignal:signalingCall room already exists:", e),
                t.signalingGetChannelInfo({
                    channelName: n
                })) : Promise.reject(e)
            }).then(function(e) {
                var n = {
                    channelId: e.channelId,
                    offlineEnabled: o,
                    attachExt: u
                };
                return s && a.merge(n, {
                    uid: s
                }),
                t.signalingJoin(n)
            })
        }
        ,
        o.signalingCall = function(e) {
            var t = this
              , n = e.account
              , r = e.offlineEnabled
              , s = e.requestId;
            a.verifyOptions(e, "type requestId account", "api::signalling");
            var i = "";
            return this.signalingCreateAndJoin(e).then(function(o) {
                t.logger.log("api::avSignal:signalingCall join:", o);
                var a = {
                    channelId: i = o.channelId || i,
                    account: n,
                    requestId: s,
                    offlineEnabled: r,
                    attachExt: e.attachExt || "",
                    pushInfo: e.pushInfo || {}
                };
                return t.signalingInvite(a)
            })
        }
        ,
        o.signalingReject = function(e) {
            var t = e.account
              , n = e.offlineEnabled;
            return a.verifyOptions(e, "channelId requestId account", "api::signalling"),
            this.sendCmdUsePromise("signalingReject", {
                avSignalTag: a.merge(e, {
                    to: t,
                    isSave: !0 === n ? 1 : 0
                })
            }).then(function(e) {
                var t = e.avSignalTag;
                return t.offlineEnabled = 1 === t.isSave,
                delete t.isSave,
                Promise.resolve(t)
            }).catch(function(e) {
                return Promise.reject(u.parseAvSignalError(e))
            })
        }
        ,
        o.signalingAccept = function(e) {
            var t = this
              , n = e.account
              , r = e.offlineEnabled;
            return a.verifyOptions(e, "channelId requestId account", "api::signalling"),
            this.sendCmdUsePromise("signalingAccept", {
                avSignalTag: a.merge(e, {
                    to: n,
                    isSave: !0 === r ? 1 : 0
                })
            }).then(function(e) {
                var t = e.avSignalTag;
                return t.offlineEnabled = 1 === t.isSave,
                delete t.isSave,
                Promise.resolve(t)
            }).catch(function(e) {
                return Promise.reject(u.parseAvSignalError(e))
            }).then(function(n) {
                if (e.autoJoin) {
                    var r = {
                        channelId: e.channelId,
                        offlineEnabled: e.offlineEnabled,
                        attachExt: e.joinAttachExt,
                        uid: e.uid
                    };
                    return t.signalingJoin(r)
                }
                return n
            })
        }
        ,
        o.signalingControl = function(e) {
            var t = e.account;
            return a.verifyOptions(e, "channelId", "api::signalling"),
            this.sendCmdUsePromise("signalingControl", {
                avSignalTag: a.merge(e, t ? {
                    to: t
                } : {})
            }).then(function(e) {
                var t = e.avSignalTag;
                return Promise.resolve(t)
            }).catch(function(e) {
                return Promise.reject(u.parseAvSignalError(e))
            })
        }
        ,
        o.signalingSync = function() {
            return this.sendCmdUsePromise("sync", {
                sync: {
                    avSignal: 0
                }
            }).then(function(e) {
                var t = e.avSignalTag;
                return Promise.resolve(t)
            }).catch(function(e) {
                return Promise.reject(u.parseAvSignalError(e))
            })
        }
        ,
        o.signalingMarkMsgRead = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            a.verifyOptions(e, "msgid", "api::signalling");
            var t = c.idMap.avSignal
              , n = void 0;
            return n = "string" == typeof e.msgid ? [e.msgid] : e.msgid,
            this.sendCmd("batchMarkRead", {
                sid: t.id,
                cid: t.signalingNotify,
                ids: n
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(50).fn
          , s = n(0)
          , i = n(39)
          , o = n(5)
          , a = n(21);
        (a = a || {}).name = a.name || "",
        a.version = a.version || "",
        r.reportLogs = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = this
              , n = t.options
              , r = o.ntServerAddress;
            if (r) {
                var c = o.info;
                e = s.merge(e, {
                    appkey: n.appKey,
                    uid: n.account,
                    os: "web",
                    session: t.protocol.sdkSession || "",
                    ver: c.sdkVersion,
                    type: t.subType,
                    platform: "" + a.name.toLowerCase() + a.version.replace(/(\.\d+)+$/, "")
                });
                var u = r + s.genUrlSep(r)
                  , m = [];
                for (var l in e)
                    m.push(l + "=" + e[l]);
                u += m.join("&"),
                i(u, {
                    proxyUrl: s.url2origin(u) + "/lbs/res/cors/nej_proxy_frame.html",
                    timeout: o.xhrTimeout,
                    onload: function() {},
                    onerror: function(e) {
                        t.logger.info("report::ajax report error", e)
                    }
                })
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(9), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        var o = n(0)
          , a = n(50).fn;
        function c(e, t, n, r) {
            var s = !1
              , i = "";
            if (1 === n ? e.indexOf(t) >= 0 && (s = !0,
            i = t) : 2 === n && (i = new RegExp(t,"g")).test(e) && (s = !0),
            s && "" !== i)
                switch (r) {
                case 1:
                    return e.replace(i, "**");
                case 2:
                    return {
                        code: 2
                    };
                case 3:
                    return {
                        code: 3
                    }
                }
            return e
        }
        function u(e, t) {
            for (var n = t.match, r = t.operate, s = e, o = 0; o < t.keys.length; o++) {
                var a = t.keys[o]
                  , u = a.match || n
                  , m = a.operate || r;
                try {
                    if ("object" === (void 0 === (s = c(s, a.key, u, m)) ? "undefined" : (0,
                    i.default)(s)))
                        return s
                } catch (e) {
                    this.logger.warn("misc::filterContent: js cannot parse this regexp ", e)
                }
            }
            return s
        }
        a.uploadSdkLogUrl = function(e) {
            return o.verifyOptions(e, "url", "misc::uploadSdkLogUrl"),
            this.cbAndSendCmd("uploadSdkLogUrl", e)
        }
        ,
        a.getClientAntispamLexicon = function(e) {
            var t = this
              , n = (e = e || {}).done;
            n instanceof Function || (n = function() {}
            ),
            e = {
                clientAntispam: {
                    version: 0
                }
            };
            var r = this;
            return this.protocol.sendCmd("getClientAntispam", e, function(e, s, i) {
                e ? (r.protocol.logger.error("misc::getClientAntispamLexicon:", e),
                n.call(t, e, {})) : (n.call(t, null, i),
                r.antispamLexicon = i.clientAntispam || {})
            })
        }
        ,
        a.filterClientAntispam = function(e) {
            var t = e.content
              , n = e.antispamLexicon;
            if (!t)
                return {
                    code: 404,
                    errmsg: "待反垃圾文本content不存在"
                };
            n = n || this.antispamLexicon || {};
            var r = this.antispamLexicon && this.antispamLexicon.thesaurus;
            if (!r)
                return {
                    code: 404,
                    errmsg: "没有反垃圾词库或者词库格式不合法"
                };
            try {
                r = JSON.parse(r).thesaurus
            } catch (e) {
                return this.protocol.logger.error("misc::filterClientAntispam: parse thesaurus error"),
                {
                    code: 500,
                    errmsg: "反垃圾词库格式不合法"
                }
            }
            for (var s = t, o = 0; o < r.length; o++)
                if ("object" === (void 0 === (s = u.call(this, s, r[o])) ? "undefined" : (0,
                i.default)(s))) {
                    if (2 === s.code)
                        return {
                            code: 200,
                            type: 2,
                            errmsg: "建议拒绝发送",
                            content: t,
                            result: ""
                        };
                    if (3 === s.code)
                        return {
                            code: 200,
                            type: 3,
                            errmsg: "建议服务器处理反垃圾，发消息带上字段clientAntiSpam",
                            content: t,
                            result: t
                        }
                }
            return s === t ? {
                code: 200,
                type: 0,
                errmsg: "",
                content: t,
                result: s
            } : {
                code: 200,
                type: 1,
                errmsg: "已对特殊字符做了过滤",
                content: t,
                result: s
            }
        }
        ,
        a.getServerTime = function(e) {
            this.processCallback(e),
            this.sendCmd("getServerTime", {}, e.callback)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(9), i = (r = s) && r.__esModule ? r : {
            default: r
        }, o = n(69);
        var a, c = n(0), u = n(50).fn;
        u.viewImageSync = function(e) {
            var t = this.options;
            c.verifyOptions(e, "url", "nos::viewImageSync");
            var n = e.url
              , r = (0,
            o.url2object)(n)
              , s = r.protocol
              , a = r.hostname
              , u = r.path
              , m = r.query;
            if ("boolean" == typeof e.strip && (m.stripmeta = e.strip ? 1 : 0),
            "number" == typeof e.quality && (c.verifyParamMin("quality", e.quality, 0, "nos::viewImageSync"),
            c.verifyParamMax("quality", e.quality, 100, "nos::viewImageSync"),
            m.quality = Math.round(e.quality)),
            "boolean" == typeof e.interlace && (m.interlace = e.interlace ? 1 : 0),
            "number" == typeof e.rotate && (m.rotate = Math.round(e.rotate)),
            "object" === (0,
            i.default)(e.thumbnail)) {
                var l = e.thumbnail.mode || "crop"
                  , d = e.thumbnail.width
                  , p = e.thumbnail.height;
                if (d >= 0 && p >= 0 && d < 4096 && p < 4096 && (d > 0 || p > 0)) {
                    switch (l) {
                    case "crop":
                        l = "y";
                        break;
                    case "contain":
                        l = "x";
                        break;
                    case "cover":
                        l = "z";
                        break;
                    default:
                        l = "x"
                    }
                    m.thumbnail = "" + d + l + p
                }
            }
            if (t.downloadUrl) {
                var f = (0,
                o.url2object)(e.url)
                  , g = t.downloadUrl
                  , h = f.path
                  , y = h.indexOf("/");
                if (-1 !== y) {
                    var v = h.substring(0, y)
                      , b = h.substring(y + 1);
                    g = g.replace("{bucket}", v).replace("{object}", b)
                }
                var T = (0,
                o.url2object)(g);
                return (0,
                o.object2url)({
                    protocol: T.protocol,
                    hostname: T.hostname,
                    path: T.path,
                    query: c.merge(T.query, m)
                })
            }
            return (0,
            o.object2url)({
                protocol: s,
                hostname: a,
                path: u,
                query: m
            })
        }
        ,
        u.viewImageStripMeta = function(e) {
            c.verifyOptions(e, "url strip", "nos::viewImageStripMeta"),
            c.verifyParamType("strip", e.strip, "boolean", "nos::viewImageStripMeta");
            var t = "stripmeta=" + (e.strip ? 1 : 0)
              , n = (0,
            o.genUrlSep)(e.url);
            return e.url + n + t
        }
        ,
        u.viewImageQuality = function(e) {
            c.verifyOptions(e, "url quality", "nos::viewImageQuality"),
            c.verifyParamType("quality", e.quality, "number", "nos::viewImageQuality"),
            c.verifyParamMin("quality", e.quality, 0, "nos::viewImageQuality"),
            c.verifyParamMax("quality", e.quality, 100, "nos::viewImageQuality");
            var t = "quality=" + Math.round(e.quality)
              , n = (0,
            o.genUrlSep)(e.url);
            return e.url + n + t
        }
        ,
        u.viewImageInterlace = function(e) {
            c.verifyOptions(e, "url", "nos::viewImageInterlace");
            var t = (0,
            o.genUrlSep)(e.url);
            return e.url + t + "interlace=1"
        }
        ,
        u.viewImageRotate = function(e) {
            for (c.verifyOptions(e, "url angle", "nos::viewImageRotate"),
            c.verifyParamType("angle", e.angle, "number", "nos::viewImageRotate"); e.angle < 0; )
                e.angle = e.angle + 360;
            e.angle = e.angle % 360;
            var t = "rotate=" + Math.round(e.angle)
              , n = (0,
            o.genUrlSep)(e.url);
            return e.url + n + t
        }
        ,
        u.viewImageBlur = function(e) {
            c.verifyOptions(e, "url radius sigma", "nos::viewImageBlur"),
            c.verifyParamType("radius", e.radius, "number", "nos::viewImageBlur"),
            c.verifyParamMin("radius", e.radius, 1, "nos::viewImageBlur"),
            c.verifyParamMax("radius", e.radius, 50, "nos::viewImageBlur"),
            c.verifyParamType("sigma", e.sigma, "number", "nos::viewImageBlur"),
            c.verifyParamMin("sigma", e.sigma, 0, "nos::viewImageBlur");
            var t = "blur=" + Math.round(e.radius) + "x" + Math.round(e.sigma)
              , n = (0,
            o.genUrlSep)(e.url);
            return e.url + n + t
        }
        ,
        u.viewImageCrop = function(e) {
            c.verifyOptions(e, "url x y width height", "nos::viewImageCrop"),
            c.verifyParamType("x", e.x, "number", "nos::viewImageCrop"),
            c.verifyParamMin("x", e.x, 0, "nos::viewImageCrop"),
            c.verifyParamType("y", e.y, "number", "nos::viewImageCrop"),
            c.verifyParamMin("y", e.y, 0, "nos::viewImageCrop"),
            c.verifyParamType("width", e.width, "number", "nos::viewImageCrop"),
            c.verifyParamMin("width", e.width, 0, "nos::viewImageCrop"),
            c.verifyParamType("height", e.height, "number", "nos::viewImageCrop"),
            c.verifyParamMin("height", e.height, 0, "nos::viewImageCrop");
            var t = "crop=" + Math.round(e.x) + "_" + Math.round(e.y) + "_" + Math.round(e.width) + "_" + Math.round(e.height)
              , n = (0,
            o.genUrlSep)(e.url);
            return e.url + n + t
        }
        ,
        u.viewImageThumbnail = (a = {
            cover: "z",
            contain: "x",
            crop: "y"
        },
        function(e) {
            c.verifyOptions(e, "url mode", "nos::viewImageThumbnail"),
            c.verifyParamValid("mode", e.mode, Object.keys(a), "nos::viewImageThumbnail"),
            "contain" === e.mode ? c.verifyParamAtLeastPresentOne(e, "width height", "nos::viewImageThumbnail") : c.verifyOptions(e, "width height", "nos::viewImageThumbnail"),
            c.undef(e.width) && (e.width = 0),
            c.undef(e.height) && (e.height = 0),
            c.verifyParamType("width", e.width, "number", "nos::viewImageThumbnail"),
            c.verifyParamMin("width", e.width, 0, "nos::viewImageThumbnail"),
            c.verifyParamType("height", e.height, "number", "nos::viewImageThumbnail"),
            c.verifyParamMin("height", e.height, 0, "nos::viewImageThumbnail");
            var t = Math.round(e.width)
              , n = Math.round(e.height)
              , r = "thumbnail=" + t + a[e.mode] + n;
            "crop" === e.mode && c.notundef(e.axis) && (c.undef(e.axis.x) && (e.axis.x = 5),
            c.undef(e.axis.y) && (e.axis.y = 5),
            c.verifyParamMin("axis.x", e.axis.x, 0, "nos::viewImageThumbnail"),
            c.verifyParamMax("axis.x", e.axis.x, 10, "nos::viewImageThumbnail"),
            c.verifyParamMin("axis.y", e.axis.y, 0, "nos::viewImageThumbnail"),
            c.verifyParamMax("axis.y", e.axis.y, 10, "nos::viewImageThumbnail"),
            r = r + "&axis=" + Math.round(e.axis.x) + "_" + Math.round(e.axis.y)),
            c.notundef(e.enlarge) && (c.verifyParamType("enlarge", e.enlarge, "boolean", "nos::viewImageThumbnail"),
            e.enlarge && (r += "&enlarge=1"));
            var s = (0,
            o.genUrlSep)(e.url);
            return e.url + s + r
        }
        )
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(0), i = n(50).fn, o = n(170), a = n(172), c = n(26);
        i.transDoc = function(e) {
            s.verifyOptions(e, "fileInput done", "nos::transDoc");
            try {
                var t = e.fileInput.files[0]
                  , n = e.fileInputName = t.name
                  , r = {
                    ppt: 1,
                    pptx: 2,
                    pdf: 3
                }
                  , i = n.substring(n.lastIndexOf(".") + 1);
                if (["ppt", "pdf", "pptx"].indexOf(i) < 0)
                    return void e.done(c.newNoFileError("请上传正确格式的文件【ppt, pptx, pdf】", {
                        callFunc: "nos: transDoc",
                        fileInput: e.fileInput
                    }), e)
            } catch (t) {
                return void e.done(c.newNoFileError("请上传正确的文件节点", {
                    callFunc: "msg::previewFile",
                    fileInput: e.fileInput
                }), e)
            }
            var o = JSON.stringify(a.genResponseBody("file") || {}).replace(/"/gi, '\\"')
              , u = {
                transToken: {
                    name: n,
                    type: r[i],
                    transType: "png" === e.transcode ? 11 : 10,
                    size: t.size,
                    body: o
                }
            };
            this.getNosTokenTrans({
                responseBody: u,
                nosToken: {
                    nosScene: e.nosScene || this.nosScene,
                    nosSurvivalTime: e.nosSurvivalTime
                },
                callback: function(t, n) {
                    t ? e.done(t) : (e.nosToken = n.nosToken,
                    e.docId = n.docId,
                    this._doPreviewFile(e))
                }
                .bind(this)
            })
        }
        ,
        i.getSimpleNosToken = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e.num = 1,
            s.verifyOptions(e),
            this.cbAndSendCmd("getSimpleNosToken", e)
        }
        ,
        i.getNosToken = function(e) {
            var t = e.callback
              , n = e.nosToken
              , r = e.responseBody
              , s = {
                tag: n.nosScene
            };
            n.nosSurvivalTime && n.nosSurvivalTime !== 1 / 0 && (s.expireSec = n.nosSurvivalTime),
            this.sendCmd("getNosToken", {
                responseBody: r,
                nosToken: s
            }, t)
        }
        ,
        i.getNosTokenTrans = function(e) {
            this.sendCmd("getNosTokenTrans", e.responseBody, e.callback)
        }
        ,
        i.packFileDownloadName = function(e) {
            s.verifyOptions(e, "url name", !0, "", "nos::packFileDownloadName");
            var t = e.url;
            return t + s.genUrlSep(t) + "download=" + encodeURIComponent(e.name)
        }
        ,
        i.audioToMp3 = function(e) {
            s.verifyOptions(e, "url", "nos::audioToMp3");
            var t = e.url;
            return t + s.genUrlSep(t) + "audioTrans&type=mp3"
        }
        ,
        i.removeFile = function(e) {
            this.sendCmd("removeFile", e, e.callback)
        }
        ,
        i.fetchFile = function(e) {
            this.sendCmd("fetchFile", e, e.callback)
        }
        ,
        i.fetchFileList = function(e) {
            this.sendCmd("fetchFileList", e, e.callback)
        }
        ,
        i.stripImageMeta = function(e) {
            return this.beforeProcessImage(e, "stripmeta")
        }
        ,
        i.qualityImage = function(e) {
            return this.beforeProcessImage(e, "quality")
        }
        ,
        i.interlaceImage = function(e) {
            return this.beforeProcessImage(e, "interlace")
        }
        ,
        i.rotateImage = function(e) {
            return this.beforeProcessImage(e, "rotate")
        }
        ,
        i.blurImage = function(e) {
            return this.beforeProcessImage(e, "blur")
        }
        ,
        i.cropImage = function(e) {
            return this.beforeProcessImage(e, "crop")
        }
        ,
        i.thumbnailImage = function(e) {
            return this.beforeProcessImage(e, "thumbnail")
        }
        ,
        i.beforeProcessImage = function(e, t) {
            var n = s.copy(e);
            return n.type = t,
            e.ops = [n],
            this.processImage(e)
        }
        ,
        i.processImage = function(e) {
            var t = this;
            s.verifyOptions(e, "url ops", !0, "", "nos::processImage"),
            s.verifyParamType("ops", e.ops, "array", "nos::processImage");
            var n = e.ops.map(function(e) {
                return s.verifyOptions(e, "type", !0, "", "nos::processImage"),
                s.verifyParamValid("type", e.type, o.validTypes, "nos::processImage"),
                t["gen" + e.type.slice(0, 1).toUpperCase() + e.type.slice(1) + "Op"](e)
            });
            t.processCallback(e),
            t.sendCmd("processImage", {
                url: e.url,
                imageOps: n
            }, e.callback)
        }
        ,
        i.genStripmetaOp = function(e) {
            return new o({
                type: e.type,
                stripmeta: e.strip ? 1 : 0
            })
        }
        ,
        i.genQualityOp = function(e) {
            s.verifyOptions(e, "quality", !0, "", "nos::genQualityOp"),
            s.verifyParamType("quality", e.quality, "number", "nos::genQualityOp"),
            s.verifyParamMin("quality", e.quality, 0, "nos::genQualityOp"),
            s.verifyParamMax("quality", e.quality, 100, "nos::genQualityOp");
            var t = Math.round(e.quality);
            return new o({
                type: e.type,
                qualityQuality: t
            })
        }
        ,
        i.genInterlaceOp = function(e) {
            return new o({
                type: e.type
            })
        }
        ,
        i.genRotateOp = function(e) {
            for (s.verifyOptions(e, "angle", !0, "", "nos::genRotateOp"),
            s.verifyParamType("angle", e.angle, "number", "nos::genRotateOp"); e.angle < 0; )
                e.angle = e.angle + 360;
            e.angle = e.angle % 360;
            var t = Math.round(e.angle);
            return new o({
                type: e.type,
                rotateAngle: t
            })
        }
        ,
        i.genBlurOp = function(e) {
            s.verifyOptions(e, "radius sigma", "nos::genBlurOp"),
            s.verifyParamType("radius", e.radius, "number", "nos::genBlurOp"),
            s.verifyParamMin("radius", e.radius, 1, "nos::genBlurOp"),
            s.verifyParamMax("radius", e.radius, 50, "nos::genBlurOp"),
            s.verifyParamType("sigma", e.sigma, "number", "nos::genBlurOp"),
            s.verifyParamMin("sigma", e.sigma, 0, "nos::genBlurOp");
            var t = Math.round(e.radius)
              , n = Math.round(e.sigma);
            return new o({
                type: e.type,
                blurRadius: t,
                blurSigma: n
            })
        }
        ,
        i.genCropOp = function(e) {
            s.verifyOptions(e, "x y width height", "nos::genCropOp"),
            s.verifyParamType("x", e.x, "number", "nos::genCropOp"),
            s.verifyParamMin("x", e.x, 0, "nos::genCropOp"),
            s.verifyParamType("y", e.y, "number", "nos::genCropOp"),
            s.verifyParamMin("y", e.y, 0, "nos::genCropOp"),
            s.verifyParamType("width", e.width, "number", "nos::genCropOp"),
            s.verifyParamMin("width", e.width, 0, "nos::genCropOp"),
            s.verifyParamType("height", e.height, "number", "nos::genCropOp"),
            s.verifyParamMin("height", e.height, 0, "nos::genCropOp");
            var t = Math.round(e.x)
              , n = Math.round(e.y)
              , r = Math.round(e.width)
              , i = Math.round(e.height);
            return new o({
                type: e.type,
                cropX: t,
                cropY: n,
                cropWidth: r,
                cropHeight: i
            })
        }
        ,
        i.genThumbnailOp = (r = {
            cover: "z",
            contain: "x",
            crop: "y"
        },
        function(e) {
            s.verifyOptions(e, "mode", "nos::genThumbnailOp"),
            s.verifyParamValid("mode", e.mode, Object.keys(r), "nos::genThumbnailOp"),
            "contain" === e.mode ? s.verifyParamAtLeastPresentOne(e, "width height", "nos::genThumbnailOp") : s.verifyOptions(e, "width height", "nos::genThumbnailOp"),
            s.undef(e.width) && (e.width = 0),
            s.undef(e.height) && (e.height = 0),
            s.verifyParamType("width", e.width, "number", "nos::genThumbnailOp"),
            s.verifyParamMin("width", e.width, 0, "nos::genThumbnailOp"),
            s.verifyParamType("height", e.height, "number", "nos::genThumbnailOp"),
            s.verifyParamMin("height", e.height, 0, "nos::genThumbnailOp");
            var t = Math.round(e.width)
              , n = Math.round(e.height)
              , i = new o({
                type: e.type,
                thumbnailMode: r[e.mode],
                thumbnailWidth: t,
                thumbnailHeight: n
            });
            if ("crop" === e.mode && s.notundef(e.axis)) {
                s.undef(e.axis.x) && (e.axis.x = 5),
                s.undef(e.axis.y) && (e.axis.y = 5),
                s.verifyParamMin("axis.x", e.axis.x, 0, "nos::genThumbnailOp"),
                s.verifyParamMax("axis.x", e.axis.x, 10, "nos::genThumbnailOp"),
                s.verifyParamMin("axis.y", e.axis.y, 0, "nos::genThumbnailOp"),
                s.verifyParamMax("axis.y", e.axis.y, 10, "nos::genThumbnailOp");
                var a = Math.round(e.axis.x)
                  , c = Math.round(e.axis.y);
                i.thumbnailAxisX = a,
                i.thumbnailAxisY = c
            }
            return s.notundef(e.enlarge) && (s.verifyParamType("enlarge", e.enlarge, "boolean", "nos::genThumbnailOp"),
            e.enlarge && (i.thumbnailEnlarge = 1)),
            i
        }
        ),
        i.getNosOriginUrl = function(e) {
            s.verifyOptions(e, "safeShortUrl", !0, "", "nos::getNosOriginUrl"),
            s.verifyParamType("safeShortUrl", e.safeShortUrl, "string", "nos::getNosOriginUrl"),
            /^http(s)?:/.test(e.safeShortUrl) && ~e.safeShortUrl.indexOf("im_url=1") ? (this.processCallback(e),
            this.sendCmd("getNosOriginUrl", {
                nosFileUrlTag: {
                    safeUrl: e.safeShortUrl
                }
            }, e.callback)) : e.done(new c("参数 “safeShortUrl” 内容非文件安全短链",{
                callFunc: "nos: getNosOriginUrl"
            }), e)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(5)
          , s = n(0)
          , i = n(26)
          , o = n(39).upload
          , a = n(39).chunkUpload
          , c = n(39).abort
          , u = s.supportFormData;
        function m(e) {
            var t = this;
            t.options = s.copy(e),
            s.verifyOptions(e, "url fileName"),
            s.verifyParamPresentJustOne(e, "blob fileInput"),
            s.verifyCallback(e, "beginupload uploadprogress uploaddone"),
            e.fileInput && (e.fileInput = s.verifyFileInput(e.fileInput)),
            e.type && s.verifyFileType(e.type),
            e.timeout ? s.verifyParamType("timeout", e.timeout, "number") : e.timeout = 6e5,
            s.verifyFileUploadCallback(e),
            e.data = {},
            e.params && s.merge(e.data, e.params);
            var n = e.fileName
              , c = e.fileInput;
            if (u) {
                if (c) {
                    var m = e.type ? s.filterFiles(c.files, e.type) : [].slice.call(c.files, 0);
                    if (!m || !m.length)
                        return void e.uploaddone(i.newWrongFileTypeError("未读取到" + e.type + "类型的文件, 请确保文件选择节点的文件不为空, 并且请确保选择了" + e.type + "类型的文件"));
                    e.data[n] = m[0];
                    var l = c.files[0].size
                } else if (e.blob) {
                    if (e.data[n] = e.blob,
                    "file" !== e.type && e.blob.type && -1 === e.blob.type.indexOf(e.type))
                        return void e.uploaddone(i.newWrongFileTypeError("未读取到" + e.type + "类型的文件, 请确保选择了" + e.type + "类型的文件"));
                    l = e.blob.size
                }
                if (e.maxSize && l > e.maxSize)
                    return void e.uploaddone(i.newFileTooLargeError("上传文件大小超过" + e.maxSize + "限制"));
                if (!e.commonUpload)
                    return l > r.chunkMaxSize ? void e.uploaddone(i.newFileTooLargeError("直传文件大小超过" + r.chunkMaxSize + "限制")) : void (t.sn = a(e, n, t));
                if (l > r.commonMaxSize)
                    return void e.uploaddone(i.newFileTooLargeError("普通上传文件大小超过" + r.commonMaxSize + "限制"))
            } else
                s.dataset(c, "name", n),
                e.data.input = c;
            var d = {
                data: e.data,
                onaftersend: function() {
                    e.beginupload(t)
                },
                onuploading: function(t) {
                    var n = Math.floor(1e4 * t.loaded / t.total) / 100
                      , r = {
                        docId: e.docId,
                        total: t.total,
                        loaded: t.loaded,
                        percentage: n,
                        percentageText: n + "%"
                    };
                    e.fileInput && (r.fileInput = e.fileInput),
                    e.blob && (r.blob = e.blob),
                    e.uploadprogress(r)
                },
                onload: function(n) {
                    n.docId = e.docId,
                    n.Error ? t.onError(n) : e.uploaddone(null, n)
                },
                onerror: function(n) {
                    try {
                        if (n.result)
                            var r = JSON.parse(n.result);
                        else
                            r = n;
                        t.onError(r)
                    } catch (r) {
                        console.log("error: ignore error if could not parse obj.result", r),
                        e.uploaddone(new i(n.message,n.code), t.options)
                    }
                }
            };
            u || (d.mode = "iframe"),
            d.putFileAtEnd = !0,
            t.sn = o(e.url, d)
        }
        m.prototype.onError = function(e) {
            var t, n, r, s = this.options;
            n = (t = (e = e || {}).Error || e || {}).Code || t.code || "unknown",
            r = t.Message || t.message || "未知错误",
            s.uploaddone(new i(n + "(" + r + ")",n))
        }
        ,
        m.prototype.abort = function() {
            c(this.sn)
        }
        ,
        e.exports = m
    }
    , function(e, t, n) {
        var r, s, i;
        !function(n, o) {
            "use strict";
            s = [],
            void 0 === (i = "function" == typeof (r = function(e) {
                return function(t) {
                    t = t || {},
                    function() {
                        t.arrayAccessForm = t.arrayAccessForm || "none",
                        t.emptyNodeForm = t.emptyNodeForm || "text",
                        t.jsAttributeFilter = t.jsAttributeFilter,
                        t.jsAttributeConverter = t.jsAttributeConverter,
                        t.attributeConverters = t.attributeConverters || [],
                        t.datetimeAccessFormPaths = t.datetimeAccessFormPaths || [],
                        t.arrayAccessFormPaths = t.arrayAccessFormPaths || [],
                        void 0 === t.enableToStringFunc && (t.enableToStringFunc = !0);
                        void 0 === t.skipEmptyTextNodesForObj && (t.skipEmptyTextNodesForObj = !0);
                        void 0 === t.stripWhitespaces && (t.stripWhitespaces = !0);
                        void 0 === t.useDoubleQuotes && (t.useDoubleQuotes = !0);
                        void 0 === t.ignoreRoot && (t.ignoreRoot = !1);
                        void 0 === t.escapeMode && (t.escapeMode = !0);
                        void 0 === t.attributePrefix && (t.attributePrefix = "_");
                        void 0 === t.selfClosingElements && (t.selfClosingElements = !0);
                        void 0 === t.keepCData && (t.keepCData = !1);
                        void 0 === t.jsDateUTC && (t.jsDateUTC = !1)
                    }(),
                    function() {
                        function e(e) {
                            var t = String(e);
                            return 1 === t.length && (t = "0" + t),
                            t
                        }
                        "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
                            return this.replace(/^\s+|^\n+|(\s|\n)+$/g, "")
                        }
                        );
                        "function" != typeof Date.prototype.toISOString && (Date.prototype.toISOString = function() {
                            return this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
                        }
                        )
                    }();
                    var n = {
                        ELEMENT_NODE: 1,
                        TEXT_NODE: 3,
                        CDATA_SECTION_NODE: 4,
                        COMMENT_NODE: 8,
                        DOCUMENT_NODE: 9
                    };
                    function r(e) {
                        var t = e.localName;
                        return null == t && (t = e.baseName),
                        null != t && "" !== t || (t = e.nodeName),
                        t
                    }
                    function s(e) {
                        return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;") : e
                    }
                    function i(e, n, r) {
                        switch (t.arrayAccessForm) {
                        case "property":
                            e[n]instanceof Array ? e[n + "_asArray"] = e[n] : e[n + "_asArray"] = [e[n]]
                        }
                        if (!(e[n]instanceof Array) && t.arrayAccessFormPaths.length > 0) {
                            for (var s = !1, i = 0; i < t.arrayAccessFormPaths.length; i++) {
                                var o = t.arrayAccessFormPaths[i];
                                if ("string" == typeof o) {
                                    if (o === r) {
                                        s = !0;
                                        break
                                    }
                                } else if (o instanceof RegExp) {
                                    if (o.test(r)) {
                                        s = !0;
                                        break
                                    }
                                } else if ("function" == typeof o && o(n, r)) {
                                    s = !0;
                                    break
                                }
                            }
                            s && (e[n] = [e[n]])
                        }
                    }
                    function o(e) {
                        var t = e.split(/[-T:+Z]/g)
                          , n = new Date(t[0],t[1] - 1,t[2])
                          , r = t[5].split(".");
                        if (n.setHours(t[3], t[4], r[0]),
                        r.length > 1 && n.setMilliseconds(r[1]),
                        t[6] && t[7]) {
                            var s = 60 * t[6] + Number(t[7])
                              , i = /\d\d-\d\d:\d\d$/.test(e) ? "-" : "+";
                            s = 0 + ("-" === i ? -1 * s : s),
                            n.setMinutes(n.getMinutes() - s - n.getTimezoneOffset())
                        } else
                            -1 !== e.indexOf("Z", e.length - 1) && (n = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds())));
                        return n
                    }
                    function a(e, s) {
                        for (var a = {
                            __cnt: 0
                        }, u = e.childNodes, m = 0; m < u.length; m++) {
                            var l = u.item(m)
                              , d = r(l);
                            l.nodeType !== n.COMMENT_NODE && (a.__cnt++,
                            null == a[d] ? (a[d] = c(l, s + "." + d),
                            i(a, d, s + "." + d)) : (a[d]instanceof Array || (a[d] = [a[d]],
                            i(a, d, s + "." + d)),
                            a[d][a[d].length] = c(l, s + "." + d)))
                        }
                        for (var p = 0; p < e.attributes.length; p++) {
                            var f = e.attributes.item(p);
                            a.__cnt++;
                            for (var g = f.value, h = 0; h < t.attributeConverters.length; h++) {
                                var y = t.attributeConverters[h];
                                y.test.call(null, f.name, f.value) && (g = y.convert.call(null, f.name, f.value))
                            }
                            a[t.attributePrefix + f.name] = g
                        }
                        var v = e.prefix;
                        return v && (a.__cnt++,
                        a.__prefix = v),
                        a["#text"] && (a.__text = a["#text"],
                        a.__text instanceof Array && (a.__text = a.__text.join("\n")),
                        t.escapeMode && (a.__text = a.__text.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, "&")),
                        t.stripWhitespaces && (a.__text = a.__text.trim()),
                        delete a["#text"],
                        "property" === t.arrayAccessForm && delete a["#text_asArray"],
                        a.__text = function(e, n, r) {
                            if (t.datetimeAccessFormPaths.length > 0)
                                for (var s = r.split(".#")[0], i = 0; i < t.datetimeAccessFormPaths.length; i++) {
                                    var a = t.datetimeAccessFormPaths[i];
                                    if ("string" == typeof a) {
                                        if (a === s)
                                            return o(e)
                                    } else if (a instanceof RegExp) {
                                        if (a.test(s))
                                            return o(e)
                                    } else if ("function" == typeof a && a(s))
                                        return o(e)
                                }
                            return e
                        }(a.__text, 0, s + ".#text")),
                        a.hasOwnProperty("#cdata-section") && (a.__cdata = a["#cdata-section"],
                        delete a["#cdata-section"],
                        "property" === t.arrayAccessForm && delete a["#cdata-section_asArray"]),
                        1 === a.__cnt && a.__text ? a = a.__text : 0 === a.__cnt && "text" === t.emptyNodeForm ? a = "" : a.__cnt > 1 && void 0 !== a.__text && t.skipEmptyTextNodesForObj && (t.stripWhitespaces && "" === a.__text || "" === a.__text.trim()) && delete a.__text,
                        delete a.__cnt,
                        t.keepCData || a.hasOwnProperty("__text") || !a.hasOwnProperty("__cdata") ? (t.enableToStringFunc && (a.__text || a.__cdata) && (a.toString = function() {
                            return (this.__text ? this.__text : "") + (this.__cdata ? this.__cdata : "")
                        }
                        ),
                        a) : a.__cdata ? a.__cdata : ""
                    }
                    function c(e, s) {
                        return e.nodeType === n.DOCUMENT_NODE ? function(e) {
                            for (var s = {}, i = e.childNodes, o = 0; o < i.length; o++) {
                                var a = i.item(o);
                                if (a.nodeType === n.ELEMENT_NODE) {
                                    var u = r(a);
                                    t.ignoreRoot ? s = c(a, u) : s[u] = c(a, u)
                                }
                            }
                            return s
                        }(e) : e.nodeType === n.ELEMENT_NODE ? a(e, s) : e.nodeType === n.TEXT_NODE || e.nodeType === n.CDATA_SECTION_NODE ? e.nodeValue : null
                    }
                    function u(e, n, r, i) {
                        var o = "<" + (e && e.__prefix ? e.__prefix + ":" : "") + n;
                        if (r)
                            for (var a = 0; a < r.length; a++) {
                                var c = r[a]
                                  , u = e[c];
                                t.escapeMode && (u = s(u)),
                                o += " " + c.substr(t.attributePrefix.length) + "=",
                                t.useDoubleQuotes ? o += '"' + u + '"' : o += "'" + u + "'"
                            }
                        return o += i ? " />" : ">"
                    }
                    function m(e, t) {
                        return "</" + (e && e.__prefix ? e.__prefix + ":" : "") + t + ">"
                    }
                    function l(e, n) {
                        return "property" === t.arrayAccessForm && (r = n.toString(),
                        s = "_asArray",
                        -1 !== r.indexOf(s, r.length - s.length)) || 0 === n.toString().indexOf(t.attributePrefix) || 0 === n.toString().indexOf("__") || e[n]instanceof Function;
                        var r, s
                    }
                    function d(e) {
                        var t = 0;
                        if (e instanceof Object)
                            for (var n in e)
                                l(e, n) || t++;
                        return t
                    }
                    function p(e) {
                        var n = [];
                        if (e instanceof Object)
                            for (var r in e)
                                -1 === r.toString().indexOf("__") && 0 === r.toString().indexOf(t.attributePrefix) && n.push(r);
                        return n
                    }
                    function f(e) {
                        var n = "";
                        return e instanceof Object ? n += function(e) {
                            var n = "";
                            e.__cdata && (n += "<![CDATA[" + e.__cdata + "]]>");
                            e.__text && (t.escapeMode ? n += s(e.__text) : n += e.__text);
                            return n
                        }(e) : null !== e && (t.escapeMode ? n += s(e) : n += e),
                        n
                    }
                    function g(e, n, r) {
                        var s = "";
                        if (t.jsAttributeFilter && t.jsAttributeFilter.call(null, n, e))
                            return s;
                        if (t.jsAttributeConverter && (e = t.jsAttributeConverter.call(null, n, e)),
                        null != e && "" !== e || !t.selfClosingElements)
                            if ("object" == typeof e)
                                if ("[object Array]" === Object.prototype.toString.call(e))
                                    s += function(e, t, n) {
                                        var r = "";
                                        if (0 === e.length)
                                            r += u(e, t, n, !0);
                                        else
                                            for (var s = 0; s < e.length; s++)
                                                r += g(e[s], t, p(e[s]));
                                        return r
                                    }(e, n, r);
                                else if (e instanceof Date)
                                    s += u(e, n, r, !1),
                                    s += t.jsDateUTC ? e.toUTCString() : e.toISOString(),
                                    s += m(e, n);
                                else {
                                    var i = d(e);
                                    i > 0 || e.__text || e.__cdata ? (s += u(e, n, r, !1),
                                    s += h(e),
                                    s += m(e, n)) : t.selfClosingElements ? s += u(e, n, r, !0) : (s += u(e, n, r, !1),
                                    s += m(e, n))
                                }
                            else
                                s += u(e, n, r, !1),
                                s += f(e),
                                s += m(e, n);
                        else
                            s += u(e, n, r, !0);
                        return s
                    }
                    function h(e) {
                        var t = ""
                          , n = d(e);
                        if (n > 0)
                            for (var r in e)
                                if (!l(e, r)) {
                                    var s = e[r]
                                      , i = p(s);
                                    t += g(s, r, i)
                                }
                        return t += f(e)
                    }
                    function y(t) {
                        if (void 0 === t)
                            return null;
                        if ("string" != typeof t)
                            return null;
                        var n = null
                          , r = null;
                        if (e)
                            n = new e,
                            r = n.parseFromString(t, "text/xml");
                        else if (window && window.DOMParser) {
                            n = new window.DOMParser;
                            var s = null
                              , i = window.ActiveXObject || "ActiveXObject"in window;
                            if (!i)
                                try {
                                    s = n.parseFromString("INVALID", "text/xml").childNodes[0].namespaceURI
                                } catch (e) {
                                    s = null
                                }
                            try {
                                r = n.parseFromString(t, "text/xml"),
                                null !== s && r.getElementsByTagNameNS(s, "parsererror").length > 0 && (r = null)
                            } catch (e) {
                                r = null
                            }
                        } else
                            0 === t.indexOf("<?") && (t = t.substr(t.indexOf("?>") + 2)),
                            (r = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
                            r.loadXML(t);
                        return r
                    }
                    this.asArray = function(e) {
                        return null == e ? [] : e instanceof Array ? e : [e]
                    }
                    ,
                    this.toXmlDateTime = function(e) {
                        return e instanceof Date ? e.toISOString() : "number" == typeof e ? new Date(e).toISOString() : null
                    }
                    ,
                    this.asDateTime = function(e) {
                        return "string" == typeof e ? o(e) : e
                    }
                    ,
                    this.xml2dom = function(e) {
                        return y(e)
                    }
                    ,
                    this.dom2js = function(e) {
                        return c(e, null)
                    }
                    ,
                    this.js2dom = function(e) {
                        var t = this.js2xml(e);
                        return y(t)
                    }
                    ,
                    this.xml2js = function(e) {
                        var t = y(e);
                        return null != t ? this.dom2js(t) : null
                    }
                    ,
                    this.js2xml = function(e) {
                        return h(e)
                    }
                    ,
                    this.getVersion = function() {
                        return "3.1.1"
                    }
                }
            }
            ) ? r.apply(t, s) : r) || (e.exports = i)
        }()
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(9), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        var o = n(50).fn
          , a = n(0)
          , c = n(317)
          , u = n(26)
          , m = n(5)
          , l = n(172)
          , d = n(316)
          , p = n(171);
        o.sendText = function(e) {
            return this.processCallback(e),
            e.msg = new this.message.TextMessage(e),
            this.sendMsg(e)
        }
        ,
        o.previewFile = function(e) {
            if (a.verifyOptions(e, "done", "msg::previewFile"),
            e.type || (e.type = "file"),
            a.verifyParamPresentJustOne(e, "dataURL blob fileInput filePath wxFilePath fileObject", "msg::previewFile"),
            a.exist(e.maxSize) && a.verifyParamType("maxSize", e.maxSize, "number", "api::previewFile"),
            a.exist(e.commonUpload) && a.verifyParamType("commonUpload", e.commonUpload, "boolean", "api::previewFile"),
            e.nosSurvivalTime ? (a.verifyParamType("nosSurvivalTime", e.nosSurvivalTime, "number", "api::Base.getInstance"),
            a.verifyParamMin("nosSurvivalTime", e.nosSurvivalTime, 86400, "api::Base.getInstance")) : e.nosSurvivalTime = this.nosSurvivalTime,
            e.filePath = e.filePath || e.wxFilePath,
            delete e.wxFilePath,
            e.dataURL)
                e.blob = p.fromDataURL(e.dataURL);
            else if (e.blob)
                ;
            else if (e.fileInput) {
                if (e.fileInput = a.verifyFileInput(e.fileInput, "msg::previewFile"),
                e.fileInput.files) {
                    if (!e.fileInput.files.length)
                        return void e.done(u.newNoFileError("请选择" + e.type + "文件", {
                            callFunc: "msg::previewFile",
                            fileInput: e.fileInput
                        }), e);
                    e.fileSize = e.fileInput.files[0].size
                }
                e.fileInputName = a.getFileName(e.fileInput)
            }
            this.processCallback(e);
            var t = JSON.stringify(l.genResponseBody(e.type) || {}).replace(/"/gi, '\\"')
              , n = null
              , r = e.transcode ? "getNosTokenTrans" : "getNosToken";
            if (e.transcode) {
                a.verifyOptions(e, "fileInput", "msg::previewFile");
                var s = a.getFileInfo(e.fileInput);
                n = {
                    transToken: {
                        name: s.name,
                        type: s.transcodeType,
                        transType: "png" === e.transcode ? 11 : 10,
                        size: s.size,
                        body: t
                    }
                }
            } else
                n = t;
            this[r]({
                responseBody: n,
                nosToken: {
                    nosScene: e.nosScene || this.nosScene,
                    nosSurvivalTime: e.nosSurvivalTime
                },
                callback: function(t, n) {
                    t ? e.done(t) : (e.transcode ? (e.nosToken = n.nosToken,
                    e.docId = n.docId) : e.nosToken = n,
                    this._doPreviewFile(e))
                }
                .bind(this)
            })
        }
        ,
        o._doPreviewFile = function(e) {
            var t, n = this, r = e.uploaddone, s = m.genUploadUrl(e.nosToken.bucket), o = m.genChunkUploadUrl(e.nosToken);
            e.commonUpload || !o || m.isWeixinApp || m.isNodejs || m.isRN ? (e.commonUpload = !0,
            t = s) : t = o;
            var c = this.assembleUploadParams(e.nosToken);
            function p(t, s, i) {
                if (e.uploaddone = r,
                t)
                    e.done(t, e.callback.options);
                else {
                    if (s = l.parseResponse(s, n.options.exifOrientation),
                    i || (s.url = m.genDownloadUrl(e.nosToken, c.Object),
                    e.nosToken.shortUrl && (s._url_safe = e.nosToken.shortUrl)),
                    a.exist(e.fileInputName))
                        s.name = e.fileInputName;
                    else if (e.blob) {
                        var o = e.blob.name;
                        if (s.name = o || "blob-" + s.md5,
                        !o) {
                            var u = e.blob.type;
                            s.ext = u.slice(u.lastIndexOf("/") + 1)
                        }
                    } else
                        e.filePath ? s.name = e.filePath : e.fileObject && (s.name = e.fileObject.fileName);
                    if (!s.ext) {
                        var d = s.name.lastIndexOf(".");
                        s.ext = -1 === d ? "unknown" : s.name.slice(d + 1)
                    }
                    s.size = s.size || 0,
                    e.done(null, a.copy(s))
                }
            }
            if (m.isWeixinApp)
                a.verifyOptions(e, "filePath", "msg::_doPreviewFile"),
                n.fileQuickTransfer(e, p, function() {
                    wx.uploadFile({
                        url: t,
                        filePath: e.filePath,
                        name: "file",
                        formData: c,
                        fail: function(e) {
                            n.protocol.logger.log("error:", "api::msg:upload file failed", e)
                        },
                        success: function(e) {
                            if (200 === e.statusCode)
                                try {
                                    p(null, JSON.parse(e.data))
                                } catch (t) {
                                    n.protocol.logger.log("error:", "parse wx upload file res error", t),
                                    p({
                                        code: "PARSE_WX_UPLOAD_FILE_RES_ERROR",
                                        str: e.data,
                                        msg: e.errMsg
                                    })
                                }
                            else
                                p({
                                    code: e.statusCode,
                                    msg: e.errMsg
                                })
                        }
                    })
                });
            else if (m.isNodejs) {
                var f = {
                    url: t,
                    name: "file",
                    formData: c,
                    success: function(e) {
                        if (200 === e.statusCode)
                            try {
                                p(null, JSON.parse(e.data))
                            } catch (t) {
                                n.protocol.logger.log("error:", "parse nodejs upload file res error", t),
                                p({
                                    code: "PARSE_NODEJS_UPLOAD_FILE_RES_ERROR",
                                    str: e.data,
                                    msg: e.errMsg
                                })
                            }
                        else
                            p({
                                code: e.statusCode,
                                msg: e.errMsg
                            })
                    },
                    fail: function(e) {
                        n.protocol.logger.log("error:", "api::msg:upload file failed", e)
                    }
                };
                if (e.filePath)
                    f.filePath = e.filePath;
                else {
                    if ("object" !== (0,
                    i.default)(e.fileObject))
                        throw new u("Nodejs上传fileObject参数类型应如 {fileName:..,fileData:..} ");
                    f.fileData = e.fileObject.fileData
                }
                n.fileQuickTransfer(e, p, function() {
                    d.uploadFile(f)
                })
            } else if (m.isRN) {
                var g = {
                    url: t,
                    name: "file",
                    formData: c,
                    filePath: e.filePath,
                    success: function(e) {
                        if (e.ok && 200 === e.status)
                            try {
                                e.md5 = e.headers.map && e.headers.map.etag && e.headers.map.etag[0] || "UNKNOWN",
                                p(null, e)
                            } catch (t) {
                                n.protocol.logger.log("error:", "parse React Native upload file res error", t),
                                p({
                                    code: "PARSE_React_Native_UPLOAD_FILE_RES_ERROR",
                                    res: e
                                })
                            }
                        else
                            p({
                                code: e.status,
                                msg: e.statusText
                            })
                    },
                    fail: function(e) {
                        n.protocol.logger.log("error:", "api::msg:upload file failed", e)
                    }
                };
                n.fileQuickTransfer(e, p, function() {
                    d.uploadFile(g)
                })
            } else
                e.uploaddone = p,
                e.url = t,
                e.params = c,
                e.fileName = "file",
                n.fileQuickTransfer(e, p, function() {
                    return new d(e)
                })
        }
        ,
        o.fileQuickTransfer = function(e, t, n) {
            var r = this;
            e = e || {},
            t instanceof Function || (t = function() {}
            ),
            n instanceof Function || (n = function() {}
            );
            var s = e.fastPass;
            if (s)
                try {
                    s = JSON.parse(s),
                    e.fastPass = s
                } catch (e) {
                    r.protocol.logger.error("快传参数解析失败")
                }
            var i = e.fileInputName || e.name || e.blob && e.blob.name || ""
              , o = e.fileSize || e.size || e.blob && e.blob.size || 0
              , a = s ? ((s.md5 || e.digest || "") + "").trim() : ""
              , c = e.type || e.blob && e.blob.type;
            if (a && o >= m.threshold) {
                var u = !0
                  , l = {
                    name: i,
                    md5: a,
                    ext: i.slice(i.lastIndexOf(".") + 1),
                    type: c
                };
                switch (c) {
                case "image":
                    s && s.w && s.h ? (l.w = s.w,
                    l.h = s.h) : (u = !1,
                    r.protocol.logger.error("快传 image-preview 文件缺少参数 w 或 h"));
                    break;
                case "video":
                    s && s.w && s.h && s.dur ? (l.w = s.w,
                    l.h = s.h,
                    l.dur = s.dur) : (u = !1,
                    r.protocol.logger.error("快传 video 文件缺少参数 w 或 h 或 dur"));
                    break;
                case "audio":
                    s && s.dur ? l.dur = s.dur : (u = !1,
                    r.protocol.logger.error("快传 audio 文件缺少参数 dur"))
                }
                if (!u)
                    return void n();
                var d = {
                    fileQuickTransfer: {
                        md5: a
                    }
                };
                return o && (d.fileQuickTransfer.size = o),
                this.protocol.sendCmd("fileQuickTransfer", d, function(e, s, i) {
                    !e && i && i.fileQuickTransfer && i.fileQuickTransfer.url || (r.protocol.logger.error("misc::fileQuickTransfer: not found", e, s, i),
                    n()),
                    i && i.fileQuickTransfer && i.fileQuickTransfer.threshold && (m.threshold = i.fileQuickTransfer.threshold || 0),
                    i && i.fileQuickTransfer && i.fileQuickTransfer.url && (l.size = o || i.fileQuickTransfer.size,
                    l.url = i.fileQuickTransfer.url,
                    i.fileQuickTransfer._url_safe && (l._url_safe = i.fileQuickTransfer._url_safe),
                    t(e, l, !0))
                })
            }
            n()
        }
        ,
        o.sendFile = function(e) {
            if (e.type || (e.type = "file"),
            a.verifyParamPresentJustOne(e, "dataURL blob fileInput file filePath wxFilePath fileObject", "msg::sendFile"),
            a.exist(e.maxSize) && a.verifyParamType("maxSize", e.maxSize, "number", "api::previewFile"),
            a.exist(e.commonUpload) && a.verifyParamType("commonUpload", e.commonUpload, "boolean", "api::previewFile"),
            this.processCallback(e),
            e.filePath = e.filePath || e.wxFilePath,
            delete e.wxFilePath,
            e.dataURL)
                this._previewAndSendFile(e);
            else if (e.blob)
                this._previewAndSendFile(e);
            else if (e.fileInput) {
                if (e.fileInput = a.verifyFileInput(e.fileInput, "msg::sendFile"),
                e.fileInput.files && !e.fileInput.files.length)
                    return void e.done(u.newNoFileError("请选择" + e.type + "文件", {
                        callFunc: "msg::sendFile",
                        fileInput: e.fileInput
                    }), e.callback.options);
                this._previewAndSendFile(e)
            } else if (e.filePath || e.fileObject)
                this._previewAndSendFile(e);
            else if (e.file) {
                var t, n = e.file._url_safe;
                return n && (t = e.file.url,
                e.file.url = n,
                delete e.file._url_safe),
                e.msg = new this.message.FileMessage(e),
                this.sendMsg(e, t)
            }
        }
        ,
        o._previewAndSendFile = function(e) {
            var t = this;
            a.verifyCallback(e, "uploaddone beforesend", "msg::_previewAndSendFile");
            var n = e.done;
            e.done = function(r, s) {
                if (e.done = n,
                r)
                    e.uploaddone(r, e.callback.options),
                    e.done(r, e.callback.options);
                else {
                    if (/chatroom/.test(e.scene))
                        return;
                    var i;
                    e.uploaddone(null, a.copy(s));
                    var o = s._url_safe;
                    o && (i = s.url,
                    s.url = o,
                    delete s._url_safe),
                    e.file = s,
                    e.msg = new t.message.FileMessage(e),
                    e.beforesend(t.sendMsg(e, i))
                }
            }
            ,
            t.previewFile(e)
        }
        ,
        o.assembleUploadParams = function(e) {
            return e ? {
                Object: decodeURIComponent(e.objectName),
                "x-nos-token": e.token,
                "x-nos-entity-type": "json"
            } : null
        }
        ,
        o.deleteFile = function(e) {
            a.verifyParamPresentJustOne(e, "docId", "msg::deleteFile"),
            this.removeFile({
                docId: e.docId,
                callback: function(t, n) {
                    t ? e.error && e.error(t, n) : e.success && e.success(n)
                }
            })
        }
        ,
        o.getFile = function(e) {
            a.verifyParamPresentJustOne(e, "docId", "msg::getFile"),
            this.fetchFile({
                docId: e.docId,
                callback: function(t, n) {
                    t ? e.error && e.error(t, n) : e.success && e.success(n.info)
                }
            })
        }
        ,
        o.getFileList = function(e) {
            var t = e.fromDocId
              , n = void 0 === t ? "" : t
              , r = e.limit
              , s = void 0 === r ? 10 : r
              , i = {
                limit: s
            };
            n && (i.fromDocId = n),
            this.fetchFileList({
                fileListParam: i,
                callback: function(t, n) {
                    t ? (s > 30 && (t.message = t.message + "::文档条数超过限制:30"),
                    e.error && e.error(t, n)) : e.success && e.success(n)
                }
            })
        }
        ,
        o.sendGeo = function(e) {
            return this.processCallback(e),
            e.msg = new this.message.GeoMessage(e),
            this.sendMsg(e)
        }
        ,
        o.sendTipMsg = function(e) {
            return this.processCallback(e),
            e.msg = new this.message.TipMessage(e),
            this.sendMsg(e)
        }
        ,
        o.sendCustomMsg = function(e) {
            return this.processCallback(e),
            e.msg = new this.message.CustomMessage(e),
            this.sendMsg(e)
        }
        ,
        o.sendRobotMsg = function(e) {
            return this.processCallback(e),
            e.msg = new this.message.RobotMessage(e),
            this.sendMsg(e)
        }
        ,
        o.sendMsg = function(e, t) {
            var n = this.protocol
              , r = e.msg
              , s = {}
              , i = !!e.isLocal;
            if (i && (e.time && (r.time = e.time),
            e.idClient && (r.idClient = e.idClient)),
            e.resend && ("out" !== e.flow || "fail" !== e.status))
                return a.onError("只能重发发送失败的消息");
            e.callback.options.idClient = r.idClient,
            this.beforeSendMsg(e, s);
            var o = e.rtnMsg = this.formatReturnMsg(r);
            return t && !this.options.keepNosSafeUrl && o.file && (o.file._url_safe = o.file.url,
            o.file.url = t,
            "audio" === o.type && (o.file.mp3Url = t + (~t.indexOf("?") ? "&" : "?") + "audioTrans&type=mp3")),
            o.hasOwnProperty("chatroomId") && !o.chatroomId ? a.onError("聊天室未连接") : (i && (o.status = "success",
            o.isLocal = !0),
            n.storeSendMsg && (s.promise = n.storeSendMsg(o)),
            e.cbaop = function(e) {
                if (e && "server" !== e.from)
                    return o.status = "fail",
                    n.updateSendMsgError && n.updateSendMsgError(o),
                    o
            }
            ,
            i || (t && !this.options.keepNosSafeUrl && e.callback && (e.callback.originUrl = t),
            s.msg = r,
            this.sendCmd(e.cmd, s, e.callback)),
            this.afterSendMsg(e),
            i && setTimeout(function() {
                o = a.simpleClone(o),
                e.done(null, o)
            }, 0),
            a.copy(o))
        }
        ,
        o.beforeSendMsg = function() {}
        ,
        o.afterSendMsg = function() {}
        ,
        o.formatReturnMsg = function(e) {
            return e = a.copy(e),
            this.protocol.completeMsg(e),
            e.status = "sending",
            e = this.message.reverse(e)
        }
        ,
        o.resendMsg = function(e) {
            return a.verifyOptions(e, "msg", "msg::resendMsg"),
            this.trimMsgFlag(e),
            e.resend = !0,
            this._sendMsgByType(e)
        }
        ,
        o.forwardMsg = function(e) {
            return a.verifyOptions(e, "msg", "msg::forwardMsg"),
            this.trimMsgFlag(e),
            this.beforeForwardMsg(e),
            e.forward = !0,
            e.msg.idClient = a.guid(),
            this._sendMsgByType(e)
        }
        ,
        o.trimMsgFlag = function(e) {
            e && e.msg && (e.msg = a.copy(e.msg),
            delete e.msg.resend,
            delete e.msg.forward)
        }
        ,
        o.beforeForwardMsg = function() {}
        ,
        o._sendMsgByType = function(e) {
            switch (a.verifyOptions(e, "msg", "msg::_sendMsgByType"),
            a.verifyParamValid("msg.type", e.msg.type, this.message.validTypes, "msg::_sendMsgByType"),
            a.merge(e, e.msg),
            e.type) {
            case "text":
                return this.sendText(e);
            case "image":
            case "audio":
            case "video":
            case "file":
                return this.sendFile(e);
            case "geo":
                return this.sendGeo(e);
            case "custom":
                return this.sendCustomMsg(e);
            case "tip":
                return this.sendTipMsg(e);
            default:
                throw new u("不能发送类型为 " + e.type + " 的消息")
            }
        }
        ,
        o.parseRobotTemplate = function(e) {
            if (/<template[^>\/]+\/>/.test(e))
                return {
                    raw: e,
                    json: [{
                        type: "text",
                        name: "",
                        text: ""
                    }]
                };
            if (!/<template[^>\/]+>/.test(e))
                return {
                    raw: e,
                    json: [{
                        type: "text",
                        name: "",
                        text: e
                    }]
                };
            var t = new c({
                escapeMode: !1
            });
            e = e.replace(/<template [^>]+>/, "<template>");
            var n = t.xml2js(e);
            n = n.template.LinearLayout,
            Array.isArray(n) || (n = [n]);
            var r = [];
            return n = n.forEach(function(e) {
                e.image && (r = r.concat(i(e))),
                e.text && (r = r.concat(s(e))),
                e.link && (r = r.concat(function(e) {
                    if (e.link) {
                        var t = e.link;
                        Array.isArray(t) || (t = [t]),
                        t = t.map(function(e) {
                            return e.image && (e.image = i(e)),
                            e.text && (e.text = s(e)),
                            "url" === e._type ? (e.type = "url",
                            e.style = e._style || "",
                            e.target = e._target,
                            delete e._target,
                            delete e._style) : "block" === e._type && (e.type = "block",
                            e.style = e._style || "",
                            e.params = e._params || "",
                            e.target = e._target,
                            delete e._params,
                            delete e._target,
                            delete e._style),
                            delete e._type,
                            e
                        }),
                        e.link = t
                    }
                    return e.link
                }(e)))
            }),
            {
                raw: e,
                json: r
            };
            function s(e) {
                return Array.isArray(e.text) || (e.text = [e.text]),
                e.text = e.text.map(function(e) {
                    return {
                        type: "text",
                        name: e._name,
                        text: e.__text
                    }
                }),
                e.text
            }
            function i(e) {
                return Array.isArray(e.image) || (e.image = [e.image]),
                e.image = e.image.map(function(e) {
                    return {
                        type: "image",
                        name: e._name,
                        url: e._url
                    }
                }),
                e.image
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(50).fn;
        r.isConnected = function() {
            return !!this.protocol && this.protocol.isConnected()
        }
        ,
        r.connect = function() {
            this.protocol.appLogin = 0,
            this.protocol.connect(!0)
        }
        ,
        r.disconnect = function(e) {
            e = e || {},
            this.protocol.disconnect(e.done)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(21)
          , s = n(0);
        n(39);
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s.merge(this, {
                options: e,
                debug: !1,
                api: "log",
                style: "color:blue;",
                log: s.emptyFunc,
                info: s.emptyFunc,
                warn: s.emptyFunc,
                error: s.emptyFunc
            }),
            this.prefix = e.prefix || "",
            this.setDebug(e.debug)
        }
        var o = i.prototype
          , a = ["Chrome", "Safari", "Firefox"];
        o.setDebug = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = this;
            if (t.debug = e,
            e.style && (t.style = e.style),
            t.debug && s.exist(console)) {
                var n = console;
                t.debug = function() {
                    var e = t.formatArgs(arguments);
                    -1 !== a.indexOf(r.name) && s.isString(e[0]) && (e[0] = "%c" + e[0],
                    e.splice(1, 0, t.style)),
                    t._log("debug", e)
                }
                ,
                t.log = function() {
                    var e = t.formatArgs(arguments);
                    -1 !== a.indexOf(r.name) && s.isString(e[0]) && (e[0] = "%c" + e[0],
                    e.splice(1, 0, t.style)),
                    t._log("log", e)
                }
                ,
                t.info = function() {
                    var e = t.formatArgs(arguments);
                    -1 !== a.indexOf(r.name) && s.isString(e[0]) && (e[0] = "%c" + e[0],
                    e.splice(1, 0, t.style)),
                    t._log("info", e)
                }
                ,
                t.warn = function() {
                    var e = t.formatArgs(arguments);
                    -1 !== a.indexOf(r.name) && s.isString(e[0]) && (e[0] = "%c" + e[0],
                    e.splice(1, 0, t.style)),
                    t._log("warn", e)
                }
                ,
                t.error = function() {
                    var e = t.formatArgs(arguments);
                    -1 !== a.indexOf(r.name) && s.isString(e[0]) && (e[0] = "%c" + e[0],
                    e.splice(1, 0, t.style)),
                    t._log("error", e)
                }
                ,
                t._log = function(e, r) {
                    var i = t.options.logFunc
                      , o = null;
                    if (i && (i[e] && (o = i[e]),
                    s.isFunction(o)))
                        o.apply(i, r);
                    else if (n[e])
                        try {
                            n[e].apply ? t.chrome(e, r) : t.ie(e, r)
                        } catch (e) {}
                }
                ,
                t.chrome = function(e, s) {
                    -1 !== a.indexOf(r.name) ? n[e].apply(n, s) : t.ie(e, s)
                }
                ,
                t.ie = function(e, t) {
                    t.forEach(function(t) {
                        n[e](JSON.stringify(t, null, 4))
                    })
                }
            }
        }
        ,
        o.formatArgs = function(e) {
            e = [].slice.call(e, 0);
            var t = new Date
              , n = "[NIM LOG " + (c(t.getMonth() + 1) + "-" + c(t.getDate()) + " " + c(t.getHours()) + ":" + c(t.getMinutes()) + ":" + c(t.getSeconds()) + ":" + c(t.getMilliseconds(), 3)) + " " + this.prefix.toUpperCase() + "]  ";
            return s.isString(e[0]) ? e[0] = n + e[0] : e.splice(0, 0, n),
            e.forEach(function(t, n) {
                (s.isArray(t) || s.isObject(t)) && (e[n] = s.simpleClone(t))
            }),
            e
        }
        ;
        var c = function(e, t) {
            t = t || 2;
            for (var n = "" + e; n.length < t; )
                n = "0" + n;
            return n
        };
        e.exports = i
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        var r = n(132).fn
          , s = n(0);
        r.queueOffer = function(e) {
            s.verifyOptions(e, "elementKey elementValue", "msg::queueOffer"),
            e.transient ? e.transient = !0 : e.transient = !1,
            this.processCallback(e),
            this.sendCmd("queueOffer", e, e.callback)
        }
        ,
        r.queuePoll = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e.elementKey = e.elementKey || "",
            this.processCallback(e),
            this.sendCmd("queuePoll", e, e.callback)
        }
        ,
        r.queueList = function(e) {
            this.processCallback(e),
            this.sendCmd("queueList", e, e.callback)
        }
        ,
        r.peak = function(e) {
            this.processCallback(e),
            this.sendCmd("peak", e, e.callback)
        }
        ,
        r.queueDrop = function(e) {
            this.processCallback(e),
            this.sendCmd("queueDrop", e, e.callback)
        }
        ,
        r.queueChange = function(e) {
            s.verifyOptions(e, "elementMap", "msg::queueOffer"),
            e.needNotify ? (e.needNotify = !0,
            s.verifyOptions(e, "notifyExt", "msg::queueOffer")) : e.needNotify = !1,
            this.processCallback(e),
            this.sendCmd("queueChange", e, e.callback)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = r.undef
          , i = r.verifyOptions
          , o = r.verifyParamType
          , a = n(184)
          , c = n(132).fn;
        c.updateMyChatroomMemberInfo = function(e) {
            i(e, "member needNotify", "member::updateMyChatroomMemberInfo"),
            o("needNotify", e.needNotify, "boolean", "member::updateMyChatroomMemberInfo"),
            e.needSave = e.needSave || !1,
            o("needSave", e.needSave, "boolean", "member::updateMyChatroomMemberInfo"),
            this.processCustom(e),
            this.processCallback(e),
            e.chatroomMember = new a(e.member),
            this.sendCmd("updateMyChatroomMemberInfo", e)
        }
        ,
        c.getChatroomMembers = function(e) {
            i(e, "guest", "member::getChatroomMembers"),
            o("guest", e.guest, "boolean", "member::getChatroomMembers"),
            s(e.time) ? e.time = 0 : o("time", e.time, "number", "member::getChatroomMembers"),
            s(e.limit) ? e.limit = 100 : o("limit", e.limit, "number", "member::getChatroomMembers"),
            this.processCallback(e),
            e.type = e.guest ? 1 : 0,
            !e.guest && e.onlyOnline && (e.type = 2),
            this.sendCmd("getChatroomMembers", e)
        }
        ,
        c.getChatroomMembersInfo = function(e) {
            i(e, "accounts", "member::getChatroomMembersInfo"),
            o("accounts", e.accounts, "array", "member::getChatroomMembersInfo"),
            this.processCallback(e),
            this.sendCmd("getChatroomMembersInfo", e)
        }
        ,
        c.markChatroomIdentity = function(e) {
            i(e, "identity", "member::markChatroomIdentity"),
            e.type = {
                manager: 1,
                common: 2,
                black: -1,
                mute: -2
            }[e.identity],
            delete e.identity,
            isNaN(e.type) ? i(e, "identity", 'member::markChatroomIdentity. The valid value of the identity is "manager" or "common" or "black" or "mute".') : this.markChatroomMember(e)
        }
        ,
        c.markChatroomManager = function(e) {
            e.type = 1,
            this.markChatroomMember(e)
        }
        ,
        c.markChatroomCommonMember = function(e) {
            e.type = 2,
            this.markChatroomMember(e)
        }
        ,
        c.markChatroomBlacklist = function(e) {
            e.type = -1,
            this.markChatroomMember(e)
        }
        ,
        c.markChatroomGaglist = function(e) {
            e.type = -2,
            this.markChatroomMember(e)
        }
        ,
        c.markChatroomMember = function(e) {
            i(e, "account type isAdd", "member::markChatroomMember"),
            o("isAdd", e.isAdd, "boolean", "member::markChatroomMember"),
            s(e.level) ? e.level = 0 : o("level", e.level, "number", "member::markChatroomMember");
            this.processCustom(e),
            this.processCallback(e),
            this.sendCmd("markChatroomMember", e)
        }
        ,
        c.kickChatroomMember = function(e) {
            i(e, "account", "member::kickChatroomMember"),
            this.processCustom(e),
            this.processCallback(e),
            this.sendCmd("kickChatroomMember", e)
        }
        ,
        c.updateChatroomMemberTempMute = function(e) {
            i(e, "account duration needNotify", "member::updateChatroomMemberTempMute"),
            o("duration", e.duration, "number", "member::updateChatroomMemberTempMute"),
            o("needNotify", e.needNotify, "boolean", "member::updateChatroomMemberTempMute"),
            this.processCustom(e),
            this.processCallback(e),
            this.sendCmd("updateChatroomMemberTempMute", e)
        }
        ,
        c.getRobotList = function(e) {
            s(e.timetag) && (e.timetag = 0),
            this.processCallback(e),
            this.sendCmd("syncRobot", e)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = r.undef
          , i = n(132).fn;
        i.beforeSendMsg = function(e) {
            e.cmd = "sendMsg"
        }
        ;
        var o = {
            text: 0,
            image: 1,
            audio: 2,
            video: 3,
            geo: 4,
            notification: 5,
            file: 6,
            tip: 10,
            robot: 11,
            custom: 100
        };
        i.getHistoryMsgs = function(e) {
            r.verifyOptions(e),
            s(e.timetag) ? e.timetag = 0 : r.verifyParamType("timetag", e.timetag, "number", "msg::getHistoryMsgs"),
            s(e.limit) ? e.limit = 100 : r.verifyParamType("limit", e.limit, "number", "msg::getHistoryMsgs"),
            s(e.reverse) ? e.reverse = !1 : r.verifyParamType("reverse", e.reverse, "boolean", "msg::getHistoryMsgs"),
            s(e.msgTypes) ? e.msgTypes = [] : Array.isArray(e.msgTypes) ? (e.msgTypes = e.msgTypes.map(function(e) {
                return o[e]
            }),
            e.msgTypes = e.msgTypes.filter(function(e) {
                return "number" == typeof e
            })) : "number" == typeof o[e.msgTypes] ? e.msgTypes = [o[e.msgTypes]] : e.msgTypes = [];
            this.processCallback(e),
            this.sendCmd("getHistoryMsgs", e, function(t, n, r) {
                Array.isArray(r) && (r = r.map(function(e) {
                    return o[e.type] && (e.type = o[e.type]),
                    e
                })),
                e.callback(t, n, r)
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(72)
          , s = n(0)
          , i = {
            welcome: "00",
            text: "01",
            link: "03"
        }
          , o = {
            "01": "text",
            "02": "image",
            "03": "answer",
            11: "template"
        };
        function a(e) {
            s.verifyOptions(e, "content", "msg::RobotMessage");
            var t = e.content;
            switch (t.type) {
            case "welcome":
                s.undef(e.body) && (this.body = "欢迎消息");
                break;
            case "text":
                s.verifyOptions(t, "content", "msg::RobotMessage"),
                s.undef(e.body) && (this.body = t.content);
                break;
            case "link":
                s.verifyOptions(t, "target", "msg::RobotMessage")
            }
            t.type && (t.type = i[t.type]),
            t = {
                param: t,
                robotAccid: e.robotAccid
            },
            this.attach = JSON.stringify(t),
            e.type = "robot",
            r.call(this, e)
        }
        a.prototype = Object.create(r.prototype),
        a.reverse = function(e) {
            var t = r.reverse(e);
            if ("robot" === t.type) {
                var n = JSON.parse(e.attach);
                if (n.param && (n.param.type = o[n.param.type] || "unknown"),
                n.robotMsg) {
                    var i = (n = s.merge(n, n.robotMsg)).message;
                    "bot" === n.flag ? n.message = i.map(function(e) {
                        return e.type = o[e.type] || "unknown",
                        e
                    }) : n.flag,
                    delete n.robotMsg
                }
                t.content = n
            }
            return t
        }
        ,
        e.exports = a
    }
    , function(e, t, n) {
        "use strict";
        var r = n(72)
          , s = n(0);
        function i(e) {
            s.verifyOptions(e, "tip", "msg::TipMessage"),
            e.type = "tip",
            r.call(this, e),
            this.attach = e.tip
        }
        i.prototype = Object.create(r.prototype),
        i.reverse = function(e) {
            var t = r.reverse(e);
            return t.tip = e.attach,
            t
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = n(72)
          , s = n(0);
        function i(e) {
            s.verifyOptions(e, "content", "msg::CustomMessage"),
            e.type = "custom",
            r.call(this, e),
            "string" != typeof e.content && (e.content = JSON.stringify(e.content)),
            this.attach = e.content
        }
        i.prototype = Object.create(r.prototype),
        i.reverse = function(e) {
            var t = r.reverse(e);
            return t.content = e.attach,
            t
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0).notundef
          , s = n(72)
          , i = {
            301: "memberEnter",
            302: "memberExit",
            303: "blackMember",
            304: "unblackMember",
            305: "gagMember",
            306: "ungagMember",
            307: "addManager",
            308: "removeManager",
            309: "addCommon",
            310: "removeCommon",
            311: "closeChatroom",
            312: "updateChatroom",
            313: "kickMember",
            314: "addTempMute",
            315: "removeTempMute",
            316: "updateMemberInfo",
            317: "updateQueue",
            318: "muteRoom",
            319: "unmuteRoom",
            320: "batchUpdateQueue"
        };
        function o() {}
        o.prototype = Object.create(s.prototype),
        o.reverse = function(e) {
            var t = s.reverse(e);
            if (e.attach = e.attach ? "" + e.attach : "",
            e.attach) {
                var n = JSON.parse(e.attach);
                if (t.attach = {
                    type: i[n.id]
                },
                r(n.data)) {
                    var o = n.data;
                    if (r(o.operator) && (t.attach.from = o.operator),
                    r(o.opeNick) && (t.attach.fromNick = o.opeNick),
                    r(o.target) && (t.attach.to = o.target),
                    r(o.tarNick) && (t.attach.toNick = o.tarNick),
                    r(o.muteDuration) && (t.attach.duration = parseInt(o.muteDuration, 10)),
                    "memberEnter" === t.attach.type && (r(o.muted) ? t.attach.gaged = 1 == +o.muted : t.attach.gaged = !1,
                    r(o.tempMuted) ? t.attach.tempMuted = 1 == +o.tempMuted : t.attach.tempMuted = !1,
                    r(o.muteTtl) ? t.attach.tempMuteDuration = +o.muteTtl : t.attach.tempMuteDuration = 0),
                    r(o.ext) && (t.attach.custom = o.ext),
                    r(o.queueChange)) {
                        var a = JSON.parse(o.queueChange);
                        switch (a._e) {
                        case "OFFER":
                            t.attach.queueChange = {
                                type: "OFFER",
                                elementKey: a.key,
                                elementValue: a.content
                            };
                            break;
                        case "POLL":
                            t.attach.queueChange = {
                                type: "POLL",
                                elementKey: a.key,
                                elementValue: a.content
                            };
                            break;
                        case "DROP":
                            t.attach.queueChange = {
                                type: "DROP"
                            };
                            break;
                        case "PARTCLEAR":
                        case "BATCH_UPDATE":
                            t.attach.queueChange = {
                                type: a._e,
                                elementKv: a.kvObject
                            }
                        }
                    }
                }
            } else
                t.attach = {};
            return t
        }
        ,
        e.exports = o
    }
    , function(e, t, n) {
        "use strict";
        var r = n(72)
          , s = n(0);
        function i(e) {
            e.type = "geo",
            s.verifyOptions(e, "geo", "msg::GeoMessage"),
            s.verifyOptions(e.geo, "lng lat title", !0, "geo.", "msg::GeoMessage"),
            s.verifyParamType("geo.lng", e.geo.lng, "number", "msg::GeoMessage"),
            s.verifyParamType("geo.lat", e.geo.lat, "number", "msg::GeoMessage"),
            s.verifyParamType("geo.title", e.geo.title, "string", "msg::GeoMessage"),
            r.call(this, e),
            this.attach = JSON.stringify(e.geo)
        }
        i.prototype = Object.create(r.prototype),
        i.reverse = function(e) {
            var t = r.reverse(e);
            return e.attach = e.attach ? "" + e.attach : "",
            t.geo = e.attach ? JSON.parse(e.attach) : {},
            t
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = n(131)
          , s = n(0);
        function i() {}
        i.prototype = Object.create(r.prototype),
        i.verifyFile = function(e, t) {
            s.verifyOptions(e, "dur w h", !0, "file.", t)
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = n(131)
          , s = n(0);
        function i() {}
        i.prototype = Object.create(r.prototype),
        i.verifyFile = function(e, t) {
            s.verifyOptions(e, "dur", !0, "file.", t)
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = n(131);
        function i() {}
        i.prototype = Object.create(s.prototype),
        i.verifyFile = function(e, t) {
            r.verifyOptions(e, "w h", !0, "file.", t)
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = n(72)
          , s = n(0);
        function i(e) {
            s.verifyOptions(e, "text", "msg::TextMessage"),
            e.type = "text",
            r.call(this, e),
            this.attach = e.text,
            this.body = ""
        }
        i.prototype = Object.create(r.prototype),
        i.reverse = function(e) {
            var t = r.reverse(e);
            return t.text = e.attach,
            t
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = function(e) {
            this.account = e.account
        }
          , i = s.prototype
          , o = i.Message = n(72)
          , a = i.TextMessage = n(396)
          , c = i.FileMessage = n(131)
          , u = i.GeoMessage = n(392)
          , m = i.NotificationMessage = n(391)
          , l = i.CustomMessage = n(390)
          , d = i.TipMessage = n(389)
          , p = i.RobotMessage = n(388);
        i.validTypes = o.validTypes,
        i.reverse = function(e) {
            var t;
            switch (o.getType(e)) {
            case "text":
                t = a.reverse(e);
                break;
            case "image":
            case "audio":
            case "video":
            case "file":
                t = c.reverse(e);
                break;
            case "geo":
                t = u.reverse(e);
                break;
            case "notification":
                t = m.reverse(e);
                break;
            case "custom":
                t = l.reverse(e);
                break;
            case "tip":
                t = d.reverse(e);
                break;
            case "robot":
                t = p.reverse(e);
                break;
            default:
                t = o.reverse(e)
            }
            return o.setExtra(t, this.account),
            t
        }
        ,
        i.reverseMsgs = function(e, t) {
            var n, s, i = this;
            return e.map(function(e) {
                return e = i.reverse(e),
                t && ((n = t.modifyObj) && (e = r.merge(e, n)),
                s = t.mapper,
                r.isFunction(s) && (e = s(e))),
                e
            })
        }
        ,
        e.exports = s
    }
    , function(e, t, n) {
        "use strict";
        var r = n(121).fn
          , s = n(184);
        r.onChatroomMembersInfo = r.onChatroomMembers = function(e) {
            e.error || (e.obj.members = s.reverseMembers(e.content.members))
        }
        ,
        r.onMarkChatroomMember = function(e) {
            e.error || (e.obj.member = s.reverse(e.content.chatroomMember))
        }
        ,
        r.onSyncRobot = function(e) {
            !e.error && this.options.onrobots ? this.options.onrobots(null, e.content) : this.ontions.onrobots(e.error, {})
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(121).fn
          , s = n(0);
        r.completeMsg = function(e) {
            e.chatroomId = this.chatroom && this.chatroom.id,
            e.from = this.options.account,
            e.fromClientType = "Web",
            e.time || (e.time = +new Date)
        }
        ,
        r.onMsg = function(e) {
            var t = this.message.reverse(e.content.msg);
            this.checkMsgUnique(t) && (this.msgBuffer.push(t),
            this.msgFlushTimer || this.startMsgFlushTimer())
        }
        ,
        r.startMsgFlushTimer = function() {
            var e = this
              , t = e.options;
            e.msgFlushTimer = setTimeout(function() {
                var n = e.msgBuffer.splice(0, t.msgBufferSize);
                e.options.onmsgs(n),
                e.msgBuffer.length ? e.startMsgFlushTimer() : delete e.msgFlushTimer
            }, t.msgBufferInterval)
        }
        ,
        r.checkMsgUnique = s.genCheckUniqueFunc("idClient"),
        r.onSendMsg = function(e) {
            var t = e.obj.msg;
            e.error ? t.status = "fail" : (t = e.content.msg).status = "success",
            t = this.message.reverse(t),
            e.obj = t
        }
        ,
        r.onHistoryMsgs = function(e) {
            e.error || (e.obj || (e.obj = {}),
            e.obj.msgs = this.message.reverseMsgs(e.content.msgs))
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(121).fn
          , s = n(56)
          , i = n(0);
        r.assembleLogin = function() {
            var e = this.options;
            this.sdkSession = this.genSessionKey();
            var t = {
                appKey: e.appKey,
                account: e.account,
                deviceId: s.deviceId,
                chatroomId: e.chatroomId,
                session: this.sdkSession,
                appLogin: this.appLogin || 0
            };
            return {
                type: 1,
                login: t = i.merge(t, i.filterObj(e, "chatroomNick chatroomAvatar chatroomCustom chatroomEnterCustom isAnonymous")),
                imLogin: this.assembleIMLogin()
            }
        }
        ,
        r.afterLogin = function(e) {
            var t = e.chatroom;
            this.chatroom = t,
            this.notifyLogin()
        }
        ,
        r.kickedReasons = ["", "chatroomClosed", "managerKick", "samePlatformKick", "silentlyKick", "blacked"],
        r.kickedMessages = ["", "聊天室关闭了", "被房主或者管理员踢出", "不允许同一个帐号在多个地方同时登录", "悄悄被踢", "被拉黑了"]
    }
    , function(e, t, n) {
        "use strict";
        var r = n(121).fn
          , s = n(5)
          , i = n(39);
        r.refreshSocketUrl = function() {
            this.socketUrlsBackup = this.socketUrlsBackup || [],
            this.socketUrls = this.socketUrlsBackup.slice(0),
            this.logger.info("link::refreshSocketUrl"),
            this.connectToUrl(this.getNextSocketUrl()),
            this.getNosChunkUploadUrl()
        }
        ,
        r.getNosChunkUploadUrl = function() {
            if (!s.isWeixinApp && null == s.chunkUploadUrl) {
                var e = this
                  , t = s.lbsUrl;
                e.logger.info("link::getNosChunkUploadUrl: ajax webconf " + t),
                i(t, {
                    onload: function(e) {
                        e = JSON.parse(e),
                        s.chunkUploadUrl = s.chunkUploadUrl || e["nos-chunk"] || ""
                    },
                    onerror: function(t) {
                        e.logger.error("link::getNosChunkUploadUrl: ajax get webconf error", t)
                    }
                })
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        n(154);
        var r = n(132);
        n(185)(r),
        e.exports = r
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = r.notundef;
        function i(e) {
            r.verifyOptions(e, "type", "event::MsgEventSubscribe"),
            r.verifyParamType("type", e.type, "number", "event::MsgEventSubscribe"),
            r.findObjIndexInArray([1, 2, 3], e.type) < 0 && r.verifyParamMin("type", e.type, 1e5, "event::MsgEventSubscribe"),
            this.type = e.type,
            s(e.subscribeTime) ? (r.verifyParamType("subscribeTime", e.subscribeTime, "number", "event::MsgEventSubscribe"),
            r.verifyParamMin("subscribeTime", e.subscribeTime, 60, "event::MsgEventSubscribe"),
            r.verifyParamMax("subscribeTime", e.subscribeTime, 2592e3, "event::MsgEventSubscribe"),
            this.subscribeTime = e.subscribeTime) : this.subscribeTime = 2592e3,
            s(e.sync) ? (r.verifyParamType("sync", e.sync, "boolean", "event::MsgEventSubscribe"),
            this.sync = e.sync) : this.sync = !0
        }
        i.prototype.assembleEvent = function(e) {
            return {
                type: this.type,
                subscribeTime: this.subscribeTime,
                sync: !0 === this.sync ? 1 : 0
            }
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = r.notundef
          , i = n(26);
        function o(e) {
            if (r.verifyOptions(e, "type value", "event::MsgEvent"),
            r.verifyParamType("type", e.type, "number", "event::MsgEvent"),
            r.verifyParamType("value", e.value, "number", "event::MsgEvent"),
            this.type = e.type,
            this.value = e.value,
            this.idClient = r.guid(),
            s(e.custom) && (this.custom = "" + e.custom),
            this.validTime = e.validTime || 604800,
            r.verifyParamType("validTime", this.validTime, "number", "event::MsgEvent"),
            r.verifyParamMin("validTime", this.validTime, 60, "event::MsgEvent"),
            r.verifyParamMax("validTime", this.validTime, 604800, "event::MsgEvent"),
            s(e.broadcastType)) {
                if (r.verifyParamType("broadcastType", e.broadcastType, "number", "event::MsgEvent"),
                [1, 2].indexOf(e.broadcastType) < 0)
                    throw new i('参数错误"broadcastType":只能为1或2');
                this.broadcastType = e.broadcastType
            } else
                this.broadcastType = 2;
            s(e.sync) ? (r.verifyParamType("sync", e.sync, "boolean", "event::MsgEvent"),
            this.sync = e.sync) : this.sync = !1
        }
        o.prototype.assembleEvent = function() {
            return {
                type: this.type,
                value: this.value,
                idClient: this.idClient,
                custom: this.custom || "",
                validTime: this.validTime,
                broadcastType: this.broadcastType,
                sync: !0 === this.sync ? 1 : 0
            }
        }
        ,
        e.exports = o
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(9), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        var o = n(29).fn
          , a = n(0)
          , c = n(404)
          , u = n(403);
        function m(e) {
            return "object" === (void 0 === e ? "undefined" : (0,
            i.default)(e)) && (e.msgEventSubscribes ? e = e.msgEventSubscribes : e.msgEventSubscribe ? e = e.msgEventSubscribe : e.accounts ? e = e.accounts : e.msgEvent && (e = e.msgEvent).time && (e.time = +e.time),
            1 === e.sync ? e.sync = !0 : 0 === e.sync && (e.sync = !1)),
            e
        }
        o.batchSendEventsCmds = function(e, t, n) {
            var r = this
              , s = a.dropArrayDuplicates(t.accounts);
            s = a.reshape2d(s, 100);
            var i = [];
            s.forEach(function(n) {
                i.push(new Promise(function(s, i) {
                    var o = a.simpleClone(t);
                    o.accounts = n,
                    r.sendCmdWithResp(e, o, function(e, t) {
                        e ? i(e) : s(m(t))
                    })
                }
                ))
            }),
            Promise.all(i).then(function(e) {
                var t = null;
                if (e.length > 0)
                    if (e[0].msgEventSubscribe) {
                        var r = e[0].msgEventSubscribe;
                        r = m(r);
                        var s = [];
                        e.forEach(function(e) {
                            s = s.concat(e.accounts)
                        }),
                        t = {
                            accounts: s,
                            msgEventSubscribe: r
                        }
                    } else
                        t = [],
                        e.forEach(function(e) {
                            t = t.concat(e)
                        });
                n(null, t)
            }, function(e) {
                n(e, null)
            })
        }
        ,
        o.publishEvent = function(e) {
            var t = new c(e);
            t = t.assembleEvent(),
            this.processCallback(e),
            this.sendCmdWithResp("publishEvent", {
                msgEvent: t
            }, function(t, n) {
                t || (n = m(n)),
                e.callback(t, n)
            })
        }
        ,
        o.subscribeEvent = function(e) {
            a.verifyOptions(e, "accounts", "event::subscribeEvent");
            var t = new u(e);
            a.verifyParamType("accounts", e.accounts, "array", "event::subscribeEvent"),
            this.processCallback(e),
            t = t.assembleEvent(),
            this.batchSendEventsCmds("subscribeEvent", {
                msgEventSubscribe: t,
                accounts: e.accounts
            }, function(t, n) {
                !t && n && (n = {
                    failedAccounts: n
                }),
                e.callback(t, n)
            })
        }
        ,
        o.unSubscribeEventsByAccounts = function(e) {
            a.verifyOptions(e, "accounts", "event::unSubscribeEventsByAccounts"),
            a.verifyParamType("accounts", e.accounts, "array", "event::unSubscribeEventsByAccounts");
            var t = new u(e);
            t = t.assembleEvent(),
            this.processCallback(e),
            this.batchSendEventsCmds("unSubscribeEventsByAccounts", {
                msgEventSubscribe: t,
                accounts: e.accounts
            }, function(t, n) {
                !t && n && (n = {
                    failedAccounts: n
                }),
                e.callback(t, n)
            })
        }
        ,
        o.unSubscribeEventsByType = function(e) {
            var t = new u(e);
            t = t.assembleEvent(),
            this.processCallback(e),
            this.sendCmdWithResp("unSubscribeEventsByType", {
                msgEventSubscribe: t
            }, function(t, n) {
                e.callback(t)
            })
        }
        ,
        o.querySubscribeEventsByAccounts = function(e) {
            a.verifyOptions(e, "accounts", "event::querySubscribeEventsByAccounts"),
            a.verifyParamType("accounts", e.accounts, "array", "event::querySubscribeEventsByAccounts");
            var t = new u(e);
            t = t.assembleEvent(),
            this.processCallback(e),
            this.batchSendEventsCmds("querySubscribeEventsByAccounts", {
                msgEventSubscribe: t,
                accounts: e.accounts
            }, function(t, n) {
                !t && n && (n = {
                    msgEventSubscribes: n
                }),
                e.callback(t, n)
            })
        }
        ,
        o.querySubscribeEventsByType = function(e) {
            var t = new u(e);
            t = t.assembleEvent(),
            this.processCallback(e),
            this.sendCmdWithResp("querySubscribeEventsByType", {
                msgEventSubscribe: t
            }, function(t, n) {
                t || (n = {
                    msgEventSubscribes: m(n)
                }),
                e.callback(t, n)
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(29).fn
          , s = n(187)
          , i = n(0)
          , o = i.undef;
        r.getPushNotificationMultiportConfig = function() {
            return this.protocol.getPushNotificationMultiportConfig()
        }
        ,
        r.updatePushNotificationMultiportConfig = function(e) {
            i.verifyOptions(e),
            o(e.shouldPushNotificationWhenPCOnline) && (e.shouldPushNotificationWhenPCOnline = !0),
            e.donnop = new s(e),
            this.processCallback(e),
            this.sendCmd("updateDonnop", e)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(29).fn;
        r.clearDB = function(e) {
            var t = this.db;
            this.processCallback(e);
            var n = e.done;
            t.enable ? t.clear().then(n, n) : n()
        }
        ,
        r.removeDB = function(e) {
            var t = this.db;
            this.processCallback(e);
            var n = e.done;
            t.enable ? t.destroy().then(n, n) : n()
        }
        ,
        r.closeDB = function(e) {
            var t = this.db;
            this.processCallback(e);
            var n = e.done;
            t.enable ? t.close().then(n, n) : n()
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(29).fn
          , s = n(0);
        r.audioToText = function(e) {
            s.verifyOptions(e, "url", "audio::audioToText"),
            e.audioToText = s.filterObj(e, "url");
            this.processCallback(e),
            this.sendCmd("audioToText", e)
        }
    }
    , function(e, t, n) {
        "use strict"
    }
    , function(e, t, n) {
        "use strict"
    }
    , function(e, t, n) {
        "use strict";
        var r = n(29).fn
          , s = n(0)
          , i = n(5);
        r.getChatroomAddress = function(e) {
            s.verifyOptions(e, "chatroomId", "chatroom::getChatroomAddress");
            e.isWeixinApp = i.isWeixinApp,
            this.processCallback(e),
            this.sendCmd("getChatroomAddress", e)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(29).fn
          , s = n(0)
          , i = s.undef
          , o = s.notundef
          , a = n(124);
        r.markSysMsgRead = function(e) {
            var t, n = this.db, r = Promise.resolve(), i = this.protocol;
            s.verifyOptions(e, "sysMsgs", "sysmsg::markSysMsgRead");
            var o = e.sysMsgs;
            function a() {
                e.done(t, e)
            }
            s.isArray(o) || (o = [o]),
            n.enable ? r = n.markSysMsgRead(o).then(function(e) {
                o = e,
                i.onUpdateSysMsg(e)
            }) : (o = o.filter(function(e) {
                return !e.read
            })).length && (i.options.autoMarkRead || i.markSysMsgRead(o, !0),
            o.forEach(function(e) {
                e.read = !0
            }),
            i.onUpdateSysMsg(o)),
            r.then(function() {
                return i.reduceSysMsgUnread(o)
            }).then(a, function(e) {
                t = e,
                a()
            })
        }
        ,
        r.sendCustomSysMsg = function(e) {
            s.verifyOptions(e, "scene to content", "sysmsg::sendCustomSysMsg"),
            s.verifyParamValid("scene", e.scene, this.message.validScenes, "sysmsg::sendCustomSysMsg"),
            this.processCallback(e),
            "p2p" === e.scene ? e.type = "customP2p" : e.type = "customTeam",
            e.sysMsg = new a(e);
            var t = "sendCustomSysMsg";
            return e.filter && (t = "sendFilterCustomSysMsg"),
            this.sendCmd(t, {
                sysMsg: e.sysMsg,
                single: !0
            }, e.callback),
            this.formatReturnSysMsg(e.sysMsg)
        }
        ,
        r.formatReturnSysMsg = function(e) {
            return e = s.copy(e),
            this.protocol.completeSysMsg(e),
            e.status = "sending",
            e = a.reverse(e)
        }
        ,
        r.getLocalSysMsgs = function(e) {
            var t, n = this.db, r = [];
            function c() {
                e.sysMsgs = r,
                e.done(t, e)
            }
            s.verifyOptions(e),
            e.category && s.verifyParamValid("category", e.category, a.validCategories, "sysmsg::getLocalSysMsgs"),
            e.type && s.verifyParamValid("type", e.type, a.validTypes, "sysmsg::getLocalSysMsgs"),
            i(e.limit) && (e.limit = 100),
            s.verifyParamType("limit", e.limit, "number", "sysmsg::getLocalSysMsgs"),
            s.verifyParamMax("limit", e.limit, 100, "sysmsg::getLocalSysMsgs"),
            o(e.reverse) ? s.verifyParamType("reverse", e.reverse, "boolean", "sysmsg::getLocalSysMsgs") : e.reverse = !1,
            this.processCallback(e),
            n.enable ? n.getSysMsgs(e).then(function(e) {
                r = e,
                c()
            }, function(e) {
                t = e,
                c()
            }) : c()
        }
        ,
        r.updateLocalSysMsg = function(e) {
            var t, n = this.db, r = null;
            if (s.verifyOptions(e, "idServer", "sysmsg::updateLocalSysMsg"),
            this.processCallback(e),
            n.enable) {
                var i = s.filterObj(e, "idServer state localCustom");
                n.updateSysMsg(i).then(function(e) {
                    r = e,
                    o()
                }, function(e) {
                    t = e,
                    o()
                })
            } else
                o();
            function o() {
                e.sysMsg = r,
                e.done(t, e)
            }
        }
        ,
        r.deleteLocalSysMsg = function(e) {
            var t, n = this.db;
            function r() {
                e.done(t, e)
            }
            s.verifyOptions(e, "idServer", "sysmsg::deleteLocalSysMsg"),
            this.processCallback(e),
            n.enable ? n.deleteSysMsg(e.idServer).then(function() {
                r()
            }, function(e) {
                t = e,
                r()
            }) : r()
        }
        ,
        r.deleteAllLocalSysMsgs = function(e) {
            var t, n = this, r = n.db;
            function s() {
                n.protocol.onUpdateSysMsgUnread({}),
                e.done(t, e)
            }
            n.processCallback(e),
            r.enable && r.deleteAllSysMsgs().then(function() {
                s()
            }, function(e) {
                t = e,
                s()
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(29).fn
          , s = n(0)
          , i = s.undef
          , o = s.notundef
          , a = n(56)
          , c = n(123)
          , u = n(124)
          , m = n(26);
        r.beforeSendMsg = function(e) {
            var t, n = this.protocol, r = e.msg;
            switch (r.to === this.account && (r.fromDeviceId = a.deviceId),
            r.userUpdateTime = n.myInfo && n.myInfo.updateTime,
            r.getScene()) {
            case "p2p":
                t = "sendMsg";
                break;
            case "team":
                t = "sendTeamMsg";
                break;
            case "superTeam":
                t = "sendSuperTeamMsg"
            }
            e.filter && (t = "sendFilterMsg",
            r.filter = !0),
            e.cmd = t
        }
        ,
        r.afterSendMsg = function(e) {
            var t = e.rtnMsg
              , n = c.genSessionByMsg(t);
            this.protocol.onUpdateSession(n)
        }
        ,
        r.beforeForwardMsg = function(e) {
            s.verifyOptions(e, "msg scene to", "msg::beforeForwardMsg"),
            e.msg.scene = e.scene,
            e.msg.to = e.to
        }
        ,
        r.markMsgRead = function(e) {
            var t = this.protocol;
            !e || this.db.enable || t.options.autoMarkRead ? this.logger.warn("api::markMsgRead: 不需要标记消息为已收到 (没有消息, 或者启用了数据库, 或者启用了自动标记已收到)") : t.markMsgRead(e, !0)
        }
        ,
        r.sendMsgReceipt = function(e) {
            if (s.verifyOptions(e),
            this.processCallback(e),
            e.msg) {
                s.verifyOptions(e, "msg", "msg::sendMsgReceipt");
                var t = e.msg;
                s.verifyOptions(t, "target idClient time", !0, "msg.", "msg::sendMsgReceipt"),
                this.protocol.shouldSendMsgReceipt(t) ? this.sendCmd("sendMsgReceipt", {
                    msgReceipt: {
                        to: t.target,
                        idClient: t.idClient,
                        time: t.time
                    }
                }, e.callback) : e.done()
            } else
                e.done()
        }
        ,
        r.isMsgRemoteRead = function(e) {
            return this.protocol.isMsgRemoteRead(e)
        }
        ,
        r.deleteMsg = function(e) {
            s.verifyOptions(e, "msg", "msg::deleteMsg");
            var t = e.msg;
            if ("team" !== t.scene && "out" !== t.flow || "success" !== t.status || t.from === t.to || t.isLocal)
                return e.done(m.newParamError("只能删除自己发送给别人的, 并且发送成功的非本地消息", {
                    callFunc: "msg::deleteMsg"
                }), e);
            s.verifyOptions(t, ["scene", "to", "from", "time", "idClient", "idServer"], !0, "msg.", "msg::deleteMsg"),
            s.verifyParamValid("msg.scene", t.scene, this.message.validScenes, "msg::deleteMsg");
            var n = s.simpleClone(t);
            this.processPs(n),
            this.processCallback(e),
            o(e.opeAccount) ? n.opeAccount = e.opeAccount : i(n.opeAccount) && (n.opeAccount = n.from),
            "p2p" === n.scene ? n.type = "deleteMsgP2p" : n.type = "deleteMsgTeam",
            n.deletedIdClient = n.idClient,
            n.deletedIdServer = n.idServer,
            n = new u(n),
            this.sendCmd("deleteMsg", {
                sysMsg: n,
                msg: t
            }, e.callback)
        }
        ;
        var l = {
            text: 0,
            image: 1,
            audio: 2,
            video: 3,
            geo: 4,
            notification: 5,
            file: 6,
            tip: 10,
            robot: 11,
            custom: 100
        };
        r.getHistoryMsgs = function(e) {
            var t;
            switch (s.verifyOptions(e, "scene to", "msg::getHistoryMsgs"),
            s.verifyParamValid("scene", e.scene, this.message.validScenes, "msg::getHistoryMsgs"),
            void 0 === e.beginTime && (e.beginTime = 0),
            s.verifyParamType("beginTime", e.beginTime, "number", "msg::getHistoryMsgs"),
            void 0 === e.endTime && (e.endTime = 0),
            s.verifyParamType("endTime", e.endTime, "number", "msg::getHistoryMsgs"),
            void 0 !== e.lastMsgId && null !== e.lastMsgId || (e.lastMsgId = "0"),
            void 0 === e.limit && (e.limit = 100),
            s.verifyParamType("limit", e.limit, "number", "msg::getHistoryMsgs"),
            s.verifyParamMax("limit", e.limit, 100, "msg::getHistoryMsgs"),
            o(e.reverse) ? s.verifyParamType("reverse", e.reverse, "boolean", "msg::getHistoryMsgs") : e.reverse = !1,
            o(e.asc) ? s.verifyParamType("asc", e.asc, "boolean", "msg::getHistoryMsgs") : e.asc = !1,
            i(e.msgTypes) ? e.msgTypes = [] : Array.isArray(e.msgTypes) ? (e.msgTypes = e.msgTypes.map(function(e) {
                return l[e]
            }),
            e.msgTypes = e.msgTypes.filter(function(e) {
                return "number" == typeof e
            })) : "number" == typeof l[e.msgTypes] ? e.msgTypes = [l[e.msgTypes]] : e.msgTypes = [],
            this.processCallback(e),
            e.asc && (e.cbaop = function(e, t) {
                e || (t.msgs = t.msgs.reverse())
            }
            ),
            e.scene) {
            case "p2p":
                t = "getHistoryMsgs";
                break;
            case "team":
                t = "getTeamHistoryMsgs";
                break;
            case "superTeam":
                t = "getSuperTeamHistoryMsgs"
            }
            var n = {
                scene: e.scene,
                to: e.to,
                beginTime: e.beginTime,
                endTime: e.endTime,
                lastMsgId: e.lastMsgId,
                limit: e.limit,
                reverse: e.reverse,
                msgTypes: e.msgTypes
            };
            this.sendCmd(t, n, e.callback)
        }
        ,
        r.searchHistoryMsgs = function(e) {
            var t;
            switch (s.verifyOptions(e, "scene to keyword", "msg::searchHistoryMsgs"),
            s.verifyParamValid("scene", e.scene, this.message.validScenes, "msg::searchHistoryMsgs"),
            void 0 === e.beginTime && (e.beginTime = 0),
            s.verifyParamType("beginTime", e.beginTime, "number", "msg::searchHistoryMsgs"),
            void 0 === e.endTime && (e.endTime = 0),
            s.verifyParamType("endTime", e.endTime, "number", "msg::searchHistoryMsgs"),
            void 0 === e.limit && (e.limit = 100),
            s.verifyParamType("limit", e.limit, "number", "msg::searchHistoryMsgs"),
            s.verifyParamMax("limit", e.limit, 100, "msg::searchHistoryMsgs"),
            o(e.reverse) ? s.verifyParamType("reverse", e.reverse, "boolean", "msg::searchHistoryMsgs") : e.reverse = !1,
            o(e.asc) ? s.verifyParamType("asc", e.asc, "boolean", "msg::searchHistoryMsgs") : e.asc = !1,
            this.processCallback(e),
            e.asc && (e.cbaop = function(e, t) {
                e || (t.msgs = t.msgs.reverse())
            }
            ),
            e.scene) {
            case "p2p":
                t = "searchHistoryMsgs";
                break;
            case "team":
                t = "searchTeamHistoryMsgs"
            }
            var n = s.filterObj(e, "scene to beginTime endTime keyword limit reverse");
            this.sendCmd(t, n, e.callback)
        }
        ,
        r.getLocalMsgs = function(e) {
            var t = this.db
              , n = null
              , r = [];
            s.verifyOptions(e);
            var a = !1;
            o(e.start) && (a = !0,
            s.verifyParamType("start", e.start, "number", "msg::getLocalMsgs"));
            var c = !1;
            function u() {
                var t = s.simpleClone(e);
                t.msgs = r,
                delete t.callback,
                delete t.done,
                e.done(n, t)
            }
            o(e.end) && (c = !0,
            s.verifyParamType("end", e.end, "number", "msg::getLocalMsgs")),
            a && c && e.end <= e.start && s.onParamError("参数 end 必须晚于 start"),
            i(e.limit) && (e.limit = 100),
            s.verifyParamType("limit", e.limit, "number", "msg::getLocalMsgs"),
            s.verifyParamMin("limit", e.limit, 1, "msg::getLocalMsgs"),
            this.processCallback(e),
            t.enable ? t.getMsgs(e).then(function(e) {
                r = e,
                u()
            }, function(e) {
                (e = e || {}).message = e.message || "msg::getLocalMsgs:db error",
                u()
            }) : u()
        }
        ,
        r.getLocalMsgByIdClient = function(e) {
            var t, n = this.db, r = null;
            function i() {
                e.msg = r,
                e.done(t, e)
            }
            s.verifyOptions(e, "idClient", "msg::getLocalMsgByIdClient"),
            this.processCallback(e),
            n.enable ? n.getMsgByIdClient(e.idClient).then(function(e) {
                e && (r = e),
                i()
            }, function(e) {
                t = e,
                i()
            }) : i()
        }
        ,
        r.getLocalMsgsByIdClients = function(e) {
            var t, n = this.db, r = [];
            function i() {
                e.msgs = r,
                e.done(t, e)
            }
            s.verifyOptions(e, "idClients", "msg::getLocalMsgByIdClient"),
            s.verifyParamType("idClients", e.idClients, "array", "msg::getLocalMsgByIdClient"),
            this.processCallback(e),
            n.enable ? n.getMsgsByIdClients(e.idClients).then(function(e) {
                r = e.filter(function(e) {
                    return !!e
                }),
                i()
            }, function(e) {
                t = e,
                i()
            }) : i()
        }
        ,
        r.updateLocalMsg = function(e) {
            var t, n = this.db, r = null;
            if (s.verifyOptions(e, "idClient", "msg::updateLocalMsg"),
            this.processCallback(e),
            n.enable) {
                var i = s.filterObj(e, "idClient localCustom");
                n.updateMsg(i).then(function(e) {
                    r = e,
                    o()
                }, function(e) {
                    t = e,
                    o()
                })
            } else
                o();
            function o() {
                e.msg = r,
                e.done(t, e)
            }
        }
        ,
        r.deleteLocalMsg = function(e) {
            var t;
            s.verifyOptions(e, "msg", "msg::deleteLocalMsg");
            var n = e.msg;
            function r() {
                e.done(t, e)
            }
            s.verifyOptions(n, "idClient sessionId", !0, "msg.", "msg::deleteLocalMsg"),
            this.processCallback(e),
            this.protocol.deleteLocalMsg(n).then(r, function(e) {
                t = e,
                r()
            })
        }
        ,
        r.deleteLocalMsgsBySession = function(e) {
            var t, n = this, r = n.db;
            function i(e) {
                t = e,
                o()
            }
            function o() {
                e.done(t, e)
            }
            s.verifyOptions(e, "scene to", "msg::deleteLocalMsgsBySession"),
            s.verifyParamValid("scene", e.scene, n.message.validScenes, "msg::deleteLocalMsgsBySession"),
            e.sessionId = e.scene + "-" + e.to,
            e.delLastMsg = !0 === e.delLastMsg,
            n.processCallback(e),
            r.enable ? r.deleteMsgsBySessionId(e).then(function() {
                e.delLastMsg ? r.updateSession({
                    id: e.sessionId,
                    lastMsg: null
                }).then(function(t) {
                    n.protocol.onUpdateSession(t),
                    e.session = t,
                    o()
                }, i) : o()
            }, i) : (e.delLastMsg && n.protocol.onUpdateSession({
                id: e.sessionId,
                lastMsg: null
            }),
            o())
        }
        ,
        r.deleteLocalMsgs = function(e) {
            var t, n = this, r = n.db, i = !1 !== e.updateSession;
            function a() {
                e.done(t, e)
            }
            s.verifyOptions(e, "sessionId", "msg::deleteLocalMsgsBySession"),
            o(e.start) && s.verifyParamType("start", e.start, "number", "msg::deleteLocalMsgs"),
            o(e.end) && s.verifyParamType("end", e.end, "number", "msg::deleteLocalMsgs"),
            o(e.end) && o(e.start) && e.end <= e.start && s.onParamError("参数 end 必须大于 start"),
            n.processCallback(e),
            r.enable ? r.deleteMsgsBySessionId(e).then(function() {
                a(),
                i && n.protocol.checkAndUpdateLocalSessionByMsg(e.sessionId)
            }, function(e) {
                t = e,
                a()
            }) : a()
        }
        ,
        r.deleteAllLocalMsgs = function(e) {
            var t, n = this.db;
            function r() {
                e.done(t, e)
            }
            this.processCallback(e),
            n.enable && n.deleteAllMsgs().then(function() {
                r()
            }, function(e) {
                t = e,
                r()
            })
        }
        ,
        r.clearServerHistoryMsgs = function(e) {
            s.verifyOptions(e, "account", "msg::clearServerHistoryMsgs");
            var t = !(!1 === e.delRoam);
            this.processCallback(e),
            this.sendCmd("clearServerHistoryMsgs", {
                clearMsgsParams: {
                    account: e.account,
                    delRoam: t ? 1 : 0
                }
            }, e.callback)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(29).fn
          , s = n(0)
          , i = s.undef
          , o = s.notundef
          , a = n(167);
        r.setCurrSession = function(e) {
            this.resetSessionUnread(e),
            this.protocol.setCurrSession(e)
        }
        ,
        r.resetAllSessionUnread = function() {
            for (var e in this.protocol.sessionSet)
                this.protocol.sessionSet[e].unread > 0 && this.resetSessionUnread(e)
        }
        ,
        r.resetSessionUnread = function(e) {
            if (this.protocol.resetSessionUnread(e),
            this.options.syncSessionUnread) {
                var t = this.protocol.findSession(e);
                if (t)
                    if (t.lastMsg)
                        if (t.scene && t.to) {
                            var n = t.lastMsg.time;
                            if (t && t.ack && t.ack >= n)
                                this.logger.warn("api::resetSessionUnread: session ack not needs " + e);
                            else {
                                var r = {
                                    scene: "p2p" === t.scene ? 0 : 1,
                                    to: t.to,
                                    timetag: n
                                };
                                this.sendCmd("markSessionAck", r)
                            }
                        } else
                            this.logger.warn("api::resetSessionUnread: session.scene|to undefined " + e);
                    else
                        this.logger.warn("api::resetSessionUnread: session.lastMsg undefined " + e);
                else
                    this.logger.warn("api::resetSessionUnread: session undefined " + e)
            }
        }
        ,
        r.resetCurrSession = function() {
            this.protocol.setCurrSession("")
        }
        ,
        r.insertLocalSession = function(e) {
            var t, n;
            function r() {
                e.session = n,
                e.done(t, e)
            }
            s.verifyOptions(e, "scene to", "scene::insertLocalSession"),
            s.verifyParamValid("scene", e.scene, this.message.validScenes, "scene::insertLocalSession"),
            this.processCallback(e),
            this.protocol.insertLocalSession(e).then(function(e) {
                n = e,
                r()
            }, function(e) {
                t = e,
                r()
            })
        }
        ,
        r.getLocalSessions = function(e) {
            var t, n = this, r = n.db, a = [];
            function c() {
                e.sessions = a,
                e.done(t, e)
            }
            s.verifyOptions(e),
            i(e.limit) && (e.limit = 100),
            s.verifyParamType("limit", e.limit, "number", "scene::getLocalSessions"),
            s.verifyParamMax("limit", e.limit, 100, "scene::getLocalSessions"),
            o(e.reverse) ? s.verifyParamType("reverse", e.reverse, "boolean", "scene::getLocalSessions") : e.reverse = !1,
            n.processCallback(e),
            r.enable ? r.getSessions(e).then(function(e) {
                a = e,
                n.protocol.mergeSessions(a),
                c()
            }, function(e) {
                t = e,
                c()
            }) : c()
        }
        ,
        r.getLocalSession = function(e) {
            var t, n = this.db, r = null;
            if (s.verifyOptions(e, "sessionId", "scene::getLocalSession"),
            s.verifyParamType("sessionId", e.sessionId, "string", "scene::getLocalSession"),
            n.enable)
                return this.processCallback(e),
                void n.getSession(e.sessionId).then(function(e) {
                    e && (r = e),
                    i()
                }, function(e) {
                    t = e,
                    i()
                });
            function i() {
                e.done(t, r)
            }
            this.protocol.sessionSet && this.protocol.sessionSet[e.sessionId] && (r = this.protocol.sessionSet[e.sessionId]),
            i()
        }
        ,
        r.getLocalSessionsByMsgType = function(e) {
            var t = this.db
              , n = e.exclude
              , r = []
              , i = a.validTypes.slice(0);
            if (o(n)) {
                if ("string" == typeof n)
                    n = [n];
                else if (!Array.isArray(n))
                    return void s.onParamInvalidType("exclude", ["string", "string array"], "", "exclude::getLocalSessionsByMsgType");
                n = n.filter(function(e) {
                    return i.indexOf(e) > -1
                }),
                i = i.filter(function(e) {
                    return -1 === n.indexOf(e)
                })
            }
            this.processCallback(e),
            i && 0 !== i.length && t.enable ? t.getSessions().then(function(s) {
                n && 0 !== n.length ? (s.map(function(e, o) {
                    var a, c, u;
                    e.lastMsg && n.indexOf(e.lastMsg.type) > -1 && (a = o,
                    c = e.id,
                    u = t.getMsgs({
                        sessionId: c,
                        limit: 1,
                        types: i
                    }).then(function(e) {
                        return e && e[0] ? s[a].lastMsg = e[0] : s[a].lastMsg = null,
                        Promise.resolve()
                    }),
                    r.push(u))
                }),
                Promise.all(r).then(function(t) {
                    var r = s.filter(function(e) {
                        return e.lastMsg
                    });
                    e.done(null, {
                        exclude: n,
                        sessions: r
                    })
                })) : e.done(null, {
                    exclude: n,
                    sessions: s
                })
            }) : e.done(null, {
                exclude: n,
                sessions: []
            })
        }
        ,
        r.updateLocalSession = function(e) {
            var t, n = this, r = n.db;
            s.verifyOptions(e, "id", "scene::updateLocalSession"),
            n.processCallback(e);
            var i = s.filterObj(e, "id localCustom");
            function o() {
                n.protocol.onUpdateSession(i),
                e.session = i,
                e.done(t, e)
            }
            r.enable ? r.updateSession(i).then(function(e) {
                i = e,
                o()
            }, function(e) {
                t = e,
                o()
            }) : o()
        }
        ,
        r.deleteLocalSession = function(e) {
            var t, n = this, r = n.db;
            function i() {
                e.done(t, e)
            }
            s.verifyOptions(e, "id", "session::deleteLocalSession"),
            n.processCallback(e),
            r.enable ? r.deleteSession(e.id).then(function() {
                n.protocol.deleteLocalSession(e.id),
                i()
            }, function(e) {
                t = e,
                i()
            }) : i()
        }
        ,
        r.deleteSession = function(e) {
            s.verifyOptions(e, "scene to", "session::deleteSession"),
            this.processCallback(e),
            e.sessions = [{
                scene: e.scene,
                to: e.to
            }],
            this.deleteSessions(e)
        }
        ,
        r.deleteSessions = function(e) {
            s.verifyOptions(e, "sessions", "session::deleteSessions"),
            s.verifyParamType("sessions", e.sessions, "array", "session::deleteSessions"),
            e.sessions.forEach(function(e, t) {
                s.verifyOptions(e, "scene to", !0, "sessions[" + t + "].", "session::deleteSessions")
            }),
            this.processCallback(e),
            this.sendCmd("deleteSessions", {
                sessions: e.sessions.map(function(e) {
                    return e.scene + "|" + e.to
                })
            }, e.callback)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(122), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        var o = n(29).fn
          , a = n(0)
          , c = a.undef
          , u = n(189)
          , m = n(146);
        o.addSuperTeamMembers = function(e) {
            a.verifyOptions(e, "teamId accounts", "superTeam::addSuperTeamMembers"),
            a.verifyParamType("accounts", e.accounts, "array", "superTeam::addSuperTeamMembers");
            var t = a.deduplicate(e.accounts);
            this.processCallback(e);
            var n = {
                teamId: e.teamId,
                accounts: t
            };
            this.sendCmd("addSuperTeamMembers", n, e.callback)
        }
        ,
        o.removeSuperTeamMembers = function(e) {
            a.verifyOptions(e, "teamId accounts", "team::removeSuperTeamMembers"),
            a.verifyParamType("accounts", e.accounts, "array", "team::removeSuperTeamMembers");
            var t = a.deduplicate(e.accounts);
            this.processCallback(e);
            var n = {
                teamId: e.teamId,
                accounts: t
            };
            this.sendCmd("removeSuperTeamMembers", n, e.callback)
        }
        ,
        o.leaveSuperTeam = function(e) {
            a.verifyOptions(e, "teamId", "superTeam::leaveSuperTeam"),
            this.processCallback(e);
            var t = {
                teamId: e.teamId
            };
            this.sendCmd("leaveSuperTeam", t, e.callback)
        }
        ,
        o.getSuperTeam = function(e) {
            var t, n = this, r = n.db;
            function s() {
                n.sendCmd("getSuperTeam", {
                    teamId: e.teamId
                }, e.callback)
            }
            a.verifyOptions(e, "teamId", "team::getSuperTeam"),
            n.processCallback(e),
            e.cbaop = function(e, r) {
                e || n.logger.log("api::getSuperTeam: cbaop " + t, r)
            }
            ,
            t = e.teamId,
            r.enable && !e.sync ? r.getSuperTeam(t).then(function(r) {
                r ? (n.logger.log("api::getSuperTeam: db.getSuperTeam " + t, r),
                e.done(null, r)) : s()
            }, s) : s()
        }
        ,
        o.getSuperTeams = function(e) {
            var t = this
              , n = t.db
              , r = 0;
            function s() {
                t.sendCmd("getSuperTeams", {
                    timetag: r,
                    NOTSTORE: "timetag"
                }, e.callback)
            }
            a.verifyOptions(e),
            t.processCallback(e),
            n.enable ? n.getSuperTeamsTimetag().then(function(e) {
                r = e,
                s()
            }, s) : s()
        }
        ,
        o.updateSuperTeam = function(e) {
            a.verifyOptions(e, "teamId", "superTeam::updateSuperTeam"),
            e.action = "update",
            this.processCallback(e),
            e.team = new u(e),
            this.sendCmd("updateSuperTeam", {
                team: e.team,
                single: !0
            }, e.callback)
        }
        ,
        o.updateInfoInSuperTeam = function(e) {
            a.verifyOptions(e, "teamId", "superTeam::updateInfoInSuperTeam"),
            this.processCallback(e),
            this.sendCmd("updateInfoInSuperTeam", {
                superTeamMember: new m(e),
                single: !0
            }, e.callback)
        }
        ,
        o.getSuperTeamMembersByJoinTime = function(e) {
            var t = this
              , n = (t.db,
            e.joinTime)
              , r = e.reverse
              , s = e.limit
              , i = e.teamId;
            r = !!r,
            c(n) && (n = 0),
            c(s) && (s = 100),
            a.verifyOptions(e, "teamId", "superTeam::getSuperTeamMembersByJoinTime"),
            a.verifyParamType("joinTime", n, "number", "api::superTeam::getSuperTeamMembersByJoinTime"),
            a.verifyParamType("limit", s, "number", "api::superTeam::getSuperTeamMembersByJoinTime"),
            t.processCallback(e),
            t.sendCmd("getSuperTeamMembersByJoinTime", {
                teamId: i,
                limit: s,
                joinTime: n,
                reverse: r,
                timetag: 0,
                NOTSTORE: "timetag"
            }, e.callback)
        }
        ,
        o.getAllSuperTeamMembers = function(e) {
            var t = this
              , n = this.db;
            function r(n) {
                n = n || 0,
                t.sendCmd("getSuperTeamMembers", {
                    teamId: e.teamId,
                    timetag: n,
                    NOTSTORE: "timetag"
                }, e.callback)
            }
            a.verifyOptions(e, "teamId", "superTeam::getAllSuperTeamMembers"),
            t.processCallback(e),
            function(e) {
                var t = this.db;
                if (!t.enable)
                    return Promise.resolve(!1);
                var n = t.getSuperTeam(e)
                  , r = t.getSuperTeamMembersTimetag(e);
                return Promise.all([n, r]).then(function(e) {
                    var t = (0,
                    i.default)(e, 2)
                      , n = t[0]
                      , r = t[1]
                      , s = n && n.memberUpdateTime
                      , o = {
                        timetag: r = r || 0
                    };
                    return s && r >= s && (o.valid = !0),
                    Promise.resolve(o)
                }, function() {
                    return Promise.resolve({
                        timetag: 0
                    })
                })
            }
            .bind(this)(e.teamId).then(function(s) {
                var i = s.valid
                  , o = s.timetag;
                i ? (t.logger.info("getAllSuperTeamMembers from local db"),
                n.getSuperTeamMembers(e.teamId).then(function(t) {
                    var n = {
                        teamId: e.teamId,
                        members: t
                    };
                    e.done(null, n)
                }, function() {
                    return r()
                })) : r(o)
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(29).fn
          , s = n(0)
          , i = s.undef
          , o = n(126)
          , a = n(90);
        r.createTeam = function(e) {
            s.verifyOptions(e, "type name", "team::createTeam"),
            i(e.accounts) ? e.accounts = [] : s.verifyParamType("accounts", e.accounts, "array", "team::createTeam"),
            e.action = "create",
            this.processPs(e),
            this.processCallback(e),
            e.team = new o(e);
            var t = {
                team: e.team,
                accounts: e.accounts.slice(0),
                ps: e.ps
            };
            this.sendCmd("createTeam", t, e.callback)
        }
        ,
        r.updateTeam = function(e) {
            s.verifyOptions(e, "teamId", "team::updateTeam"),
            e.action = "update",
            this.processCallback(e),
            e.team = new o(e),
            this.sendCmd("updateTeam", {
                team: e.team,
                single: !0
            }, e.callback)
        }
        ,
        r.addTeamMembers = function(e) {
            s.verifyOptions(e, "teamId accounts", "team::addTeamMembers"),
            s.verifyParamType("accounts", e.accounts, "array", "team::addTeamMembers"),
            this.processPs(e),
            s.notexist(e.custom) && (e.custom = ""),
            this.processCallback(e);
            var t = {
                teamId: e.teamId,
                accounts: e.accounts.slice(0),
                ps: e.ps,
                attach: e.custom
            };
            this.sendCmd("addTeamMembers", t, e.callback)
        }
        ,
        r.removeTeamMembers = function(e) {
            s.verifyOptions(e, "teamId accounts", "team::removeTeamMembers"),
            s.verifyParamType("accounts", e.accounts, "array", "team::removeTeamMembers"),
            this.processCallback(e);
            var t = {
                teamId: e.teamId,
                accounts: e.accounts.slice(0)
            };
            this.sendCmd("removeTeamMembers", t, e.callback)
        }
        ,
        r.acceptTeamInvite = function(e) {
            s.verifyOptions(e, "idServer teamId from", "team::acceptTeamInvite"),
            this.processCallback(e);
            var t = {
                idServer: e.idServer,
                teamId: e.teamId,
                from: e.from
            };
            this.sendCmd("acceptTeamInvite", t, e.callback)
        }
        ,
        r.rejectTeamInvite = function(e) {
            s.verifyOptions(e, "idServer teamId from", "team::rejectTeamInvite"),
            this.processPs(e),
            this.processCallback(e);
            var t = {
                idServer: e.idServer,
                teamId: e.teamId,
                from: e.from,
                ps: e.ps
            };
            this.sendCmd("rejectTeamInvite", t, e.callback)
        }
        ,
        r.applyTeam = function(e) {
            s.verifyOptions(e, "teamId", "team::applyTeam"),
            this.processPs(e),
            this.processCallback(e);
            var t = {
                teamId: e.teamId,
                ps: e.ps
            };
            this.sendCmd("applyTeam", t, e.callback)
        }
        ,
        r.passTeamApply = function(e) {
            s.verifyOptions(e, "idServer teamId from", "team::passTeamApply"),
            this.processCallback(e);
            var t = {
                idServer: e.idServer,
                teamId: e.teamId,
                from: e.from
            };
            this.sendCmd("passTeamApply", t, e.callback)
        }
        ,
        r.rejectTeamApply = function(e) {
            s.verifyOptions(e, "idServer teamId from", "team::rejectTeamApply"),
            this.processPs(e),
            this.processCallback(e);
            var t = {
                idServer: e.idServer,
                teamId: e.teamId,
                from: e.from,
                ps: e.ps
            };
            this.sendCmd("rejectTeamApply", t, e.callback)
        }
        ,
        r.addTeamManagers = function(e) {
            s.verifyOptions(e, "teamId accounts", "team::addTeamManagers"),
            s.verifyParamType("accounts", e.accounts, "array", "team::addTeamManagers"),
            this.processCallback(e);
            var t = {
                teamId: e.teamId,
                accounts: e.accounts.slice(0)
            };
            this.sendCmd("addTeamManagers", t, e.callback)
        }
        ,
        r.removeTeamManagers = function(e) {
            s.verifyOptions(e, "teamId accounts", "team::removeTeamManagers"),
            s.verifyParamType("accounts", e.accounts, "array", "team::removeTeamManagers"),
            this.processCallback(e);
            var t = {
                teamId: e.teamId,
                accounts: e.accounts.slice(0)
            };
            this.sendCmd("removeTeamManagers", t, e.callback)
        }
        ,
        r.updateInfoInTeam = function(e) {
            s.verifyOptions(e, "teamId", "team::updateInfoInTeam"),
            this.processCallback(e),
            this.sendCmd("updateInfoInTeam", {
                teamMember: new a(e),
                single: !0
            }, e.callback)
        }
        ,
        r.updateNickInTeam = function(e) {
            s.verifyOptions(e, "teamId account", "team::updateNickInTeam"),
            this.processCallback(e),
            this.sendCmd("updateNickInTeam", {
                teamMember: new a(e),
                single: !0
            }, e.callback)
        }
        ,
        r.updateMuteStateInTeam = function(e) {
            s.verifyOptions(e, "teamId account mute", "team::updateMuteStateInTeam"),
            this.processCallback(e),
            e.mute = e.mute ? 1 : 0,
            this.sendCmd("updateMuteStateInTeam", e)
        }
        ,
        r.getMutedTeamMembers = function(e) {
            s.verifyOptions(e, "teamId", "team::getMutedTeamMembers"),
            this.processCallback(e),
            this.sendCmd("getMutedTeamMembers", e)
        }
        ,
        r.leaveTeam = function(e) {
            s.verifyOptions(e, "teamId", "team::leaveTeam"),
            this.processCallback(e);
            var t = {
                teamId: e.teamId
            };
            this.sendCmd("leaveTeam", t, e.callback)
        }
        ,
        r.transferTeam = function(e) {
            s.verifyOptions(e, "teamId account leave", "team::transferTeam"),
            s.verifyParamType("leave", e.leave, "boolean", "team::transferTeam"),
            this.processCallback(e);
            var t = {
                teamId: e.teamId,
                account: e.account,
                leave: e.leave
            };
            this.sendCmd("transferTeam", t, e.callback)
        }
        ,
        r.dismissTeam = function(e) {
            s.verifyOptions(e, "teamId", "team::dismissTeam"),
            this.processCallback(e);
            var t = {
                teamId: e.teamId
            };
            this.sendCmd("dismissTeam", t, e.callback)
        }
        ,
        r.getTeam = function(e) {
            var t, n = this, r = n.db;
            function i() {
                n.sendCmd("getTeam", {
                    teamId: e.teamId
                }, e.callback)
            }
            s.verifyOptions(e, "teamId", "team::getTeam"),
            n.processCallback(e),
            e.cbaop = function(e, r) {
                e || n.logger.log("api::getTeam: cbaop " + t, r)
            }
            ,
            t = e.teamId,
            r.enable && !e.sync ? r.getTeam(t).then(function(r) {
                r && r.validToCurrentUser ? (n.logger.log("api::getTeam: db.getTeam " + t, r),
                e.done(null, r)) : i()
            }, i) : i()
        }
        ,
        r.getTeams = function(e) {
            var t = this
              , n = t.db
              , r = 0;
            function i() {
                t.sendCmd("getTeams", {
                    timetag: r,
                    NOTSTORE: "timetag"
                }, e.callback)
            }
            s.verifyOptions(e),
            t.processCallback(e),
            n.enable ? n.getTeamsTimetag().then(function(e) {
                r = e,
                i()
            }, i) : i()
        }
        ,
        r.getTeamMembers = function(e) {
            var t = this
              , n = 0;
            s.verifyOptions(e, "teamId", "team::getTeamMembers"),
            t.processCallback(e),
            t.sendCmd("getTeamMembers", {
                teamId: e.teamId,
                timetag: n,
                NOTSTORE: "timetag"
            }, e.callback)
        }
        ,
        r.getTeamMemberByTeamIdAndAccount = function(e) {
            var t = this
              , n = 0;
            s.verifyParamType("teamId", e.teamId, "numeric or numeric string", "team::getTeamMemberByTeamIdAndAccount"),
            s.verifyOptions(e, "account", "team::getTeamMemberByTeamIdAndAccount"),
            t.processCallback(e),
            t.sendCmd("getTeamMembers", {
                teamId: e.teamId,
                timetag: n,
                NOTSTORE: "timetag"
            }, function(t, n, r) {
                var s = {};
                if (n && n.members && n.members.length)
                    for (var i = 0; i < n.members.length; i++)
                        if (n.members[i].account === e.account) {
                            s[e.account] = n.members[i];
                            break
                        }
                e.callback(t, s, r)
            })
        }
        ,
        r.getTeamMemberInvitorAccid = function(e) {
            s.verifyParamType("teamId", e.teamId, "numeric or numeric string", "team::getTeamMemberInvitorAccid"),
            i(e.accounts) || (s.verifyParamType("accounts", e.accounts, "array", "team::getTeamMemberInvitorAccid"),
            e.accounts.length > 200 && s.onParamError("accounts 参数数组长度不能超过200", "team::getTeamMemberInvitorAccid"));
            var t = {
                teamId: e.teamId
            };
            e.accounts.length && (t.accounts = e.accounts.slice(0)),
            this.processCallback(e),
            this.sendCmd("getTeamMemberInvitorAccid", t, function(t, n, r) {
                e.callback(t, r && r.accountsMap || {})
            })
        }
        ,
        r.notifyForNewTeamMsg = function(e) {
            s.verifyOptions(e, "teamIds", "team::notifyForNewTeamMsg"),
            this.protocol.notifyForNewTeamMsg(e.teamIds).then(function(t) {
                e.done(t.error || null, t.map, t.miss)
            }, function(t) {
                e.done(t)
            })
        }
        ,
        r.getMyTeamMembers = function(e) {
            s.verifyOptions(e, "teamIds", "team::getMyTeamMembers");
            var t = this.processCallbackPromise(e);
            return this.sendCmd("getMyTeamMembers", e),
            t
        }
        ,
        r.getLocalTeams = function(e) {
            var t, n = this.db, r = [];
            function i() {
                e.teams = r,
                e.done(t, e)
            }
            s.verifyOptions(e, "teamIds", "team::getLocalTeams"),
            s.verifyParamType("teamIds", e.teamIds, "array", "team::getLocalTeams"),
            this.processCallback(e),
            n.enable ? n.getTeamsByTeamIds(e.teamIds).then(function(e) {
                r = e.filter(function(e) {
                    return !!e
                }),
                i()
            }, function(e) {
                t = e,
                i()
            }) : i()
        }
        ,
        r.getLocalTeamMembers = function(e) {
            var t, n = this.db, r = [];
            function i() {
                e.members = r,
                e.done(t, e)
            }
            s.verifyOptions(e, "teamId accounts", "team::getLocalTeamMembers"),
            s.verifyParamType("accounts", e.accounts, "array", "team::getLocalTeamMembers"),
            this.processCallback(e),
            n.enable ? n.getInvalidTeamMembers(e.teamId, e.accounts).then(function(e) {
                r = e.filter(function(e) {
                    return !!e
                }),
                i()
            }, function(e) {
                t = e,
                i()
            }) : i()
        }
        ,
        r.deleteLocalTeam = function(e) {
            var t, n = this.db;
            function r() {
                e.done(t, e)
            }
            s.verifyOptions(e, "teamId", "team::deleteLocalTeam"),
            this.processCallback(e),
            n.enable ? n.deleteTeam(e.teamId).then(function() {
                r()
            }, function(e) {
                t = e,
                r()
            }) : r()
        }
        ,
        r.muteTeamAll = function(e) {
            switch (s.verifyOptions(e, "teamId type", "team::muteTeamAll"),
            e.type) {
            case "none":
                e.muteType = 0;
                break;
            case "normal":
                e.muteType = 1;
                break;
            case "all":
                e.muteType = 2;
                break;
            default:
                e.muteType = 1
            }
            this.processCallback(e),
            this.sendCmd("muteTeamAll", e)
        }
        ,
        r.sendTeamMsgReceipt = function(e) {
            s.verifyOptions(e, "teamMsgReceipts", "team::sendTeamMsgReceipt"),
            this.processCallback(e),
            this.sendCmd("sendTeamMsgReceipt", e)
        }
        ,
        r.getTeamMsgReads = function(e) {
            s.verifyOptions(e, "teamMsgReceipts", "team::getTeamMsgReads"),
            this.processCallback(e),
            this.sendCmd("getTeamMsgReads", e)
        }
        ,
        r.getTeamMsgReadAccounts = function(e) {
            s.verifyOptions(e, "teamMsgReceipt", "team::getTeamMsgReadAccounts"),
            this.processCallback(e),
            this.sendCmd("getTeamMsgReadAccounts", e)
        }
    }
    , function(e, t, n) {
        "use strict";
        n(29).fn.getRobots = function(e) {
            (e = e || {}).type = "getRobots",
            this.processCallback(e),
            this.sendCmd("sync", {
                sync: {
                    robots: 0
                }
            }, e.callback)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(29).fn
          , s = n(0)
          , i = s.notundef
          , o = n(299);
        r.friendRequest = function(e) {
            s.verifyOptions(e, "type account", "friend::friendRequest"),
            s.verifyParamValid("type", e.type, o.validTypes(), "friend::friendRequest"),
            this.processPs(e),
            this.processCallback(e);
            var t = {
                account: e.account,
                type: o.getByteFromType(e.type),
                ps: e.ps
            };
            i(e.idServer) && (t.idServer = e.idServer),
            this.sendCmd("friendRequest", t, e.callback)
        }
        ,
        r.addFriend = function(e) {
            e.type = "addFriend",
            this.friendRequest(e)
        }
        ,
        r.applyFriend = function(e) {
            e.type = "applyFriend",
            this.friendRequest(e)
        }
        ,
        r.passFriendApply = function(e) {
            s.verifyOptions(e, "idServer", "friend::passFriendApply"),
            e.type = "passFriendApply",
            this.friendRequest(e)
        }
        ,
        r.rejectFriendApply = function(e) {
            s.verifyOptions(e, "idServer", "friend::rejectFriendApply"),
            e.type = "rejectFriendApply",
            this.friendRequest(e)
        }
        ,
        r.deleteFriend = function(e) {
            s.verifyOptions(e, "account", "friend::deleteFriend");
            var t = !0 === e.delAlias;
            this.processCallback(e),
            this.sendCmd("deleteFriend", {
                account: e.account,
                delFriendParams: {
                    delAlias: t ? 1 : 0
                }
            }, e.callback)
        }
        ,
        r.updateFriend = function(e) {
            this.processCallback(e);
            var t = new o(e);
            this.sendCmd("updateFriend", {
                friend: t,
                single: !0
            }, e.callback)
        }
        ,
        r.getFriends = function(e) {
            var t = this
              , n = t.db
              , r = 0;
            function i() {
                t.sendCmd("getFriends", {
                    timetag: r,
                    NOTSTORE: "timetag"
                }, e.callback)
            }
            s.verifyOptions(e),
            t.processCallback(e),
            n.enable ? n.getFriendsTimetag().then(function(e) {
                r = e,
                i()
            }, i) : i()
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(29).fn
          , s = n(0)
          , i = s.objs2accounts
          , o = n(140);
        r.updateMyInfo = function(e) {
            s.verifyOptions(e),
            this.processCallback(e),
            e.user = new o(e),
            delete e.user.account,
            this.sendCmd("updateMyInfo", {
                user: e.user,
                single: !0
            }, e.callback)
        }
        ,
        r.getMyInfo = function(e) {
            return (e = e || {}).account = this.account,
            this.getUser(e)
        }
        ,
        r.getUser = function(e) {
            var t, n = this, r = n.db;
            function i() {
                n.sendCmd("getUsers", {
                    accounts: [t],
                    single: !0
                }, e.callback)
            }
            s.verifyOptions(e, "account", "user::getUser"),
            n.processCallback(e),
            e.cbaop = function(e, r) {
                if (!e)
                    return r = r[0] || null,
                    n.logger.log("api::getUser: cbaop " + t, r),
                    r
            }
            ,
            t = e.account,
            e.sync ? i() : r.enable ? r.getUser(t).then(function(r) {
                r ? (n.logger.log("api::getUser: db.getUser " + t, r),
                e.done(null, r)) : i()
            }, i) : i()
        }
        ,
        r.getUsers = function(e) {
            var t, n = this, r = n.db, o = [];
            function a() {
                n.sendCmd("getUsers", {
                    accounts: t,
                    single: !0
                }, e.callback)
            }
            s.verifyOptions(e, "accounts", "user::getUsers"),
            s.verifyParamType("accounts", e.accounts, "array", "user::getUsers"),
            n.processCallback(e),
            e.cbaop = function(e, r) {
                if (!e)
                    return r = r.concat(o),
                    n.logger.log("api::getUsers: cbaop " + t, r),
                    r
            }
            ,
            t = s.deduplicate(e.accounts),
            s.verifyArrayMax("accounts", e.accounts, 150, "user::getUsers"),
            e.sync ? a() : r.enable ? r.getUsers(t).then(function(r) {
                if (r && r.length === t.length)
                    n.logger.log("api::getUsers: db.getUsers", r),
                    e.done(null, r);
                else {
                    o = r;
                    var s = i(r)
                      , c = [];
                    t.forEach(function(e) {
                        -1 === s.indexOf(e) && c.push(e)
                    }),
                    t = c,
                    a()
                }
            }, a) : a()
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(29).fn
          , s = n(0);
        r.markInBlacklist = function(e) {
            s.verifyOptions(e, "account isAdd", "relation::markInBlacklist"),
            s.verifyParamType("isAdd", e.isAdd, "boolean", "relation::markInBlacklist"),
            this.processCallback(e),
            this.sendCmd("markInBlacklist", {
                account: e.account,
                isAdd: e.isAdd
            }, e.callback)
        }
        ,
        r.addToBlacklist = function(e) {
            return e.isAdd = !0,
            this.markInBlacklist(e)
        }
        ,
        r.removeFromBlacklist = function(e) {
            return e.isAdd = !1,
            this.markInBlacklist(e)
        }
        ,
        r.markInMutelist = function(e) {
            s.verifyOptions(e, "account", "relation::markInMutelist"),
            s.verifyParamType("isAdd", e.isAdd, "boolean", "relation::markInMutelist"),
            this.processCallback(e),
            this.sendCmd("markInMutelist", {
                account: e.account,
                isAdd: e.isAdd
            }, e.callback)
        }
        ,
        r.addToMutelist = function(e) {
            return e.isAdd = !0,
            this.markInMutelist(e)
        }
        ,
        r.removeFromMutelist = function(e) {
            return e.isAdd = !1,
            this.markInMutelist(e)
        }
        ,
        r.getRelations = function(e) {
            var t = this
              , n = t.db
              , r = 0;
            function i() {
                t.sendCmd("getRelations", {
                    timetag: r,
                    NOTSTORE: "timetag"
                }, e.callback)
            }
            e = s.verifyOptions(e),
            t.processCallback(e),
            n.enable ? n.getRelationsTimetag().then(function(e) {
                r = e,
                i()
            }, i) : i()
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(29).fn
          , s = n(0);
        r.kick = function(e) {
            s.verifyOptions(e, "deviceIds", "link::kick"),
            this.processCallback(e),
            this.sendCmd("kick", {
                deviceIds: e.deviceIds.slice(0)
            }, e.callback)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(29).fn
          , s = n(0)
          , i = s.isArray
          , o = n(90);
        r.mergeObjArray = function(e, t, n) {
            return e || (e = []),
            t ? (i(t) || (t = [t]),
            t.length ? (n = n || {},
            s.mergeObjArray(e, t, n)) : e) : e
        }
        ,
        r.cutObjArray = function(e, t, n) {
            return e && t ? (i(t) || (t = [t]),
            t.length ? (n = n || {},
            s.cutObjArray(e, t, n)) : e) : e
        }
        ,
        r.mergeLoginPorts = function(e, t) {
            return this.mergeObjArray(e, t, {
                keyPath: "deviceId"
            })
        }
        ,
        r.cutLoginPorts = function(e, t) {
            return this.cutObjArray(e, t, {
                keyPath: "deviceId",
                sortPath: "type"
            })
        }
        ,
        r.mergeRelations = function(e, t) {
            return this.mergeObjArray(e, t, {
                keyPath: "account"
            })
        }
        ,
        r.cutRelations = function(e, t) {
            return this.cutObjArray(e, t, {
                keyPath: "account"
            })
        }
        ,
        r.findRelation = function(e, t) {
            return s.findObjInArray(e, {
                keyPath: "account",
                value: t
            })
        }
        ,
        r.mergeFriends = function(e, t) {
            return this.mergeObjArray(e, t, {
                keyPath: "account"
            })
        }
        ,
        r.cutFriends = function(e, t) {
            return this.cutObjArray(e, t, {
                keyPath: "account"
            })
        }
        ,
        r.cutFriendsByAccounts = function(e, t) {
            i(t) || (t = [t]);
            var n = t.map(function(e) {
                return {
                    account: e
                }
            });
            return this.cutFriends(e, n)
        }
        ,
        r.findFriend = function(e, t) {
            return s.findObjInArray(e, {
                keyPath: "account",
                value: t
            })
        }
        ,
        r.mergeUsers = function(e, t) {
            return this.mergeObjArray(e, t, {
                keyPath: "account"
            })
        }
        ,
        r.findUser = function(e, t) {
            return s.findObjInArray(e, {
                keyPath: "account",
                value: t
            })
        }
        ,
        r.mergeTeams = function(e, t) {
            return this.mergeObjArray(e, t, {
                keyPath: "teamId"
            })
        }
        ,
        r.cutTeams = function(e, t) {
            return this.cutObjArray(e, t, {
                keyPath: "teamId"
            })
        }
        ,
        r.findTeam = function(e, t) {
            return s.findObjInArray(e, {
                keyPath: "teamId",
                value: t
            })
        }
        ,
        r.assembleTeamOwner = o.assembleOwner,
        r.assembleTeamMembers = o.assembleMembers,
        r.genTeamMemberId = o.genId,
        r.mergeTeamMembers = function(e, t) {
            return this.mergeObjArray(e, t)
        }
        ,
        r.cutTeamMembers = function(e, t) {
            return this.cutObjArray(e, t)
        }
        ,
        r.cutTeamMembersByAccounts = function(e, t, n) {
            i(n) || (n = [n]);
            var r = o.assembleMembers({
                teamId: t
            }, n);
            return this.cutTeamMembers(e, r)
        }
        ,
        r.findTeamMember = function(e, t) {
            return s.findObjInArray(e, {
                keyPath: "id",
                value: t
            })
        }
        ,
        r.mergeSessions = function(e, t) {
            return this.mergeObjArray(e, t, {
                sortPath: "updateTime",
                desc: !0
            })
        }
        ,
        r.cutSessions = function(e, t) {
            return this.cutObjArray(e, t)
        }
        ,
        r.cutSessionsByIds = function(e, t) {
            i(t) || (t = [t]);
            var n = t.map(function(e) {
                return {
                    id: e
                }
            });
            return this.cutSessions(e, n)
        }
        ,
        r.findSession = function(e, t) {
            return s.findObjInArray(e, {
                keyPath: "id",
                value: t
            })
        }
        ,
        r.mergeMsgs = function(e, t) {
            return this.mergeObjArray(e, t, {
                keyPath: "idClient",
                sortPath: "time"
            })
        }
        ,
        r.cutMsgs = function(e, t) {
            return this.cutObjArray(e, t, {
                keyPath: "idClient"
            })
        }
        ,
        r.cutMsgsByIdClients = function(e, t) {
            i(t) || (t = [t]);
            var n = t.map(function(e) {
                return {
                    idClient: e
                }
            });
            return this.cutMsgs(e, n)
        }
        ,
        r.findMsg = function(e, t) {
            return s.findObjInArray(e, {
                keyPath: "idClient",
                value: t
            })
        }
        ,
        r.mergeSysMsgs = function(e, t) {
            return this.mergeObjArray(e, t, {
                keyPath: "idServer",
                desc: !0
            })
        }
        ,
        r.cutSysMsgs = function(e, t) {
            return this.cutObjArray(e, t, {
                keyPath: "idServer"
            })
        }
        ,
        r.cutSysMsgsByIdServers = function(e, t) {
            i(t) || (t = [t]);
            var n = t.map(function(e) {
                return {
                    idServer: e
                }
            });
            return this.cutSysMsgs(e, n)
        }
        ,
        r.findSysMsg = function(e, t) {
            return s.findObjInArray(e, {
                keyPath: "idServer",
                value: t
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(73)
          , s = n(0)
          , i = {
            welcome: "00",
            text: "01",
            link: "03"
        }
          , o = {
            "01": "text",
            "02": "image",
            "03": "answer",
            11: "template"
        };
        function a(e) {
            s.verifyOptions(e, "content", "msg::RobotMessage"),
            s.undef(e.robotAccid) && (e.robotAccid = e.to);
            var t = e.content;
            switch (t.type) {
            case "welcome":
                s.undef(e.body) && (this.body = "欢迎消息");
                break;
            case "text":
                s.verifyOptions(t, "content", "msg::RobotMessage"),
                s.undef(e.body) && (this.body = t.content);
                break;
            case "link":
                s.verifyOptions(t, "target", "msg::RobotMessage")
            }
            t.type && (t.type = i[t.type]),
            t = {
                param: t,
                robotAccid: e.robotAccid
            },
            this.attach = JSON.stringify(t),
            e.type = "robot",
            r.call(this, e)
        }
        a.prototype = Object.create(r.prototype),
        a.reverse = function(e) {
            var t = r.reverse(e);
            if ("robot" === t.type) {
                var n = JSON.parse(e.attach);
                if (n.param && (n.param.type = o[n.param.type] || "unknown"),
                n.robotMsg) {
                    var i = (n = s.merge(n, n.robotMsg)).message;
                    "bot" === n.flag ? n.message = i.map(function(e) {
                        return e.type = o[e.type] || "unknown",
                        e
                    }) : n.flag,
                    delete n.robotMsg
                }
                t.content = n
            }
            return t
        }
        ,
        e.exports = a
    }
    , function(e, t, n) {
        "use strict";
        var r = n(73)
          , s = n(0);
        function i(e) {
            s.verifyOptions(e, "tip", "msg::TipMessage"),
            e.type = "tip",
            r.call(this, e),
            this.body = e.tip
        }
        i.prototype = Object.create(r.prototype),
        i.reverse = function(e) {
            var t = r.reverse(e);
            return t.text = "",
            t.tip = e.body,
            e.attach && (t.attach = e.attach),
            t
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = n(73)
          , s = n(0);
        function i(e) {
            s.verifyOptions(e, "content", "msg::CustomMessage"),
            e.type = "custom",
            r.call(this, e),
            this.attach = e.content
        }
        i.prototype = Object.create(r.prototype),
        i.reverse = function(e) {
            var t = r.reverse(e);
            return t.content = e.attach,
            t
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0).notundef
          , s = n(73)
          , i = n(84).IM
          , o = n(126)
          , a = n(140)
          , c = {
            0: "addTeamMembers",
            1: "removeTeamMembers",
            2: "leaveTeam",
            3: "updateTeam",
            4: "dismissTeam",
            5: "passTeamApply",
            6: "transferTeam",
            7: "addTeamManagers",
            8: "removeTeamManagers",
            9: "acceptTeamInvite",
            10: "updateTeamMute",
            101: "netcallMiss",
            102: "netcallBill",
            401: "addSuperTeamMembers",
            402: "removeSuperTeamMembers",
            403: "leaveSuperTeam",
            404: "updateSuperTeam",
            405: "dismissSuperTeam",
            406: "transferSuperTeam",
            407: "addSuperTeamManagers",
            408: "removeSuperTeamManagers",
            409: "updateSuperTeamMembersMute"
        };
        function u() {}
        u.prototype = Object.create(s.prototype),
        u.reverse = function(e) {
            var t = s.reverse(e);
            if (e.attach = e.attach ? "" + e.attach : "",
            e.attach) {
                var n = JSON.parse(e.attach);
                if (t.attach = {
                    type: c[n.id] || n.id
                },
                r(n.data)) {
                    var u = n.data;
                    r(u.tinfo) && (t.attach.team = o.reverse(i.syncUnserialize(u.tinfo, "team"), !0)),
                    r(u.ids) && (t.attach.accounts = u.ids),
                    r(u.id) && (t.attach.account = u.id),
                    r(u.uinfos) && (t.attach.users = u.uinfos.map(function(e) {
                        return a.reverse(i.syncUnserialize(e, "user"))
                    })),
                    r(u.mute) && (t.attach.mute = 1 == +u.mute),
                    r(u.attach) && (t.attach.custom = u.attach),
                    r(u.channel) && (t.attach.channelId = u.channel),
                    r(u.calltype) && (t.attach.netcallType = u.calltype),
                    r(u.duration) && (t.attach.duration = u.duration),
                    r(u.time) && (t.attach.time = u.time),
                    r(u.from) && (t.attach.from = u.from),
                    r(u.ext) && (t.attach.ext = u.ext),
                    t.attach.accounts && t.attach.accounts.length <= 2 && t.from === t.to && t.attach.accounts.some(function(e) {
                        if (e !== t.to)
                            return t.to = e,
                            !0
                    })
                }
            } else
                t.attach = {};
            return t
        }
        ,
        e.exports = u
    }
    , function(e, t, n) {
        "use strict";
        var r = n(73)
          , s = n(0);
        function i(e) {
            e.type = "geo",
            s.verifyOptions(e, "geo", "msg::GeoMessage"),
            s.verifyOptions(e.geo, "lng lat title", !0, "geo.", "msg::GeoMessage"),
            s.verifyParamType("geo.lng", e.geo.lng, "number", "msg::GeoMessage"),
            s.verifyParamType("geo.lat", e.geo.lat, "number", "msg::GeoMessage"),
            s.verifyParamType("geo.title", e.geo.title, "string", "msg::GeoMessage"),
            r.call(this, e),
            this.attach = JSON.stringify(e.geo)
        }
        i.prototype = Object.create(r.prototype),
        i.reverse = function(e) {
            var t = r.reverse(e);
            return e.attach = e.attach ? "" + e.attach : "",
            t.geo = e.attach ? JSON.parse(e.attach) : {},
            t
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = n(133)
          , s = n(0);
        function i() {}
        i.prototype = Object.create(r.prototype),
        i.verifyFile = function(e, t) {
            s.verifyOptions(e, "dur w h", !0, "file.", t)
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = n(133)
          , s = n(0);
        function i() {}
        i.prototype = Object.create(r.prototype),
        i.verifyFile = function(e, t) {
            s.verifyOptions(e, "dur", !0, "file.", t)
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = n(133);
        function i() {}
        i.prototype = Object.create(s.prototype),
        i.verifyFile = function(e, t) {
            r.verifyOptions(e, "w h", !0, "file.", t)
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = n(73)
          , s = n(0);
        function i(e) {
            s.verifyOptions(e, "text", "msg::TextMessage"),
            e.type = "text",
            r.call(this, e)
        }
        i.prototype = Object.create(r.prototype),
        i.reverse = function(e) {
            return r.reverse(e)
        }
        ,
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , s = function(e) {
            this.account = e.account
        }
          , i = s.prototype
          , o = i.Message = n(73)
          , a = i.TextMessage = n(431)
          , c = i.FileMessage = n(133)
          , u = i.GeoMessage = n(427)
          , m = i.NotificationMessage = n(426)
          , l = i.CustomMessage = n(425)
          , d = i.TipMessage = n(424)
          , p = i.RobotMessage = n(423);
        i.validScenes = o.validScenes,
        i.validTypes = o.validTypes,
        i.reverse = function(e) {
            var t;
            switch (o.getType(e)) {
            case "text":
                t = a.reverse(e);
                break;
            case "image":
            case "audio":
            case "video":
            case "file":
                t = c.reverse(e);
                break;
            case "geo":
                t = u.reverse(e);
                break;
            case "notification":
                t = m.reverse(e);
                break;
            case "custom":
                t = l.reverse(e);
                break;
            case "tip":
                t = d.reverse(e);
                break;
            case "robot":
                t = p.reverse(e);
                break;
            default:
                t = o.reverse(e)
            }
            return o.setExtra(t, this.account),
            t
        }
        ,
        i.reverseMsgs = function(e, t) {
            var n, s, i = this;
            return e.map(function(e) {
                return e = i.reverse(e),
                t && ((n = t.modifyObj) && (e = r.merge(e, n)),
                s = t.mapper,
                r.isFunction(s) && (e = s(e))),
                e
            })
        }
        ,
        e.exports = s
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(56), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        var o = n(25).fn
          , a = n(0)
          , c = i.default.clientTypeMap;
        function u(e) {
            e = e || {};
            var t = a.copy(e);
            return t.clientType && (t.clientType = c[t.clientType] || ""),
            t.serverCustom && (t.custom = JSON.parse(t.serverCustom),
            "string" == typeof t.custom[0] && (t.custom = t.custom[0]),
            delete t.serverCustom),
            t
        }
        o.processEventService = function(e) {
            var t = e.content
              , n = e.error
              , r = this.options || {};
            switch (n && (n.callFunc = "events::processEventService",
            this.onCustomError("事件服务解包失败", "EVENT_SERVICE_ERROR", n)),
            e.cmd) {
            case "pushEvent":
                if (a.isFunction(r.onpushevents)) {
                    var s = {
                        msgEvents: [u(t.msgEvent)]
                    };
                    r.onpushevents(s)
                }
                break;
            case "pushEvents":
                if (a.isFunction(r.onpushevents)) {
                    var i = t.msgEvents;
                    i = {
                        msgEvents: i.map(function(e) {
                            return u(e)
                        })
                    },
                    r.onpushevents(i)
                }
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        n(25).fn.processFilter = function(e) {
            switch (e.cmd) {
            case "sendFilterMsg":
                this.onSendMsg(e, !0);
                break;
            case "filterMsg":
                this.onMsg(e, !0);
                break;
            case "filterSysMsg":
                this.onSysMsg(e, !0);
                break;
            case "sendFilterCustomSysMsg":
                this.onSendSysMsg(e, !0)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(25).fn;
        r.processChatroom = function(e) {
            switch (e.cmd) {
            case "getChatroomAddress":
                this.onChatroomAddress(e)
            }
        }
        ,
        r.onChatroomAddress = function(e) {
            e.error || (e.obj.address = e.content.address)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(25).fn;
        r.syncSessionAck = function(e) {
            var t = this
              , n = t.db
              , r = Promise.resolve();
            [[e.content.p2p, "p2p"], [e.content.team.m_map, "team"]].forEach(function(e) {
                var s = e[0]
                  , i = e[1];
                Object.keys(s).forEach(function(e) {
                    var o = i + "-" + e
                      , a = {
                        id: o,
                        ack: s[e]
                    };
                    n.enable && (r = r.then(function() {
                        return n.putSession(a)
                    }).then(function() {
                        t.markUnreadBySessionAck({
                            sessionId: o,
                            ack: s[e]
                        })
                    })),
                    t.mergeSession(a)
                })
            }),
            t.logger.warn("session::syncSessionAck: parse offline session ack", t.sessionSet);
            var s = e.content.timetag;
            n.enable && (r = r.then(function() {
                return t.db.updateSessionAck(s)
            }).catch(function(e) {
                return t.logger.error("sessionAck::syncSessionAck: ", e),
                Promise.reject(e)
            })),
            r.cmd = "sessionAck",
            t.syncPromiseArray.push(r)
        }
        ,
        r.onMarkSessionAck = function(e) {
            e.error || this.storeSessionAck(e.obj)
        }
        ,
        r.syncMarkSessionAck = function(e) {
            this.storeSessionAck(e.content)
        }
        ,
        r.storeSessionAck = function(e) {
            if (this.options.syncSessionUnread) {
                var t = this.db
                  , n = (0 === e.scene ? "p2p" : "team") + "-" + e.to
                  , r = e.timetag;
                if (r <= ((this.findSession(n) || {}).ack || 0))
                    this.logger.warn("session::storeSessionAck: ack <= ackInMemory", r);
                else {
                    var s = {
                        id: n,
                        ack: r
                    };
                    this.mergeSession(s),
                    t.enable && t.updateSession(s),
                    this.logger.info("session::storeSessionAck:", s),
                    this.markUnreadBySessionAck({
                        sessionId: n,
                        ack: s.ack
                    })
                }
            }
        }
        ,
        r.markUnreadBySessionAck = function(e) {
            var t = e.sessionId
              , n = e.ack
              , r = this
              , s = r.db;
            if (s.enable)
                r.pushMsgTask(function() {
                    return s.getMsgCountAfterAck({
                        shouldCountNotifyUnread: r.options.shouldCountNotifyUnread,
                        sessionId: t,
                        ack: n
                    }).then(function(e) {
                        var n = {
                            id: t,
                            unread: e
                        };
                        return r.logger.log("session::markUnreadBySessionAck: db.getMsgCountAfterAck done"),
                        r.syncing && r.cacheSyncedSession(n),
                        r.onUpdateSession(n),
                        s.updateSession(n)
                    })
                });
            else {
                var i = r.findSession(t);
                if (i) {
                    var o = i.unreadMsgs;
                    if (o && o.length) {
                        for (var a = 0, c = [], u = o.length - 1; u >= 0; u--) {
                            var m = o[u];
                            if (!(m.time > n))
                                break;
                            a++,
                            c.push(m)
                        }
                        i.unreadMsgs = c,
                        i.unread = a,
                        r.logger.info("session::markUnreadBySessionAck: unread " + a),
                        r.onUpdateSession(i)
                    }
                }
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(122), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        var o = n(25).fn
          , a = n(0)
          , c = n(123)
          , u = n(26);
        o.mergeSession = function(e) {
            e = a.copyWithNull(e);
            var t = this.sessionSet
              , n = e.id
              , r = t[n];
            if (r && r.lastMsg && e && e.lastMsg && e.lastMsg.isLocal) {
                var s = r.lastMsg.time || 0;
                if ((e.lastMsg.time || 0) < s)
                    return r
            }
            return t[n] = a.merge(r, e),
            e = t[n],
            a.undef(e.unread) && (e.unread = 0),
            e
        }
        ,
        o.mergeSessions = function(e) {
            var t = this;
            (e = e || []).forEach(function(e) {
                t.mergeSession(e)
            })
        }
        ,
        o.deleteLocalSession = function(e) {
            var t = this;
            a.isArray(e) || (e = [e]),
            e.forEach(function(e) {
                delete t.sessionSet[e]
            })
        }
        ,
        o.onDeleteSessions = function(e) {
            e.obj = e.obj.sessions.map(function(e) {
                return c.parse(e)
            })
        }
        ,
        o.onUpdateSession = function(e) {
            var t = this;
            return new Promise(function(n) {
                e ? (e = t.mergeSession(e),
                e = a.simpleClone(e),
                c.trim(e),
                c.isComplete(e) && (t.logger.info("session::onUpdateSession:", e.id, a.simpleClone(e)),
                t.options.onupdatesession(e),
                n(e))) : n(e)
            }
            )
        }
        ,
        o.setCurrSession = function(e) {
            e = "" + e,
            this.currSessionId = e,
            this.logger.info("session::setCurrSession:", e)
        }
        ,
        o.findSession = function(e) {
            return this.sessionSet[e]
        }
        ,
        o.resetSessionUnread = function(e) {
            e = "" + e;
            var t = this.db;
            if (this.findSession(e)) {
                if (t.enable && t.resetSessionUnread(e),
                !this.options.autoMarkRead && this.sessionUnreadMsgs && this.sessionUnreadMsgs[e]) {
                    var n = this.sessionUnreadMsgs[e];
                    this.markMsgRead(n, !0),
                    this.sessionUnreadMsgs[e] = []
                }
                this.onUpdateSession({
                    id: e,
                    unread: 0
                })
            } else
                this.logger.warn("session::resetSessionUnread: no session " + e)
        }
        ,
        o.insertLocalSession = function(e) {
            var t = this
              , n = t.db
              , r = t.sessionSet;
            return new Promise(function(s, i) {
                var o = e.scene
                  , m = e.to
                  , l = o + "-" + m
                  , d = t.findSession(l);
                if (d)
                    i(u.sessionExist({
                        callFunc: "session::insertLocalSession",
                        session: d
                    }));
                else {
                    var p;
                    if (a.isNumber(e.updateTime))
                        p = e.updateTime;
                    else {
                        var f, g = [];
                        for (var h in r)
                            r.hasOwnProperty(h) && (f = r[h],
                            a.isNumber(f.updateTime) && g.push(f.updateTime));
                        p = Math.max.apply(Math, g) + 1,
                        p = Math.max(p, +new Date)
                    }
                    var y = Promise.resolve();
                    n.enable && (y = n.getMsgs({
                        sessionId: l,
                        limit: 1
                    })),
                    y.then(function(e) {
                        if (a.isArray(e) && 1 === e.length) {
                            var r = e[0];
                            (d = c.genSessionByMsg(r)).updateTime = p
                        } else
                            d = {
                                id: l,
                                scene: o,
                                to: m,
                                updateTime: p,
                                lastMsg: null
                            };
                        n.enable ? n.putSession(d).then(s, i) : s(d),
                        t.onUpdateSession(d)
                    })
                }
            }
            )
        }
        ,
        o.updateLocalSession = function(e, t) {
            var n = this;
            return new Promise(function(r, s) {
                var i = n.db;
                if (n.findSession(e.id)) {
                    var o = Promise.resolve()
                      , c = a.filterObj(e, "id lastMsg localCustom unread");
                    i.enable && (o = i.updateSession(c)),
                    o.then(function(e) {
                        return n.onUpdateSession(e, t)
                    }).then(r, function(e) {
                        s({
                            callFunc: "session::updateLocalSession",
                            event: e
                        })
                    })
                } else
                    s(u.sessionNotExist({
                        sessionId: e.id,
                        callFunc: "session::updateLocalSession"
                    }))
            }
            )
        }
        ,
        o.checkAndUpdateLocalSessionByMsg = function(e) {
            var t, n = this.db, r = this, s = this.options.syncSessionUnread && e !== this.currSessionId, o = n.getMsgs({
                sessionId: e,
                limit: 1
            }), a = n.getSession(e).then(function(i) {
                if (i)
                    return t = Object.assign({}, i),
                    i.ack = i.ack || 0,
                    s ? n.getMsgs({
                        sessionId: e,
                        start: i.ack
                    }) : Promise.resolve();
                r.logger.error("can't find session that sessionId = " + e)
            });
            return Promise.all([o, a]).then(function(s) {
                var o, a, c = (0,
                i.default)(s, 2), u = c[0], m = c[1], l = {
                    id: e
                };
                if (o = t.lastMsg ? t.lastMsg.idClient : null,
                u && u[0] ? a = (u = u[0]).idClient : (a = null,
                u = null),
                o !== a && (l.lastMsg = u),
                void 0 !== m) {
                    var d = 0;
                    (m = m || []).forEach(function(e) {
                        e.isUnreadable && "in" === e.flow && ("notification" !== e.type || r.options.shouldCountNotifyUnread(msg)) && d++
                    }),
                    d !== t.unread && (l.unread = d)
                }
                return Object.keys(l).length > 1 ? (r.logger.log("session::checkAndUpdateLocalSessionByMsg::needUpdate newSession:", l),
                n.updateSession(l).then(function(e) {
                    return r.onUpdateSession(l)
                })) : Promise.resolve(200)
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(25).fn
          , s = n(0)
          , i = n(124);
        r.splitSysMsgs = function(e, t) {
            for (var n, r = e.length - 1; r >= 0; r--)
                n = e[r],
                i.isCustom(n) && (e.splice(r, 1),
                t.push(n))
        }
        ,
        r.onOfflineSysMsgs = function(e, t) {
            var n = this
              , r = e.content.sysMsgs.map(function(e) {
                return e = i.reverse(e),
                t && (e.filter = !0),
                e
            });
            r = r.reverse(),
            n.markSysMsgRead(r);
            var s = [];
            n.splitSysMsgs(r, s);
            var o = t ? "offlineFilterSysMsgs" : "offlineSysMsgs"
              , a = t ? "offlineFilterCustomSysMsgs" : "offlineCustomSysMsgs";
            if (r.length) {
                var c = n.putSysMsg(r, "offlineSysMsgs").then(function(e) {
                    (r = e).length && (n.logger.info("sysmsg::onOfflineSysMsgs: ", o, r.length, r),
                    n.syncResult[o] = n.syncResult[o] || [],
                    n.syncResult[o] = n.syncResult[o].concat(r))
                }).catch(function(e) {
                    return n.logger.error("sysMsg::onOfflineSysMsgs: ", e),
                    Promise.reject(e)
                });
                c.cmd = "sysMsgs",
                n.syncPromiseArray.push(c)
            }
            s.length && (n.logger.info("sysmsg::onOfflineSysMsgs: ", a, s),
            n.syncResult[a] = n.syncResult[a] || [],
            n.syncResult[a] = n.syncResult[a].concat(s))
        }
        ,
        r.onSendSysMsg = function(e, t) {
            var n = e.obj;
            this.completeSysMsg(n),
            e.error ? n.status = "fail" : n.status = "success",
            n = i.reverse(n),
            t && (e.obj.filter = !0),
            e.obj = n
        }
        ,
        r.completeSysMsg = function(e) {
            return e.from = this.account,
            e
        }
        ,
        r.onSysMsg = function(e, t) {
            var n = i.reverse(e.content.sysMsg);
            this.markSysMsgRead(n),
            t && (n.filter = !0),
            i.isCustom(n) ? (this.logger.info("sysmsg::onSysMsg: on customSysMsg", n),
            this.options.oncustomsysmsg(n)) : this.syncing ? this.unhandledSysMsgs.push(n) : this.handleSysMsg(n)
        }
        ,
        r.handleSysMsg = function(e) {
            var t = this
              , n = e.type
              , r = e.from;
            t.sysMsgPromise = t.sysMsgPromise.then(function() {
                return t.putSysMsg(e, "onSysMsg")
            }).then(function(t) {
                e = t[0]
            }).then(function() {
                if (e) {
                    var s, i = Promise.resolve();
                    switch (n) {
                    case "addFriend":
                        s = {
                            type: "addFriend",
                            account: r
                        },
                        i = t.onFriendRequest(s);
                        break;
                    case "passFriendApply":
                        s = {
                            type: "passFriendApply",
                            account: r
                        },
                        i = t.onFriendRequest(s);
                        break;
                    case "deleteFriend":
                        i = t.onDeleteFriend({
                            account: r
                        })
                    }
                    return s && s.friend && (e.friend = s.friend),
                    i
                }
            }).then(function() {
                e && (t.logger.info("sysmsg::handleSysMsg: ", n, e),
                setTimeout(function() {
                    t.options.onsysmsg(e)
                }, 0))
            })
        }
        ,
        r.putSysMsg = function(e, t) {
            if (s.isArray(e) || (e = [e]),
            e[0].filter)
                return Promise.resolve(e);
            var n = this
              , r = n.db
              , i = r.enable
              , o = Promise.resolve()
              , a = [];
            return (o = (o = o.then(function() {
                return i ? r.putSysMsg(e) : e
            }).then(function(t) {
                var r = [];
                e.forEach(function(e) {
                    n.checkSysMsgUnique(e) && r.push(e)
                }),
                e = r,
                a = i ? t : e
            })).then(function() {
                return n.getSysMsgUnread().then(function(r) {
                    return a.length || ((a = e).backward = !0),
                    n.updateSysMsgUnread(a, r, 1).then(function(e) {
                        "offlineSysMsgs" === t && (n.syncResult.sysMsgUnread = e),
                        "onSysMsg" === t && n.onUpdateSysMsgUnread(e)
                    })
                })
            })).then(function() {
                return e
            })
        }
        ,
        r.checkSysMsgUnique = s.genCheckUniqueFunc("idServer"),
        r.getSysMsgUnread = function() {
            var e = this
              , t = e.db;
            return new Promise(function(n) {
                t.enable ? t.getSysMsgUnread().then(function(e) {
                    n(e)
                }, function() {
                    n(e.sysMsgUnread)
                }) : n(e.sysMsgUnread)
            }
            )
        }
        ,
        r.updateSysMsgUnread = function(e, t, n) {
            if (s.isArray(e) || (e = [e]),
            !e.length)
                return Promise.resolve(t);
            t = t || {};
            var r, o = this.db;
            return e.forEach(function(e) {
                (n > 0 && !e.read || n < 0 && e.read) && (r = e.type,
                t[r] = (t[r] || 0) + n)
            }),
            t = i.completeUnread(t),
            this.sysMsgUnread = t,
            o.enable && !e.backward ? o.updateSysMsgUnread(t) : Promise.resolve(t)
        }
        ,
        r.reduceSysMsgUnread = function(e) {
            var t = this;
            return t.getSysMsgUnread().then(function(n) {
                return t.updateSysMsgUnread(e, n, -1)
            }).then(function(e) {
                t.onUpdateSysMsgUnread(e)
            })
        }
        ,
        r.onUpdateSysMsgUnread = function(e) {
            var t = this;
            setTimeout(function() {
                t.logger.info("sysmsg::onUpdateSysMsgUnread:", e),
                t.options.onupdatesysmsgunread(e)
            }, 0)
        }
        ,
        r.updateSysMsg = function(e) {
            var t = this
              , n = t.db;
            (n.enable ? n.updateSysMsg(e) : Promise.resolve(e)).then(function(e) {
                t.onUpdateSysMsg(e)
            })
        }
        ,
        r.onUpdateSysMsg = function(e) {
            var t = this;
            setTimeout(function() {
                s.isArray(e) || (e = [e]),
                e.forEach(function(e) {
                    t.logger.info("sysmsg::onUpdateSysMsg:", e),
                    t.options.onupdatesysmsg(e)
                })
            }, 0)
        }
        ,
        r.processUnsettledSysMsgs = function() {
            var e = this;
            e.unhandledSysMsgs.forEach(function(t) {
                e.handleSysMsg(t)
            }),
            e.resetUnsettledSysMsgs()
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(25).fn
          , s = n(124)
          , i = n(123)
          , o = n(0);
        r.onDeleteMsg = function(e) {
            var t = this.db;
            delete e.obj.sysMsg,
            e.error || (e.promise = this.deleteLocalMsg(e.obj.msg).then(function() {
                var n = e.obj.msg;
                t.enable && t.getTimetag("deleteMsg").then(function(e) {
                    e = e || 0,
                    n.time >= e && t.updateDeleteMsgTimetag((new Date).getTime())
                })
            }))
        }
        ,
        r.onMsgDeleted = function(e) {
            if (!e.error) {
                var t = this
                  , n = t.db
                  , r = s.reverse(e.content.sysMsg);
                r = t.processDeleteMsgSysMsg(r),
                t.markSysMsgRead(r),
                t.deleteLocalMsg(r.msg).then(function() {
                    n.enable && n.updateDeleteMsgTimetag(r.time + 1),
                    t.handleSysMsg(r)
                })
            }
        }
        ,
        r.processDeleteMsgSysMsg = function(e) {
            return e.msg = {},
            ["scene", "from", "to"].forEach(function(t) {
                e.msg[t] = e[t]
            }),
            e.msg.idClient = e.deletedIdClient,
            e.msg.idServer = e.deletedIdServer,
            e.msg.time = e.deletedMsgTime,
            e.msg.fromNick = e.deletedMsgFromNick,
            e.opeAccount = e.opeAccount || e.from,
            e.msg.opeAccount = e.opeAccount,
            this.message.Message.setExtra(e.msg, this.account),
            e
        }
        ,
        r.onDeleteMsgOfflineRoaming = function(e) {
            if (!e.error) {
                var t = this
                  , n = 1 == +e.content.type ? "offline" : "roaming"
                  , r = s.reverseSysMsgs(e.content.sysMsgs, {
                    mapper: function(e) {
                        return t.processDeleteMsgSysMsg(e)
                    }
                });
                t.logger.info("msg::onDeleteMsgOfflineRoaming: on delete " + n, r),
                "offline" === n && t.markSysMsgRead(r);
                var i = e.content.timetag;
                t.timetags.deleteMsg = i,
                t.syncResult.deleteMsgTimetag = i;
                var o = t.putSysMsg(r, "offlineSysMsgs").catch(function(e) {
                    return t.logger.error("msgDelete::onDeleteMsgOfflineRoaming: ", e),
                    Promise.reject(e)
                });
                o.cmd = "deleteMsgSysMsgs " + n,
                t.syncPromiseArray.push(o),
                t.syncResult.deleteMsgSysMsgs = t.syncResult.deleteMsgSysMsgs || [],
                t.syncResult.deleteMsgSysMsgs.push({
                    type: n,
                    sysMsgs: r
                })
            }
        }
        ,
        r.deleteMsgOfflineRoaming = function(e, t) {
            if (!e)
                return Promise.resolve();
            var n = this;
            n.logger.info("msg::deleteMsgOfflineRoaming: ", e, t);
            var r = n.db
              , s = [];
            return e.forEach(function(e) {
                e.sysMsgs.forEach(function(e) {
                    var a = n.deleteLocalMsg(e.msg, {
                        cbUpdateSession: function(e) {
                            e = n.mergeSession(e),
                            e = o.simpleClone(e),
                            i.trim(e);
                            var s = o.findObjIndexInArray(t, {
                                value: e.id
                            });
                            if (-1 !== s && (t[s] = o.merge({}, t[s], e)),
                            r.enable)
                                return r.updateSession(e)
                        }
                    });
                    s.push(a)
                })
            }),
            Promise.all(s).then(function() {
                if (r.enable)
                    return r.updateDeleteMsgTimetag(n.syncResult.deleteMsgTimetag)
            })
        }
        ,
        r.deleteLocalMsg = function(e, t) {
            var n = this
              , r = n.db
              , s = (t = t || {}).cbUpdateSession || n.updateLocalSession.bind(n);
            if (r.enable && e) {
                var i = !1
                  , o = null
                  , a = null
                  , c = e.sessionId;
                return r.getMsgs({
                    sessionId: c,
                    limit: 1
                }).then(function(t) {
                    t && t[0] && t[0].idClient === e.idClient && (i = !0)
                }).then(function() {
                    return r.getMsgByIdClient(e.idClient)
                }).then(function(t) {
                    return a = t,
                    r.deleteMsg(e.idClient)
                }).then(function() {
                    if (i)
                        return r.getMsgs({
                            sessionId: c,
                            limit: 1
                        })
                }).then(function(e) {
                    i && e && e[0] && (o = e[0])
                }).then(function() {
                    if (n.options.rollbackDelMsgUnread)
                        return r.getSessions({
                            sessionId: c
                        })
                }).then(function(e) {
                    var t = {
                        id: c
                    };
                    i && (t.lastMsg = o);
                    var r = e && e.msgReceiptTime || 0;
                    return e && a && r < a.time && n.options.account === a.to && e.unread && (n.logger.log("msgDelete::deleteLocalMsg:db.getSessions: ", e),
                    t.unread = e.unread - 1),
                    s(t)
                })
            }
            if (n.options.rollbackDelMsgUnread && e && e.sessionId) {
                var u = n.findSession(e.sessionId)
                  , m = u.msgReceiptTime || 0;
                u && m < e.time && n.options.account === e.to && u.unread && (n.logger.log("msgDelete::deleteLocalMsg:getSessions: ", u),
                u.unread = u.unread - 1,
                n.onUpdateSession(u))
            }
            return Promise.resolve()
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(25).fn
          , s = n(0);
        r.onOfflineMsgReceipts = function(e) {
            var t, n = this, r = n.db, s = e.content.msgReceipts, i = n.syncResult.msgReceipts = [], o = [], a = "msgReceipts", c = n.syncResult.sessions || {};
            s.forEach(function(e) {
                e.time = +e.time;
                var s = e.sessionId = "p2p-" + e.from;
                a += "-" + s,
                t = Promise.resolve();
                var u = c[s];
                r.enable ? t = r.getSession(s).then(function(t) {
                    if ((t = t || u) && n.shouldUpdateSessionFromMsgReceipt(t, e)) {
                        var i = n.genSessionFromMsgReceipt(t, e)
                          , o = n.syncResult.sessions;
                        return o && o[s] && (o = o[s]).lastMsg && i.lastMsg && o.lastMsg.time > i.lastMsg.time && (i.lastMsg = o.lastMsg),
                        r.putSession(i).then(function(e) {
                            e && n.cacheSyncedSession(e)
                        })
                    }
                }).catch(function(e) {
                    return n.logger.error("msgReceipt::onOfflineMsgReceipt: ", e),
                    Promise.reject(e)
                }) : u && i.push(e),
                o.push(t)
            }),
            (t = Promise.all(o).then(function() {
                if (r.enable)
                    return r.updateMsgReceiptsTimetag(e.content.timetag)
            })).cmd = a,
            n.syncPromiseArray.push(t)
        }
        ,
        r.mergeSessionAndMsgReceipts = function(e, t) {
            var n = this
              , r = {};
            return t = t || [],
            (e = e || []).forEach(function(e) {
                r[e.id] = e
            }),
            t.forEach(function(t) {
                var s = r[t.sessionId];
                if (n.shouldUpdateSessionFromMsgReceipt(s, t)) {
                    var i = n.genSessionFromMsgReceipt(s, t);
                    e = n.api.mergeSessions(e, i)
                }
            }),
            e
        }
        ,
        r.shouldUpdateSessionFromMsgReceipt = function(e, t) {
            return !e || !e.msgReceiptServerTime || t.time > e.msgReceiptServerTime
        }
        ,
        r.genSessionFromMsgReceipt = function(e, t) {
            var n = t.time
              , r = {
                id: t.sessionId,
                msgReceiptTime: n,
                msgReceiptServerTime: n
            };
            return e && e.id === t.sessionId && (r = s.merge({}, e, r)),
            e && e.updateTime || (r.updateTime = n),
            r
        }
        ,
        r.onMsgReceipt = function(e) {
            var t = this
              , n = t.db
              , r = e.content.msgReceipt;
            r.time = +r.time;
            var s = r.idClient
              , i = Promise.resolve();
            n.enable && s && (i = n.getMsgByIdClient(s)),
            i.then(function(e) {
                var n;
                if (e) {
                    if (!e.idServer)
                        return void (t.msgReceiptTasks[s] = r);
                    n = e.time
                } else
                    n = r.time;
                r.msgReceiptTime = n,
                t.updateSessionMsgReceiptTime(r)
            })
        }
        ,
        r.resolveMsgReceiptTask = function(e) {
            var t = this.msgReceiptTasks[e.idClient];
            t && (t.msgReceiptTime = e.time,
            this.updateSessionMsgReceiptTime(t))
        }
        ,
        r.updateSessionMsgReceiptTime = function(e) {
            var t = this.db
              , n = {
                id: "p2p-" + e.from,
                msgReceiptTime: e.msgReceiptTime,
                msgReceiptServerTime: e.time
            };
            t.enable && t.putSession(n),
            this.onUpdateSession(n)
        }
        ,
        r.onSendMsgReceipt = function(e) {
            if (!e.error) {
                var t = e.obj.msgReceipt
                  , n = +t.time
                  , r = +e.content.msgReceipt.time;
                this.sessionSet["p2p-" + t.to].msgReceiptSendTime = Math.min(n, r)
            }
        }
        ,
        r.shouldSendMsgReceipt = function(e) {
            if (e && "p2p" === e.scene && "success" === e.status) {
                var t = this.sessionSet[e.sessionId];
                if (t) {
                    var n = t.msgReceiptSendTime;
                    return !n || n < e.time
                }
            }
            return !1
        }
        ,
        r.isMsgRemoteRead = function(e) {
            if (e && "p2p" === e.scene && "out" === e.flow && "success" === e.status) {
                var t = this.sessionSet[e.sessionId];
                if (t && t.msgReceiptTime)
                    return e.time <= t.msgReceiptTime
            }
            return !1
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(25).fn
          , s = n(0)
          , i = s.undef
          , o = n(56)
          , a = n(90)
          , c = n(146)
          , u = n(123)
          , m = n(186);
        r.processMsg = function(e) {
            switch (e.cmd) {
            case "sendMsg":
                this.onSendMsg(e);
                break;
            case "msg":
                this.onMsg(e);
                break;
            case "sysMsg":
                this.onSysMsg(e);
                break;
            case "broadcastMsg":
                this.onBroadcastMsg(e);
                break;
            case "sendCustomSysMsg":
                this.onSendSysMsg(e);
                break;
            case "getHistoryMsgs":
            case "searchHistoryMsgs":
                this.onHistoryMsgs(e);
                break;
            case "syncSendMsg":
                this.onMsg(e);
                break;
            case "deleteSessions":
                this.onDeleteSessions(e);
                break;
            case "sendMsgReceipt":
                this.onSendMsgReceipt(e);
                break;
            case "msgReceipt":
                this.onMsgReceipt(e);
                break;
            case "onDeleteMsg":
                this.onDeleteMsg(e);
                break;
            case "onMsgDeleted":
                this.onMsgDeleted(e);
                break;
            case "onDeleteMsgOfflineRoaming":
                this.onDeleteMsgOfflineRoaming(e);
                break;
            case "onMarkSessionAck":
                this.onMarkSessionAck(e);
                break;
            case "syncMarkSessionAck":
                this.syncMarkSessionAck(e)
            }
        }
        ,
        r.checkIgnore = function(e) {
            var t = this;
            e.forEach(function(e) {
                "notification" === e.type && !e.ignore && t.options.shouldIgnoreNotification(e) && (e.ignore = !0)
            })
        }
        ,
        r.filterIgnore = function(e) {
            return e.filter(function(e) {
                return !e.ignore
            })
        }
        ,
        r.genSessionByMsgs = function(e) {
            return this.checkIgnore(e),
            u.genSessionByMsgs(this.message.Message, e)
        }
        ,
        r.onRoamingMsgs = function(e) {
            var t = this
              , n = t.message
              , r = n.Message
              , s = r.getMaxTimetag
              , i = n.reverseMsgs(e.content.msgs)
              , o = s(i);
            i = r.sortMsgs(i);
            var a = (i = r.deduplication(i))[0]
              , c = a.sessionId
              , u = t.genSessionByMsgs(i);
            t.cacheSyncedSession(u);
            var m = t.putMsg(i, "roamingMsgs").then(function(e) {
                i = e,
                (i = t.filterIgnore(i)).length && (t.logger.info("msg::onRoamingMsgs: putRoamingMsgs", c, i.length, i),
                t.syncResult.roamingMsgs = t.syncResult.roamingMsgs || [],
                t.syncResult.roamingMsgs.push({
                    sessionId: c,
                    scene: a.scene,
                    to: a.target,
                    msgs: i,
                    timetag: o
                }),
                t.syncing || t.onSyncDone())
            }).catch(function(e) {
                return t.logger.error("msg::onRoamingMsgs: ", e),
                Promise.reject(e)
            });
            m.cmd = "roamingMsgs-" + c,
            t.syncPromiseArray.push(m)
        }
        ,
        r.onOfflineMsgs = function(e, t) {
            var n = this
              , r = n.message
              , s = r.Message
              , i = null;
            t && (i = {
                filter: !0
            });
            var o, a, c = r.reverseMsgs(e.content.msgs, {
                modifyObj: i
            }), u = [], m = "", l = t ? "offlineFilterMsgs" : "offlineMsgs";
            function d(e) {
                if (u.length) {
                    var t = s.getMaxTimetag(u)
                      , r = u[0].scene
                      , i = u[0].target;
                    n.markMsgRead(u),
                    u = s.sortMsgs(u),
                    u = s.deduplication(u);
                    var o = n.genSessionByMsgs(u);
                    n.cacheSyncedSession(o),
                    (a = n.putMsg(u, "offlineMsgs").then(function(s) {
                        u = s,
                        (u = n.filterIgnore(u)).length && (n.logger.info("msg::onOfflineMsgs： toreLastSession", l, e, u.length, u),
                        n.syncResult[l] = n.syncResult[l] || [],
                        n.syncResult[l].push({
                            sessionId: e,
                            scene: r,
                            to: i,
                            msgs: u,
                            timetag: t
                        }))
                    }).catch(function(e) {
                        return n.logger.error("msg::onOfflineMsgs: ", e),
                        Promise.reject(e)
                    })).cmd = "offlineMsgs-" + e,
                    n.syncPromiseArray.push(a)
                }
            }
            c.forEach(function(e) {
                (o = e.sessionId) !== m ? (d(m),
                (u = []).push(e),
                m = o) : u.push(e)
            }),
            d(m)
        }
        ,
        r.markUnreadByMsgsPromise = function(e) {
            var t = this
              , n = t.db;
            n.enable && n.getSession(e).then(function(n) {
                n.ack && t.markUnreadBySessionAck({
                    sessionId: e,
                    ack: n.ack
                })
            })
        }
        ,
        r.completeMsg = function(e) {
            return e.from = this.account,
            e.fromNick = this.myInfo && this.myInfo.nick,
            e.fromClientType = "Web",
            e.fromDeviceId = o.deviceId,
            e.time || (e.time = +new Date),
            e
        }
        ,
        r.onMsgs = function(e) {
            var t = this;
            t.message.reverseMsgs(e.content.msgs, {
                mapper: function(e) {
                    t.handleMsg(e)
                }
            })
        }
        ,
        r.onMsg = function(e, t) {
            var n = this.message.reverse(e.content.msg);
            t && (n.filter = !0),
            this.syncing ? (this.logger.log("msg::onMsg:is in syncing ..."),
            this.unhandledMsgs.push({
                type: "onMsg",
                msg: n
            })) : this.handleMsg(n)
        }
        ,
        r.onBroadcastMsgs = function(e) {
            var t = e.content.broadcastMsgs;
            t = t.sort(function(e, t) {
                return e.broadcastId - t.broadcastId
            }),
            this.putBroadcastMsgs(t)
        }
        ,
        r.onBroadcastMsg = function(e) {
            var t = e.content.broadcastMsg;
            t.time = t.timestamp,
            this.syncing ? this.unhandledMsgs.push({
                type: "onBroadcastMsg",
                msg: t
            }) : t && this.putBroadcastMsg(t)
        }
        ,
        r.pushMsgTask = function(e) {
            this.msgPromise = this.msgPromise.then(function() {
                return e()
            })
        }
        ,
        r.handleMsg = function(e) {
            var t = this
              , n = t.db
              , r = e.time;
            t.markMsgRead(e),
            t.msgPromise = t.msgPromise.then(function() {
                return t.putMsg(e, "onMsg")
            }).then(function(s) {
                if (t.logger.log("msg::handleMsg:putMsg: ", e),
                !n.enable)
                    return Promise.resolve();
                var i = n.updateRoamingMsgTimetag(r)
                  , o = Promise.resolve();
                return "superTeam" === e.scene && (o = n.updateSuperTeamRoamingMsgTimetag(r)),
                Promise.all([i, o])
            }).then(function() {
                if (t.logger.log("msg::handleMsg:updateRoamingMsgTimetag: ", r, e),
                e)
                    return t.checkUserUpdate(e)
            }).then(function() {
                if (e) {
                    var n = e.type;
                    switch (t.logger.log("msg::handleMsg:checkUserUpdate: " + e.scene + " " + n + " msg" + ("notification" === n ? " " + e.attach.type : ""), e),
                    n) {
                    case "notification":
                        return t.onTeamNotificationMsg(e)
                    }
                }
            }).then(function() {
                e && !e.ignore && (t.logger.info("msg::handleMsg:onmsg: ", e),
                setTimeout(function() {
                    t.options.onmsg(s.copy(e))
                }, 0))
            }).then(void 0, function(e) {
                e.callFunc = "msg::handleMsg",
                t.onCustomError("消息处理错误", e)
            })
        }
        ,
        r.putMsg = function(e, t) {
            if (s.isArray(e) || (e = [e]),
            e[0].filter)
                return Promise.resolve(e);
            var n = this
              , r = n.db
              , o = r.enable
              , a = Promise.resolve()
              , c = n.message.Message.getLastMsg(e)
              , u = c.flow
              , m = c.sessionId !== n.currSessionId
              , l = n.genSessionByMsgs(e);
            f(l);
            var d = !1
              , p = [];
            function f(e) {
                "roamingMsgs" !== t && "offlineMsgs" !== t || n.cacheSyncedSession(e)
            }
            return n.checkIgnore(e),
            n.logger.log("start"),
            a = (a = (a = a.then(function() {
                return o || n.options.autoMarkRead || "roamingMsgs" === t || !l || (n.sessionUnreadMsgs = n.sessionUnreadMsgs || {},
                n.sessionUnreadMsgs[l.id] = n.sessionUnreadMsgs[l.id] || [],
                n.sessionUnreadMsgs[l.id] = n.sessionUnreadMsgs[l.id].concat(e.filter(function(e) {
                    return n.options.shouldCountNotifyUnread(e)
                }))),
                o && "roamingMsgs" !== t && "offlineMsgs" !== t ? (n.logger.log("msg::putMsg:db.putMsg: ", l),
                r.putMsg(e)) : e
            }).then(function(t) {
                var r = [];
                return e.forEach(function(e) {
                    n.checkMsgUnique(e) && r.push(e)
                }),
                e = r,
                p = o ? t : e,
                Promise.resolve(e)
            })).then(function(e) {
                return e.length && (f(l = n.genSessionByMsgs(e)),
                o && l) ? new Promise(function(t, s) {
                    r.getSessions({
                        sessionId: l.id
                    }).then(function(s) {
                        if (s && s.lastMsg) {
                            var i = s.lastMsg;
                            l.lastMsg && l.lastMsg.time < i.time && (l.lastMsg = i)
                        }
                        n.logger.log("msg::putMsg:db.getSessions: ", l),
                        p.length ? l ? r.putSession(l).then(function(e) {
                            t(e)
                        }) : t(s) : (d = !0,
                        p = e,
                        t(s))
                    })
                }
                ) : Promise.resolve(l)
            })).then(function(e) {
                if (l && p.length) {
                    var s = "roamingMsgs" === t
                      , a = n.options.syncSessionUnread
                      , c = l.id
                      , g = n.findSession(c) || {}
                      , h = g.ack || 0;
                    if ("offlineMsgs" === t || s && a || "onMsg" === t && "in" === u && m) {
                        o && e ? (l = e,
                        h = h || l.ack || 0) : (e = g) && (l.unread = e.unread || 0),
                        f(l),
                        l.unread = l.unread || 0;
                        var y = 0;
                        if (p.forEach(function(e) {
                            var t = n.options.shouldCountNotifyUnread(e)
                              , r = ("notification" !== e.type || "notification" === e.type && t) && (i(e.isUnreadable) || e.isUnreadable);
                            if (r && a && (r = e.time > h && "out" !== e.flow),
                            r && (y++,
                            a && !o)) {
                                var s = g.unreadMsgs || [];
                                s.push(e),
                                l.unreadMsgs = s
                            }
                        }),
                        l.unread += y,
                        n.logger.log("msg::putMsg:updateSession: ", l),
                        f(l),
                        o && !d)
                            return r.updateSession({
                                id: l.id,
                                unread: l.unread
                            })
                    }
                }
            }),
            "onMsg" === t ? a = a.then(function() {
                e.length && l && (n.onUpdateSession(l),
                n.options.syncSessionUnread && !m && n.api.resetSessionUnread(n.currSessionId))
            }) : "sendMsg" === t && !m && l && l.lastMsg && l.lastMsg.isLocal && (n.onUpdateSession(l),
            n.api.resetSessionUnread(n.currSessionId)),
            a.then(function() {
                return Promise.resolve(e)
            })
        }
        ,
        r.putBroadcastMsgs = function(e) {
            var t = this
              , n = t.db
              , r = e.length;
            if (r > 0) {
                if (t.doMarkBroadcastMsgsRead(e),
                n.enable) {
                    var i = e[r - 1].broadcastId;
                    return n.updateBroadcastMsgTimetag(i),
                    n.putBroadcastMsg(e).then(function() {
                        return setTimeout(function() {
                            t.doMarkMsgsRead(),
                            t.options.onbroadcastmsgs(s.copy(e))
                        }, 0),
                        Promise.resolve(e)
                    })
                }
                setTimeout(function() {
                    t.options.onbroadcastmsgs(s.copy(e))
                }, 0)
            }
            return e
        }
        ,
        r.putBroadcastMsg = function(e) {
            var t = this
              , n = t.db;
            return t.doMarkBroadcastMsgsRead([e]),
            n.enable ? (e.broadcastId && n.updateBroadcastMsgTimetag(e.broadcastId),
            n.putBroadcastMsg(e).then(function() {
                return setTimeout(function() {
                    t.options.onbroadcastmsg(s.copy(e))
                }, 0),
                Promise.resolve(e)
            })) : (setTimeout(function() {
                t.options.onbroadcastmsg(s.copy(e))
            }, 0),
            e)
        }
        ,
        r.doMarkBroadcastMsgsRead = function(e) {
            e = e.map(function(e) {
                return e.broadcastId
            }),
            this.sendCmd("batchMarkRead", {
                sid: 7,
                cid: 17,
                ids: e
            })
        }
        ,
        r.cacheSyncedSession = function(e) {
            if (e && this.syncResult) {
                e = s.merge({}, e),
                this.syncResult.sessions = this.syncResult.sessions || {};
                var t = e.id;
                this.syncResult.sessions[t] = s.merge(this.syncResult.sessions[t], e),
                i(this.syncResult.sessions[t].unread) && (this.syncResult.sessions[t].unread = 0),
                this.mergeSession(this.syncResult.sessions[t])
            }
        }
        ,
        r.checkMsgUnique = s.genCheckUniqueFunc("idClient"),
        r.storeSendMsg = function(e) {
            if (!this.syncing) {
                var t = this.putMsg(e, "sendMsg");
                return this.msgPromise = this.msgPromise.then(function() {
                    return t
                }),
                t
            }
            this.unhandledMsgs.push({
                type: "sendMsg",
                msg: e
            })
        }
        ,
        r.updateSendMsgError = function(e) {
            if (!this.syncing) {
                var t = this.updateMsg(e);
                return this.msgPromise = this.msgPromise.then(function() {
                    return t
                }),
                t
            }
            this.unupdatedMsgs.push(e)
        }
        ,
        r.onSendMsg = function(e, t) {
            var n = this
              , r = e.obj && e.obj.msg || e.content.msg;
            if (e.obj)
                i();
            else {
                var s = n.db;
                s && s.enable && s.getMsgByIdClient(r.idClient).then(function(e) {
                    e && (r = e,
                    i())
                }, function(e) {
                    i()
                })
            }
            function i() {
                n.completeMsg(r);
                var s = e.error && 7101 === e.error.code;
                e.error && !s || (r.idServer = e.content.msg.idServer,
                r.time = +e.content.msg.time),
                e.error ? r.status = "fail" : r.status = "success",
                r = n.message.reverse(r),
                t && (r.filter = !0),
                e.obj = r,
                n.syncing ? n.unupdatedMsgs.push(r) : n.msgPromise = Promise.all([n.msgPromise, e.obj.promise]).then(function(e) {
                    return e.length || (r.resend = !0),
                    n.updateMsg(r).then(function() {
                        return n.options.syncSessionUnread && n.currSessionId === r.sessionId && n.api.resetSessionUnread(n.currSessionId),
                        n.resolveMsgReceiptTask(r),
                        r
                    })
                })
            }
        }
        ,
        r.updateLocalMsg = function(e) {
            var t = this.updateMsg(e);
            return this.msgPromise = this.msgPromise.then(function() {
                return t
            }),
            t
        }
        ,
        r.updateMsg = function(e) {
            if (e.filter)
                return Promise.resolve(e);
            var t = this
              , n = t.db
              , r = "success" === e.status
              , s = u.genSessionByMsg(e)
              , i = !!e.isLocal;
            return n.enable ? n.updateMsg(e).then(function(o) {
                var a = n.updateSession(s)
                  , c = Promise.resolve()
                  , u = Promise.resolve();
                return r && o && !i && (c = n.updateRoamingMsgTimetag(o.time),
                "superTeam" === e.scene && (u = n.updateSuperTeamRoamingMsgTimetag(o.time))),
                t.onUpdateSession(s),
                Promise.all([a, c, u])
            }) : (r && !i && (t.timetags.roamingMsgs = e.time),
            t.onUpdateSession(s),
            Promise.resolve(e))
        }
        ,
        r.updateRoamingMsgTimetag = function(e) {
            var t = this.db;
            return t.enable ? t.updateRoamingMsgTimetag(e) : (this.timetags.roamingMsgs = e,
            Promise.resolve(e))
        }
        ,
        r.checkUserUpdate = function(e) {
            var t = this
              , n = e.from;
            return n === t.account ? Promise.resolve() : new Promise(function(r) {
                var i = t.userSet[n];
                if (i) {
                    var o = +i.updateTime
                      , a = +e.userUpdateTime;
                    !isNaN(o) && !isNaN(a) && s.isNumber(o) && s.isNumber(a) && o < a ? c() : r()
                } else
                    c();
                function c() {
                    t.api.getUser({
                        account: n,
                        sync: !0,
                        done: function(e, n) {
                            e || setTimeout(function() {
                                t.logger.log("user::checkUserUpdate: onupdateuser", n.account, n),
                                t.options.onupdateuser(n)
                            }, 0),
                            r()
                        }
                    })
                }
            }
            )
        }
        ,
        r.processUnsettledMsgs = function() {
            var e = this;
            e.unhandledMsgs.forEach(function(t) {
                var n = t.msg;
                switch (t.type) {
                case "onMsg":
                    e.handleMsg(n);
                    break;
                case "sendMsg":
                    e.msgPromise = e.msgPromise.then(function() {
                        return e.putMsg(n)
                    });
                    break;
                case "onBroadcastMsg":
                    e.msgPromise = e.msgPromise.then(function() {
                        return e.putBroadcastMsg(n)
                    })
                }
            }),
            e.unupdatedMsgs.forEach(function(t) {
                e.msgPromise = e.msgPromise.then(function() {
                    return e.updateMsg(t)
                })
            }),
            e.resetUnsettledMsgs()
        }
        ,
        r.onTeamNotificationMsg = function(e) {
            this.db;
            var t = e.attach
              , n = t.type
              , r = e.from
              , s = e.to
              , i = e.time
              , o = t.team
              , a = t.account
              , c = t.accounts;
            switch (n) {
            case "updateTeam":
                return o.updateTime = i,
                this.onUpdateTeam(o);
            case "addTeamMembers":
                return this.onAddTeamMembers(e, o, c);
            case "removeTeamMembers":
                return this.onRemoveTeamMembers(o, s, c);
            case "acceptTeamInvite":
                return this.onAddTeamMembers(e, o, [r]);
            case "passTeamApply":
                return this.onAddTeamMembers(e, o, [a]);
            case "addTeamManagers":
                return this.updateTeamManagers(e, s, c, !0, i);
            case "removeTeamManagers":
                return this.updateTeamManagers(e, s, c, !1, i);
            case "leaveTeam":
                return this.onRemoveTeamMembers(o, s, [r]);
            case "dismissTeam":
                return this.onDismissTeam(s, i);
            case "transferTeam":
                return this.transferTeam(e, o, r, a);
            case "updateTeamMute":
                return this.onUpdateTeamMembersMute(e, o, [a], t.mute);
            case "updateSuperTeam":
                return o.updateTime = i,
                this.onUpdateSuperTeam(o);
            case "addSuperTeamMembers":
                return this.onAddSuperTeamMembers(e, o, c);
            case "removeSuperTeamMembers":
                return this.onRemoveSuperTeamMembers(o, s, c);
            case "leaveSuperTeam":
                return this.onRemoveSuperTeamMembers(o, s, [r]);
            case "dismissSuperTeam":
                return this.onDismissSuperTeam(s, i);
            case "transferSuperTeam":
                return this.transferSuperTeam(e, o, r, a);
            case "addSuperTeamManagers":
                return this.updateSuperTeamManagers(e, s, c, !0, i);
            case "removeSuperTeamManagers":
                return this.updateSuperTeamManagers(e, s, c, !1, i);
            case "updateSuperTeamMembersMute":
                return this.onUpdateSuperTeamMembersMute(e, o, c, t.mute)
            }
        }
        ,
        r.onAddSuperTeamMembers = function(e, t, n) {
            var r = this.db
              , i = (t.teamId,
            c.assembleMembers(t, n));
            e.attach.members = i;
            var o = {
                team: t,
                accounts: n,
                members: i
            };
            if (this.logger.info("team::onAddSuperTeamMembers: ", o),
            this.options.onAddSuperTeamMembers(s.simpleClone(o)),
            r.enable) {
                var a = r.putSuperTeamMembers(i)
                  , u = Promise.resolve();
                return n.indexOf(this.account) > -1 && t && (u = r.putSuperTeam(t)),
                Promise.all([a, u])
            }
        }
        ,
        r.onRemoveSuperTeamMembers = function(e, t, n) {
            var r = this.db
              , i = {
                team: e,
                accounts: n
            };
            if (this.logger.info("team::onRemoveSuperTeamMembers:", i),
            this.options.onRemoveSuperTeamMembers(s.simpleClone(i)),
            r.enable) {
                if (-1 === n.indexOf(this.account)) {
                    var o = r.removeSuperTeamMembersByAccounts(t, n)
                      , a = Promise.resolve();
                    return e && (a = r.putSuperTeam(e)),
                    Promise.all([o, a])
                }
                return r.leaveSuperTeam(t)
            }
        }
        ,
        r.onDismissSuperTeam = function(e, t) {
            var n = this.db
              , r = {
                teamId: e
            };
            if (this.logger.info("team::onDismissSuperTeam:", r),
            this.options.onDismissSuperTeam(r),
            n.enable)
                return n.dismissSuperTeam(e, t)
        }
        ,
        r.onAddTeamMembers = function(e, t, n) {
            var r = this
              , i = r.db
              , o = t.teamId
              , c = a.assembleMembers(t, n);
            e.attach.members = c;
            var u = {
                team: t,
                accounts: n,
                members: c
            };
            if (r.logger.info("team::onAddTeamMembers: ", u),
            r.options.onAddTeamMembers(s.simpleClone(u)),
            i.enable) {
                var m, l = i.putTeam(t);
                return -1 === n.indexOf(r.account) ? m = i.putTeamMembers(c) : (r.logger.warn("team::onAddTeamMembers: user join team", o),
                l = new Promise(function(e) {
                    r.api.getTeamMembers({
                        teamId: o,
                        sync: !0,
                        done: function() {
                            e()
                        }
                    })
                }
                )),
                Promise.all([m, l])
            }
        }
        ,
        r.onRemoveTeamMembers = function(e, t, n) {
            var r = this.db
              , i = {
                team: e,
                accounts: n
            };
            if (this.logger.info("team::onRemoveTeamMembers:", i),
            this.options.onRemoveTeamMembers(s.simpleClone(i)),
            r.enable) {
                if (-1 === n.indexOf(this.account)) {
                    var o = r.removeTeamMembersByAccounts(t, n)
                      , a = Promise.resolve();
                    return e && (a = r.putTeam(e)),
                    Promise.all([o, a])
                }
                return r.leaveTeam(t)
            }
        }
        ,
        r.updateTeamManagers = function(e, t, n, r, i) {
            var o = this.db
              , c = e.attach.members = n.map(function(e) {
                return {
                    id: a.genId(t, e),
                    type: r ? "manager" : "normal",
                    updateTime: i
                }
            })
              , u = {
                teamId: "" + t,
                memberUpdateTime: i
            };
            e.attach.team = u;
            var m = {
                team: u,
                accounts: n,
                isManager: r,
                members: c
            };
            if (this.logger.info("team::updateTeamManagers:", m),
            this.options.onUpdateTeamManagers(s.simpleClone(m)),
            o.enable) {
                var l = o.updateTeam(u)
                  , d = o.updateTeamManagers(t, n, r, i);
                return Promise.all([l, d])
            }
        }
        ,
        r.updateSuperTeamManagers = function(e, t, n, r, i) {
            var o = this.db
              , c = e.attach.members = n.map(function(e) {
                return {
                    id: a.genId(t, e),
                    teamId: t,
                    account: e,
                    type: r ? "manager" : "normal",
                    updateTime: i
                }
            })
              , u = {
                teamId: "" + t,
                memberUpdateTime: i
            };
            e.attach.team = u;
            var m = {
                team: u,
                accounts: n,
                isManager: r,
                members: c
            };
            if (this.logger.info("team::updateSuperTeamManagers:", m),
            this.options.onUpdateSuperTeamManagers(s.simpleClone(m)),
            o.enable) {
                var l = o.updateSuperTeam(u)
                  , d = o.updateSuperTeamMembers(c);
                return Promise.all([l, d])
            }
        }
        ,
        r.onDismissTeam = function(e, t) {
            var n = this.db
              , r = {
                teamId: e
            };
            if (this.logger.info("team::onDismissTeam:", r),
            this.options.onDismissTeam(r),
            n.enable)
                return n.dismissTeam(e, t)
        }
        ,
        r.transferTeam = function(e, t, n, r) {
            var i = this.db
              , o = t.teamId
              , c = t.memberUpdateTime
              , u = {
                id: a.genId(o, n),
                type: "normal",
                updateTime: c
            }
              , m = {
                id: a.genId(o, r),
                type: "owner",
                updateTime: c
            };
            e.attach.members = [u, m];
            var l = {
                team: t,
                from: u,
                to: m
            };
            if (this.logger.info("team::transferTeam:", l),
            this.options.onTransferTeam(s.simpleClone(l)),
            i.enable)
                return i.transferTeam(t, n, r)
        }
        ,
        r.transferSuperTeam = function(e, t, n, r) {
            var i = this.db
              , o = t.teamId
              , a = t.memberUpdateTime
              , c = {
                teamId: o,
                type: "normal",
                account: n,
                updateTime: a
            }
              , u = {
                teamId: o,
                type: "owner",
                account: r,
                updateTime: a
            };
            e.attach.members = [c, u];
            var m = {
                team: t,
                from: c,
                to: u
            };
            if (this.logger.info("team::transferSuperTeam:", m),
            this.options.onTransferSuperTeam(s.simpleClone(m)),
            i.enable)
                return i.transferSuperTeam(t, c, u)
        }
        ,
        r.onUpdateTeamMembersMute = function(e, t, n, r) {
            var i = this.db
              , o = n.map(function(e) {
                return {
                    id: a.genId(t.teamId, e),
                    account: e,
                    teamId: t.teamId,
                    mute: r,
                    updateTime: t.memberUpdateTime
                }
            });
            e.attach.members = o;
            var c = {
                team: t,
                accounts: n,
                members: o,
                mute: r
            };
            if (this.logger.info("team::onUpdateTeamMembersMute:", c),
            this.options.onUpdateTeamMembersMute(s.simpleClone(c)),
            i.enable) {
                var u = i.updateTeamMembers(o)
                  , m = i.putTeam(t);
                return Promise.all([u, m])
            }
        }
        ,
        r.onUpdateSuperTeamMembersMute = function(e, t, n, r) {
            var i = this.db
              , o = n.map(function(e) {
                return {
                    id: c.genId(t.teamId, e),
                    account: e,
                    teamId: t.teamId,
                    mute: r,
                    updateTime: t.memberUpdateTime
                }
            });
            e.attach.members = o;
            var a = {
                team: t,
                accounts: n,
                members: o,
                mute: r
            };
            if (this.logger.info("team::onUpdateSuperTeamMembersMute:", a),
            this.options.onUpdateSuperTeamMembersMute(s.simpleClone(a)),
            i.enable) {
                var u = i.updateSuperTeamMembers(o)
                  , m = i.putSuperTeam(t);
                return Promise.all([u, m])
            }
        }
        ,
        r.onHistoryMsgs = function(e) {
            e.error || (e.obj.msgs = this.message.reverseMsgs(e.content.msgs))
        }
        ,
        r.isFilterMsgs = function(e) {
            return !!e[0].filter
        }
        ,
        r.splitMsgs = function(e, t, n, r) {
            e.forEach(function(e) {
                if (e.filter)
                    r.push(e);
                else
                    switch (e.scene) {
                    case "p2p":
                        t.push(e);
                        break;
                    case "team":
                        n.push(e)
                    }
            })
        }
        ,
        r.markMsgRead = function(e, t) {
            s.isArray(e) || (e = [e]);
            if (this.db.enable || this.options.autoMarkRead || t) {
                var n = []
                  , r = []
                  , i = [];
                this.splitMsgs(e, n, r, i),
                this.markP2pMsgsRead(n),
                this.markTeamMsgsRead(r),
                this.markFilterMsgsRead(i)
            }
        }
        ,
        r.markP2pMsgsRead = function(e) {
            if (e.length) {
                var t = m.idMap.msg.id
                  , n = m.idMap.msg.msg;
                this.doMarkMsgsRead(t, n, e)
            }
        }
        ,
        r.markTeamMsgsRead = function(e) {
            if (e.length) {
                var t = m.idMap.team.id
                  , n = m.idMap.team.teamMsg;
                this.doMarkMsgsRead(t, n, e)
            }
        }
        ,
        r.markFilterMsgsRead = function(e) {
            if (e.length) {
                var t = m.idMap.filter.id
                  , n = m.idMap.filter.filterMsg;
                this.doMarkMsgsRead(t, n, e)
            }
        }
        ,
        r.markSysMsgRead = function(e, t) {
            s.isArray(e) || (e = [e]);
            var n, r;
            (this.db.enable || this.options.autoMarkRead || t) && (this.isFilterMsgs(e) ? (n = m.idMap.filter.id,
            r = m.idMap.filter.filterSysMsg) : (n = m.idMap.msg.id,
            r = m.idMap.msg.sysMsg),
            this.doMarkMsgsRead(n, r, e))
        }
        ,
        r.doMarkMsgsRead = function(e, t, n) {
            n && n.length && (!n[0].attach || "netcallBill" !== n[0].attach.type && "netcallMiss" !== n[0].attach.type || (e = 9,
            t = 11),
            this.sendCmd("batchMarkRead", {
                sid: e,
                cid: t,
                ids: n.map(function(e) {
                    return e.idServer
                })
            }))
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(25).fn
          , s = n(0)
          , i = n(187);
        r.processNotify = function(e) {
            switch (e.cmd) {
            case "syncOfflineNetcallMsgs":
            case "syncOfflineMsgs":
                this.onOfflineMsgs(e);
                break;
            case "batchMarkRead":
                break;
            case "syncOfflineSysMsgs":
                this.onOfflineSysMsgs(e);
                break;
            case "syncRoamingMsgs":
            case "syncSuperTeamRoamingMsgs":
                this.onRoamingMsgs(e);
                break;
            case "syncOfflineFilterMsgs":
                this.onOfflineMsgs(e, !0);
                break;
            case "syncOfflineFilterSysMsgs":
                this.onOfflineSysMsgs(e, !0);
                break;
            case "syncMsgReceipts":
                this.onOfflineMsgReceipts(e);
                break;
            case "syncDonnop":
                this.onDonnop(e, !0);
                break;
            case "syncSessionAck":
                this.syncSessionAck(e);
                break;
            case "syncRobots":
                this.onRobots(e);
                break;
            case "syncBroadcastMsgs":
                this.onBroadcastMsgs(e)
            }
        }
        ,
        r.onDonnop = function(e, t) {
            if (!e.error) {
                var n = this
                  , r = n.db
                  , s = i.reverse(e.content.donnop);
                n.mergeDonnop(s);
                var o = n.dbDonnop();
                if (t) {
                    var a = e.content.timetag;
                    n.timetags.donnop = a,
                    r.enable && (o = o.then(function() {
                        return n.db.updateDonnopTimetag(a)
                    }).catch(function(e) {
                        return n.logger.error("notify::onDonnop: ", e),
                        Promise.reject(e)
                    })),
                    o.cmd = "donnop",
                    n.syncPromiseArray.push(o)
                } else
                    n.onPushNotificationMultiportConfigUpdate()
            }
        }
        ,
        r.onUpdateDonnop = function(e) {
            if (!e.error) {
                var t = e.obj;
                t && (this.mergeDonnop(s.filterObj(t, ["shouldPushNotificationWhenPCOnline"])),
                this.dbDonnop(),
                this.onPushNotificationMultiportConfigUpdate())
            }
        }
        ,
        r.getPushNotificationMultiportConfig = function() {
            return s.merge({}, this.pushNotificationMultiportConfig)
        }
        ,
        r.mergeDonnop = function(e) {
            this.pushNotificationMultiportConfig = s.merge({}, this.pushNotificationMultiportConfig, e)
        }
        ,
        r.dbDonnop = function() {
            return this.db.enable ? this.db.setDonnop(this.pushNotificationMultiportConfig) : Promise.resolve()
        }
        ,
        r.onPushNotificationMultiportConfigUpdate = function() {
            var e = this;
            setTimeout(function() {
                var t = e.getPushNotificationMultiportConfig();
                e.logger.info("link::onPushNotificationMultiportConfigUpdate:", t),
                e.options.onPushNotificationMultiportConfigUpdate(t)
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(25).fn
          , s = n(0)
          , i = s.objs2accounts
          , o = s.teams2ids
          , a = n(189)
          , c = n(146);
        r.processSuperTeam = function(e) {
            var t, n, r, s = e.error;
            switch (void 0 === e.obj && (e.obj = {}),
            e.cmd) {
            case "sendSuperTeamMsg":
                this.onSendMsg(e);
                break;
            case "superTeamMsg":
                this.onMsg(e);
                break;
            case "syncSuperTeams":
                this.onSuperTeams(e);
                break;
            case "syncCreateSuperTeam":
                t = a.reverse(e.content.team),
                r = c.assembleOwner(t),
                this.logger.info("team::processTeam: sync createTeam", t, r),
                this.options.onSyncCreateSuperTeam(t, r),
                this.onCreateSuperTeam(t, r);
                break;
            case "getSuperTeamHistoryMsgs":
            case "searchSuperTeamHistoryMsgs":
                this.onHistoryMsgs(e);
                break;
            case "addSuperTeamMembers":
            case "removeSuperTeamMembers":
            case "leaveSuperTeam":
            case "addSuperTeamManagers":
            case "removeSuperTeamManagers":
            case "transferSuperTeam":
                break;
            case "updateInfoInSuperTeam":
                s || ((n = e.obj).account = this.account,
                n.id = c.genId(n.teamId, n.account),
                n = c.reverse(n),
                e.obj = n,
                this.onUpdateSuperTeamMember(n));
                break;
            case "syncUpdateSuperTeamMember":
                n = c.reverse(e.content.teamMember),
                this.onUpdateSuperTeamMember(n);
                break;
            case "updateSuperTeam":
                e.obj = a.reverse(e.obj, !0);
                break;
            case "getSuperTeam":
                e.error || (e.obj = a.reverse(e.content.team));
                break;
            case "getSuperTeams":
                this.onSuperTeams(e);
                break;
            case "syncSuperTeamMembers":
                this.onSyncSuperTeamMembers(e);
                break;
            case "getSuperTeamMembers":
                e.error || this.onGetAllSuperTeamMembers(e);
                break;
            case "getSuperTeamMembersByJoinTime":
                e.error || this.onSuperTeamMembers(e)
            }
        }
        ,
        r.onSuperTeams = function(e) {
            e.content = e.content || {};
            var t, n = this, r = n.db, s = n.packetFromSync(e), i = e.content.teams || [], c = !0, u = [], m = [];
            if (e.error)
                switch (e.error.code) {
                case 803:
                    e.error = null,
                    c = !1
                }
            var l = new Promise(function(l, p) {
                var f, g;
                e.error ? s && p(e.error) : (!function() {
                    c && i.forEach(function(e) {
                        (e = a.reverse(e)).validToCurrentUser ? u.push(e) : m.push(e)
                    });
                    n.logger.info("superTeam::onSuperTeams: parseData", o(u), u, "invalid", o(m), m),
                    i.length ? (c = !0,
                    t = e.content.timetag) : c = !1
                }(),
                r.enable ? (f = l,
                g = p,
                e.promise = new Promise(function(e, i) {
                    function o() {
                        s ? (d(),
                        e(),
                        f()) : r.getSuperTeams().then(function(t) {
                            u = t,
                            d(),
                            e(),
                            f()
                        }).then(void 0, function(e) {
                            e.message = "db.getSuperTeams error",
                            e.callFunc = "superTeam::afterMergeData",
                            i(e),
                            g(e)
                        })
                    }
                    c ? r.mergeSuperTeams(u, m, t).then(function() {
                        o()
                    }).then(void 0, function(e) {
                        var t = {
                            callFunc: "superTeam::onSuperTeams:mergeData",
                            message: "db.mergeSuperTeams error",
                            event: e
                        };
                        i(t),
                        g(t)
                    }) : (n.logger.warn("superTeam::onSuperTeams:mergeData: no teams need merge"),
                    o())
                }
                ).then(void 0, function(e) {
                    throw e.message = "merge teams data error",
                    e.callFunc = "superTeam::mergeData",
                    g(e),
                    e
                })) : (d(),
                l()))
            }
            ).catch(function(e) {
                return n.logger.error("superTeam::onSuperTeams: ", e),
                Promise.reject(e)
            });
            function d() {
                n.timetags.superTeams = t,
                u.invalid = m,
                s ? (n.syncResult.superTeams = u,
                n.syncResult.invalidSuperTeams = m) : (n.logger.info("superTeam::onSuperTeams: not in syncing, get teams", o(u), u),
                e.obj = u)
            }
            s && (l.cmd = "superteams",
            n.syncPromiseArray.push(l))
        }
        ,
        r.onCreateSuperTeam = function(e, t) {
            var n = this.db;
            n.enable && (n.putSuperTeam(e),
            n.putSuperTeamMembers(t))
        }
        ,
        r.onGetAllSuperTeamMembers = function(e) {
            var t = this
              , n = this.db
              , r = e.raw.ser
              , s = t.superTeamMembersData[r].teamId;
            if (n.enable) {
                var i = e.content && e.content.timetag;
                e.promise = Promise.all(t.superTeamMembersData[r].pArr).then(function() {
                    return n.getSuperTeamMembers(s).then(function(t) {
                        i && n.updateSuperTeamMemberTimetag(s, i),
                        e.obj = {
                            members: t,
                            invalid: [],
                            teamId: s
                        }
                    })
                }).catch(function(e) {
                    return t.logger.error(e)
                })
            } else
                e.obj = {
                    members: t.superTeamMembersData[r].members,
                    invalid: t.superTeamMembersData[r].invalid,
                    teamId: s
                };
            t.superTeamMembersData[r] = void 0
        }
        ,
        r.onSyncSuperTeamMembers = function(e) {
            var t, n = this.db, r = [], s = [], o = e.content.members || [], a = e.raw.ser;
            if (e.obj && (t = e.obj.teamId),
            t || (t = e.content.teamId),
            o.forEach(function(e) {
                (e = c.reverse(e)).valid ? s.push(e) : r.push(e)
            }),
            this.logger.info("team::onSyncSuperTeamMembers: parseData", t, i(s), s, "invalid", i(r), r),
            n.enable) {
                this.superTeamMembersData[a] = this.superTeamMembersData[a] || {
                    teamId: t,
                    pArr: []
                };
                var u = Promise.resolve();
                e.content && e.content.isAll && (u = n.deleteSuperTeamMembers(t));
                var m = u.then(function() {
                    return n.mergeSuperTeamMembers(t, s, r)
                }).then(function() {
                    return Promise.resolve()
                });
                this.superTeamMembersData[a].pArr.push(m)
            } else
                this.superTeamMembersData[a] = this.superTeamMembersData[a] || {
                    teamId: t,
                    members: [],
                    invalid: []
                },
                s.length && (this.superTeamMembersData[a].members = this.api.mergeTeamMembers(this.superTeamMembersData[a].members, s)),
                r.length && (this.superTeamMembersData[a].invalid = this.api.mergeTeamMembers(this.superTeamMembersData[a].invalid, r));
            e.raw = void 0
        }
        ,
        r.onSuperTeamMembers = function(e) {
            var t, n = this.db, r = [], s = [], o = e.content.members || [];
            e.obj && (t = e.obj.teamId),
            t || (t = e.content.teamId),
            o.forEach(function(e) {
                (e = c.reverse(e)).valid ? s.push(e) : r.push(e)
            }),
            this.logger.info("team::onSyncSuperTeamMembers: parseData", t, i(s), s, "invalid", i(r), r),
            n.enable && n.mergeSuperTeamMembers(t, s, r),
            e.obj = {
                members: s,
                invalid: r,
                teamId: t
            }
        }
        ,
        r.onUpdateSuperTeamMember = function(e) {
            e.updateTime || (e.updateTime = +new Date),
            this.logger.warn("superTeam::onUpdateSuperTeamMember: ", e),
            this.options.onUpdateSuperTeamMember(s.simpleClone(e));
            var t = {
                teamId: e.teamId,
                memberUpdateTime: e.updateTime
            };
            this.onUpdateSuperTeam(t);
            var n = this.db;
            n.enable && n.updateSuperTeamMember(e)
        }
        ,
        r.onUpdateSuperTeam = function(e) {
            this.logger.info("superteam::onUpdateSuperTeam:", e),
            this.options.onUpdateSuperTeam(s.simpleClone(e));
            var t = this.db;
            t.enable && t.updateSuperTeam(e)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(25).fn
          , s = n(0)
          , i = s.objs2accounts
          , o = s.teams2ids
          , a = n(126)
          , c = n(90);
        r.processTeam = function(e) {
            var t = e.error
              , n = void 0
              , r = void 0
              , s = void 0;
            switch (void 0 === e.obj && (e.obj = {}),
            e.cmd) {
            case "createTeam":
                if (n = e.obj.team,
                t || (n = e.content.team),
                n = a.reverse(n),
                e.obj.team = n,
                s = c.assembleOwner(n),
                e.obj.owner = s,
                !t) {
                    var i = {
                        team: n,
                        owner: s
                    };
                    this.logger.info("team::processTeam: create team", i),
                    this.onCreateTeam(n, s)
                }
                break;
            case "syncCreateTeam":
                n = a.reverse(e.content.team),
                s = c.assembleOwner(n),
                this.logger.info("team::processTeam: sync createTeam", n, s),
                this.options.onsynccreateteam(n, s),
                this.onCreateTeam(n, s);
                break;
            case "sendSuperTeamMsg":
            case "sendTeamMsg":
                this.onSendMsg(e);
                break;
            case "teamMsg":
                this.onMsg(e);
                break;
            case "teamMsgs":
                this.onMsgs(e);
                break;
            case "addTeamMembers":
            case "removeTeamMembers":
            case "leaveTeam":
            case "dismissTeam":
            case "addTeamManagers":
            case "removeTeamManagers":
            case "transferTeam":
                break;
            case "updateInfoInTeam":
                t || ((r = e.obj).account = this.account,
                r.id = c.genId(r.teamId, r.account),
                r = c.reverse(r),
                e.obj = r,
                this.mergeMyTeamMembers(r),
                this.onUpdateTeamMember(r));
                break;
            case "updateNickInTeam":
                e.obj = c.reverse(e.obj);
                break;
            case "updateTeam":
                e.obj = a.reverse(e.obj, !0);
                break;
            case "applyTeam":
                e.error || (e.obj = a.reverse(e.content.team));
                break;
            case "passTeamApply":
                this.updateTeamSysMsgState(e, "passed");
                break;
            case "rejectTeamApply":
                this.updateTeamSysMsgState(e, "rejected");
                break;
            case "acceptTeamInvite":
                this.updateTeamSysMsgState(e, "passed"),
                e.error || (e.obj = a.reverse(e.content.team));
                break;
            case "rejectTeamInvite":
                this.updateTeamSysMsgState(e, "rejected");
                break;
            case "getTeam":
                e.error || (e.obj = a.reverse(e.content.team));
                break;
            case "getTeams":
                this.onTeams(e);
                break;
            case "getTeamMembers":
                this.onTeamMembers(e);
                break;
            case "syncTeams":
                this.onTeams(e);
                break;
            case "syncTeamMembers":
                this.onTeamMembers(e);
                break;
            case "getTeamHistoryMsgs":
            case "searchTeamHistoryMsgs":
                this.onHistoryMsgs(e);
                break;
            case "syncSendTeamMsg":
                this.onMsg(e);
                break;
            case "notifyTeamMsgReads":
                this.onTeamMsgReceipt(e);
                break;
            case "syncUpdateTeamMember":
                r = c.reverse(e.content.teamMember),
                this.onUpdateTeamMember(r),
                r.account === this.account && this.mergeMyTeamMembers(r);
                break;
            case "updateMuteStateInTeam":
                break;
            case "getMyTeamMembers":
                e.error || (e.obj = c.reverseMembers(e.content.teamMembers));
                break;
            case "getMutedTeamMembers":
                e.error || (e.obj = {
                    teamId: e.obj.teamId,
                    members: c.reverseMembers(e.content.teamMembers)
                });
                break;
            case "syncMyTeamMembers":
                this.onSyncMyTeamMembers(e)
            }
        }
        ,
        r.onCreateTeam = function(e, t) {
            var n = this.db;
            n.enable && (n.putTeam(e),
            n.putTeamMembers(t)),
            this.options.onCreateTeam(e, t)
        }
        ,
        r.onTeams = function(e) {
            e.content = e.content || {};
            var t, n = this, r = n.db, s = n.packetFromSync(e), i = e.content.teams || [], c = !0, u = [], m = [];
            if (e.error)
                switch (e.error.code) {
                case 803:
                    e.error = null,
                    c = !1
                }
            var l = new Promise(function(l, p) {
                var f, g;
                e.error ? s && p(e.error) : (!function() {
                    c && i.forEach(function(e) {
                        (e = a.reverse(e)).validToCurrentUser ? u.push(e) : m.push(e)
                    });
                    n.logger.info("team::onTeams: parseData", o(u), u, "invalid", o(m), m),
                    i.length ? (c = !0,
                    t = e.content.timetag) : c = !1
                }(),
                r.enable ? (f = l,
                g = p,
                e.promise = new Promise(function(e, i) {
                    function o() {
                        s ? (d(),
                        e(),
                        f()) : r.getTeams().then(function(t) {
                            u = t,
                            d(),
                            e(),
                            f()
                        }).then(void 0, function(e) {
                            e.message = "db.getTeams error",
                            e.callFunc = "team::afterMergeData",
                            i(e),
                            g(e)
                        })
                    }
                    c ? r.mergeTeams(u, m, t).then(function() {
                        o()
                    }).then(void 0, function(e) {
                        var t = {
                            callFunc: "team::onTeams:mergeData",
                            message: "db.mergeTeams error",
                            event: e
                        };
                        i(t),
                        g(t)
                    }) : (n.logger.warn("team::onTeams:mergeData: no teams need merge"),
                    o())
                }
                ).then(void 0, function(e) {
                    throw e.message = "merge teams data error",
                    e.callFunc = "team::mergeData",
                    g(e),
                    e
                })) : (d(),
                l()))
            }
            ).catch(function(e) {
                return n.logger.error("team::onTeams: ", e),
                Promise.reject(e)
            });
            function d() {
                n.timetags.teams = t,
                u.invalid = m,
                s ? (n.syncResult.teams = u,
                n.syncResult.invalidTeams = m,
                n.syncing || n.onSyncDone()) : (n.logger.info("team::onTeams: not in syncing, get teams", o(u), u),
                e.obj = u)
            }
            s && (l.cmd = "teams",
            n.syncPromiseArray.push(l))
        }
        ,
        r.onTeamMembers = function(e) {
            e.content = e.content || {};
            var t, n, r = this, s = (r.db,
            r.packetFromSync(e)), o = e.content.members || [], a = !0, u = [], m = [];
            if (e.obj && (n = e.obj.teamId),
            n || (n = e.content.teamId),
            n = "" + n,
            e.error)
                switch (e.error.code) {
                case 406:
                    e.error = null,
                    a = !1
                }
            var l = new Promise(function(l, d) {
                e.error ? s && (r.logger.error("team::onTeamMember: team error:", n, e.error),
                d({
                    callFunc: "team::onTeamMembers",
                    event: e.error,
                    message: "teamId-" + n + " 获取群成员错误"
                })) : (!function() {
                    a && o.forEach(function(e) {
                        (e = c.reverse(e)).valid ? u.push(e) : m.push(e)
                    });
                    r.logger.warn("team::onTeamMembers: parseData", n, i(u), u, "invalid", i(m), m),
                    o.length ? (a = !0,
                    t = e.content.timetag) : a = !1
                }(),
                u.invalid = m,
                s ? (r.syncTeamMembersResult[n] = u,
                r.syncTeamMembersResult[n + "-invalid"] = m,
                r.timetags["team-" + n] = t) : (r.logger.info("team::onTeamMembers: not syncing, get members", n, i(u), u),
                e.obj = {
                    teamId: n,
                    members: u
                }),
                l())
            }
            );
            s && (l.cmd = n,
            r.syncTeamMembersPromiseArray.push(l))
        }
        ,
        r.onUpdateTeamMember = function(e) {
            e.updateTime || (e.updateTime = +new Date),
            this.logger.info("team::onUpdateTeamMember: ", e),
            this.options.onupdateteammember(s.simpleClone(e));
            var t = {
                teamId: e.teamId,
                memberUpdateTime: e.updateTime
            };
            this.onUpdateTeam(t);
            var n = this.db;
            n.enable && n.updateTeamMember(e)
        }
        ,
        r.onUpdateTeam = function(e) {
            this.logger.info("team::onUpdateTeam:", e),
            this.options.onUpdateTeam(s.simpleClone(e));
            var t = this.db;
            t.enable && t.updateTeam(e)
        }
        ,
        r.onSyncMyTeamMembers = function(e) {
            var t = this
              , n = t.db
              , r = c.reverseMembers(e.content.teamMembers);
            if (t.logger.info("team::onSyncMyTeamMembers:", r),
            n.enable) {
                var s = n.putTeamMembers(r).then(function() {
                    return n.updateMyTeamMembersTimetag(e.content.timetag)
                }).catch(function(e) {
                    return t.logger.error("team::syncMyTeamMember: ", e),
                    Promise.reject(e)
                });
                s.cmd = "myTeamMembers",
                t.syncTeamMembersPromiseArray.push(s)
            }
            t.mergeMyTeamMembers(r)
        }
        ,
        r.mergeMyTeamMembers = function(e) {
            s.isArray(e) || (e = [e]);
            var t = this.myTeamMembersMap = this.myTeamMembersMap || {};
            e.forEach(function(e) {
                var n = e.teamId;
                t[n] = s.merge(t[n], e)
            }),
            this.logger.info("team::mergeMyTeamMembers:", t)
        }
        ,
        r.notifyForNewTeamMsg = function(e) {
            s.isArray(e) || (e = [e]);
            var t = this
              , n = this.myTeamMembersMap || {}
              , r = {}
              , i = [];
            e.forEach(function(e) {
                s.exist(n[e]) ? r[e] = n[e].muteNotiType : i.push(e)
            });
            var o = Promise.resolve({
                map: r
            });
            return i.length && (o = t.api.getMyTeamMembers({
                teamIds: i,
                promise: !0
            }).then(function(n) {
                t.mergeMyTeamMembers(n),
                n.forEach(function(e) {
                    r[e.teamId] = e.muteNotiType
                });
                var s = e.filter(function(e) {
                    return !r[e]
                });
                return Promise.resolve({
                    map: r,
                    miss: s
                })
            }).catch(function(e) {
                return Object.keys(r).length > 0 ? Promise.resolve({
                    map: r,
                    miss: i,
                    error: e
                }) : Promise.reject(e)
            })),
            o
        }
        ,
        r.updateTeamSysMsgState = function(e, t) {
            var n, r = e.error;
            r && (t = "error",
            r = s.filterObj(r, "code message")),
            n = {
                idServer: e.obj.idServer,
                state: t
            },
            r && (n.error = r),
            this.updateSysMsg(n)
        }
        ,
        r.onTeamMsgReceipt = function(e) {
            var t = e.content
              , n = e.error;
            n && this.logger.error("team::onTeamMsgReceipt:", n),
            t && t.teamMsgReceipts && this.options.onTeamMsgReceipt(t)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(25).fn
          , s = n(0);
        r.onRobots = function(e) {
            var t = e.content;
            if (s.isFunction(this.options.onrobots) && Array.isArray(t.robots)) {
                var n = t.robots.filter(function(e) {
                    return !!e.botid
                });
                n.length > 0 && this.options.onrobots(n || [])
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(25).fn
          , s = n(0)
          , i = s.objs2accounts
          , o = n(299)
          , a = n(140);
        r.processFriend = function(e) {
            var t = e.obj
              , n = e.content
              , r = e.error;
            switch (e.cmd) {
            case "friendRequest":
                this.updateFriendSysMsg(e),
                r || this.onFriendRequest(t);
                break;
            case "syncFriendRequest":
                this.onFriendRequest(n, !0);
                break;
            case "deleteFriend":
                r || this.onDeleteFriend(t);
                break;
            case "syncDeleteFriend":
                this.onDeleteFriend(n, !0);
                break;
            case "updateFriend":
                r || this.onUpdateFriend(t);
                break;
            case "syncUpdateFriend":
                this.onUpdateFriend(n.friend, !0);
                break;
            case "getFriends":
            case "syncFriends":
                this.onFriends(e);
                break;
            case "syncFriendUsers":
                this.onFriendUsers(e)
            }
        }
        ,
        r.onFriends = function(e) {
            var t, n = this, r = n.db, s = e.error, a = n.packetFromSync(e), c = e.content.friends, u = !0, m = [], l = [], d = new Promise(function(d, f) {
                var g, h;
                s ? a && f(s) : (!function() {
                    u && c.forEach(function(e) {
                        (e = o.reverse(e)).valid ? m.push(e) : l.push(e)
                    });
                    n.logger.info("friend::onFriends: parse friends", i(m), m, "delete", i(l), l),
                    c.length ? (u = !0,
                    t = e.content.timetag) : u = !1
                }(),
                r.enable ? (g = d,
                h = f,
                e.promise = new Promise(function(e, s) {
                    function i() {
                        a ? (p(),
                        e(),
                        g()) : r.getFriends().then(function(t) {
                            m = t,
                            p(),
                            e(),
                            g()
                        }).then(void 0, function(e) {
                            e._msg = "get friends error",
                            s(e),
                            h(e)
                        })
                    }
                    u ? r.mergeFriends(m, l, t).then(function() {
                        i()
                    }).then(void 0, function(e) {
                        e._msg = "merge friends error",
                        s(e),
                        h(e)
                    }) : (n.logger.info("friend::onFriends: no merge friends"),
                    i())
                }
                ).then(void 0, function(e) {
                    throw e._msg = "merge friends data error",
                    h(e),
                    e
                })) : (p(),
                d()))
            }
            ).catch(function(e) {
                return n.logger.error("friend::onFriends: ", e),
                Promise.reject(e)
            });
            function p() {
                n.timetags.friends = t,
                m.invalid = l,
                a ? (n.syncResult.friends = m,
                n.syncResult.invalidFriends = l) : (n.logger.info("friend::onFriends: get friends bingo", i(m), m),
                e.obj = m)
            }
            a && (d.cmd = "friends",
            n.syncPromiseArray.push(d))
        }
        ,
        r.onFriendRequest = function(e, t) {
            var n = Promise.resolve()
              , r = this.db
              , s = e.type;
            if ("addFriend" === (s = e.type = o.getTypeFromByte(s) || s) || "passFriendApply" === s) {
                var i = e.friend = o.assembleFriend(e.account);
                r.enable && (n = r.putFriend(i))
            }
            return t && this.onSyncFriendAction(e),
            n
        }
        ,
        r.onSyncFriendAction = function(e) {
            this.logger.info("friend::onSyncFriendActionon:", e),
            this.options.onsyncfriendaction(e)
        }
        ,
        r.onDeleteFriend = function(e, t) {
            var n = Promise.resolve()
              , r = this.db;
            return r.enable && (n = r.deleteFriend(e.account)),
            t && (e.type = "deleteFriend",
            this.onSyncFriendAction(e)),
            n
        }
        ,
        r.onUpdateFriend = function(e, t) {
            var n = this.db
              , r = o.reverse(e);
            n.enable && n.updateFriend(r),
            t && this.onSyncFriendAction({
                type: "updateFriend",
                friend: r
            })
        }
        ,
        r.onFriendUsers = function(e) {
            var t = this.db
              , n = e.content
              , r = n.users.map(function(e) {
                return a.reverse(e)
            });
            this.logger.warn("friend::onFriendUsers: parse users", i(r), r);
            var s = n.timetag
              , o = Promise.resolve();
            t.enable && (o = t.mergeFriendUsers(r, s)),
            this.timetags.friendUsers = s,
            o.cmd = "friendUsers",
            this.syncPromiseArray.push(o),
            this.syncResult.users = r,
            this.syncing || this.onSyncDone()
        }
        ,
        r.updateFriendSysMsg = function(e) {
            var t, n, r = e.obj, i = e.error;
            if (e.obj.idServer) {
                if (i)
                    t = "error",
                    i = s.filterObj(i, "code message");
                else {
                    var a = r.type;
                    switch (a = o.getTypeFromByte(a) || a) {
                    case "passFriendApply":
                        t = "passed";
                        break;
                    case "rejectFriendApply":
                        t = "rejected"
                    }
                }
                n = {
                    idServer: r.idServer,
                    state: t
                },
                i && (n.error = i),
                this.updateSysMsg(n)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        function s() {}
        s.parse = function(e) {
            var t = r.copy(e);
            return t.isBlacked = "1" === t.isBlacked,
            t.isMuted = "1" === t.isMuted,
            t.createTime = +t.createTime,
            t.updateTime = +t.updateTime,
            t
        }
        ,
        e.exports = s
    }
    , function(e, t, n) {
        "use strict";
        var r = n(25).fn
          , s = n(0)
          , i = s.objs2accounts
          , o = n(447)
          , a = n(140);
        r.processUser = function(e) {
            var t, n = this, r = n.db, s = e.obj, i = e.error, o = e.content;
            switch (e.cmd) {
            case "markInBlacklist":
                i || n.markInBlacklist(s);
                break;
            case "syncMarkInBlacklist":
                n.markInBlacklist(o, !0);
                break;
            case "markInMutelist":
                i || n.markInMutelist(s);
                break;
            case "syncMarkInMutelist":
                n.markInMutelist(o, !0);
                break;
            case "getRelations":
                i || n.onRelations(e);
                break;
            case "syncMyInfo":
                n.onMyInfo(e, !0);
                break;
            case "updateMyInfo":
                i || (s.updateTime = o.timetag,
                n.onUpdateMyInfo(e, s));
                break;
            case "syncUpdateMyInfo":
                n.onUpdateMyInfo(e, o.user, !0);
                break;
            case "getUsers":
                i || (t = o.users.map(function(e) {
                    return e = a.reverse(e),
                    n.mergeUser(e),
                    e
                }),
                e.obj = t,
                r.enable && r.putUsers(t));
                break;
            case "updateDonnop":
                n.onUpdateDonnop(e);
                break;
            case "syncUpdateDonnop":
                n.onDonnop(e, !1)
            }
        }
        ,
        r.onMyInfo = function(e) {
            var t = this
              , n = t.db
              , r = e.error
              , s = e.content
              , i = !0
              , o = void 0
              , c = new Promise(function(e, c) {
                var m, l;
                r ? i && (r && (r.callFunc = "user::onMyInfo"),
                e(r),
                t.syncData()) : (o = a.reverse(s.user),
                t.logger.info("user::onMyInfo: parseData", o),
                n.enable ? (m = e,
                l = c,
                n.mergeMyInfo(o, i).then(function() {
                    u(),
                    m()
                }).then(void 0, function(e) {
                    e.message = "db.mergeMyInfo error",
                    e.callFunc = "user::onMyInfo",
                    l(e)
                })) : (u(),
                e()))
            }
            ).catch(function(e) {
                return t.logger.error("user::onMyInfo: ", e),
                Promise.reject(e)
            });
            function u() {
                t.timetags.myInfo = o.updateTime,
                i && (t.syncResult.myInfo = o)
            }
            i && (c.cmd = "myInfo",
            t.syncPromiseArray.push(c))
        }
        ,
        r.onUpdateMyInfo = function(e, t, n) {
            var r = this.db
              , i = a.reverse(t)
              , o = s.merge(this.myInfo, i);
            this.myInfo = o,
            n ? (this.logger.info("user::onUpdateMyInfo:", o),
            this.options.onupdatemyinfo(o)) : e.obj = o,
            r.enable && (i.account = this.account,
            r.updateUser(i))
        }
        ,
        r.onRelations = function(e) {
            var t = this
              , n = t.db
              , r = e.error
              , s = t.packetFromSync(e)
              , a = e.content.specialRelations
              , c = !0
              , u = void 0
              , m = []
              , l = []
              , d = []
              , p = []
              , f = new Promise(function(f, h) {
                var y, v;
                r ? s && (f(r),
                t.syncData()) : (a.forEach(function(e) {
                    var t = {
                        account: (e = o.parse(e)).account,
                        createTime: e.createTime,
                        updateTime: e.updateTime
                    };
                    e.isBlacked ? m.push(t) : l.push(t),
                    e.isMuted ? d.push(t) : p.push(t)
                }),
                t.logger.info("user::onRelations: parse blacklist", i(m), m, "delete", i(l), l),
                t.logger.info("user::onRelations: parse mutelist", i(d), d, "delete", i(p), p),
                a.length ? (c = !0,
                u = e.content.timetag) : c = !1,
                n.enable ? (y = f,
                v = h,
                e.promise = new Promise(function(e, r) {
                    function i() {
                        s ? (g(),
                        e(),
                        y()) : n.getRelations().then(function(t) {
                            m = t[0],
                            d = t[1],
                            g(),
                            e(),
                            y()
                        }).then(void 0, function(e) {
                            e.message = "db.getRelations error",
                            e.callFunc = "user::onRelations",
                            r(e),
                            v(e)
                        })
                    }
                    c ? n.mergeRelations(m, l, d, p, u).then(function() {
                        i()
                    }).then(void 0, function(e) {
                        e.message = "db.mergeRelations error",
                        e.callFunc = "user::onRelations",
                        r(e),
                        v(e)
                    }) : (t.logger.warn("user::onRelations: no relations need merge"),
                    i())
                }
                ).then(void 0, function(e) {
                    throw e.message = "merge relations data error",
                    e.callFunc = "user::onRelations",
                    v(e),
                    e
                })) : (g(),
                f()))
            }
            ).catch(function(e) {
                return t.logger.error("user::onRelations: ", e),
                Promise.reject(e)
            });
            function g() {
                t.timetags.relations = u,
                m.invalid = l,
                d.invalid = p,
                s ? (t.syncResult.blacklist = m,
                t.syncResult.mutelist = d,
                t.syncResult.invalidBlacklist = l,
                t.syncResult.invalidMutelist = p) : (t.logger.info("user::onRelations: get relations", m, d),
                e.obj.blacklist = m,
                e.obj.mutelist = d)
            }
            s && (f.cmd = "relations",
            t.syncPromiseArray.push(f))
        }
        ,
        r.markInBlacklist = function(e, t) {
            var n = this.db;
            e.record = {
                account: e.account,
                updateTime: +new Date
            },
            n.enable && n.markInBlacklist(e),
            t && (this.logger.info("user::markInBlacklist:", e),
            this.options.onsyncmarkinblacklist(e))
        }
        ,
        r.markInMutelist = function(e, t) {
            var n = this.db;
            e.record = {
                account: e.account,
                updateTime: +new Date
            },
            n.enable && n.markInMutelist(e),
            t && (this.logger.info("user::markInMutelist:", e),
            this.options.onsyncmarkinmutelist(e))
        }
        ,
        r.mergeUser = function(e) {
            this.userSet[e.account] = e
        }
    }
    , function(e, t, n) {
        "use strict";
        var r, s = n(145), i = (r = s) && r.__esModule ? r : {
            default: r
        };
        var o = n(25).fn
          , a = n(0)
          , c = n(26)
          , u = a.undef
          , m = a.objs2ids
          , l = a.objs2accounts
          , d = a.teams2ids
          , p = n(123)
          , f = a.getGlobal();
        o.beforeSync = function() {
            var e = this.db;
            return e.enable ? e.clearSendingMsgs() : Promise.resolve()
        }
        ,
        o.syncData = function() {
            var e = this
              , t = e.db
              , n = e.options
              , r = t.enable;
            function s(t) {
                e.syncPromiseArray = [],
                e.syncResult = {},
                e.syncTeamMembersPromiseArray = [],
                e.syncSuperTeamMembersPromiseArray = [],
                e.syncTeamMembersResult = {},
                e.checkNosReqNum = 0,
                e.getNosOriginUrlReqNum = 0,
                a.verifyBooleanWithDefault(n, "syncRelations syncFriends syncFriendUsers syncTeams syncSuperTeams syncRoamingMsgs syncSuperTeamRoamingMsgs syncMsgReceipts syncExtraTeamInfo", !0, "", "sync::syncData"),
                a.verifyBooleanWithDefault(n, "syncFilter syncTeamMembers syncSuperTeamMembers", !1, "", "sync::syncData");
                var r = {};
                t = t || {},
                f._nimForceSyncIM && (e.logger.warn("sync::syncData: nimForceSyncIM"),
                delete t.teams,
                f._nimForceSyncIM = !1),
                r.myInfo = t.myInfo || 0,
                r.offlineMsgs = 0,
                n.syncRelations && (r.relations = t.relations || 0),
                n.syncFriends && (r.friends = t.friends || 0),
                n.syncFriendUsers && (r.friendUsers = t.friendUsers || 0),
                n.syncRobots && (r.robots = t.robots || 0),
                n.syncTeams && (r.teams = t.teams || 0),
                n.syncSuperTeams && (r.superTeams = t.superTeams || 0),
                n.syncRoamingMsgs && (r.roamingMsgs = t.roamingMsgs || 0),
                n.syncSuperTeamRoamingMsgs && (r.superTeamRoamingMsgs = t.superTeamRoamingMsgs || 0),
                n.syncMsgReceipts && (r.msgReceipts = t.msgReceipts || 0),
                n.syncExtraTeamInfo && (r.myTeamMembers = t.myTeamMembers || 0),
                n.syncSessionUnread && (r.sessionAck = t.sessionAck || 0),
                n.syncBroadcastMsgs && (r.broadcastMsgs = t.broadcastMsg || 0),
                r.donnop = t.donnop || 0,
                r.deleteMsg = t.deleteMsg || 0,
                r.netcallMsgs = 0,
                n.syncFilter && (r.filterMsgs = 0);
                var s = e.onSyncData.bind(e);
                s.isImSyncDataCb = !0,
                e.sendCmd("sync", {
                    sync: r,
                    isImSyncDataObj: !0
                }, s)
            }
            e.syncing = !0,
            r ? e.beforeSync().then(function() {
                return e.db.getTimetags()
            }).then(function(e) {
                s(e)
            }, function() {
                s()
            }) : s(e.timetags)
        }
        ,
        o.onSyncData = function(e, t) {
            e && this.syncRetryTimes > 3 && (this.syncRetryTimes = 0,
            e.callFunc = "sync::onSyncData",
            this.onCustomError("SYNC_DATA_ERROR", e))
        }
        ,
        o.processSync = function(e) {
            switch (this.syncRetryTimes = this.syncRetryTimes || 0,
            this.syncRetryTimes++,
            e.cmd) {
            case "syncDone":
                e.error ? this.syncRetryTimes > 3 || this.syncData() : (this.timetags.sync = e.content.timetag,
                this.onSyncDone());
                break;
            case "syncTeamMembersDone":
                this.onSyncTeamMembersDone()
            }
        }
        ,
        o.onSyncDone = function(e) {
            var t, n, r, s, o, f, g, h, y, v, b, T, M, S, k, C, I, P, O, x, w, A, _, E, U = this, R = U.db, j = R.enable, N = U.options, F = U.syncPromiseArray, D = U.syncResult;
            if (F && F.length) {
                var L = F.filter(function(e) {
                    return "sessionAck" === e.cmd
                });
                0 === L.length && L.push(Promise.resolve());
                var B = F.filter(function(e) {
                    return "sessionAck" !== e.cmd
                });
                0 === B.length && B.push(Promise.resolve()),
                Promise.all(B).then(function() {
                    return Promise.all(L)
                }, function(e) {
                    e.callFunc = "sync::onSyncDone",
                    e.message = "afterSync syncNormalPromise 出错",
                    U.onCustomError("SYNC_NORMAL_ERROR", e)
                }).then(q, function(e) {
                    e.callFunc = "sync::onSyncDone",
                    e.message = "afterSync syncSessionAckPromise 出错",
                    U.onCustomError("SYNC_SESSION_ACK_ERROR", e)
                }).catch(function(e) {
                    U.syncData()
                })
            } else
                q();
            function q() {
                if (F) {
                    if (U.logger.info("sync::onSyncDone: after sync", a.promises2cmds(F)),
                    F = [],
                    n = D.blacklist || [],
                    r = D.invalidBlacklist || [],
                    s = D.mutelist || [],
                    o = D.invalidMutelist || [],
                    f = D.friends,
                    g = D.invalidFriends || [],
                    h = D.myInfo,
                    y = D.users,
                    b = D.superTeams,
                    M = D.invalidSuperTeams,
                    v = D.teams,
                    T = D.invalidTeams || [],
                    S = D.sessions,
                    k = D.msgReceipts,
                    C = D.roamingMsgs,
                    I = D.offlineMsgs,
                    P = D.offlineFilterMsgs,
                    x = D.offlineSysMsgs,
                    w = D.offlineCustomSysMsgs,
                    A = D.offlineFilterSysMsgs,
                    _ = D.offlineFilterCustomSysMsgs,
                    D.broadcastMsgs,
                    E = D.sysMsgUnread,
                    S) {
                        var e = [];
                        Object.keys(S).forEach(function(t) {
                            e.push(S[t])
                        }),
                        S = e.sort(function(e, t) {
                            return t.updateTime - e.updateTime
                        })
                    }
                    var c = Promise.resolve();
                    j && (c = function() {
                        var e, t = [], n = [];
                        C && C.forEach(function(e) {
                            n = [].concat((0,
                            i.default)(n), (0,
                            i.default)(e.msgs))
                        });
                        I && I.forEach(function(e) {
                            n = [].concat((0,
                            i.default)(n), (0,
                            i.default)(e.msgs))
                        });
                        return e = R.putMsg(n),
                        t.push(e),
                        Promise.all(t).then(function() {
                            return n
                        })
                    }().then(function(e) {
                        var t = {};
                        e.forEach(function(e) {
                            var n = e.sessionId;
                            t[n] || (t[n] = !0,
                            U.markUnreadByMsgsPromise(n))
                        })
                    })),
                    c.then(function() {
                        j && !U.hasSynced && (U.hasSynced = !0,
                        function() {
                            N.syncRelations && (t = R.getRelations().then(function(e) {
                                n = e[0],
                                s = e[1],
                                n.invalid = r,
                                s.invalid = o
                            }, function(e) {
                                return e._msg = "on relations error",
                                e
                            }).catch(function(e) {
                                return U.logger.error("sync::syncRelation: ", e),
                                Promise.reject(e)
                            }),
                            F.push(t));
                            N.syncFriends && (t = R.getFriends().then(function(e) {
                                (f = e).invalid = g
                            }, function(e) {
                                return e._msg = "on friends error",
                                e
                            }).catch(function(e) {
                                return U.logger.error("sync::syncFriends: ", e),
                                Promise.reject(e)
                            }),
                            F.push(t));
                            u(h) && (t = R.getUser(U.account).then(function(e) {
                                h = e
                            }, function(e) {
                                return e._msg = "on myInfo error",
                                e
                            }).catch(function(e) {
                                return U.logger.error("sync::syncMyInfo: ", e),
                                Promise.reject(e)
                            }),
                            F.push(t));
                            N.syncFriendUsers && (t = R.getFriends().then(function(e) {
                                return e.map(function(e) {
                                    return e.account
                                })
                            }).then(function(e) {
                                return R.getUsers(e)
                            }).then(function(e) {
                                y = e
                            }, function(e) {
                                return e._msg = "on users error",
                                e
                            }).catch(function(e) {
                                return U.logger.error("sync::syncFriendUser: ", e),
                                Promise.reject(e)
                            }),
                            F.push(t));
                            N.syncTeams && (t = R.getTeams().then(function(e) {
                                (v = e).invalid = T
                            }, function(e) {
                                return e._msg = "on teams error",
                                e
                            }).catch(function(e) {
                                return U.logger.error("sync::syncTeams: ", e),
                                Promise.reject(e)
                            }),
                            F.push(t));
                            N.syncSuperTeams && (t = R.getSuperTeams().then(function(e) {
                                (b = e).invalid = M
                            }, function(e) {
                                return e._msg = "on superteams error",
                                e
                            }).catch(function(e) {
                                return U.logger.error("sync::syncSuperTeams: ", e),
                                Promise.reject(e)
                            }),
                            F.push(t));
                            t = R.getTeamMembersByAccount(U.account).then(function(e) {
                                U.mergeMyTeamMembers(e)
                            }).catch(function(e) {
                                return U.logger.error("sync::getTeamMembersByAccount: ", e),
                                Promise.reject(e)
                            }),
                            F.push(t),
                            t = R.getDonnop().then(function(e) {
                                U.mergeDonnop(e)
                            }).catch(function(e) {
                                return U.logger.error("sync::donnop: ", e),
                                Promise.reject(e)
                            }),
                            F.push(t),
                            t = R.getSessions().then(function(e) {
                                S = e
                            }, function(e) {
                                return e._msg = "on sessions error",
                                e
                            }).catch(function(e) {
                                return U.logger.error("sync::getSession: ", e),
                                Promise.reject(e)
                            }),
                            F.push(t),
                            t = R.getSysMsgUnread().then(function(e) {
                                E = e
                            }, function(e) {
                                return e._msg = "on sysMsgUnread error",
                                e
                            }).catch(function(e) {
                                return U.logger.error("sync::getSysMsgUnread: ", e),
                                Promise.reject(e)
                            }),
                            F.push(t)
                        }());
                        var e = F.filter(function(e) {
                            return "sessionAck" === e.cmd
                        });
                        0 === e.length && e.push(Promise.resolve());
                        var i = F.filter(function(e) {
                            return "sessionAck" !== e.cmd
                        });
                        0 === i.length && i.push(Promise.resolve()),
                        Promise.all(i).then(function() {
                            return Promise.all(e)
                        }).then(H).then(W, function(e) {
                            e.callFunc = "sync::onSyncDone",
                            e.message = "taskAfterSync syncDBDataPromise 出错",
                            U.onCustomError("SYNC_SESSION_ACK_ERROR", e)
                        })
                    })
                } else
                    U.logger.warn("sync::onSyncDone: after sync --no promiseArray")
            }
            function H() {
                U.logger.info("sync::onSyncDone: taskAfterSync"),
                function() {
                    if (D.deleteMsgSysMsgs) {
                        var e = {};
                        C && C.forEach(function(t) {
                            e[t.sessionId] = t
                        });
                        var t = {};
                        I && I.forEach(function(e) {
                            t[e.sessionId] = e
                        });
                        var n = U.api;
                        D.deleteMsgSysMsgs.forEach(function(r) {
                            r.sysMsgs.forEach(function(r) {
                                var s = r.msg
                                  , i = s.sessionId;
                                [e, t].forEach(function(e) {
                                    e[i] && (e[i].msgs = n.cutMsgs(e[i].msgs, s))
                                })
                            })
                        }),
                        R.enable || [C, I].forEach(function(e) {
                            e && e.forEach(function(e) {
                                if (e.msgs.length) {
                                    var t = U.genSessionByMsgs(e.msgs);
                                    U.cacheSyncedSession(t),
                                    S = n.mergeSessions(S, t)
                                } else
                                    S = n.cutSessions(S, {
                                        id: e.sessionId
                                    })
                            })
                        })
                    }
                }();
                var e = [];
                return e.push(U.deleteMsgOfflineRoaming(D.deleteMsgSysMsgs, S)),
                Promise.all(e)
            }
            function W() {
                setTimeout(J, 0)
            }
            function J() {
                var e, t, r = [], i = [];
                n && (U.logger.info("sync::notifyDataAsync: on blacklist", l(n), n),
                N.onblacklist(n)),
                s && (U.logger.info("sync::notifyDataAsync: on mutelist", l(s), s),
                N.onmutelist(s)),
                f && (U.logger.info("sync::notifyDataAsync: on friends", l(f), f),
                N.onfriends(f)),
                h && (U.logger.info("sync::notifyDataAsync: on myInfo", h),
                U.myInfo = h,
                N.onmyinfo(a.copy(h))),
                y && (y.forEach(function(e) {
                    U.mergeUser(e)
                }),
                U.logger.info("sync::notifyDataAsync: on users", l(y), y),
                N.onusers(y)),
                v && (U.logger.info("sync::notifyDataAsync: on teams", d(v), v),
                N.onteams(v)),
                b && (U.logger.info("sync::notifyDataAsync: onSuperTeams", d(b), b),
                N.onSuperTeams(b)),
                k && (!U.hasSynced && S && S.length || U.hasSynced) && (S = U.mergeSessionAndMsgReceipts(S, k)),
                S && S.length && (S.forEach(function(e) {
                    U.syncResult.sessions && U.syncResult.sessions[e.id] && "number" == typeof U.syncResult.sessions[e.id].unread && (e.unread = U.syncResult.sessions[e.id].unread),
                    U.mergeSession(e),
                    p.trim(e)
                }),
                U.logger.info("sync::notifyDataAsync: on sessions", m(S), S),
                N.onsessions(S)),
                C && C.forEach(function(e) {
                    r.push(e.timetag),
                    (t = e.msgs).length && (U.logger.info("sync::notifyDataAsync: on roaming msgs", e.sessionId, t.length, t),
                    N.onroamingmsgs(e),
                    "superTeam" === t[0].scene && i.push(e.timetag))
                }),
                I && I.forEach(function(e) {
                    r.push(e.timetag),
                    (t = e.msgs).length && (U.logger.info("sync::notifyDataAsync: on offline msgs", e.sessionId, t.length, t),
                    N.onofflinemsgs(e))
                }),
                P && P.forEach(function(e) {
                    r.push(e.timetag),
                    (t = e.msgs).length && (U.logger.info("sync::notifyDataAsync: on offline filter msgs", e.sessionId, t.length, t),
                    N.onofflinefiltermsgs(t))
                });
                var o = []
                  , c = [];
                D.deleteMsgSysMsgs && D.deleteMsgSysMsgs.forEach(function(e) {
                    "roaming" === e.type ? o = o.concat(e.sysMsgs) : c = c.concat(e.sysMsgs)
                }),
                o.length && (O = (O = O || []).concat(o)),
                c.length && (x = (x = x || []).concat(c)),
                O && (U.logger.info("sync::notifyDataAsync: on roaming sys msgs", O.length, O),
                N.onroamingsysmsgs(O)),
                x && (U.logger.info("sync::notifyDataAsync: on offline sys msgs", x.length, x),
                N.onofflinesysmsgs(x)),
                A && (U.logger.info("sync::notifyDataAsync: on offline filter sys msgs", A.length, A),
                N.onofflinefiltersysmsgs(A)),
                w && (U.logger.info("sync::notifyDataAsync: on offline custom sys msgs", w.length, w),
                N.onofflinecustomsysmsgs(w)),
                _ && (U.logger.info("sync::notifyDataAsync: on offline filter custom sys msgs", _.length, _),
                N.onofflinefiltercustomsysmsgs(_)),
                E && (E = a.merge({}, U.sysMsgUnread, E),
                U.sysMsgUnread = a.merge({}, E),
                U.logger.info("sync::notifyDataAsync: on sysMsgUnread", E),
                N.onsysmsgunread(E));
                var u = U.getPushNotificationMultiportConfig();
                if (U.logger.info("sync::notifyDataAsync: on pushNotificationMultiportConfig", u),
                N.onPushNotificationMultiportConfig(u),
                r.length ? (e = Math.max.apply(Math, r),
                U.updateRoamingMsgTimetag(e).then(z, z)) : z(),
                i.lenth && R.enable) {
                    var g = Math.max.apply(Math, i);
                    U.db.updateSuperTeamRoamingMsgTimetag(g)
                }
                U.syncPromiseArray = [],
                U.syncResult = {}
            }
            function z() {
                if (U.processUnsettledMsgs(),
                U.processUnsettledSysMsgs(),
                U.syncing && N.onsyncdone(),
                U.syncing = !1,
                N.syncTeamMembers && v && v.length)
                    throw new c("sync team members api deprecated!")
            }
        }
        ,
        o.syncTeamMembers = function(e) {
            var t, n, r = this;
            t = r.timetags,
            n = {},
            t = t || {},
            e.forEach(function(e) {
                n[e.teamId] = 0
            }, r),
            r.sendCmd("syncTeamMembers", {
                sync: n
            }, r.onSyncTeamMembers.bind(r))
        }
        ,
        o.onSyncTeamMembers = function(e, t) {
            e.callFunc = "sync::onSyncTeamMembers",
            e.message = "同步群成员错误",
            this.onCustomError("SYNC_TEAM_MEMBERS_ERROR", e)
        }
        ,
        o.onSyncTeamMembersDone = function() {
            var e, t = this, n = t.db, r = t.options, s = t.syncTeamMembersResult, i = t.syncTeamMembersPromiseArray;
            function o() {
                t.logger.log("sync::onSyncTeamMembersDone: afterSync", a.promises2cmds(i)),
                i = [],
                n.enable && !t.hasSyncedTeamMembers ? (t.hasSyncedTeamMembers = !0,
                function() {
                    if (!r.syncTeams || !r.syncTeamMembers)
                        return m();
                    n.getTeams().then(function(n) {
                        n.forEach(function(n) {
                            var r = n.teamId;
                            e = new Promise(function(e, n) {
                                t.api.getTeamMembers({
                                    teamId: r,
                                    done: function(t, i) {
                                        t && n({
                                            callFunc: "sync::getTeamMembers: teamId-" + r,
                                            message: "sync team members error"
                                        }),
                                        s[r] = i.members || [],
                                        e()
                                    }
                                })
                            }
                            ),
                            i.push(e)
                        }),
                        i.length ? Promise.all(i).then(c, function(e) {
                            e.callFunc = "sync::onSyncTeamMembersDone",
                            e.message = "pullFullData promiseArray notifyData 错误",
                            t.onCustomError("SYNC_TEAM_MEMBERS_ERROR", e)
                        }) : c()
                    }, function(e) {
                        e.callFunc = "sync::onSyncTeamMembersDone",
                        e.message = "pullFullData getTeams 错误",
                        t.onCustomError("SYNC_TEAM_MEMBERS_ERROR", e)
                    })
                }()) : c()
            }
            function c() {
                setTimeout(u, 0)
            }
            function u() {
                var e, n;
                Object.keys(s).forEach(function(i) {
                    -1 === i.indexOf("invalid") && (e = s[i],
                    n = s[i + "-invalid"] || [],
                    e.invalid = n,
                    function(e, n) {
                        t.logger.info("sync::onSyncTeamMembersDone: onTeamMembers", e, l(n), n),
                        r.onteammembers({
                            teamId: e,
                            members: n
                        })
                    }(i, e))
                }),
                m()
            }
            function m() {
                t.logger.info("sync::onSyncTeamMembersDone: bingo"),
                r.onsyncteammembersdone(),
                t.syncTeamMembersResult = null,
                t.syncTeamMembersPromiseArray = null
            }
            i.length ? Promise.all(i).then(o, function(e) {
                e.callFunc = "sync::onSyncTeamMembersDone",
                e.message = "同步群成员 syncTeamMembersPromiseArray 错误",
                t.onCustomError("SYNC_TEAM_MEMBERS_ERROR", e)
            }).catch(function(e) {
                t.logger.log("sync::onSyncTeamMembersDone: syncTeamMembersPromiseArray promise ", e),
                o()
            }) : o()
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(25).fn
          , s = n(125);
        r.assembleLogin = function() {
            var e = this.assembleIMLogin();
            return this.addPushInfo instanceof Function ? this.addPushInfo(e) : Promise.resolve({
                login: e
            })
        }
        ,
        r.afterLogin = function() {
            var e = this;
            this.initPush instanceof Function && this.initPush();
            var t = this.db;
            if (t.enable) {
                var n = this.account;
                this.options.appendAppKeyForDBName && (n += "-" + this.options.appKey),
                this.db.init(n).then(function() {
                    e.notifyLogin(),
                    e.syncData()
                }, function(n) {
                    e.logger.warn("link::afterLogin: no db", n),
                    t.reset(!1),
                    e.notifyLogin(),
                    e.syncData()
                })
            } else
                this.logger.info("link::afterLogin: no db"),
                this.notifyLogin(),
                this.syncData()
        }
        ,
        r.processAuth = function(e) {
            switch (e.cmd) {
            case "login":
                e.error || (e.content = e.content || {},
                this.loginAndroidPush && this.loginAndroidPush(e.content.aosPushInfo || {}),
                e.obj = e.content.loginRes,
                this.connectionId = e.content.loginRes.connectionId,
                this.onLoginPortsChange(e, 2));
                break;
            case "kicked":
                return void this.onKicked(e);
            case "multiPortLogin":
                this.onLoginPortsChange(e, e.content.state);
                break;
            case "kick":
                e.error || (e.obj.deviceIds = e.content.deviceIds)
            }
        }
        ,
        r.onLoginPortsChange = function(e, t) {
            var n = this
              , r = e.content.loginPorts;
            if (r && r.length) {
                var i = !0;
                switch (t) {
                case 2:
                    i = !0;
                    break;
                case 3:
                    i = !1
                }
                r.forEach(function(e) {
                    e.type = s.reverseType(e.type),
                    e.time = +e.time,
                    e.online = i
                }),
                (r = r.filter(function(e) {
                    return e.connectionId !== n.connectionId
                })).length && (n.logger.info("link::onLoginPortsChange:", r),
                n.options.onloginportschange(r))
            }
        }
        ,
        r.kickedReasons = ["", "samePlatformKick", "serverKick", "otherPlatformKick", "silentlyKick"],
        r.kickedMessages = ["", "不允许同一个帐号在多个地方同时登录", "被服务器踢了", "被其它端踢了", "悄悄被踢"]
    }
    , function(e, t, n) {
        "use strict";
        var r = n(25).fn
          , s = n(5)
          , i = n(0)
          , o = n(39);
        r.refreshSocketUrl = function() {
            var e = this
              , t = e.options
              , n = s.info
              , r = t.lbsUrl;
            function a(t) {
                e.socketUrls = [],
                (t = s.isWeixinApp ? t.data : JSON.parse(t)).common.link.forEach(function(t) {
                    e.socketUrls.push(s.formatSocketUrl({
                        url: t,
                        secure: e.options.secure
                    }))
                }),
                t.common["link.default"].forEach(function(t) {
                    t = s.formatSocketUrl({
                        url: t,
                        secure: e.options.secure
                    }),
                    -1 === e.socketUrls.indexOf(t) && e.socketUrls.push(t)
                });
                try {
                    s.uploadUrl = t.nosup[0]
                } catch (e) {}
                s.chunkUploadUrl = s.chunkUploadUrl || t["nos-chunk"] || "",
                e.logger.info("link::refreshSocketUrl: ajax load, got socket urls ", e.socketUrls),
                e.connectToUrl(e.getNextSocketUrl())
            }
            function c(t) {
                e.logger.error("link::refreshSocketUrl: ajax lbs error", t),
                e.api.reportLogs({
                    event: "nimlb",
                    code: 3001
                });
                var n = s.getDefaultLinkUrl(e.options.secure);
                n ? (e.logger.info("link::refreshSocketUrl: use default link url", n),
                e.connectToUrl(n)) : e.onDisconnect(!1, "link::refreshSocketUrl")
            }
            r = r + i.genUrlSep(r) + "k=" + t.appKey + "&id=" + t.account + "&sv=" + n.sdkVersion + "&pv=" + n.protocolVersion,
            e.logger.info("link::refreshSocketUrl: ajax " + r),
            s.isWeixinApp ? (r = r.replace(/:\d+/, ""),
            wx.request({
                url: r,
                success: a,
                fail: c
            })) : o(r, {
                proxyUrl: i.url2origin(r) + "/lbs/res/cors/nej_proxy_frame.html",
                timeout: s.xhrTimeout,
                onload: a,
                onerror: c
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(52).fn
          , s = n(0)
          , i = s.notundef;
        r.putSession = function(e) {
            return void 0 === (e = s.merge({}, e)).updateTime && e.lastMsg && e.lastMsg.time && (e.updateTime = e.lastMsg.time),
            delete e.unread,
            this.modifyOrPut({
                table: "session",
                obj: e,
                key: "id",
                modifyObjWhenPut: {
                    unread: 0
                }
            })
        }
        ,
        r.getSessions = function(e) {
            var t, n = !(e = e || {}).reverse, r = e.limit || 100, s = e.lastSessionId, o = e.sessionId, a = !1;
            if (i(s))
                t = function(e) {
                    return !!a || (e.id === s && (a = !0),
                    !1)
                }
                ;
            else if (i(o))
                return this.get("session", o);
            return this.getAll("session", {
                index: "updateTime",
                desc: n,
                limit: r,
                filter: t
            })
        }
        ,
        r.getSession = function(e) {
            return this.get("session", e)
        }
        ,
        r.updateSession = function(e) {
            var t = this
              , n = e.id
              , r = s.filterObj(e, "ack unread lastMsg localCustom msgReceiptTime msgReceiptServerTime");
            return Object.keys(e).forEach(function(t) {
                0 === t.indexOf("last") && (r[t] = e[t])
            }),
            this.getOne("session", null, n, {
                modifyObj: r
            }).then(function(e) {
                return e ? t.logger.log("db::updateSession: " + n, r) : t.logger.warn("db::updateSession: no record " + n),
                e
            })
        }
        ,
        r.resetSessionUnread = function(e) {
            return this.updateSession({
                id: e,
                unread: 0
            })
        }
        ,
        r.deleteSession = function(e) {
            return this.remove("session", e)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(52).fn
          , s = n(0);
        s.notundef;
        r.putBroadcastMsg = function(e) {
            var t = this;
            return new Promise(function(n) {
                s.isArray(e) || (e = [e]);
                var r = []
                  , i = e.length;
                function o() {
                    0 === --i && n(r)
                }
                e.forEach(function(e) {
                    e = s.copy(e),
                    t.put("broadcastMsg", e).then(function(e) {
                        r.push(e[0]),
                        o()
                    }, o)
                })
            }
            )
        }
        ,
        r.getBroadcastMsgs = function(e) {
            return e = e || {},
            this.getAll("broadcastMsg", e)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(52).fn
          , s = n(0)
          , i = s.notundef;
        r.putSysMsg = function(e) {
            var t = this;
            return new Promise(function(n) {
                if (s.isArray(e) || (e = [e]),
                !e[0].filter) {
                    var r = []
                      , i = e.length;
                    e.forEach(function(e) {
                        e = s.copy(e),
                        t.put("sysMsg", e).then(function(e) {
                            r.push(e[0]),
                            o()
                        }, o)
                    })
                }
                function o() {
                    0 === --i && n(r)
                }
            }
            )
        }
        ,
        r.getSysMsgs = function(e) {
            var t = !(e = e || {}).reverse
              , n = e.limit || 100
              , r = null
              , s = null;
            e.category && (r = "category",
            s = e.category),
            e.type && (r = "type",
            s = e.type);
            var o, a = e.lastIdServer, c = !1, u = e.read;
            return (i(a) || i(u)) && (o = function(e) {
                return i(a) ? (a = "" + a,
                c ? t() : (e.idServer === a && (c = !0),
                !1)) : t();
                function t() {
                    return !i(u) || e.read === u
                }
            }
            ),
            e = {
                filter: o,
                desc: t,
                limit: n
            },
            r ? this.getOnly("sysMsg", r, s, e) : this.getAll("sysMsg", e)
        }
        ,
        r.getSysMsgByIdServer = function(e) {
            return this.getOne("sysMsg", "idServer", e)
        }
        ,
        r.updateSysMsg = function(e) {
            var t = this;
            if (!e.filter) {
                var n = "" + e.idServer
                  , r = s.filterObj(e, "read state error localCustom");
                return this.getOne("sysMsg", "idServer", n, {
                    modifyObj: r
                }).then(function(e) {
                    return e ? t.logger.log("db::updateSysMsg: " + n, r) : t.logger.warn("db::updateSession: " + n),
                    e
                })
            }
        }
        ,
        r.markSysMsgRead = function(e) {
            var t = this;
            return new Promise(function(n, r) {
                s.isArray(e) || (e = [e]);
                var i, o, a = [], c = [];
                e.forEach(function(e) {
                    i = t.getSysMsgByIdServer(e.idServer).then(function(e) {
                        e && !e.read && (o = t.updateSysMsg({
                            idServer: e.idServer,
                            read: !0
                        }),
                        c.push(o))
                    }, r),
                    a.push(i)
                }),
                Promise.all(a).then(function() {
                    Promise.all(c).then(function(e) {
                        n(e)
                    }, r)
                }, r)
            }
            )
        }
        ,
        r.deleteSysMsg = function(e) {
            var t, n = this, r = [];
            return s.isArray(e) || (e = [e]),
            e.forEach(function(e) {
                e = "" + e,
                t = n.getOne("sysMsg", "idServer", e, {
                    remove: !0
                }),
                r.push(t)
            }),
            1 === r.length ? r[0] : Promise.all(r)
        }
        ,
        r.deleteAllSysMsgs = function() {
            var e = this.clearTable("sysMsg")
              , t = this.clearTable("sysMsgUnread");
            return Promise.all([e, t])
        }
        ,
        r.getSysMsgUnread = function() {
            return this.getAll("sysMsgUnread").then(function(e) {
                var t = {};
                return e.forEach(function(e) {
                    t[e.type] = e.num
                }),
                t
            })
        }
        ,
        r.updateSysMsgUnread = function(e) {
            var t = this;
            e = s.copy(e);
            var n = [];
            return Object.keys(e).forEach(function(t) {
                n.push({
                    type: t,
                    num: e[t]
                })
            }),
            this.put("sysMsgUnread", n).then(function() {
                return t.logger.log("db::updateSysMsgUnread: ", e),
                e
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(52).fn
          , s = n(0)
          , i = n(5);
        r.putMsg = function(e) {
            return s.isArray(e) || (e = [e]),
            !e.length || e[0].filter ? Promise.resolve() : (e = e.filter(function(e) {
                return !e.ignore
            }),
            this.put("msg1", e))
        }
        ,
        r.updateMsg = function(e) {
            var t = this;
            if (!e.filter) {
                var n = e.idClient
                  , r = s.filterObj(e, "resend status idServer time localCustom");
                return t.getOne("msg1", null, n, {
                    modifyObj: r
                }).then(function(e) {
                    return e ? t.logger.log("db::updateMsg: " + n, r) : t.logger.warn("db::updateMsg: no record " + n),
                    e
                })
            }
        }
        ,
        r.getMsgs = function(e) {
            return i.isBrowser ? this.getMsgsIndexedDB(e) : i.isRN ? this.getMsgsRN(e) : Promise.resolve()
        }
        ,
        r.getMsgsRN = function(e) {
            var t = {};
            return "number" == typeof e.start && (t.lowerBound = ["time", e.start]),
            "number" == typeof e.end && e.end !== 1 / 0 && (t.upperBound = ["time", e.end]),
            t.desc = !1,
            t.sortIndex = "time",
            "boolean" == typeof e.desc && (t.desc = e.desc),
            "number" == typeof e.limit && (t.limit = e.limit),
            t.searchIndex = [],
            e.sessionId && t.searchIndex.push(["sessionId", e.sessionId]),
            "string" == typeof e.type && t.searchIndex.push(["type", e.type]),
            this.getAll("msg1", t)
        }
        ,
        r.getMsgsIndexedDB = function(e) {
            this.checkDB();
            var t = "time"
              , n = !1
              , r = !1
              , i = (e = e || {}).sessionId || []
              , o = e.sessionIds || [];
            s.isString(i) ? i = [i] : Array.isArray(i) || (i = []),
            s.isString(o) ? o = [o] : Array.isArray(o) || (o = []);
            var a = i.concat(o);
            1 === a.length ? (n = !0,
            t = "sessionTime",
            i = a[0]) : a.length > 1 && (n = !0,
            r = !0,
            o = a);
            var c = e.start || 0
              , u = e.end || 1 / 0
              , m = c
              , l = u;
            n && !r && (m = [i, c],
            l = [i, u]);
            var d = !1 !== e.desc
              , p = e.limit || 100
              , f = !1
              , g = !1
              , h = e.type || []
              , y = e.types || [];
            s.isString(h) ? h = [h] : Array.isArray(h) || (h = []),
            s.isString(y) ? y = [y] : Array.isArray(y) || (y = []);
            var v = h.concat(y);
            1 === v.length ? (f = !0,
            h = v[0]) : v.length > 1 && (f = !0,
            g = !0,
            y = v);
            var b = e.keyword || ""
              , T = e.filterFunc
              , M = void 0;
            return (r || f || b || s.isFunction(T)) && (M = function(e) {
                if (r && -1 === o.indexOf(e.sessionId))
                    return !1;
                if (f)
                    if (g) {
                        if (-1 === y.indexOf(e.type))
                            return !1
                    } else if (h !== e.type)
                        return !1;
                if (b && -1 === (e.text || e.tip || "").indexOf(b))
                    return !1;
                return !T || T(e)
            }
            ),
            this.server.query("msg1", t).bound(m, l, !0, !0).desc(d).limit(p).filter(M).execute()
        }
        ,
        r.getMsgCountAfterAck = function(e) {
            return i.isBrowser ? this.getMsgCountAfterAckIndexedDB(e) : i.isRN ? this.getMsgCountAfterAckRN(e) : Promise.resolve()
        }
        ,
        r.getMsgCountAfterAckRN = function(e) {
            var t = e = e || {}
              , n = t.sessionId
              , r = t.ack;
            return this.checkDB(),
            this.getAll("msg1", {
                searchIndex: ["sessionId", n],
                lowerBound: ["time", r]
            }).then(function(t) {
                var n = t.filter(function(t) {
                    return "out" !== t.flow && ("notification" !== t.type || !!e.shouldCountNotifyUnread(t))
                });
                return Promise.resolve(n.length)
            })
        }
        ,
        r.getMsgCountAfterAckIndexedDB = function(e) {
            var t = (e = e || {}).sessionId;
            return this.checkDB(),
            this.server.query("msg1", "sessionTime").bound([t, e.ack], [t, 1 / 0], !0, !0).execute().then(function(t) {
                var n = t.filter(function(t) {
                    return "out" !== t.flow && ("notification" !== t.type || !!e.shouldCountNotifyUnread(t))
                });
                return Promise.resolve(n.length)
            })
        }
        ,
        r.amendMsg = function(e) {
            return e ? (s.notexist(e.text) && (e.text = ""),
            e) : null
        }
        ,
        r.getMsgByIdClient = function(e) {
            var t = this;
            return t.getOne("msg1", null, e).then(function(e) {
                return t.amendMsg(e)
            })
        }
        ,
        r.getMsgsByIdClients = function(e) {
            var t, n = this, r = [];
            return e.forEach(function(e) {
                t = n.getMsgByIdClient(e),
                r.push(t)
            }),
            Promise.all(r)
        }
        ,
        r.clearSendingMsgs = function() {
            var e = this;
            return e.getOnly("msg1", "status", "sending", {
                modifyObj: {
                    status: "fail"
                }
            }).then(function(t) {
                e.logger.log("db::clearSendingMsgs: msgs send failed", t)
            })
        }
        ,
        r.deleteMsg = function(e) {
            var t, n = this, r = [];
            return s.isArray(e) || (e = [e]),
            e.forEach(function(e) {
                t = n.getOne("msg1", null, e, {
                    remove: !0
                }).then(function(e) {
                    return n.logger.log("db::deleteMsg:", e),
                    e
                }),
                r.push(t)
            }),
            1 === r.length ? r[0] : Promise.all(r)
        }
        ,
        r.deleteMsgsBySessionId = function(e) {
            var t = this
              , n = null
              , r = e.start
              , s = e.end;
            return void 0 !== r && void 0 !== s ? n = function(e) {
                return e > r && e < s
            }
            : void 0 !== r ? n = function(e) {
                return e > r
            }
            : void 0 !== s && (n = function(e) {
                return e < s
            }
            ),
            n ? t.getOnly("msg1", "sessionId", e.sessionId).then(function(e) {
                t.logger.log("db::deleteMsgsBySessionId: session results", e);
                var r = [];
                return (e = e || []).map(function(e) {
                    n(e.time) && r.push(e.idClient)
                }),
                t.deleteMsg(r)
            }) : t.getOnly("msg1", "sessionId", e.sessionId, {
                remove: !0
            })
        }
        ,
        r.deleteMsgsByTime = function(e) {
            return this.remove("msg1", null, "time", e.start, e.end, !0, !0)
        }
        ,
        r.deleteAllMsgs = function() {
            var e = this.clearTable("msg1")
              , t = this.clearTable("session");
            return Promise.all([e, t])
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(52).fn
          , s = n(0);
        r.mergeMyInfo = function(e, t) {
            var n = this;
            return n.put("user", e).then(function() {
                return t ? n.updateMyInfoTimetag(e.updateTime) : e
            })
        }
        ,
        r.mergeFriendUsers = function(e, t) {
            var n = this;
            return n.putUsers(e).then(function() {
                n.updateFriendUserTimetag(t)
            })
        }
        ,
        r.putUsers = function(e) {
            return this.put("user", e)
        }
        ,
        r.putUser = function(e) {
            return this.put("user", e)
        }
        ,
        r.updateUser = function(e) {
            var t = this
              , n = (e = s.copy(e)).account;
            return this.getOne("user", null, n, {
                modifyObj: e
            }).then(function(r) {
                return r ? t.logger.log("db::updateUser: " + n, e) : t.logger.warn("db::updateUser: no record " + n),
                r
            })
        }
        ,
        r.putUsersIfIsFriend = function(e) {
            var t, n = this, r = [], s = [];
            return e.forEach(function(e) {
                t = n.getFriend(e.account).then(function(r) {
                    return r && (t = n.putUser(e),
                    s.push(t)),
                    r
                }),
                r.push(t)
            }),
            Promise.all(r).then(function() {
                return Promise.all(s).then(function(e) {
                    return e
                })
            })
        }
        ,
        r.deleteUser = function(e) {
            return this.remove("user", e)
        }
        ,
        r.getUser = function(e) {
            return this.getOne("user", null, e)
        }
        ,
        r.getUsers = function(e) {
            return this.getAll("user", {
                filter: function(t) {
                    return -1 !== e.indexOf(t.account)
                }
            })
        }
        ,
        r.getAllUsers = function() {
            return this.getAll("user")
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(52).fn
          , s = n(0)
          , i = n(26)
          , o = n(189)
          , a = n(146);
        function c(e) {
            return e.valid && e.validToCurrentUser
        }
        function u(e) {
            return e && e.valid
        }
        function m(e) {
            return e && s.fillUndef(e, {
                mute: !1,
                custom: ""
            }),
            e
        }
        r.mergeSuperTeams = function(e, t, n) {
            var r = this
              , s = r.put("superTeam", e)
              , i = r.leaveTeams(t, n);
            return Promise.all([s, i]).then(function() {
                return r.logger.log("db::mergeSuperTeams:"),
                r.updateSuperTeamTimetag(n),
                [e, t, n]
            })
        }
        ,
        r.putSuperTeam = function(e) {
            if (e)
                return s.isArray(e) || (e = [e]),
                e.forEach(function(e) {
                    e.validToCurrentUser = !0
                }),
                this.put("superTeam", e)
        }
        ,
        r.updateSuperTeam = function(e) {
            var t = this
              , n = (e = s.copy(e)).teamId;
            return t.getOne("superTeam", null, n, {
                modifyObj: e
            }).then(function(r) {
                return r ? (t.logger.log("db::updateSuperTeam: " + n, e),
                r) : (t.logger.warn("db::updateSuperTeam: no record " + n),
                t.putSuperTeam(e))
            })
        }
        ,
        r.leaveSuperTeam = function(e) {
            var t = this;
            return t.updateSuperTeam({
                teamId: e,
                validToCurrentUser: !1
            }).then(function() {
                return t.removeAllSuperTeamMembers(e)
            })
        }
        ,
        r.dismissSuperTeam = function(e, t) {
            var n = this
              , r = {
                teamId: e,
                valid: !1,
                validToCurrentUser: !1,
                updateTime: t
            };
            return n.updateSuperTeam(r).then(function() {
                return n.removeAllSuperTeamMembers(e)
            })
        }
        ,
        r.leaveSuperTeams = function(e, t) {
            var n, r = this, s = [];
            return e.forEach(function(e) {
                n = r.leaveSuperTeam(e.teamId, t),
                s.push(n)
            }),
            Promise.all(s)
        }
        ,
        r.getSuperTeamsByTeamIds = function(e) {
            var t, n = this, r = [];
            return e.forEach(function(e) {
                t = n.getSuperTeam(e),
                r.push(t)
            }),
            Promise.all(r)
        }
        ,
        r.getSuperTeam = function(e) {
            e = "" + e;
            var t = this;
            return t.getOne("superTeam", null, e).then(function(e) {
                return e ? (t.updateSuperTeamProperties([e]),
                e) : null
            })
        }
        ,
        r.getSuperTeams = function() {
            var e = this;
            return e.getAll("superTeam", {
                filter: c
            }).then(function(t) {
                return e.updateSuperTeamProperties(t),
                t
            })
        }
        ,
        r.updateSuperTeamProperties = function(e) {
            e.forEach(function(e) {
                e && o.fillProperties(e)
            })
        }
        ,
        r.mergeSuperTeamMembers = function(e, t, n, r) {
            var s = this
              , i = s.putSuperTeamMembers(t)
              , o = s.updateSuperTeamMembers(n);
            return Promise.all([i, o]).then(function() {
                return s.logger.log("db::mergeSuperTeamMembers: " + e),
                null != r ? s.updateSuperTeamMemberTimetag(e, r) : Promise.resolve()
            })
        }
        ,
        r.putSuperTeamMembers = function(e) {
            return this.put("superTeamMember", e)
        }
        ,
        r.getSuperTeamMembersByAccount = function(e) {
            return this.getOnly("superTeamMember", "account", e, {
                filter: u,
                mapper: m
            }).then()
        }
        ,
        r.getSuperTeamMembers = function(e, t) {
            var n = this;
            e = "" + e;
            var r = {
                filter: function(e) {
                    return e.valid
                },
                mapper: m
            };
            if (t) {
                if ("number" != typeof t.joinTime)
                    return void n.logger.error("db::getSuperTeamMembers::params.joinTime should be number, not ", t.joinTime);
                t.limit && (r.limit = t.limit),
                t.reverse ? r.filter = function(e) {
                    return e.valid && e.joinTime <= t.joinTime
                }
                : r.filter = function(e) {
                    return e.valid && e.joinTime >= t.joinTime
                }
            }
            return n.getOnly("superTeamMember", "teamId", e, r).then(function(e) {
                return n.updateSuperTeamMemberProperties(e).then(function() {
                    return e
                })
            })
        }
        ,
        r.updateSuperTeamMemberProperties = function(e) {
            var t, n = this, r = [];
            return e.forEach(function(e) {
                a.fillProperties(e) && (t = n.updateSuperTeamMember(e),
                r.push(t))
            }),
            Promise.all(r)
        }
        ,
        r.getInvalidSuperTeamMembers = function(e, t) {
            var n = this;
            e = "" + e;
            var r, s = [];
            return t.forEach(function(t) {
                r = n.getOne("superTeamMember", "id", a.genId(e, t)).then(function(e) {
                    return m(e)
                }),
                s.push(r)
            }),
            Promise.all(s)
        }
        ,
        r.updateSuperTeamMember = function(e) {
            var t = this
              , n = e.teamId
              , r = e.account
              , i = a.genId(n, r)
              , o = s.filterObj(e, "nickInTeam muteTeam mute custom updateTime type valid");
            return this.getOne("superTeamMember", "id", i, {
                modifyObj: o,
                mapper: m
            }).then(function(e) {
                return e ? t.logger.log("db::updateSuperTeamMember: " + n + " " + r, o) : t.logger.warn("db::updateSuperTeam: no record " + n + " " + r),
                e
            })
        }
        ,
        r.updateSuperTeamMembers = function(e) {
            var t = this;
            if (!e.length)
                return Promise.resolve();
            var n, r = [];
            return e.forEach(function(e) {
                n = t.updateSuperTeamMember(e),
                r.push(n)
            }),
            Promise.all(r)
        }
        ,
        r.removeSuperTeamMembersByAccounts = function(e, t) {
            var n = t.map(function(t) {
                return {
                    teamId: e,
                    account: t,
                    valid: !1
                }
            });
            return this.updateSuperTeamMembers(n)
        }
        ,
        r.removeAllSuperTeamMembers = function(e) {
            var t = this;
            return t.getOnly("superTeamMember", "teamId", e, {
                modifyObj: {
                    valid: !1
                }
            }).then(function() {
                return t.logger.warn("db::removeAllSuperTeamMembers: " + e),
                t.deleteSuperTeamMemberTimetag(e)
            })
        }
        ,
        r.deleteSuperTeamMembers = function(e) {
            var t = this;
            return t.getOnly("superTeamMember", "teamId", e, {
                remove: !0
            }).then(function() {
                t.logger.warn("db::deleteTeamMembers: " + e),
                t.deleteSuperTeamMemberTimetag(e)
            })
        }
        ,
        r.deleteSuperTeam = function(e) {
            var t, n = this, r = [];
            return s.isArray(e) || (e = [e]),
            e.forEach(function(e) {
                e = "" + e,
                t = n.get("superTeam", e).then(function(t) {
                    if (t && c(t))
                        throw i.stillInTeamError({
                            callFunc: "team::deleteTeam",
                            team: t
                        });
                    var r = n.remove("superTeam", e)
                      , s = n.deleteSuperTeamMembers(e);
                    return Promise.all([r, s])
                }),
                r.push(t)
            }),
            1 === r.length ? r[0] : Promise.all(r)
        }
        ,
        r.transferSuperTeam = function(e, t, n) {
            var r = this;
            return r.updateSuperTeamMembers([t, n]).then(function() {
                return r.putSuperTeam(e).then(function() {
                    return r.logger.log("db::transferSuperTeam: " + e.teamId + " " + t.account + " -> " + n.account),
                    [e, t, n]
                })
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(52).fn
          , s = n(0)
          , i = n(26)
          , o = n(126)
          , a = n(90);
        function c(e) {
            return e.valid && e.validToCurrentUser
        }
        function u(e) {
            return e && e.valid
        }
        function m(e) {
            return e && s.fillUndef(e, {
                mute: !1,
                custom: ""
            }),
            e
        }
        r.mergeTeams = function(e, t, n) {
            var r = this
              , s = r.put("team", e)
              , i = r.leaveTeams(t, n);
            return Promise.all([s, i]).then(function() {
                return r.logger.log("db::mergeTeams:"),
                r.updateTeamTimetag(n),
                [e, t, n]
            })
        }
        ,
        r.putTeam = function(e) {
            if (e)
                return s.isArray(e) || (e = [e]),
                e.forEach(function(e) {
                    e.validToCurrentUser = !0
                }),
                this.put("team", e)
        }
        ,
        r.updateTeam = function(e) {
            var t = this
              , n = (e = s.copy(e)).teamId;
            return t.getOne("team", null, n, {
                modifyObj: e
            }).then(function(r) {
                if (r)
                    t.logger.log("db::updateTeam: " + n, e);
                else if (t.logger.warn("db::updateTeam: no record " + n),
                e.validToCurrentUser)
                    return t.putTeam(e);
                return r
            })
        }
        ,
        r.transferTeam = function(e, t, n) {
            var r = this
              , s = e.teamId
              , i = e.memberUpdateTime
              , o = {
                teamId: s,
                account: t,
                type: "normal",
                updateTime: i
            }
              , a = {
                teamId: s,
                account: n,
                type: "owner",
                updateTime: i
            };
            return r.updateTeamMembers([o, a]).then(function() {
                return r.putTeam(e).then(function() {
                    return r.logger.log("db::transferTeam: " + e.teamId + " " + t + " -> " + n),
                    [e, t, n]
                })
            })
        }
        ,
        r.leaveTeam = function(e) {
            var t = this;
            return t.updateTeam({
                teamId: e,
                validToCurrentUser: !1
            }).then(function() {
                return t.removeAllTeamMembers(e)
            })
        }
        ,
        r.dismissTeam = function(e, t) {
            var n = this
              , r = {
                teamId: e,
                valid: !1,
                validToCurrentUser: !1,
                updateTime: t
            };
            return n.updateTeam(r).then(function() {
                return n.removeAllTeamMembers(e)
            })
        }
        ,
        r.leaveTeams = function(e, t) {
            var n, r = this, s = [];
            return e.forEach(function(e) {
                n = r.leaveTeam(e.teamId, t),
                s.push(n)
            }),
            Promise.all(s)
        }
        ,
        r.getTeamsByTeamIds = function(e) {
            var t, n = this, r = [];
            return e.forEach(function(e) {
                t = n.getTeam(e),
                r.push(t)
            }),
            Promise.all(r)
        }
        ,
        r.getTeam = function(e) {
            e = "" + e;
            var t = this;
            return t.getOne("team", null, e).then(function(e) {
                return e ? (t.updateTeamProperties([e]),
                e) : null
            })
        }
        ,
        r.getTeams = function() {
            var e = this;
            return e.getAll("team", {
                filter: c
            }).then(function(t) {
                return e.updateTeamProperties(t),
                t
            })
        }
        ,
        r.updateTeamProperties = function(e) {
            e.forEach(function(e) {
                e && o.fillProperties(e)
            })
        }
        ,
        r.mergeTeamMembers = function(e, t, n, r) {
            var s = this
              , i = s.putTeamMembers(t)
              , o = s.updateTeamMembers(n);
            return Promise.all([i, o]).then(function() {
                return s.logger.log("db::mergeTeamMembers: " + e),
                s.updateTeamMemberTimetag(e, r)
            })
        }
        ,
        r.putTeamMembers = function(e) {
            return this.put("teamMember", e)
        }
        ,
        r.getTeamMembersByAccount = function(e) {
            return this.getOnly("teamMember", "account", e, {
                filter: u,
                mapper: m
            }).then()
        }
        ,
        r.getTeamMembers = function(e) {
            var t = this;
            e = "" + e;
            return t.getOnly("teamMember", "teamId", e, {
                filter: function(e) {
                    return e.valid
                },
                mapper: m
            }).then(function(e) {
                return t.updateTeamMemberProperties(e).then(function() {
                    return e
                })
            })
        }
        ,
        r.updateTeamMemberProperties = function(e) {
            var t, n = this, r = [];
            return e.forEach(function(e) {
                a.fillProperties(e) && (t = n.updateTeamMember(e),
                r.push(t))
            }),
            Promise.all(r)
        }
        ,
        r.getInvalidTeamMembers = function(e, t) {
            var n = this;
            e = "" + e;
            var r, s = [];
            return t.forEach(function(t) {
                r = n.getOne("teamMember", null, a.genId(e, t)).then(function(e) {
                    return m(e)
                }),
                s.push(r)
            }),
            Promise.all(s)
        }
        ,
        r.updateTeamMember = function(e) {
            var t = this
              , n = e.teamId
              , r = e.account
              , i = a.genId(n, r)
              , o = s.filterObj(e, "nickInTeam muteTeam mute custom updateTime type valid");
            return this.getOne("teamMember", null, i, {
                modifyObj: o,
                mapper: m
            }).then(function(e) {
                return e ? t.logger.log("db::updateTeamMember: " + n + " " + r, o) : t.logger.warn("db::updateTeam: no record " + n + " " + r),
                e
            })
        }
        ,
        r.updateTeamMembers = function(e) {
            var t = this;
            if (!e.length)
                return Promise.resolve();
            var n, r = [];
            return e.forEach(function(e) {
                n = t.updateTeamMember(e),
                r.push(n)
            }),
            Promise.all(r)
        }
        ,
        r.updateTeamManagers = function(e, t, n, r) {
            var s = t.map(function(t) {
                return {
                    teamId: e,
                    account: t,
                    type: n ? "manager" : "normal",
                    updateTime: r
                }
            });
            return this.updateTeamMembers(s)
        }
        ,
        r.removeTeamMembersByAccounts = function(e, t) {
            var n = t.map(function(t) {
                return {
                    teamId: e,
                    account: t,
                    valid: !1
                }
            });
            return this.updateTeamMembers(n)
        }
        ,
        r.removeAllTeamMembers = function(e) {
            var t = this;
            return t.getOnly("teamMember", "teamId", e, {
                modifyObj: {
                    valid: !1
                }
            }).then(function() {
                return t.logger.warn("db::removeAllTeamMembers: " + e),
                t.deleteTeamMemberTimetag(e)
            })
        }
        ,
        r.deleteTeamMembers = function(e) {
            var t = this;
            return t.getOnly("teamMember", "teamId", e, {
                remove: !0
            }).then(function() {
                t.logger.warn("db::deleteTeamMembers: " + e),
                t.deleteTeamMemberTimetag(e)
            })
        }
        ,
        r.deleteTeam = function(e) {
            var t, n = this, r = [];
            return s.isArray(e) || (e = [e]),
            e.forEach(function(e) {
                e = "" + e,
                t = n.get("team", e).then(function(t) {
                    if (t && c(t))
                        throw i.stillInTeamError({
                            callFunc: "team::deleteTeam",
                            team: t
                        });
                    var r = n.remove("team", e)
                      , s = n.deleteTeamMembers(e);
                    return Promise.all([r, s])
                }),
                r.push(t)
            }),
            1 === r.length ? r[0] : Promise.all(r)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(52).fn
          , s = n(0);
        r.mergeFriends = function(e, t, n) {
            var r = this;
            return r.updateAndDelete("friend", e, t).then(function() {
                return r.logger.log("db::mergeFriends: updateAndDelete done", e),
                n && r.updateFriendTimetag(n),
                [e, t, n]
            })
        }
        ,
        r.putFriend = function(e) {
            return this.put("friend", e)
        }
        ,
        r.updateFriend = function(e) {
            var t = this
              , n = (e = s.copy(e)).account;
            return this.getOne("friend", null, n, {
                modifyObj: e
            }).then(function(r) {
                return r ? t.logger.log("db::updateFriend: " + n, e) : t.logger.warn("db::updateFriend: no record " + n),
                r
            })
        }
        ,
        r.deleteFriend = function(e) {
            var t = this.remove("friend", e)
              , n = this.deleteUser(e);
            return Promise.all([t, n])
        }
        ,
        r.getFriends = function() {
            return this.getAll("friend", {
                filter: function(e) {
                    return e.valid
                }
            })
        }
        ,
        r.getFriend = function(e) {
            return this.getOne("friend", null, e)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(52).fn
          , s = n(0);
        r.mergeRelations = function(e, t, n, r, s) {
            var i = this
              , o = i.updateAndDelete("blacklist", e, t)
              , a = i.updateAndDelete("mutelist", n, r);
            return Promise.all([o, a]).then(function() {
                return i.logger.log("db::mergeRelations: timetag " + s),
                i.updateRelationTimetag(s),
                [e, t, n, r, s]
            })
        }
        ,
        r.getRelations = function() {
            var e = this.getAll("blacklist")
              , t = this.getAll("mutelist");
            return Promise.all([e, t])
        }
        ,
        r.markInBlacklist = function(e) {
            if ((e = s.copy(e)).isAdd) {
                var t = e.record;
                return this.put("blacklist", t)
            }
            var n = e.account;
            return this.remove("blacklist", n)
        }
        ,
        r.markInMutelist = function(e) {
            if ((e = s.copy(e)).isAdd) {
                var t = e.record;
                return this.put("mutelist", t)
            }
            var n = e.account;
            return this.remove("mutelist", n)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(52).fn;
        r.getTimetags = function(e) {
            var t = {};
            return this.getAll("timetag", {
                filter: e,
                mapper: function(e) {
                    return -1 !== e.name.indexOf("team-") ? t[e.name] = 0 : t[e.name] = e.value,
                    e
                }
            }).then(function() {
                return t
            })
        }
        ,
        r.getTeamMemberTimetags = function() {
            return this.getTimetags(function(e) {
                return -1 !== e.name.indexOf("team-")
            })
        }
        ,
        r.getTimetag = function(e) {
            return this.getOne("timetag", null, e).then(function(e) {
                return (e = e || {
                    value: 0
                }).value
            })
        }
        ,
        r.getTeamMemberTimetag = function(e) {
            return 0
        }
        ,
        r.updateTimetag = function(e, t) {
            var n = {
                name: e,
                value: t
            };
            return this.put("timetag", n)
        }
        ,
        r.updateMyInfoTimetag = function(e) {
            return this.updateTimetag("myInfo", e)
        }
        ,
        r.updateRelationTimetag = function(e) {
            return this.updateTimetag("relations", e)
        }
        ,
        r.getRelationsTimetag = function() {
            return this.getTimetag("relations")
        }
        ,
        r.updateFriendTimetag = function(e) {
            return this.updateTimetag("friends", e)
        }
        ,
        r.getFriendsTimetag = function() {
            return this.getTimetag("friends")
        }
        ,
        r.updateFriendUserTimetag = function(e) {
            return this.updateTimetag("friendUsers", e)
        }
        ,
        r.updateTeamTimetag = function(e) {
            return this.updateTimetag("teams", e)
        }
        ,
        r.getTeamsTimetag = function() {
            return this.getTimetag("teams")
        }
        ,
        r.updateSuperTeamTimetag = function(e) {
            return this.updateTimetag("superTeams", e)
        }
        ,
        r.getSuperTeamsTimetag = function() {
            return this.getTimetag("superTeams")
        }
        ,
        r.updateTeamMemberTimetag = function(e, t) {
            return this.updateTimetag("team-" + e, t)
        }
        ,
        r.getTeamMembersTimetag = function(e) {
            return this.getTimetag("team-" + e)
        }
        ,
        r.updateSuperTeamMemberTimetag = function(e, t) {
            return this.updateTimetag("superTeam-" + e, t)
        }
        ,
        r.getSuperTeamMembersTimetag = function(e) {
            return this.getTimetag("superTeam-" + e)
        }
        ,
        r.updateMyTeamMembersTimetag = function(e) {
            return this.updateTimetag("myTeamMembers", e)
        }
        ,
        r.getBroadcastMsgTimetag = function(e) {
            return this.getTimetag("broadcastMsg")
        }
        ,
        r.updateBroadcastMsgTimetag = function(e) {
            return this.updateTimetag("broadcastMsg", parseInt(e))
        }
        ,
        r.updateRoamingMsgTimetag = function(e) {
            return this.updateTimetag("roamingMsgs", e)
        }
        ,
        r.updateSuperTeamRoamingMsgTimetag = function(e) {
            return this.updateTimetag("superTeamRoamingMsgs", e)
        }
        ,
        r.updateMsgReceiptsTimetag = function(e) {
            return this.updateTimetag("msgReceipts", e)
        }
        ,
        r.updateDonnopTimetag = function(e) {
            return this.updateTimetag("donnop", e)
        }
        ,
        r.updateDeleteMsgTimetag = function(e) {
            return this.updateTimetag("deleteMsg", e)
        }
        ,
        r.updateSessionAck = function(e) {
            return this.updateTimetag("sessionAck", e)
        }
        ,
        r.deleteTimetag = function(e) {
            return this.remove("timetag", e)
        }
        ,
        r.deleteTeamMemberTimetag = function(e) {
            return this.deleteTimetag("team-" + e)
        }
        ,
        r.deleteSuperTeamMemberTimetag = function(e) {
            return this.deleteTimetag("superTeam-" + e)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(52).fn;
        r.setKey = function(e, t) {
            return this.put("kv", {
                key: e,
                value: t
            })
        }
        ,
        r.getKey = function(e) {
            return this.get("kv", e).then(function(e) {
                return e && e.value
            })
        }
        ,
        r.setDonnop = function(e) {
            return this.setKey("donnop", e)
        }
        ,
        r.getDonnop = function() {
            return this.getKey("donnop")
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = {
            version: 9
        }
          , s = {
            kv: {
                key: {
                    keyPath: "key"
                }
            },
            timetag: {
                key: {
                    keyPath: "name"
                }
            },
            blacklist: {
                key: {
                    keyPath: "account"
                }
            },
            mutelist: {
                key: {
                    keyPath: "account"
                }
            },
            friend: {
                key: {
                    keyPath: "account"
                }
            },
            user: {
                key: {
                    keyPath: "account"
                }
            },
            team: {
                key: {
                    keyPath: "teamId"
                }
            },
            teamMember: {
                key: {
                    keyPath: "id"
                },
                indexes: {
                    teamId: {
                        unique: !1
                    },
                    account: {
                        unique: !1
                    }
                }
            },
            superTeam: {
                key: {
                    keyPath: "teamId"
                }
            },
            superTeamMember: {
                key: {
                    keyPath: "id"
                },
                indexes: {
                    teamId: {
                        unique: !1
                    },
                    account: {
                        unique: !1
                    },
                    id: {
                        unique: !1
                    }
                }
            },
            msg: {
                key: {
                    autoIncrement: !0
                },
                indexes: {
                    idClient: {
                        unique: !0
                    },
                    sessionId: {
                        unique: !1
                    },
                    time: {
                        unique: !1
                    },
                    type: {
                        unique: !1
                    },
                    sessionType: {
                        unique: !1
                    },
                    status: {
                        unique: !1
                    },
                    sessionTime: {
                        key: ["sessionId", "time"],
                        unique: !1
                    }
                }
            },
            msg1: {
                key: {
                    keyPath: "idClient"
                },
                indexes: {
                    sessionId: {
                        unique: !1
                    },
                    time: {
                        unique: !1
                    },
                    status: {
                        unique: !1
                    },
                    sessionTime: {
                        key: ["sessionId", "time"],
                        unique: !1
                    }
                }
            },
            broadcastMsg: {
                key: {
                    keyPath: "broadcastId"
                },
                indexes: {
                    time: {
                        unique: !1
                    }
                }
            },
            sysMsg: {
                key: {
                    autoIncrement: !0
                },
                indexes: {
                    idServer: {
                        unique: !0
                    },
                    category: {
                        unique: !1
                    },
                    type: {
                        unique: !1
                    }
                }
            },
            sysMsgUnread: {
                key: {
                    keyPath: "type"
                }
            },
            session: {
                key: {
                    keyPath: "id"
                },
                indexes: {
                    updateTime: {
                        unique: !1
                    }
                }
            }
        };
        r.keyPath = function(e) {
            return s[e].key.keyPath
        }
        ,
        r.schema = function() {
            return window._nimForceSyncIM = !0,
            s
        }
        ,
        e.exports = r
    }
    , function(e, t, n) {
        "use strict";
        (function(r) {
            var s, i, o = n(9), a = (i = o) && i.__esModule ? i : {
                default: i
            };
            !function(i, o) {
                var c, u = (i = void 0 !== i ? i : "undefined" != typeof self ? self : void 0 !== r ? r : {}).IDBKeyRange || i.webkitIDBKeyRange, m = "readonly", l = "readwrite", d = Object.prototype.hasOwnProperty, p = function() {
                    if (!c && !(c = i.indexedDB || i.webkitIndexedDB || i.mozIndexedDB || i.oIndexedDB || i.msIndexedDB || (null === i.indexedDB && i.shimIndexedDB ? i.shimIndexedDB : o)))
                        throw "IndexedDB required";
                    return c
                }, f = function(e) {
                    return e
                }, g = function(e) {
                    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
                }, h = function(e) {
                    return "function" == typeof e
                }, y = function(e) {
                    return e === o
                }, v = function(e, t) {
                    var n = this
                      , r = !1;
                    this.name = t,
                    this.getIndexedDB = function() {
                        return e
                    }
                    ,
                    this.add = function(t) {
                        if (r)
                            throw "Database has been closed";
                        for (var s = [], i = 0, o = 0; o < arguments.length - 1; o++)
                            if (Array.isArray(arguments[o + 1]))
                                for (var a = 0; a < arguments[o + 1].length; a++)
                                    s[i] = arguments[o + 1][a],
                                    i++;
                            else
                                s[i] = arguments[o + 1],
                                i++;
                        var c = e.transaction(t, l)
                          , u = c.objectStore(t);
                        return new Promise(function(e, t) {
                            s.forEach(function(e) {
                                var t;
                                if (e.item && e.key) {
                                    var n = e.key;
                                    e = e.item,
                                    t = u.add(e, n)
                                } else
                                    t = u.add(e);
                                t.onsuccess = function(t) {
                                    var n = t.target
                                      , r = n.source.keyPath;
                                    null === r && (r = "__id__"),
                                    Object.defineProperty(e, r, {
                                        value: n.result,
                                        enumerable: !0
                                    })
                                }
                            }),
                            c.oncomplete = function() {
                                e(s, n)
                            }
                            ,
                            c.onerror = function(e) {
                                e.preventDefault(),
                                t(e)
                            }
                            ,
                            c.onabort = function(e) {
                                t(e)
                            }
                        }
                        )
                    }
                    ,
                    this.updateAndDelete = function(t, n, s) {
                        if (r)
                            throw "Database has been closed";
                        var i = e.transaction(t, l)
                          , o = i.objectStore(t)
                          , a = o.keyPath;
                        return new Promise(function(e, t) {
                            n.forEach(function(e) {
                                if (e.item && e.key) {
                                    var t = e.key;
                                    e = e.item,
                                    o.put(e, t)
                                } else
                                    o.put(e)
                            }),
                            s.forEach(function(e) {
                                o.delete(e[a])
                            }),
                            i.oncomplete = function() {
                                e([n, s])
                            }
                            ,
                            i.onerror = function(e) {
                                t(e)
                            }
                        }
                        )
                    }
                    ,
                    this.update = function(t) {
                        if (r)
                            throw "Database has been closed";
                        for (var s, i = [], o = 1; o < arguments.length; o++)
                            s = arguments[o],
                            Array.isArray(s) ? i = i.concat(s) : i.push(s);
                        var a = e.transaction(t, l)
                          , c = a.objectStore(t);
                        c.keyPath;
                        return new Promise(function(e, t) {
                            i.forEach(function(e) {
                                var t;
                                if (e.item && e.key) {
                                    var n = e.key;
                                    e = e.item,
                                    t = c.put(e, n)
                                } else
                                    t = c.put(e);
                                t.onsuccess = function(e) {}
                                ,
                                t.onerror = function(e) {}
                            }),
                            a.oncomplete = function() {
                                e(i, n)
                            }
                            ,
                            a.onerror = function(e) {
                                t(e)
                            }
                            ,
                            a.onabort = function(e) {
                                t(e)
                            }
                        }
                        )
                    }
                    ,
                    this.remove = function(t, n, s, i, a, c, m) {
                        if (r)
                            throw "Database has been closed";
                        var d = e.transaction(t, l)
                          , p = d.objectStore(t);
                        return new Promise(function(e, t) {
                            function r(e) {
                                return e === o || null === e
                            }
                            if (r(i) && (i = -1 / 0),
                            r(a) && (a = 1 / 0),
                            null === n || Array.isArray(n) || (n = [n]),
                            r(s))
                                null !== n ? n.forEach(function(e) {
                                    p.delete(e)
                                }) : p.delete(range = u.bound(i, a, c, m));
                            else {
                                var l = void 0;
                                l = null !== n ? u.only(n[0]) : u.bound(i, a, c, m),
                                p.index(s).openCursor(l).onsuccess = function(e) {
                                    var t = e.target.result;
                                    t && (t.delete(),
                                    t.continue())
                                }
                            }
                            d.oncomplete = function() {
                                e()
                            }
                            ,
                            d.onerror = function(e) {
                                t(e)
                            }
                            ,
                            d.onabort = function(e) {
                                t(e)
                            }
                        }
                        )
                    }
                    ,
                    this.clear = function(t) {
                        if (r)
                            throw "Database has been closed";
                        var n = e.transaction(t, l);
                        n.objectStore(t).clear();
                        return new Promise(function(e, t) {
                            n.oncomplete = function() {
                                e()
                            }
                            ,
                            n.onerror = function(e) {
                                t(e)
                            }
                        }
                        )
                    }
                    ,
                    this.close = function() {
                        r || (e.close(),
                        r = !0,
                        delete M[t])
                    }
                    ,
                    this.get = function(t, n) {
                        if (r)
                            throw "Database has been closed";
                        var s = e.transaction(t)
                          , i = s.objectStore(t).get(n);
                        return new Promise(function(e, t) {
                            i.onsuccess = function(t) {
                                e(t.target.result)
                            }
                            ,
                            s.onerror = function(e) {
                                t(e)
                            }
                        }
                        )
                    }
                    ,
                    this.query = function(t, n) {
                        if (r)
                            throw "Database has been closed";
                        return new b(t,e,n)
                    }
                    ,
                    this.count = function(t, n) {
                        if (r)
                            throw "Database has been closed";
                        e.transaction(t).objectStore(t)
                    }
                    ;
                    for (var s = 0, i = e.objectStoreNames.length; s < i; s++)
                        !function(e) {
                            for (var t in n[e] = {},
                            n)
                                d.call(n, t) && "close" !== t && (n[e][t] = function(t) {
                                    return function() {
                                        var r = [e].concat([].slice.call(arguments, 0));
                                        return n[t].apply(n, r)
                                    }
                                }(t))
                        }(e.objectStoreNames[s])
                }, b = function(e, t, n) {
                    var r = this
                      , s = !1
                      , i = !1
                      , c = function(r, c, d, p, f, g, y) {
                        return new Promise(function(v, b) {
                            var T = s || i ? l : m
                              , M = t.transaction(e, T)
                              , S = M.objectStore(e)
                              , k = n ? S.index(n) : S
                              , C = r ? u[r].apply(null, c) : null
                              , I = []
                              , P = [C]
                              , O = 0;
                            f = f || null,
                            g = g || [],
                            "count" !== d && P.push(p || "next");
                            var x = !!s && Object.keys(s);
                            k[d].apply(k, P).onsuccess = function(e) {
                                var t = e.target.result;
                                if ((void 0 === t ? "undefined" : (0,
                                a.default)(t)) === (0,
                                a.default)(0))
                                    I = t;
                                else if (t)
                                    if (null !== f && f[0] > O)
                                        O = f[0],
                                        t.advance(f[0]);
                                    else if (null !== f && O >= f[0] + f[1])
                                        ;
                                    else {
                                        var n = !0
                                          , r = "value"in t ? t.value : t.key;
                                        g.forEach(function(e) {
                                            e && e.length && (2 === e.length ? n = n && r[e[0]] === e[1] : h(e[0]) && (n = n && e[0].apply(o, [r])))
                                        }),
                                        n && (O++,
                                        I.push(y(r)),
                                        i ? t.delete() : s && (r = function(e) {
                                            for (var t = 0; t < x.length; t++) {
                                                var n = x[t]
                                                  , r = s[n];
                                                r instanceof Function && (r = r(e)),
                                                e[n] = r
                                            }
                                            return e
                                        }(r),
                                        t.update(r))),
                                        t.continue()
                                    }
                            }
                            ,
                            M.oncomplete = function() {
                                v(I)
                            }
                            ,
                            M.onerror = function(e) {
                                b(e)
                            }
                            ,
                            M.onabort = function(e) {
                                b(e)
                            }
                        }
                        )
                    }
                      , d = function(e, t) {
                        var n = "next"
                          , r = "openCursor"
                          , o = []
                          , a = null
                          , u = f
                          , m = !1
                          , l = function() {
                            return c(e, t, r, m ? n + "unique" : n, a, o, u)
                        }
                          , d = function() {
                            return n = null,
                            r = "count",
                            {
                                execute: l
                            }
                        }
                          , p = function e() {
                            var t;
                            return t = arguments[0],
                            1 == (a = "array" === g(t) ? arguments[0] : Array.prototype.slice.call(arguments, 0, 2)).length && a.unshift(0),
                            function(e) {
                                return "number" === g(e)
                            }(a[1]) || (a = null),
                            {
                                execute: l,
                                count: d,
                                keys: v,
                                filter: b,
                                asc: T,
                                desc: M,
                                distinct: S,
                                modify: k,
                                limit: e,
                                map: C,
                                remove: I
                            }
                        }
                          , v = function e(t) {
                            return (t = !!y(t) || !!t) && (r = "openKeyCursor"),
                            {
                                execute: l,
                                keys: e,
                                filter: b,
                                asc: T,
                                desc: M,
                                distinct: S,
                                modify: k,
                                limit: p,
                                map: C,
                                remove: I
                            }
                        }
                          , b = function e() {
                            return o.push(Array.prototype.slice.call(arguments, 0, 2)),
                            {
                                execute: l,
                                count: d,
                                keys: v,
                                filter: e,
                                asc: T,
                                desc: M,
                                distinct: S,
                                modify: k,
                                limit: p,
                                map: C,
                                remove: I
                            }
                        }
                          , T = function e(t) {
                            return t = !!y(t) || !!t,
                            n = t ? "next" : "prev",
                            {
                                execute: l,
                                count: d,
                                keys: v,
                                filter: b,
                                asc: e,
                                desc: M,
                                distinct: S,
                                modify: k,
                                limit: p,
                                map: C,
                                remove: I
                            }
                        }
                          , M = function e(t) {
                            return t = !!y(t) || !!t,
                            n = t ? "prev" : "next",
                            {
                                execute: l,
                                count: d,
                                keys: v,
                                filter: b,
                                asc: T,
                                desc: e,
                                distinct: S,
                                modify: k,
                                limit: p,
                                map: C,
                                remove: I
                            }
                        }
                          , S = function e(t) {
                            return t = !!y(t) || !!t,
                            m = t,
                            {
                                execute: l,
                                count: d,
                                keys: v,
                                filter: b,
                                asc: T,
                                desc: M,
                                distinct: e,
                                modify: k,
                                limit: p,
                                map: C,
                                remove: I
                            }
                        }
                          , k = function e(t) {
                            return s = t,
                            {
                                execute: l,
                                count: d,
                                keys: v,
                                filter: b,
                                asc: T,
                                desc: M,
                                distinct: S,
                                modify: e,
                                limit: p,
                                map: C,
                                remove: I
                            }
                        }
                          , C = function e(t) {
                            return h(t) && (u = t),
                            {
                                execute: l,
                                count: d,
                                keys: v,
                                filter: b,
                                asc: T,
                                desc: M,
                                distinct: S,
                                modify: k,
                                limit: p,
                                map: e,
                                remove: I
                            }
                        }
                          , I = function e(t) {
                            return t = !!y(t) || !!t,
                            i = t,
                            {
                                execute: l,
                                count: d,
                                keys: v,
                                filter: b,
                                asc: T,
                                desc: M,
                                distinct: S,
                                modify: k,
                                limit: p,
                                map: C,
                                remove: e
                            }
                        };
                        return {
                            execute: l,
                            count: d,
                            keys: v,
                            filter: b,
                            asc: T,
                            desc: M,
                            distinct: S,
                            modify: k,
                            limit: p,
                            map: C,
                            remove: I
                        }
                    };
                    "only bound upperBound lowerBound".split(" ").forEach(function(e) {
                        r[e] = function() {
                            return new d(e,arguments)
                        }
                    }),
                    this.filter = function() {
                        var e = new d(null,null);
                        return e.filter.apply(e, arguments)
                    }
                    ,
                    this.all = function() {
                        return this.filter()
                    }
                }, T = function(e, t, n, r) {
                    var s = e.target.result
                      , i = new v(s,t);
                    return M[t] = s,
                    Promise.resolve(i)
                }, M = {}, S = {
                    version: "0.10.2",
                    open: function(e) {
                        var t;
                        return new Promise(function(n, r) {
                            if (M[e.server])
                                T({
                                    target: {
                                        result: M[e.server]
                                    }
                                }, e.server, e.version, e.schema).then(n, r);
                            else {
                                try {
                                    t = p().open(e.server, e.version)
                                } catch (e) {
                                    r(e)
                                }
                                t.onsuccess = function(t) {
                                    T(t, e.server, e.version, e.schema).then(n, r)
                                }
                                ,
                                t.onupgradeneeded = function(t) {
                                    !function(e, t, n) {
                                        for (var r in "function" == typeof t && (t = t()),
                                        t) {
                                            var s, i = t[r];
                                            for (var o in s = !d.call(t, r) || n.objectStoreNames.contains(r) ? e.currentTarget.transaction.objectStore(r) : n.createObjectStore(r, i.key),
                                            i.indexes) {
                                                var a = i.indexes[o];
                                                try {
                                                    s.index(o)
                                                } catch (e) {
                                                    s.createIndex(o, a.key || o, Object.keys(a).length ? a : {
                                                        unique: !1
                                                    })
                                                }
                                            }
                                        }
                                    }(t, e.schema, t.target.result)
                                }
                                ,
                                t.onerror = function(e) {
                                    r(e)
                                }
                            }
                        }
                        )
                    },
                    remove: function(e) {
                        return new Promise(function(t, n) {
                            if (!e)
                                return t();
                            var r, s;
                            (void 0 === e ? "undefined" : (0,
                            a.default)(e)) === v && (e = e.name),
                            "string" == typeof e && (r = M[e]),
                            r && "function" == typeof r.close && r.close();
                            try {
                                s = p().deleteDatabase(e)
                            } catch (e) {
                                n(e)
                            }
                            s.onsuccess = function(n) {
                                delete M[e],
                                t(e)
                            }
                            ,
                            s.onerror = function(e) {
                                n(e)
                            }
                            ,
                            s.onblocked = function(e) {
                                n(e)
                            }
                        }
                        )
                    }
                };
                void 0 !== e && void 0 !== e.exports ? e.exports = S : (s = function() {
                    return S
                }
                .call(t, n, t, e)) === o || (e.exports = s)
            }(window)
        }
        ).call(this, n(33))
    }
    , function(e, t, n) {
        "use strict";
        var r = n(21)
          , s = n(70)
          , i = n(464)
          , o = n(463)
          , a = n(0)
          , c = n(190)
          , u = n(26)
          , m = u.newSupportDBError
          , l = u.noDBError
          , d = !1;
        function p(e) {
            d = e,
            c.set("db", e, i)
        }
        if (p(!!a.getGlobal().indexedDB),
        "IE" === r.name && p(!1),
        "Microsoft Edge" === r.name && p(!1),
        "Safari" === r.name) {
            try {
                parseInt(r.version.split(".")[0], 10) < 10 && p(!1)
            } catch (e) {}
            p(!1)
        }
        function f(e) {
            this.concurrency = 0,
            this.pendingTasks = [],
            this.queue = Promise.resolve(),
            this.logger = e.logger
        }
        var g = f.prototype;
        g.reset = a.emptyFunc,
        d && (g.reset = function(e) {
            this.enable = !1 !== e
        }
        ),
        g.addTask = function(e) {
            var t = this;
            return new Promise(function(n, r) {
                function s(e) {
                    t.concurrency--;
                    var n = t.pendingTasks.shift();
                    n && t.addTask(n),
                    e()
                }
                if (t.concurrency < 100)
                    return t.concurrency++,
                    e().then(function(t) {
                        s(function() {
                            n(t),
                            e.resolve && e.resolve(t)
                        })
                    }, function(t) {
                        s(function() {
                            var n = {
                                event: (t = t || {}).event || t,
                                callFunc: t.callFunc || "db::addTask"
                            };
                            r(n),
                            e.reject && e.reject(n)
                        })
                    });
                e.resolve || (e.resolve = n,
                e.reject = r),
                t.pendingTasks.push(e)
            }
            )
        }
        ,
        g.init = function(e) {
            var t = this;
            return t.addTask(function() {
                return t.enable ? t.server ? Promise.resolve() : (t.name = "nim-" + e,
                i.open({
                    server: t.name,
                    version: o.version,
                    schema: o.schema
                }).then(function(e) {
                    t.logger.log("db::init: " + t.name),
                    t.server = e
                }, function(e) {
                    throw p(!1),
                    t.server = null,
                    t.name = null,
                    e
                })) : Promise.reject(m({
                    callFunc: "db::init"
                }))
            })
        }
        ,
        g.destroy = function() {
            var e = this;
            return e.addTask(function() {
                return e.enable ? e.server ? i.remove(e.name).then(function() {
                    e.logger.log("db::destroy: " + e.name),
                    e.server = null,
                    e.name = null
                }) : Promise.resolve() : Promise.reject(m({
                    callFunc: "db::destroy"
                }))
            })
        }
        ,
        g.clear = function() {
            var e = this;
            return e.addTask(function() {
                return e.enable ? e.server ? e.server.clear("timetag").then(function() {
                    var t = [].slice.call(e.server.getIndexedDB().objectStoreNames)
                      , n = [];
                    if (t.forEach(function(t) {
                        n.push(e.server.clear(t))
                    }),
                    n.length)
                        return Promise.all(n).then(function() {
                            e.logger.log("db::clear: " + e.name)
                        }).catch(function(t) {
                            return e.logger.error("db::clear: ", t),
                            Promise.reject(t)
                        })
                }) : Promise.resolve() : Promise.reject(m({
                    callFunc: "db::clear"
                }))
            })
        }
        ,
        g.close = function() {
            this.server && (this.server.close(),
            this.server = null,
            this.name = null)
        }
        ,
        g.remove = function(e, t, n, r, s, i, o) {
            var a = this;
            return a.addTask(function() {
                return a.checkDB(),
                a.server.remove(e, t, n, r, s, i, o).then(function() {
                    a.logger.log("db::delete: " + e + " " + (t || n))
                }).catch(function(e) {
                    a.logger.error("db::remove::server.remove error", e)
                })
            })
        }
        ,
        g.put = function(e, t) {
            var n = this;
            return n.addTask(function() {
                return n.checkDB(),
                a.isArray(t) || (t = [t]),
                n.server.update(e, t).then(function(t) {
                    var r = ["put", e]
                      , i = o.keyPath(e)
                      , a = [];
                    return i && (t.forEach(function(e) {
                        a.push(s(e, i))
                    }),
                    r.push(1 === a.length ? a[0] : a)),
                    r.push(1 === t.length ? t[0] : t),
                    r.unshift("db::put:"),
                    n.logger.log.apply(n.logger.log, r),
                    t
                })
            })
        }
        ,
        g.get = function(e, t) {
            var n = this;
            return n.addTask(function() {
                return n.checkDB(),
                n.server.get(e, t)
            })
        }
        ,
        g.modifyOrPut = function(e) {
            var t = this
              , n = e.table
              , r = a.copy(e.obj)
              , s = e.key
              , i = e.modifyObjWhenPut
              , o = a.copy(r);
            return delete o[s],
            t.getOne(n, null, r[s], {
                modifyObj: o
            }).then(function(e) {
                return e ? (t.logger.log("db::modifyOrPut: update table " + n, r),
                e) : (r = a.merge(r, i),
                t.put(n, r).then(function(e) {
                    return e[0]
                }))
            })
        }
        ,
        g.updateAndDelete = function(e, t, n) {
            var r = this;
            return r.addTask(function() {
                return r.checkDB(),
                r.server.updateAndDelete(e, t, n)
            })
        }
        ,
        g.getAll = function(e, t) {
            var n = this;
            return n.addTask(function() {
                return n.checkDB(),
                (t = t || {}).keys = !0 === t.keys,
                t.desc = !0 === t.desc,
                t.distinct = !0 === t.distinct,
                n.server.query(e, t.index).filter(t.filter).keys(t.keys).desc(t.desc).limit(t.limit).distinct(t.distinct).map(t.mapper).modify(t.modifyObj).execute()
            })
        }
        ,
        g.getOnly = function(e, t, n, r) {
            var s = this;
            return s.addTask(function() {
                return s.checkDB(),
                (r = r || {}).keys = !0 === r.keys,
                r.desc = !0 === r.desc,
                r.distinct = !0 === r.distinct,
                r.remove = !0 === r.remove,
                s.server.query(e, t).only(n).filter(r.filter).keys(r.keys).desc(r.desc).limit(r.limit).distinct(r.distinct).map(r.mapper).modify(r.modifyObj).remove(r.remove).execute()
            })
        }
        ,
        g.getOne = function() {
            return this.getOnly.apply(this, arguments).then(function(e) {
                return e[0]
            })
        }
        ,
        g.clearTable = function(e) {
            var t = this;
            return t.addTask(function() {
                return t.checkDB(),
                t.server.clear(e)
            })
        }
        ,
        g.checkDB = function() {
            if (!this.enable)
                throw m({
                    callFunc: "db::checkDB"
                });
            if (!this.server)
                throw l({
                    callFunc: "db::checkDB"
                })
        }
        ,
        e.exports = f
    }
    , function(e, t, n) {
        "use strict";
        n(154);
        var r = n(29);
        n(185)(r),
        e.exports = r
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n(154);
        var r = {
            NIM: n(466),
            Chatroom: n(402)
        };
        n(185)(r),
        e.exports = r
    }
    ])
});
