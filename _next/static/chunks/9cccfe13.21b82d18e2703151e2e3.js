(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [6], {
        nGfp: function(t, e, r) {
            "use strict";
            (function(t) {
                r.d(e, "a", (function() {
                    return Fs
                })), r.d(e, "b", (function() {
                    return Je
                })), r.d(e, "c", (function() {
                    return er
                }));
                var s = r("th1C"),
                    n = r.n(s),
                    i = r("qykS"),
                    o = r("lFT9"),
                    c = r.n(o),
                    a = r("Mv5X"),
                    u = r.n(a),
                    h = r("oJdY"),
                    l = r("rNNX"),
                    b = r("OlIQ"),
                    d = r("pCPc"),
                    p = r("wpfB"),
                    f = r.n(p),
                    g = r("Uu6Z"),
                    m = r.n(g),
                    y = r("1sp3"),
                    j = r.n(y);
                const O = t => i.Buffer.isBuffer(t) ? t : t instanceof Uint8Array ? i.Buffer.from(t.buffer, t.byteOffset, t.byteLength) : i.Buffer.from(t);
                var w = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof t ? t : "undefined" !== typeof self ? self : {};

                function k(t) {
                    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
                }
                var S = {},
                    _ = {},
                    I = A;

                function A(t, e) {
                    if (!t) throw new Error(e || "Assertion failed")
                }
                A.equal = function(t, e, r) {
                    if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e)
                };
                var E = {
                    exports: {}
                };
                "function" === typeof Object.create ? E.exports = function(t, e) {
                    t.super_ = e, t.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    })
                } : E.exports = function(t, e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                };
                var v = I,
                    P = E.exports;

                function B(t, e) {
                    return 55296 === (64512 & t.charCodeAt(e)) && (!(e < 0 || e + 1 >= t.length) && 56320 === (64512 & t.charCodeAt(e + 1)))
                }

                function R(t) {
                    return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
                }

                function x(t) {
                    return 1 === t.length ? "0" + t : t
                }

                function T(t) {
                    return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t
                }
                _.inherits = P, _.toArray = function(t, e) {
                    if (Array.isArray(t)) return t.slice();
                    if (!t) return [];
                    var r = [];
                    if ("string" === typeof t)
                        if (e) {
                            if ("hex" === e)
                                for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 && (t = "0" + t), n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16))
                        } else
                            for (var s = 0, n = 0; n < t.length; n++) {
                                var i = t.charCodeAt(n);
                                i < 128 ? r[s++] = i : i < 2048 ? (r[s++] = i >> 6 | 192, r[s++] = 63 & i | 128) : B(t, n) ? (i = 65536 + ((1023 & i) << 10) + (1023 & t.charCodeAt(++n)), r[s++] = i >> 18 | 240, r[s++] = i >> 12 & 63 | 128, r[s++] = i >> 6 & 63 | 128, r[s++] = 63 & i | 128) : (r[s++] = i >> 12 | 224, r[s++] = i >> 6 & 63 | 128, r[s++] = 63 & i | 128)
                            } else
                                for (n = 0; n < t.length; n++) r[n] = 0 | t[n];
                    return r
                }, _.toHex = function(t) {
                    for (var e = "", r = 0; r < t.length; r++) e += x(t[r].toString(16));
                    return e
                }, _.htonl = R, _.toHex32 = function(t, e) {
                    for (var r = "", s = 0; s < t.length; s++) {
                        var n = t[s];
                        "little" === e && (n = R(n)), r += T(n.toString(16))
                    }
                    return r
                }, _.zero2 = x, _.zero8 = T, _.join32 = function(t, e, r, s) {
                    var n = r - e;
                    v(n % 4 === 0);
                    for (var i = new Array(n / 4), o = 0, c = e; o < i.length; o++, c += 4) {
                        var a;
                        a = "big" === s ? t[c] << 24 | t[c + 1] << 16 | t[c + 2] << 8 | t[c + 3] : t[c + 3] << 24 | t[c + 2] << 16 | t[c + 1] << 8 | t[c], i[o] = a >>> 0
                    }
                    return i
                }, _.split32 = function(t, e) {
                    for (var r = new Array(4 * t.length), s = 0, n = 0; s < t.length; s++, n += 4) {
                        var i = t[s];
                        "big" === e ? (r[n] = i >>> 24, r[n + 1] = i >>> 16 & 255, r[n + 2] = i >>> 8 & 255, r[n + 3] = 255 & i) : (r[n + 3] = i >>> 24, r[n + 2] = i >>> 16 & 255, r[n + 1] = i >>> 8 & 255, r[n] = 255 & i)
                    }
                    return r
                }, _.rotr32 = function(t, e) {
                    return t >>> e | t << 32 - e
                }, _.rotl32 = function(t, e) {
                    return t << e | t >>> 32 - e
                }, _.sum32 = function(t, e) {
                    return t + e >>> 0
                }, _.sum32_3 = function(t, e, r) {
                    return t + e + r >>> 0
                }, _.sum32_4 = function(t, e, r, s) {
                    return t + e + r + s >>> 0
                }, _.sum32_5 = function(t, e, r, s, n) {
                    return t + e + r + s + n >>> 0
                }, _.sum64 = function(t, e, r, s) {
                    var n = t[e],
                        i = s + t[e + 1] >>> 0,
                        o = (i < s ? 1 : 0) + r + n;
                    t[e] = o >>> 0, t[e + 1] = i
                }, _.sum64_hi = function(t, e, r, s) {
                    return (e + s >>> 0 < e ? 1 : 0) + t + r >>> 0
                }, _.sum64_lo = function(t, e, r, s) {
                    return e + s >>> 0
                }, _.sum64_4_hi = function(t, e, r, s, n, i, o, c) {
                    var a = 0,
                        u = e;
                    return a += (u = u + s >>> 0) < e ? 1 : 0, a += (u = u + i >>> 0) < i ? 1 : 0, t + r + n + o + (a += (u = u + c >>> 0) < c ? 1 : 0) >>> 0
                }, _.sum64_4_lo = function(t, e, r, s, n, i, o, c) {
                    return e + s + i + c >>> 0
                }, _.sum64_5_hi = function(t, e, r, s, n, i, o, c, a, u) {
                    var h = 0,
                        l = e;
                    return h += (l = l + s >>> 0) < e ? 1 : 0, h += (l = l + i >>> 0) < i ? 1 : 0, h += (l = l + c >>> 0) < c ? 1 : 0, t + r + n + o + a + (h += (l = l + u >>> 0) < u ? 1 : 0) >>> 0
                }, _.sum64_5_lo = function(t, e, r, s, n, i, o, c, a, u) {
                    return e + s + i + c + u >>> 0
                }, _.rotr64_hi = function(t, e, r) {
                    return (e << 32 - r | t >>> r) >>> 0
                }, _.rotr64_lo = function(t, e, r) {
                    return (t << 32 - r | e >>> r) >>> 0
                }, _.shr64_hi = function(t, e, r) {
                    return t >>> r
                }, _.shr64_lo = function(t, e, r) {
                    return (t << 32 - r | e >>> r) >>> 0
                };
                var C = {},
                    N = _,
                    W = I;

                function U() {
                    this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
                }
                C.BlockHash = U, U.prototype.update = function(t, e) {
                    if (t = N.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
                        var r = (t = this.pending).length % this._delta8;
                        this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = N.join32(t, 0, t.length - r, this.endian);
                        for (var s = 0; s < t.length; s += this._delta32) this._update(t, s, s + this._delta32)
                    }
                    return this
                }, U.prototype.digest = function(t) {
                    return this.update(this._pad()), W(null === this.pending), this._digest(t)
                }, U.prototype._pad = function() {
                    var t = this.pendingTotal,
                        e = this._delta8,
                        r = e - (t + this.padLength) % e,
                        s = new Array(r + this.padLength);
                    s[0] = 128;
                    for (var n = 1; n < r; n++) s[n] = 0;
                    if (t <<= 3, "big" === this.endian) {
                        for (var i = 8; i < this.padLength; i++) s[n++] = 0;
                        s[n++] = 0, s[n++] = 0, s[n++] = 0, s[n++] = 0, s[n++] = t >>> 24 & 255, s[n++] = t >>> 16 & 255, s[n++] = t >>> 8 & 255, s[n++] = 255 & t
                    } else
                        for (s[n++] = 255 & t, s[n++] = t >>> 8 & 255, s[n++] = t >>> 16 & 255, s[n++] = t >>> 24 & 255, s[n++] = 0, s[n++] = 0, s[n++] = 0, s[n++] = 0, i = 8; i < this.padLength; i++) s[n++] = 0;
                    return s
                };
                var z = {},
                    q = {},
                    L = _.rotr32;

                function K(t, e, r) {
                    return t & e ^ ~t & r
                }

                function M(t, e, r) {
                    return t & e ^ t & r ^ e & r
                }

                function D(t, e, r) {
                    return t ^ e ^ r
                }
                q.ft_1 = function(t, e, r, s) {
                    return 0 === t ? K(e, r, s) : 1 === t || 3 === t ? D(e, r, s) : 2 === t ? M(e, r, s) : void 0
                }, q.ch32 = K, q.maj32 = M, q.p32 = D, q.s0_256 = function(t) {
                    return L(t, 2) ^ L(t, 13) ^ L(t, 22)
                }, q.s1_256 = function(t) {
                    return L(t, 6) ^ L(t, 11) ^ L(t, 25)
                }, q.g0_256 = function(t) {
                    return L(t, 7) ^ L(t, 18) ^ t >>> 3
                }, q.g1_256 = function(t) {
                    return L(t, 17) ^ L(t, 19) ^ t >>> 10
                };
                var F = _,
                    H = C,
                    $ = q,
                    G = F.rotl32,
                    V = F.sum32,
                    X = F.sum32_5,
                    J = $.ft_1,
                    Z = H.BlockHash,
                    Q = [1518500249, 1859775393, 2400959708, 3395469782];

                function Y() {
                    if (!(this instanceof Y)) return new Y;
                    Z.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
                }
                F.inherits(Y, Z);
                var tt = Y;
                Y.blockSize = 512, Y.outSize = 160, Y.hmacStrength = 80, Y.padLength = 64, Y.prototype._update = function(t, e) {
                    for (var r = this.W, s = 0; s < 16; s++) r[s] = t[e + s];
                    for (; s < r.length; s++) r[s] = G(r[s - 3] ^ r[s - 8] ^ r[s - 14] ^ r[s - 16], 1);
                    var n = this.h[0],
                        i = this.h[1],
                        o = this.h[2],
                        c = this.h[3],
                        a = this.h[4];
                    for (s = 0; s < r.length; s++) {
                        var u = ~~(s / 20),
                            h = X(G(n, 5), J(u, i, o, c), a, r[s], Q[u]);
                        a = c, c = o, o = G(i, 30), i = n, n = h
                    }
                    this.h[0] = V(this.h[0], n), this.h[1] = V(this.h[1], i), this.h[2] = V(this.h[2], o), this.h[3] = V(this.h[3], c), this.h[4] = V(this.h[4], a)
                }, Y.prototype._digest = function(t) {
                    return "hex" === t ? F.toHex32(this.h, "big") : F.split32(this.h, "big")
                };
                var et = _,
                    rt = C,
                    st = q,
                    nt = I,
                    it = et.sum32,
                    ot = et.sum32_4,
                    ct = et.sum32_5,
                    at = st.ch32,
                    ut = st.maj32,
                    ht = st.s0_256,
                    lt = st.s1_256,
                    bt = st.g0_256,
                    dt = st.g1_256,
                    pt = rt.BlockHash,
                    ft = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

                function gt() {
                    if (!(this instanceof gt)) return new gt;
                    pt.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = ft, this.W = new Array(64)
                }
                et.inherits(gt, pt);
                var mt = gt;
                gt.blockSize = 512, gt.outSize = 256, gt.hmacStrength = 192, gt.padLength = 64, gt.prototype._update = function(t, e) {
                    for (var r = this.W, s = 0; s < 16; s++) r[s] = t[e + s];
                    for (; s < r.length; s++) r[s] = ot(dt(r[s - 2]), r[s - 7], bt(r[s - 15]), r[s - 16]);
                    var n = this.h[0],
                        i = this.h[1],
                        o = this.h[2],
                        c = this.h[3],
                        a = this.h[4],
                        u = this.h[5],
                        h = this.h[6],
                        l = this.h[7];
                    for (nt(this.k.length === r.length), s = 0; s < r.length; s++) {
                        var b = ct(l, lt(a), at(a, u, h), this.k[s], r[s]),
                            d = it(ht(n), ut(n, i, o));
                        l = h, h = u, u = a, a = it(c, b), c = o, o = i, i = n, n = it(b, d)
                    }
                    this.h[0] = it(this.h[0], n), this.h[1] = it(this.h[1], i), this.h[2] = it(this.h[2], o), this.h[3] = it(this.h[3], c), this.h[4] = it(this.h[4], a), this.h[5] = it(this.h[5], u), this.h[6] = it(this.h[6], h), this.h[7] = it(this.h[7], l)
                }, gt.prototype._digest = function(t) {
                    return "hex" === t ? et.toHex32(this.h, "big") : et.split32(this.h, "big")
                };
                var yt = _,
                    jt = mt;

                function Ot() {
                    if (!(this instanceof Ot)) return new Ot;
                    jt.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
                }
                yt.inherits(Ot, jt);
                var wt = Ot;
                Ot.blockSize = 512, Ot.outSize = 224, Ot.hmacStrength = 192, Ot.padLength = 64, Ot.prototype._digest = function(t) {
                    return "hex" === t ? yt.toHex32(this.h.slice(0, 7), "big") : yt.split32(this.h.slice(0, 7), "big")
                };
                var kt = _,
                    St = C,
                    _t = I,
                    It = kt.rotr64_hi,
                    At = kt.rotr64_lo,
                    Et = kt.shr64_hi,
                    vt = kt.shr64_lo,
                    Pt = kt.sum64,
                    Bt = kt.sum64_hi,
                    Rt = kt.sum64_lo,
                    xt = kt.sum64_4_hi,
                    Tt = kt.sum64_4_lo,
                    Ct = kt.sum64_5_hi,
                    Nt = kt.sum64_5_lo,
                    Wt = St.BlockHash,
                    Ut = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

                function zt() {
                    if (!(this instanceof zt)) return new zt;
                    Wt.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = Ut, this.W = new Array(160)
                }
                kt.inherits(zt, Wt);
                var qt = zt;

                function Lt(t, e, r, s, n) {
                    var i = t & r ^ ~t & n;
                    return i < 0 && (i += 4294967296), i
                }

                function Kt(t, e, r, s, n, i) {
                    var o = e & s ^ ~e & i;
                    return o < 0 && (o += 4294967296), o
                }

                function Mt(t, e, r, s, n) {
                    var i = t & r ^ t & n ^ r & n;
                    return i < 0 && (i += 4294967296), i
                }

                function Dt(t, e, r, s, n, i) {
                    var o = e & s ^ e & i ^ s & i;
                    return o < 0 && (o += 4294967296), o
                }

                function Ft(t, e) {
                    var r = It(t, e, 28) ^ It(e, t, 2) ^ It(e, t, 7);
                    return r < 0 && (r += 4294967296), r
                }

                function Ht(t, e) {
                    var r = At(t, e, 28) ^ At(e, t, 2) ^ At(e, t, 7);
                    return r < 0 && (r += 4294967296), r
                }

                function $t(t, e) {
                    var r = It(t, e, 14) ^ It(t, e, 18) ^ It(e, t, 9);
                    return r < 0 && (r += 4294967296), r
                }

                function Gt(t, e) {
                    var r = At(t, e, 14) ^ At(t, e, 18) ^ At(e, t, 9);
                    return r < 0 && (r += 4294967296), r
                }

                function Vt(t, e) {
                    var r = It(t, e, 1) ^ It(t, e, 8) ^ Et(t, e, 7);
                    return r < 0 && (r += 4294967296), r
                }

                function Xt(t, e) {
                    var r = At(t, e, 1) ^ At(t, e, 8) ^ vt(t, e, 7);
                    return r < 0 && (r += 4294967296), r
                }

                function Jt(t, e) {
                    var r = It(t, e, 19) ^ It(e, t, 29) ^ Et(t, e, 6);
                    return r < 0 && (r += 4294967296), r
                }

                function Zt(t, e) {
                    var r = At(t, e, 19) ^ At(e, t, 29) ^ vt(t, e, 6);
                    return r < 0 && (r += 4294967296), r
                }
                zt.blockSize = 1024, zt.outSize = 512, zt.hmacStrength = 192, zt.padLength = 128, zt.prototype._prepareBlock = function(t, e) {
                    for (var r = this.W, s = 0; s < 32; s++) r[s] = t[e + s];
                    for (; s < r.length; s += 2) {
                        var n = Jt(r[s - 4], r[s - 3]),
                            i = Zt(r[s - 4], r[s - 3]),
                            o = r[s - 14],
                            c = r[s - 13],
                            a = Vt(r[s - 30], r[s - 29]),
                            u = Xt(r[s - 30], r[s - 29]),
                            h = r[s - 32],
                            l = r[s - 31];
                        r[s] = xt(n, i, o, c, a, u, h, l), r[s + 1] = Tt(n, i, o, c, a, u, h, l)
                    }
                }, zt.prototype._update = function(t, e) {
                    this._prepareBlock(t, e);
                    var r = this.W,
                        s = this.h[0],
                        n = this.h[1],
                        i = this.h[2],
                        o = this.h[3],
                        c = this.h[4],
                        a = this.h[5],
                        u = this.h[6],
                        h = this.h[7],
                        l = this.h[8],
                        b = this.h[9],
                        d = this.h[10],
                        p = this.h[11],
                        f = this.h[12],
                        g = this.h[13],
                        m = this.h[14],
                        y = this.h[15];
                    _t(this.k.length === r.length);
                    for (var j = 0; j < r.length; j += 2) {
                        var O = m,
                            w = y,
                            k = $t(l, b),
                            S = Gt(l, b),
                            _ = Lt(l, b, d, p, f),
                            I = Kt(l, b, d, p, f, g),
                            A = this.k[j],
                            E = this.k[j + 1],
                            v = r[j],
                            P = r[j + 1],
                            B = Ct(O, w, k, S, _, I, A, E, v, P),
                            R = Nt(O, w, k, S, _, I, A, E, v, P);
                        O = Ft(s, n), w = Ht(s, n), k = Mt(s, n, i, o, c), S = Dt(s, n, i, o, c, a);
                        var x = Bt(O, w, k, S),
                            T = Rt(O, w, k, S);
                        m = f, y = g, f = d, g = p, d = l, p = b, l = Bt(u, h, B, R), b = Rt(h, h, B, R), u = c, h = a, c = i, a = o, i = s, o = n, s = Bt(B, R, x, T), n = Rt(B, R, x, T)
                    }
                    Pt(this.h, 0, s, n), Pt(this.h, 2, i, o), Pt(this.h, 4, c, a), Pt(this.h, 6, u, h), Pt(this.h, 8, l, b), Pt(this.h, 10, d, p), Pt(this.h, 12, f, g), Pt(this.h, 14, m, y)
                }, zt.prototype._digest = function(t) {
                    return "hex" === t ? kt.toHex32(this.h, "big") : kt.split32(this.h, "big")
                };
                var Qt = _,
                    Yt = qt;

                function te() {
                    if (!(this instanceof te)) return new te;
                    Yt.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
                }
                Qt.inherits(te, Yt);
                var ee = te;
                te.blockSize = 1024, te.outSize = 384, te.hmacStrength = 192, te.padLength = 128, te.prototype._digest = function(t) {
                    return "hex" === t ? Qt.toHex32(this.h.slice(0, 12), "big") : Qt.split32(this.h.slice(0, 12), "big")
                }, z.sha1 = tt, z.sha224 = wt, z.sha256 = mt, z.sha384 = ee, z.sha512 = qt;
                var re = {},
                    se = _,
                    ne = C,
                    ie = se.rotl32,
                    oe = se.sum32,
                    ce = se.sum32_3,
                    ae = se.sum32_4,
                    ue = ne.BlockHash;

                function he() {
                    if (!(this instanceof he)) return new he;
                    ue.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
                }

                function le(t, e, r, s) {
                    return t <= 15 ? e ^ r ^ s : t <= 31 ? e & r | ~e & s : t <= 47 ? (e | ~r) ^ s : t <= 63 ? e & s | r & ~s : e ^ (r | ~s)
                }

                function be(t) {
                    return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838
                }

                function de(t) {
                    return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0
                }
                se.inherits(he, ue), re.ripemd160 = he, he.blockSize = 512, he.outSize = 160, he.hmacStrength = 192, he.padLength = 64, he.prototype._update = function(t, e) {
                    for (var r = this.h[0], s = this.h[1], n = this.h[2], i = this.h[3], o = this.h[4], c = r, a = s, u = n, h = i, l = o, b = 0; b < 80; b++) {
                        var d = oe(ie(ae(r, le(b, s, n, i), t[pe[b] + e], be(b)), ge[b]), o);
                        r = o, o = i, i = ie(n, 10), n = s, s = d, d = oe(ie(ae(c, le(79 - b, a, u, h), t[fe[b] + e], de(b)), me[b]), l), c = l, l = h, h = ie(u, 10), u = a, a = d
                    }
                    d = ce(this.h[1], n, h), this.h[1] = ce(this.h[2], i, l), this.h[2] = ce(this.h[3], o, c), this.h[3] = ce(this.h[4], r, a), this.h[4] = ce(this.h[0], s, u), this.h[0] = d
                }, he.prototype._digest = function(t) {
                    return "hex" === t ? se.toHex32(this.h, "little") : se.split32(this.h, "little")
                };
                var pe = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                    fe = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                    ge = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                    me = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
                    ye = _,
                    je = I;

                function Oe(t, e, r) {
                    if (!(this instanceof Oe)) return new Oe(t, e, r);
                    this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(ye.toArray(e, r))
                }
                var we = Oe;
                Oe.prototype._init = function(t) {
                        t.length > this.blockSize && (t = (new this.Hash).update(t).digest()), je(t.length <= this.blockSize);
                        for (var e = t.length; e < this.blockSize; e++) t.push(0);
                        for (e = 0; e < t.length; e++) t[e] ^= 54;
                        for (this.inner = (new this.Hash).update(t), e = 0; e < t.length; e++) t[e] ^= 106;
                        this.outer = (new this.Hash).update(t)
                    }, Oe.prototype.update = function(t, e) {
                        return this.inner.update(t, e), this
                    }, Oe.prototype.digest = function(t) {
                        return this.outer.update(this.inner.digest()), this.outer.digest(t)
                    },
                    function(t) {
                        var e = t;
                        e.utils = _, e.common = C, e.sha = z, e.ripemd = re, e.hmac = we, e.sha1 = e.sha.sha1, e.sha256 = e.sha.sha256, e.sha224 = e.sha.sha224, e.sha384 = e.sha.sha384, e.sha512 = e.sha.sha512, e.ripemd160 = e.ripemd.ripemd160
                    }(S);
                var ke = S;
                let Se = !1,
                    _e = !1;
                const Ie = {
                    debug: 1,
                    default: 2,
                    info: 2,
                    warning: 3,
                    error: 4,
                    off: 5
                };
                let Ae = Ie.default,
                    Ee = null;
                const ve = function() {
                    try {
                        const t = [];
                        if (["NFD", "NFC", "NFKD", "NFKC"].forEach((e => {
                                try {
                                    if ("test" !== "test".normalize(e)) throw new Error("bad normalize")
                                } catch (r) {
                                    t.push(e)
                                }
                            })), t.length) throw new Error("missing " + t.join(", "));
                        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                    } catch (t) {
                        return t.message
                    }
                    return null
                }();
                var Pe, Be;
                ! function(t) {
                    t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF"
                }(Pe || (Pe = {})),
                function(t) {
                    t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
                }(Be || (Be = {}));
                const Re = "0123456789abcdef";
                class xe {
                    constructor(t) {
                        Object.defineProperty(this, "version", {
                            enumerable: !0,
                            value: t,
                            writable: !1
                        })
                    }
                    _log(t, e) {
                        const r = t.toLowerCase();
                        null == Ie[r] && this.throwArgumentError("invalid log level name", "logLevel", t), Ae > Ie[r] || console.log.apply(console, e)
                    }
                    debug(...t) {
                        this._log(xe.levels.DEBUG, t)
                    }
                    info(...t) {
                        this._log(xe.levels.INFO, t)
                    }
                    warn(...t) {
                        this._log(xe.levels.WARNING, t)
                    }
                    makeError(t, e, r) {
                        if (_e) return this.makeError("censored error", e, {});
                        e || (e = xe.errors.UNKNOWN_ERROR), r || (r = {});
                        const s = [];
                        Object.keys(r).forEach((t => {
                            const e = r[t];
                            try {
                                if (e instanceof Uint8Array) {
                                    let r = "";
                                    for (let t = 0; t < e.length; t++) r += Re[e[t] >> 4], r += Re[15 & e[t]];
                                    s.push(t + "=Uint8Array(0x" + r + ")")
                                } else s.push(t + "=" + JSON.stringify(e))
                            } catch (i) {
                                s.push(t + "=" + JSON.stringify(r[t].toString()))
                            }
                        })), s.push(`code=${e}`), s.push(`version=${this.version}`);
                        const n = t;
                        s.length && (t += " (" + s.join(", ") + ")");
                        const i = new Error(t);
                        return i.reason = n, i.code = e, Object.keys(r).forEach((function(t) {
                            i[t] = r[t]
                        })), i
                    }
                    throwError(t, e, r) {
                        throw this.makeError(t, e, r)
                    }
                    throwArgumentError(t, e, r) {
                        return this.throwError(t, xe.errors.INVALID_ARGUMENT, {
                            argument: e,
                            value: r
                        })
                    }
                    assert(t, e, r, s) {
                        t || this.throwError(e, r, s)
                    }
                    assertArgument(t, e, r, s) {
                        t || this.throwArgumentError(e, r, s)
                    }
                    checkNormalize(t) {
                        ve && this.throwError("platform missing String.prototype.normalize", xe.errors.UNSUPPORTED_OPERATION, {
                            operation: "String.prototype.normalize",
                            form: ve
                        })
                    }
                    checkSafeUint53(t, e) {
                        "number" === typeof t && (null == e && (e = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(e, xe.errors.NUMERIC_FAULT, {
                            operation: "checkSafeInteger",
                            fault: "out-of-safe-range",
                            value: t
                        }), t % 1 && this.throwError(e, xe.errors.NUMERIC_FAULT, {
                            operation: "checkSafeInteger",
                            fault: "non-integer",
                            value: t
                        }))
                    }
                    checkArgumentCount(t, e, r) {
                        r = r ? ": " + r : "", t < e && this.throwError("missing argument" + r, xe.errors.MISSING_ARGUMENT, {
                            count: t,
                            expectedCount: e
                        }), t > e && this.throwError("too many arguments" + r, xe.errors.UNEXPECTED_ARGUMENT, {
                            count: t,
                            expectedCount: e
                        })
                    }
                    checkNew(t, e) {
                        t !== Object && null != t || this.throwError("missing new", xe.errors.MISSING_NEW, {
                            name: e.name
                        })
                    }
                    checkAbstract(t, e) {
                        t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", xe.errors.UNSUPPORTED_OPERATION, {
                            name: t.name,
                            operation: "new"
                        }) : t !== Object && null != t || this.throwError("missing new", xe.errors.MISSING_NEW, {
                            name: e.name
                        })
                    }
                    static globalLogger() {
                        return Ee || (Ee = new xe("logger/5.5.0")), Ee
                    }
                    static setCensorship(t, e) {
                        if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", xe.errors.UNSUPPORTED_OPERATION, {
                                operation: "setCensorship"
                            }), Se) {
                            if (!t) return;
                            this.globalLogger().throwError("error censorship permanent", xe.errors.UNSUPPORTED_OPERATION, {
                                operation: "setCensorship"
                            })
                        }
                        _e = !!t, Se = !!e
                    }
                    static setLogLevel(t) {
                        const e = Ie[t.toLowerCase()];
                        null != e ? Ae = e : xe.globalLogger().warn("invalid log level - " + t)
                    }
                    static from(t) {
                        return new xe(t)
                    }
                }
                xe.errors = Be, xe.levels = Pe;
                const Te = new xe("bytes/5.5.0");

                function Ce(t) {
                    return t.slice || (t.slice = function() {
                        const e = Array.prototype.slice.call(arguments);
                        return Ce(new Uint8Array(Array.prototype.slice.apply(t, e)))
                    }), t
                }

                function Ne(t) {
                    return "number" === typeof t && t == t && t % 1 === 0
                }

                function We(t, e) {
                    if (e || (e = {}), "number" === typeof t) {
                        Te.checkSafeUint53(t, "invalid arrayify value");
                        const e = [];
                        for (; t;) e.unshift(255 & t), t = parseInt(String(t / 256));
                        return 0 === e.length && e.push(0), Ce(new Uint8Array(e))
                    }
                    if (e.allowMissingPrefix && "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), function(t) {
                            return !!t.toHexString
                        }(t) && (t = t.toHexString()), function(t, e) {
                            if ("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) return !1;
                            if (e && t.length !== 2 + 2 * e) return !1;
                            return !0
                        }(t)) {
                        let r = t.substring(2);
                        r.length % 2 && ("left" === e.hexPad ? r = "0x0" + r.substring(2) : "right" === e.hexPad ? r += "0" : Te.throwArgumentError("hex data is odd-length", "value", t));
                        const s = [];
                        for (let t = 0; t < r.length; t += 2) s.push(parseInt(r.substring(t, t + 2), 16));
                        return Ce(new Uint8Array(s))
                    }
                    return function(t) {
                        if (null == t) return !1;
                        if (t.constructor === Uint8Array) return !0;
                        if ("string" === typeof t) return !1;
                        if (!Ne(t.length) || t.length < 0) return !1;
                        for (let e = 0; e < t.length; e++) {
                            const r = t[e];
                            if (!Ne(r) || r < 0 || r >= 256) return !1
                        }
                        return !0
                    }(t) ? Ce(new Uint8Array(t)) : Te.throwArgumentError("invalid arrayify value", "value", t)
                }

                function Ue(t) {
                    return "0x" + ke.sha256().update(We(t)).digest("hex")
                }
                new xe("sha2/5.5.0");
                class ze {
                    constructor(t) {
                        Object.assign(this, t)
                    }
                    encode() {
                        return i.Buffer.from(Object(h.serialize)(qe, this))
                    }
                    static decode(t) {
                        return Object(h.deserialize)(qe, this, t)
                    }
                    static decodeUnchecked(t) {
                        return Object(h.deserializeUnchecked)(qe, this, t)
                    }
                }
                const qe = new Map;
                class Le extends ze {
                    constructor(t) {
                        if (super({}), this._bn = void 0, function(t) {
                                return void 0 !== t._bn
                            }(t)) this._bn = t._bn;
                        else {
                            if ("string" === typeof t) {
                                const e = u.a.decode(t);
                                if (32 != e.length) throw new Error("Invalid public key input");
                                this._bn = new c.a(e)
                            } else this._bn = new c.a(t);
                            if (this._bn.byteLength() > 32) throw new Error("Invalid public key input")
                        }
                    }
                    equals(t) {
                        return this._bn.eq(t._bn)
                    }
                    toBase58() {
                        return u.a.encode(this.toBytes())
                    }
                    toBytes() {
                        return this.toBuffer()
                    }
                    toBuffer() {
                        const t = this._bn.toArrayLike(i.Buffer);
                        if (32 === t.length) return t;
                        const e = i.Buffer.alloc(32);
                        return t.copy(e, 32 - t.length), e
                    }
                    toString() {
                        return this.toBase58()
                    }
                    static async createWithSeed(t, e, r) {
                        const s = i.Buffer.concat([t.toBuffer(), i.Buffer.from(e), r.toBuffer()]),
                            n = Ue(new Uint8Array(s)).slice(2);
                        return new Le(i.Buffer.from(n, "hex"))
                    }
                    static async createProgramAddress(t, e) {
                        let r = i.Buffer.alloc(0);
                        t.forEach((function(t) {
                            if (t.length > 32) throw new TypeError("Max seed length exceeded");
                            r = i.Buffer.concat([r, O(t)])
                        })), r = i.Buffer.concat([r, e.toBuffer(), i.Buffer.from("ProgramDerivedAddress")]);
                        let s = Ue(new Uint8Array(r)).slice(2),
                            n = new c.a(s, 16).toArray(void 0, 32);
                        if (Me(n)) throw new Error("Invalid seeds, address must fall off the curve");
                        return new Le(n)
                    }
                    static async findProgramAddress(t, e) {
                        let r, s = 255;
                        for (; 0 != s;) {
                            try {
                                const n = t.concat(i.Buffer.from([s]));
                                r = await this.createProgramAddress(n, e)
                            } catch (n) {
                                if (n instanceof TypeError) throw n;
                                s--;
                                continue
                            }
                            return [r, s]
                        }
                        throw new Error("Unable to find a viable program address nonce")
                    }
                    static isOnCurve(t) {
                        return 1 == Me(t)
                    }
                }
                Le.default = new Le("11111111111111111111111111111111"), qe.set(Le, {
                    kind: "struct",
                    fields: [
                        ["_bn", "u256"]
                    ]
                });
                let Ke = n.a.lowlevel;

                function Me(t) {
                    var e = [Ke.gf(), Ke.gf(), Ke.gf(), Ke.gf()],
                        r = Ke.gf(),
                        s = Ke.gf(),
                        n = Ke.gf(),
                        i = Ke.gf(),
                        o = Ke.gf(),
                        c = Ke.gf(),
                        a = Ke.gf();
                    return Ke.set25519(e[2], De), Ke.unpack25519(e[1], t), Ke.S(n, e[1]), Ke.M(i, n, Ke.D), Ke.Z(n, n, e[2]), Ke.A(i, e[2], i), Ke.S(o, i), Ke.S(c, o), Ke.M(a, c, o), Ke.M(r, a, n), Ke.M(r, r, i), Ke.pow2523(r, r), Ke.M(r, r, n), Ke.M(r, r, i), Ke.M(r, r, i), Ke.M(e[0], r, i), Ke.S(s, e[0]), Ke.M(s, s, i), He(s, n) && Ke.M(e[0], e[0], Fe), Ke.S(s, e[0]), Ke.M(s, s, i), He(s, n) ? 0 : 1
                }
                let De = Ke.gf([1]),
                    Fe = Ke.gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

                function He(t, e) {
                    var r = new Uint8Array(32),
                        s = new Uint8Array(32);
                    return Ke.pack25519(r, t), Ke.pack25519(s, e), Ke.crypto_verify_32(r, 0, s, 0)
                }
                new Le("BPFLoader1111111111111111111111111111111111");
                const $e = (t = "publicKey") => l.blob(32, t),
                    Ge = (t = "string") => {
                        const e = l.struct([l.u32("length"), l.u32("lengthPadding"), l.blob(l.offset(l.u32(), -8), "chars")], t),
                            r = e.decode.bind(e),
                            s = e.encode.bind(e);
                        return e.decode = (t, e) => r(t, e).chars.toString("utf8"), e.encode = (t, e, r) => {
                            const n = {
                                chars: i.Buffer.from(t, "utf8")
                            };
                            return s(n, e, r)
                        }, e.alloc = t => l.u32().span + l.u32().span + i.Buffer.from(t, "utf8").length, e
                    };

                function Ve(t) {
                    let e = 0,
                        r = 0;
                    for (;;) {
                        let s = t.shift();
                        if (e |= (127 & s) << 7 * r, r += 1, 0 === (128 & s)) break
                    }
                    return e
                }

                function Xe(t, e) {
                    let r = e;
                    for (;;) {
                        let e = 127 & r;
                        if (r >>= 7, 0 == r) {
                            t.push(e);
                            break
                        }
                        e |= 128, t.push(e)
                    }
                }
                class Je {
                    constructor(t) {
                        this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = new Map, this.header = t.header, this.accountKeys = t.accountKeys.map((t => new Le(t))), this.recentBlockhash = t.recentBlockhash, this.instructions = t.instructions, this.instructions.forEach((t => this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex])))
                    }
                    isAccountSigner(t) {
                        return t < this.header.numRequiredSignatures
                    }
                    isAccountWritable(t) {
                        return t < this.header.numRequiredSignatures - this.header.numReadonlySignedAccounts || t >= this.header.numRequiredSignatures && t < this.accountKeys.length - this.header.numReadonlyUnsignedAccounts
                    }
                    isProgramId(t) {
                        return this.indexToProgramIds.has(t)
                    }
                    programIds() {
                        return [...this.indexToProgramIds.values()]
                    }
                    nonProgramIds() {
                        return this.accountKeys.filter(((t, e) => !this.isProgramId(e)))
                    }
                    serialize() {
                        const t = this.accountKeys.length;
                        let e = [];
                        Xe(e, t);
                        const r = this.instructions.map((t => {
                            const {
                                accounts: e,
                                programIdIndex: r
                            } = t, s = u.a.decode(t.data);
                            let n = [];
                            Xe(n, e.length);
                            let o = [];
                            return Xe(o, s.length), {
                                programIdIndex: r,
                                keyIndicesCount: i.Buffer.from(n),
                                keyIndices: i.Buffer.from(e),
                                dataLength: i.Buffer.from(o),
                                data: s
                            }
                        }));
                        let s = [];
                        Xe(s, r.length);
                        let n = i.Buffer.alloc(Ye);
                        i.Buffer.from(s).copy(n);
                        let o = s.length;
                        r.forEach((t => {
                            const e = l.struct([l.u8("programIdIndex"), l.blob(t.keyIndicesCount.length, "keyIndicesCount"), l.seq(l.u8("keyIndex"), t.keyIndices.length, "keyIndices"), l.blob(t.dataLength.length, "dataLength"), l.seq(l.u8("userdatum"), t.data.length, "data")]).encode(t, n, o);
                            o += e
                        })), n = n.slice(0, o);
                        const c = l.struct([l.blob(1, "numRequiredSignatures"), l.blob(1, "numReadonlySignedAccounts"), l.blob(1, "numReadonlyUnsignedAccounts"), l.blob(e.length, "keyCount"), l.seq($e("key"), t, "keys"), $e("recentBlockhash")]),
                            a = {
                                numRequiredSignatures: i.Buffer.from([this.header.numRequiredSignatures]),
                                numReadonlySignedAccounts: i.Buffer.from([this.header.numReadonlySignedAccounts]),
                                numReadonlyUnsignedAccounts: i.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
                                keyCount: i.Buffer.from(e),
                                keys: this.accountKeys.map((t => O(t.toBytes()))),
                                recentBlockhash: u.a.decode(this.recentBlockhash)
                            };
                        let h = i.Buffer.alloc(2048);
                        const b = c.encode(a, h);
                        return n.copy(h, b), h.slice(0, b + n.length)
                    }
                    static from(t) {
                        let e = [...t];
                        const r = e.shift(),
                            s = e.shift(),
                            n = e.shift(),
                            o = Ve(e);
                        let c = [];
                        for (let d = 0; d < o; d++) {
                            const t = e.slice(0, 32);
                            e = e.slice(32), c.push(u.a.encode(i.Buffer.from(t)))
                        }
                        const a = e.slice(0, 32);
                        e = e.slice(32);
                        const h = Ve(e);
                        let l = [];
                        for (let d = 0; d < h; d++) {
                            const t = e.shift(),
                                r = Ve(e),
                                s = e.slice(0, r);
                            e = e.slice(r);
                            const n = Ve(e),
                                o = e.slice(0, n),
                                c = u.a.encode(i.Buffer.from(o));
                            e = e.slice(n), l.push({
                                programIdIndex: t,
                                accounts: s,
                                data: c
                            })
                        }
                        const b = {
                            header: {
                                numRequiredSignatures: r,
                                numReadonlySignedAccounts: s,
                                numReadonlyUnsignedAccounts: n
                            },
                            recentBlockhash: u.a.encode(i.Buffer.from(a)),
                            accountKeys: c,
                            instructions: l
                        };
                        return new Je(b)
                    }
                }

                function Ze(t, e) {
                    if (!t) throw new Error(e || "Assertion failed")
                }
                const Qe = i.Buffer.alloc(64).fill(0),
                    Ye = 1232;
                class tr {
                    constructor(t) {
                        this.keys = void 0, this.programId = void 0, this.data = i.Buffer.alloc(0), this.programId = t.programId, this.keys = t.keys, t.data && (this.data = t.data)
                    }
                }
                class er {
                    get signature() {
                        return this.signatures.length > 0 ? this.signatures[0].signature : null
                    }
                    constructor(t) {
                        this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.nonceInfo = void 0, t && Object.assign(this, t)
                    }
                    add(...t) {
                        if (0 === t.length) throw new Error("No instructions");
                        return t.forEach((t => {
                            "instructions" in t ? this.instructions = this.instructions.concat(t.instructions) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new tr(t))
                        })), this
                    }
                    compileMessage() {
                        const {
                            nonceInfo: t
                        } = this;
                        t && this.instructions[0] != t.nonceInstruction && (this.recentBlockhash = t.nonce, this.instructions.unshift(t.nonceInstruction));
                        const {
                            recentBlockhash: e
                        } = this;
                        if (!e) throw new Error("Transaction recentBlockhash required");
                        let r;
                        if (this.instructions.length < 1 && console.warn("No instructions provided"), this.feePayer) r = this.feePayer;
                        else {
                            if (!(this.signatures.length > 0 && this.signatures[0].publicKey)) throw new Error("Transaction fee payer required");
                            r = this.signatures[0].publicKey
                        }
                        for (let u = 0; u < this.instructions.length; u++)
                            if (void 0 === this.instructions[u].programId) throw new Error(`Transaction instruction index ${u} has undefined program id`);
                        const s = [],
                            n = [];
                        this.instructions.forEach((t => {
                            t.keys.forEach((t => {
                                n.push({ ...t
                                })
                            }));
                            const e = t.programId.toString();
                            s.includes(e) || s.push(e)
                        })), s.forEach((t => {
                            n.push({
                                pubkey: new Le(t),
                                isSigner: !1,
                                isWritable: !1
                            })
                        })), n.sort((function(t, e) {
                            const r = t.isSigner === e.isSigner ? 0 : t.isSigner ? -1 : 1,
                                s = t.isWritable === e.isWritable ? 0 : t.isWritable ? -1 : 1;
                            return r || s
                        }));
                        const i = [];
                        n.forEach((t => {
                            const e = t.pubkey.toString(),
                                r = i.findIndex((t => t.pubkey.toString() === e));
                            r > -1 ? i[r].isWritable = i[r].isWritable || t.isWritable : i.push(t)
                        }));
                        const o = i.findIndex((t => t.pubkey.equals(r)));
                        if (o > -1) {
                            const [t] = i.splice(o, 1);
                            t.isSigner = !0, t.isWritable = !0, i.unshift(t)
                        } else i.unshift({
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !0
                        });
                        for (const u of this.signatures) {
                            const t = i.findIndex((t => t.pubkey.equals(u.publicKey)));
                            if (!(t > -1)) throw new Error(`unknown signer: ${u.publicKey.toString()}`);
                            i[t].isSigner || (i[t].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."))
                        }
                        let c = 0,
                            a = 0,
                            h = 0;
                        const l = [],
                            b = [];
                        i.forEach((({
                            pubkey: t,
                            isSigner: e,
                            isWritable: r
                        }) => {
                            e ? (l.push(t.toString()), c += 1, r || (a += 1)) : (b.push(t.toString()), r || (h += 1))
                        }));
                        const d = l.concat(b),
                            p = this.instructions.map((t => {
                                const {
                                    data: e,
                                    programId: r
                                } = t;
                                return {
                                    programIdIndex: d.indexOf(r.toString()),
                                    accounts: t.keys.map((t => d.indexOf(t.pubkey.toString()))),
                                    data: u.a.encode(e)
                                }
                            }));
                        return p.forEach((t => {
                            Ze(t.programIdIndex >= 0), t.accounts.forEach((t => Ze(t >= 0)))
                        })), new Je({
                            header: {
                                numRequiredSignatures: c,
                                numReadonlySignedAccounts: a,
                                numReadonlyUnsignedAccounts: h
                            },
                            accountKeys: d,
                            recentBlockhash: e,
                            instructions: p
                        })
                    }
                    _compile() {
                        const t = this.compileMessage(),
                            e = t.accountKeys.slice(0, t.header.numRequiredSignatures);
                        if (this.signatures.length === e.length) {
                            if (this.signatures.every(((t, r) => e[r].equals(t.publicKey)))) return t
                        }
                        return this.signatures = e.map((t => ({
                            signature: null,
                            publicKey: t
                        }))), t
                    }
                    serializeMessage() {
                        return this._compile().serialize()
                    }
                    setSigners(...t) {
                        if (0 === t.length) throw new Error("No signers");
                        const e = new Set;
                        this.signatures = t.filter((t => {
                            const r = t.toString();
                            return !e.has(r) && (e.add(r), !0)
                        })).map((t => ({
                            signature: null,
                            publicKey: t
                        })))
                    }
                    sign(...t) {
                        if (0 === t.length) throw new Error("No signers");
                        const e = new Set,
                            r = [];
                        for (const n of t) {
                            const t = n.publicKey.toString();
                            e.has(t) || (e.add(t), r.push(n))
                        }
                        this.signatures = r.map((t => ({
                            signature: null,
                            publicKey: t.publicKey
                        })));
                        const s = this._compile();
                        this._partialSign(s, ...r), this._verifySignatures(s.serialize(), !0)
                    }
                    partialSign(...t) {
                        if (0 === t.length) throw new Error("No signers");
                        const e = new Set,
                            r = [];
                        for (const n of t) {
                            const t = n.publicKey.toString();
                            e.has(t) || (e.add(t), r.push(n))
                        }
                        const s = this._compile();
                        this._partialSign(s, ...r)
                    }
                    _partialSign(t, ...e) {
                        const r = t.serialize();
                        e.forEach((t => {
                            const e = n.a.sign.detached(r, t.secretKey);
                            this._addSignature(t.publicKey, O(e))
                        }))
                    }
                    addSignature(t, e) {
                        this._compile(), this._addSignature(t, e)
                    }
                    _addSignature(t, e) {
                        Ze(64 === e.length);
                        const r = this.signatures.findIndex((e => t.equals(e.publicKey)));
                        if (r < 0) throw new Error(`unknown signer: ${t.toString()}`);
                        this.signatures[r].signature = i.Buffer.from(e)
                    }
                    verifySignatures() {
                        return this._verifySignatures(this.serializeMessage(), !0)
                    }
                    _verifySignatures(t, e) {
                        for (const {
                                signature: r,
                                publicKey: s
                            } of this.signatures)
                            if (null === r) {
                                if (e) return !1
                            } else if (!n.a.sign.detached.verify(t, r, s.toBuffer())) return !1;
                        return !0
                    }
                    serialize(t) {
                        const {
                            requireAllSignatures: e,
                            verifySignatures: r
                        } = Object.assign({
                            requireAllSignatures: !0,
                            verifySignatures: !0
                        }, t), s = this.serializeMessage();
                        if (r && !this._verifySignatures(s, e)) throw new Error("Signature verification failed");
                        return this._serialize(s)
                    }
                    _serialize(t) {
                        const {
                            signatures: e
                        } = this, r = [];
                        Xe(r, e.length);
                        const s = r.length + 64 * e.length + t.length,
                            n = i.Buffer.alloc(s);
                        return Ze(e.length < 256), i.Buffer.from(r).copy(n, 0), e.forEach((({
                            signature: t
                        }, e) => {
                            null !== t && (Ze(64 === t.length, "signature has invalid length"), i.Buffer.from(t).copy(n, r.length + 64 * e))
                        })), t.copy(n, r.length + 64 * e.length), Ze(n.length <= Ye, `Transaction too large: ${n.length} > ${Ye}`), n
                    }
                    get keys() {
                        return Ze(1 === this.instructions.length), this.instructions[0].keys.map((t => t.pubkey))
                    }
                    get programId() {
                        return Ze(1 === this.instructions.length), this.instructions[0].programId
                    }
                    get data() {
                        return Ze(1 === this.instructions.length), this.instructions[0].data
                    }
                    static from(t) {
                        let e = [...t];
                        const r = Ve(e);
                        let s = [];
                        for (let n = 0; n < r; n++) {
                            const t = e.slice(0, 64);
                            e = e.slice(64), s.push(u.a.encode(i.Buffer.from(t)))
                        }
                        return er.populate(Je.from(e), s)
                    }
                    static populate(t, e = []) {
                        const r = new er;
                        return r.recentBlockhash = t.recentBlockhash, t.header.numRequiredSignatures > 0 && (r.feePayer = t.accountKeys[0]), e.forEach(((e, s) => {
                            const n = {
                                signature: e == u.a.encode(Qe) ? null : u.a.decode(e),
                                publicKey: t.accountKeys[s]
                            };
                            r.signatures.push(n)
                        })), t.instructions.forEach((e => {
                            const s = e.accounts.map((e => {
                                const s = t.accountKeys[e];
                                return {
                                    pubkey: s,
                                    isSigner: r.signatures.some((t => t.publicKey.toString() === s.toString())) || t.isAccountSigner(e),
                                    isWritable: t.isAccountWritable(e)
                                }
                            }));
                            r.instructions.push(new tr({
                                keys: s,
                                programId: t.accountKeys[e.programIdIndex],
                                data: u.a.decode(e.data)
                            }))
                        })), r
                    }
                }
                const rr = new Le("SysvarC1ock11111111111111111111111111111111"),
                    sr = new Le("SysvarRecentB1ockHashes11111111111111111111"),
                    nr = new Le("SysvarRent111111111111111111111111111111111"),
                    ir = (new Le("SysvarRewards111111111111111111111111111111"), new Le("SysvarStakeHistory1111111111111111111111111"));
                new Le("Sysvar1nstructions1111111111111111111111111");
                async function or(t, e, r, s) {
                    const n = s && {
                            skipPreflight: s.skipPreflight,
                            preflightCommitment: s.preflightCommitment || s.commitment
                        },
                        i = await t.sendTransaction(e, r, n),
                        o = (await t.confirmTransaction(i, s && s.commitment)).value;
                    if (o.err) throw new Error(`Transaction ${i} failed (${JSON.stringify(o)})`);
                    return i
                }

                function cr(t) {
                    return new Promise((e => setTimeout(e, t)))
                }

                function ar(t, e) {
                    const r = t.layout.span >= 0 ? t.layout.span : function(t, e) {
                            let r = 0;
                            return t.layout.fields.forEach((t => {
                                t.span >= 0 ? r += t.span : "function" === typeof t.alloc && (r += t.alloc(e[t.property]))
                            })), r
                        }(t, e),
                        s = i.Buffer.alloc(r),
                        n = Object.assign({
                            instruction: t.index
                        }, e);
                    return t.layout.encode(n, s), s
                }
                const ur = l.nu64("lamportsPerSignature"),
                    hr = l.struct([l.u32("version"), l.u32("state"), $e("authorizedPubkey"), $e("nonce"), l.struct([ur], "feeCalculator")]),
                    lr = hr.span;
                class br {
                    constructor(t) {
                        this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = t.authorizedPubkey, this.nonce = t.nonce, this.feeCalculator = t.feeCalculator
                    }
                    static fromAccountData(t) {
                        const e = hr.decode(O(t), 0);
                        return new br({
                            authorizedPubkey: new Le(e.authorizedPubkey),
                            nonce: new Le(e.nonce).toString(),
                            feeCalculator: e.feeCalculator
                        })
                    }
                }
                const dr = Object.freeze({
                    Create: {
                        index: 0,
                        layout: l.struct([l.u32("instruction"), l.ns64("lamports"), l.ns64("space"), $e("programId")])
                    },
                    Assign: {
                        index: 1,
                        layout: l.struct([l.u32("instruction"), $e("programId")])
                    },
                    Transfer: {
                        index: 2,
                        layout: l.struct([l.u32("instruction"), l.ns64("lamports")])
                    },
                    CreateWithSeed: {
                        index: 3,
                        layout: l.struct([l.u32("instruction"), $e("base"), Ge("seed"), l.ns64("lamports"), l.ns64("space"), $e("programId")])
                    },
                    AdvanceNonceAccount: {
                        index: 4,
                        layout: l.struct([l.u32("instruction")])
                    },
                    WithdrawNonceAccount: {
                        index: 5,
                        layout: l.struct([l.u32("instruction"), l.ns64("lamports")])
                    },
                    InitializeNonceAccount: {
                        index: 6,
                        layout: l.struct([l.u32("instruction"), $e("authorized")])
                    },
                    AuthorizeNonceAccount: {
                        index: 7,
                        layout: l.struct([l.u32("instruction"), $e("authorized")])
                    },
                    Allocate: {
                        index: 8,
                        layout: l.struct([l.u32("instruction"), l.ns64("space")])
                    },
                    AllocateWithSeed: {
                        index: 9,
                        layout: l.struct([l.u32("instruction"), $e("base"), Ge("seed"), l.ns64("space"), $e("programId")])
                    },
                    AssignWithSeed: {
                        index: 10,
                        layout: l.struct([l.u32("instruction"), $e("base"), Ge("seed"), $e("programId")])
                    },
                    TransferWithSeed: {
                        index: 11,
                        layout: l.struct([l.u32("instruction"), l.ns64("lamports"), Ge("seed"), $e("programId")])
                    }
                });
                class pr {
                    constructor() {}
                    static createAccount(t) {
                        const e = ar(dr.Create, {
                            lamports: t.lamports,
                            space: t.space,
                            programId: O(t.programId.toBuffer())
                        });
                        return new tr({
                            keys: [{
                                pubkey: t.fromPubkey,
                                isSigner: !0,
                                isWritable: !0
                            }, {
                                pubkey: t.newAccountPubkey,
                                isSigner: !0,
                                isWritable: !0
                            }],
                            programId: this.programId,
                            data: e
                        })
                    }
                    static transfer(t) {
                        let e, r;
                        if ("basePubkey" in t) {
                            e = ar(dr.TransferWithSeed, {
                                lamports: t.lamports,
                                seed: t.seed,
                                programId: O(t.programId.toBuffer())
                            }), r = [{
                                pubkey: t.fromPubkey,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: t.basePubkey,
                                isSigner: !0,
                                isWritable: !1
                            }, {
                                pubkey: t.toPubkey,
                                isSigner: !1,
                                isWritable: !0
                            }]
                        } else {
                            e = ar(dr.Transfer, {
                                lamports: t.lamports
                            }), r = [{
                                pubkey: t.fromPubkey,
                                isSigner: !0,
                                isWritable: !0
                            }, {
                                pubkey: t.toPubkey,
                                isSigner: !1,
                                isWritable: !0
                            }]
                        }
                        return new tr({
                            keys: r,
                            programId: this.programId,
                            data: e
                        })
                    }
                    static assign(t) {
                        let e, r;
                        if ("basePubkey" in t) {
                            e = ar(dr.AssignWithSeed, {
                                base: O(t.basePubkey.toBuffer()),
                                seed: t.seed,
                                programId: O(t.programId.toBuffer())
                            }), r = [{
                                pubkey: t.accountPubkey,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: t.basePubkey,
                                isSigner: !0,
                                isWritable: !1
                            }]
                        } else {
                            e = ar(dr.Assign, {
                                programId: O(t.programId.toBuffer())
                            }), r = [{
                                pubkey: t.accountPubkey,
                                isSigner: !0,
                                isWritable: !0
                            }]
                        }
                        return new tr({
                            keys: r,
                            programId: this.programId,
                            data: e
                        })
                    }
                    static createAccountWithSeed(t) {
                        const e = ar(dr.CreateWithSeed, {
                            base: O(t.basePubkey.toBuffer()),
                            seed: t.seed,
                            lamports: t.lamports,
                            space: t.space,
                            programId: O(t.programId.toBuffer())
                        });
                        let r = [{
                            pubkey: t.fromPubkey,
                            isSigner: !0,
                            isWritable: !0
                        }, {
                            pubkey: t.newAccountPubkey,
                            isSigner: !1,
                            isWritable: !0
                        }];
                        return t.basePubkey != t.fromPubkey && r.push({
                            pubkey: t.basePubkey,
                            isSigner: !0,
                            isWritable: !1
                        }), new tr({
                            keys: r,
                            programId: this.programId,
                            data: e
                        })
                    }
                    static createNonceAccount(t) {
                        const e = new er;
                        "basePubkey" in t && "seed" in t ? e.add(pr.createAccountWithSeed({
                            fromPubkey: t.fromPubkey,
                            newAccountPubkey: t.noncePubkey,
                            basePubkey: t.basePubkey,
                            seed: t.seed,
                            lamports: t.lamports,
                            space: lr,
                            programId: this.programId
                        })) : e.add(pr.createAccount({
                            fromPubkey: t.fromPubkey,
                            newAccountPubkey: t.noncePubkey,
                            lamports: t.lamports,
                            space: lr,
                            programId: this.programId
                        }));
                        const r = {
                            noncePubkey: t.noncePubkey,
                            authorizedPubkey: t.authorizedPubkey
                        };
                        return e.add(this.nonceInitialize(r)), e
                    }
                    static nonceInitialize(t) {
                        const e = ar(dr.InitializeNonceAccount, {
                                authorized: O(t.authorizedPubkey.toBuffer())
                            }),
                            r = {
                                keys: [{
                                    pubkey: t.noncePubkey,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: sr,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: nr,
                                    isSigner: !1,
                                    isWritable: !1
                                }],
                                programId: this.programId,
                                data: e
                            };
                        return new tr(r)
                    }
                    static nonceAdvance(t) {
                        const e = ar(dr.AdvanceNonceAccount),
                            r = {
                                keys: [{
                                    pubkey: t.noncePubkey,
                                    isSigner: !1,
                                    isWritable: !0
                                }, {
                                    pubkey: sr,
                                    isSigner: !1,
                                    isWritable: !1
                                }, {
                                    pubkey: t.authorizedPubkey,
                                    isSigner: !0,
                                    isWritable: !1
                                }],
                                programId: this.programId,
                                data: e
                            };
                        return new tr(r)
                    }
                    static nonceWithdraw(t) {
                        const e = ar(dr.WithdrawNonceAccount, {
                            lamports: t.lamports
                        });
                        return new tr({
                            keys: [{
                                pubkey: t.noncePubkey,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: t.toPubkey,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: sr,
                                isSigner: !1,
                                isWritable: !1
                            }, {
                                pubkey: nr,
                                isSigner: !1,
                                isWritable: !1
                            }, {
                                pubkey: t.authorizedPubkey,
                                isSigner: !0,
                                isWritable: !1
                            }],
                            programId: this.programId,
                            data: e
                        })
                    }
                    static nonceAuthorize(t) {
                        const e = ar(dr.AuthorizeNonceAccount, {
                            authorized: O(t.newAuthorizedPubkey.toBuffer())
                        });
                        return new tr({
                            keys: [{
                                pubkey: t.noncePubkey,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: t.authorizedPubkey,
                                isSigner: !0,
                                isWritable: !1
                            }],
                            programId: this.programId,
                            data: e
                        })
                    }
                    static allocate(t) {
                        let e, r;
                        if ("basePubkey" in t) {
                            e = ar(dr.AllocateWithSeed, {
                                base: O(t.basePubkey.toBuffer()),
                                seed: t.seed,
                                space: t.space,
                                programId: O(t.programId.toBuffer())
                            }), r = [{
                                pubkey: t.accountPubkey,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: t.basePubkey,
                                isSigner: !0,
                                isWritable: !1
                            }]
                        } else {
                            e = ar(dr.Allocate, {
                                space: t.space
                            }), r = [{
                                pubkey: t.accountPubkey,
                                isSigner: !0,
                                isWritable: !0
                            }]
                        }
                        return new tr({
                            keys: r,
                            programId: this.programId,
                            data: e
                        })
                    }
                }
                pr.programId = new Le("11111111111111111111111111111111");
                const fr = Ye - 300;
                class gr {
                    constructor() {}
                    static getMinNumSignatures(t) {
                        return 2 * (Math.ceil(t / gr.chunkSize) + 1 + 1)
                    }
                    static async load(t, e, r, s, n) {
                        {
                            const i = await t.getMinimumBalanceForRentExemption(n.length),
                                o = await t.getAccountInfo(r.publicKey, "confirmed");
                            let c = null;
                            if (null !== o) {
                                if (o.executable) return console.error("Program load failed, account is already executable"), !1;
                                o.data.length !== n.length && (c = c || new er, c.add(pr.allocate({
                                    accountPubkey: r.publicKey,
                                    space: n.length
                                }))), o.owner.equals(s) || (c = c || new er, c.add(pr.assign({
                                    accountPubkey: r.publicKey,
                                    programId: s
                                }))), o.lamports < i && (c = c || new er, c.add(pr.transfer({
                                    fromPubkey: e.publicKey,
                                    toPubkey: r.publicKey,
                                    lamports: i - o.lamports
                                })))
                            } else c = (new er).add(pr.createAccount({
                                fromPubkey: e.publicKey,
                                newAccountPubkey: r.publicKey,
                                lamports: i > 0 ? i : 1,
                                space: n.length,
                                programId: s
                            }));
                            null !== c && await or(t, c, [e, r], {
                                commitment: "confirmed"
                            })
                        }
                        const o = l.struct([l.u32("instruction"), l.u32("offset"), l.u32("bytesLength"), l.u32("bytesLengthPadding"), l.seq(l.u8("byte"), l.offset(l.u32(), -8), "bytes")]),
                            c = gr.chunkSize;
                        let a = 0,
                            u = n,
                            h = [];
                        for (; u.length > 0;) {
                            const n = u.slice(0, c),
                                l = i.Buffer.alloc(c + 16);
                            o.encode({
                                instruction: 0,
                                offset: a,
                                bytes: n
                            }, l);
                            const b = (new er).add({
                                keys: [{
                                    pubkey: r.publicKey,
                                    isSigner: !0,
                                    isWritable: !0
                                }],
                                programId: s,
                                data: l
                            });
                            if (h.push(or(t, b, [e, r], {
                                    commitment: "confirmed"
                                })), t._rpcEndpoint.includes("solana.com")) {
                                const t = 4;
                                await cr(1e3 / t)
                            }
                            a += c, u = u.slice(c)
                        }
                        await Promise.all(h); {
                            const n = l.struct([l.u32("instruction")]),
                                o = i.Buffer.alloc(n.span);
                            n.encode({
                                instruction: 1
                            }, o);
                            const c = (new er).add({
                                keys: [{
                                    pubkey: r.publicKey,
                                    isSigner: !0,
                                    isWritable: !0
                                }, {
                                    pubkey: nr,
                                    isSigner: !1,
                                    isWritable: !1
                                }],
                                programId: s,
                                data: o
                            });
                            await or(t, c, [e, r], {
                                commitment: "confirmed"
                            })
                        }
                        return !0
                    }
                }
                gr.chunkSize = fr;
                new Le("BPFLoader2111111111111111111111111111111111");
                var mr = {
                    exports: {}
                };
                ! function(t, e) {
                    var r = "undefined" !== typeof self ? self : w,
                        s = function() {
                            function t() {
                                this.fetch = !1, this.DOMException = r.DOMException
                            }
                            return t.prototype = r, new t
                        }();
                    ! function(t) {
                        ! function(e) {
                            var r = "URLSearchParams" in t,
                                s = "Symbol" in t && "iterator" in Symbol,
                                n = "FileReader" in t && "Blob" in t && function() {
                                    try {
                                        return new Blob, !0
                                    } catch (t) {
                                        return !1
                                    }
                                }(),
                                i = "FormData" in t,
                                o = "ArrayBuffer" in t;
                            if (o) var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                                a = ArrayBuffer.isView || function(t) {
                                    return t && c.indexOf(Object.prototype.toString.call(t)) > -1
                                };

                            function u(t) {
                                if ("string" !== typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
                                return t.toLowerCase()
                            }

                            function h(t) {
                                return "string" !== typeof t && (t = String(t)), t
                            }

                            function l(t) {
                                var e = {
                                    next: function() {
                                        var e = t.shift();
                                        return {
                                            done: void 0 === e,
                                            value: e
                                        }
                                    }
                                };
                                return s && (e[Symbol.iterator] = function() {
                                    return e
                                }), e
                            }

                            function b(t) {
                                this.map = {}, t instanceof b ? t.forEach((function(t, e) {
                                    this.append(e, t)
                                }), this) : Array.isArray(t) ? t.forEach((function(t) {
                                    this.append(t[0], t[1])
                                }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                                    this.append(e, t[e])
                                }), this)
                            }

                            function d(t) {
                                if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
                                t.bodyUsed = !0
                            }

                            function p(t) {
                                return new Promise((function(e, r) {
                                    t.onload = function() {
                                        e(t.result)
                                    }, t.onerror = function() {
                                        r(t.error)
                                    }
                                }))
                            }

                            function f(t) {
                                var e = new FileReader,
                                    r = p(e);
                                return e.readAsArrayBuffer(t), r
                            }

                            function g(t) {
                                if (t.slice) return t.slice(0);
                                var e = new Uint8Array(t.byteLength);
                                return e.set(new Uint8Array(t)), e.buffer
                            }

                            function m() {
                                return this.bodyUsed = !1, this._initBody = function(t) {
                                    var e;
                                    this._bodyInit = t, t ? "string" === typeof t ? this._bodyText = t : n && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : i && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : r && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : o && n && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = g(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : o && (ArrayBuffer.prototype.isPrototypeOf(t) || a(t)) ? this._bodyArrayBuffer = g(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" === typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                                }, n && (this.blob = function() {
                                    var t = d(this);
                                    if (t) return t;
                                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                                    return Promise.resolve(new Blob([this._bodyText]))
                                }, this.arrayBuffer = function() {
                                    return this._bodyArrayBuffer ? d(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(f)
                                }), this.text = function() {
                                    var t = d(this);
                                    if (t) return t;
                                    if (this._bodyBlob) return function(t) {
                                        var e = new FileReader,
                                            r = p(e);
                                        return e.readAsText(t), r
                                    }(this._bodyBlob);
                                    if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                                        for (var e = new Uint8Array(t), r = new Array(e.length), s = 0; s < e.length; s++) r[s] = String.fromCharCode(e[s]);
                                        return r.join("")
                                    }(this._bodyArrayBuffer));
                                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                                    return Promise.resolve(this._bodyText)
                                }, i && (this.formData = function() {
                                    return this.text().then(O)
                                }), this.json = function() {
                                    return this.text().then(JSON.parse)
                                }, this
                            }
                            b.prototype.append = function(t, e) {
                                t = u(t), e = h(e);
                                var r = this.map[t];
                                this.map[t] = r ? r + ", " + e : e
                            }, b.prototype.delete = function(t) {
                                delete this.map[u(t)]
                            }, b.prototype.get = function(t) {
                                return t = u(t), this.has(t) ? this.map[t] : null
                            }, b.prototype.has = function(t) {
                                return this.map.hasOwnProperty(u(t))
                            }, b.prototype.set = function(t, e) {
                                this.map[u(t)] = h(e)
                            }, b.prototype.forEach = function(t, e) {
                                for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
                            }, b.prototype.keys = function() {
                                var t = [];
                                return this.forEach((function(e, r) {
                                    t.push(r)
                                })), l(t)
                            }, b.prototype.values = function() {
                                var t = [];
                                return this.forEach((function(e) {
                                    t.push(e)
                                })), l(t)
                            }, b.prototype.entries = function() {
                                var t = [];
                                return this.forEach((function(e, r) {
                                    t.push([r, e])
                                })), l(t)
                            }, s && (b.prototype[Symbol.iterator] = b.prototype.entries);
                            var y = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                            function j(t, e) {
                                var r = (e = e || {}).body;
                                if (t instanceof j) {
                                    if (t.bodyUsed) throw new TypeError("Already read");
                                    this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new b(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
                                } else this.url = String(t);
                                if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new b(e.headers)), this.method = function(t) {
                                        var e = t.toUpperCase();
                                        return y.indexOf(e) > -1 ? e : t
                                    }(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
                                this._initBody(r)
                            }

                            function O(t) {
                                var e = new FormData;
                                return t.trim().split("&").forEach((function(t) {
                                    if (t) {
                                        var r = t.split("="),
                                            s = r.shift().replace(/\+/g, " "),
                                            n = r.join("=").replace(/\+/g, " ");
                                        e.append(decodeURIComponent(s), decodeURIComponent(n))
                                    }
                                })), e
                            }

                            function w(t) {
                                var e = new b;
                                return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                                    var r = t.split(":"),
                                        s = r.shift().trim();
                                    if (s) {
                                        var n = r.join(":").trim();
                                        e.append(s, n)
                                    }
                                })), e
                            }

                            function k(t, e) {
                                e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new b(e.headers), this.url = e.url || "", this._initBody(t)
                            }
                            j.prototype.clone = function() {
                                return new j(this, {
                                    body: this._bodyInit
                                })
                            }, m.call(j.prototype), m.call(k.prototype), k.prototype.clone = function() {
                                return new k(this._bodyInit, {
                                    status: this.status,
                                    statusText: this.statusText,
                                    headers: new b(this.headers),
                                    url: this.url
                                })
                            }, k.error = function() {
                                var t = new k(null, {
                                    status: 0,
                                    statusText: ""
                                });
                                return t.type = "error", t
                            };
                            var S = [301, 302, 303, 307, 308];
                            k.redirect = function(t, e) {
                                if (-1 === S.indexOf(e)) throw new RangeError("Invalid status code");
                                return new k(null, {
                                    status: e,
                                    headers: {
                                        location: t
                                    }
                                })
                            }, e.DOMException = t.DOMException;
                            try {
                                new e.DOMException
                            } catch (I) {
                                e.DOMException = function(t, e) {
                                    this.message = t, this.name = e;
                                    var r = Error(t);
                                    this.stack = r.stack
                                }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
                            }

                            function _(t, r) {
                                return new Promise((function(s, i) {
                                    var o = new j(t, r);
                                    if (o.signal && o.signal.aborted) return i(new e.DOMException("Aborted", "AbortError"));
                                    var c = new XMLHttpRequest;

                                    function a() {
                                        c.abort()
                                    }
                                    c.onload = function() {
                                        var t = {
                                            status: c.status,
                                            statusText: c.statusText,
                                            headers: w(c.getAllResponseHeaders() || "")
                                        };
                                        t.url = "responseURL" in c ? c.responseURL : t.headers.get("X-Request-URL");
                                        var e = "response" in c ? c.response : c.responseText;
                                        s(new k(e, t))
                                    }, c.onerror = function() {
                                        i(new TypeError("Network request failed"))
                                    }, c.ontimeout = function() {
                                        i(new TypeError("Network request failed"))
                                    }, c.onabort = function() {
                                        i(new e.DOMException("Aborted", "AbortError"))
                                    }, c.open(o.method, o.url, !0), "include" === o.credentials ? c.withCredentials = !0 : "omit" === o.credentials && (c.withCredentials = !1), "responseType" in c && n && (c.responseType = "blob"), o.headers.forEach((function(t, e) {
                                        c.setRequestHeader(e, t)
                                    })), o.signal && (o.signal.addEventListener("abort", a), c.onreadystatechange = function() {
                                        4 === c.readyState && o.signal.removeEventListener("abort", a)
                                    }), c.send("undefined" === typeof o._bodyInit ? null : o._bodyInit)
                                }))
                            }
                            _.polyfill = !0, t.fetch || (t.fetch = _, t.Headers = b, t.Request = j, t.Response = k), e.Headers = b, e.Request = j, e.Response = k, e.fetch = _, Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        }({})
                    }(s), s.fetch.ponyfill = !0, delete s.fetch.polyfill;
                    var n = s;
                    (e = n.fetch).default = n.fetch, e.fetch = n.fetch, e.Headers = n.Headers, e.Request = n.Request, e.Response = n.Response, t.exports = e
                }(mr, mr.exports);
                var yr = k(mr.exports);

                function jr(t) {
                    let e = 0;
                    for (; t > 1;) t /= 2, e++;
                    return e
                }
                class Or {
                    constructor(t, e, r, s, n) {
                        this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = t, this.leaderScheduleSlotOffset = e, this.warmup = r, this.firstNormalEpoch = s, this.firstNormalSlot = n
                    }
                    getEpoch(t) {
                        return this.getEpochAndSlotIndex(t)[0]
                    }
                    getEpochAndSlotIndex(t) {
                        if (t < this.firstNormalSlot) {
                            const r = jr(0 === (e = t + 32 + 1) ? 1 : (e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, 1 + (e |= e >> 32))) - jr(32) - 1;
                            return [r, t - (this.getSlotsInEpoch(r) - 32)]
                        } {
                            const e = t - this.firstNormalSlot,
                                r = Math.floor(e / this.slotsPerEpoch);
                            return [this.firstNormalEpoch + r, e % this.slotsPerEpoch]
                        }
                        var e
                    }
                    getFirstSlotInEpoch(t) {
                        return t <= this.firstNormalEpoch ? 32 * (Math.pow(2, t) - 1) : (t - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot
                    }
                    getLastSlotInEpoch(t) {
                        return this.getFirstSlotInEpoch(t) + this.getSlotsInEpoch(t) - 1
                    }
                    getSlotsInEpoch(t) {
                        return t < this.firstNormalEpoch ? Math.pow(2, t + jr(32)) : this.slotsPerEpoch
                    }
                }
                class wr extends Error {
                    constructor(t, e) {
                        super(t), this.logs = void 0, this.logs = e
                    }
                }
                const kr = Object(b.e)(Object(b.g)(Le), Object(b.m)(), (t => new Le(t))),
                    Sr = Object(b.n)([Object(b.m)(), Object(b.h)("base64")]),
                    _r = Object(b.e)(Object(b.g)(i.Buffer), Sr, (t => i.Buffer.from(t[0], "base64")));

                function Ir(t) {
                    return Object(b.p)([Object(b.o)({
                        jsonrpc: Object(b.h)("2.0"),
                        id: Object(b.m)(),
                        result: t
                    }), Object(b.o)({
                        jsonrpc: Object(b.h)("2.0"),
                        id: Object(b.m)(),
                        error: Object(b.o)({
                            code: Object(b.q)(),
                            message: Object(b.m)(),
                            data: Object(b.k)(Object(b.a)())
                        })
                    })])
                }
                const Ar = Ir(Object(b.q)());

                function Er(t) {
                    return Object(b.e)(Ir(t), Ar, (e => "error" in e ? e : { ...e,
                        result: Object(b.f)(e.result, t)
                    }))
                }

                function vr(t) {
                    return Er(Object(b.o)({
                        context: Object(b.o)({
                            slot: Object(b.j)()
                        }),
                        value: t
                    }))
                }

                function Pr(t) {
                    return Object(b.o)({
                        context: Object(b.o)({
                            slot: Object(b.j)()
                        }),
                        value: t
                    })
                }
                const Br = Object(b.o)({
                        foundation: Object(b.j)(),
                        foundationTerm: Object(b.j)(),
                        initial: Object(b.j)(),
                        taper: Object(b.j)(),
                        terminal: Object(b.j)()
                    }),
                    Rr = Er(Object(b.b)(Object(b.i)(Object(b.o)({
                        epoch: Object(b.j)(),
                        effectiveSlot: Object(b.j)(),
                        amount: Object(b.j)(),
                        postBalance: Object(b.j)()
                    })))),
                    xr = Object(b.o)({
                        epoch: Object(b.j)(),
                        slotIndex: Object(b.j)(),
                        slotsInEpoch: Object(b.j)(),
                        absoluteSlot: Object(b.j)(),
                        blockHeight: Object(b.k)(Object(b.j)()),
                        transactionCount: Object(b.k)(Object(b.j)())
                    }),
                    Tr = Object(b.o)({
                        slotsPerEpoch: Object(b.j)(),
                        leaderScheduleSlotOffset: Object(b.j)(),
                        warmup: Object(b.d)(),
                        firstNormalEpoch: Object(b.j)(),
                        firstNormalSlot: Object(b.j)()
                    }),
                    Cr = Object(b.l)(Object(b.m)(), Object(b.b)(Object(b.j)())),
                    Nr = Object(b.i)(Object(b.p)([Object(b.o)({}), Object(b.m)()])),
                    Wr = Object(b.o)({
                        err: Nr
                    }),
                    Ur = Object(b.h)("receivedSignature"),
                    zr = Object(b.o)({
                        "solana-core": Object(b.m)(),
                        "feature-set": Object(b.k)(Object(b.j)())
                    }),
                    qr = vr(Object(b.o)({
                        err: Object(b.i)(Object(b.p)([Object(b.o)({}), Object(b.m)()])),
                        logs: Object(b.i)(Object(b.b)(Object(b.m)())),
                        accounts: Object(b.k)(Object(b.i)(Object(b.b)(Object(b.o)({
                            executable: Object(b.d)(),
                            owner: Object(b.m)(),
                            lamports: Object(b.j)(),
                            data: Object(b.b)(Object(b.m)()),
                            rentEpoch: Object(b.k)(Object(b.j)())
                        })))),
                        unitsConsumed: Object(b.k)(Object(b.j)())
                    }));
                const Lr = Er(Br),
                    Kr = Er(xr),
                    Mr = Er(Tr),
                    Dr = Er(Cr),
                    Fr = Er(Object(b.j)()),
                    Hr = vr(Object(b.o)({
                        total: Object(b.j)(),
                        circulating: Object(b.j)(),
                        nonCirculating: Object(b.j)(),
                        nonCirculatingAccounts: Object(b.b)(kr)
                    })),
                    $r = Object(b.o)({
                        amount: Object(b.m)(),
                        uiAmount: Object(b.i)(Object(b.j)()),
                        decimals: Object(b.j)(),
                        uiAmountString: Object(b.k)(Object(b.m)())
                    }),
                    Gr = vr(Object(b.b)(Object(b.o)({
                        address: kr,
                        amount: Object(b.m)(),
                        uiAmount: Object(b.i)(Object(b.j)()),
                        decimals: Object(b.j)(),
                        uiAmountString: Object(b.k)(Object(b.m)())
                    }))),
                    Vr = vr(Object(b.b)(Object(b.o)({
                        pubkey: kr,
                        account: Object(b.o)({
                            executable: Object(b.d)(),
                            owner: kr,
                            lamports: Object(b.j)(),
                            data: _r,
                            rentEpoch: Object(b.j)()
                        })
                    }))),
                    Xr = Object(b.o)({
                        program: Object(b.m)(),
                        parsed: Object(b.q)(),
                        space: Object(b.j)()
                    }),
                    Jr = vr(Object(b.b)(Object(b.o)({
                        pubkey: kr,
                        account: Object(b.o)({
                            executable: Object(b.d)(),
                            owner: kr,
                            lamports: Object(b.j)(),
                            data: Xr,
                            rentEpoch: Object(b.j)()
                        })
                    }))),
                    Zr = vr(Object(b.b)(Object(b.o)({
                        lamports: Object(b.j)(),
                        address: kr
                    }))),
                    Qr = Object(b.o)({
                        executable: Object(b.d)(),
                        owner: kr,
                        lamports: Object(b.j)(),
                        data: _r,
                        rentEpoch: Object(b.j)()
                    }),
                    Yr = Object(b.o)({
                        pubkey: kr,
                        account: Qr
                    }),
                    ts = Object(b.e)(Object(b.p)([Object(b.g)(i.Buffer), Xr]), Object(b.p)([Sr, Xr]), (t => Array.isArray(t) ? Object(b.f)(t, _r) : t)),
                    es = Object(b.o)({
                        executable: Object(b.d)(),
                        owner: kr,
                        lamports: Object(b.j)(),
                        data: ts,
                        rentEpoch: Object(b.j)()
                    }),
                    rs = Object(b.o)({
                        pubkey: kr,
                        account: es
                    }),
                    ss = Object(b.o)({
                        state: Object(b.p)([Object(b.h)("active"), Object(b.h)("inactive"), Object(b.h)("activating"), Object(b.h)("deactivating")]),
                        active: Object(b.j)(),
                        inactive: Object(b.j)()
                    }),
                    ns = Er(Object(b.b)(Object(b.o)({
                        signature: Object(b.m)(),
                        slot: Object(b.j)(),
                        err: Nr,
                        memo: Object(b.i)(Object(b.m)()),
                        blockTime: Object(b.k)(Object(b.i)(Object(b.j)()))
                    }))),
                    is = Er(Object(b.b)(Object(b.o)({
                        signature: Object(b.m)(),
                        slot: Object(b.j)(),
                        err: Nr,
                        memo: Object(b.i)(Object(b.m)()),
                        blockTime: Object(b.k)(Object(b.i)(Object(b.j)()))
                    }))),
                    os = Object(b.o)({
                        subscription: Object(b.j)(),
                        result: Pr(Qr)
                    }),
                    cs = Object(b.o)({
                        pubkey: kr,
                        account: Qr
                    }),
                    as = Object(b.o)({
                        subscription: Object(b.j)(),
                        result: Pr(cs)
                    }),
                    us = Object(b.o)({
                        parent: Object(b.j)(),
                        slot: Object(b.j)(),
                        root: Object(b.j)()
                    }),
                    hs = Object(b.o)({
                        subscription: Object(b.j)(),
                        result: us
                    }),
                    ls = Object(b.p)([Object(b.o)({
                        type: Object(b.p)([Object(b.h)("firstShredReceived"), Object(b.h)("completed"), Object(b.h)("optimisticConfirmation"), Object(b.h)("root")]),
                        slot: Object(b.j)(),
                        timestamp: Object(b.j)()
                    }), Object(b.o)({
                        type: Object(b.h)("createdBank"),
                        parent: Object(b.j)(),
                        slot: Object(b.j)(),
                        timestamp: Object(b.j)()
                    }), Object(b.o)({
                        type: Object(b.h)("frozen"),
                        slot: Object(b.j)(),
                        timestamp: Object(b.j)(),
                        stats: Object(b.o)({
                            numTransactionEntries: Object(b.j)(),
                            numSuccessfulTransactions: Object(b.j)(),
                            numFailedTransactions: Object(b.j)(),
                            maxTransactionsPerEntry: Object(b.j)()
                        })
                    }), Object(b.o)({
                        type: Object(b.h)("dead"),
                        slot: Object(b.j)(),
                        timestamp: Object(b.j)(),
                        err: Object(b.m)()
                    })]),
                    bs = Object(b.o)({
                        subscription: Object(b.j)(),
                        result: ls
                    }),
                    ds = Object(b.o)({
                        subscription: Object(b.j)(),
                        result: Pr(Object(b.p)([Wr, Ur]))
                    }),
                    ps = Object(b.o)({
                        subscription: Object(b.j)(),
                        result: Object(b.j)()
                    }),
                    fs = Object(b.o)({
                        pubkey: Object(b.m)(),
                        gossip: Object(b.i)(Object(b.m)()),
                        tpu: Object(b.i)(Object(b.m)()),
                        rpc: Object(b.i)(Object(b.m)()),
                        version: Object(b.i)(Object(b.m)())
                    }),
                    gs = Object(b.o)({
                        votePubkey: Object(b.m)(),
                        nodePubkey: Object(b.m)(),
                        activatedStake: Object(b.j)(),
                        epochVoteAccount: Object(b.d)(),
                        epochCredits: Object(b.b)(Object(b.n)([Object(b.j)(), Object(b.j)(), Object(b.j)()])),
                        commission: Object(b.j)(),
                        lastVote: Object(b.j)(),
                        rootSlot: Object(b.i)(Object(b.j)())
                    }),
                    ms = Er(Object(b.o)({
                        current: Object(b.b)(gs),
                        delinquent: Object(b.b)(gs)
                    })),
                    ys = Object(b.p)([Object(b.h)("processed"), Object(b.h)("confirmed"), Object(b.h)("finalized")]),
                    js = Object(b.o)({
                        slot: Object(b.j)(),
                        confirmations: Object(b.i)(Object(b.j)()),
                        err: Nr,
                        confirmationStatus: Object(b.k)(ys)
                    }),
                    Os = vr(Object(b.b)(Object(b.i)(js))),
                    ws = Er(Object(b.j)()),
                    ks = Object(b.o)({
                        signatures: Object(b.b)(Object(b.m)()),
                        message: Object(b.o)({
                            accountKeys: Object(b.b)(Object(b.m)()),
                            header: Object(b.o)({
                                numRequiredSignatures: Object(b.j)(),
                                numReadonlySignedAccounts: Object(b.j)(),
                                numReadonlyUnsignedAccounts: Object(b.j)()
                            }),
                            instructions: Object(b.b)(Object(b.o)({
                                accounts: Object(b.b)(Object(b.j)()),
                                data: Object(b.m)(),
                                programIdIndex: Object(b.j)()
                            })),
                            recentBlockhash: Object(b.m)()
                        })
                    }),
                    Ss = Object(b.o)({
                        parsed: Object(b.q)(),
                        program: Object(b.m)(),
                        programId: kr
                    }),
                    _s = Object(b.o)({
                        accounts: Object(b.b)(kr),
                        data: Object(b.m)(),
                        programId: kr
                    }),
                    Is = Object(b.p)([_s, Ss]),
                    As = Object(b.p)([Object(b.o)({
                        parsed: Object(b.q)(),
                        program: Object(b.m)(),
                        programId: Object(b.m)()
                    }), Object(b.o)({
                        accounts: Object(b.b)(Object(b.m)()),
                        data: Object(b.m)(),
                        programId: Object(b.m)()
                    })]),
                    Es = Object(b.e)(Is, As, (t => "accounts" in t ? Object(b.f)(t, _s) : Object(b.f)(t, Ss))),
                    vs = Object(b.o)({
                        signatures: Object(b.b)(Object(b.m)()),
                        message: Object(b.o)({
                            accountKeys: Object(b.b)(Object(b.o)({
                                pubkey: kr,
                                signer: Object(b.d)(),
                                writable: Object(b.d)()
                            })),
                            instructions: Object(b.b)(Es),
                            recentBlockhash: Object(b.m)()
                        })
                    }),
                    Ps = Object(b.o)({
                        accountIndex: Object(b.j)(),
                        mint: Object(b.m)(),
                        uiTokenAmount: $r
                    }),
                    Bs = Object(b.o)({
                        err: Nr,
                        fee: Object(b.j)(),
                        innerInstructions: Object(b.k)(Object(b.i)(Object(b.b)(Object(b.o)({
                            index: Object(b.j)(),
                            instructions: Object(b.b)(Object(b.o)({
                                accounts: Object(b.b)(Object(b.j)()),
                                data: Object(b.m)(),
                                programIdIndex: Object(b.j)()
                            }))
                        })))),
                        preBalances: Object(b.b)(Object(b.j)()),
                        postBalances: Object(b.b)(Object(b.j)()),
                        logMessages: Object(b.k)(Object(b.i)(Object(b.b)(Object(b.m)()))),
                        preTokenBalances: Object(b.k)(Object(b.i)(Object(b.b)(Ps))),
                        postTokenBalances: Object(b.k)(Object(b.i)(Object(b.b)(Ps)))
                    }),
                    Rs = Object(b.o)({
                        err: Nr,
                        fee: Object(b.j)(),
                        innerInstructions: Object(b.k)(Object(b.i)(Object(b.b)(Object(b.o)({
                            index: Object(b.j)(),
                            instructions: Object(b.b)(Es)
                        })))),
                        preBalances: Object(b.b)(Object(b.j)()),
                        postBalances: Object(b.b)(Object(b.j)()),
                        logMessages: Object(b.k)(Object(b.i)(Object(b.b)(Object(b.m)()))),
                        preTokenBalances: Object(b.k)(Object(b.i)(Object(b.b)(Ps))),
                        postTokenBalances: Object(b.k)(Object(b.i)(Object(b.b)(Ps)))
                    }),
                    xs = Er(Object(b.i)(Object(b.o)({
                        blockhash: Object(b.m)(),
                        previousBlockhash: Object(b.m)(),
                        parentSlot: Object(b.j)(),
                        transactions: Object(b.b)(Object(b.o)({
                            transaction: ks,
                            meta: Object(b.i)(Bs)
                        })),
                        rewards: Object(b.k)(Object(b.b)(Object(b.o)({
                            pubkey: Object(b.m)(),
                            lamports: Object(b.j)(),
                            postBalance: Object(b.i)(Object(b.j)()),
                            rewardType: Object(b.i)(Object(b.m)())
                        }))),
                        blockTime: Object(b.i)(Object(b.j)())
                    }))),
                    Ts = Er(Object(b.i)(Object(b.o)({
                        blockhash: Object(b.m)(),
                        previousBlockhash: Object(b.m)(),
                        parentSlot: Object(b.j)(),
                        signatures: Object(b.b)(Object(b.m)()),
                        blockTime: Object(b.i)(Object(b.j)())
                    }))),
                    Cs = Er(Object(b.i)(Object(b.o)({
                        slot: Object(b.j)(),
                        meta: Bs,
                        blockTime: Object(b.k)(Object(b.i)(Object(b.j)())),
                        transaction: ks
                    }))),
                    Ns = Er(Object(b.i)(Object(b.o)({
                        slot: Object(b.j)(),
                        transaction: vs,
                        meta: Object(b.i)(Rs),
                        blockTime: Object(b.k)(Object(b.i)(Object(b.j)()))
                    }))),
                    Ws = vr(Object(b.o)({
                        blockhash: Object(b.m)(),
                        feeCalculator: Object(b.o)({
                            lamportsPerSignature: Object(b.j)()
                        })
                    })),
                    Us = Object(b.o)({
                        slot: Object(b.j)(),
                        numTransactions: Object(b.j)(),
                        numSlots: Object(b.j)(),
                        samplePeriodSecs: Object(b.j)()
                    }),
                    zs = Er(Object(b.b)(Us)),
                    qs = vr(Object(b.i)(Object(b.o)({
                        feeCalculator: Object(b.o)({
                            lamportsPerSignature: Object(b.j)()
                        })
                    }))),
                    Ls = Er(Object(b.m)()),
                    Ks = Er(Object(b.m)()),
                    Ms = Object(b.o)({
                        err: Nr,
                        logs: Object(b.b)(Object(b.m)()),
                        signature: Object(b.m)()
                    }),
                    Ds = Object(b.o)({
                        result: Pr(Ms),
                        subscription: Object(b.j)()
                    });
                class Fs {
                    constructor(t, e) {
                        this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
                            recentBlockhash: null,
                            lastFetch: 0,
                            transactionSignatures: [],
                            simulatedSignatures: []
                        }, this._accountChangeSubscriptionCounter = 0, this._accountChangeSubscriptions = {}, this._programAccountChangeSubscriptionCounter = 0, this._programAccountChangeSubscriptions = {}, this._rootSubscriptionCounter = 0, this._rootSubscriptions = {}, this._signatureSubscriptionCounter = 0, this._signatureSubscriptions = {}, this._slotSubscriptionCounter = 0, this._slotSubscriptions = {}, this._logsSubscriptionCounter = 0, this._logsSubscriptions = {}, this._slotUpdateSubscriptionCounter = 0, this._slotUpdateSubscriptions = {};
                        let r = new URL(t);
                        r.protocol;
                        let s, n, i, o;
                        var c;
                        e && "string" === typeof e ? this._commitment = e : e && (this._commitment = e.commitment, this._confirmTransactionInitialTimeout = e.confirmTransactionInitialTimeout, s = e.wsEndpoint, n = e.httpHeaders, i = e.fetchMiddleware, o = e.disableRetryOnRateLimit), this._rpcEndpoint = t, this._rpcWsEndpoint = s || function(t) {
                            let e = new URL(t);
                            const r = "https:" === e.protocol;
                            return e.protocol = r ? "wss:" : "ws:", e.host = "", "" !== e.port && (e.port = String(Number(e.port) + 1)), e.toString()
                        }(t), this._rpcClient = function(t, e, r, s, n) {
                            let i;
                            return s && (i = (t, e) => new Promise(((r, n) => {
                                s(t, e, (async (t, e) => {
                                    try {
                                        r(await yr(t, e))
                                    } catch (s) {
                                        n(s)
                                    }
                                }))
                            }))), new f.a((async (e, s) => {
                                const o = {
                                    method: "POST",
                                    body: e,
                                    agent: void 0,
                                    headers: Object.assign({
                                        "Content-Type": "application/json"
                                    }, r || {})
                                };
                                try {
                                    let e, r = 5,
                                        c = 500;
                                    for (; e = i ? await i(t, o) : await yr(t, o), 429 === e.status && !0 !== n && (r -= 1, 0 !== r);) console.log(`Server responded with ${e.status} ${e.statusText}.  Retrying after ${c}ms delay...`), await cr(c), c *= 2;
                                    const a = await e.text();
                                    e.ok ? s(null, a) : s(new Error(`${e.status} ${e.statusText}: ${a}`))
                                } catch (c) {
                                    c instanceof Error && s(c)
                                }
                            }), {})
                        }(r.toString(), 0, n, i, o), this._rpcRequest = (c = this._rpcClient, (t, e) => new Promise(((r, s) => {
                            c.request(t, e, ((t, e) => {
                                t ? s(t) : r(e)
                            }))
                        }))), this._rpcBatchRequest = function(t) {
                            return e => new Promise(((r, s) => {
                                0 === e.length && r([]);
                                const n = e.map((e => t.request(e.methodName, e.args)));
                                t.request(n, ((t, e) => {
                                    t ? s(t) : r(e)
                                }))
                            }))
                        }(this._rpcClient), this._rpcWebSocket = new d.Client(this._rpcWsEndpoint, {
                            autoconnect: !1,
                            max_reconnects: 1 / 0
                        }), this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)), this._rpcWebSocket.on("error", this._wsOnError.bind(this)), this._rpcWebSocket.on("close", this._wsOnClose.bind(this)), this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)), this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)), this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)), this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)), this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)), this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)), this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this))
                    }
                    get commitment() {
                        return this._commitment
                    }
                    async getBalanceAndContext(t, e) {
                        const r = this._buildArgs([t.toBase58()], e),
                            s = await this._rpcRequest("getBalance", r),
                            n = Object(b.f)(s, vr(Object(b.j)()));
                        if ("error" in n) throw new Error("failed to get balance for " + t.toBase58() + ": " + n.error.message);
                        return n.result
                    }
                    async getBalance(t, e) {
                        return await this.getBalanceAndContext(t, e).then((t => t.value)).catch((e => {
                            throw new Error("failed to get balance of account " + t.toBase58() + ": " + e)
                        }))
                    }
                    async getBlockTime(t) {
                        const e = await this._rpcRequest("getBlockTime", [t]),
                            r = Object(b.f)(e, Er(Object(b.i)(Object(b.j)())));
                        if ("error" in r) throw new Error("failed to get block time for slot " + t + ": " + r.error.message);
                        return r.result
                    }
                    async getMinimumLedgerSlot() {
                        const t = await this._rpcRequest("minimumLedgerSlot", []),
                            e = Object(b.f)(t, Er(Object(b.j)()));
                        if ("error" in e) throw new Error("failed to get minimum ledger slot: " + e.error.message);
                        return e.result
                    }
                    async getFirstAvailableBlock() {
                        const t = await this._rpcRequest("getFirstAvailableBlock", []),
                            e = Object(b.f)(t, Fr);
                        if ("error" in e) throw new Error("failed to get first available block: " + e.error.message);
                        return e.result
                    }
                    async getSupply(t) {
                        let e = {};
                        e = "string" === typeof t ? {
                            commitment: t
                        } : t ? { ...t,
                            commitment: t && t.commitment || this.commitment
                        } : {
                            commitment: this.commitment
                        };
                        const r = await this._rpcRequest("getSupply", [e]),
                            s = Object(b.f)(r, Hr);
                        if ("error" in s) throw new Error("failed to get supply: " + s.error.message);
                        return s.result
                    }
                    async getTokenSupply(t, e) {
                        const r = this._buildArgs([t.toBase58()], e),
                            s = await this._rpcRequest("getTokenSupply", r),
                            n = Object(b.f)(s, vr($r));
                        if ("error" in n) throw new Error("failed to get token supply: " + n.error.message);
                        return n.result
                    }
                    async getTokenAccountBalance(t, e) {
                        const r = this._buildArgs([t.toBase58()], e),
                            s = await this._rpcRequest("getTokenAccountBalance", r),
                            n = Object(b.f)(s, vr($r));
                        if ("error" in n) throw new Error("failed to get token account balance: " + n.error.message);
                        return n.result
                    }
                    async getTokenAccountsByOwner(t, e, r) {
                        let s = [t.toBase58()];
                        "mint" in e ? s.push({
                            mint: e.mint.toBase58()
                        }) : s.push({
                            programId: e.programId.toBase58()
                        });
                        const n = this._buildArgs(s, r, "base64"),
                            i = await this._rpcRequest("getTokenAccountsByOwner", n),
                            o = Object(b.f)(i, Vr);
                        if ("error" in o) throw new Error("failed to get token accounts owned by account " + t.toBase58() + ": " + o.error.message);
                        return o.result
                    }
                    async getParsedTokenAccountsByOwner(t, e, r) {
                        let s = [t.toBase58()];
                        "mint" in e ? s.push({
                            mint: e.mint.toBase58()
                        }) : s.push({
                            programId: e.programId.toBase58()
                        });
                        const n = this._buildArgs(s, r, "jsonParsed"),
                            i = await this._rpcRequest("getTokenAccountsByOwner", n),
                            o = Object(b.f)(i, Jr);
                        if ("error" in o) throw new Error("failed to get token accounts owned by account " + t.toBase58() + ": " + o.error.message);
                        return o.result
                    }
                    async getLargestAccounts(t) {
                        const e = { ...t,
                                commitment: t && t.commitment || this.commitment
                            },
                            r = e.filter || e.commitment ? [e] : [],
                            s = await this._rpcRequest("getLargestAccounts", r),
                            n = Object(b.f)(s, Zr);
                        if ("error" in n) throw new Error("failed to get largest accounts: " + n.error.message);
                        return n.result
                    }
                    async getTokenLargestAccounts(t, e) {
                        const r = this._buildArgs([t.toBase58()], e),
                            s = await this._rpcRequest("getTokenLargestAccounts", r),
                            n = Object(b.f)(s, Gr);
                        if ("error" in n) throw new Error("failed to get token largest accounts: " + n.error.message);
                        return n.result
                    }
                    async getAccountInfoAndContext(t, e) {
                        const r = this._buildArgs([t.toBase58()], e, "base64"),
                            s = await this._rpcRequest("getAccountInfo", r),
                            n = Object(b.f)(s, vr(Object(b.i)(Qr)));
                        if ("error" in n) throw new Error("failed to get info about account " + t.toBase58() + ": " + n.error.message);
                        return n.result
                    }
                    async getParsedAccountInfo(t, e) {
                        const r = this._buildArgs([t.toBase58()], e, "jsonParsed"),
                            s = await this._rpcRequest("getAccountInfo", r),
                            n = Object(b.f)(s, vr(Object(b.i)(es)));
                        if ("error" in n) throw new Error("failed to get info about account " + t.toBase58() + ": " + n.error.message);
                        return n.result
                    }
                    async getAccountInfo(t, e) {
                        try {
                            return (await this.getAccountInfoAndContext(t, e)).value
                        } catch (r) {
                            throw new Error("failed to get info about account " + t.toBase58() + ": " + r)
                        }
                    }
                    async getMultipleAccountsInfo(t, e) {
                        const r = t.map((t => t.toBase58())),
                            s = this._buildArgs([r], e, "base64"),
                            n = await this._rpcRequest("getMultipleAccounts", s),
                            i = Object(b.f)(n, vr(Object(b.b)(Object(b.i)(Qr))));
                        if ("error" in i) throw new Error("failed to get info for accounts " + r + ": " + i.error.message);
                        return i.result.value
                    }
                    async getStakeActivation(t, e, r) {
                        const s = this._buildArgs([t.toBase58()], e, void 0, void 0 !== r ? {
                                epoch: r
                            } : void 0),
                            n = await this._rpcRequest("getStakeActivation", s),
                            i = Object(b.f)(n, Er(ss));
                        if ("error" in i) throw new Error(`failed to get Stake Activation ${t.toBase58()}: ${i.error.message}`);
                        return i.result
                    }
                    async getProgramAccounts(t, e) {
                        const r = {};
                        let s, n;
                        e && ("string" === typeof e ? s = e : (s = e.commitment, n = e.encoding, e.dataSlice && (r.dataSlice = e.dataSlice), e.filters && (r.filters = e.filters)));
                        const i = this._buildArgs([t.toBase58()], s, n || "base64", r),
                            o = await this._rpcRequest("getProgramAccounts", i),
                            c = Object(b.f)(o, Er(Object(b.b)(Yr)));
                        if ("error" in c) throw new Error("failed to get accounts owned by program " + t.toBase58() + ": " + c.error.message);
                        return c.result
                    }
                    async getParsedProgramAccounts(t, e) {
                        const r = {};
                        let s;
                        e && ("string" === typeof e ? s = e : (s = e.commitment, e.filters && (r.filters = e.filters)));
                        const n = this._buildArgs([t.toBase58()], s, "jsonParsed", r),
                            i = await this._rpcRequest("getProgramAccounts", n),
                            o = Object(b.f)(i, Er(Object(b.b)(rs)));
                        if ("error" in o) throw new Error("failed to get accounts owned by program " + t.toBase58() + ": " + o.error.message);
                        return o.result
                    }
                    async confirmTransaction(t, e) {
                        let r;
                        try {
                            r = u.a.decode(t)
                        } catch (h) {
                            throw new Error("signature must be base58 encoded: " + t)
                        }
                        Ze(64 === r.length, "signature has invalid length");
                        const s = Date.now(),
                            n = e || this.commitment;
                        let i, o = null;
                        const c = new Promise(((e, r) => {
                            try {
                                i = this.onSignature(t, ((t, r) => {
                                    i = void 0, o = {
                                        context: r,
                                        value: t
                                    }, e(null)
                                }), n)
                            } catch (h) {
                                r(h)
                            }
                        }));
                        let a = this._confirmTransactionInitialTimeout || 6e4;
                        switch (n) {
                            case "processed":
                            case "recent":
                            case "single":
                            case "confirmed":
                            case "singleGossip":
                                a = this._confirmTransactionInitialTimeout || 3e4
                        }
                        try {
                            await

                            function(t, e) {
                                let r;
                                const s = new Promise((t => {
                                    r = setTimeout((() => t(null)), e)
                                }));
                                return Promise.race([t, s]).then((t => (clearTimeout(r), t)))
                            }(c, a)
                        } finally {
                            i && this.removeSignatureListener(i)
                        }
                        if (null === o) {
                            const e = (Date.now() - s) / 1e3;
                            throw new Error(`Transaction was not confirmed in ${e.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${t} using the Solana Explorer or CLI tools.`)
                        }
                        return o
                    }
                    async getClusterNodes() {
                        const t = await this._rpcRequest("getClusterNodes", []),
                            e = Object(b.f)(t, Er(Object(b.b)(fs)));
                        if ("error" in e) throw new Error("failed to get cluster nodes: " + e.error.message);
                        return e.result
                    }
                    async getVoteAccounts(t) {
                        const e = this._buildArgs([], t),
                            r = await this._rpcRequest("getVoteAccounts", e),
                            s = Object(b.f)(r, ms);
                        if ("error" in s) throw new Error("failed to get vote accounts: " + s.error.message);
                        return s.result
                    }
                    async getSlot(t) {
                        const e = this._buildArgs([], t),
                            r = await this._rpcRequest("getSlot", e),
                            s = Object(b.f)(r, Er(Object(b.j)()));
                        if ("error" in s) throw new Error("failed to get slot: " + s.error.message);
                        return s.result
                    }
                    async getSlotLeader(t) {
                        const e = this._buildArgs([], t),
                            r = await this._rpcRequest("getSlotLeader", e),
                            s = Object(b.f)(r, Er(Object(b.m)()));
                        if ("error" in s) throw new Error("failed to get slot leader: " + s.error.message);
                        return s.result
                    }
                    async getSlotLeaders(t, e) {
                        const r = [t, e],
                            s = await this._rpcRequest("getSlotLeaders", r),
                            n = Object(b.f)(s, Er(Object(b.b)(kr)));
                        if ("error" in n) throw new Error("failed to get slot leaders: " + n.error.message);
                        return n.result
                    }
                    async getSignatureStatus(t, e) {
                        const {
                            context: r,
                            value: s
                        } = await this.getSignatureStatuses([t], e);
                        Ze(1 === s.length);
                        return {
                            context: r,
                            value: s[0]
                        }
                    }
                    async getSignatureStatuses(t, e) {
                        const r = [t];
                        e && r.push(e);
                        const s = await this._rpcRequest("getSignatureStatuses", r),
                            n = Object(b.f)(s, Os);
                        if ("error" in n) throw new Error("failed to get signature status: " + n.error.message);
                        return n.result
                    }
                    async getTransactionCount(t) {
                        const e = this._buildArgs([], t),
                            r = await this._rpcRequest("getTransactionCount", e),
                            s = Object(b.f)(r, Er(Object(b.j)()));
                        if ("error" in s) throw new Error("failed to get transaction count: " + s.error.message);
                        return s.result
                    }
                    async getTotalSupply(t) {
                        return (await this.getSupply({
                            commitment: t,
                            excludeNonCirculatingAccountsList: !0
                        })).value.total
                    }
                    async getInflationGovernor(t) {
                        const e = this._buildArgs([], t),
                            r = await this._rpcRequest("getInflationGovernor", e),
                            s = Object(b.f)(r, Lr);
                        if ("error" in s) throw new Error("failed to get inflation: " + s.error.message);
                        return s.result
                    }
                    async getInflationReward(t, e, r) {
                        const s = this._buildArgs([t.map((t => t.toBase58()))], r, void 0, {
                                epoch: e
                            }),
                            n = await this._rpcRequest("getInflationReward", s),
                            i = Object(b.f)(n, Rr);
                        if ("error" in i) throw new Error("failed to get inflation reward: " + i.error.message);
                        return i.result
                    }
                    async getEpochInfo(t) {
                        const e = this._buildArgs([], t),
                            r = await this._rpcRequest("getEpochInfo", e),
                            s = Object(b.f)(r, Kr);
                        if ("error" in s) throw new Error("failed to get epoch info: " + s.error.message);
                        return s.result
                    }
                    async getEpochSchedule() {
                        const t = await this._rpcRequest("getEpochSchedule", []),
                            e = Object(b.f)(t, Mr);
                        if ("error" in e) throw new Error("failed to get epoch schedule: " + e.error.message);
                        const r = e.result;
                        return new Or(r.slotsPerEpoch, r.leaderScheduleSlotOffset, r.warmup, r.firstNormalEpoch, r.firstNormalSlot)
                    }
                    async getLeaderSchedule() {
                        const t = await this._rpcRequest("getLeaderSchedule", []),
                            e = Object(b.f)(t, Dr);
                        if ("error" in e) throw new Error("failed to get leader schedule: " + e.error.message);
                        return e.result
                    }
                    async getMinimumBalanceForRentExemption(t, e) {
                        const r = this._buildArgs([t], e),
                            s = await this._rpcRequest("getMinimumBalanceForRentExemption", r),
                            n = Object(b.f)(s, ws);
                        return "error" in n ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : n.result
                    }
                    async getRecentBlockhashAndContext(t) {
                        const e = this._buildArgs([], t),
                            r = await this._rpcRequest("getRecentBlockhash", e),
                            s = Object(b.f)(r, Ws);
                        if ("error" in s) throw new Error("failed to get recent blockhash: " + s.error.message);
                        return s.result
                    }
                    async getRecentPerformanceSamples(t) {
                        const e = this._buildArgs(t ? [t] : []),
                            r = await this._rpcRequest("getRecentPerformanceSamples", e),
                            s = Object(b.f)(r, zs);
                        if ("error" in s) throw new Error("failed to get recent performance samples: " + s.error.message);
                        return s.result
                    }
                    async getFeeCalculatorForBlockhash(t, e) {
                        const r = this._buildArgs([t], e),
                            s = await this._rpcRequest("getFeeCalculatorForBlockhash", r),
                            n = Object(b.f)(s, qs);
                        if ("error" in n) throw new Error("failed to get fee calculator: " + n.error.message);
                        const {
                            context: i,
                            value: o
                        } = n.result;
                        return {
                            context: i,
                            value: null !== o ? o.feeCalculator : null
                        }
                    }
                    async getRecentBlockhash(t) {
                        try {
                            return (await this.getRecentBlockhashAndContext(t)).value
                        } catch (e) {
                            throw new Error("failed to get recent blockhash: " + e)
                        }
                    }
                    async getVersion() {
                        const t = await this._rpcRequest("getVersion", []),
                            e = Object(b.f)(t, Er(zr));
                        if ("error" in e) throw new Error("failed to get version: " + e.error.message);
                        return e.result
                    }
                    async getGenesisHash() {
                        const t = await this._rpcRequest("getGenesisHash", []),
                            e = Object(b.f)(t, Er(Object(b.m)()));
                        if ("error" in e) throw new Error("failed to get genesis hash: " + e.error.message);
                        return e.result
                    }
                    async getBlock(t, e) {
                        const r = this._buildArgsAtLeastConfirmed([t], e && e.commitment),
                            s = await this._rpcRequest("getConfirmedBlock", r),
                            n = Object(b.f)(s, xs);
                        if ("error" in n) throw new Error("failed to get confirmed block: " + n.error.message);
                        const i = n.result;
                        return i ? { ...i,
                            transactions: i.transactions.map((({
                                transaction: t,
                                meta: e
                            }) => {
                                const r = new Je(t.message);
                                return {
                                    meta: e,
                                    transaction: { ...t,
                                        message: r
                                    }
                                }
                            }))
                        } : i
                    }
                    async getTransaction(t, e) {
                        const r = this._buildArgsAtLeastConfirmed([t], e && e.commitment),
                            s = await this._rpcRequest("getConfirmedTransaction", r),
                            n = Object(b.f)(s, Cs);
                        if ("error" in n) throw new Error("failed to get confirmed transaction: " + n.error.message);
                        const i = n.result;
                        return i ? { ...i,
                            transaction: { ...i.transaction,
                                message: new Je(i.transaction.message)
                            }
                        } : i
                    }
                    async getConfirmedBlock(t, e) {
                        const r = await this.getBlock(t, {
                            commitment: e
                        });
                        if (!r) throw new Error("Confirmed block " + t + " not found");
                        return { ...r,
                            transactions: r.transactions.map((({
                                transaction: t,
                                meta: e
                            }) => ({
                                meta: e,
                                transaction: er.populate(t.message, t.signatures)
                            })))
                        }
                    }
                    async getBlocks(t, e, r) {
                        const s = this._buildArgsAtLeastConfirmed(void 0 !== e ? [t, e] : [t], r),
                            n = await this._rpcRequest("getConfirmedBlocks", s),
                            i = Object(b.f)(n, Er(Object(b.b)(Object(b.j)())));
                        if ("error" in i) throw new Error("failed to get blocks: " + i.error.message);
                        return i.result
                    }
                    async getConfirmedBlockSignatures(t, e) {
                        const r = this._buildArgsAtLeastConfirmed([t], e, void 0, {
                                transactionDetails: "signatures",
                                rewards: !1
                            }),
                            s = await this._rpcRequest("getConfirmedBlock", r),
                            n = Object(b.f)(s, Ts);
                        if ("error" in n) throw new Error("failed to get confirmed block: " + n.error.message);
                        const i = n.result;
                        if (!i) throw new Error("Confirmed block " + t + " not found");
                        return i
                    }
                    async getConfirmedTransaction(t, e) {
                        const r = await this.getTransaction(t, {
                            commitment: e
                        });
                        if (!r) return r;
                        const {
                            message: s,
                            signatures: n
                        } = r.transaction;
                        return { ...r,
                            transaction: er.populate(s, n)
                        }
                    }
                    async getParsedConfirmedTransaction(t, e) {
                        const r = this._buildArgsAtLeastConfirmed([t], e, "jsonParsed"),
                            s = await this._rpcRequest("getConfirmedTransaction", r),
                            n = Object(b.f)(s, Ns);
                        if ("error" in n) throw new Error("failed to get confirmed transaction: " + n.error.message);
                        return n.result
                    }
                    async getParsedConfirmedTransactions(t, e) {
                        const r = t.map((t => ({
                            methodName: "getConfirmedTransaction",
                            args: this._buildArgsAtLeastConfirmed([t], e, "jsonParsed")
                        })));
                        return (await this._rpcBatchRequest(r)).map((t => {
                            const e = Object(b.f)(t, Ns);
                            if ("error" in e) throw new Error("failed to get confirmed transactions: " + e.error.message);
                            return e.result
                        }))
                    }
                    async getConfirmedSignaturesForAddress(t, e, r) {
                        let s = {},
                            n = await this.getFirstAvailableBlock();
                        for (; !("until" in s) && !(--e <= 0 || e < n);) try {
                            const t = await this.getConfirmedBlockSignatures(e, "finalized");
                            t.signatures.length > 0 && (s.until = t.signatures[t.signatures.length - 1].toString())
                        } catch (o) {
                            if (o instanceof Error && o.message.includes("skipped")) continue;
                            throw o
                        }
                        let i = await this.getSlot("finalized");
                        for (; !("before" in s) && !(++r > i);) try {
                            const t = await this.getConfirmedBlockSignatures(r);
                            t.signatures.length > 0 && (s.before = t.signatures[t.signatures.length - 1].toString())
                        } catch (o) {
                            if (o instanceof Error && o.message.includes("skipped")) continue;
                            throw o
                        }
                        return (await this.getConfirmedSignaturesForAddress2(t, s)).map((t => t.signature))
                    }
                    async getConfirmedSignaturesForAddress2(t, e, r) {
                        const s = this._buildArgsAtLeastConfirmed([t.toBase58()], r, void 0, e),
                            n = await this._rpcRequest("getConfirmedSignaturesForAddress2", s),
                            i = Object(b.f)(n, ns);
                        if ("error" in i) throw new Error("failed to get confirmed signatures for address: " + i.error.message);
                        return i.result
                    }
                    async getSignaturesForAddress(t, e, r) {
                        const s = this._buildArgsAtLeastConfirmed([t.toBase58()], r, void 0, e),
                            n = await this._rpcRequest("getSignaturesForAddress", s),
                            i = Object(b.f)(n, is);
                        if ("error" in i) throw new Error("failed to get signatures for address: " + i.error.message);
                        return i.result
                    }
                    async getNonceAndContext(t, e) {
                        const {
                            context: r,
                            value: s
                        } = await this.getAccountInfoAndContext(t, e);
                        let n = null;
                        return null !== s && (n = br.fromAccountData(s.data)), {
                            context: r,
                            value: n
                        }
                    }
                    async getNonce(t, e) {
                        return await this.getNonceAndContext(t, e).then((t => t.value)).catch((e => {
                            throw new Error("failed to get nonce for account " + t.toBase58() + ": " + e)
                        }))
                    }
                    async requestAirdrop(t, e) {
                        const r = await this._rpcRequest("requestAirdrop", [t.toBase58(), e]),
                            s = Object(b.f)(r, Ls);
                        if ("error" in s) throw new Error("airdrop to " + t.toBase58() + " failed: " + s.error.message);
                        return s.result
                    }
                    async _recentBlockhash(t) {
                        if (!t) {
                            for (; this._pollingBlockhash;) await cr(100);
                            const t = Date.now() - this._blockhashInfo.lastFetch >= 3e4;
                            if (null !== this._blockhashInfo.recentBlockhash && !t) return this._blockhashInfo.recentBlockhash
                        }
                        return await this._pollNewBlockhash()
                    }
                    async _pollNewBlockhash() {
                        this._pollingBlockhash = !0;
                        try {
                            const t = Date.now();
                            for (let e = 0; e < 50; e++) {
                                const {
                                    blockhash: t
                                } = await this.getRecentBlockhash("finalized");
                                if (this._blockhashInfo.recentBlockhash != t) return this._blockhashInfo = {
                                    recentBlockhash: t,
                                    lastFetch: Date.now(),
                                    transactionSignatures: [],
                                    simulatedSignatures: []
                                }, t;
                                await cr(200)
                            }
                            throw new Error(`Unable to obtain a new blockhash after ${Date.now()-t}ms`)
                        } finally {
                            this._pollingBlockhash = !1
                        }
                    }
                    async simulateTransaction(t, e, r) {
                        let s;
                        if (s = t instanceof er ? t : er.populate(t), s.nonceInfo && e) s.sign(...e);
                        else {
                            let t = this._disableBlockhashCaching;
                            for (; s.recentBlockhash = await this._recentBlockhash(t), e;) {
                                if (s.sign(...e), !s.signature) throw new Error("!signature");
                                const r = s.signature.toString("base64");
                                if (!this._blockhashInfo.simulatedSignatures.includes(r) && !this._blockhashInfo.transactionSignatures.includes(r)) {
                                    this._blockhashInfo.simulatedSignatures.push(r);
                                    break
                                }
                                t = !0
                            }
                        }
                        const n = s._compile(),
                            i = n.serialize(),
                            o = s._serialize(i).toString("base64"),
                            c = {
                                encoding: "base64",
                                commitment: this.commitment
                            };
                        if (r) {
                            const t = (Array.isArray(r) ? r : n.nonProgramIds()).map((t => t.toBase58()));
                            c.accounts = {
                                encoding: "base64",
                                addresses: t
                            }
                        }
                        e && (c.sigVerify = !0);
                        const a = [o, c],
                            u = await this._rpcRequest("simulateTransaction", a),
                            h = Object(b.f)(u, qr);
                        if ("error" in h) {
                            let t;
                            if ("data" in h.error && (t = h.error.data.logs, t && Array.isArray(t))) {
                                const e = "\n    ",
                                    r = e + t.join(e);
                                console.error(h.error.message, r)
                            }
                            throw new wr("failed to simulate transaction: " + h.error.message, t)
                        }
                        return h.result
                    }
                    async sendTransaction(t, e, r) {
                        if (t.nonceInfo) t.sign(...e);
                        else {
                            let r = this._disableBlockhashCaching;
                            for (;;) {
                                if (t.recentBlockhash = await this._recentBlockhash(r), t.sign(...e), !t.signature) throw new Error("!signature");
                                const s = t.signature.toString("base64");
                                if (!this._blockhashInfo.transactionSignatures.includes(s)) {
                                    this._blockhashInfo.transactionSignatures.push(s);
                                    break
                                }
                                r = !0
                            }
                        }
                        const s = t.serialize();
                        return await this.sendRawTransaction(s, r)
                    }
                    async sendRawTransaction(t, e) {
                        const r = O(t).toString("base64");
                        return await this.sendEncodedTransaction(r, e)
                    }
                    async sendEncodedTransaction(t, e) {
                        const r = {
                                encoding: "base64"
                            },
                            s = e && e.skipPreflight,
                            n = e && e.preflightCommitment || this.commitment;
                        s && (r.skipPreflight = s), n && (r.preflightCommitment = n);
                        const i = [t, r],
                            o = await this._rpcRequest("sendTransaction", i),
                            c = Object(b.f)(o, Ks);
                        if ("error" in c) {
                            let t;
                            if ("data" in c.error && (t = c.error.data.logs, t && Array.isArray(t))) {
                                const e = "\n    ",
                                    r = e + t.join(e);
                                console.error(c.error.message, r)
                            }
                            throw new wr("failed to send transaction: " + c.error.message, t)
                        }
                        return c.result
                    }
                    _wsOnOpen() {
                        this._rpcWebSocketConnected = !0, this._rpcWebSocketHeartbeat = setInterval((() => {
                            this._rpcWebSocket.notify("ping").catch((() => {}))
                        }), 5e3), this._updateSubscriptions()
                    }
                    _wsOnError(t) {
                        console.error("ws error:", t.message)
                    }
                    _wsOnClose(t) {
                        this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), 1e3 !== t ? this._resetSubscriptions() : this._updateSubscriptions()
                    }
                    async _subscribe(t, e, r) {
                        if (null == t.subscriptionId) {
                            t.subscriptionId = "subscribing";
                            try {
                                const s = await this._rpcWebSocket.call(e, r);
                                "number" === typeof s && "subscribing" === t.subscriptionId && (t.subscriptionId = s)
                            } catch (s) {
                                "subscribing" === t.subscriptionId && (t.subscriptionId = null), s instanceof Error && console.error(`${e} error for argument`, r, s.message)
                            }
                        }
                    }
                    async _unsubscribe(t, e) {
                        const r = t.subscriptionId;
                        if (null != r && "string" != typeof r) {
                            const t = r;
                            try {
                                await this._rpcWebSocket.call(e, [t])
                            } catch (s) {
                                s instanceof Error && console.error(`${e} error:`, s.message)
                            }
                        }
                    }
                    _resetSubscriptions() {
                        Object.values(this._accountChangeSubscriptions).forEach((t => t.subscriptionId = null)), Object.values(this._programAccountChangeSubscriptions).forEach((t => t.subscriptionId = null)), Object.values(this._rootSubscriptions).forEach((t => t.subscriptionId = null)), Object.values(this._signatureSubscriptions).forEach((t => t.subscriptionId = null)), Object.values(this._slotSubscriptions).forEach((t => t.subscriptionId = null)), Object.values(this._slotUpdateSubscriptions).forEach((t => t.subscriptionId = null))
                    }
                    _updateSubscriptions() {
                        const t = Object.keys(this._accountChangeSubscriptions).map(Number),
                            e = Object.keys(this._programAccountChangeSubscriptions).map(Number),
                            r = Object.keys(this._slotSubscriptions).map(Number),
                            s = Object.keys(this._slotUpdateSubscriptions).map(Number),
                            n = Object.keys(this._signatureSubscriptions).map(Number),
                            i = Object.keys(this._rootSubscriptions).map(Number),
                            o = Object.keys(this._logsSubscriptions).map(Number);
                        if (0 !== t.length || 0 !== e.length || 0 !== r.length || 0 !== s.length || 0 !== n.length || 0 !== i.length || 0 !== o.length)
                            if (null !== this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = !0), this._rpcWebSocketConnected) {
                                for (let e of t) {
                                    const t = this._accountChangeSubscriptions[e];
                                    this._subscribe(t, "accountSubscribe", this._buildArgs([t.publicKey], t.commitment, "base64"))
                                }
                                for (let t of e) {
                                    const e = this._programAccountChangeSubscriptions[t];
                                    this._subscribe(e, "programSubscribe", this._buildArgs([e.programId], e.commitment, "base64", {
                                        filters: e.filters
                                    }))
                                }
                                for (let t of r) {
                                    const e = this._slotSubscriptions[t];
                                    this._subscribe(e, "slotSubscribe", [])
                                }
                                for (let t of s) {
                                    const e = this._slotUpdateSubscriptions[t];
                                    this._subscribe(e, "slotsUpdatesSubscribe", [])
                                }
                                for (let t of n) {
                                    const e = this._signatureSubscriptions[t],
                                        r = [e.signature];
                                    e.options && r.push(e.options), this._subscribe(e, "signatureSubscribe", r)
                                }
                                for (let t of i) {
                                    const e = this._rootSubscriptions[t];
                                    this._subscribe(e, "rootSubscribe", [])
                                }
                                for (let t of o) {
                                    const e = this._logsSubscriptions[t];
                                    let r;
                                    r = "object" === typeof e.filter ? {
                                        mentions: [e.filter.toString()]
                                    } : e.filter, this._subscribe(e, "logsSubscribe", this._buildArgs([r], e.commitment))
                                }
                            } else this._rpcWebSocket.connect();
                        else this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1, this._rpcWebSocketIdleTimeout = setTimeout((() => {
                            this._rpcWebSocketIdleTimeout = null, this._rpcWebSocket.close()
                        }), 500))
                    }
                    _wsOnAccountNotification(t) {
                        const e = Object(b.f)(t, os);
                        for (const r of Object.values(this._accountChangeSubscriptions))
                            if (r.subscriptionId === e.subscription) return void r.callback(e.result.value, e.result.context)
                    }
                    onAccountChange(t, e, r) {
                        const s = ++this._accountChangeSubscriptionCounter;
                        return this._accountChangeSubscriptions[s] = {
                            publicKey: t.toBase58(),
                            callback: e,
                            commitment: r,
                            subscriptionId: null
                        }, this._updateSubscriptions(), s
                    }
                    async removeAccountChangeListener(t) {
                        if (!this._accountChangeSubscriptions[t]) throw new Error(`Unknown account change id: ${t}`); {
                            const e = this._accountChangeSubscriptions[t];
                            delete this._accountChangeSubscriptions[t], await this._unsubscribe(e, "accountUnsubscribe"), this._updateSubscriptions()
                        }
                    }
                    _wsOnProgramAccountNotification(t) {
                        const e = Object(b.f)(t, as);
                        for (const r of Object.values(this._programAccountChangeSubscriptions))
                            if (r.subscriptionId === e.subscription) {
                                const {
                                    value: t,
                                    context: s
                                } = e.result;
                                return void r.callback({
                                    accountId: t.pubkey,
                                    accountInfo: t.account
                                }, s)
                            }
                    }
                    onProgramAccountChange(t, e, r, s) {
                        const n = ++this._programAccountChangeSubscriptionCounter;
                        return this._programAccountChangeSubscriptions[n] = {
                            programId: t.toBase58(),
                            callback: e,
                            commitment: r,
                            subscriptionId: null,
                            filters: s
                        }, this._updateSubscriptions(), n
                    }
                    async removeProgramAccountChangeListener(t) {
                        if (!this._programAccountChangeSubscriptions[t]) throw new Error(`Unknown program account change id: ${t}`); {
                            const e = this._programAccountChangeSubscriptions[t];
                            delete this._programAccountChangeSubscriptions[t], await this._unsubscribe(e, "programUnsubscribe"), this._updateSubscriptions()
                        }
                    }
                    onLogs(t, e, r) {
                        const s = ++this._logsSubscriptionCounter;
                        return this._logsSubscriptions[s] = {
                            filter: t,
                            callback: e,
                            commitment: r,
                            subscriptionId: null
                        }, this._updateSubscriptions(), s
                    }
                    async removeOnLogsListener(t) {
                        if (!this._logsSubscriptions[t]) throw new Error(`Unknown logs id: ${t}`);
                        const e = this._logsSubscriptions[t];
                        delete this._logsSubscriptions[t], await this._unsubscribe(e, "logsUnsubscribe"), this._updateSubscriptions()
                    }
                    _wsOnLogsNotification(t) {
                        const e = Object(b.f)(t, Ds),
                            r = Object.keys(this._logsSubscriptions).map(Number);
                        for (let s of r) {
                            const t = this._logsSubscriptions[s];
                            if (t.subscriptionId === e.subscription) return void t.callback(e.result.value, e.result.context)
                        }
                    }
                    _wsOnSlotNotification(t) {
                        const e = Object(b.f)(t, hs);
                        for (const r of Object.values(this._slotSubscriptions))
                            if (r.subscriptionId === e.subscription) return void r.callback(e.result)
                    }
                    onSlotChange(t) {
                        const e = ++this._slotSubscriptionCounter;
                        return this._slotSubscriptions[e] = {
                            callback: t,
                            subscriptionId: null
                        }, this._updateSubscriptions(), e
                    }
                    async removeSlotChangeListener(t) {
                        if (!this._slotSubscriptions[t]) throw new Error(`Unknown slot change id: ${t}`); {
                            const e = this._slotSubscriptions[t];
                            delete this._slotSubscriptions[t], await this._unsubscribe(e, "slotUnsubscribe"), this._updateSubscriptions()
                        }
                    }
                    _wsOnSlotUpdatesNotification(t) {
                        const e = Object(b.f)(t, bs);
                        for (const r of Object.values(this._slotUpdateSubscriptions))
                            if (r.subscriptionId === e.subscription) return void r.callback(e.result)
                    }
                    onSlotUpdate(t) {
                        const e = ++this._slotUpdateSubscriptionCounter;
                        return this._slotUpdateSubscriptions[e] = {
                            callback: t,
                            subscriptionId: null
                        }, this._updateSubscriptions(), e
                    }
                    async removeSlotUpdateListener(t) {
                        if (!this._slotUpdateSubscriptions[t]) throw new Error(`Unknown slot update id: ${t}`); {
                            const e = this._slotUpdateSubscriptions[t];
                            delete this._slotUpdateSubscriptions[t], await this._unsubscribe(e, "slotsUpdatesUnsubscribe"), this._updateSubscriptions()
                        }
                    }
                    _buildArgs(t, e, r, s) {
                        const n = e || this._commitment;
                        if (n || r || s) {
                            let e = {};
                            r && (e.encoding = r), n && (e.commitment = n), s && (e = Object.assign(e, s)), t.push(e)
                        }
                        return t
                    }
                    _buildArgsAtLeastConfirmed(t, e, r, s) {
                        const n = e || this._commitment;
                        if (n && !["confirmed", "finalized"].includes(n)) throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
                        return this._buildArgs(t, e, r, s)
                    }
                    _wsOnSignatureNotification(t) {
                        const e = Object(b.f)(t, ds);
                        for (const [r, s] of Object.entries(this._signatureSubscriptions))
                            if (s.subscriptionId === e.subscription) return void("receivedSignature" === e.result.value ? s.callback({
                                type: "received"
                            }, e.result.context) : (delete this._signatureSubscriptions[Number(r)], this._updateSubscriptions(), s.callback({
                                type: "status",
                                result: e.result.value
                            }, e.result.context)))
                    }
                    onSignature(t, e, r) {
                        const s = ++this._signatureSubscriptionCounter;
                        return this._signatureSubscriptions[s] = {
                            signature: t,
                            callback: (t, r) => {
                                "status" === t.type && e(t.result, r)
                            },
                            options: {
                                commitment: r
                            },
                            subscriptionId: null
                        }, this._updateSubscriptions(), s
                    }
                    onSignatureWithOptions(t, e, r) {
                        const s = ++this._signatureSubscriptionCounter;
                        return this._signatureSubscriptions[s] = {
                            signature: t,
                            callback: e,
                            options: r,
                            subscriptionId: null
                        }, this._updateSubscriptions(), s
                    }
                    async removeSignatureListener(t) {
                        if (!this._signatureSubscriptions[t]) throw new Error(`Unknown signature result id: ${t}`); {
                            const e = this._signatureSubscriptions[t];
                            delete this._signatureSubscriptions[t], await this._unsubscribe(e, "signatureUnsubscribe"), this._updateSubscriptions()
                        }
                    }
                    _wsOnRootNotification(t) {
                        const e = Object(b.f)(t, ps);
                        for (const r of Object.values(this._rootSubscriptions))
                            if (r.subscriptionId === e.subscription) return void r.callback(e.result)
                    }
                    onRootChange(t) {
                        const e = ++this._rootSubscriptionCounter;
                        return this._rootSubscriptions[e] = {
                            callback: t,
                            subscriptionId: null
                        }, this._updateSubscriptions(), e
                    }
                    async removeRootChangeListener(t) {
                        if (!this._rootSubscriptions[t]) throw new Error(`Unknown root change id: ${t}`); {
                            const e = this._rootSubscriptions[t];
                            delete this._rootSubscriptions[t], await this._unsubscribe(e, "rootUnsubscribe"), this._updateSubscriptions()
                        }
                    }
                }
                class Hs {
                    constructor(t) {
                        this._keypair = void 0, this._keypair = t || n.a.sign.keyPair()
                    }
                    static generate() {
                        return new Hs(n.a.sign.keyPair())
                    }
                    static fromSecretKey(t, e) {
                        const r = n.a.sign.keyPair.fromSecretKey(t);
                        if (!e || !e.skipValidation) {
                            const t = (new TextEncoder).encode("@solana/web3.js-validation-v1"),
                                e = n.a.sign.detached(t, r.secretKey);
                            if (!n.a.sign.detached.verify(t, e, r.publicKey)) throw new Error("provided secretKey is invalid")
                        }
                        return new Hs(r)
                    }
                    static fromSeed(t) {
                        return new Hs(n.a.sign.keyPair.fromSeed(t))
                    }
                    get publicKey() {
                        return new Le(this._keypair.publicKey)
                    }
                    get secretKey() {
                        return this._keypair.secretKey
                    }
                }
                const $s = l.struct([l.u8("numSignatures"), l.u8("padding"), l.u16("signatureOffset"), l.u16("signatureInstructionIndex"), l.u16("publicKeyOffset"), l.u16("publicKeyInstructionIndex"), l.u16("messageDataOffset"), l.u16("messageDataSize"), l.u16("messageInstructionIndex")]);
                class Gs {
                    constructor() {}
                    static createInstructionWithPublicKey(t) {
                        const {
                            publicKey: e,
                            message: r,
                            signature: s,
                            instructionIndex: n
                        } = t;
                        Ze(32 === e.length, `Public Key must be 32 bytes but received ${e.length} bytes`), Ze(64 === s.length, `Signature must be 64 bytes but received ${s.length} bytes`);
                        const o = $s.span,
                            c = o + e.length,
                            a = c + s.length,
                            u = i.Buffer.alloc(a + r.length);
                        return $s.encode({
                            numSignatures: 1,
                            padding: 0,
                            signatureOffset: c,
                            signatureInstructionIndex: n,
                            publicKeyOffset: o,
                            publicKeyInstructionIndex: n,
                            messageDataOffset: a,
                            messageDataSize: r.length,
                            messageInstructionIndex: n
                        }, u), u.fill(e, o), u.fill(s, c), u.fill(r, a), new tr({
                            keys: [],
                            programId: Gs.programId,
                            data: u
                        })
                    }
                    static createInstructionWithPrivateKey(t) {
                        const {
                            privateKey: e,
                            message: r,
                            instructionIndex: s
                        } = t;
                        Ze(64 === e.length, `Private key must be 64 bytes but received ${e.length} bytes`);
                        try {
                            const t = Hs.fromSecretKey(e),
                                i = t.publicKey.toBytes(),
                                o = n.a.sign.detached(r, t.secretKey);
                            return this.createInstructionWithPublicKey({
                                publicKey: i,
                                message: r,
                                signature: o,
                                instructionIndex: s
                            })
                        } catch (i) {
                            throw new Error(`Error creating instruction; ${i}`)
                        }
                    }
                }
                Gs.programId = new Le("Ed25519SigVerify111111111111111111111111111");
                const Vs = new Le("StakeConfig11111111111111111111111111111111");
                class Xs {
                    constructor(t, e, r) {
                        this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = t, this.epoch = e, this.custodian = r
                    }
                }
                Xs.default = new Xs(0, 0, Le.default);
                const Js = Object.freeze({
                    Initialize: {
                        index: 0,
                        layout: l.struct([l.u32("instruction"), ((t = "authorized") => l.struct([$e("staker"), $e("withdrawer")], t))(), ((t = "lockup") => l.struct([l.ns64("unixTimestamp"), l.ns64("epoch"), $e("custodian")], t))()])
                    },
                    Authorize: {
                        index: 1,
                        layout: l.struct([l.u32("instruction"), $e("newAuthorized"), l.u32("stakeAuthorizationType")])
                    },
                    Delegate: {
                        index: 2,
                        layout: l.struct([l.u32("instruction")])
                    },
                    Split: {
                        index: 3,
                        layout: l.struct([l.u32("instruction"), l.ns64("lamports")])
                    },
                    Withdraw: {
                        index: 4,
                        layout: l.struct([l.u32("instruction"), l.ns64("lamports")])
                    },
                    Deactivate: {
                        index: 5,
                        layout: l.struct([l.u32("instruction")])
                    },
                    Merge: {
                        index: 7,
                        layout: l.struct([l.u32("instruction")])
                    },
                    AuthorizeWithSeed: {
                        index: 8,
                        layout: l.struct([l.u32("instruction"), $e("newAuthorized"), l.u32("stakeAuthorizationType"), Ge("authoritySeed"), $e("authorityOwner")])
                    }
                });
                Object.freeze({
                    Staker: {
                        index: 0
                    },
                    Withdrawer: {
                        index: 1
                    }
                });
                class Zs {
                    constructor() {}
                    static initialize(t) {
                        const {
                            stakePubkey: e,
                            authorized: r,
                            lockup: s
                        } = t, n = s || Xs.default, i = ar(Js.Initialize, {
                            authorized: {
                                staker: O(r.staker.toBuffer()),
                                withdrawer: O(r.withdrawer.toBuffer())
                            },
                            lockup: {
                                unixTimestamp: n.unixTimestamp,
                                epoch: n.epoch,
                                custodian: O(n.custodian.toBuffer())
                            }
                        }), o = {
                            keys: [{
                                pubkey: e,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: nr,
                                isSigner: !1,
                                isWritable: !1
                            }],
                            programId: this.programId,
                            data: i
                        };
                        return new tr(o)
                    }
                    static createAccountWithSeed(t) {
                        const e = new er;
                        e.add(pr.createAccountWithSeed({
                            fromPubkey: t.fromPubkey,
                            newAccountPubkey: t.stakePubkey,
                            basePubkey: t.basePubkey,
                            seed: t.seed,
                            lamports: t.lamports,
                            space: this.space,
                            programId: this.programId
                        }));
                        const {
                            stakePubkey: r,
                            authorized: s,
                            lockup: n
                        } = t;
                        return e.add(this.initialize({
                            stakePubkey: r,
                            authorized: s,
                            lockup: n
                        }))
                    }
                    static createAccount(t) {
                        const e = new er;
                        e.add(pr.createAccount({
                            fromPubkey: t.fromPubkey,
                            newAccountPubkey: t.stakePubkey,
                            lamports: t.lamports,
                            space: this.space,
                            programId: this.programId
                        }));
                        const {
                            stakePubkey: r,
                            authorized: s,
                            lockup: n
                        } = t;
                        return e.add(this.initialize({
                            stakePubkey: r,
                            authorized: s,
                            lockup: n
                        }))
                    }
                    static delegate(t) {
                        const {
                            stakePubkey: e,
                            authorizedPubkey: r,
                            votePubkey: s
                        } = t, n = ar(Js.Delegate);
                        return (new er).add({
                            keys: [{
                                pubkey: e,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: s,
                                isSigner: !1,
                                isWritable: !1
                            }, {
                                pubkey: rr,
                                isSigner: !1,
                                isWritable: !1
                            }, {
                                pubkey: ir,
                                isSigner: !1,
                                isWritable: !1
                            }, {
                                pubkey: Vs,
                                isSigner: !1,
                                isWritable: !1
                            }, {
                                pubkey: r,
                                isSigner: !0,
                                isWritable: !1
                            }],
                            programId: this.programId,
                            data: n
                        })
                    }
                    static authorize(t) {
                        const {
                            stakePubkey: e,
                            authorizedPubkey: r,
                            newAuthorizedPubkey: s,
                            stakeAuthorizationType: n,
                            custodianPubkey: i
                        } = t, o = ar(Js.Authorize, {
                            newAuthorized: O(s.toBuffer()),
                            stakeAuthorizationType: n.index
                        }), c = [{
                            pubkey: e,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: rr,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }];
                        return i && c.push({
                            pubkey: i,
                            isSigner: !1,
                            isWritable: !1
                        }), (new er).add({
                            keys: c,
                            programId: this.programId,
                            data: o
                        })
                    }
                    static authorizeWithSeed(t) {
                        const {
                            stakePubkey: e,
                            authorityBase: r,
                            authoritySeed: s,
                            authorityOwner: n,
                            newAuthorizedPubkey: i,
                            stakeAuthorizationType: o,
                            custodianPubkey: c
                        } = t, a = ar(Js.AuthorizeWithSeed, {
                            newAuthorized: O(i.toBuffer()),
                            stakeAuthorizationType: o.index,
                            authoritySeed: s,
                            authorityOwner: O(n.toBuffer())
                        }), u = [{
                            pubkey: e,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }, {
                            pubkey: rr,
                            isSigner: !1,
                            isWritable: !1
                        }];
                        return c && u.push({
                            pubkey: c,
                            isSigner: !1,
                            isWritable: !1
                        }), (new er).add({
                            keys: u,
                            programId: this.programId,
                            data: a
                        })
                    }
                    static split(t) {
                        const {
                            stakePubkey: e,
                            authorizedPubkey: r,
                            splitStakePubkey: s,
                            lamports: n
                        } = t, i = new er;
                        i.add(pr.createAccount({
                            fromPubkey: r,
                            newAccountPubkey: s,
                            lamports: 0,
                            space: this.space,
                            programId: this.programId
                        }));
                        const o = ar(Js.Split, {
                            lamports: n
                        });
                        return i.add({
                            keys: [{
                                pubkey: e,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: s,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: r,
                                isSigner: !0,
                                isWritable: !1
                            }],
                            programId: this.programId,
                            data: o
                        })
                    }
                    static merge(t) {
                        const {
                            stakePubkey: e,
                            sourceStakePubKey: r,
                            authorizedPubkey: s
                        } = t, n = ar(Js.Merge);
                        return (new er).add({
                            keys: [{
                                pubkey: e,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: r,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: rr,
                                isSigner: !1,
                                isWritable: !1
                            }, {
                                pubkey: ir,
                                isSigner: !1,
                                isWritable: !1
                            }, {
                                pubkey: s,
                                isSigner: !0,
                                isWritable: !1
                            }],
                            programId: this.programId,
                            data: n
                        })
                    }
                    static withdraw(t) {
                        const {
                            stakePubkey: e,
                            authorizedPubkey: r,
                            toPubkey: s,
                            lamports: n,
                            custodianPubkey: i
                        } = t, o = ar(Js.Withdraw, {
                            lamports: n
                        }), c = [{
                            pubkey: e,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: s,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: rr,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: ir,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }];
                        return i && c.push({
                            pubkey: i,
                            isSigner: !1,
                            isWritable: !1
                        }), (new er).add({
                            keys: c,
                            programId: this.programId,
                            data: o
                        })
                    }
                    static deactivate(t) {
                        const {
                            stakePubkey: e,
                            authorizedPubkey: r
                        } = t, s = ar(Js.Deactivate);
                        return (new er).add({
                            keys: [{
                                pubkey: e,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: rr,
                                isSigner: !1,
                                isWritable: !1
                            }, {
                                pubkey: r,
                                isSigner: !0,
                                isWritable: !1
                            }],
                            programId: this.programId,
                            data: s
                        })
                    }
                }
                Zs.programId = new Le("Stake11111111111111111111111111111111111111"), Zs.space = 200;
                const {
                    publicKeyCreate: Qs,
                    ecdsaSign: Ys
                } = m.a, tn = l.struct([l.u8("numSignatures"), l.u16("signatureOffset"), l.u8("signatureInstructionIndex"), l.u16("ethAddressOffset"), l.u8("ethAddressInstructionIndex"), l.u16("messageDataOffset"), l.u16("messageDataSize"), l.u8("messageInstructionIndex"), l.blob(20, "ethAddress"), l.blob(64, "signature"), l.u8("recoveryId")]);
                class en {
                    constructor() {}
                    static publicKeyToEthAddress(t) {
                        Ze(64 === t.length, `Public key must be 64 bytes but received ${t.length} bytes`);
                        try {
                            return i.Buffer.from(j.a.keccak_256.update(O(t)).digest()).slice(-20)
                        } catch (e) {
                            throw new Error(`Error constructing Ethereum address: ${e}`)
                        }
                    }
                    static createInstructionWithPublicKey(t) {
                        const {
                            publicKey: e,
                            message: r,
                            signature: s,
                            recoveryId: n,
                            instructionIndex: i
                        } = t;
                        return en.createInstructionWithEthAddress({
                            ethAddress: en.publicKeyToEthAddress(e),
                            message: r,
                            signature: s,
                            recoveryId: n,
                            instructionIndex: i
                        })
                    }
                    static createInstructionWithEthAddress(t) {
                        const {
                            ethAddress: e,
                            message: r,
                            signature: s,
                            recoveryId: n,
                            instructionIndex: o = 0
                        } = t;
                        let c;
                        c = "string" === typeof e ? e.startsWith("0x") ? i.Buffer.from(e.substr(2), "hex") : i.Buffer.from(e, "hex") : e, Ze(20 === c.length, `Address must be 20 bytes but received ${c.length} bytes`);
                        const a = 12 + c.length,
                            u = a + s.length + 1,
                            h = i.Buffer.alloc(tn.span + r.length);
                        return tn.encode({
                            numSignatures: 1,
                            signatureOffset: a,
                            signatureInstructionIndex: o,
                            ethAddressOffset: 12,
                            ethAddressInstructionIndex: o,
                            messageDataOffset: u,
                            messageDataSize: r.length,
                            messageInstructionIndex: o,
                            signature: O(s),
                            ethAddress: O(c),
                            recoveryId: n
                        }, h), h.fill(O(r), tn.span), new tr({
                            keys: [],
                            programId: en.programId,
                            data: h
                        })
                    }
                    static createInstructionWithPrivateKey(t) {
                        const {
                            privateKey: e,
                            message: r,
                            instructionIndex: s
                        } = t;
                        Ze(32 === e.length, `Private key must be 32 bytes but received ${e.length} bytes`);
                        try {
                            const t = O(e),
                                n = Qs(t, !1).slice(1),
                                o = i.Buffer.from(j.a.keccak_256.update(O(r)).digest()),
                                {
                                    signature: c,
                                    recid: a
                                } = Ys(o, t);
                            return this.createInstructionWithPublicKey({
                                publicKey: n,
                                message: r,
                                signature: c,
                                recoveryId: a,
                                instructionIndex: s
                            })
                        } catch (n) {
                            throw new Error(`Error creating instruction; ${n}`)
                        }
                    }
                }
                en.programId = new Le("KeccakSecp256k11111111111111111111111111111");
                new Le("Va1idator1nfo111111111111111111111111111111"), Object(b.o)({
                    name: Object(b.m)(),
                    website: Object(b.k)(Object(b.m)()),
                    details: Object(b.k)(Object(b.m)()),
                    keybaseUsername: Object(b.k)(Object(b.m)())
                });
                new Le("Vote111111111111111111111111111111111111111"), l.struct([$e("nodePubkey"), $e("authorizedVoterPubkey"), $e("authorizedWithdrawerPubkey"), l.u8("commission"), l.nu64(), l.seq(l.struct([l.nu64("slot"), l.u32("confirmationCount")]), l.offset(l.u32(), -8), "votes"), l.u8("rootSlotValid"), l.nu64("rootSlot"), l.nu64("epoch"), l.nu64("credits"), l.nu64("lastEpochCredits"), l.nu64(), l.seq(l.struct([l.nu64("epoch"), l.nu64("credits"), l.nu64("prevCredits")]), l.offset(l.u32(), -8), "epochCredits")])
            }).call(this, r("bqPV"))
        }
    }
]);