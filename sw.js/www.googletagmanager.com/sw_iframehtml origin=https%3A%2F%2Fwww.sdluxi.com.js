'use strict';
var ca = function(a) {
    function b(d) {
        return a.next(d)
    }
    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    }
    )
}
  , h = function(a) {
    return ca(a())
};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n = this || self;
var r, x;
a: {
    for (var da = ["CLOSURE_FLAGS"], A = n, B = 0; B < da.length; B++)
        if (A = A[da[B]],
        A == null) {
            x = null;
            break a
        }
    x = A
}
var ea = x && x[610401301];
r = ea != null ? ea : !1;
var E;
const fa = n.navigator;
E = fa ? fa.userAgentData || null : null;
function F(a) {
    return r ? E ? E.brands.some( ({brand: b}) => b && b.indexOf(a) != -1) : !1 : !1
}
function G(a) {
    var b;
    a: {
        const c = n.navigator;
        if (c) {
            const d = c.userAgent;
            if (d) {
                b = d;
                break a
            }
        }
        b = ""
    }
    return b.indexOf(a) != -1
}
;function H() {
    return r ? !!E && E.brands.length > 0 : !1
}
function I() {
    return H() ? F("Chromium") : (G("Chrome") || G("CriOS")) && !(H() ? 0 : G("Edge")) || G("Silk")
}
;!G("Android") || I();
I();
!G("Safari") || I() || (H() ? 0 : G("Coast")) || (H() ? 0 : G("Opera")) || (H() ? 0 : G("Edge")) || (H() ? F("Microsoft Edge") : G("Edg/")) || H() && F("Opera");
var ha = {}
  , J = null
  , ja = function(a) {
    var b = 3;
    b === void 0 && (b = 0);
    ia();
    const c = ha[b]
      , d = Array(Math.floor(a.length / 3))
      , e = c[64] || "";
    let f = 0
      , g = 0;
    for (; f < a.length - 2; f += 3) {
        const p = a[f]
          , q = a[f + 1]
          , y = a[f + 2]
          , v = c[p >> 2]
          , m = c[(p & 3) << 4 | q >> 4]
          , t = c[(q & 15) << 2 | y >> 6]
          , u = c[y & 63];
        d[g++] = "" + v + m + t + u
    }
    let k = 0
      , l = e;
    switch (a.length - f) {
    case 2:
        k = a[f + 1],
        l = c[(k & 15) << 2] || e;
    case 1:
        const p = a[f];
        d[g] = "" + c[p >> 2] + c[(p & 3) << 4 | k >> 4] + l + e
    }
    return d.join("")
}
  , K = function(a) {
    const b = a.length;
    let c = b * 3 / 4;
    c % 3 ? c = Math.floor(c) : "=.".indexOf(a[b - 1]) != -1 && (c = "=.".indexOf(a[b - 2]) != -1 ? c - 2 : c - 1);
    const d = new Uint8Array(c);
    let e = 0;
    ka(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}
  , ka = function(a, b) {
    function c(e) {
        for (; d < a.length; ) {
            const f = a.charAt(d++)
              , g = J[f];
            if (g != null)
                return g;
            if (!/^[\s\xa0]*$/.test(f))
                throw Error("Unknown base64 encoding at char: " + f);
        }
        return e
    }
    ia();
    let d = 0;
    for (; ; ) {
        const e = c(-1)
          , f = c(0)
          , g = c(64)
          , k = c(64);
        if (k === 64 && e === -1)
            break;
        b(e << 2 | f >> 4);
        g != 64 && (b(f << 4 & 240 | g >> 2),
        k != 64 && b(g << 6 & 192 | k))
    }
}
  , ia = function() {
    if (!J) {
        J = {};
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("")
          , b = ["+/=", "+/", "-_=", "-_.", "-_"];
        for (let c = 0; c < 5; c++) {
            const d = a.concat(b[c].split(""));
            ha[c] = d;
            for (let e = 0; e < d.length; e++) {
                const f = d[e];
                J[f] === void 0 && (J[f] = e)
            }
        }
    }
};
/*

 Copyright 2020 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var L = class extends Error {
    constructor(a) {
        super(a);
        Object.setPrototypeOf(this, L.prototype)
    }
}
;
L.prototype.name = "SecurityException";
var M = class extends Error {
    constructor(a) {
        super(a);
        Object.setPrototypeOf(this, M.prototype)
    }
}
;
M.prototype.name = "InvalidArgumentsException";
function N(...a) {
    let b = 0;
    for (let e = 0; e < arguments.length; e++)
        b += arguments[e].length;
    const c = new Uint8Array(b);
    let d = 0;
    for (let e = 0; e < arguments.length; e++)
        c.set(arguments[e], d),
        d += arguments[e].length;
    return c
}
function O(a) {
    const b = a.replace(/-/g, "+").replace(/_/g, "/");
    return P(globalThis.atob(b))
}
function la(a) {
    let b = "";
    for (let c = 0; c < a.length; c += 1)
        b += String.fromCharCode(a[c]);
    return globalThis.btoa(b).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
}
function P(a) {
    const b = [];
    let c = 0;
    for (let d = 0; d < a.length; d++) {
        const e = a.charCodeAt(d);
        b[c++] = e
    }
    return new Uint8Array(b)
}
;/*

 Copyright 2022 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var ma = function(a, b, c, d) {
    return h(function*() {
        if (c.length < (a.l ? 28 : 16))
            throw new L("ciphertext too short");
        if (b.length !== 12)
            throw new L("IV must be 12 bytes");
        const e = {
            name: "AES-GCM",
            iv: b,
            tagLength: 128
        };
        d && (e.additionalData = d);
        const f = a.l ? new Uint8Array(c.subarray(12)) : c;
        try {
            return new Uint8Array(yield globalThis.crypto.subtle.decrypt(e, a.key, f))
        } catch (g) {
            throw new L(g.toString());
        }
    })
}
  , na = class {
    constructor({key: a, l: b}) {
        this.key = a;
        this.l = b
    }
    encrypt(a, b, c) {
        const d = this;
        return h(function*() {
            if (a.length !== 12)
                throw new L("IV must be 12 bytes");
            const e = {
                name: "AES-GCM",
                iv: a,
                tagLength: 128
            };
            c && (e.additionalData = c);
            const f = yield globalThis.crypto.subtle.encrypt(e, d.key, b);
            return d.l ? N(a, new Uint8Array(f)) : new Uint8Array(f)
        })
    }
}
;
function oa({key: a, l: b}) {
    return h(function*() {
        if (![16, 32].includes(a.length))
            throw new M("unsupported AES key size: ${n}");
        const c = yield globalThis.crypto.subtle.importKey("raw", a, {
            name: "AES-GCM",
            length: a.length
        }, !1, ["encrypt", "decrypt"]);
        return new na({
            key: c,
            l: b
        })
    })
}
;function pa(a) {
    switch (a) {
    case 1:
        return "P-256";
    case 2:
        return "P-384";
    case 3:
        return "P-521"
    }
}
function Q(a) {
    switch (a) {
    case "P-256":
        return 1;
    case "P-384":
        return 2;
    case "P-521":
        return 3
    }
    throw new M("unknown curve: " + a);
}
function S(a) {
    switch (a) {
    case 1:
        return 32;
    case 2:
        return 48;
    case 3:
        return 66
    }
}
function qa(a, b) {
    return h(function*() {
        const c = a.algorithm.namedCurve;
        if (!c)
            throw new M("namedCurve must be provided");
        const d = Object.assign({}, {
            "public": b
        }, a.algorithm)
          , e = 8 * S(Q(c))
          , f = yield globalThis.crypto.subtle.deriveBits(d, a, e);
        return new Uint8Array(f)
    })
}
function ra(a) {
    return h(function*() {
        return yield globalThis.crypto.subtle.generateKey({
            name: "ECDH",
            namedCurve: a
        }, !0, ["deriveKey", "deriveBits"])
    })
}
function sa(a) {
    return h(function*() {
        const b = yield globalThis.crypto.subtle.exportKey("jwk", a);
        if (b.crv === void 0)
            throw new M("crv must be provided");
        const c = S(Q(b.crv));
        if (b.x === void 0)
            throw new M("x must be provided");
        if (b.y === void 0)
            throw new M("y must be provided");
        const d = O(b.x);
        if (d.length !== c)
            throw new M(`x-coordinate byte-length is invalid (got: ${d.length}, want: ${c}).`);
        const e = O(b.y);
        if (e.length !== c)
            throw new M(`y-coordinate byte-length is invalid (got: ${e.length}, want: ${c}).`);
        return b
    })
}
function ta(a) {
    return h(function*() {
        const b = a.crv;
        if (!b)
            throw new M("crv must be provided");
        return yield globalThis.crypto.subtle.importKey("jwk", a, {
            name: "ECDH",
            namedCurve: b
        }, !0, [])
    })
}
;var ua = T(1, 0)
  , va = T(2, 16)
  , wa = T(2, 18)
  , xa = T(2, 1)
  , ya = T(2, 3)
  , za = T(2, 1)
  , Aa = T(2, 2)
  , Ba = P("KEM")
  , Ca = P("HPKE")
  , Da = P("HPKE-v1");
function T(a, b) {
    const c = new Uint8Array(a);
    for (let d = 0; d < a; d++)
        c[d] = b >> 8 * (a - d - 1) & 255;
    return c
}
function Ea({J: a, I: b, F: c}) {
    return N(Ca, a, b, c)
}
function Ga({o: a, m: b, i: c}) {
    return N(Da, c, P(a), b)
}
function Ha({s: a, info: b, i: c, length: d}) {
    return N(T(2, d), Da, c, P(a), b)
}
function Ia(a, b) {
    return h(function*() {
        var c;
        {
            const d = S(Q(a));
            if (b.length !== 1 + 2 * d || b[0] !== 4)
                throw new L("invalid point");
            c = {
                kty: "EC",
                crv: a,
                x: la(new Uint8Array(b.subarray(1, 1 + d))),
                y: la(new Uint8Array(b.subarray(1 + d, b.length))),
                ext: !0
            }
        }
        return yield ta(c)
    })
}
function Ja(a) {
    return h(function*() {
        const b = a.algorithm
          , c = yield sa(a);
        if (!c.crv)
            throw new L("Curve has to be defined.");
        var d;
        {
            const e = S(Q(b.namedCurve))
              , f = c.x
              , g = c.y;
            if (f === void 0)
                throw new M("x must be provided");
            if (g === void 0)
                throw new M("y must be provided");
            const k = new Uint8Array(1 + 2 * e)
              , l = O(g)
              , p = O(f);
            k.set(l, 1 + 2 * e - l.length);
            k.set(p, 1 + e - p.length);
            k[0] = 4;
            d = k
        }
        return d
    })
}
;var Ka = class {
    constructor(a) {
        this.A = a
    }
    seal({key: a, nonce: b, L: c, B: d}) {
        const e = this;
        return h(function*() {
            if (a.length !== e.A)
                throw new L("Unexpected key length: " + a.length.toString());
            return yield(yield oa({
                key: a,
                l: !1
            })).encrypt(b, c, d)
        })
    }
    open({key: a, nonce: b, G: c, B: d}) {
        const e = this;
        return h(function*() {
            if (a.length !== e.A)
                throw new L("Unexpected key length: " + a.length.toString());
            return ma(yield oa({
                key: a,
                l: !1
            }), b, c, d)
        })
    }
}
;
var La = class {
}
;
function U(a) {
    if (a == null || !(a instanceof Uint8Array))
        throw new M("input must be a non null Uint8Array");
}
;var Ma = function(a, b) {
    return h(function*() {
        U(b);
        const c = yield globalThis.crypto.subtle.sign({
            name: "HMAC",
            hash: {
                name: a.hash
            }
        }, a.key, b);
        return new Uint8Array(c.slice(0, a.g))
    })
}
  , Na = class extends La {
    constructor(a, b, c) {
        super();
        this.hash = a;
        this.key = b;
        this.g = c
    }
}
;
function Oa(a, b, c) {
    return h(function*() {
        U(b);
        if (!Number.isInteger(c))
            throw new M("invalid tag size, must be an integer");
        if (c < 10)
            throw new M("tag too short, must be at least " + (10).toString() + " bytes");
        switch (a) {
        case "SHA-1":
            if (c > 20)
                throw new M("tag too long, must not be larger than 20 bytes");
            break;
        case "SHA-256":
            if (c > 32)
                throw new M("tag too long, must not be larger than 32 bytes");
            break;
        case "SHA-384":
            if (c > 48)
                throw new M("tag too long, must not be larger than 48 bytes");
            break;
        case "SHA-512":
            if (c > 64)
                throw new M("tag too long, must not be larger than 64 bytes");
            break;
        default:
            throw new M(a + " is not supported");
        }
        const d = yield globalThis.crypto.subtle.importKey("raw", b, {
            name: "HMAC",
            hash: {
                name: a
            },
            length: b.length * 8
        }, !1, ["sign", "verify"]);
        return new Na(a,d,c)
    })
}
;var Pa = function(a, b, c) {
    return h(function*() {
        U(b);
        const d = V(a);
        let e;
        ((e = c) == null ? 0 : e.length) || (c = new Uint8Array(d));
        U(c);
        return yield Ma(yield Oa(a.u, c, d), b)
    })
}
  , W = function(a, {m: b, o: c, i: d, salt: e}) {
    return h(function*() {
        return yield Pa(a, Ga({
            o: c,
            m: b,
            i: d
        }), e)
    })
}
  , Qa = function(a, b, c, d) {
    return h(function*() {
        if (!Number.isInteger(d))
            throw new L("length must be an integer");
        if (d <= 0)
            throw new L("length must be positive");
        const e = V(a);
        if (d > 255 * e)
            throw new L("length too large");
        U(c);
        const f = yield Oa(a.u, b, e);
        let g = 1
          , k = 0
          , l = new Uint8Array(0);
        const p = new Uint8Array(d);
        for (; ; ) {
            const q = new Uint8Array(l.length + c.length + 1);
            q.set(l, 0);
            q.set(c, l.length);
            q[q.length - 1] = g;
            l = yield Ma(f, q);
            if (k + l.length < d)
                p.set(l, k),
                k += l.length,
                g++;
            else {
                p.set(l.subarray(0, d - k), k);
                break
            }
        }
        return p
    })
}
  , Ra = function(a, {D: b, info: c, s: d, i: e, length: f}) {
    return h(function*() {
        return yield Qa(a, b, Ha({
            s: d,
            info: c,
            i: e,
            length: f
        }), f)
    })
}
  , Sa = function(a, {m: b, o: c, info: d, s: e, i: f, length: g, salt: k}) {
    return h(function*() {
        const l = yield Pa(a, Ga({
            o: c,
            m: b,
            i: f
        }), k);
        return yield Qa(a, l, Ha({
            s: e,
            info: d,
            i: f,
            length: g
        }), g)
    })
}
  , V = function(a) {
    switch (a.u) {
    case "SHA-256":
        return 32;
    case "SHA-512":
        return 64
    }
}
  , X = class {
    constructor(a) {
        this.u = a
    }
}
;
var Ta = function(a) {
    var b = a.g;
    const c = new Uint8Array(12);
    for (let f = 0; f < 12; f++)
        c[f] = Number(b >> BigInt(8 * (12 - f - 1))) & 255;
    var d = a.h;
    if (d.length !== c.length)
        throw new M("Both byte arrays should be of the same length");
    const e = new Uint8Array(d.length);
    for (let f = 0; f < e.length; f++)
        e[f] = d[f] ^ c[f];
    if (a.g >= a.j)
        throw new L("message limit reached");
    a.g += BigInt(1);
    return e
}
  , Ua = class {
    constructor(a, b, c, d) {
        this.C = a;
        this.key = b;
        this.h = c;
        this.aead = d;
        this.g = BigInt(0);
        this.j = (BigInt(1) << BigInt(96)) - BigInt(1)
    }
    seal(a, b) {
        const c = this;
        return h(function*() {
            const d = Ta(c);
            return yield c.aead.seal({
                key: c.key,
                nonce: d,
                L: a,
                B: b
            })
        })
    }
    open(a, b) {
        const c = this;
        return h(function*() {
            const d = Ta(c);
            return c.aead.open({
                key: c.key,
                nonce: d,
                G: a,
                B: b
            })
        })
    }
}
;
function Va(a, b, c, d, e, f) {
    return h(function*() {
        var g;
        a: {
            switch (e.A) {
            case 16:
                g = za;
                break a;
            case 32:
                g = Aa;
                break a
            }
            g = void 0
        }
        var k;
        a: {
            switch (d.u) {
            case "SHA-256":
                k = xa;
                break a;
            case "SHA-512":
                k = ya;
                break a
            }
            k = void 0
        }
        const l = Ea({
            J: Wa(c),
            I: k,
            F: g
        })
          , p = W(d, {
            m: new Uint8Array(0),
            o: "psk_id_hash",
            i: l
        })
          , q = yield W(d, {
            m: f,
            o: "info_hash",
            i: l
        })
          , y = yield p
          , v = N(ua, y, q)
          , m = yield W(d, {
            m: new Uint8Array(0),
            o: "secret",
            i: l,
            salt: b
        })
          , t = Ra(d, {
            D: m,
            info: v,
            s: "key",
            i: l,
            length: e.A
        })
          , u = yield Ra(d, {
            D: m,
            info: v,
            s: "base_nonce",
            i: l,
            length: 12
        })
          , w = yield t;
        return new Ua(a,w,u,e)
    })
}
function Xa(a, b, c, d, e) {
    return h(function*() {
        const f = yield Ya(b, a);
        return yield Va(f.C, f.M, b, c, d, e)
    })
}
;var Za = function(a) {
    return h(function*() {
        return yield Ja(a.publicKey)
    })
}
  , $a = class {
    constructor(a, b) {
        this.privateKey = a;
        this.publicKey = b
    }
}
;
function ab(a) {
    return h(function*() {
        bb(a.privateKey, "private");
        bb(a.publicKey, "public");
        return new $a(a.privateKey,a.publicKey)
    })
}
function bb(a, b) {
    if (b !== a.type)
        throw new M(`keyPair ${b} key was of type ${a.type}`);
    const c = a.algorithm;
    if ("ECDH" !== c.name)
        throw new M(`keyPair ${b} key should be ECDH but found ${c.name}`);
}
;var db = function(a) {
    switch (a) {
    case 1:
        return new cb(new X("SHA-256"),1);
    case 3:
        return new cb(new X("SHA-512"),3)
    }
}
  , Wa = function(a) {
    switch (a.g) {
    case 1:
        return va;
    case 3:
        return wa
    }
}
  , Ya = function(a, b) {
    return h(function*() {
        const c = yield ra(pa(a.g));
        return yield a.h(b, yield ab(c))
    })
}
  , eb = function(a, b, c, d) {
    return h(function*() {
        const e = N(c, d)
          , f = N(Ba, Wa(a));
        return yield Sa(a.j, {
            m: b,
            o: "eae_prk",
            info: e,
            s: "shared_secret",
            i: f,
            length: V(a.j)
        })
    })
}
  , cb = class {
    constructor(a, b) {
        this.j = a;
        this.g = b;
        this.TEST_ONLY = this.h
    }
    h(a, b) {
        const c = this;
        return h(function*() {
            const d = yield Ia(pa(c.g), a)
              , e = qa(b.privateKey, d)
              , f = yield Za(b)
              , g = yield e;
            return {
                M: yield eb(c, g, f, a),
                C: f
            }
        })
    }
}
;
/*

 Copyright 2024 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function fb(a, b) {
    var c;
    c || (c = new Uint8Array(0));
    let d, e, f;
    switch (a) {
    case 1:
        d = db(1);
        e = new X("SHA-256");
        f = new Ka(16);
        break;
    case 2:
        d = db(3);
        e = new X("SHA-512");
        f = new Ka(32);
        break;
    default:
        throw new L(`Unknown HPKE parameters: ${a}`);
    }
    let g = Xa(b, d, e, f, c);
    return k => h(function*() {
        if (!g)
            throw new L("Context has already been used");
        const l = g;
        g = null;
        const p = yield l
          , q = yield p.seal(k, new Uint8Array(0));
        return N(p.C, q)
    })
}
;var gb = function(a, b) {
    return h(function*() {
        if (a.status)
            return Y(a.status);
        try {
            const e = K(a.v(b))
              , f = yield a.context(e);
            var c;
            if (f.length <= 8192)
                c = String.fromCharCode.apply(null, f);
            else {
                var d = "";
                for (let k = 0; k < f.length; k += 8192)
                    d += String.fromCharCode.apply(null, Array.prototype.slice.call(f, k, k + 8192));
                c = d
            }
            let g = a.v(c);
            g = g.replace(/\//g, "_");
            g = g.replace(/\+/g, "-");
            return Y(0, g)
        } catch (e) {
            return Y(6)
        }
    })
}
  , ib = class {
    constructor(a, b) {
        this.h = 0;
        this.context = () => h(function*() {
            return new Uint8Array(0)
        });
        this.v = f => b(f);
        if (a) {
            this.K = a.id;
            var c = a.hpkePublicKey.params.kem
              , d = a.hpkePublicKey.params.kdf
              , e = a.hpkePublicKey.params.aead;
            if (c === "DHKEM_P521_HKDF_SHA512" && d === "HKDF_SHA512" && e === "AES_256_GCM")
                this.g = 2,
                this.j = a;
            else if (c === "DHKEM_P256_HKDF_SHA256" && d === "HKDF_SHA256" && e === "AES_128_GCM")
                this.g = 1,
                this.j = a;
            else {
                this.status = 7;
                return
            }
            try {
                let f;
                const g = K((f = this.j) == null ? void 0 : f.hpkePublicKey.publicKey);
                g && this.g ? this.context = fb(this.g, g) : this.status = 11
            } catch (f) {
                this.status = 6
            }
        } else
            this.status = 8
    }
    setTimeout(a) {
        this.h = a
    }
    encrypt(a) {
        const b = gb(this, a);
        return this.h ? Promise.race([b, hb(this.h).then( () => Y(14))]) : b
    }
    getEncryptionKeyId() {
        return this.K
    }
}
;
function Y(a, b) {
    return a === 0 ? {
        cipherText: b,
        status: a
    } : {
        status: a
    }
}
function hb(a) {
    return new Promise(b => void setTimeout(b, a))
}
;function jb(a) {
    switch (a) {
    case 0:
        break;
    case 9:
        return "e4";
    case 6:
        return "e5";
    case 14:
        return "e6";
    default:
        return "e7"
    }
}
;const kb = /^[0-9A-Fa-f]{64}$/;
function lb(a) {
    try {
        return (new TextEncoder).encode(a)
    } catch (b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            let e = a.charCodeAt(d);
            e < 128 ? c.push(e) : e < 2048 ? c.push(192 | e >> 6, 128 | e & 63) : e < 55296 || e >= 57344 ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023),
            c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
        }
        return new Uint8Array(c)
    }
}
function mb(a, b) {
    if (a === "" || a === "e0")
        return Promise.resolve(a);
    let c;
    if ((c = b.crypto) == null ? 0 : c.subtle) {
        if (kb.test(a))
            return Promise.resolve(a);
        try {
            const d = lb(a);
            return b.crypto.subtle.digest("SHA-256", d).then(e => {
                const f = Array.from(new Uint8Array(e)).map(g => String.fromCharCode(g)).join("");
                return b.btoa(f).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
            }
            ).catch( () => "e2")
        } catch (d) {
            return Promise.resolve("e2")
        }
    } else
        return Promise.resolve("e1")
}
;var nb = class {
}
;
var ob = class extends nb {
    constructor(a) {
        super();
        this.key = a;
        this.g = new na({
            key: a,
            l: !0
        })
    }
    encrypt(a, b) {
        const c = this;
        return h(function*() {
            if (!Number.isInteger(12))
                throw new M("n must be a nonnegative integer");
            const d = new Uint8Array(12);
            globalThis.crypto.getRandomValues(d);
            return c.g.encrypt(d, a, b)
        })
    }
}
;
const Z = {};
function pb(a) {
    var b = globalThis.btoa;
    Z[a] = Z[a] || qb(a);
    const c = rb()
      , d = c.then(f => sb(f))
      , e = Promise.all([Z[a], d]).then( ([f,g]) => tb(f, g));
    return {
        encryptMessage: f => h(function*() {
            const g = (new ob(yield c)).encrypt(K(b(f)));
            return {
                encryptedExportedAesKeyAsBase64: ja(new Uint8Array(yield e)),
                encryptedPayloadAsBase64: ja(yield g)
            }
        })
    }
}
function rb() {
    return h(function*() {
        return globalThis.crypto.subtle.generateKey({
            name: "AES-GCM",
            length: 256
        }, !0, ["encrypt", "decrypt"])
    })
}
function sb(a) {
    return h(function*() {
        return globalThis.crypto.subtle.exportKey("raw", a)
    })
}
function tb(a, b) {
    return h(function*() {
        return globalThis.crypto.subtle.encrypt({
            name: "RSA-OAEP"
        }, a, b)
    })
}
function qb(a) {
    return h(function*() {
        return globalThis.crypto.subtle.importKey("spki", K(a), {
            name: "RSA-OAEP",
            hash: {
                name: "SHA-256"
            }
        }, !1, ["encrypt"])
    })
}
;/*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
var ub = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
  , vb = function(a) {
    var b;
    if (!(b = !a)) {
        var c;
        if (a == null)
            c = String(a);
        else {
            var d = ub.exec(Object.prototype.toString.call(Object(a)));
            c = d ? d[1].toLowerCase() : "object"
        }
        b = c != "object"
    }
    if (b || a.nodeType || a == a.window)
        return !1;
    try {
        if (a.constructor && !Object.prototype.hasOwnProperty.call(Object(a), "constructor") && !Object.prototype.hasOwnProperty.call(Object(a.constructor.prototype), "isPrototypeOf"))
            return !1
    } catch (f) {
        return !1
    }
    for (var e in a)
        ;
    return e === void 0 || Object.prototype.hasOwnProperty.call(Object(a), e)
};
var wb = function(a, b) {
    b = a.g + b;
    let c = b.indexOf("\n\n");
    for (; c !== -1; ) {
        var d;
        a: {
            const [w,C] = b.substring(0, c).split("\n");
            if (w.indexOf("event: message") === 0 && C.indexOf("data: ") === 0)
                try {
                    d = JSON.parse(C.substring(C.indexOf(":") + 1));
                    break a
                } catch (z) {}
            d = void 0
        }
        var e = a
          , f = d;
        if (f) {
            var g = f.send_pixel
              , k = f.options
              , l = e.h;
            if (g) {
                var p = g || [];
                if (Array.isArray(p)) {
                    var q = vb(k) ? k : {};
                    for (const w of p)
                        l(w, q)
                }
            }
            var y = f.create_iframe
              , v = f.options
              , m = e.j;
            if (y && m) {
                var t = y || [];
                if (Array.isArray(t)) {
                    var u = vb(v) ? v : {};
                    for (const w of t)
                        m(w, u)
                }
            }
        }
        b = b.substring(c + 2);
        c = b.indexOf("\n\n")
    }
    a.g = b
}
  , xb = class {
    constructor(a) {
        this.h = a;
        this.g = ""
    }
}
;
var yb = {
    N: 0,
    O: 1,
    0: "GET",
    1: "POST"
};
var Ab = function(a, b, c) {
    return h(function*() {
        var d;
        a: {
            try {
                const g = JSON.parse(c.encryptionKeyString || "").keys
                  , k = g[Math.floor(Math.random() * g.length)];
                d = k && k.hpkePublicKey && k.hpkePublicKey.params && k.hpkePublicKey.params.kem && k.hpkePublicKey.params.kdf && k.hpkePublicKey.params.aead && k.hpkePublicKey.version !== void 0 && k.id && k.hpkePublicKey.publicKey ? k : void 0;
                break a
            } catch (g) {}
            d = void 0
        }
        const e = d
          , f = new ib(e,a.g.btoa);
        return zb(a, a.g.performance.now(), (e == null ? void 0 : e.id) || "undefined", f.encrypt(b))
    })
}
  , Bb = function(a, b, c) {
    return h(function*() {
        return zb(a, a.g.performance.now(), "unknown", pb(c.encryptionKeyString || "").encryptMessage(b).then(d => ({
            cipherText: d.encryptedPayloadAsBase64 + "!" + d.encryptedExportedAesKeyAsBase64,
            status: 0
        })))
    })
}
  , Eb = function(a, b) {
    return h(function*() {
        if (!b.url)
            return {
                failureType: 9,
                command: 0,
                data: "url required."
            };
        const c = yield Cb(a, b);
        if ("failureType"in c)
            return c;
        yield Db(a, c, b);
        return c
    })
}
  , Fb = function(a, b, c, d) {
    h(function*() {
        let e;
        const f = b.commandType
          , g = b.params;
        switch (f) {
        case 0:
            e = yield Eb(a, g);
            break;
        default:
            e = {
                failureType: 8,
                command: f,
                data: `Command with type ${f} unknown.`
            }
        }
        "failureType"in e ? d(e) : c(e)
    })
}
  , Cb = function(a, b) {
    return h(function*() {
        function c(m) {
            return h(function*() {
                const [t,u] = m.split("|");
                let[w,C] = t.split(".")
                  , z = C
                  , D = k[w];
                D || (D = t,
                z = "");
                const ba = R => h(function*() {
                    try {
                        return yield y(u)(R)
                    } catch (aa) {
                        throw new Gb(aa.message);
                    }
                });
                if (!z) {
                    if (typeof D === "string")
                        return yield ba(D);
                    const R = D
                      , aa = Object.keys(R).map(Fa => h(function*() {
                        const Ib = yield ba(R[Fa]);
                        return `${Fa}=${Ib}`
                    }));
                    return (yield Promise.all(aa)).join("&")
                }
                return typeof D === "object" && D[z] ? yield ba(D[z]) : m
            })
        }
        function d(m) {
            return h(function*() {
                let t, u = "";
                for (; m.match(q) && u !== m; ) {
                    u = m;
                    t = m.matchAll(q);
                    const w = [...t].map(z => c(z[1]))
                      , C = yield Promise.all(w);
                    C.length !== 0 && (m = m.replace(q, z => C.shift() || z))
                }
                return m
            })
        }
        let {url: e, body: f} = b;
        const {attributionReporting: g, templates: k, processResponse: l, method: p=0} = b
          , q = RegExp("\\${([^${}]*?)}", "g")
          , y = m => {
            if (m == null)
                return u => h(function*() {
                    return u
                });
            const t = a.h[m];
            if (t == null)
                throw Error(`Unknown filter: ${m}`);
            return u => h(function*() {
                return yield t(u, b)
            })
        }
        ;
        try {
            e = yield d(e),
            f = f ? yield d(f) : void 0
        } catch (m) {
            return {
                failureType: 9,
                command: 0,
                data: `Failed to inject template values: ${m}`
            }
        }
        const v = {
            method: yb[p],
            credentials: "include",
            body: p === 1 ? f : void 0,
            keepalive: !0,
            redirect: "follow"
        };
        l || (v.mode = "no-cors");
        g && (v.attributionReporting = {
            eventSourceEligible: !1,
            triggerEligible: !0
        });
        try {
            const m = yield a.g.fetch(e, v);
            return l && !m.ok ? {
                failureType: 9,
                command: 0,
                data: "Fetch failed"
            } : {
                data: l ? yield m.text() : e
            }
        } catch (m) {
            return {
                failureType: 9,
                command: 0,
                data: `Fetch failed: ${m}`
            }
        }
    })
}
  , Db = function(a, b, c) {
    return h(function*() {
        if (c.processResponse) {
            var d = [];
            wb(new xb( (e, f) => {
                d.push(Cb(a, {
                    url: e,
                    method: 0,
                    templates: c.templates,
                    processResponse: !1,
                    attributionReporting: f.attribution_reporting
                }))
            }
            ), b.data);
            return Promise.all(d)
        }
    })
}
  , zb = function(a, b, c, d) {
    return d.then(e => {
        const f = a.g.performance.now()
          , g = [`emkid.${c}~`, `ev.${encodeURIComponent(e.cipherText || "")}`, `&_es=${e.status}`];
        b && f && g.push(`&_est=${Math.round(f) - Math.round(b)}`);
        return g.join("")
    }
    , () => [`ec.${jb(15)}`, "&_es=15"].join("")).catch( () => [`ec.${jb(16)}`, "&_es=16"].join(""))
}
  , Hb = class {
    constructor(a) {
        this.g = a;
        this.h = {
            sha256: b => {
                const c = this;
                return h(function*() {
                    return yield mb(b, c.g)
                })
            }
            ,
            encode: b => h(function*() {
                return encodeURIComponent(b)
            }),
            encrypt: (b, c) => {
                const d = this;
                return h(function*() {
                    return yield Ab(d, b, c)
                })
            }
            ,
            encryptRsa: (b, c) => {
                const d = this;
                return h(function*() {
                    return yield Bb(d, b, c)
                })
            }
        }
    }
}
;
class Gb extends Error {
    constructor(a) {
        super(a)
    }
}
;var Jb = function(a, b, c) {
    a.g[b] == null && (a.g[b] = 0,
    a.h[b] = c,
    a.j++);
    a.g[b]++;
    return {
        targetId: a.id,
        clientCount: a.j,
        totalLifeMs: Math.round(c - a.v),
        heartbeatCount: a.g[b],
        clientLifeMs: Math.round(c - a.h[b])
    }
};
class Kb {
    constructor(a) {
        this.v = a;
        this.g = {};
        this.h = {};
        this.j = 0;
        this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()))
    }
}
function Lb(a) {
    return a.performance && a.performance.now() || Date.now()
}
var Mb = function(a, b) {
    class c {
        constructor(d, e) {
            this.h = d;
            this.g = e;
            this.j = new Kb(Lb(e))
        }
        H(d, e) {
            const f = d.clientId;
            if (d.type === 0)
                d.stats = Jb(this.j, f, Lb(this.g)),
                e(d);
            else if (d.type === 1)
                try {
                    this.h(d.command, g => {
                        d.result = g;
                        e(d)
                    }
                    , g => {
                        d.failure = g;
                        e(d)
                    }
                    )
                } catch (g) {
                    d.failure = {
                        failureType: 11,
                        data: g.toString()
                    },
                    e(d)
                }
        }
    }
    return new c(a,b)
};
(function(a) {
    a.g.addEventListener("install", () => {
        a.g.skipWaiting()
    }
    );
    a.g.addEventListener("activate", b => {
        b.waitUntil(a.g.clients.claim())
    }
    );
    a.g.addEventListener("message", b => {
        const c = b.source;
        if (c) {
            var d = b.data
              , e = new Promise(f => {
                a.h.H(d, g => {
                    c.postMessage(g);
                    f(void 0)
                }
                )
            }
            );
            b.waitUntil(e)
        }
    }
    )
}
)(new class {
    constructor(a) {
        this.g = a;
        const b = new Hb(a);
        this.h = Mb( (c, d, e) => {
            Fb(b, c, d, e)
        }
        , a)
    }
}
(self));
