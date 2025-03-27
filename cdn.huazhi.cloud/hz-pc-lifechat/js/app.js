(function(e) {
    function t(t) {
        for (var s, o, r = t[0], c = t[1], l = t[2], m = 0, d = []; m < r.length; m++)
            o = r[m],
            Object.prototype.hasOwnProperty.call(i, o) && i[o] && d.push(i[o][0]),
            i[o] = 0;
        for (s in c)
            Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s]);
        u && u(t);
        while (d.length)
            d.shift()();
        return a.push.apply(a, l || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], s = !0, r = 1; r < n.length; r++) {
                var c = n[r];
                0 !== i[c] && (s = !1)
            }
            s && (a.splice(t--, 1),
            e = o(o.s = n[0]))
        }
        return e
    }
    var s = {}
      , i = {
        app: 0
    }
      , a = [];
    function o(t) {
        if (s[t])
            return s[t].exports;
        var n = s[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, o),
        n.l = !0,
        n.exports
    }
    o.m = e,
    o.c = s,
    o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(e, t) {
        if (1 & t && (e = o(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (o.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var s in e)
                o.d(n, s, function(t) {
                    return e[t]
                }
                .bind(null, s));
        return n
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
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
    o.p = "https://oss.huazhi.cloud/hz_pc_livechat/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || []
      , c = r.push.bind(r);
    r.push = t,
    r = r.slice();
    for (var l = 0; l < r.length; l++)
        t(r[l]);
    var u = c;
    a.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "00a8": function(e, t, n) {
        "use strict";
        n("06e9")
    },
    "06e9": function(e, t, n) {},
    "0794": function(e, t, n) {},
    "08cf": function(e, t, n) {
        "use strict";
        n("5788")
    },
    "0d0b": function(e, t, n) {},
    "0f9e": function(e, t, n) {
        "use strict";
        n("35da")
    },
    "116d": function(e, t, n) {},
    "12c3": function(e, t, n) {
        "use strict";
        n("23c4")
    },
    "212a": function(e, t, n) {
        "use strict";
        n("7714")
    },
    "23c4": function(e, t, n) {},
    "35da": function(e, t, n) {},
    "52e1": function(e, t, n) {
        "use strict";
        n("f670")
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("4ffc"),
        n("450d");
        var s = n("946e")
          , i = n.n(s)
          , a = (n("6b30"),
        n("c284"))
          , o = n.n(a)
          , r = (n("d4df"),
        n("7fc1"))
          , c = n.n(r)
          , l = (n("fe07"),
        n("6ac5"))
          , u = n.n(l)
          , m = (n("b5d8"),
        n("f494"))
          , d = n.n(m)
          , f = (n("826b"),
        n("c263"))
          , h = n.n(f)
          , g = (n("016f"),
        n("486c"))
          , p = n.n(g)
          , v = (n("6611"),
        n("e772"))
          , y = n.n(v)
          , C = (n("1f1a"),
        n("4e4b"))
          , b = n.n(C)
          , w = (n("560b"),
        n("dcdc"))
          , _ = n.n(w)
          , S = (n("10cb"),
        n("f3ad"))
          , k = n.n(S)
          , L = (n("d624"),
        n("3e9c"))
          , T = n.n(L)
          , x = (n("744f"),
        n("6095"),
        n("6c7b"),
        n("d25f"),
        n("7514"),
        n("20d6"),
        n("f3e2"),
        n("1c4c"),
        n("6762"),
        n("57e7"),
        n("2caf"),
        n("cadf"),
        n("9865"),
        n("6d67"),
        n("e804"),
        n("0cd8"),
        n("48f8"),
        n("759f"),
        n("55dd"),
        n("d04f"),
        n("78ce"),
        n("8ea5"),
        n("0298"),
        n("c8ce"),
        n("87b3"),
        n("d92a"),
        n("217b"),
        n("7f7f"),
        n("f400"),
        n("7f25"),
        n("536b"),
        n("d9ab"),
        n("f9ab"),
        n("32d7"),
        n("25c9"),
        n("9f3c"),
        n("042e"),
        n("c7c6"),
        n("f4ff"),
        n("049f"),
        n("7872"),
        n("a69f"),
        n("0b21"),
        n("6c1a"),
        n("c7c62"),
        n("84b4"),
        n("c5f6"),
        n("2e37"),
        n("fca0"),
        n("7cdf"),
        n("ee1d"),
        n("b1b1"),
        n("87f3"),
        n("9278"),
        n("5df2"),
        n("04ff"),
        n("f751"),
        n("8478"),
        n("4504"),
        n("fee7"),
        n("1c01"),
        n("58b2"),
        n("ffc1"),
        n("0d6d"),
        n("9986"),
        n("8e6e"),
        n("25db"),
        n("e4f7"),
        n("b9a1"),
        n("64d5"),
        n("9aea"),
        n("db97"),
        n("66c8"),
        n("57f0"),
        n("165b"),
        n("456d"),
        n("cf6a"),
        n("fd24"),
        n("8615"),
        n("551c"),
        n("097d"),
        n("df1b"),
        n("2397"),
        n("88ca"),
        n("ba16"),
        n("d185"),
        n("ebde"),
        n("2d34"),
        n("f6b3"),
        n("2251"),
        n("c698"),
        n("a19f"),
        n("9253"),
        n("9275"),
        n("3b2b"),
        n("3846"),
        n("4917"),
        n("a481"),
        n("28a5"),
        n("386d"),
        n("6b54"),
        n("4f7f"),
        n("8a81"),
        n("ac4d"),
        n("8449"),
        n("9c86"),
        n("fa83"),
        n("48c0"),
        n("a032"),
        n("aef6"),
        n("d263"),
        n("6c37"),
        n("9ec8"),
        n("5695"),
        n("2fdb"),
        n("d0b0"),
        n("5df3"),
        n("b54a"),
        n("f576"),
        n("ed50"),
        n("788d"),
        n("14b9"),
        n("f386"),
        n("f559"),
        n("1448"),
        n("673e"),
        n("242a"),
        n("4f37"),
        n("c66f"),
        n("262f"),
        n("b05c"),
        n("34ef"),
        n("6aa2"),
        n("15ac"),
        n("af56"),
        n("b6e4"),
        n("9c29"),
        n("63d9"),
        n("4dda"),
        n("10ad"),
        n("c02b"),
        n("4795"),
        n("130f"),
        n("ac6a"),
        n("96cf"),
        n("2b0e"))
          , I = function() {
            var e = this
              , t = e._self._c;
            return e.showChatApp ? t("div", {
                ref: "my_chat_app",
                staticClass: "huazhi_chat_app",
                style: e.appStyle,
                attrs: {
                    id: "hz_chat_app"
                }
            }, [e.preview ? t("image-viewer", {
                attrs: {
                    "z-index": "10000",
                    "on-close": e.closeViewer,
                    "url-list": e.previewSrcList
                }
            }) : e._e(), e.loadingapp ? t("div", {
                staticClass: "client-chat"
            }, [t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showImgPreview,
                    expression: "showImgPreview"
                }],
                staticClass: "header-img-preview"
            }, [t("div", [e.chatInfo ? t("img", {
                attrs: {
                    src: e.chatInfo.customerServerDto && e.chatInfo.customerServerDto.avatar || e.headimg,
                    alt: ""
                }
            }) : e._e(), t("p", [t("i", {
                staticClass: "el-icon-close",
                on: {
                    click: function(t) {
                        e.showImgPreview = !1
                    }
                }
            })])])]), t("div", {
                staticClass: "hz-wechat-main",
                class: e.showChatModel ? "" : "hidewechat",
                attrs: {
                    id: "hz-wechat-main"
                }
            }, [t("chat-header", {
                attrs: {
                    lang: e.lang,
                    onlineStatus: e.onlineStatus,
                    currentConfig: e.currentConfig,
                    chatInfo: e.chatInfo
                },
                on: {
                    click: function(t) {
                        e.showImgPreview = !0
                    }
                }
            }), e.showChatModel ? t("div", {
                ref: "chatList",
                staticClass: "chat-list-box iscroll",
                attrs: {
                    id: "hzchat-list-box"
                },
                on: {
                    scroll: function(t) {
                        return e.loadMore(t)
                    }
                }
            }, [t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showProgerss,
                    expression: "showProgerss"
                }],
                staticClass: "hz-progress"
            }, [t("el-progress", {
                attrs: {
                    "text-inside": !0,
                    "stroke-width": 17,
                    percentage: e.percentage,
                    status: "success"
                }
            })], 1), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.networkWarning,
                    expression: "networkWarning"
                }],
                staticClass: "show-network-warn"
            }, [e._v("\n                    " + e._s(e.networkWarning) + "\n                ")]), [t("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.hasHistoryMsg,
                    expression: "hasHistoryMsg"
                }],
                staticClass: "loading",
                attrs: {
                    loadHistory: e.loadHistory
                }
            }, [t("i", {
                staticClass: "el-icon-loading"
            })]), t("chat-item", {
                attrs: {
                    avatorSrc: e.chatInfo.customerServerDto && e.chatInfo.customerServerDto.avatar || e.headimg,
                    msgList: e.msgList
                },
                on: {
                    showImageView: e.showImageView
                }
            })]], 2) : e._e(), t("div", {
                staticClass: "edit-content"
            }, [0 == e.onlineStatus || 1 == e.onlineStatus && e.preFormTag && !e.hasSubOnlineFormFlag || e.currIsBlack ? t("div", {
                staticClass: "chat_model"
            }) : e._e(), e.currentConfig ? t("chat-area", {
                attrs: {
                    disabled: 0 == e.onlineStatus || 1 == e.onlineStatus && e.preFormTag && !e.hasSubOnlineFormFlag || e.currIsBlack,
                    currentConfig: e.currentConfig
                }
            }) : e._e()], 1), e._m(0)], 1), !e.showChatModel && e.noSeeMsgList.length > 0 && e.showNoMsgModel ? t("div", {
                staticClass: "no-collapse-content"
            }, [t("div", {
                staticClass: "no-collapse-list"
            }, [t("chat-simple-list", {
                attrs: {
                    avatorSrc: e.chatInfo.customerServerDto && e.chatInfo.customerServerDto.avatar || e.headimg,
                    noSeeMsgList: e.noSeeMsgList
                },
                on: {
                    seemore: e.seemore,
                    closeReverseList: e.closeModel
                }
            })], 1), t("div", {
                staticClass: "no-collapse-edit"
            }, [0 == e.onlineStatus || 1 == e.onlineStatus && e.preFormTag && !e.hasSubOnlineFormFlag || e.currIsBlack ? t("div", {
                staticClass: "chat_model"
            }) : e._e(), t("chat-area", {
                attrs: {
                    currentConfig: e.currentConfig,
                    disabled: 0 == e.onlineStatus || 1 == e.onlineStatus && e.preFormTag && !e.hasSubOnlineFormFlag || e.currIsBlack
                },
                on: {
                    sendMsgReceipt: function(t) {
                        return e.sendMsgReceipt()
                    }
                }
            })], 1)]) : e._e(), t("chat-btn", {
                attrs: {
                    appStyle: e.btnStyle,
                    currentConfig: e.currentConfig
                }
            })], 1) : e._e()], 1) : e._e()
        }
          , M = [function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "software_support"
            }, [t("img", {
                attrs: {
                    src: "https://cdn.huazhi.cloud/hz_image/brand_img.png",
                    alt: ""
                }
            })])
        }
        ]
          , O = n("7618")
          , F = function() {
            var e = this
              , t = e._self._c;
            return t("ul", {
                staticClass: "chat-content"
            }, [e._l(e.messageList, (function(n, s) {
                return e.messageList.length > 0 ? [1 == e.messageList.length ? [t("li", {
                    staticClass: "other timeTag clearfix"
                }, [e._v(e._s(e.formatDate(e.messageList[s].time)))])] : [0 == s && e.messageList.length > 1 ? t("li", {
                    staticClass: "other timeTag clearfix"
                }, [e._v("\n                " + e._s(e.formatDate(e.messageList[s + 1].time)) + "\n            ")]) : e._e()], t("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, ["offline_form" == n.flow ? [t("chat-form", {
                    attrs: {
                        avatorSrc: e.avatorSrc,
                        item: n
                    }
                })] : e._e()], 2), t("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, ["online_form" != n.flow || e.hasSubOnlineForm ? e._e() : [t("online-chat-form", {
                    attrs: {
                        avatorSrc: e.avatorSrc,
                        item: n
                    }
                })]], 2), "in" == n.flow ? t("li", {
                    staticClass: "other chat-items clearfix"
                }, [[e.messageList[s + 1] && n.flow != e.messageList[s + 1].flow || s == e.messageList.length - 1 && "in" == e.messageList[e.messageList.length - 1].flow ? t("img", {
                    staticClass: "other-img avator",
                    attrs: {
                        src: e.avatorSrc,
                        alt: ""
                    }
                }) : t("div", {
                    staticClass: "other-img avator"
                })], "text" == n.type ? t("span", {
                    staticClass: "other-text other-hover"
                }, [e._v("\n                " + e._s(e.toBottom(n)) + "\n                    "), t("span", {
                    attrs: {
                        time: n.time
                    },
                    domProps: {
                        innerHTML: e._s(n.text.replace(/(\r\n|\n|\r)/g, "<br />"))
                    }
                }), t("span", {
                    staticClass: "msg-time"
                }, [e._v(e._s(e.formatTime(n.time)))])]) : e._e(), "customtext" == n.type ? t("span", {
                    staticClass: "other-text other-hover"
                }, [e._v("\n                " + e._s(e.toBottom(n)) + "\n                    "), e.multyLang && e.multyLang[n.text] ? [t("span", {
                    attrs: {
                        time: n.time
                    },
                    domProps: {
                        innerHTML: e._s(e.multyLang[n.text][e.currentTranslateCode].replace(/(\r\n|\n|\r)/g, "<br />"))
                    }
                })] : [t("span", {
                    attrs: {
                        time: n.time
                    },
                    domProps: {
                        innerHTML: e._s(n.text.replace(/(\r\n|\n|\r)/g, "<br />"))
                    }
                })], t("span", {
                    staticClass: "msg-time"
                }, [e._v(e._s(e.formatTime(n.time)))])], 2) : e._e(), "custom" == n.type && "custom" == n.content.type ? t("p", {
                    staticClass: "other-hover zanicon-left"
                }, [e._v("\n                " + e._s(e.toBottom(n)) + "\n                "), t("span", {
                    staticClass: "hz-icon-zan icon iconfont icon-zan other-hover"
                }), t("span", {
                    staticClass: "msg-time"
                }, [e._v(e._s(e.formatTime(n.time)))])]) : e._e(), "image" == n.type ? t("div", {
                    staticClass: "other-uploadimg"
                }, [t("img", {
                    attrs: {
                        src: n.file.url,
                        alt: ""
                    },
                    on: {
                        load: function(t) {
                            return e.toBottom(n)
                        },
                        click: function(t) {
                            return e.showImgView(n.file.url)
                        }
                    }
                }), t("span", {
                    staticClass: "msg-time"
                }, [e._v(e._s(e.formatTime(n.time)))])]) : e._e(), "custom" == n.type && "image" == n.content.type ? t("div", {
                    staticClass: "other-uploadimg"
                }, [t("img", {
                    attrs: {
                        src: n.content.fileUrl,
                        alt: ""
                    },
                    on: {
                        load: function(t) {
                            return e.toBottom(n)
                        },
                        click: function(t) {
                            return e.showImgView(n.content.fileUrl)
                        }
                    }
                }), t("span", {
                    staticClass: "msg-time"
                }, [e._v(e._s(e.formatTime(n.time)))])]) : e._e(), "file" == n.type ? t("span", {
                    staticClass: "other-uploadimg other-hover"
                }, [e._v("\n               " + e._s(e.toBottom(n)) + "\n                 "), t("chat-fiel-msg", {
                    attrs: {
                        fileData: n.file
                    }
                }, [t("span", {
                    staticClass: "msg-time"
                }, [e._v(e._s(e.formatTime(n.time)))])])], 1) : e._e(), "custom" == n.type && "file" == n.content.type ? t("span", {
                    staticClass: "other-uploadimg other-hover"
                }, [e._v("\n                    " + e._s(e.toBottom(n)) + "\n                 "), t("chat-fiel-msg", {
                    attrs: {
                        fileData: n.content
                    }
                }, [t("span", {
                    staticClass: "msg-time"
                }, [e._v(e._s(e.formatTime(n.time)))])])], 1) : e._e()], 2) : e._e(), "out" != n.flow || "custom" == n.type && "form" == n.content.type ? e._e() : t("li", {
                    staticClass: "mine chat-items clearfix"
                }, [t("div", {
                    staticStyle: {
                        display: "flex",
                        "align-items": "center",
                        "justify-content": "flex-end"
                    }
                }, [t("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "sending" == n.msg_status,
                        expression: "item.msg_status=='sending'"
                    }],
                    staticClass: "el-icon-loading",
                    staticStyle: {
                        float: "right"
                    }
                }), t("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "fail" == n.msg_status,
                        expression: "item.msg_status=='fail'"
                    }],
                    staticClass: "el-icon-warning-outline",
                    on: {
                        click: function(t) {
                            return e.resend(n)
                        }
                    }
                }), "text" == n.type ? t("div", {
                    staticClass: "mine-text",
                    class: "sending" == n.msg_status ? "sending" : "fail" == n.msg_status ? "send-fail" : "send-success"
                }, [t("span", {
                    attrs: {
                        time: n.time
                    },
                    domProps: {
                        innerHTML: e._s(n.text.replace(/(\r\n|\n|\r)/g, "<br />"))
                    }
                }), e._v("\n                     " + e._s(e.toBottom(n)) + "\n                     "), t("span", {
                    staticClass: "msg-time"
                }, [e._v(e._s(e.formatTime(n.time)))])]) : e._e(), "custom" == n.type && "custom" == n.content.type ? t("p", {
                    staticClass: "zanicon-right"
                }, [t("span", {
                    staticClass: "hz-icon-zan"
                }), e._v("\n                    " + e._s(e.toBottom(n)) + "\n                    "), t("span", {
                    staticClass: "msg-time"
                }, [e._v(e._s(e.formatTime(n.time)))])]) : e._e(), "custom" == n.type && "onlineform" == n.content.type ? t("span", {
                    staticClass: "mine-text mine-text-from"
                }, [e._v("\n                    " + e._s(e.toBottom(n)) + "\n                    "), t("form-msg", {
                    attrs: {
                        formMsg: n.content
                    }
                }), t("span", {
                    staticClass: "msg-time"
                }, [e._v(e._s(e.formatTime(n.time)))])], 1) : e._e(), "image" == n.type ? t("div", {
                    staticClass: "mine-uploadimg"
                }, [t("img", {
                    attrs: {
                        src: n.file.url,
                        alt: ""
                    },
                    on: {
                        load: function(t) {
                            return e.toBottom(n)
                        },
                        click: function(t) {
                            return e.showImgView(n.file.url)
                        }
                    }
                }), t("span", {
                    staticClass: "msg-time"
                }, [e._v(e._s(e.formatTime(n.time)))])]) : e._e(), "file" == n.type ? t("div", {
                    staticClass: "mine-uploadimg"
                }, [e._v("\n                    " + e._s(e.toBottom(n)) + "\n                  "), t("chat-fiel-msg", {
                    attrs: {
                        fileData: n.file
                    }
                }, [t("span", {
                    staticClass: "msg-time"
                }, [e._v(e._s(e.formatTime(n.time)))])])], 1) : e._e()]), t("p", {
                    staticClass: "seenStatus clearfix"
                }, ["fail" == n.msg_status ? t("span", {
                    staticClass: "msg-warning"
                }, [e._v("\n                    fail\n                ")]) : "sending" == n.msg_status ? t("span", [e._v("\n                    sending\n                ")]) : t("span", [e._v("\n                    " + e._s(e.serverReadLastTime >= n.time ? "Read" : "Unread") + "\n                ")])])]), n.time ? void 0 : e._e(), e.messageList[s + 1] && e.formatDate(n.time) != e.formatDate(e.messageList[s + 1].time) ? t("li", {
                    staticClass: "other timeTag clearfix"
                }, [e._v("\n            " + e._s(e.formatDate(e.messageList[s + 1].time)) + "\n        ")]) : e._e()] : e._e()
            }
            )), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isInput,
                    expression: "isInput"
                }],
                staticClass: "sc-typing-indicator"
            }, [t("span"), t("span"), t("span")])], 2)
        }
          , N = []
          , D = function() {
            var e = this
              , t = e._self._c;
            return t("transition", {
                attrs: {
                    name: "viewer-fade"
                }
            }, [t("div", {
                staticClass: "el-image-viewer__wrapper",
                style: {
                    "z-index": e.zIndex
                }
            }, [t("div", {
                staticClass: "el-image-viewer__mask"
            }), t("span", {
                staticClass: "el-image-viewer__btn el-image-viewer__close",
                on: {
                    click: e.hide
                }
            }, [t("i", {
                staticClass: "el-icon-circle-close"
            })]), e.isSingle ? e._e() : [t("span", {
                staticClass: "el-image-viewer__btn el-image-viewer__prev",
                class: {
                    "is-disabled": !e.infinite && e.isFirst
                },
                on: {
                    click: e.prev
                }
            }, [t("i", {
                staticClass: "el-icon-arrow-left"
            })]), t("span", {
                staticClass: "el-image-viewer__btn el-image-viewer__next",
                class: {
                    "is-disabled": !e.infinite && e.isLast
                },
                on: {
                    click: e.next
                }
            }, [t("i", {
                staticClass: "el-icon-arrow-right"
            })])], t("div", {
                staticClass: "el-image-viewer__btn el-image-viewer__actions"
            }, [t("div", {
                staticClass: "el-image-viewer__actions__inner"
            }, [t("i", {
                staticClass: "el-icon-zoom-out",
                on: {
                    click: function(t) {
                        return e.handleActions("zoomOut")
                    }
                }
            }), t("i", {
                staticClass: "el-icon-zoom-in",
                on: {
                    click: function(t) {
                        return e.handleActions("zoomIn")
                    }
                }
            }), t("i", {
                staticClass: "el-image-viewer__actions__divider"
            }), t("i", {
                class: e.mode.icon,
                on: {
                    click: e.toggleMode
                }
            }), t("i", {
                staticClass: "el-image-viewer__actions__divider"
            }), t("i", {
                staticClass: "el-icon-refresh-left",
                on: {
                    click: function(t) {
                        return e.handleActions("anticlocelise")
                    }
                }
            }), t("i", {
                staticClass: "el-icon-refresh-right",
                on: {
                    click: function(t) {
                        return e.handleActions("clocelise")
                    }
                }
            })])]), t("div", {
                staticClass: "el-image-viewer__canvas"
            }, e._l(e.urlList, (function(n, s) {
                return s === e.index ? t("img", {
                    key: n,
                    ref: "img",
                    refInFor: !0,
                    staticClass: "el-image-viewer__img",
                    style: e.imgStyle,
                    attrs: {
                        src: e.currentImg
                    },
                    on: {
                        load: e.handleImgLoad,
                        error: e.handleImgError,
                        mousedown: e.handleMouseDown
                    }
                }) : e._e()
            }
            )), 0)], 2)])
        }
          , j = []
          , z = n("bd86")
          , P = x["default"].prototype.$isServer
          , E = (P || Number(document.documentMode),
        function() {
            return !P && document.addEventListener ? function(e, t, n) {
                e && t && n && e.addEventListener(t, n, !1)
            }
            : function(e, t, n) {
                e && t && n && e.attachEvent("on" + t, n)
            }
        }())
          , A = function() {
            return !P && document.removeEventListener ? function(e, t, n) {
                e && t && e.removeEventListener(t, n, !1)
            }
            : function(e, t, n) {
                e && t && e.detachEvent("on" + t, n)
            }
        }();
        var B = function() {
            return !x["default"].prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i)
        };
        function V(e) {
            var t = !1;
            return function() {
                for (var n = this, s = arguments.length, i = new Array(s), a = 0; a < s; a++)
                    i[a] = arguments[a];
                t || (t = !0,
                window.requestAnimationFrame((function(s) {
                    e.apply(n, i),
                    t = !1
                }
                )))
            }
        }
        function R(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, s)
            }
            return n
        }
        function H(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? R(Object(n), !0).forEach((function(t) {
                    Object(z["a"])(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var J = {
            CONTAIN: {
                name: "contain",
                icon: "el-icon-full-screen"
            },
            ORIGINAL: {
                name: "original",
                icon: "el-icon-c-scale-to-original"
            }
        }
          , q = B() ? "DOMMouseScroll" : "mousewheel"
          , U = {
            name: "imageViewer",
            props: {
                urlList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                zIndex: {
                    type: Number,
                    default: 2e3
                },
                onSwitch: {
                    type: Function,
                    default: function() {}
                },
                onClose: {
                    type: Function,
                    default: function() {}
                }
            },
            data: function() {
                return {
                    index: 0,
                    isShow: !1,
                    infinite: !0,
                    loading: !1,
                    mode: J.CONTAIN,
                    transform: {
                        scale: 1,
                        deg: 0,
                        offsetX: 0,
                        offsetY: 0,
                        enableTransition: !1
                    }
                }
            },
            computed: {
                isSingle: function() {
                    return this.urlList.length <= 1
                },
                isFirst: function() {
                    return 0 === this.index
                },
                isLast: function() {
                    return this.index === this.urlList.length - 1
                },
                currentImg: function() {
                    return this.urlList[this.index]
                },
                imgStyle: function() {
                    var e = this.transform
                      , t = e.scale
                      , n = e.deg
                      , s = e.offsetX
                      , i = e.offsetY
                      , a = e.enableTransition
                      , o = {
                        transform: "scale(".concat(t, ") rotate(").concat(n, "deg)"),
                        transition: a ? "transform .3s" : "",
                        "margin-left": "".concat(s, "px"),
                        "margin-top": "".concat(i, "px")
                    };
                    return this.mode === J.CONTAIN && (o.maxWidth = o.maxHeight = "100%"),
                    o
                }
            },
            watch: {
                index: {
                    handler: function(e) {
                        this.reset(),
                        this.onSwitch(e)
                    }
                },
                currentImg: function(e) {
                    var t = this;
                    this.$nextTick((function(e) {
                        var n = t.$refs.img[0];
                        n.complete || (t.loading = !0)
                    }
                    ))
                }
            },
            methods: {
                hide: function() {
                    this.deviceSupportUninstall(),
                    this.onClose()
                },
                deviceSupportInstall: function() {
                    var e = this;
                    this._keyDownHandler = V((function(t) {
                        var n = t.keyCode;
                        switch (n) {
                        case 27:
                            e.hide();
                            break;
                        case 32:
                            e.toggleMode();
                            break;
                        case 37:
                            e.prev();
                            break;
                        case 38:
                            e.handleActions("zoomIn");
                            break;
                        case 39:
                            e.next();
                            break;
                        case 40:
                            e.handleActions("zoomOut");
                            break
                        }
                    }
                    )),
                    this._mouseWheelHandler = V((function(t) {
                        var n = t.wheelDelta ? t.wheelDelta : -t.detail;
                        n > 0 ? e.handleActions("zoomIn", {
                            zoomRate: .015,
                            enableTransition: !1
                        }) : e.handleActions("zoomOut", {
                            zoomRate: .015,
                            enableTransition: !1
                        })
                    }
                    )),
                    E(document, "keydown", this._keyDownHandler),
                    E(document, q, this._mouseWheelHandler)
                },
                deviceSupportUninstall: function() {
                    A(document, "keydown", this._keyDownHandler),
                    A(document, q, this._mouseWheelHandler),
                    this._keyDownHandler = null,
                    this._mouseWheelHandler = null
                },
                handleImgLoad: function(e) {
                    this.loading = !1
                },
                handleImgError: function(e) {
                    this.loading = !1,
                    e.target.alt = "加载失败"
                },
                handleMouseDown: function(e) {
                    var t = this;
                    if (!this.loading && 0 === e.button) {
                        var n = this.transform
                          , s = n.offsetX
                          , i = n.offsetY
                          , a = e.pageX
                          , o = e.pageY;
                        this._dragHandler = V((function(e) {
                            t.transform.offsetX = s + e.pageX - a,
                            t.transform.offsetY = i + e.pageY - o
                        }
                        )),
                        E(document, "mousemove", this._dragHandler),
                        E(document, "mouseup", (function(e) {
                            A(document, "mousemove", t._dragHandler)
                        }
                        )),
                        e.preventDefault()
                    }
                },
                reset: function() {
                    this.transform = {
                        scale: 1,
                        deg: 0,
                        offsetX: 0,
                        offsetY: 0,
                        enableTransition: !1
                    }
                },
                toggleMode: function() {
                    if (!this.loading) {
                        var e = Object.keys(J)
                          , t = Object.values(J)
                          , n = t.indexOf(this.mode)
                          , s = (n + 1) % e.length;
                        this.mode = J[e[s]],
                        this.reset()
                    }
                },
                prev: function() {
                    if (!this.isFirst || this.infinite) {
                        var e = this.urlList.length;
                        this.index = (this.index - 1 + e) % e
                    }
                },
                next: function() {
                    if (!this.isLast || this.infinite) {
                        var e = this.urlList.length;
                        this.index = (this.index + 1) % e
                    }
                },
                handleActions: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.loading) {
                        var n = H({
                            zoomRate: .2,
                            rotateDeg: 90,
                            enableTransition: !0
                        }, t)
                          , s = n.zoomRate
                          , i = n.rotateDeg
                          , a = n.enableTransition
                          , o = this.transform;
                        switch (e) {
                        case "zoomOut":
                            o.scale > .2 && (o.scale = parseFloat((o.scale - s).toFixed(3)));
                            break;
                        case "zoomIn":
                            o.scale = parseFloat((o.scale + s).toFixed(3));
                            break;
                        case "clocelise":
                            o.deg += i;
                            break;
                        case "anticlocelise":
                            o.deg -= i;
                            break
                        }
                        o.enableTransition = a
                    }
                }
            },
            mounted: function() {
                this.deviceSupportInstall()
            }
        }
          , W = U
          , K = n("2877")
          , Y = Object(K["a"])(W, D, j, !1, null, null, null)
          , X = Y.exports
          , Z = X
          , G = n("3b8d")
          , Q = n("d225")
          , ee = n("b0b4")
          , te = ""
          , ne = ""
          , se = "https://cdn.huazhi.cloud"
          , ie = "https://cdn.huazhi.cloud/hz_emoji/"
          , ae = ""
          , oe = 30
          , re = se + "/hz_image/defaultavator_m.png"
          , ce = se + "/hz_common/NIM_Web_SDK_v6.8.0.js";
        switch ("production") {
        case "development":
            te = "https://test.huazhi.cloud/",
            ne = "https://test.huazhi.cloud",
            ae = "b39999aca6b9845ca9d3eae9972b0175";
            break;
        case "production":
            te = "https://api.huazhi.cloud/",
            ne = "https://api.huazhi.cloud",
            ae = "14e49b9bda0c36130fe211a98a30bf55";
            break;
        case "test":
            te = "https://test.huazhi.cloud/",
            ne = "https://test.huazhi.cloud",
            ae = "b39999aca6b9845ca9d3eae9972b0175";
        default:
            te = "http://test.huazhi.cloud/",
            ne = "http://test.huazhi.cloud",
            ae = "b39999aca6b9845ca9d3eae9972b0175";
            break
        }
        var le = te + "im-web"
          , ue = te + "system"
          , me = te + "biz";
        console.info("appkey=============", ae);
        var de = function() {
            function e(t) {
                Object(Q["a"])(this, e),
                this._account = Oe.imAccid,
                this._token = Oe.imToken,
                this.timer = null,
                this.reconnectNum = 0,
                this.init(t)
            }
            return Object(ee["a"])(e, [{
                key: "init",
                value: function(e) {
                    var t = this;
                    window.nim = Oe.Nim = SDK.NIM.getInstance({
                        debug: !1,
                        appKey: ae,
                        account: t._account,
                        token: t._token,
                        transports: ["websocket"],
                        db: !1,
                        syncSessionUnread: !0,
                        onconnect: function(e) {
                            console.info("nim 连接成功"),
                            Oe.socket.recodeImStatus(),
                            Oe.NimStatus = !0,
                            Oe.networkWarning = "",
                            Oe.socket ? Oe.socket.connect() : 0 == Oe.historyMsgList.length && Oe.socket.vHisMsgLists()
                        },
                        onerror: function(e) {
                            console.info("im连接异常", e)
                        },
                        onwillreconnect: function(e) {
                            console.info("网络正在重新连接", e),
                            Oe.NimStatus = !1,
                            Oe.isInput = !1,
                            Oe.networkWarning = "Channel disconnected, Reconnecting..."
                        },
                        ondisconnect: function(e) {
                            switch (console.info("云信彻底连接断开了", e),
                            Oe.NimStatus = !1,
                            Oe.isInput = !1,
                            Oe.socket && Oe.socket.close(),
                            t.reconnectNum < 15 ? (Oe.networkWarning = "Channel disconnected, Reconnecting...",
                            clearTimeout(t.timer),
                            t.timer = setTimeout((function() {
                                console.info("云信尝试重连"),
                                Fe.connectNim(),
                                t.reconnectNum++
                            }
                            ), 8e3)) : Oe.networkWarning = "Channel disconnected,Please Reconnecting",
                            e.code) {
                            case 302:
                                break;
                            default:
                                console.info(e);
                                break
                            }
                        },
                        onsessions: function(e) {},
                        onupdatesession: function(e) {},
                        onmsg: function(e) {
                            Fe.setMsgList(e)
                        },
                        onupdatesysmsg: function() {},
                        onsysmsg: function(e) {
                            Fe.undoMsg(e)
                        },
                        oncustomsysmsg: function(e) {
                            Oe.isInput = JSON.parse(e.content).value
                        },
                        onsyncdone: function() {
                            Oe.NimStatus = !0;
                            for (var t = 0; t < Oe.noSendMsg.length; t++)
                                Fe.resendMsg(Oe.noSendMsg[t]);
                            Oe.noSendMsg = [],
                            "function" == typeof e && e()
                        },
                        onDeleteMsgSelf: function(e) {
                            console.info(e)
                        }
                    }),
                    window.nim.useDb = !1
                }
            }]),
            e
        }()
          , fe = de
          , he = ["[大笑]", "[可爱]", "[色]", "[嘘]", "[亲]", "[呆]", "[口水]", "[汗]", "[呲牙]", "[鬼脸]", "[害羞]", "[偷笑]", "[调皮]", "[可怜]", "[敲]", "[惊讶]", "[流感]", "[委屈]", "[流泪]", "[嚎哭]", "[惊恐]", "[怒]", "[酷]", "[不说]", "[鄙视]", "[阿弥陀佛]", "[奸笑]", "[睡着]", "[口罩]", "[努力]", "[抠鼻孔]", "[疑问]", "[怒骂]", "[晕]", "[呕吐]", "[拜一拜]", "[惊喜]", "[流汗]", "[卖萌]", "[默契眨眼]", "[烧香拜佛]", "[晚安]", "[强]", "[弱]", "[OK]", "[拳头]", "[胜利]", "[鼓掌]", "[握手]", "[发怒]", "[骷髅]", "[便便]", "[火]", "[溜]", "[爱心]", "[心碎]", "[钟情]", "[唇]", "[戒指]", "[钻石]", "[太阳]", "[有时晴]", "[多云]", "[雷]", "[雨]", "[雪花]", "[爱人]", "[帽子]", "[皇冠]", "[篮球]", "[足球]", "[垒球]", "[网球]", "[台球]", "[咖啡]", "[啤酒]", "[干杯]", "[柠檬汁]", "[餐具]", "[汉堡]", "[鸡腿]", "[面条]", "[冰淇淋]", "[沙冰]", "[生日蛋糕]", "[蛋糕]", "[糖果]", "[葡萄]", "[西瓜]", "[光碟]", "[手机]", "[电话]", "[电视]", "[声音开启]", "[声音关闭]", "[铃铛]", "[锁头]", "[放大镜]", "[灯泡]", "[锤头]", "[烟]", "[炸弹]", "[枪]", "[刀]", "[药]", "[打针]", "[钱袋]", "[钞票]", "[银行卡]", "[手柄]", "[麻将]", "[调色板]", "[电影]", "[麦克风]", "[耳机]", "[音乐]", "[吉他]", "[火箭]", "[飞机]", "[火车]", "[公交]", "[轿车]", "[出租车]", "[警车]", "[自行车]"]
          , ge = he
          , pe = n("a78e")
          , ve = n.n(pe);
        window.localStorage;
        function ye(e, t) {
            try {
                window.localStorage[e] = t
            } catch (n) {
                be(e),
                ve.a.set(e, t)
            }
        }
        function Ce(e) {
            try {
                window.localStorage["1"] = 1;
                var t = window.localStorage[e];
                return t
            } catch (n) {
                return ve.a.get(e)
            }
        }
        function be(e) {
            try {
                e ? window.localStorage.removeItem(e) : window.localStorage.clear()
            } catch (t) {
                ve.a.remove(e)
            }
        }
        function we() {
            return (navigator.language || navigator.browserLanguage).toLowerCase()
        }
        var _e = function(e) {
            return decodeURIComponent((new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)").exec(location.href) || [, ""])[1].replace(/\+/g, "%20")) || null
        };
        function Se(e, t, n) {
            var s = new Date;
            s.setTime(s.getTime() + 60 * n * 1e3),
            document.cookie = e + "=" + escape(t) + ";expires=" + s.toGMTString()
        }
        function ke(e) {
            return new Promise((function(t) {
                setTimeout((function() {
                    t()
                }
                ), 1e3 * e)
            }
            ))
        }
        var Le = function() {
            function e() {
                Object(Q["a"])(this, e),
                this.originalTitle = document.title,
                this.warnTitle = "【You have a new message】",
                this.timer = null,
                this.time = 1e3,
                this.timeNum = 0
            }
            return Object(ee["a"])(e, [{
                key: "showTitle",
                value: function() {
                    var e = this
                      , t = this;
                    document.title = this.warnTitle,
                    clearInterval(t.timer),
                    this.timer = setInterval((function() {
                        e.timeNum++,
                        t.timeNum % 2 == 1 ? document.title = e.warnTitle : document.title = e.originalTitle
                    }
                    ), t.time)
                }
            }, {
                key: "hideTitle",
                value: function() {
                    var e = this;
                    this.timeNum = 0,
                    clearTimeout(e.timer),
                    document.title = this.originalTitle
                }
            }]),
            e
        }()
          , Te = Le
          , xe = {
            setItem: function(e, t, n) {
                new Date;
                var s = {
                    name: e,
                    value: t,
                    expires: 60 * n * 1e3,
                    startTime: (new Date).getTime()
                }
                  , i = {};
                if (Object.assign(i, s),
                i.expires)
                    localStorage.setItem(i.name, JSON.stringify(i));
                else {
                    Object.prototype.toString.call(i.value);
                    "[object Object]" == Object.prototype.toString.call(i.value) && (i.value = JSON.stringify(i.value)),
                    "[object Array]" == Object.prototype.toString.call(i.value) && (i.value = JSON.stringify(i.value)),
                    localStorage.setItem(i.name, i.value)
                }
            },
            getItem: function(e) {
                var t = localStorage.getItem(e);
                if (!t)
                    return null;
                try {
                    t = JSON.parse(t)
                } catch (s) {
                    t = t
                }
                if (t.startTime) {
                    var n = (new Date).getTime();
                    return n - t.startTime > t.expires ? (localStorage.removeItem(e),
                    null) : t.value
                }
                return t
            },
            removeItem: function(e) {
                localStorage.removeItem(e)
            },
            clear: function() {
                localStorage.clear()
            }
        }
          , Ie = 10
          , Me = new Te
          , Oe = x["default"].observable({
            showChatModel: !1,
            custemInfo: {},
            imAccid: "",
            imToken: "",
            visitorId: "",
            visitorCode: "",
            companyId: "",
            serverReadLastTime: 44,
            unReadCount: 55,
            msgList: [],
            offlineConfig: null,
            offlineFormId: "",
            onlineConfig: null,
            onlineFormId: "",
            onLineForm: [],
            offLineForm: [],
            toBottom: !1,
            Nim: null,
            isInput: !1,
            hasHistoryMsg: !0,
            noSeeList: [],
            socket: null,
            NimStatus: !1,
            loadHistory: !1,
            currIsBlack: !1,
            multyLang: null,
            currentTranslateCode: "",
            isLeaveMessage: "",
            failMsgClientId: [],
            showProgerss: !1,
            percentage: 0,
            networkWarning: "",
            noSendMsg: [],
            hasSubOnlineForm: !1,
            hasPushForm: !1,
            timer: null,
            hasPushPresetText: !1,
            showNoMsgModel: !0,
            historyMsgList: [],
            windowOnfocus: !1,
            timer2: null,
            differenceTime: 0,
            serverTime: 0,
            autoReplyContent1: "",
            autoReplyContent2: "",
            autoReplyTime: 3,
            timer3: null,
            serviceMsgNum: 0
        })
          , Fe = {
            setDifferenceTime: function(e) {
                console.info("时间间隔", e),
                Oe.differenceTime = e
            },
            setServerTime: function(e) {
                Oe.serverTime = e
            },
            setShowChatModel: function(e) {
                Oe.showChatModel = e,
                e && (Fe.sendMsgReceipt(),
                Oe.noSeeList = [])
            },
            setShowNoMsgModel: function(e) {
                Oe.showNoMsgModel = e,
                Oe.noSeeList = []
            },
            setStyleConfig: function(e) {
                Oe.offlineConfig = Object.assign({}, JSON.parse(e.offlineConfig)),
                Oe.offlineFormId = e.offlineFormId,
                Oe.onlineConfig = Object.assign({}, JSON.parse(e.onlineConfig)),
                Oe.onlineFormId = e.onlineFormId,
                Oe.preFormTag = e.preFormTag,
                Oe.autoReplyContent1 = e.autoReplyContent1,
                Oe.autoReplyContent2 = e.autoReplyContent2
            },
            sendPresetTextFn: function() {
                if (!Oe.preFormTag && !Oe.isLeaveMessage && "" != Oe.onlineConfig.chatTxt && Oe.onlineConfig.hasOwnProperty("chatTxt")) {
                    var e = (new Date).getTime()
                      , t = Number(Oe.onlineConfig.chatTime) || 30
                      , n = xe.getItem("hasSendpresetText");
                    if (!Oe.hasPushPresetText) {
                        xe.setItem("presetTextTime", e, Ie);
                        var s = e;
                        clearInterval(Oe.timer),
                        n || (Oe.timer = setInterval((function() {
                            if ((new Date).getTime() - s > 1e3 * t) {
                                clearInterval(Oe.timer);
                                var e = xe.getItem("hasSendMsg");
                                if (e)
                                    return void xe.removeItem("presetTextTime");
                                xe.setItem("hasSendpresetText", !0, Ie);
                                var n = (new Date).getTime() + Oe.serverTime;
                                xe.setItem("sendMsgTime", n, 50),
                                Oe.hasPushPresetText = !0,
                                Oe.msgList.push({
                                    time: n,
                                    text: Oe.onlineConfig.chatTxt,
                                    flow: "in",
                                    msg_status: "success",
                                    type: "customtext"
                                }),
                                Oe.showChatModel || Oe.noSeeList.push({
                                    time: n,
                                    text: Oe.onlineConfig.chatTxt,
                                    flow: "in",
                                    msg_status: "success",
                                    type: "customtext"
                                })
                            }
                        }
                        ), 1e3)),
                        clearInterval(Oe.timer2),
                        Oe.timer2 = setInterval((function() {
                            var e = xe.getItem("hasSendpresetText")
                              , t = getHzLocVal("windowOnfocus");
                            e && xe.setItem("hasSendpresetText", !0, Ie);
                            var n = xe.getItem("hasSendMsg");
                            n && xe.setItem("hasSendMsg", !0, Ie),
                            t && "true" == t && Me.hideTitle()
                        }
                        ), 2e3)
                    }
                }
            },
            pushPresetTextFn: function() {
                if (!Oe.preFormTag && !Oe.isLeaveMessage && Oe.onlineConfig.hasOwnProperty("chatTxt") && "" != Oe.onlineConfig.chatTxt) {
                    var e = xe.getItem("hasSendMsg");
                    if (e)
                        xe.removeItem("presetTextTime");
                    else if (!Oe.hasPushPresetText && !Oe.timer) {
                        var t = xe.getItem("sendMsgTime");
                        if (!t || Oe.hasPushPresetText)
                            return;
                        Oe.msgList.push({
                            time: Number(t),
                            text: Oe.onlineConfig.chatTxt,
                            flow: "in",
                            msg_status: "success",
                            type: "customtext"
                        }),
                        Oe.hasPushPresetText = !0
                    }
                }
            },
            sendPresetTxt: function() {
                clearInterval(Oe.timer),
                Oe.timer = null;
                var e = xe.getItem("hasSendpresetText");
                e ? Fe.pushPresetTextFn() : Fe.sendPresetTextFn()
            },
            setForm: function(e) {
                Oe.onLineForm = [].concat(e.online),
                Oe.offLineForm = [].concat(e.offline)
            },
            setServerReadLastTime: function(e) {
                Oe.serverReadLastTime = e
            },
            setUnReadCount: function(e) {
                Oe.unReadCount = e
            },
            setFirstMsgList: function(e) {
                if (!Oe.Nim) {
                    var t = JSON.parse(e);
                    t.flow = "in",
                    Fe.onmsg(t)
                }
            },
            initForm: function() {
                Oe.hasPushForm || (Oe.isLeaveMessage ? (Oe.hasPushForm = !0,
                Oe.msgList.push({
                    time: (new Date).getTime() + Oe.serverTime,
                    flow: "offline_form",
                    type: "offlineForm"
                })) : 1 != Oe.preFormTag || Oe.hasSubOnlineForm || (Oe.hasPushForm = !0,
                Oe.msgList.push({
                    time: (new Date).getTime() + Oe.serverTime,
                    flow: "online_form",
                    type: "onlineForm"
                })),
                console.info("store_msgList", Oe.msgList))
            },
            setBlack: function(e) {
                Oe.currIsBlack = e
            },
            setMsgList: function(e) {
                Fe.onmsg(e)
            },
            setFailMsgClientId: function(e) {
                Oe.failMsgClientId.push(e)
            },
            SubOnlineForm: function() {
                Oe.socket.SubOnlineForm()
            },
            resendMsg: function(e) {
                var t = JSON.parse(JSON.stringify(e));
                t.msg_status = "sending",
                t.resend = !0,
                "custom" == t.type && (t.content = JSON.stringify(t.content)),
                Fe.updateMsgStatus(t),
                Oe.Nim.resendMsg({
                    msg: t,
                    needMsgReceipt: !0,
                    done: function(e, t) {
                        e ? (console.info("重发失败", e),
                        t.msg_status = "fail") : (console.info("发送返回的数据", t),
                        t.msg_status = "success"),
                        Fe.updateMsgStatus(t)
                    }
                })
            },
            updateMsgStatus: function(e) {
                Oe.msgList.forEach((function(t, n) {
                    e.idClient && t.idClient == e.idClient && (t.msg_status = e.msg_status,
                    t.status = e.status,
                    t.time = e.time)
                }
                ))
            },
            setWindowOnfocus: function(e) {
                console.info("windowOnfocus", e),
                Me.hideTitle(),
                Se("windowOnfocus", e, 1e3),
                Oe.windowOnfocus = e,
                e && Fe.sendMsgReceipt()
            },
            onmsg: function(e) {
                if (xe.getItem("hasSendpresetText") || (xe.setItem("hasSendMsg", !0, Ie),
                xe.removeItem("presetTextTime"),
                clearInterval(Oe.timer)),
                Oe.historyMsgList.push(e),
                "text" == e.type && /\[[^\]]+\]/.test(e.text)) {
                    var t = e.text.match(/\[[^\]]+\]/g);
                    t.forEach((function(t) {
                        var n = ge
                          , s = n.indexOf(t);
                        s >= 0 && (e.text = e.text.replace(t, '<img  src="'.concat(ie).concat(s, '.png">')))
                    }
                    ))
                }
                "custom" == e.type && (e.content = JSON.parse(e.content),
                "onlineform" == e.content.type && (Oe.hasSubOnlineForm = !0)),
                e.toBottom = !0,
                Oe.msgList.push(e),
                console.info("msgLsit", Oe.msgList),
                Oe.showChatModel || Oe.noSeeList.push(e);
                var n = getHzLocVal("windowOnfocus");
                "in" == e.flow && "false" == n ? Me.showTitle() : (console.info("消息来了"),
                Fe.sendMsgReceipt()),
                "out" === e.flow && Oe.serviceMsgNum < 2 && this.autoReply(e),
                "in" === e.flow && ("Server" === e.fromClientType ? Oe.serviceMsgNum++ : Oe.serviceMsgNum = 3,
                console.info("msg in", e))
            },
            autoReply: function() {
                var e = Object(G["a"])(regeneratorRuntime.mark((function e() {
                    var t, n, s;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (t = Oe.onlineConfig.autoReplayTime || 3,
                                n = Oe.onlineConfig.autoReply,
                                !n) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 5,
                                ke(t);
                            case 5:
                                return e.next = 7,
                                Fe.sendAutoReplyMsg();
                            case 7:
                                s = e.sent,
                                "001" === s.code && s.data.isTodaySendOver && !0 === s.data.isTodaySendOver && (Oe.serviceMsgNum = 3);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                function t() {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            sendAutoReplyMsg: function() {
                var e = Object(G["a"])(regeneratorRuntime.mark((function e() {
                    var t, n, s;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (!(Oe.serviceMsgNum >= 2)) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (!(Oe.msgList.length > 0 && "in" === Oe.msgList[Oe.msgList.length - 1].flow && "Server" !== Oe.msgList[Oe.msgList.length - 1].fromClientType)) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return");
                            case 4:
                                return t = Oe.multyLang[Oe.autoReplyContent1][Oe.currentTranslateCode],
                                n = Oe.multyLang[Oe.autoReplyContent2][Oe.currentTranslateCode],
                                e.prev = 6,
                                e.next = 9,
                                new Promise((function(e, s) {
                                    hzAjax({
                                        type: "post",
                                        url: le + "/yunxin/sendMessage",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            serviceMsgNum: Oe.serviceMsgNum,
                                            autoReplyContent1: t,
                                            autoReplyContent2: n,
                                            autoReplayTime: Oe.onlineConfig.autoReplayTime || 3,
                                            visitorId: Oe.visitorId,
                                            from: Oe.custemInfo.accid,
                                            ope: 0,
                                            to: Oe.imAccid,
                                            type: 0,
                                            body: JSON.stringify({
                                                msg: 0 === Oe.serviceMsgNum ? t : n
                                            }),
                                            ext: Fe.getCustemData(1)
                                        }),
                                        success: function(t) {
                                            e(t)
                                        },
                                        error: function(e) {
                                            return s(e)
                                        }
                                    })
                                }
                                ));
                            case 9:
                                return s = e.sent,
                                e.abrupt("return", s);
                            case 14:
                                e.prev = 14,
                                e.t0 = e["catch"](6),
                                console.error("自动回复失败", e.t0);
                            case 17:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[6, 14]])
                }
                )));
                function t() {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            setInitData: function(e) {
                Oe.custemInfo.hasChange = !1,
                Oe.custemInfo = Object.assign({}, e.customerServerDto),
                Oe.custemInfo.hasOwnProperty("serverId") && (window.utilConfig.serverId = Oe.custemInfo.serverId),
                Oe.imAccid = e.imAccid,
                Oe.imToken = e.imToken,
                Oe.visitorId = e.visitorId,
                Oe.visitorCode = e.visitorCode,
                Oe.companyId = e.companyId,
                Oe.isLeaveMessage = e.isLeaveMessage
            },
            sendText: function(e) {
                function t(t) {
                    var n = Oe.Nim.sendText({
                        scene: "p2p",
                        to: Oe.custemInfo.accid,
                        text: e,
                        custom: Fe.getCustemData(),
                        done: function(e, n) {
                            var s = Object.assign({}, n);
                            e ? t ? (n.msg_status = "sending",
                            Oe.noSendMsg.push(s)) : n.msg_status = "fail" : n.msg_status = "success",
                            Fe.updateMsgStatus(n)
                        }
                    });
                    console.info("要发送的消息", n),
                    n.msg_status = "sending",
                    n.time = (new Date).getTime() + Oe.differenceTime,
                    Fe.onmsg(n)
                }
                Oe.Nim && 0 != Oe.NimStatus ? t() : (Fe.connectNim(),
                t(!0)),
                console.info("当前的客服id============" + Oe.custemInfo.accid)
            },
            sendCustomMsg: function(e) {
                var t = {
                    type: e.type,
                    data: e.txt
                };
                function n(e) {
                    var n = Oe.Nim.sendCustomMsg({
                        scene: "p2p",
                        custom: Fe.getCustemData(),
                        to: Oe.custemInfo.accid,
                        content: JSON.stringify(t),
                        done: function(t, s) {
                            t ? (console.info("重发失败", t),
                            e ? (s.msg_status = "sending",
                            Oe.noSendMsg.push(n)) : s.msg_status = "fail") : (console.info("发送返回的数据", s),
                            s.msg_status = "success"),
                            Fe.updateMsgStatus(s)
                        }
                    });
                    n.msg_status = "sending",
                    n.time = (new Date).getTime() + Oe.differenceTime,
                    Fe.onmsg(n)
                }
                Oe.Nim && 0 != Oe.NimStatus ? n() : (Fe.connectNim(),
                n(!0))
            },
            sendFile: function(e) {
                var t = "file";
                function n(n) {
                    Oe.Nim.sendFile({
                        scene: "p2p",
                        to: Oe.custemInfo.accid,
                        custom: Fe.getCustemData(),
                        type: t,
                        commonUpload: !0,
                        fileInput: e,
                        uploadprogress: function(e) {
                            console.log("文件总大小: " + e.total + "bytes"),
                            console.log("已经上传的大小: " + e.loaded + "bytes"),
                            console.log("上传进度: " + e.percentage),
                            console.log("上传进度文本: " + e.percentageText),
                            Oe.percentage = e.percentage
                        },
                        uploaddone: function(e, t) {
                            Oe.showProgerss = !1,
                            Oe.percentage = 0,
                            console.log("上传" + (e ? "失败" : "成功"), e, t)
                        },
                        beforesend: function(e) {
                            console.log("正在发送p2p image消息, id=" + e.idClient),
                            e.msg_status = "sending",
                            e.time = (new Date).getTime() + Oe.differenceTime,
                            Fe.onmsg(e)
                        },
                        beginupload: function(e) {
                            Oe.percentage = 0,
                            Oe.showProgerss = !0
                        },
                        done: function(e, t) {
                            if (e) {
                                if ("File_Too_Large" == e.code)
                                    return void Message.warning("文件太大，超过100M的限制");
                                n ? (t.msg_status = "sending",
                                Oe.noSendMsg.push(t)) : t.msg_status = "fail"
                            } else
                                console.info("发送返回的数据", t),
                                t.msg_status = "success";
                            Fe.updateMsgStatus(t)
                        }
                    })
                }
                /\.(png|jpg|bmp|jpeg|gif)$/i.test(e.files[0].name) && (t = "image"),
                Oe.Nim && 0 != Oe.NimStatus ? n() : (Fe.connectNim(),
                n(!0))
            },
            sendScreenshotFile: function(e) {
                function t(t) {
                    Oe.Nim.sendFile({
                        scene: "p2p",
                        to: Oe.custemInfo.accid,
                        custom: Fe.getCustemData(),
                        type: "image",
                        commonUpload: !0,
                        dataURL: e,
                        uploadprogress: function(e) {
                            console.log("文件总大小: " + e.total + "bytes"),
                            console.log("已经上传的大小: " + e.loaded + "bytes"),
                            console.log("上传进度: " + e.percentage),
                            console.log("上传进度文本: " + e.percentageText),
                            Oe.percentage = e.percentage
                        },
                        uploaddone: function(e, t) {
                            Oe.showProgerss = !1,
                            Oe.percentage = 0,
                            console.log("上传" + (e ? "失败" : "成功"), e, t)
                        },
                        beforesend: function(e) {
                            console.log("正在发送p2p image消息, id=" + e.idClient),
                            e.msg_status = "sending",
                            e.time = (new Date).getTime() + Oe.differenceTime,
                            Fe.onmsg(e)
                        },
                        beginupload: function(e) {
                            Oe.percentage = 0,
                            Oe.showProgerss = !0
                        },
                        done: function(e, n) {
                            if (e) {
                                if ("File_Too_Large" == e.code)
                                    return void Message.warning("文件太大，超过100M的限制");
                                t ? (n.msg_status = "sending",
                                Oe.noSendMsg.push(n)) : n.msg_status = "fail"
                            } else
                                console.info("发送返回的数据", n),
                                n.msg_status = "success";
                            Fe.updateMsgStatus(n)
                        }
                    })
                }
                Oe.Nim && 0 != Oe.NimStatus ? t() : (Fe.connectNim(),
                t(!0))
            },
            sendSysCustemMsg: function(e) {
                var t = {
                    type: "type",
                    value: e,
                    visitorId: Oe.visitorId
                };
                t = JSON.stringify(t),
                Oe.Nim && Oe.Nim.sendCustomSysMsg({
                    scene: "p2p",
                    to: Oe.custemInfo.accid,
                    content: t,
                    done: function(e, t) {
                        console.log("发送=========自定义系统通知" + (t ? "失败" : "成功"))
                    }
                })
            },
            sendMsgReceipt: function(e) {
                if (Oe.msgList.length > 0) {
                    var t = Oe.msgList[Oe.msgList.length - 1].time;
                    Oe.socket.vLastTimes(t)
                }
            },
            dealHistoryMsg: function(e) {
                if (0 != e.length) {
                    var t = [];
                    e.forEach((function(e, n) {
                        var s = {
                            flow: 0 == e.direction ? "out" : "in",
                            time: e.msgTimestamp,
                            file: {}
                        };
                        switch (e.msgType) {
                        case "FILE":
                            var i = JSON.parse(e.attach);
                            s.type = "file",
                            s.file.size = i.size,
                            s.file.url = i.url,
                            s.file.name = i.name,
                            s.file.ext = i.ext;
                            break;
                        case "PICTURE":
                            var a = JSON.parse(e.attach);
                            s.type = "image",
                            s.file.url = a.url,
                            s.file.name = a.name,
                            s.ext = a.ext;
                            break;
                        case "CUSTOM":
                            var o = JSON.parse(e.attach);
                            s.type = "custom",
                            s.text = o.data,
                            s.content = o;
                            break;
                        case "TEXT":
                            if (s.type = "text",
                            s.text = e.body,
                            /\[[^\]]+\]/.test(e.body)) {
                                var r = e.body.match(/\[[^\]]+\]/g)
                                  , c = ge;
                                r.forEach((function(e) {
                                    var t = c.indexOf(e);
                                    t >= 0 && (s.text = s.text.replace(e, '<img  src="'.concat(ie).concat(t, '.png">')))
                                }
                                ))
                            }
                            break
                        }
                        Oe.msgList.length <= 0 && (s.toBottom = !0),
                        t.unshift(s),
                        Oe.historyMsgList.push(s)
                    }
                    )),
                    e.length < oe && (Oe.hasHistoryMsg = !1),
                    Oe.loadHistory = !1,
                    Oe.msgList = t.concat(Oe.msgList),
                    console.info(Oe.msgList)
                } else
                    Oe.hasHistoryMsg = !1
            },
            connectNim: function(e) {
                Oe.NimStatus || new fe(e)
            },
            getCustemData: function(e) {
                return JSON.stringify({
                    direction: e || "0",
                    visitorId: Oe.visitorId,
                    visitorCode: utilConfig.visitorid,
                    companyId: utilConfig.enterpriseId,
                    serverId: Oe.custemInfo.serverId
                })
            },
            setServerData: function(e) {
                console.info("转移之后分配的客服", e),
                Oe.custemInfo.accid = e.serverAccid,
                Oe.custemInfo.serverId = e.serverId,
                Oe.custemInfo.onlineStatus = e.onlineStatus ? 1 : 0,
                Oe.isLeaveMessage = e.isLeaveMessage,
                Oe.custemInfo.hasChange = !0,
                Oe.custemInfo = Object.assign({}, Oe.custemInfo),
                console.info("合并以后的客服", Oe.custemInfo),
                Oe.custemInfo.hasOwnProperty("serverId") && (window.utilConfig.serverId = Oe.custemInfo.serverId),
                Fe.initForm(),
                Oe.preFormTag || Fe.sendPresetTxt()
            },
            setMultyLang: function(e) {
                Oe.multyLang = Object.assign({}, e)
            },
            setCurrentTranslateCode: function(e) {
                Oe.currentTranslateCode = e
            },
            undoMsg: function(e) {
                console.info(e),
                Oe.msgList.forEach((function(t, n) {
                    t.idClient == e.deletedIdClient && Oe.msgList.splice(n, 1)
                }
                )),
                Oe.noSeeList.forEach((function(t, n) {
                    t.idClient == e.deletedIdClient && Oe.noSeeList.splice(n, 1)
                }
                ))
            },
            saveLog: function(e, t) {
                var n = me + "/visit/log"
                  , s = {
                    type: e,
                    desc: t,
                    time: (new Date).format("yyyy-MM-dd hh:mm:ss:S"),
                    visitorid: window.utilConfig ? utilConfig.visitorid : "",
                    href: window.location.href,
                    isMobile: !1,
                    browser: window.BrowserName,
                    language: (navigator.browserLanguage || navigator.language).toLowerCase()
                };
                hzAjax({
                    type: "POST",
                    url: n,
                    contentType: "application/json",
                    data: JSON.stringify(s),
                    success: function() {}
                })
            }
        }
          , Ne = function() {
            var e = this
              , t = e._self._c;
            return t("a", {
                staticClass: "chat-file-msg",
                attrs: {
                    target: "_blank",
                    href: e.nameUrl
                }
            }, [t("div", {
                staticClass: "chat-file-left"
            }, ["doc" == e.fileData.ext ? t("i", {
                staticClass: "hz-icon-file_img_doc"
            }) : "ppt" == e.fileData.ext ? t("i", {
                staticClass: "hz-icon-file_img_ppt"
            }) : "xls" == e.fileData.ext ? t("i", {
                staticClass: "hz-icon-file_img_xls"
            }) : "zip" == e.fileData.ext ? t("i", {
                staticClass: "hz-icon-file_img_zip"
            }) : "pdf" == e.fileData.ext ? t("i", {
                staticClass: "hz-icon-file_img_pdf"
            }) : t("i", {
                staticClass: "hz-icon-file_img_unknown"
            })]), t("div", {
                staticClass: "chat-file-right"
            }, [t("p", {
                staticClass: "chat-file-name"
            }, [e._v(" " + e._s(e.fileData.name))]), t("p", {
                staticStyle: {
                    "margin-top": "5px"
                }
            }, [e._v(e._s(e.bytesToSize(e.fileData.size)))])]), e._t("default")], 2)
        }
          , De = []
          , je = {
            name: "chatFielMsg",
            props: {
                fileData: {
                    type: Object,
                    default: function() {}
                }
            },
            data: function() {
                return {
                    nameUrl: ""
                }
            },
            mounted: function() {
                var e = this;
                this.fileData.hasOwnProperty("type") ? this.nameUrl = this.fileData.fileUrl : this.nameUrl = SDK.NIM.getInstance({
                    debug: !1,
                    appKey: "11",
                    account: "11",
                    token: "11"
                }).packFileDownloadName({
                    url: e.fileData.url,
                    name: e.fileData.name
                })
            },
            methods: {
                bytesToSize: function(e) {
                    if (0 === e)
                        return "0 B";
                    var t = 1e3
                      , n = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
                      , s = Math.floor(Math.log(e) / Math.log(t));
                    return (e / Math.pow(t, s)).toPrecision(3) + " " + n[s]
                }
            }
        }
          , ze = je
          , Pe = (n("b795"),
        Object(K["a"])(ze, Ne, De, !1, null, null, null))
          , Ee = Pe.exports
          , Ae = function() {
            var e = this
              , t = e._self._c;
            return t("ul", {
                staticClass: "hz-chat-from",
                attrs: {
                    id: "hz-chat-from"
                }
            }, [t("li", {
                staticClass: "other chat-items"
            }, [t("div", {
                staticClass: "other-img avator"
            }), t("span", {
                staticClass: "other-text text-style"
            }, [e._v("\n\n             " + e._s(e.multyLang && e.multyLang[e.currentConfig.welcomeText] ? e.multyLang[e.currentConfig.welcomeText][e.currentTranslateCode] : "welcome") + "\n        ")])]), t("li", {
                staticClass: "other chat-items"
            }, [[t("img", {
                staticClass: "other-img avator",
                attrs: {
                    src: e.avatorSrc,
                    alt: ""
                }
            })], t("div", {
                staticClass: "other-form"
            }, [e.hasSubmit ? e._e() : [t("p", {
                staticClass: "form-des"
            }, [e._v("\n                    " + e._s(e.multyLang && e.multyLang[e.currentConfig.formIntro] ? e.multyLang[e.currentConfig.formIntro][e.currentTranslateCode] : "") + "\n                ")]), t("p", {
                staticClass: "form-mark"
            }, [e._v("\n                    " + e._s(e.multyLang && e.multyLang[e.currentConfig.formValidDes] ? e.multyLang[e.currentConfig.formValidDes][e.currentTranslateCode] : "") + "\n                ")]), t("div", {
                ref: "createForm",
                staticClass: "el-form create-field--forms",
                attrs: {
                    model: e.currentForms,
                    "label-width": "0px"
                }
            }, e._l(e.offLineForm, (function(n, s) {
                return t("div", {
                    staticClass: "el-form-item",
                    staticStyle: {
                        position: "relative"
                    },
                    attrs: {
                        prop: n.key,
                        rule: e.computedRules(n)
                    }
                }, ["custom" == n.type && n.list.length > 0 ? t("div", [t("ul", {
                    staticClass: "chooseItem"
                }, [t("p", {
                    staticClass: "choose-title"
                }, [e._v("Select a required item")]), t("el-radio-group", {
                    model: {
                        value: e.radio,
                        callback: function(t) {
                            e.radio = t
                        },
                        expression: "radio"
                    }
                }, e._l(n.list, (function(n, s) {
                    return t("li", {
                        staticClass: "choose-input"
                    }, [t("el-radio", {
                        attrs: {
                            label: n.key
                        }
                    }, [t("create-form", {
                        attrs: {
                            item: n,
                            currentform: e.customForm,
                            isCustom: !0
                        },
                        on: {
                            changRadio: e.changRadio
                        },
                        model: {
                            value: e.customForm[n.key],
                            callback: function(t) {
                                e.$set(e.customForm, n.key, t)
                            },
                            expression: "customForm[i.key]"
                        }
                    })], 1)], 1)
                }
                )), 0)], 1)]) : t("create-form", {
                    attrs: {
                        item: n,
                        currentform: e.currentForms
                    },
                    model: {
                        value: e.currentForms[n.key],
                        callback: function(t) {
                            e.$set(e.currentForms, n.key, t)
                        },
                        expression: "currentForms[item.key]"
                    }
                })], 1)
            }
            )), 0), t("div", {
                staticClass: "form-submit"
            }, [t("hz-button", {
                staticClass: "el-button sub-btn el-button--primary el-button--mini",
                style: {
                    backgroundColor: e.currentConfig.submitBtnColor
                },
                attrs: {
                    type: "primary",
                    loading: e.loading,
                    id: "hz_sub_btn",
                    size: "mini"
                },
                on: {
                    click: e.submitForm
                }
            }, [e._v(e._s(e.multyLang && e.multyLang[e.currentConfig.submitBtnText] ? e.multyLang[e.currentConfig.submitBtnText][e.currentTranslateCode] : "submit") + "\n                    ")])], 1)], e.hasSubmit ? [t("div", {
                staticClass: "has-submit"
            }, [t("div", {
                staticClass: "has-submit-box"
            }, [t("div", {
                staticClass: "has-submit-item"
            }, [t("i", {
                staticClass: "icon hz-icon-form-img-sucess"
            }), t("p", [e._v(e._s(e.multyLang && e.multyLang["成功"] ? e.multyLang["成功"][e.currentTranslateCode] : "success"))]), t("p", [e._v(e._s(e.multyLang && e.multyLang["您的表单已提交"] ? e.multyLang["您的表单已提交"][e.currentTranslateCode] : "Your form has been submitted"))])])])])] : e._e()], 2)], 2)])
        }
          , Be = []
          , Ve = function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "hz-form-item",
                class: e.isCustom ? "hz-custorm-form" : ""
            }, ["custom" != e.item.type ? t("div", {
                staticClass: "form-item"
            }, [t("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 == e.item.required,
                    expression: "item.required==1"
                }],
                staticClass: "is_required"
            }, [e._v("*")]), "text" == e.item.type ? [t("el-input", {
                attrs: {
                    placeholder: e.item.placeholder && e.multyLang[e.item.placeholder] ? e.multyLang[e.item.placeholder][e.currentTranslateCode] : e.item.placeholder
                },
                on: {
                    change: e.bindValue,
                    focus: e.onblur
                },
                model: {
                    value: e.currentValue,
                    callback: function(t) {
                        e.currentValue = t
                    },
                    expression: "currentValue"
                }
            })] : e._e(), "textarea" == e.item.type ? [t("el-input", {
                attrs: {
                    type: "textarea",
                    placeholder: e.item.placeholder && e.multyLang[e.item.placeholder] ? e.multyLang[e.item.placeholder][e.currentTranslateCode] : e.item.placeholder
                },
                on: {
                    change: e.bindValue,
                    focus: e.onblur
                },
                model: {
                    value: e.currentValue,
                    callback: function(t) {
                        e.currentValue = t
                    },
                    expression: "currentValue"
                }
            })] : e._e(), "select" == e.item.type || "radio" == e.item.type ? [t("el-select", {
                attrs: {
                    placeholder: e.multyLang[e.item.placeholder][e.currentTranslateCode]
                },
                on: {
                    focus: e.onblur,
                    change: e.bindValue
                },
                model: {
                    value: e.currentValue,
                    callback: function(t) {
                        e.currentValue = t
                    },
                    expression: "currentValue"
                }
            }, e._l(e.item.options, (function(n, s) {
                return t("el-option", {
                    attrs: {
                        value: n.key,
                        label: e.multyLang.hasOwnProperty([n.value]) ? e.multyLang[n.value][e.currentTranslateCode] : n.value
                    }
                }, [e._v(e._s(e.multyLang.hasOwnProperty([n.value]) ? e.multyLang[n.value][e.currentTranslateCode] : n.value) + "\n                    ")])
            }
            )), 1)] : e._e(), "checkbox" == e.item.type ? [t("el-select", {
                attrs: {
                    multiple: "",
                    placeholder: e.multyLang[e.item.placeholder][e.currentTranslateCode]
                },
                on: {
                    focus: e.onblur,
                    change: e.bindCheckValue
                },
                model: {
                    value: e.checkList,
                    callback: function(t) {
                        e.checkList = t
                    },
                    expression: "checkList"
                }
            }, e._l(e.item.options, (function(n, s) {
                return t("el-option", {
                    attrs: {
                        value: n.key,
                        label: e.multyLang.hasOwnProperty([n.value]) ? e.multyLang[n.value][e.currentTranslateCode] : n.value
                    }
                }, [e._v(e._s(e.multyLang.hasOwnProperty([n.value]) ? e.multyLang[n.value][e.currentTranslateCode] : n.value) + "\n                    ")])
            }
            )), 1)] : e._e(), "date" == e.item.type ? [t("el-date-picker", {
                attrs: {
                    placeholder: e.multyLang.hasOwnProperty([e.item.placeholder]) ? e.multyLang[e.item.placeholder][e.currentTranslateCode] : e.item.placeholder,
                    type: "date"
                },
                on: {
                    change: e.bindDateValue
                },
                model: {
                    value: e.currentValue,
                    callback: function(t) {
                        e.currentValue = t
                    },
                    expression: "currentValue"
                }
            })] : e._e(), "time" == e.item.type ? [t("el-time-select", {
                attrs: {
                    placeholder: e.multyLang.hasOwnProperty([e.item.placeholder]) ? e.multyLang[e.item.placeholder][e.currentTranslateCode] : e.item.placeholder
                },
                on: {
                    change: e.bindValue
                },
                model: {
                    value: e.currentValue,
                    callback: function(t) {
                        e.currentValue = t
                    },
                    expression: "currentValue"
                }
            })] : e._e(), "datetime" == e.item.type ? [t("el-date-picker", {
                attrs: {
                    placeholder: e.multyLang.hasOwnProperty([e.item.placeholder]) ? e.multyLang[e.item.placeholder][e.currentTranslateCode] : e.item.placeholder,
                    type: "datetime"
                },
                on: {
                    change: e.bindDateValue
                },
                model: {
                    value: e.currentValue,
                    callback: function(t) {
                        e.currentValue = t
                    },
                    expression: "currentValue"
                }
            })] : e._e(), "multipleText" == e.item.type ? [e._l(e.currentForms[e.item.key], (function(n, s) {
                return ["multipleText" == e.item.type ? t("div", {
                    staticClass: "el-form-item",
                    attrs: {
                        prop: "".concat(e.item.key, "[").concat(s, "]")
                    }
                }, [t("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 == e.item.required,
                        expression: "item.required==1"
                    }],
                    staticClass: "is_required"
                }, [e._v("*")]), t("el-input", {
                    attrs: {
                        placeholder: e.item.placeholder && e.multyLang[e.item.placeholder][e.currentTranslateCode]
                    },
                    on: {
                        focus: e.onblur,
                        change: e.bindValue
                    },
                    model: {
                        value: e.currentValue[s],
                        callback: function(t) {
                            e.$set(e.currentValue, s, t)
                        },
                        expression: "currentValue[j]"
                    }
                })], 1) : e._e()]
            }
            ))] : e._e(), "multipleSelect" == e.item.type ? [e._l(e.currentForms[e.item.key], (function(n, s) {
                return [t("div", {
                    staticClass: "el-form-item",
                    staticStyle: {
                        "margin-bottom": "5px"
                    }
                }, [t("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 == e.item.required,
                        expression: "item.required==1"
                    }],
                    staticClass: "is_required"
                }, [e._v("*")]), t("el-input", {
                    staticClass: "input-with-select",
                    staticStyle: {
                        width: "100%",
                        "margin-right": "8px"
                    },
                    attrs: {
                        placeholder: e.item.placeholder && e.multyLang[e.item.placeholder][e.currentTranslateCode]
                    },
                    on: {
                        focus: e.onblur,
                        change: e.bindValue
                    },
                    model: {
                        value: e.currentValue[s].value,
                        callback: function(t) {
                            e.$set(e.currentValue[s], "value", t)
                        },
                        expression: "currentValue[j].value"
                    }
                }, [t("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        slot: "prepend",
                        placeholder: e.item.placeholder && e.multyLang[e.item.placeholder][e.currentTranslateCode]
                    },
                    slot: "prepend",
                    model: {
                        value: e.currentValue[s].key,
                        callback: function(t) {
                            e.$set(e.currentValue[s], "key", t)
                        },
                        expression: "currentValue[j].key"
                    }
                }, e._l(e.item.options, (function(n, s) {
                    return t("el-option", {
                        attrs: {
                            placeholder: e.multyLang[n.value][e.currentTranslateCode],
                            value: n.key
                        }
                    })
                }
                )), 1)], 1)], 1)]
            }
            ))] : e._e()], 2) : e._e()])
        }
          , Re = []
          , He = {
            name: "createForm",
            props: {
                item: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                currentform: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                isCustom: {
                    type: Boolean,
                    default: !1
                },
                value: ""
            },
            computed: {
                multyLang: function() {
                    return Oe.multyLang
                },
                currentTranslateCode: function() {
                    return Oe.currentTranslateCode
                }
            },
            watch: {
                multyLang: function() {},
                currentTranslateCode: function() {}
            },
            data: function() {
                return {
                    currentForms: {},
                    currentValue: "",
                    checkList: [],
                    options: []
                }
            },
            created: function() {
                this.currentForms = Object.assign({}, this.currentform),
                this.currentValue = this.value,
                1 == this.item.source && this.item.hasOwnProperty("dicClassId") && this.getOptions(),
                "multipleText" == this.item.type && console.info(this.item)
            },
            methods: {
                bindValue: function() {
                    var e = this;
                    this.$emit("input", e.currentValue),
                    this.$emit("change", e.currentValue)
                },
                bindCheckValue: function() {
                    var e = this;
                    this.$emit("input", e.checkList.join(",")),
                    this.$emit("change", e.checkList.join(","))
                },
                bindDateValue: function(e) {
                    this.$emit("input", new Date(e).getTime() + ""),
                    this.$emit("change", new Date(e).getTime() + "")
                },
                onblur: function() {
                    var e = this;
                    this.isCustom && this.$emit("changRadio", e.item.key)
                },
                getOptions: function() {
                    var e = this
                      , t = this
                      , n = {
                        companyId: t.item.companyId,
                        key: t.item.key
                    };
                    $.get(ue + "/dic/getDicByKeyAndCompanyId", n).then((function(n) {
                        n.code == e.$successCode && (t.item.options = [],
                        n.data && n.data.length > 0 && n.data.forEach((function(e, n) {
                            t.item.options.push({
                                key: e.dicId,
                                value: e.dicValue
                            })
                        }
                        )))
                    }
                    ))
                },
                computedRules: function(e) {
                    var t = [];
                    if (1 == e.required || e.required)
                        if ("text" == e.type) {
                            var n = {
                                required: !0,
                                message: "请输入" + e.label,
                                trigger: "blur"
                            };
                            t.push(n)
                        } else {
                            var s = {
                                required: !0,
                                message: "请输入" + e.label,
                                trigger: "change"
                            };
                            t.push(s)
                        }
                    return e.hasOwnProperty("validate") && e.validate && e.validate.rule.length > 0 && t.concat(e.validate.rule),
                    this.rules[e.key] || (this.rules[e.key] = t),
                    t
                },
                addOptions: function(e, t) {
                    "select" == t ? this.currentValue.push({
                        key: "",
                        value: ""
                    }) : this.currentValue.push("")
                },
                removeOptions: function(e, t) {
                    this.currentValue.splice(t, 1)
                }
            }
        }
          , $e = He
          , Je = (n("08cf"),
        Object(K["a"])($e, Ve, Re, !1, null, null, null))
          , qe = Je.exports
          , Ue = n("a15e")
          , We = function() {
            var e = this
              , t = e._self._c;
            return t("button", {
                staticClass: "el-button",
                class: [e.type ? "el-button--" + e.type : "", e.buttonSize ? "el-button--" + e.buttonSize : "", {
                    "is-disabled": e.buttonDisabled,
                    "is-loading": e.loading,
                    "is-plain": e.plain,
                    "is-round": e.round,
                    "is-circle": e.circle
                }],
                attrs: {
                    disabled: e.buttonDisabled || e.loading,
                    autofocus: e.autofocus,
                    type: e.nativeType
                },
                on: {
                    click: e.handleClick
                }
            }, [e.loading ? t("i", {
                staticClass: "el-icon-loading"
            }) : e._e(), e.icon && !e.loading ? t("i", {
                class: e.icon
            }) : e._e(), e.$slots.default ? t("span", [e._t("default")], 2) : e._e()])
        }
          , Ke = []
          , Ye = {
            name: "hzButton",
            props: {
                type: {
                    type: String,
                    default: "default"
                },
                size: String,
                icon: {
                    type: String,
                    default: ""
                },
                nativeType: {
                    type: String,
                    default: "button"
                },
                loading: Boolean,
                disabled: Boolean,
                plain: Boolean,
                autofocus: Boolean,
                round: Boolean,
                circle: Boolean
            },
            computed: {
                buttonSize: function() {
                    return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
                },
                buttonDisabled: function() {
                    return this.disabled || (this.elForm || {}).disabled
                }
            },
            methods: {
                handleClick: function(e) {
                    this.$emit("click", e)
                }
            }
        }
          , Xe = Ye
          , Ze = Object(K["a"])(Xe, We, Ke, !1, null, null, null)
          , Ge = Ze.exports
          , Qe = {
            name: "chatForm",
            components: {
                CreateForm: qe,
                HzButton: Ge
            },
            props: {
                avatorSrc: {
                    type: String,
                    default: ""
                },
                item: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                currentTranslateCode: function() {
                    return Oe.currentTranslateCode
                },
                multyLang: function() {
                    return Oe.multyLang
                },
                currentConfig: function() {
                    return Oe.offlineConfig
                },
                offLineForm: function() {
                    return Oe.offLineForm
                },
                offlineFormId: function() {
                    return Oe.offlineFormId
                }
            },
            data: function() {
                return {
                    radio: 3,
                    currentForms: {},
                    rules: {},
                    customForm: {},
                    currentValidIndex: 0,
                    validArr: [],
                    customRules: {},
                    element: null,
                    hasSubmit: !1,
                    loading: !1,
                    hasSubmitLeaveForm: !1
                }
            },
            created: function() {
                var e = this;
                this.getCluesField(e.offLineForm, e.currentForms)
            },
            mounted: function() {
                var e = document.getElementById("hzchat-list-box");
                e && setTimeout((function() {
                    e.scrollTop = e.scrollHeight
                }
                ), 500)
            },
            methods: {
                computedRules: function(e) {
                    var t = []
                      , n = this.multyLang[e.placeholder] && this.multyLang[e.placeholder][this.currentTranslateCode] ? this.multyLang[e.placeholder][this.currentTranslateCode] : "please input";
                    if (1 == e.required || e.required)
                        if ("text" == e.type) {
                            var s = {
                                required: !0,
                                message: n,
                                trigger: "blur"
                            };
                            t.push(s)
                        } else {
                            var i = {
                                required: !0,
                                message: n,
                                trigger: "change"
                            };
                            t.push(i)
                        }
                    return e.hasOwnProperty("validate") && e.validate && e.validate.rule.length > 0 && t.concat(e.validate.rule),
                    e.hasOwnProperty("key") && !this.rules[e.key] && (this.rules[e.key] = t),
                    "custom" == e.type && e.list.length > 0 && e.list.forEach((function(e, t) {
                        var n = [];
                        e.hasOwnProperty("validate") && e.validate && e.validate.rule.length > 0 && (n.concat(e.validate.rule),
                        customRules[e.key] = [].concat(n))
                    }
                    )),
                    "m_email" === e.key && this.rules[e.key].push({
                        type: "email",
                        message: this.multyLang && this.multyLang["邮箱格式不正确"] ? this.multyLang["邮箱格式不正确"][this.currentTranslateCode] : "Please enter the correct email address",
                        trigger: "blur,change"
                    }),
                    console.info("rules", this.rules),
                    t
                },
                getCluesField: function(e, t) {
                    var n = this;
                    e.forEach((function(e, s) {
                        t[e.key] || ("multipleText" == e.type ? t[e.key] = [""] : "multipleSelect" == e.type ? t[e.key] = [{
                            key: "",
                            value: ""
                        }] : "custom" == e.type ? n.getCluesField(e.list, n.customForm) : (e.type,
                        t[e.key] = ""))
                    }
                    )),
                    t = Object.assign({}, t),
                    console.info("obj", t)
                },
                addOptions: function(e, t) {
                    "select" == t ? this.currentForms[e].push({
                        key: "",
                        value: ""
                    }) : this.currentForms[e].push("")
                },
                removeOptions: function(e, t) {
                    this.currentForms[e].splice(t, 1)
                },
                submitForm: function() {
                    var e = this;
                    this.currentValidIndex = 0,
                    this.valiaField();
                    var t = Object.assign({}, e.currentForms, Object(z["a"])({
                        companyId: utilConfig.enterpriseId,
                        messagePage: window.location.href,
                        formId: e.offlineFormId,
                        serverId: window.utilConfig.serverId
                    }, e.radio, this.customForm[e.radio]))
                      , n = this.customForm;
                    for (var s in n)
                        n[s] && (t[s] = n[s]);
                    this.validate((function() {
                        e.offLineForm.forEach((function(e, n) {
                            "date" != e.type && "datetime" != e.type || t[e.key].length > 0 && (t[e.key] = new Date(Number(t[e.key])))
                        }
                        )),
                        e.loading = !0,
                        hzAjax({
                            url: me + "/message/" + utilConfig.visitorid,
                            type: "PUT",
                            contentType: "application/json",
                            data: JSON.stringify(t),
                            success: function(t) {
                                if (e.loading = !1,
                                t.code == e.$successCode) {
                                    try {
                                        e.$message(e.multyLang["提交成功"][e.currentTranslateCode], "success")
                                    } catch (n) {
                                        e.$message("success")
                                    }
                                    e.hasSubmit = !0,
                                    Oe.hasSubOnlineForm = !0,
                                    Fe.SubOnlineForm()
                                } else
                                    e.$message(t.info)
                            }
                        })
                    }
                    ))
                },
                valiaField: function() {
                    var e = this;
                    this.validArr = [];
                    var t = this;
                    this.offLineForm.forEach((function(n, s) {
                        if ((1 == n.required || n.hasOwnProperty("key") && !e.rules[n.key].length > 0) && "custom" != n.type)
                            if ("multipleText" == n.type || "multipleSelect" == n.type)
                                for (var i = 0; i < t.currentForms[n.key].length; i++)
                                    e.validArr.push({
                                        prop: n.key + "[" + i + "]",
                                        obj: n,
                                        key: n.key,
                                        value: t.currentForms[n.key][i]
                                    });
                            else
                                "custom" !== n.type && e.validArr.push({
                                    prop: n.key,
                                    key: n.key,
                                    value: t.currentForms[n.key]
                                });
                        else
                            "custom" == n.type && e.validArr.push({
                                prop: "custom666",
                                key: "custom666",
                                data: n.list || [],
                                value: t.customForm
                            })
                    }
                    )),
                    console.info("validArr", this.validArr)
                },
                validate: function(e) {
                    var t = this
                      , n = this.validArr[t.currentValidIndex];
                    if ("custom666" != n.key) {
                        var s = t.rules[n.key]
                          , i = {};
                        if (s.length > 0) {
                            i[n.prop] = s;
                            var a = new Ue["a"](i);
                            a.validate(Object(z["a"])({}, n.prop, n.value), (function(n, s) {
                                n ? t.$message(n[0].message) : t.currentValidIndex < t.offLineForm.length - 1 ? (t.currentValidIndex++,
                                t.validate(e)) : "function" == typeof e && e()
                            }
                            ))
                        } else
                            t.currentValidIndex < t.offLineForm.length - 1 ? (t.currentValidIndex++,
                            t.validate(e)) : "function" == typeof e && e()
                    } else if (0 == n.data.length)
                        t.currentValidIndex < t.offLineForm.length - 1 ? (t.currentValidIndex++,
                        t.validate(e)) : "function" == typeof e && e();
                    else {
                        var o = !1;
                        for (var r in n.value)
                            n.value[r].length > 0 && (o = !0);
                        if (o)
                            t.currentValidIndex < t.offLineForm.length - 1 ? (t.currentValidIndex++,
                            t.validate(e)) : "function" == typeof e && e();
                        else
                            try {
                                t.$message(t.multyLang["任选一项需要填写"][t.currentTranslateCode])
                            } catch (c) {
                                t.$message("Please select any item to fill in")
                            }
                    }
                },
                changRadio: function(e) {
                    this.radio = e
                }
            }
        }
          , et = Qe
          , tt = (n("f50a"),
        n("52e1"),
        Object(K["a"])(et, Ae, Be, !1, null, null, null))
          , nt = tt.exports
          , st = function() {
            var e = this
              , t = e._self._c;
            return t("ul", {
                staticClass: "online-chat-form"
            }, [t("li", {
                staticClass: "online-chat-items"
            }, [t("div", {
                staticClass: "other-img avator"
            }), t("span", {
                staticClass: "other-text text-style"
            }, [e._v("\n             " + e._s(e.multyLang[e.currentConfig.welcomeText] ? e.multyLang[e.currentConfig.welcomeText][e.currentTranslateCode] : "") + "\n        ")])]), t("li", {
                staticClass: "other online-chat-items"
            }, [[t("img", {
                staticClass: "other-img avator",
                attrs: {
                    src: e.avatorSrc,
                    alt: ""
                }
            })], t("div", {
                staticClass: "online-other-form"
            }, [[t("p", {
                staticClass: "form-des"
            }, [e._v("\n                    " + e._s(e.multyLang[e.currentConfig.formIntro] ? e.multyLang[e.currentConfig.formIntro][e.currentTranslateCode] : "") + "\n                ")]), t("div", {
                ref: "createForm",
                staticClass: "create-field--forms el-form",
                attrs: {
                    "label-width": "0px"
                }
            }, e._l(e.onLineForm, (function(n, s) {
                return t("div", {
                    staticClass: "el-form-item",
                    staticStyle: {
                        position: "relative"
                    },
                    attrs: {
                        prop: n.key,
                        rule: e.computedRules(n)
                    }
                }, ["custom" == n.type && n.list.length > 0 ? t("div", [t("ul", {
                    staticClass: "chooseItem"
                }, [t("p", {
                    staticClass: "choose-title"
                }, [e._v("Select a required item")]), t("el-radio-group", {
                    model: {
                        value: e.radio,
                        callback: function(t) {
                            e.radio = t
                        },
                        expression: "radio"
                    }
                }, e._l(n.list, (function(n, s) {
                    return t("li", {
                        staticClass: "choose-input"
                    }, [t("el-radio", {
                        attrs: {
                            label: n.key
                        }
                    }, [t("create-form", {
                        attrs: {
                            item: n,
                            currentform: e.customForm,
                            isCustom: !0
                        },
                        on: {
                            changRadio: e.changRadio
                        },
                        model: {
                            value: e.customForm[n.key],
                            callback: function(t) {
                                e.$set(e.customForm, n.key, t)
                            },
                            expression: "customForm[i.key]"
                        }
                    })], 1)], 1)
                }
                )), 0)], 1)]) : t("create-form", {
                    attrs: {
                        item: n,
                        currentform: e.currentForms
                    },
                    model: {
                        value: e.currentForms[n.key],
                        callback: function(t) {
                            e.$set(e.currentForms, n.key, t)
                        },
                        expression: "currentForms[item.key]"
                    }
                })], 1)
            }
            )), 0), t("div", {
                staticClass: "form-submit"
            }, [t("hz-button", {
                staticClass: "el-button sub-btn el-button--primary el-button--small",
                style: {
                    backgroundColor: e.currentConfig.submitBtnColor
                },
                attrs: {
                    loading: e.loading,
                    type: "primary",
                    size: "mini",
                    id: "hz_online_sub_btn"
                },
                on: {
                    click: e.submitForm
                }
            }, [e._v(e._s(e.multyLang && e.multyLang[e.currentConfig.submitBtnText.replace(" ", "")] ? e.multyLang[e.currentConfig.submitBtnText.replace(" ", "")][e.currentTranslateCode] : "start chat") + "\n                    ")])], 1)]], 2)], 2)])
        }
          , it = []
          , at = {
            name: "chatForm",
            components: {
                CreateForm: qe,
                HzButton: Ge
            },
            data: function() {
                return {
                    radio: 3,
                    currentForms: {},
                    rules: {},
                    customForm: {},
                    currentValidIndex: 0,
                    validArr: [],
                    customRules: {},
                    hasSubmit: !1,
                    loading: !1,
                    formMsgList: []
                }
            },
            props: {
                avatorSrc: {
                    type: String,
                    default: ""
                },
                item: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            created: function() {
                var e = this;
                this.getCluesField(e.onLineForm, e.currentForms)
            },
            mounted: function() {
                var e = document.getElementById("hzchat-list-box");
                e && setTimeout((function() {
                    e.scrollTop = e.scrollHeight
                }
                ), 500)
            },
            computed: {
                multyLang: function() {
                    return Oe.multyLang
                },
                currentTranslateCode: function() {
                    return Oe.currentTranslateCode
                },
                currentConfig: function() {
                    return Oe.onlineConfig
                },
                onlineFormId: function() {
                    return Oe.onlineFormId
                },
                onLineForm: function() {
                    return Oe.onLineForm
                }
            },
            methods: {
                computedRules: function(e) {
                    var t = []
                      , n = this.multyLang[e.placeholder] && this.multyLang[e.placeholder][this.currentTranslateCode] ? this.multyLang[e.placeholder][this.currentTranslateCode] : "please input";
                    if (1 == e.required || e.required)
                        if ("text" == e.type) {
                            var s = {
                                required: !0,
                                message: n,
                                trigger: "blur"
                            };
                            t.push(s)
                        } else {
                            var i = {
                                required: !0,
                                message: n,
                                trigger: "change"
                            };
                            t.push(i)
                        }
                    return e.hasOwnProperty("validate") && e.validate && e.validate.rule.length > 0 && t.concat(e.validate.rule),
                    e.hasOwnProperty("key") && !this.rules[e.key] && (this.rules[e.key] = t),
                    "custom" == e.type && e.list.length > 0 && e.list.forEach((function(e, t) {
                        var n = [];
                        e.hasOwnProperty("validate") && e.validate && e.validate.rule.length > 0 && (n.concat(e.validate.rule),
                        customRules[e.key] = [].concat(n))
                    }
                    )),
                    t
                },
                getCluesField: function(e, t) {
                    var n = this;
                    e.forEach((function(e, s) {
                        t[e.key] || ("multipleText" == e.type ? t[e.key] = [""] : "multipleSelect" == e.type ? t[e.key] = [{
                            key: "",
                            value: ""
                        }] : "custom" == e.type ? n.getCluesField(e.list, n.customForm) : (e.type,
                        t[e.key] = ""))
                    }
                    )),
                    t = Object.assign({}, t),
                    console.info("obj", t)
                },
                addOptions: function(e, t) {
                    "select" == t ? this.currentForms[e].push({
                        key: "",
                        value: ""
                    }) : this.currentForms[e].push("")
                },
                removeOptions: function(e, t) {
                    this.currentForms[e].splice(t, 1)
                },
                submitForm: function() {
                    var e = this;
                    this.currentValidIndex = 0,
                    this.valiaField();
                    var t = this.customForm;
                    for (var n in t)
                        t[n] && (e.currentForms[n] = t[n]);
                    var s = Object.assign({}, e.currentForms, Object(z["a"])({
                        messagePage: window.location.href,
                        formId: this.onlineFormId,
                        companyId: utilConfig.enterpriseId,
                        visitorSource: 0,
                        serverId: window.utilConfig.serverId
                    }, e.radio, this.customForm[e.radio]));
                    this.validate((function() {
                        e.formMsgList = [],
                        e.onLineForm.forEach((function(t, n) {
                            "custom6666" == t.key && t.list && t.list.length > 0 && t.list.forEach((function(t, n) {
                                "date" != t.type && "datetime" != t.type || s[t.key].length > 0 && (s[t.key] = new Date(Number(s[t.key]))),
                                e.setFormMsg(t)
                            }
                            )),
                            "date" != t.type && "datetime" != t.type || s[t.key].length > 0 && (s[t.key] = new Date(Number(s[t.key]))),
                            e.setFormMsg(t)
                        }
                        )),
                        e.loading = !0,
                        console.info(e.formMsgList),
                        hzAjax({
                            url: me + "/message/" + utilConfig.visitorid,
                            type: "PUT",
                            contentType: "application/json",
                            data: JSON.stringify(s),
                            success: function(t) {
                                if (e.loading = !1,
                                t.code == e.$successCode) {
                                    try {
                                        e.$message(e.multyLang["提交成功"][e.currentTranslateCode], "success")
                                    } catch (n) {
                                        e.$message("success")
                                    }
                                    e.hasSubmit = !0,
                                    Fe.SubOnlineForm(),
                                    e.sendFormMsgFn()
                                } else
                                    e.$message(t.info)
                            }
                        })
                    }
                    ))
                },
                setFormMsg: function(e) {
                    var t = this;
                    if (t.currentForms.hasOwnProperty(e.key))
                        if ("radio" == e.type || "select" == e.type)
                            e.options.forEach((function(n, s) {
                                n.key == t.currentForms[e.key] && t.formMsgList.push({
                                    key: e.key,
                                    value: n.value,
                                    label: e.label,
                                    type: e.type
                                })
                            }
                            ));
                        else if ("multipleSelect" == e.type)
                            ;
                        else if ("checkbox" == e.type) {
                            if (t.currentForms[e.key] && "string" == typeof t.currentForms[e.key]) {
                                var n = t.currentForms[e.key].split(",")
                                  , s = [];
                                e.hasOwnProperty("options") && e.options instanceof Array && (e.options.forEach((function(e, t) {
                                    var i = e.key + "";
                                    n.indexOf(i) >= 0 && s.push(e.value)
                                }
                                )),
                                t.formMsgList.push({
                                    key: e.key,
                                    value: s,
                                    label: e.label,
                                    type: e.type
                                }))
                            }
                        } else
                            t.formMsgList.push({
                                key: e.key,
                                value: t.currentForms[e.key],
                                label: e.label,
                                type: e.type
                            })
                },
                dealArrayValue: function(e) {
                    if (void 0 !== e && null !== e)
                        return "object" == Object(O["a"])(e) ? e.join(",") : e
                },
                sendFormMsgFn: function() {
                    var e = this;
                    Fe.sendCustomMsg({
                        type: "onlineform",
                        txt: JSON.stringify(e.formMsgList)
                    })
                },
                valiaField: function() {
                    var e = this;
                    this.validArr = [];
                    var t = this;
                    this.onLineForm.forEach((function(n, s) {
                        if (1 == n.required || n.hasOwnProperty("key") && !e.rules[n.key].length > 0 && "custom" != n.type)
                            if ("multipleText" == n.type || "multipleSelect" == n.type)
                                for (var i = 0; i < t.currentForms[n.key].length; i++)
                                    e.validArr.push({
                                        prop: n.key + "[" + i + "]",
                                        obj: n,
                                        key: n.key,
                                        value: t.currentForms[n.key][i]
                                    });
                            else
                                "custom" !== n.type && e.validArr.push({
                                    prop: n.key,
                                    key: n.key,
                                    value: t.currentForms[n.key] + ""
                                });
                        else
                            "custom" == n.type && e.validArr.push({
                                prop: "custom666",
                                key: "custom666",
                                data: n.list || [],
                                value: t.customForm
                            })
                    }
                    ))
                },
                validate: function(e) {
                    var t = this
                      , n = this.validArr[t.currentValidIndex];
                    if ("custom666" != n.key) {
                        var s = t.rules[n.key]
                          , i = {};
                        if (s.length > 0) {
                            i[n.prop] = s;
                            var a = new Ue["a"](i);
                            a.validate(Object(z["a"])({}, n.prop, n.value), (function(n, s) {
                                n ? t.$message(n[0].message) : t.currentValidIndex < t.onLineForm.length - 1 ? (t.currentValidIndex++,
                                t.validate(e)) : "function" == typeof e && e()
                            }
                            ))
                        } else
                            t.currentValidIndex < t.onLineForm.length - 1 ? (t.currentValidIndex++,
                            t.validate(e)) : "function" == typeof e && e()
                    } else if (0 == n.data.length)
                        t.currentValidIndex < t.onLineForm.length - 1 ? (t.currentValidIndex++,
                        t.validate(e)) : "function" == typeof e && e();
                    else {
                        var o = !1;
                        for (var r in n.value)
                            n.value[r].length > 0 && (o = !0);
                        if (o)
                            t.currentValidIndex < t.onLineForm.length - 1 ? (t.currentValidIndex++,
                            t.validate(e)) : "function" == typeof e && e();
                        else
                            try {
                                t.$message(t.multyLang["任选一项需要填写"][t.currentTranslateCode])
                            } catch (c) {
                                console.info(c),
                                t.$message("Please select any item to fill in")
                            }
                    }
                },
                changRadio: function(e) {
                    this.radio = e
                }
            }
        }
          , ot = at
          , rt = (n("7ac4"),
        n("212a"),
        Object(K["a"])(ot, st, it, !1, null, null, null))
          , ct = rt.exports
          , lt = function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "form-msg"
            }, e._l(e.formMsgData, (function(n, s) {
                return t("p", {
                    staticClass: "form-msg-item"
                }, [t("span", {
                    staticClass: "form-msg-label"
                }, [e._v(e._s(e.multyLang && e.multyLang[n.label] ? e.multyLang[n.label][e.currentTranslateCode] : n.value) + ":")]), "checkbox" == n.type && n.value && n.value.length > 0 || "multipleText" == n.type && n.value && n.value.length > 0 ? [e._l(n.value, (function(t, n) {
                    return [e._v("\n                " + e._s(e.multyLang && e.multyLang[t] ? e.multyLang[t][e.currentTranslateCode] : t) + "\n            ")]
                }
                ))] : "date" == n.type && n.value ? [e._v("\n            " + e._s(new Date(Number(n.value)).format("yyyy/MM/dd")) + "\n        ")] : "datetime" == n.type && n.value ? [e._v("\n            " + e._s(new Date(Number(n.value)).format("yyyy/MM/dd hh:mm:ss")) + "\n        ")] : [n.value ? t("span", {
                    staticClass: "form-msg-value"
                }, [e._v(e._s(e.multyLang && e.multyLang[n.value] ? e.multyLang[n.value][e.currentTranslateCode] : n.value))]) : e._e(), n.value ? e._e() : t("span", {
                    staticClass: "form-msg-value"
                }, [e._v("-")])]], 2)
            }
            )), 0)
        }
          , ut = []
          , mt = {
            name: "formMsg",
            props: {
                formMsg: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                multyLang: function() {
                    return Oe.multyLang
                },
                currentTranslateCode: function() {
                    return Oe.currentTranslateCode
                }
            },
            data: function() {
                return {
                    formMsgData: null,
                    type: ""
                }
            },
            created: function() {
                this.formMsgData = JSON.parse(this.formMsg.data)
            }
        }
          , dt = mt
          , ft = (n("a3df"),
        Object(K["a"])(dt, lt, ut, !1, null, null, null))
          , ht = ft.exports
          , gt = {
            name: "chatItem",
            props: {
                msgList: {
                    type: Array,
                    default: []
                },
                avatorSrc: {
                    type: String,
                    default: ""
                }
            },
            components: {
                FormMsg: ht,
                ChatFielMsg: Ee,
                imageViewer: Z,
                chatForm: nt,
                OnlineChatForm: ct
            },
            data: function() {
                return {
                    messageList: [],
                    hasCustomServer: !1,
                    zIndex: 1e4,
                    preview: !0,
                    previewSrcList: ["http://ievent.oss-cn-shanghai.aliyuncs.com/public/publicimg/%E6%99%AE%E9%80%9A%E6%A0%8F%E7%9B%AE%E5%88%9D%E5%A7%8B%E5%8C%96%E5%9B%BE.jpg"]
                }
            },
            computed: {
                isInput: function() {
                    return Oe.isInput
                },
                serverReadLastTime: function() {
                    return Oe.serverReadLastTime
                },
                hasSubOnlineForm: function() {
                    return Oe.hasSubOnlineForm
                },
                currentTranslateCode: function() {
                    return Oe.currentTranslateCode
                },
                multyLang: function() {
                    return Oe.multyLang
                }
            },
            mounted: function() {
                this.toBottomFn(),
                this.sortMsgList()
            },
            watch: {
                msgList: function() {
                    Oe.msgList.length > 0 && (this.sortMsgList(),
                    Oe.windowOnfocus && Fe.sendMsgReceipt(Oe.msgList[Oe.msgList.length - 1].time))
                },
                isInput: function() {
                    this.isInput && this.$nextTick((function() {
                        var e = document.getElementById("hzchat-list-box");
                        e && (e.scrollTop = e.scrollHeight)
                    }
                    ))
                }
            },
            methods: {
                sortMsgList: function() {
                    this.messageList = [].concat(Oe.msgList),
                    this.messageList.sort((function(e, t) {
                        var n = e.time
                          , s = t.time;
                        return n < s ? -1 : n > s ? 1 : 0
                    }
                    ))
                },
                toBottomFn: function() {
                    this.$nextTick((function() {
                        var e = document.getElementById("hzchat-list-box");
                        e && (e.scrollTop = e.scrollHeight)
                    }
                    ))
                },
                toBottom: function(e) {
                    e.hasOwnProperty("toBottom") && 1 == e.toBottom && (e.toBottom = !1,
                    this.toBottomFn())
                },
                closeViewer: function() {
                    this.preview = !1
                },
                showImgView: function(e) {
                    this.$emit("showImageView", e)
                },
                formatDate: function(e) {
                    var t = new Date(e);
                    return t.getFullYear() + "-" + Number(t.getMonth() + 1) + "-" + t.getDate()
                },
                formatTime: function(e) {
                    var t = new Date(e)
                      , n = t.getHours() < 9 ? "0" + t.getHours() : t.getHours()
                      , s = t.getMinutes() < 9 ? "0" + t.getMinutes() : t.getMinutes()
                      , i = t.getSeconds() < 9 ? "0" + t.getSeconds() : t.getSeconds();
                    return n + ":" + s + ":" + i
                },
                resend: function(e) {
                    Fe.resendMsg(e)
                }
            }
        }
          , pt = gt
          , vt = (n("0f9e"),
        n("00a8"),
        Object(K["a"])(pt, F, N, !1, null, null, null))
          , yt = vt.exports
          , Ct = function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "chat-area",
                class: {
                    active: e.inputActive
                }
            }, [t("input", {
                attrs: {
                    type: "file",
                    id: "uploadfile"
                },
                on: {
                    change: function(t) {
                        return e.upload(t)
                    }
                }
            }), e.currentConfig ? t("div", {
                ref: "contentEdit",
                staticClass: "iscroll content_Odiv text",
                attrs: {
                    contenteditable: !e.currIsBlack,
                    "aria-label": "Rich Text Editor, main",
                    id: "hzEditorContentEditable",
                    placeholder: e.multyLang && e.multyLang[e.currentConfig.placeHolder.trimlr()] ? e.multyLang[e.currentConfig.placeHolder.trimlr()][e.currentTranslateCode] : ""
                },
                on: {
                    blur: e.endInput,
                    focus: e.startInput,
                    input: e.editInput,
                    paste: e.pasting,
                    keydown: [function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(),
                        t.ctrlKey || t.shiftKey || t.altKey || t.metaKey ? null : e.send.apply(null, arguments))
                    }
                    , function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : t.ctrlKey ? (t.preventDefault(),
                        e.createBr.apply(null, arguments)) : null
                    }
                    ]
                }
            }) : e._e(), t("div", {
                staticClass: "other-edit"
            }, [t("button", {
                on: {
                    click: e.insertEmoji
                }
            }, [t("i", {
                staticClass: "edit-icon hz-icon-weixiao icon-weixiao",
                class: e.currIsBlack ? "disable-icon" : ""
            })]), t("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.editValue,
                    expression: "!editValue"
                }],
                staticClass: "edit-icon el-icon-folder-opened",
                class: e.currIsBlack ? "disable-icon" : "",
                on: {
                    click: e.uploadfile
                }
            }), t("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.editValue,
                    expression: "!editValue"
                }],
                staticClass: "edit-icon hz-icon-zan2",
                class: e.currIsBlack ? "disable-icon" : "",
                on: {
                    click: e.sendZan
                }
            }), t("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.editValue,
                    expression: "editValue"
                }],
                staticClass: "hz-icon-icon_sent icon-icon_sent",
                class: e.currIsBlack ? "disable-icon" : "",
                on: {
                    click: e.sendMsg
                }
            })]), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showEmoji,
                    expression: "showEmoji"
                }],
                staticClass: "emoji_box iscroll",
                attrs: {
                    id: "emoji_box"
                }
            }, [t("emotion", {
                attrs: {
                    showEmoji: e.showEmoji
                },
                on: {
                    handleEmotion: e.handleEmotion
                }
            })], 1), e.sendScreenshot ? t("div", {
                staticClass: "show_cutImg"
            }, [t("div", {
                staticClass: "show_cutImg_box"
            }, [t("div", {
                staticClass: "show_img"
            }, [t("img", {
                attrs: {
                    src: e.screenshotImgUrl,
                    alt: ""
                }
            })]), t("div", {
                staticClass: "show_cut_btnbox"
            }, [t("hz-button", {
                attrs: {
                    size: "mini",
                    type: "default"
                },
                on: {
                    click: e.cancleSend
                }
            }, [e._v(e._s(e.multyLang && e.multyLang["取消"] ? e.multyLang["取消"][e.currentTranslateCode] : "Cancel"))]), t("hz-button", {
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: e.InsureSend
                }
            }, [e._v(e._s(e.multyLang && e.multyLang["确定"] ? e.multyLang["取消"][e.currentTranslateCode] : "Confirm"))])], 1)])]) : e._e()])
        }
          , bt = []
          , wt = function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "hz-emotion"
            }, e._l(e.list, (function(n, s) {
                return t("button", [t("img", {
                    staticClass: "hz-static-emotion",
                    attrs: {
                        src: e.faceUrl + s + ".png"
                    },
                    on: {
                        click: function(t) {
                            return e.emotionSelect(n, s)
                        }
                    }
                })])
            }
            )), 0)
        }
          , _t = []
          , St = {
            name: "emotion",
            props: {
                showEmoji: Boolean
            },
            data: function() {
                return {
                    faceUrl: ie,
                    list: []
                }
            },
            watch: {
                showEmoji: function() {
                    0 == this.list.length && (this.list = ge)
                }
            },
            mounted: function() {},
            methods: {
                emotionSelect: function(e, t) {
                    this.$emit("handleEmotion", e)
                }
            }
        }
          , kt = St
          , Lt = (n("88c2"),
        Object(K["a"])(kt, wt, _t, !1, null, "acd5f766", null))
          , Tt = Lt.exports
          , xt = {
            name: "chatArea",
            data: function() {
                return {
                    showEmoji: !1,
                    inputActive: !1,
                    editValue: "",
                    screenshotImgUrl: "",
                    sendScreenshot: !1,
                    hasContactNim: !1
                }
            },
            props: {
                nim: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                currentConfig: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                currIsBlack: function() {
                    return Oe.currIsBlack
                },
                multyLang: function() {
                    return Oe.multyLang
                },
                currentTranslateCode: function() {
                    return Oe.currentTranslateCode
                }
            },
            components: {
                HzButton: Ge,
                emotion: Tt
            },
            mounted: function() {
                this.initEvents();
                document.getElementById("hzEditorContentEditable")
            },
            watch: {
                disabled: function() {
                    this.disabled && this.$refs.contentEdit.blur()
                }
            },
            methods: {
                isIE: function() {
                    return !(!window.ActiveXObject && !("ActiveXObject"in window))
                },
                initEvents: function() {
                    var e = this;
                    document.addEventListener("click", (function(t) {
                        var n = t.target;
                        if (!(t.target.className.indexOf("icon-weixiao") >= 0)) {
                            var s = document.getElementById("emoji_box");
                            s.contains(n) || (e.showEmoji = !1)
                        }
                    }
                    ), !1)
                },
                handleEmotion: function(e) {
                    var t = ge.indexOf(e)
                      , n = "".concat(ie).concat(t, ".png");
                    document.execCommand("insertImage", !1, n)
                },
                editInput: function() {
                    this.editValue = this.$refs.contentEdit.innerHTML
                },
                sendMsg: function() {
                    this.disabled || this.currIsBlack || this.send()
                },
                send: function() {
                    var e = this.getContent()
                      , t = this;
                    if (/<img .*?src="(.*?)".*?\/?>/.test(e)) {
                        var n = e.match(/<img .*?src="(.*?)".*?\/?>/g);
                        n.forEach((function(n) {
                            var s = t.getImgName(n);
                            e = e.replace(n, "".concat(ge[s]))
                        }
                        ))
                    }
                    if (e = e.replace(/<(?!\/?br>)[^<>]*>/g, ""),
                    "" != e.replace(/<.*?>/g, "").replace(/&nbsp;/g, ""))
                        if (/^\s*$/.test(e))
                            try {
                                this.$message(t.multyLang["请不要发送空消息"][t.currentTranslateCode])
                            } catch (s) {
                                this.$message("Please do not send empty messages")
                            }
                        else if (e.length > 800)
                            try {
                                this.$message(t.multyLang["文本过长"][t.currentTranslateCode])
                            } catch (s) {
                                this.$message("The text is too long")
                            }
                        else
                            this.currIsBlack || Fe.sendText(e);
                    else
                        try {
                            this.$message(t.multyLang["请不要发送空消息"][t.currentTranslateCode])
                        } catch (s) {
                            this.$message("Please do not send empty messages")
                        }
                },
                connectNim: function() {
                    this.hasContactNim || Fe.connectNim(),
                    this.hasContactNim = !0
                },
                getImgName: function(e) {
                    var t = e.lastIndexOf("/")
                      , n = e.lastIndexOf(".");
                    return e.substring(t + 1, n)
                },
                insertEmoji: function() {
                    this.focuson(),
                    this.showEmojiModal()
                },
                uploadfile: function() {
                    document.querySelector("#uploadfile").click()
                },
                createBr: function() {
                    document.execCommand("insertHTML", !1, "</br></br>")
                },
                showEmojiModal: function() {
                    this.showEmoji = !0
                },
                upload: function(e) {
                    var t = e.target;
                    this.currIsBlack || Fe.sendFile(t)
                },
                getContent: function() {
                    var e = this.$refs.contentEdit
                      , t = e.innerHTML;
                    return e.innerHTML = "",
                    this.editValue = "",
                    t
                },
                focuson: function() {
                    var e = this.$refs.contentEdit;
                    "" == e.innerHTML && e.focus()
                },
                sendZan: function() {
                    this.currIsBlack || Fe.sendCustomMsg({
                        type: "custom",
                        txt: "&#xe71b;"
                    })
                },
                startInput: function() {
                    console.info("开始输入"),
                    Fe.sendSysCustemMsg(!0),
                    this.$emit("sendMsgReceipt"),
                    this.inputActive = !0,
                    console.info("开始连接nim"),
                    this.connectNim()
                },
                endInput: function() {
                    console.info("结束输入"),
                    Fe.sendSysCustemMsg(!1),
                    this.inputActive = !1
                },
                pasting: function(e) {
                    var t = this;
                    if (e.preventDefault(),
                    e.clipboardData.files[0]) {
                        if (!Oe.showChatModel)
                            return;
                        var n = e.clipboardData.files[0]
                          , s = new FileReader;
                        s.readAsDataURL(n),
                        s.onload = function(e) {
                            t.screenshotImgUrl = e.target.result,
                            t.sendScreenshot = !0
                        }
                    }
                    var i = ""
                      , a = null;
                    i = e.clipboardData.getData("text/plain"),
                    a = window.getSelection().getRangeAt(0),
                    a.deleteContents();
                    var o = document.createElement("span");
                    o.innerHTML = i.replace(/(\r\n|\n|\r)/g, "<br>"),
                    a.insertNode(o),
                    a.collapse(!1)
                },
                cancleSend: function() {
                    this.sendScreenshot = !1,
                    this.screenshotImgUrl = ""
                },
                InsureSend: function() {
                    var e = this;
                    Fe.sendScreenshotFile(e.screenshotImgUrl),
                    e.sendScreenshot = !1
                }
            }
        }
          , It = xt
          , Mt = (n("c28b"),
        Object(K["a"])(It, Ct, bt, !1, null, null, null))
          , Ot = Mt.exports
          , Ft = function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "chat-reverst-list"
            }, [t("div", {
                staticClass: "padding-div"
            }), t("div", {
                staticClass: "chat-reverst-ul"
            }, [t("div", {
                staticClass: "seemore",
                class: e.isFixed ? "seemore-fixed" : ""
            }, [t("div", {
                staticClass: "seemore-btn"
            }, [t("div", {
                on: {
                    click: e.seemore
                }
            }, [e._v(e._s(e.multyLang && e.multyLang["查看更多"] ? e.multyLang["查看更多"][e.currentTranslateCode] : "see more") + "\n                    ")])]), t("i", {
                staticClass: "el-icon-close",
                on: {
                    click: e.closeChatList
                }
            })]), t("ul", [e._l(e.noSeeMsgList, (function(n, s) {
                return ["in" == n.flow ? t("li", {
                    staticClass: "other chat-reverst-item",
                    class: e.noSeeMsgList[s + 1] && n.flow != e.noSeeMsgList[s + 1].flow || s == e.noSeeMsgList.length - 1 && "in" == e.noSeeMsgList[e.noSeeMsgList.length - 1].flow ? "islast" : ""
                }, [[e.noSeeMsgList[s + 1] && n.flow != e.noSeeMsgList[s + 1].flow || s == e.noSeeMsgList.length - 1 && "in" == e.noSeeMsgList[e.noSeeMsgList.length - 1].flow ? t("img", {
                    staticClass: "other-img avator",
                    attrs: {
                        src: e.avatorSrc,
                        alt: ""
                    }
                }) : t("div", {
                    staticClass: "other-img avator"
                })], "text" == n.type ? t("span", {
                    staticClass: "other-text"
                }, [t("span", {
                    domProps: {
                        innerHTML: e._s(n.text.replace(/(\r\n|\n|\r)/g, "<br />"))
                    }
                })]) : e._e(), "customtext" == n.type ? t("span", {
                    staticClass: "other-text"
                }, [e.multyLang && e.multyLang[n.text] ? [t("span", {
                    domProps: {
                        innerHTML: e._s(e.multyLang[n.text][e.currentTranslateCode].replace(/(\r\n|\n|\r)/g, "<br />"))
                    }
                })] : [t("span", {
                    domProps: {
                        innerHTML: e._s(n.text.replace(/(\r\n|\n|\r)/g, "<br />"))
                    }
                })]], 2) : e._e(), "custom" == n.type && "custom" == n.content.type ? t("p", {
                    staticClass: "zanicon-left"
                }, [t("span", {
                    staticClass: "hz-icon-zan icon-zan other-hover"
                })]) : e._e(), "image" == n.type ? t("div", {
                    staticClass: "other-uploadimg",
                    staticStyle: {
                        "margin-bottom": "16px"
                    }
                }, [t("img", {
                    attrs: {
                        src: n.file.url
                    },
                    on: {
                        load: e.calcHeight
                    }
                })]) : e._e(), "custom" == n.type && "image" == n.content.type ? t("div", {
                    staticClass: "other-uploadimg",
                    staticStyle: {
                        "margin-bottom": "16px"
                    }
                }, [t("img", {
                    attrs: {
                        src: n.content.fileUrl
                    },
                    on: {
                        load: e.calcHeight
                    }
                })]) : e._e(), "file" == n.type ? t("span", {
                    staticClass: "other-uploadimg other-hover"
                }, [t("chat-fiel-msg", {
                    attrs: {
                        fileData: n.file
                    }
                })], 1) : e._e(), "custom" == n.type && "file" == n.content.type ? t("span", {
                    staticClass: "other-uploadimg other-hover"
                }, [t("chat-fiel-msg", {
                    attrs: {
                        fileData: n.content
                    }
                })], 1) : e._e()], 2) : e._e(), "out" == n.flow ? t("li", {
                    staticClass: "mine chat-reverst-item"
                }, ["text" == n.type ? t("span", {
                    staticClass: "mine-text"
                }, [t("span", {
                    domProps: {
                        innerHTML: e._s(n.text)
                    }
                })]) : e._e(), "custom" == n.type ? t("p", {
                    staticClass: "zanicon-right"
                }, [t("span", {
                    staticClass: "hz-icon-zan other-hover"
                })]) : e._e(), "image" == n.type ? t("div", {
                    staticClass: "mine-uploadimg"
                }, [t("img", {
                    attrs: {
                        src: n.file.url
                    },
                    on: {
                        load: e.calcHeight
                    }
                })]) : e._e(), "file" == n.type ? t("span", {
                    staticClass: "mine-text"
                }, [t("a", {
                    attrs: {
                        href: n.file.url
                    }
                }, [e._v(e._s(n.file.name))])]) : e._e()]) : e._e()]
            }
            ))], 2)])])
        }
          , Nt = []
          , Dt = {
            name: "chatSimpleList",
            components: {
                ChatFielMsg: Ee,
                ChatItem: yt
            },
            props: {
                avatorSrc: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                noSeeMsgList: function() {
                    var e = this;
                    return this.$nextTick((function() {
                        e.calcHeight()
                    }
                    )),
                    Oe.noSeeList
                },
                currentTranslateCode: function() {
                    return Oe.currentTranslateCode
                },
                multyLang: function() {
                    return Oe.multyLang
                }
            },
            data: function() {
                return {
                    isFixed: !1,
                    headimg: re
                }
            },
            mounted: function() {
                var e = this;
                this.$nextTick((function() {
                    e.calcHeight()
                }
                ))
            },
            methods: {
                calcHeight: function() {
                    var e = document.querySelector(".chat-reverst-list").clientHeight
                      , t = document.querySelector(".chat-reverst-ul")
                      , n = t.clientHeight
                      , s = document.querySelector(".padding-div");
                    this.isFixed = !(n < e - 50),
                    n < e ? s.style.height = e - n - 20 + "px" : (s.style.height = "0px",
                    t.scrollTop = t.scrollHeight)
                },
                closeChatList: function() {
                    this.$emit("closeReverseList")
                },
                seemore: function() {
                    this.$emit("seemore")
                }
            }
        }
          , jt = Dt
          , zt = (n("cd4e"),
        Object(K["a"])(jt, Ft, Nt, !1, null, "67227e8b", null))
          , Pt = zt.exports
          , Et = n("c9df")
          , At = n.n(Et)
          , Bt = function() {
            function e(t, n) {
                Object(Q["a"])(this, e),
                this.socket = null,
                this.visitorCode = t,
                this.isOffLineLogin = !1,
                this.lastActiveTime = this.getLastActiveTime(),
                this.init(),
                this.refreshLastActiveTime(),
                this.webSocketHandleMessage = n.webSocketHandleMessage,
                this.onconnect = n.onconnect,
                this.disconnect = n.disconnect,
                this.error = n.error,
                this.reconnect = n.reconnect
            }
            return Object(ee["a"])(e, [{
                key: "init",
                value: function() {
                    var e = this;
                    "undefined" != typeof WebSocket ? this.socket = At()(ne, {
                        transports: ["websocket"]
                    }) : this.socket = At()(ne),
                    e.socket.on("connect", (function() {
                        console.info("socket连接成功"),
                        e.onconnect(),
                        e.visitorLog()
                    }
                    )),
                    e.socket.on("im", (function(t) {
                        var n = JSON.parse(t);
                        e.webSocketHandleMessage(n)
                    }
                    )),
                    e.socket.on("disconnect", (function(t) {
                        console.info("socket断开连接", t),
                        e.disconnect()
                    }
                    )),
                    e.socket.on("error", (function(t) {
                        console.info("socket抛出异常", t),
                        e.error(t)
                    }
                    )),
                    e.socket.on("reconnect", (function(t) {
                        e.isOffLineLogin = !0,
                        e.reconnect(t)
                    }
                    ))
                }
            }, {
                key: "send",
                value: function(e) {
                    this.socket.emit("im", encodeURIComponent(e))
                }
            }, {
                key: "close",
                value: function() {
                    this.socket.close()
                }
            }, {
                key: "connect",
                value: function() {
                    this.socket.connect()
                }
            }, {
                key: "visitorLog",
                value: function() {
                    var e = this;
                    e.isOffLineLogin && (e.lastActiveTime = this.getLastActiveTime());
                    var t = {
                        visitorCode: e.visitorCode,
                        isOffLineLogin: e.isOffLineLogin,
                        companyId: window.utilConfig.enterpriseId
                    };
                    e.lastActiveTime && (t["lastActiveTime"] = parseInt(e.lastActiveTime / 1e3)),
                    console.info("lastActiveTime", e.lastActiveTime);
                    var n = {
                        type: 0,
                        data: JSON.stringify(t)
                    };
                    this.send(JSON.stringify(n))
                }
            }, {
                key: "getLastActiveTime",
                value: function() {
                    if (Ce("lastActiveTime"))
                        return Ce("lastActiveTime");
                    var e = (new Date).getTime();
                    return ye("lastActiveTime", e, 1e4),
                    null
                }
            }, {
                key: "refreshLastActiveTime",
                value: function() {
                    setInterval((function() {
                        var e = (new Date).getTime();
                        ye("lastActiveTime", e, 1e4),
                        console.info("refreshActiveTime", e)
                    }
                    ), 5e3)
                }
            }]),
            e
        }()
          , Vt = Bt
          , Rt = function() {
            function e(t) {
                Object(Q["a"])(this, e);
                var n = this;
                this.webSocketActivePingTimer = null,
                this.webSocketActivePingTime = 18e4,
                this.visitBeatActiveType = 2,
                this.webSocketPingTimer = null,
                this.webSocketPingTime = 5e3,
                this.visitBeatType = 18,
                this.delayTimer = null,
                this.delayTime = 4e3,
                this.delayTimerStatus = !1,
                this.socketStatus = !1,
                this.visitorCode = t;
                var s = (new Date).getTime();
                this.socket = new Vt(t,{
                    onconnect: function() {
                        console.info("socket连接成功"),
                        Fe.saveLog("socket", "🔗socket连接成功,所用时间" + ((new Date).getTime() - s) / 1e3),
                        n.socketStatus = !0
                    },
                    webSocketHandleMessage: function(e) {
                        n.webSocketHandleMessage(e)
                    },
                    disconnect: function() {
                        n.socketStatus = !1,
                        clearTimeout(n.webSocketPingTimer),
                        clearTimeout(n.webSocketActivePingTimer),
                        Oe.Nim && Oe.Nim.disconnect(),
                        Fe.saveLog("socket", "socket连接断开")
                    },
                    error: function() {
                        n.socketStatus = !1,
                        Oe.Nim && Oe.Nim.disconnect(),
                        Fe.saveLog("socket", "socket连接失败")
                    },
                    reconnect: function() {}
                })
            }
            return Object(ee["a"])(e, [{
                key: "vHisMsgLists",
                value: function(e) {
                    var t = {
                        limit: oe,
                        asc: !1,
                        time: e || ""
                    };
                    console.info("获取历史消息的参数", t);
                    var n = {
                        type: 4,
                        data: JSON.stringify(t)
                    };
                    Oe.loadHistory = !0,
                    this.send(JSON.stringify(n))
                }
            }, {
                key: "vLastTimes",
                value: function(e) {
                    var t = {
                        lastReadTime: e
                    }
                      , n = {
                        type: 3,
                        data: JSON.stringify(t)
                    };
                    console.info("发送已读回执", n),
                    this.send(JSON.stringify(n))
                }
            }, {
                key: "recodeImStatus",
                value: function() {
                    var e = {
                        type: 19
                    };
                    console.info("连接云信添加记录", e),
                    this.send(JSON.stringify(e))
                }
            }, {
                key: "SubOnlineForm",
                value: function() {
                    var e = {
                        type: 20
                    };
                    console.info("提交表单成功", e),
                    this.send(JSON.stringify(e))
                }
            }, {
                key: "webSocketPing",
                value: function() {
                    var e = this;
                    this.webSocketPingTimer = setTimeout((function() {
                        var t = {
                            type: e.visitBeatType
                        };
                        e.socketStatus && (console.info("定时心跳"),
                        e.send(JSON.stringify(t))),
                        clearTimeout(e.webSocketPingTimer),
                        e.webSocketPing()
                    }
                    ), e.webSocketPingTime)
                }
            }, {
                key: "webActiveSocketPing",
                value: function() {
                    console.info("发送激活心跳");
                    var e = this;
                    this.webSocketActivePingTimer = setTimeout((function() {
                        var t = {
                            type: e.visitBeatActiveType
                        };
                        e.socketStatus && (console.info("发送激活心跳"),
                        e.send(JSON.stringify(t))),
                        clearTimeout(e.webSocketActivePingTimer),
                        e.webActiveSocketPing()
                    }
                    ), e.webSocketActivePingTime)
                }
            }, {
                key: "webSocketHandleMessage",
                value: function(e) {
                    0 == e.type && "001" == e.data.code ? (Oe.hasPushForm = !1,
                    Oe.hasPushPresetText = !1,
                    Oe.msgList = [],
                    Oe.hasSubOnlineForm = e.data.hideForm,
                    Fe.initForm(),
                    Fe.setServerReadLastTime(e.data.serverReadLastTime),
                    Fe.setUnReadCount(e.data.unReadCount),
                    Fe.sendPresetTxt(),
                    this.webActiveSocketPing(),
                    this.webSocketPing(),
                    this.vHisMsgLists(),
                    1 == e.data.linkImToday && (Oe.Nim && 0 != Oe.NimStatus || Fe.connectNim())) : 5 == e.type ? "001" == e.data.code && Fe.dealHistoryMsg(e.data.messageList) : 13 == e.type ? (Fe.setFirstMsgList(e.data.lastMsg),
                    Oe.Nim && 0 != Oe.NimStatus || Fe.connectNim()) : 9 == e.type ? Fe.setServerReadLastTime(e.data.lastReadTime) : 12 == e.type ? Fe.setServerData(e.data) : 14 == e.type ? (Fe.setBlack(e.data.isBlack),
                    console.info(e)) : 25 == e.type ? Oe.isLeaveMessage && Fe.setServerData(e.data) : 28 == e.type && (Oe.Nim && 0 != Oe.NimStatus || Fe.connectNim())
                }
            }, {
                key: "send",
                value: function(e) {
                    this.socket.send(e)
                }
            }, {
                key: "close",
                value: function() {
                    this.socket.close()
                }
            }, {
                key: "connect",
                value: function() {
                    this.socket.connect()
                }
            }]),
            e
        }()
          , Ht = Rt
          , $t = function() {
            var e = this
              , t = e._self._c;
            return e.currentConfig ? t("div", {
                staticClass: "hz-chat-header",
                class: 0 === e.onlineStatus ? "header-top" : "",
                style: {
                    backgroundColor: e.currentConfig.color
                }
            }, [t("div", {
                staticClass: "hz-chat-header-box"
            }, [t("div", {
                staticClass: "headimg"
            }, [e.chatInfo ? t("img", {
                staticClass: "avator",
                attrs: {
                    src: e.chatInfo.customerServerDto && e.chatInfo.customerServerDto.avatar || e.headimg,
                    alt: ""
                },
                on: {
                    click: e.headClick
                }
            }) : e._e(), t("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.onlineStatus,
                    expression: "!onlineStatus"
                }],
                staticClass: "hz-icon-_shuijue icon-_shuijue"
            }), t("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.onlineStatus,
                    expression: "onlineStatus"
                }],
                staticClass: "icon-online"
            })]), t("div", {
                staticClass: "person-info"
            }, [t("div", {
                staticClass: "name"
            }, [e.chatInfo ? t("span", [e._v(e._s(e.chatInfo.customerServerDto && e.chatInfo.customerServerDto.nameEn || "Mary"))]) : e._e(), e.onlineStatus ? t("span", {
                staticClass: "online"
            }, [e._v("Active")]) : e._e()]), e.onlineStatus ? t("div", {
                staticClass: "signature ellipsis"
            }, [e._v(e._s(e.chatInfo.customerServerDto && e.chatInfo.customerServerDto.signature || "Ask us anything, or share your feedback."))]) : e._e(), e.chatInfo.customerServerDto ? t("div", {
                staticClass: "origin"
            }, [e.chatInfo.customerServerDto.facebook ? t("a", {
                attrs: {
                    href: e.chatInfo.customerServerDto.facebook,
                    target: "_blank"
                }
            }, [t("i", {
                staticClass: "hz-icon-personal-icon-facebook"
            })]) : e._e(), e.chatInfo.customerServerDto.twitter ? t("a", {
                attrs: {
                    href: e.chatInfo.customerServerDto.twitter,
                    target: "_blank"
                }
            }, [t("i", {
                staticClass: "hz-icon-personal-icon-twitter"
            })]) : e._e(), e.chatInfo.customerServerDto.linkIn ? t("a", {
                attrs: {
                    href: e.chatInfo.customerServerDto.linkIn,
                    target: "_blank"
                }
            }, [t("i", {
                staticClass: "hz-icon-personal-icon-linkin"
            })]) : e._e(), e.chatInfo.customerServerDto.vk ? t("a", {
                attrs: {
                    href: e.chatInfo.customerServerDto.vk,
                    target: "_blank"
                }
            }, [t("i", {
                staticClass: "hz-icon-personal-icon-wk"
            })]) : e._e(), t("div", {
                staticClass: "emial-mobile-box",
                class: e.chatInfo.customerServerDto.email && e.chatInfo.customerServerDto.workPhoneNum ? "two_line" : ""
            }, [e.chatInfo.customerServerDto.email ? t("a", {
                attrs: {
                    href: "mailto:" + e.chatInfo.customerServerDto.email,
                    target: "_blank"
                }
            }, [t("i", {
                staticClass: "hz-icon-personal-icon-email"
            }), e._v(e._s(e.chatInfo.customerServerDto.email))]) : e._e()])]) : e._e()]), e.chatInfo ? t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.chatInfo.isShowFlag,
                    expression: "chatInfo.isShowFlag"
                }],
                staticClass: "header-right"
            }, [t("img", {
                staticClass: "nation-flag",
                attrs: {
                    src: e.chatInfo.avatar,
                    alt: ""
                }
            }), t("img", {
                staticClass: "nation-flag",
                attrs: {
                    src: "https://cdn.huazhi.cloud/flag/country_circle/cn.svg",
                    alt: ""
                }
            })]) : e._e()])]) : e._e()
        }
          , Jt = []
          , qt = {
            name: "chatHeader",
            data: function() {
                return {
                    headimg: re,
                    currentTime: 0
                }
            },
            props: {
                onlineStatus: "",
                currentConfig: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                chatInfo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                avator: "",
                lang: ""
            },
            created: function() {
                this.getCurrentTime(),
                console.info(this.chatInfo)
            },
            computed: {
                showChatModel: function() {
                    return Oe.showChatModel
                }
            },
            methods: {
                headClick: function() {
                    this.showChatModel && this.$emit("click")
                },
                getCurrentTime: function() {
                    var e = this
                      , t = new Date
                      , n = t.getHours() < 10 ? "0" + t.getHours() : t.getHours()
                      , s = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()
                      , i = t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds();
                    this.currentTime = n + ":" + s + ":" + i,
                    setTimeout((function() {
                        e.getCurrentTime()
                    }
                    ), 1e3)
                },
                formatTime: function(e, t) {
                    e = new Date(e);
                    /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
                    var n = {
                        "M+": e.getMonth() + 1,
                        "d+": e.getDate(),
                        "h+": e.getHours(),
                        "m+": e.getMinutes(),
                        "s+": e.getSeconds()
                    };
                    for (var s in n)
                        if (new RegExp("(" + s + ")").test(t)) {
                            var i = n[s] + "";
                            t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? i : ("00" + i).substr(i.length))
                        }
                    return t
                }
            }
        }
          , Ut = qt
          , Wt = (n("12c3"),
        Object(K["a"])(Ut, $t, Jt, !1, null, "09b89038", null))
          , Kt = Wt.exports
          , Yt = function() {
            var e = this
              , t = e._self._c;
            return e.currentConfig ? t("div", {
                staticClass: "hz-launcher",
                class: e.showModelClass ? "hz-opened" : "hz-close",
                style: e.appStyle,
                on: {
                    click: e.toggleWechatStyle
                }
            }, [t("div", {
                staticClass: "hz-launcher-box hz_assit_btn"
            }, [!e.showChatModel && e.noSeeMsgList.length > 0 && !e.showNoMsgModel ? t("div", {
                staticClass: "hz-new-messsages-count"
            }, [e._v("\n        " + e._s(e.noSeeMsgList.length) + "\n        ")]) : e._e(), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showChatModel,
                    expression: "showChatModel"
                }],
                staticClass: "hz-closed-icon",
                style: {
                    backgroundColor: e.currentConfig.btnColor
                }
            }, [t("i", {
                staticClass: "el-icon-close",
                staticStyle: {
                    "font-size": "30px",
                    padding: "9px",
                    "border-radius": "48px"
                }
            })]), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.showChatModel,
                    expression: "!showChatModel"
                }],
                staticClass: "chat_btn_model",
                style: {
                    backgroundColor: e.currentConfig.btnColor
                }
            }, [e._m(0), e.currentConfig.btnText.length > 0 ? t("span", {
                staticClass: "hz-launcher--text hz_assit_btn"
            }, [e._v(e._s(e.multyLang && e.multyLang[e.currentConfig.btnText] ? e.multyLang[e.currentConfig.btnText][e.currentTranslateCode] : "chat us"))]) : e._e()])])]) : e._e()
        }
          , Xt = [function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "hz-open-icon hz_assit_btn"
            }, [t("i", {
                staticClass: "hz-icon-chat_icon icon-chat_icon hz_assit_btn"
            })])
        }
        ]
          , Zt = {
            name: "chatBtn",
            props: {
                currentConfig: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                appStyle: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    showModelClass: !1
                }
            },
            computed: {
                showChatModel: function() {
                    var e = this;
                    return setTimeout((function() {
                        e.showModelClass = Oe.showChatModel
                    }
                    ), 100),
                    Oe.showChatModel
                },
                multyLang: function() {
                    return Oe.multyLang
                },
                currentTranslateCode: function() {
                    return Oe.currentTranslateCode
                },
                showNoMsgModel: function() {
                    return Oe.showNoMsgModel
                },
                noSeeMsgList: function() {
                    return Oe.noSeeList
                }
            },
            methods: {
                toggleWechatStyle: function() {
                    var e = !this.showChatModel;
                    Fe.setShowChatModel(e)
                }
            }
        }
          , Gt = Zt
          , Qt = (n("e428"),
        Object(K["a"])(Gt, Yt, Xt, !1, null, "086e554d", null))
          , en = Qt.exports
          , tn = {
            name: "app",
            components: {
                ChatBtn: en,
                ChatHeader: Kt,
                ChatForm: nt,
                chatSimpleList: Pt,
                chatItem: yt,
                chatArea: Ot,
                imageViewer: Z
            },
            data: function() {
                return {
                    NIM: null,
                    headimg: re,
                    showImgPreview: !1,
                    lastMsgOpt: null,
                    flag: !1,
                    preview: !1,
                    previewSrcList: ["http://ievent.oss-cn-shanghai.aliyuncs.com/public/publicimg/%E6%99%AE%E9%80%9A%E6%A0%8F%E7%9B%AE%E5%88%9D%E5%A7%8B%E5%8C%96%E5%9B%BE.jpg"],
                    lang: "",
                    websocket: null,
                    scrollTop: 0,
                    onlineStatus: 0,
                    currentConfig: null,
                    chatInfo: null,
                    loadingapp: !1,
                    translateCode: "",
                    preFormTag: !1,
                    hasChange: !1,
                    hasSetConfig: !1,
                    appStyle: null,
                    btnStyle: null,
                    isHideForm: !1,
                    hasSubOnlineFormFlag: !1,
                    gclid: "",
                    showChatApp: !0
                }
            },
            created: function() {
                var e = _e("demoServerName");
                this.gclid = _e("gclid"),
                e && setHzLocVal("demoServerName", e, 1),
                this.lang = we(),
                this.queryImInfoAndServer(utilConfig.visitorid),
                window.BrowserName = this.getBrowser()
            },
            mounted: function() {
                window.onfocus = function() {
                    Fe.setWindowOnfocus(!0)
                }
                ,
                window.onblur = function() {
                    Fe.setWindowOnfocus(!1)
                }
                ,
                this.insertJs(ce);
                var e = document.getElementById("hz_chat_app");
                e.onselectstart = function(e) {
                    e.stopPropagation()
                }
            },
            computed: {
                multyLang: function() {
                    return Oe.multyLang
                },
                currentTranslateCode: function() {
                    return Oe.currentTranslateCode
                },
                showChatModel: function() {
                    return Oe.showChatModel
                },
                showNoMsgModel: function() {
                    return Oe.showNoMsgModel
                },
                networkWarning: function() {
                    return Oe.networkWarning
                },
                hasSubOnlineForm: function() {
                    return Oe.hasSubOnlineForm
                },
                msgList: function() {
                    return Oe.msgList.length > 0 ? this.lastMsgOpt = Object.assign({}, Oe.msgList[0]) : this.lastMsgOpt = null,
                    Oe.msgList
                },
                noSeeMsgList: function() {
                    return Oe.noSeeList
                },
                hasHistoryMsg: function() {
                    return Oe.hasHistoryMsg
                },
                loadHistory: function() {
                    var e = this
                      , t = this
                      , n = this.$refs.chatList;
                    return t.$nextTick((function() {
                        n && 0 == Oe.loadHistory && (n.scrollTop = n.scrollHeight - t.scrollTop,
                        e.flag = !1)
                    }
                    )),
                    Oe.loadHistory
                },
                currIsBlack: function() {
                    return Oe.currIsBlack
                },
                isLeaveMessage: function() {
                    return Oe.isLeaveMessage
                },
                showProgerss: function() {
                    return Oe.showProgerss
                },
                percentage: function() {
                    return Oe.percentage
                }
            },
            watch: {
                hasSubOnlineForm: function() {
                    this.hasSubOnlineFormFlag = Oe.hasSubOnlineForm
                },
                isLeaveMessage: function() {
                    console.info("isLeaveMessage", this.isLeaveMessage);
                    var e = this;
                    this.hasChange = Oe.custemInfo.hasChange,
                    this.onlineStatus = this.isLeaveMessage ? 0 : 1,
                    0 == e.onlineStatus ? e.currentConfig = Object.assign({}, Oe.offlineConfig) : e.currentConfig = Object.assign({}, Oe.onlineConfig),
                    this.hasSetConfig || (Fe.setShowChatModel(1 == e.currentConfig.winStatus),
                    this.setCurrentConfig(),
                    this.hasSetConfig = !0)
                }
            },
            methods: {
                getChatStyle: function() {
                    var e = this;
                    hzAjax({
                        type: "get",
                        url: ue + "/chatSytle/enable/" + utilConfig.enterpriseId + "?time=" + (new Date).getTime(),
                        crossDomain: 1 == !document.all,
                        success: function(t) {
                            t.code == e.$successCode && (Fe.setStyleConfig(t.data),
                            Fe.setInitData(e.chatInfo),
                            e.initWebSocket(utilConfig.visitorid),
                            e.preFormTag = t.data.preFormTag)
                        },
                        error: function(e) {}
                    })
                },
                getFormById: function() {
                    var e = this;
                    hzAjax({
                        type: "get",
                        url: me + "/form/field/getOnlineAndOfflineForm?companyId=" + utilConfig.enterpriseId + "&time=" + (new Date).getTime(),
                        crossDomain: 1 == !document.all,
                        success: function(t) {
                            t.code == e.$successCode && (Fe.setForm(t.data),
                            e.languageConfig = Object.assign({}, t.data.languageConfig),
                            e.initMultyLang())
                        },
                        error: function(e) {}
                    })
                },
                initWebSocket: function(e) {
                    Oe.socket = this.websocket = new Ht(e)
                },
                sendMsgReceipt: function() {
                    var e = this.msgList[this.msgList.length - 1].time;
                    Fe.sendMsgReceipt(e)
                },
                queryImInfoAndServer: function(e) {
                    var t = (new Date).getTimezoneOffset() / 60
                      , n = this
                      , s = {
                        companyId: utilConfig.enterpriseId,
                        visitorCode: e,
                        lang: this.lang,
                        timeZone: t,
                        source: window.location.href,
                        brower: n.getBrowser(),
                        deviceType: 0,
                        gclid: n.gclid
                    }
                      , i = getHzLocVal("demoServerName");
                    i && "robot" == i && (s.isRobot = !0),
                    i && "robot" != i && (s.demoServerName = i),
                    this.loadingapp = !1;
                    var a = this.urlEncode(s)
                      , o = (new Date).getTime();
                    hzAjax({
                        type: "get",
                        url: le + "/imVisitorInfo/queryImInfoAndServer?time=" + (new Date).getTime() + a,
                        success: function(t) {
                            if (n.loadingapp = !0,
                            t.code == n.$successCode) {
                                if (t.data) {
                                    n.getFormById(),
                                    n.chatInfo = Object.assign({}, t.data),
                                    n.translateCode = t.data.translateCode,
                                    Fe.setBlack(t.data.isBlack),
                                    t.data.companyId = utilConfig.enterpriseId,
                                    t.data.visitorCode = e,
                                    n.getChatStyle();
                                    var s = t.data.serverTimeStamp
                                      , i = (new Date).getTime();
                                    console.info("服务端时间戳", s),
                                    console.info("web端时间戳", i),
                                    s > i && Fe.setDifferenceTime(s - i + 1e3),
                                    Fe.setServerTime(s - i)
                                }
                            } else
                                this.loadingapp = !0;
                            Fe.saveLog("ajax请求", "queryImInfoAndServer请求成功,所用时间" + ((new Date).getTime() - o) / 1e3)
                        },
                        error: function(e) {
                            Fe.saveLog("ajax请求", "queryImInfoAndServer请求失败,所用时间" + ((new Date).getTime() - o) / 1e3)
                        }
                    })
                },
                initMultyLang: function() {
                    var e = this;
                    hzAjax({
                        type: "get",
                        url: me + "/translationLink/lan/" + utilConfig.enterpriseId,
                        crossDomain: 1 == !document.all,
                        success: function(t) {
                            t.code == e.$successCode && e.setMultyLang(t.data)
                        },
                        error: function(e) {
                            console.info("翻译接口失败")
                        }
                    })
                },
                setMultyLang: function(e) {
                    console.info(this.translateCode);
                    var t = this
                      , n = "";
                    n = 0 === this.languageConfig.configTag ? this.languageConfig.config.split(",").indexOf(t.translateCode) >= 0 || this.languageConfig.config.split(",").indexOf("zhChs") >= 0 && this.translateCode.indexOf("zh") >= 0 ? this.translateCode : "en" : this.languageConfig.config.split(",")[1],
                    this.multyData = Object.assign({}, e),
                    Fe.setCurrentTranslateCode(n),
                    Fe.setMultyLang(t.multyData)
                },
                loadMore: function(e) {
                    var t = this;
                    if (console.info(this.flag),
                    !this.flag && Oe.hasHistoryMsg && this.lastMsgOpt) {
                        var n = e.target
                          , s = n.scrollTop
                          , i = n.scrollHeight;
                        s < 10 && (this.scrollTop = i,
                        this.flag = !0,
                        t.lastMsgOpt.time && this.websocket.vHisMsgLists(t.lastMsgOpt.time))
                    }
                },
                seemore: function() {
                    Fe.setShowChatModel(!0)
                },
                closeModel: function() {
                    Fe.setShowNoMsgModel(!1)
                },
                showImageView: function(e) {
                    this.preview = !0,
                    this.previewSrcList = [e]
                },
                closeViewer: function() {
                    this.preview = !1
                },
                setCurrentConfig: function() {
                    this.currentConfig && this.currentConfig.hasOwnProperty("chatWindowPos") && 1 == this.currentConfig.chatWindowPos ? (this.appStyle = Object.assign({}, {
                        left: "60px",
                        right: "auto"
                    }),
                    this.btnStyle = Object.assign({}, {
                        left: "20px",
                        right: "auto"
                    })) : (this.appStyle = Object.assign({}, {
                        right: "20px",
                        left: "auto"
                    }),
                    this.btnStyle = Object.assign({}, {
                        right: "20px",
                        left: "auto"
                    }))
                },
                getBrowser: function() {
                    try {
                        var e, t = function(e, t) {
                            return e = ("" + e).replace(/_/g, "."),
                            t = t || 1,
                            e = String(e).split("."),
                            e = e[0] + "." + (e[1] || "0"),
                            e = Number(e).toFixed(t),
                            e
                        }, n = function(e, t) {
                            i = e,
                            a = t
                        }, s = navigator.userAgent.toLowerCase(), i = "", a = 0;
                        return (e = s.match(/msie ([\d.]+)/)) ? n("ie", t(e[1])) : (e = s.match(/firefox\/([\d.]+)/)) ? n("firefox", t(e[1])) : (e = s.match(/chrome\/([\d.]+)/)) ? n("chrome", t(e[1])) : (e = s.match(/opera.([\d.]+)/)) ? n("opera", t(e[1])) : (e = s.match(/version\/([\d.]+).*safari/)) && n("safari", t(e[1])),
                        i + "--" + a
                    } catch (o) {
                        return "---"
                    }
                },
                urlEncode: function(e, t, n) {
                    if (null == e)
                        return "";
                    var s = ""
                      , i = Object(O["a"])(e);
                    if ("string" == i || "number" == i || "boolean" == i)
                        s += "&" + t + "=" + (null == n || n ? encodeURIComponent(e) : e);
                    else
                        for (var a in e) {
                            var o = null == t ? a : t + (e instanceof Array ? "[" + a + "]" : "." + a);
                            s += this.urlEncode(e[a], o, n)
                        }
                    return s
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
                }
            }
        }
          , nn = tn
          , sn = (n("b482"),
        Object(K["a"])(nn, I, M, !1, null, null, null))
          , an = sn.exports
          , on = (n("d21e"),
        "001")
          , rn = {
            install: function(e) {
                Object.defineProperty(e.prototype, "$successCode", {
                    value: on
                })
            }
        }
          , cn = {
            successCode: rn
        }
          , ln = (n("0fae"),
        function() {
            var e = this
              , t = e._self._c;
            return e.showWrap ? t("div", {
                staticClass: "hz-message",
                class: "success" == e.way ? "success" : "warning"
            }, [e._v("\n    " + e._s(e.text) + "\n")]) : e._e()
        }
        )
          , un = []
          , mn = {}
          , dn = Object(K["a"])(mn, ln, un, !1, null, null, null)
          , fn = dn.exports
          , hn = x["default"].extend(fn)
          , gn = !0;
        function pn(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "warning"
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2e3;
            if (!1 !== gn) {
                var s = new hn({
                    el: document.createElement("div"),
                    data: function() {
                        return {
                            text: e,
                            showWrap: !0,
                            way: t
                        }
                    }
                })
                  , i = document.getElementById("hz-wechat-main");
                i.appendChild(s.$el),
                gn = !1,
                setTimeout((function() {
                    s.showWrap = !1,
                    gn = !0,
                    s.$el && i.removeChild(s.$el)
                }
                ), n)
            }
        }
        function vn() {
            x["default"].prototype.$message = pn
        }
        var yn = vn;
        Object.keys(cn).forEach((function(e) {
            cn[e].install(x["default"])
        }
        )),
        String.prototype.trimlr = function() {
            return this.replace(/^\s+/, "").replace(/\s+$/, "")
        }
        ,
        x["default"].use(yn),
        x["default"].use(T.a),
        x["default"].use(k.a),
        x["default"].use(_.a),
        x["default"].use(b.a),
        x["default"].use(y.a),
        x["default"].use(p.a),
        x["default"].use(h.a),
        x["default"].use(d.a),
        x["default"].use(u.a),
        x["default"].use(c.a),
        x["default"].use(o.a),
        x["default"].use(i.a),
        x["default"].config.productionTip = !1,
        new x["default"]({
            render: function(e) {
                return e(an)
            }
        }).$mount("#" + window.bindEleId)
    },
    5788: function(e, t, n) {},
    "63f7": function(e, t, n) {},
    7714: function(e, t, n) {},
    "7ac4": function(e, t, n) {
        "use strict";
        n("63f7")
    },
    "88c2": function(e, t, n) {
        "use strict";
        n("116d")
    },
    "8e17": function(e, t, n) {},
    "8e2b": function(e, t, n) {},
    a3df: function(e, t, n) {
        "use strict";
        n("8e17")
    },
    b482: function(e, t, n) {
        "use strict";
        n("0794")
    },
    b795: function(e, t, n) {
        "use strict";
        n("cb70")
    },
    c28b: function(e, t, n) {
        "use strict";
        n("0d0b")
    },
    cb70: function(e, t, n) {},
    cd4e: function(e, t, n) {
        "use strict";
        n("d04b")
    },
    d04b: function(e, t, n) {},
    d21e: function(e, t, n) {},
    e428: function(e, t, n) {
        "use strict";
        n("8e2b")
    },
    ec1d: function(e, t, n) {},
    f50a: function(e, t, n) {
        "use strict";
        n("ec1d")
    },
    f670: function(e, t, n) {}
});
