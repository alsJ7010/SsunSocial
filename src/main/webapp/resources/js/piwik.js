/*!!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license http://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
if (typeof JSON_PIWIK !== "object" && typeof window.JSON === "object" && window.JSON.stringify && window.JSON.parse) {
    JSON_PIWIK = window.JSON
} else {
    (function() {
        var a = {};
        /*!! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
        (function() {
            var c = typeof define === "function" && define.amd;
            var e = {
                "function": true,
                object: true
            };
            var h = e[typeof a] && a && !a.nodeType && a;
            var i = e[typeof window] && window || this,
                b = h && e[typeof module] && module && !module.nodeType && typeof global == "object" && global;
            if (b && (b.global === b || b.window === b || b.self === b)) {
                i = b
            }

            function j(ab, V) {
                ab || (ab = i.Object());
                V || (V = i.Object());
                var K = ab.Number || i.Number,
                    R = ab.String || i.String,
                    x = ab.Object || i.Object,
                    S = ab.Date || i.Date,
                    T = ab.SyntaxError || i.SyntaxError,
                    aa = ab.TypeError || i.TypeError,
                    J = ab.Math || i.Math,
                    Y = ab.JSON || i.JSON;
                if (typeof Y == "object" && Y) {
                    V.stringify = Y.stringify;
                    V.parse = Y.parse
                }
                var n = x.prototype,
                    u = n.toString,
                    r, m, L;
                var B = new S(-3509827334573292);
                try {
                    B = B.getUTCFullYear() == -109252 && B.getUTCMonth() === 0 && B.getUTCDate() === 1 && B.getUTCHours() == 10 && B.getUTCMinutes() == 37 && B.getUTCSeconds() == 6 && B.getUTCMilliseconds() == 708
                } catch (v) {}

                function o(ac) {
                    if (o[ac] !== L) {
                        return o[ac]
                    }
                    var ad;
                    if (ac == "bug-string-char-index") {
                        ad = "a" [0] != "a"
                    } else {
                        if (ac == "json") {
                            ad = o("json-stringify") && o("json-parse")
                        } else {
                            var ak, ah = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                            if (ac == "json-stringify") {
                                var ai = V.stringify,
                                    aj = typeof ai == "function" && B;
                                if (aj) {
                                    (ak = function() {
                                        return 1
                                    }).toJSON = ak;
                                    try {
                                        aj = ai(0) === "0" && ai(new K()) === "0" && ai(new R()) == '""' && ai(u) === L && ai(L) === L && ai() === L && ai(ak) === "1" && ai([ak]) == "[1]" && ai([L]) == "[null]" && ai(null) == "null" && ai([L, u, null]) == "[null,null,null]" && ai({
                                            a: [ak, true, false, null, "\x00\b\n\f\r\t"]
                                        }) == ah && ai(null, ak) === "1" && ai([1, 2], null, 1) == "[\n 1,\n 2\n]" && ai(new S(-8640000000000000)) == '"-271821-04-20T00:00:00.000Z"' && ai(new S(8640000000000000)) == '"+275760-09-13T00:00:00.000Z"' && ai(new S(-62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && ai(new S(-1)) == '"1969-12-31T23:59:59.999Z"'
                                    } catch (ae) {
                                        aj = false
                                    }
                                }
                                ad = aj
                            }
                            if (ac == "json-parse") {
                                var ag = V.parse;
                                if (typeof ag == "function") {
                                    try {
                                        if (ag("0") === 0 && !ag(false)) {
                                            ak = ag(ah);
                                            var af = ak.a.length == 5 && ak.a[0] === 1;
                                            if (af) {
                                                try {
                                                    af = !ag('"\t"')
                                                } catch (ae) {}
                                                if (af) {
                                                    try {
                                                        af = ag("01") !== 1
                                                    } catch (ae) {}
                                                }
                                                if (af) {
                                                    try {
                                                        af = ag("1.") !== 1
                                                    } catch (ae) {}
                                                }
                                            }
                                        }
                                    } catch (ae) {
                                        af = false
                                    }
                                }
                                ad = af
                            }
                        }
                    }
                    return o[ac] = !!ad
                }
                if (!o("json")) {
                    var U = "[object Function]",
                        Q = "[object Date]",
                        N = "[object Number]",
                        O = "[object String]",
                        E = "[object Array]",
                        A = "[object Boolean]";
                    var F = o("bug-string-char-index");
                    if (!B) {
                        var s = J.floor;
                        var Z = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                        var D = function(ac, ad) {
                            return Z[ad] + 365 * (ac - 1970) + s((ac - 1969 + (ad = +(ad > 1))) / 4) - s((ac - 1901 + ad) / 100) + s((ac - 1601 + ad) / 400)
                        }
                    }
                    if (!(r = n.hasOwnProperty)) {
                        r = function(ae) {
                            var ac = {},
                                ad;
                            if ((ac.__proto__ = null, ac.__proto__ = {
                                    toString: 1
                                }, ac).toString != u) {
                                r = function(ah) {
                                    var ag = this.__proto__,
                                        af = ah in (this.__proto__ = null, this);
                                    this.__proto__ = ag;
                                    return af
                                }
                            } else {
                                ad = ac.constructor;
                                r = function(ag) {
                                    var af = (this.constructor || ad).prototype;
                                    return ag in this && !(ag in af && this[ag] === af[ag])
                                }
                            }
                            ac = null;
                            return r.call(this, ae)
                        }
                    }
                    m = function(ae, ah) {
                        var af = 0,
                            ac, ad, ag;
                        (ac = function() {
                            this.valueOf = 0
                        }).prototype.valueOf = 0;
                        ad = new ac();
                        for (ag in ad) {
                            if (r.call(ad, ag)) {
                                af++
                            }
                        }
                        ac = ad = null;
                        if (!af) {
                            ad = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                            m = function(aj, an) {
                                var am = u.call(aj) == U,
                                    al, ak;
                                var ai = !am && typeof aj.constructor != "function" && e[typeof aj.hasOwnProperty] && aj.hasOwnProperty || r;
                                for (al in aj) {
                                    if (!(am && al == "prototype") && ai.call(aj, al)) {
                                        an(al)
                                    }
                                }
                                for (ak = ad.length; al = ad[--ak]; ai.call(aj, al) && an(al)) {}
                            }
                        } else {
                            if (af == 2) {
                                m = function(aj, am) {
                                    var ai = {},
                                        al = u.call(aj) == U,
                                        ak;
                                    for (ak in aj) {
                                        if (!(al && ak == "prototype") && !r.call(ai, ak) && (ai[ak] = 1) && r.call(aj, ak)) {
                                            am(ak)
                                        }
                                    }
                                }
                            } else {
                                m = function(aj, am) {
                                    var al = u.call(aj) == U,
                                        ak, ai;
                                    for (ak in aj) {
                                        if (!(al && ak == "prototype") && r.call(aj, ak) && !(ai = ak === "constructor")) {
                                            am(ak)
                                        }
                                    }
                                    if (ai || r.call(aj, (ak = "constructor"))) {
                                        am(ak)
                                    }
                                }
                            }
                        }
                        return m(ae, ah)
                    };
                    if (!o("json-stringify")) {
                        var q = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        };
                        var I = "000000";
                        var t = function(ac, ad) {
                            return (I + (ad || 0)).slice(-ac)
                        };
                        var z = "\\u00";
                        var C = function(ai) {
                            var ad = '"',
                                ag = 0,
                                ah = ai.length,
                                ac = !F || ah > 10;
                            var af = ac && (F ? ai.split("") : ai);
                            for (; ag < ah; ag++) {
                                var ae = ai.charCodeAt(ag);
                                switch (ae) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        ad += q[ae];
                                        break;
                                    default:
                                        if (ae < 32) {
                                            ad += z + t(2, ae.toString(16));
                                            break
                                        }
                                        ad += ac ? af[ag] : ai.charAt(ag)
                                }
                            }
                            return ad + '"'
                        };
                        var p = function(ai, aA, ag, al, ax, ac, aj) {
                            var at, ae, ap, az, ay, ak, aw, au, aq, an, ar, ad, ah, af, av, ao;
                            try {
                                at = aA[ai]
                            } catch (am) {}
                            if (typeof at == "object" && at) {
                                ae = u.call(at);
                                if (ae == Q && !r.call(at, "toJSON")) {
                                    if (at > -1 / 0 && at < 1 / 0) {
                                        if (D) {
                                            ay = s(at / 86400000);
                                            for (ap = s(ay / 365.2425) + 1970 - 1; D(ap + 1, 0) <= ay; ap++) {}
                                            for (az = s((ay - D(ap, 0)) / 30.42); D(ap, az + 1) <= ay; az++) {}
                                            ay = 1 + ay - D(ap, az);
                                            ak = (at % 86400000 + 86400000) % 86400000;
                                            aw = s(ak / 3600000) % 24;
                                            au = s(ak / 60000) % 60;
                                            aq = s(ak / 1000) % 60;
                                            an = ak % 1000
                                        } else {
                                            ap = at.getUTCFullYear();
                                            az = at.getUTCMonth();
                                            ay = at.getUTCDate();
                                            aw = at.getUTCHours();
                                            au = at.getUTCMinutes();
                                            aq = at.getUTCSeconds();
                                            an = at.getUTCMilliseconds()
                                        }
                                        at = (ap <= 0 || ap >= 10000 ? (ap < 0 ? "-" : "+") + t(6, ap < 0 ? -ap : ap) : t(4, ap)) + "-" + t(2, az + 1) + "-" + t(2, ay) + "T" + t(2, aw) + ":" + t(2, au) + ":" + t(2, aq) + "." + t(3, an) + "Z"
                                    } else {
                                        at = null
                                    }
                                } else {
                                    if (typeof at.toJSON == "function" && ((ae != N && ae != O && ae != E) || r.call(at, "toJSON"))) {
                                        at = at.toJSON(ai)
                                    }
                                }
                            }
                            if (ag) {
                                at = ag.call(aA, ai, at)
                            }
                            if (at === null) {
                                return "null"
                            }
                            ae = u.call(at);
                            if (ae == A) {
                                return "" + at
                            } else {
                                if (ae == N) {
                                    return at > -1 / 0 && at < 1 / 0 ? "" + at : "null"
                                } else {
                                    if (ae == O) {
                                        return C("" + at)
                                    }
                                }
                            }
                            if (typeof at == "object") {
                                for (af = aj.length; af--;) {
                                    if (aj[af] === at) {
                                        throw aa()
                                    }
                                }
                                aj.push(at);
                                ar = [];
                                av = ac;
                                ac += ax;
                                if (ae == E) {
                                    for (ah = 0, af = at.length; ah < af; ah++) {
                                        ad = p(ah, at, ag, al, ax, ac, aj);
                                        ar.push(ad === L ? "null" : ad)
                                    }
                                    ao = ar.length ? (ax ? "[\n" + ac + ar.join(",\n" + ac) + "\n" + av + "]" : ("[" + ar.join(",") + "]")) : "[]"
                                } else {
                                    m(al || at, function(aC) {
                                        var aB = p(aC, at, ag, al, ax, ac, aj);
                                        if (aB !== L) {
                                            ar.push(C(aC) + ":" + (ax ? " " : "") + aB)
                                        }
                                    });
                                    ao = ar.length ? (ax ? "{\n" + ac + ar.join(",\n" + ac) + "\n" + av + "}" : ("{" + ar.join(",") + "}")) : "{}"
                                }
                                aj.pop();
                                return ao
                            }
                        };
                        V.stringify = function(ac, ae, af) {
                            var ad, al, aj, ai;
                            if (e[typeof ae] && ae) {
                                if ((ai = u.call(ae)) == U) {
                                    al = ae
                                } else {
                                    if (ai == E) {
                                        aj = {};
                                        for (var ah = 0, ag = ae.length, ak; ah < ag; ak = ae[ah++], ((ai = u.call(ak)), ai == O || ai == N) && (aj[ak] = 1)) {}
                                    }
                                }
                            }
                            if (af) {
                                if ((ai = u.call(af)) == N) {
                                    if ((af -= af % 1) > 0) {
                                        for (ad = "", af > 10 && (af = 10); ad.length < af; ad += " ") {}
                                    }
                                } else {
                                    if (ai == O) {
                                        ad = af.length <= 10 ? af : af.slice(0, 10)
                                    }
                                }
                            }
                            return p("", (ak = {}, ak[""] = ac, ak), al, aj, ad, "", [])
                        }
                    }
                    if (!o("json-parse")) {
                        var M = R.fromCharCode;
                        var l = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        };
                        var G, X;
                        var H = function() {
                            G = X = null;
                            throw T()
                        };
                        var y = function() {
                            var ah = X,
                                af = ah.length,
                                ag, ae, ac, ai, ad;
                            while (G < af) {
                                ad = ah.charCodeAt(G);
                                switch (ad) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        G++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        ag = F ? ah.charAt(G) : ah[G];
                                        G++;
                                        return ag;
                                    case 34:
                                        for (ag = "@", G++; G < af;) {
                                            ad = ah.charCodeAt(G);
                                            if (ad < 32) {
                                                H()
                                            } else {
                                                if (ad == 92) {
                                                    ad = ah.charCodeAt(++G);
                                                    switch (ad) {
                                                        case 92:
                                                        case 34:
                                                        case 47:
                                                        case 98:
                                                        case 116:
                                                        case 110:
                                                        case 102:
                                                        case 114:
                                                            ag += l[ad];
                                                            G++;
                                                            break;
                                                        case 117:
                                                            ae = ++G;
                                                            for (ac = G + 4; G < ac; G++) {
                                                                ad = ah.charCodeAt(G);
                                                                if (!(ad >= 48 && ad <= 57 || ad >= 97 && ad <= 102 || ad >= 65 && ad <= 70)) {
                                                                    H()
                                                                }
                                                            }
                                                            ag += M("0x" + ah.slice(ae, G));
                                                            break;
                                                        default:
                                                            H()
                                                    }
                                                } else {
                                                    if (ad == 34) {
                                                        break
                                                    }
                                                    ad = ah.charCodeAt(G);
                                                    ae = G;
                                                    while (ad >= 32 && ad != 92 && ad != 34) {
                                                        ad = ah.charCodeAt(++G)
                                                    }
                                                    ag += ah.slice(ae, G)
                                                }
                                            }
                                        }
                                        if (ah.charCodeAt(G) == 34) {
                                            G++;
                                            return ag
                                        }
                                        H();
                                    default:
                                        ae = G;
                                        if (ad == 45) {
                                            ai = true;
                                            ad = ah.charCodeAt(++G)
                                        }
                                        if (ad >= 48 && ad <= 57) {
                                            if (ad == 48 && ((ad = ah.charCodeAt(G + 1)), ad >= 48 && ad <= 57)) {
                                                H()
                                            }
                                            ai = false;
                                            for (; G < af && ((ad = ah.charCodeAt(G)), ad >= 48 && ad <= 57); G++) {}
                                            if (ah.charCodeAt(G) == 46) {
                                                ac = ++G;
                                                for (; ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57); ac++) {}
                                                if (ac == G) {
                                                    H()
                                                }
                                                G = ac
                                            }
                                            ad = ah.charCodeAt(G);
                                            if (ad == 101 || ad == 69) {
                                                ad = ah.charCodeAt(++G);
                                                if (ad == 43 || ad == 45) {
                                                    G++
                                                }
                                                for (ac = G; ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57); ac++) {}
                                                if (ac == G) {
                                                    H()
                                                }
                                                G = ac
                                            }
                                            return +ah.slice(ae, G)
                                        }
                                        if (ai) {
                                            H()
                                        }
                                        if (ah.slice(G, G + 4) == "true") {
                                            G += 4;
                                            return true
                                        } else {
                                            if (ah.slice(G, G + 5) == "false") {
                                                G += 5;
                                                return false
                                            } else {
                                                if (ah.slice(G, G + 4) == "null") {
                                                    G += 4;
                                                    return null
                                                }
                                            }
                                        }
                                        H()
                                }
                            }
                            return "$"
                        };
                        var W = function(ad) {
                            var ac, ae;
                            if (ad == "$") {
                                H()
                            }
                            if (typeof ad == "string") {
                                if ((F ? ad.charAt(0) : ad[0]) == "@") {
                                    return ad.slice(1)
                                }
                                if (ad == "[") {
                                    ac = [];
                                    for (;; ae || (ae = true)) {
                                        ad = y();
                                        if (ad == "]") {
                                            break
                                        }
                                        if (ae) {
                                            if (ad == ",") {
                                                ad = y();
                                                if (ad == "]") {
                                                    H()
                                                }
                                            } else {
                                                H()
                                            }
                                        }
                                        if (ad == ",") {
                                            H()
                                        }
                                        ac.push(W(ad))
                                    }
                                    return ac
                                } else {
                                    if (ad == "{") {
                                        ac = {};
                                        for (;; ae || (ae = true)) {
                                            ad = y();
                                            if (ad == "}") {
                                                break
                                            }
                                            if (ae) {
                                                if (ad == ",") {
                                                    ad = y();
                                                    if (ad == "}") {
                                                        H()
                                                    }
                                                } else {
                                                    H()
                                                }
                                            }
                                            if (ad == "," || typeof ad != "string" || (F ? ad.charAt(0) : ad[0]) != "@" || y() != ":") {
                                                H()
                                            }
                                            ac[ad.slice(1)] = W(y())
                                        }
                                        return ac
                                    }
                                }
                                H()
                            }
                            return ad
                        };
                        var P = function(ae, ad, af) {
                            var ac = w(ae, ad, af);
                            if (ac === L) {
                                delete ae[ad]
                            } else {
                                ae[ad] = ac
                            }
                        };
                        var w = function(af, ae, ag) {
                            var ad = af[ae],
                                ac;
                            if (typeof ad == "object" && ad) {
                                if (u.call(ad) == E) {
                                    for (ac = ad.length; ac--;) {
                                        P(ad, ac, ag)
                                    }
                                } else {
                                    m(ad, function(ah) {
                                        P(ad, ah, ag)
                                    })
                                }
                            }
                            return ag.call(af, ae, ad)
                        };
                        V.parse = function(ae, af) {
                            var ac, ad;
                            G = 0;
                            X = "" + ae;
                            ac = W(y());
                            if (y() != "$") {
                                H()
                            }
                            G = X = null;
                            return af && u.call(af) == U ? w((ad = {}, ad[""] = ac, ad), "", af) : ac
                        }
                    }
                }
                V.runInContext = j;
                return V
            }
            if (h && !c) {
                j(i, h)
            } else {
                var f = i.JSON,
                    k = i.JSON3,
                    d = false;
                var g = j(i, (i.JSON3 = {
                    noConflict: function() {
                        if (!d) {
                            d = true;
                            i.JSON = f;
                            i.JSON3 = k;
                            f = k = null
                        }
                        return g
                    }
                }));
                i.JSON = {
                    parse: g.parse,
                    stringify: g.stringify
                }
            }
            if (c) {
                define(function() {
                    return g
                })
            }
        }).call(this);
        JSON_PIWIK = a
    })()
}
if (typeof _paq !== "object") {
    _paq = []
}
if (typeof window.Piwik !== "object") {
    window.Piwik = (function() {
        var p, a = {},
            v = {},
            D = document,
            g = navigator,
            T = screen,
            Q = window,
            h = Q.performance || Q.mozPerformance || Q.msPerformance || Q.webkitPerformance,
            r = Q.encodeURIComponent,
            P = Q.decodeURIComponent,
            k = unescape,
            F = [],
            B, d, aa = [];

        function n(ah) {
            try {
                return P(ah)
            } catch (ai) {
                return unescape(ah)
            }
        }

        function G(ai) {
            var ah = typeof ai;
            return ah !== "undefined"
        }

        function x(ah) {
            return typeof ah === "function"
        }

        function S(ah) {
            return typeof ah === "object"
        }

        function u(ah) {
            return typeof ah === "string" || ah instanceof String
        }

        function y(ai) {
            if (!ai) {
                return true
            }
            var ah;
            var aj = true;
            for (ah in ai) {
                if (Object.prototype.hasOwnProperty.call(ai, ah)) {
                    aj = false
                }
            }
            return aj
        }

        function ad(ah) {
            var ai = typeof console;
            if (ai !== "undefined" && console && console.error) {
                console.error(ah)
            }
        }

        function Z() {
            var am, al, ao, ai, ah;
            for (am = 0; am < arguments.length; am += 1) {
                ah = null;
                if (arguments[am] && arguments[am].slice) {
                    ah = arguments[am].slice()
                }
                ai = arguments[am];
                ao = ai.shift();
                var an, aj;
                var ak = u(ao) && ao.indexOf("::") > 0;
                if (ak) {
                    an = ao.split("::");
                    aj = an[0];
                    ao = an[1];
                    if ("object" === typeof d[aj] && "function" === typeof d[aj][ao]) {
                        d[aj][ao].apply(d[aj], ai)
                    } else {
                        if (ah) {
                            aa.push(ah)
                        }
                    }
                } else {
                    for (al = 0; al < F.length; al++) {
                        if (u(ao)) {
                            aj = F[al];
                            var ap = ao.indexOf(".") > 0;
                            if (ap) {
                                an = ao.split(".");
                                if (aj && "object" === typeof aj[an[0]]) {
                                    aj = aj[an[0]];
                                    ao = an[1]
                                } else {
                                    if (ah) {
                                        aa.push(ah);
                                        break
                                    }
                                }
                            }
                            if (aj[ao]) {
                                aj[ao].apply(aj, ai)
                            } else {
                                var aq = "The method '" + ao + '\' was not found in "_paq" variable.  Please have a look at the Piwik tracker documentation: http://developer.piwik.org/api-reference/tracking-javascript';
                                ad(aq);
                                if (!ap) {
                                    throw new TypeError(aq)
                                }
                            }
                            if (ao === "addTracker") {
                                break
                            }
                            if (ao === "setTrackerUrl" || ao === "setSiteId") {
                                break
                            }
                        } else {
                            ao.apply(F[al], ai)
                        }
                    }
                }
            }
        }

        function ag(ak, aj, ai, ah) {
            if (ak.addEventListener) {
                ak.addEventListener(aj, ai, ah);
                return true
            }
            if (ak.attachEvent) {
                return ak.attachEvent("on" + aj, ai)
            }
            ak["on" + aj] = ai
        }

        function l(ah) {
            if (D.readyState === "complete") {
                ah()
            } else {
                if (Q.addEventListener) {
                    Q.addEventListener("load", ah)
                } else {
                    if (Q.attachEvent) {
                        Q.attachEvent("onload", ah)
                    }
                }
            }
        }

        function o(ak) {
            var ah = false;
            if (D.attachEvent) {
                ah = D.readyState === "complete"
            } else {
                ah = D.readyState !== "loading"
            }
            if (ah) {
                ak();
                return
            }
            var aj;
            if (D.addEventListener) {
                ag(D, "DOMContentLoaded", function ai() {
                    D.removeEventListener("DOMContentLoaded", ai, false);
                    if (!ah) {
                        ah = true;
                        ak()
                    }
                })
            } else {
                if (D.attachEvent) {
                    D.attachEvent("onreadystatechange", function ai() {
                        if (D.readyState === "complete") {
                            D.detachEvent("onreadystatechange", ai);
                            if (!ah) {
                                ah = true;
                                ak()
                            }
                        }
                    });
                    if (D.documentElement.doScroll && Q === Q.top) {
                        (function ai() {
                            if (!ah) {
                                try {
                                    D.documentElement.doScroll("left")
                                } catch (al) {
                                    setTimeout(ai, 0);
                                    return
                                }
                                ah = true;
                                ak()
                            }
                        }())
                    }
                }
            }
            ag(Q, "load", function() {
                if (!ah) {
                    ah = true;
                    ak()
                }
            }, false)
        }

        function W(ai, an, ao) {
            if (!ai) {
                return ""
            }
            var ah = "",
                ak, aj, al, am;
            for (ak in a) {
                if (Object.prototype.hasOwnProperty.call(a, ak)) {
                    am = a[ak] && "function" === typeof a[ak][ai];
                    if (am) {
                        aj = a[ak][ai];
                        al = aj(an || {}, ao);
                        if (al) {
                            ah += al
                        }
                    }
                }
            }
            return ah
        }

        function ab() {
            var ah;
            W("unload");
            if (p) {
                do {
                    ah = new Date()
                } while (ah.getTimeAlias() < p)
            }
        }

        function m(aj, ai) {
            var ah = D.createElement("script");
            ah.type = "text/javascript";
            ah.src = aj;
            if (ah.readyState) {
                ah.onreadystatechange = function() {
                    var ak = this.readyState;
                    if (ak === "loaded" || ak === "complete") {
                        ah.onreadystatechange = null;
                        ai()
                    }
                }
            } else {
                ah.onload = ai
            }
            D.getElementsByTagName("head")[0].appendChild(ah)
        }

        function H() {
            var ah = "";
            try {
                ah = Q.top.document.referrer
            } catch (aj) {
                if (Q.parent) {
                    try {
                        ah = Q.parent.document.referrer
                    } catch (ai) {
                        ah = ""
                    }
                }
            }
            if (ah === "") {
                ah = D.referrer
            }
            return ah
        }

        function q(ah) {
            var aj = new RegExp("^([a-z]+):"),
                ai = aj.exec(ah);
            return ai ? ai[1] : null
        }

        function c(ah) {
            var aj = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
                ai = aj.exec(ah);
            return ai ? ai[1] : ah
        }

        function ac(ai, ah) {
            ai = String(ai);
            return ai.lastIndexOf(ah, 0) === 0
        }

        function O(ai, ah) {
            ai = String(ai);
            return ai.indexOf(ah, ai.length - ah.length) !== -1
        }

        function w(ai, ah) {
            ai = String(ai);
            return ai.indexOf(ah) !== -1
        }

        function f(ai, ah) {
            ai = String(ai);
            return ai.substr(0, ai.length - ah)
        }

        function C(ak, aj, am) {
            ak = String(ak);
            if (!am) {
                am = ""
            }
            var ah = ak.indexOf("#");
            var an = ak.length;
            if (ah === -1) {
                ah = an
            }
            var al = ak.substr(0, ah);
            var ai = ak.substr(ah, an - ah);
            if (al.indexOf("?") === -1) {
                al += "?"
            } else {
                if (!O(al, "?")) {
                    al += "&"
                }
            }
            return al + r(aj) + "=" + r(am) + ai
        }

        function j(ai, aj) {
            ai = String(ai);
            if (ai.indexOf("?" + aj + "=") === -1 && ai.indexOf("&" + aj + "=") === -1) {
                return ai
            }
            var ak = ai.indexOf("?");
            if (ak === -1) {
                return ai
            }
            var ah = ai.substr(ak + 1);
            var ao = ai.substr(0, ak);
            if (ah) {
                var ap = "";
                var ar = ah.indexOf("#");
                if (ar !== -1) {
                    ap = ah.substr(ar + 1);
                    ah = ah.substr(0, ar)
                }
                var al;
                var an = ah.split("&");
                var am = an.length - 1;
                for (am; am >= 0; am--) {
                    al = an[am].split("=")[0];
                    if (al === aj) {
                        an.splice(am, 1)
                    }
                }
                var aq = an.join("&");
                if (aq) {
                    ao = ao + "?" + aq
                }
                if (ap) {
                    ao += "#" + ap
                }
            }
            return ao
        }

        function e(aj, ai) {
            var ah = "[\\?&#]" + ai + "=([^&#]*)";
            var al = new RegExp(ah);
            var ak = al.exec(aj);
            return ak ? P(ak[1]) : ""
        }

        function A(ah) {
            return unescape(r(ah))
        }

        function af(ax) {
            var aj = function(aD, aC) {
                    return (aD << aC) | (aD >>> (32 - aC))
                },
                ay = function(aF) {
                    var aD = "",
                        aE, aC;
                    for (aE = 7; aE >= 0; aE--) {
                        aC = (aF >>> (aE * 4)) & 15;
                        aD += aC.toString(16)
                    }
                    return aD
                },
                am, aA, az, ai = [],
                aq = 1732584193,
                ao = 4023233417,
                an = 2562383102,
                al = 271733878,
                ak = 3285377520,
                aw, av, au, at, ar, aB, ah, ap = [];
            ax = A(ax);
            ah = ax.length;
            for (aA = 0; aA < ah - 3; aA += 4) {
                az = ax.charCodeAt(aA) << 24 | ax.charCodeAt(aA + 1) << 16 | ax.charCodeAt(aA + 2) << 8 | ax.charCodeAt(aA + 3);
                ap.push(az)
            }
            switch (ah & 3) {
                case 0:
                    aA = 2147483648;
                    break;
                case 1:
                    aA = ax.charCodeAt(ah - 1) << 24 | 8388608;
                    break;
                case 2:
                    aA = ax.charCodeAt(ah - 2) << 24 | ax.charCodeAt(ah - 1) << 16 | 32768;
                    break;
                case 3:
                    aA = ax.charCodeAt(ah - 3) << 24 | ax.charCodeAt(ah - 2) << 16 | ax.charCodeAt(ah - 1) << 8 | 128;
                    break
            }
            ap.push(aA);
            while ((ap.length & 15) !== 14) {
                ap.push(0)
            }
            ap.push(ah >>> 29);
            ap.push((ah << 3) & 4294967295);
            for (am = 0; am < ap.length; am += 16) {
                for (aA = 0; aA < 16; aA++) {
                    ai[aA] = ap[am + aA]
                }
                for (aA = 16; aA <= 79; aA++) {
                    ai[aA] = aj(ai[aA - 3] ^ ai[aA - 8] ^ ai[aA - 14] ^ ai[aA - 16], 1)
                }
                aw = aq;
                av = ao;
                au = an;
                at = al;
                ar = ak;
                for (aA = 0; aA <= 19; aA++) {
                    aB = (aj(aw, 5) + ((av & au) | (~av & at)) + ar + ai[aA] + 1518500249) & 4294967295;
                    ar = at;
                    at = au;
                    au = aj(av, 30);
                    av = aw;
                    aw = aB
                }
                for (aA = 20; aA <= 39; aA++) {
                    aB = (aj(aw, 5) + (av ^ au ^ at) + ar + ai[aA] + 1859775393) & 4294967295;
                    ar = at;
                    at = au;
                    au = aj(av, 30);
                    av = aw;
                    aw = aB
                }
                for (aA = 40; aA <= 59; aA++) {
                    aB = (aj(aw, 5) + ((av & au) | (av & at) | (au & at)) + ar + ai[aA] + 2400959708) & 4294967295;
                    ar = at;
                    at = au;
                    au = aj(av, 30);
                    av = aw;
                    aw = aB
                }
                for (aA = 60; aA <= 79; aA++) {
                    aB = (aj(aw, 5) + (av ^ au ^ at) + ar + ai[aA] + 3395469782) & 4294967295;
                    ar = at;
                    at = au;
                    au = aj(av, 30);
                    av = aw;
                    aw = aB
                }
                aq = (aq + aw) & 4294967295;
                ao = (ao + av) & 4294967295;
                an = (an + au) & 4294967295;
                al = (al + at) & 4294967295;
                ak = (ak + ar) & 4294967295
            }
            aB = ay(aq) + ay(ao) + ay(an) + ay(al) + ay(ak);
            return aB.toLowerCase()
        }

        function V(aj, ah, ai) {
            if (!aj) {
                aj = ""
            }
            if (!ah) {
                ah = ""
            }
            if (aj === "translate.googleusercontent.com") {
                if (ai === "") {
                    ai = ah
                }
                ah = e(ah, "u");
                aj = c(ah)
            } else {
                if (aj === "cc.bingj.com" || aj === "webcache.googleusercontent.com" || aj.slice(0, 5) === "74.6.") {
                    ah = D.links[0].href;
                    aj = c(ah)
                }
            }
            return [aj, ah, ai]
        }

        function I(ai) {
            var ah = ai.length;
            if (ai.charAt(--ah) === ".") {
                ai = ai.slice(0, ah)
            }
            if (ai.slice(0, 2) === "*.") {
                ai = ai.slice(1)
            }
            if (ai.indexOf("/") !== -1) {
                ai = ai.substr(0, ai.indexOf("/"))
            }
            return ai
        }

        function ae(ai) {
            ai = ai && ai.text ? ai.text : ai;
            if (!u(ai)) {
                var ah = D.getElementsByTagName("title");
                if (ah && G(ah[0])) {
                    ai = ah[0].text
                }
            }
            return ai
        }

        function M(ah) {
            if (!ah) {
                return []
            }
            if (!G(ah.children) && G(ah.childNodes)) {
                return ah.children
            }
            if (G(ah.children)) {
                return ah.children
            }
            return []
        }

        function R(ai, ah) {
            if (!ai || !ah) {
                return false
            }
            if (ai.contains) {
                return ai.contains(ah)
            }
            if (ai === ah) {
                return true
            }
            if (ai.compareDocumentPosition) {
                return !!(ai.compareDocumentPosition(ah) & 16)
            }
            return false
        }

        function J(aj, ak) {
            if (aj && aj.indexOf) {
                return aj.indexOf(ak)
            }
            if (!G(aj) || aj === null) {
                return -1
            }
            if (!aj.length) {
                return -1
            }
            var ah = aj.length;
            if (ah === 0) {
                return -1
            }
            var ai = 0;
            while (ai < ah) {
                if (aj[ai] === ak) {
                    return ai
                }
                ai++
            }
            return -1
        }

        function i(aj) {
            if (!aj) {
                return false
            }

            function ah(al, am) {
                if (Q.getComputedStyle) {
                    return D.defaultView.getComputedStyle(al, null)[am]
                }
                if (al.currentStyle) {
                    return al.currentStyle[am]
                }
            }

            function ak(al) {
                al = al.parentNode;
                while (al) {
                    if (al === D) {
                        return true
                    }
                    al = al.parentNode
                }
                return false
            }

            function ai(an, au, al, aq, ao, ar, ap) {
                var am = an.parentNode,
                    at = 1;
                if (!ak(an)) {
                    return false
                }
                if (9 === am.nodeType) {
                    return true
                }
                if ("0" === ah(an, "opacity") || "none" === ah(an, "display") || "hidden" === ah(an, "visibility")) {
                    return false
                }
                if (!G(au) || !G(al) || !G(aq) || !G(ao) || !G(ar) || !G(ap)) {
                    au = an.offsetTop;
                    ao = an.offsetLeft;
                    aq = au + an.offsetHeight;
                    al = ao + an.offsetWidth;
                    ar = an.offsetWidth;
                    ap = an.offsetHeight
                }
                if (aj === an && (0 === ap || 0 === ar) && "hidden" === ah(an, "overflow")) {
                    return false
                }
                if (am) {
                    if (("hidden" === ah(am, "overflow") || "scroll" === ah(am, "overflow"))) {
                        if (ao + at > am.offsetWidth + am.scrollLeft || ao + ar - at < am.scrollLeft || au + at > am.offsetHeight + am.scrollTop || au + ap - at < am.scrollTop) {
                            return false
                        }
                    }
                    if (an.offsetParent === am) {
                        ao += am.offsetLeft;
                        au += am.offsetTop
                    }
                    return ai(am, au, al, aq, ao, ar, ap)
                }
                return true
            }
            return ai(aj)
        }
        var Y = {
            htmlCollectionToArray: function(aj) {
                var ah = [],
                    ai;
                if (!aj || !aj.length) {
                    return ah
                }
                for (ai = 0; ai < aj.length; ai++) {
                    ah.push(aj[ai])
                }
                return ah
            },
            find: function(ah) {
                if (!document.querySelectorAll || !ah) {
                    return []
                }
                var ai = document.querySelectorAll(ah);
                return this.htmlCollectionToArray(ai)
            },
            findMultiple: function(aj) {
                if (!aj || !aj.length) {
                    return []
                }
                var ai, ak;
                var ah = [];
                for (ai = 0; ai < aj.length; ai++) {
                    ak = this.find(aj[ai]);
                    ah = ah.concat(ak)
                }
                ah = this.makeNodesUnique(ah);
                return ah
            },
            findNodesByTagName: function(ai, ah) {
                if (!ai || !ah || !ai.getElementsByTagName) {
                    return []
                }
                var aj = ai.getElementsByTagName(ah);
                return this.htmlCollectionToArray(aj)
            },
            makeNodesUnique: function(ah) {
                var am = [].concat(ah);
                ah.sort(function(ao, an) {
                    if (ao === an) {
                        return 0
                    }
                    var aq = J(am, ao);
                    var ap = J(am, an);
                    if (aq === ap) {
                        return 0
                    }
                    return aq > ap ? -1 : 1
                });
                if (ah.length <= 1) {
                    return ah
                }
                var ai = 0;
                var ak = 0;
                var al = [];
                var aj;
                aj = ah[ai++];
                while (aj) {
                    if (aj === ah[ai]) {
                        ak = al.push(ai)
                    }
                    aj = ah[ai++] || null
                }
                while (ak--) {
                    ah.splice(al[ak], 1)
                }
                return ah
            },
            getAttributeValueFromNode: function(al, aj) {
                if (!this.hasNodeAttribute(al, aj)) {
                    return
                }
                if (al && al.getAttribute) {
                    return al.getAttribute(aj)
                }
                if (!al || !al.attributes) {
                    return
                }
                var ak = (typeof al.attributes[aj]);
                if ("undefined" === ak) {
                    return
                }
                if (al.attributes[aj].value) {
                    return al.attributes[aj].value
                }
                if (al.attributes[aj].nodeValue) {
                    return al.attributes[aj].nodeValue
                }
                var ai;
                var ah = al.attributes;
                if (!ah) {
                    return
                }
                for (ai = 0; ai < ah.length; ai++) {
                    if (ah[ai].nodeName === aj) {
                        return ah[ai].nodeValue
                    }
                }
                return null
            },
            hasNodeAttributeWithValue: function(ai, ah) {
                var aj = this.getAttributeValueFromNode(ai, ah);
                return !!aj
            },
            hasNodeAttribute: function(aj, ah) {
                if (aj && aj.hasAttribute) {
                    return aj.hasAttribute(ah)
                }
                if (aj && aj.attributes) {
                    var ai = (typeof aj.attributes[ah]);
                    return "undefined" !== ai
                }
                return false
            },
            hasNodeCssClass: function(aj, ah) {
                if (aj && ah && aj.className) {
                    var ai = typeof aj.className === "string" ? aj.className.split(" ") : [];
                    if (-1 !== J(ai, ah)) {
                        return true
                    }
                }
                return false
            },
            findNodesHavingAttribute: function(al, aj, ah) {
                if (!ah) {
                    ah = []
                }
                if (!al || !aj) {
                    return ah
                }
                var ak = M(al);
                if (!ak || !ak.length) {
                    return ah
                }
                var ai, am;
                for (ai = 0; ai < ak.length; ai++) {
                    am = ak[ai];
                    if (this.hasNodeAttribute(am, aj)) {
                        ah.push(am)
                    }
                    ah = this.findNodesHavingAttribute(am, aj, ah)
                }
                return ah
            },
            findFirstNodeHavingAttribute: function(aj, ai) {
                if (!aj || !ai) {
                    return
                }
                if (this.hasNodeAttribute(aj, ai)) {
                    return aj
                }
                var ah = this.findNodesHavingAttribute(aj, ai);
                if (ah && ah.length) {
                    return ah[0]
                }
            },
            findFirstNodeHavingAttributeWithValue: function(ak, aj) {
                if (!ak || !aj) {
                    return
                }
                if (this.hasNodeAttributeWithValue(ak, aj)) {
                    return ak
                }
                var ah = this.findNodesHavingAttribute(ak, aj);
                if (!ah || !ah.length) {
                    return
                }
                var ai;
                for (ai = 0; ai < ah.length; ai++) {
                    if (this.getAttributeValueFromNode(ah[ai], aj)) {
                        return ah[ai]
                    }
                }
            },
            findNodesHavingCssClass: function(al, ak, ah) {
                if (!ah) {
                    ah = []
                }
                if (!al || !ak) {
                    return ah
                }
                if (al.getElementsByClassName) {
                    var am = al.getElementsByClassName(ak);
                    return this.htmlCollectionToArray(am)
                }
                var aj = M(al);
                if (!aj || !aj.length) {
                    return []
                }
                var ai, an;
                for (ai = 0; ai < aj.length; ai++) {
                    an = aj[ai];
                    if (this.hasNodeCssClass(an, ak)) {
                        ah.push(an)
                    }
                    ah = this.findNodesHavingCssClass(an, ak, ah)
                }
                return ah
            },
            findFirstNodeHavingClass: function(aj, ai) {
                if (!aj || !ai) {
                    return
                }
                if (this.hasNodeCssClass(aj, ai)) {
                    return aj
                }
                var ah = this.findNodesHavingCssClass(aj, ai);
                if (ah && ah.length) {
                    return ah[0]
                }
            },
            isLinkElement: function(ai) {
                if (!ai) {
                    return false
                }
                var ah = String(ai.nodeName).toLowerCase();
                var ak = ["a", "area"];
                var aj = J(ak, ah);
                return aj !== -1
            },
            setAnyAttribute: function(ai, ah, aj) {
                if (!ai || !ah) {
                    return
                }
                if (ai.setAttribute) {
                    ai.setAttribute(ah, aj)
                } else {
                    ai[ah] = aj
                }
            }
        };
        var t = {
            CONTENT_ATTR: "data-track-content",
            CONTENT_CLASS: "piwikTrackContent",
            CONTENT_NAME_ATTR: "data-content-name",
            CONTENT_PIECE_ATTR: "data-content-piece",
            CONTENT_PIECE_CLASS: "piwikContentPiece",
            CONTENT_TARGET_ATTR: "data-content-target",
            CONTENT_TARGET_CLASS: "piwikContentTarget",
            CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
            CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
            location: undefined,
            findContentNodes: function() {
                var ai = "." + this.CONTENT_CLASS;
                var ah = "[" + this.CONTENT_ATTR + "]";
                var aj = Y.findMultiple([ai, ah]);
                return aj
            },
            findContentNodesWithinNode: function(ak) {
                if (!ak) {
                    return []
                }
                var ai = Y.findNodesHavingCssClass(ak, this.CONTENT_CLASS);
                var ah = Y.findNodesHavingAttribute(ak, this.CONTENT_ATTR);
                if (ah && ah.length) {
                    var aj;
                    for (aj = 0; aj < ah.length; aj++) {
                        ai.push(ah[aj])
                    }
                }
                if (Y.hasNodeAttribute(ak, this.CONTENT_ATTR)) {
                    ai.push(ak)
                } else {
                    if (Y.hasNodeCssClass(ak, this.CONTENT_CLASS)) {
                        ai.push(ak)
                    }
                }
                ai = Y.makeNodesUnique(ai);
                return ai
            },
            findParentContentNode: function(ai) {
                if (!ai) {
                    return
                }
                var aj = ai;
                var ah = 0;
                while (aj && aj !== D && aj.parentNode) {
                    if (Y.hasNodeAttribute(aj, this.CONTENT_ATTR)) {
                        return aj
                    }
                    if (Y.hasNodeCssClass(aj, this.CONTENT_CLASS)) {
                        return aj
                    }
                    aj = aj.parentNode;
                    if (ah > 1000) {
                        break
                    }
                    ah++
                }
            },
            findPieceNode: function(ai) {
                var ah;
                ah = Y.findFirstNodeHavingAttribute(ai, this.CONTENT_PIECE_ATTR);
                if (!ah) {
                    ah = Y.findFirstNodeHavingClass(ai, this.CONTENT_PIECE_CLASS)
                }
                if (ah) {
                    return ah
                }
                return ai
            },
            findTargetNodeNoDefault: function(ah) {
                if (!ah) {
                    return
                }
                var ai = Y.findFirstNodeHavingAttributeWithValue(ah, this.CONTENT_TARGET_ATTR);
                if (ai) {
                    return ai
                }
                ai = Y.findFirstNodeHavingAttribute(ah, this.CONTENT_TARGET_ATTR);
                if (ai) {
                    return ai
                }
                ai = Y.findFirstNodeHavingClass(ah, this.CONTENT_TARGET_CLASS);
                if (ai) {
                    return ai
                }
            },
            findTargetNode: function(ah) {
                var ai = this.findTargetNodeNoDefault(ah);
                if (ai) {
                    return ai
                }
                return ah
            },
            findContentName: function(ai) {
                if (!ai) {
                    return
                }
                var al = Y.findFirstNodeHavingAttributeWithValue(ai, this.CONTENT_NAME_ATTR);
                if (al) {
                    return Y.getAttributeValueFromNode(al, this.CONTENT_NAME_ATTR)
                }
                var ah = this.findContentPiece(ai);
                if (ah) {
                    return this.removeDomainIfIsInLink(ah)
                }
                if (Y.hasNodeAttributeWithValue(ai, "title")) {
                    return Y.getAttributeValueFromNode(ai, "title")
                }
                var aj = this.findPieceNode(ai);
                if (Y.hasNodeAttributeWithValue(aj, "title")) {
                    return Y.getAttributeValueFromNode(aj, "title")
                }
                var ak = this.findTargetNode(ai);
                if (Y.hasNodeAttributeWithValue(ak, "title")) {
                    return Y.getAttributeValueFromNode(ak, "title")
                }
            },
            findContentPiece: function(ai) {
                if (!ai) {
                    return
                }
                var ak = Y.findFirstNodeHavingAttributeWithValue(ai, this.CONTENT_PIECE_ATTR);
                if (ak) {
                    return Y.getAttributeValueFromNode(ak, this.CONTENT_PIECE_ATTR)
                }
                var ah = this.findPieceNode(ai);
                var aj = this.findMediaUrlInNode(ah);
                if (aj) {
                    return this.toAbsoluteUrl(aj)
                }
            },
            findContentTarget: function(aj) {
                if (!aj) {
                    return
                }
                var ak = this.findTargetNode(aj);
                if (Y.hasNodeAttributeWithValue(ak, this.CONTENT_TARGET_ATTR)) {
                    return Y.getAttributeValueFromNode(ak, this.CONTENT_TARGET_ATTR)
                }
                var ai;
                if (Y.hasNodeAttributeWithValue(ak, "href")) {
                    ai = Y.getAttributeValueFromNode(ak, "href");
                    return this.toAbsoluteUrl(ai)
                }
                var ah = this.findPieceNode(aj);
                if (Y.hasNodeAttributeWithValue(ah, "href")) {
                    ai = Y.getAttributeValueFromNode(ah, "href");
                    return this.toAbsoluteUrl(ai)
                }
            },
            isSameDomain: function(ah) {
                if (!ah || !ah.indexOf) {
                    return false
                }
                if (0 === ah.indexOf(this.getLocation().origin)) {
                    return true
                }
                var ai = ah.indexOf(this.getLocation().host);
                if (8 >= ai && 0 <= ai) {
                    return true
                }
                return false
            },
            removeDomainIfIsInLink: function(aj) {
                var ai = "^https?://[^/]+";
                var ah = "^.*//[^/]+";
                if (aj && aj.search && -1 !== aj.search(new RegExp(ai)) && this.isSameDomain(aj)) {
                    aj = aj.replace(new RegExp(ah), "");
                    if (!aj) {
                        aj = "/"
                    }
                }
                return aj
            },
            findMediaUrlInNode: function(al) {
                if (!al) {
                    return
                }
                var aj = ["img", "embed", "video", "audio"];
                var ah = al.nodeName.toLowerCase();
                if (-1 !== J(aj, ah) && Y.findFirstNodeHavingAttributeWithValue(al, "src")) {
                    var ak = Y.findFirstNodeHavingAttributeWithValue(al, "src");
                    return Y.getAttributeValueFromNode(ak, "src")
                }
                if (ah === "object" && Y.hasNodeAttributeWithValue(al, "data")) {
                    return Y.getAttributeValueFromNode(al, "data")
                }
                if (ah === "object") {
                    var am = Y.findNodesByTagName(al, "param");
                    if (am && am.length) {
                        var ai;
                        for (ai = 0; ai < am.length; ai++) {
                            if ("movie" === Y.getAttributeValueFromNode(am[ai], "name") && Y.hasNodeAttributeWithValue(am[ai], "value")) {
                                return Y.getAttributeValueFromNode(am[ai], "value")
                            }
                        }
                    }
                    var an = Y.findNodesByTagName(al, "embed");
                    if (an && an.length) {
                        return this.findMediaUrlInNode(an[0])
                    }
                }
            },
            trim: function(ah) {
                if (ah && String(ah) === ah) {
                    return ah.replace(/^\s+|\s+$/g, "")
                }
                return ah
            },
            isOrWasNodeInViewport: function(am) {
                if (!am || !am.getBoundingClientRect || am.nodeType !== 1) {
                    return true
                }
                var al = am.getBoundingClientRect();
                var ak = D.documentElement || {};
                var aj = al.top < 0;
                if (aj && am.offsetTop) {
                    aj = (am.offsetTop + al.height) > 0
                }
                var ai = ak.clientWidth;
                if (Q.innerWidth && ai > Q.innerWidth) {
                    ai = Q.innerWidth
                }
                var ah = ak.clientHeight;
                if (Q.innerHeight && ah > Q.innerHeight) {
                    ah = Q.innerHeight
                }
                return ((al.bottom > 0 || aj) && al.right > 0 && al.left < ai && ((al.top < ah) || aj))
            },
            isNodeVisible: function(ai) {
                var ah = i(ai);
                var aj = this.isOrWasNodeInViewport(ai);
                return ah && aj
            },
            buildInteractionRequestParams: function(ah, ai, aj, ak) {
                var al = "";
                if (ah) {
                    al += "c_i=" + r(ah)
                }
                if (ai) {
                    if (al) {
                        al += "&"
                    }
                    al += "c_n=" + r(ai)
                }
                if (aj) {
                    if (al) {
                        al += "&"
                    }
                    al += "c_p=" + r(aj)
                }
                if (ak) {
                    if (al) {
                        al += "&"
                    }
                    al += "c_t=" + r(ak)
                }
                return al
            },
            buildImpressionRequestParams: function(ah, ai, aj) {
                var ak = "c_n=" + r(ah) + "&c_p=" + r(ai);
                if (aj) {
                    ak += "&c_t=" + r(aj)
                }
                return ak
            },
            buildContentBlock: function(aj) {
                if (!aj) {
                    return
                }
                var ah = this.findContentName(aj);
                var ai = this.findContentPiece(aj);
                var ak = this.findContentTarget(aj);
                ah = this.trim(ah);
                ai = this.trim(ai);
                ak = this.trim(ak);
                return {
                    name: ah || "Unknown",
                    piece: ai || "Unknown",
                    target: ak || ""
                }
            },
            collectContent: function(ak) {
                if (!ak || !ak.length) {
                    return []
                }
                var aj = [];
                var ah, ai;
                for (ah = 0; ah < ak.length; ah++) {
                    ai = this.buildContentBlock(ak[ah]);
                    if (G(ai)) {
                        aj.push(ai)
                    }
                }
                return aj
            },
            setLocation: function(ah) {
                this.location = ah
            },
            getLocation: function() {
                var ah = this.location || Q.location;
                if (!ah.origin) {
                    ah.origin = ah.protocol + "//" + ah.hostname + (ah.port ? ":" + ah.port : "")
                }
                return ah
            },
            toAbsoluteUrl: function(ai) {
                if ((!ai || String(ai) !== ai) && ai !== "") {
                    return ai
                }
                if ("" === ai) {
                    return this.getLocation().href
                }
                if (ai.search(/^\/\//) !== -1) {
                    return this.getLocation().protocol + ai
                }
                if (ai.search(/:\/\//) !== -1) {
                    return ai
                }
                if (0 === ai.indexOf("#")) {
                    return this.getLocation().origin + this.getLocation().pathname + ai
                }
                if (0 === ai.indexOf("?")) {
                    return this.getLocation().origin + this.getLocation().pathname + ai
                }
                if (0 === ai.search("^[a-zA-Z]{2,11}:")) {
                    return ai
                }
                if (ai.search(/^\//) !== -1) {
                    return this.getLocation().origin + ai
                }
                var ah = "(.*/)";
                var aj = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(ah))[0];
                return aj + ai
            },
            isUrlToCurrentDomain: function(ai) {
                var aj = this.toAbsoluteUrl(ai);
                if (!aj) {
                    return false
                }
                var ah = this.getLocation().origin;
                if (ah === aj) {
                    return true
                }
                if (0 === String(aj).indexOf(ah)) {
                    if (":" === String(aj).substr(ah.length, 1)) {
                        return false
                    }
                    return true
                }
                return false
            },
            setHrefAttribute: function(ai, ah) {
                if (!ai || !ah) {
                    return
                }
                Y.setAnyAttribute(ai, "href", ah)
            },
            shouldIgnoreInteraction: function(aj) {
                var ai = Y.hasNodeAttribute(aj, this.CONTENT_IGNOREINTERACTION_ATTR);
                var ah = Y.hasNodeCssClass(aj, this.CONTENT_IGNOREINTERACTION_CLASS);
                return ai || ah
            }
        };

        function L(ai, al) {
            if (al) {
                return al
            }
            ai = t.toAbsoluteUrl(ai);
            if (w(ai, "?")) {
                var ak = ai.indexOf("?");
                ai = ai.slice(0, ak)
            }
            if (O(ai, "piwik.php")) {
                ai = f(ai, "piwik.php".length)
            } else {
                if (O(ai, ".php")) {
                    var ah = ai.lastIndexOf("/");
                    var aj = 1;
                    ai = ai.slice(0, ah + aj)
                }
            }
            if (O(ai, "/js/")) {
                ai = f(ai, "js/".length)
            }
            return ai
        }

        function K(an) {
            var ap = "Piwik_Overlay";
            var ai = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$");
            var aj = ai.exec(D.referrer);
            if (aj) {
                var al = aj[1];
                if (al !== String(an)) {
                    return false
                }
                var am = aj[2],
                    ah = aj[3],
                    ak = aj[4];
                if (!ak) {
                    ak = ""
                } else {
                    if (ak.indexOf("&segment=") === 0) {
                        ak = ak.substr("&segment=".length)
                    }
                }
                Q.name = ap + "###" + am + "###" + ah + "###" + ak
            }
            var ao = Q.name.split("###");
            return ao.length === 4 && ao[0] === ap
        }

        function U(ai, ao, ak) {
            var an = Q.name.split("###"),
                am = an[1],
                ah = an[2],
                al = an[3],
                aj = L(ai, ao);
            m(aj + "plugins/Overlay/client/client.js?v=1", function() {
                Piwik_Overlay_Client.initialize(aj, ak, am, ah, al)
            })
        }

        function s() {
            var aj;
            try {
                aj = Q.frameElement
            } catch (ai) {
                return true
            }
            if (G(aj)) {
                return (aj && String(aj.nodeName).toLowerCase() === "iframe") ? true : false
            }
            try {
                return Q.self !== Q.top
            } catch (ah) {
                return true
            }
        }

        function N(bW, bR) {
            var br = this,
                bM = V(D.domain, Q.location.href, H()),
                cy = I(bM[0]),
                bw = n(bM[1]),
                a9 = n(bM[2]),
                cw = false,
                b0 = "GET",
                cL = b0,
                az = "application/x-www-form-urlencoded; charset=UTF-8",
                cf = az,
                av = bW || "",
                bq = "",
                cC = "",
                bO = bR || "",
                bj = "",
                bx = "",
                aT, a5 = "",
                cI = ["7z", "aac", "apk", "arc", "arj", "asf", "asx", "avi", "azw3", "bin", "csv", "deb", "dmg", "doc", "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpg", "jpeg", "js", "mobi", "mp2", "mp3", "mp4", "mpg", "mpeg", "mov", "movie", "msi", "msp", "odb", "odf", "odg", "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ppt", "pptx", "qt", "qtm", "ra", "ram", "rar", "rpm", "sea", "sit", "tar", "tbz", "tbz2", "bz", "bz2", "tgz", "torrent", "txt", "wav", "wma", "wmv", "wpd", "xls", "xlsx", "xml", "z", "zip"],
                ao = [cy],
                bk = [],
                bu = [],
                aW = [],
                bs = 500,
                co, aU, bA, by, ah, b9 = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"],
                bp = ["pk_kwd", "piwik_kwd", "utm_term"],
                a6 = "_pk_",
                an = "pk_vid",
                cA, bb, a7 = false,
                cu, a1, bg, cp = 33955200000,
                b7 = 1800000,
                cH = 15768000000,
                aR = true,
                b5 = 0,
                bz = false,
                aG = false,
                bT, bE = {},
                b4 = {},
                a8 = {},
                be = 200,
                cD = {},
                cJ = {},
                bS = [],
                bX = false,
                ci = false,
                ai = false,
                cK = false,
                cr = false,
                aE = false,
                a0 = s(),
                cB = null,
                bU, aH, bl, bP = af,
                ba, aB, ca = 0,
                bf = ["id", "ses", "cvar", "ref"];
            try {
                a5 = D.title
            } catch (cg) {
                a5 = ""
            }

            function cO(cZ, cW, cV, cY, cU, cX) {
                if (a7) {
                    return
                }
                var cT;
                if (cV) {
                    cT = new Date();
                    cT.setTime(cT.getTime() + cV)
                }
                D.cookie = cZ + "=" + r(cW) + (cV ? ";expires=" + cT.toGMTString() : "") + ";path=" + (cY || "/") + (cU ? ";domain=" + cU : "") + (cX ? ";secure" : "")
            }

            function au(cV) {
                if (a7) {
                    return 0
                }
                var cT = new RegExp("(^|;)[ ]*" + cV + "=([^;]*)"),
                    cU = cT.exec(D.cookie);
                return cU ? P(cU[2]) : 0
            }

            function bK(cT) {
                var cU;
                cT = j(cT, an);
                if (by) {
                    cU = new RegExp("#.*");
                    return cT.replace(cU, "")
                }
                return cT
            }

            function bD(cV, cT) {
                var cW = q(cT),
                    cU;
                if (cW) {
                    return cT
                }
                if (cT.slice(0, 1) === "/") {
                    return q(cV) + "://" + c(cV) + cT
                }
                cV = bK(cV);
                cU = cV.indexOf("?");
                if (cU >= 0) {
                    cV = cV.slice(0, cU)
                }
                cU = cV.lastIndexOf("/");
                if (cU !== cV.length - 1) {
                    cV = cV.slice(0, cU + 1)
                }
                return cV + cT
            }

            function cn(cV, cT) {
                var cU;
                cV = String(cV).toLowerCase();
                cT = String(cT).toLowerCase();
                if (cV === cT) {
                    return true
                }
                if (cT.slice(0, 1) === ".") {
                    if (cV === cT.slice(1)) {
                        return true
                    }
                    cU = cV.length - cT.length;
                    if ((cU > 0) && (cV.slice(cU) === cT)) {
                        return true
                    }
                }
                return false
            }

            function b3(cT) {
                var cU = document.createElement("a");
                if (cT.indexOf("//") !== 0 && cT.indexOf("http") !== 0) {
                    if (cT.indexOf("*") === 0) {
                        cT = cT.substr(1)
                    }
                    if (cT.indexOf(".") === 0) {
                        cT = cT.substr(1)
                    }
                    cT = "http://" + cT
                }
                cU.href = t.toAbsoluteUrl(cT);
                if (cU.pathname) {
                    return cU.pathname
                }
                return ""
            }

            function aS(cU, cT) {
                if (!ac(cT, "/")) {
                    cT = "/" + cT
                }
                if (!ac(cU, "/")) {
                    cU = "/" + cU
                }
                var cV = (cT === "/" || cT === "/*");
                if (cV) {
                    return true
                }
                if (cU === cT) {
                    return true
                }
                cT = String(cT).toLowerCase();
                cU = String(cU).toLowerCase();
                if (O(cT, "*")) {
                    cT = cT.slice(0, -1);
                    cV = (!cT || cT === "/");
                    if (cV) {
                        return true
                    }
                    if (cU === cT) {
                        return true
                    }
                    return cU.indexOf(cT) === 0
                }
                if (!O(cU, "/")) {
                    cU += "/"
                }
                if (!O(cT, "/")) {
                    cT += "/"
                }
                return cU.indexOf(cT) === 0
            }

            function ak(cX, cZ) {
                var cU, cT, cV, cW, cY;
                for (cU = 0; cU < ao.length; cU++) {
                    cW = I(ao[cU]);
                    cY = b3(ao[cU]);
                    if (cn(cX, cW) && aS(cZ, cY)) {
                        return true
                    }
                }
                return false
            }

            function aL(cW) {
                var cU, cT, cV;
                for (cU = 0; cU < ao.length; cU++) {
                    cT = I(ao[cU].toLowerCase());
                    if (cW === cT) {
                        return true
                    }
                    if (cT.slice(0, 1) === ".") {
                        if (cW === cT.slice(1)) {
                            return true
                        }
                        cV = cW.length - cT.length;
                        if ((cV > 0) && (cW.slice(cV) === cT)) {
                            return true
                        }
                    }
                }
                return false
            }

            function b8(cT, cV) {
                var cU = new Image(1, 1);
                cU.onload = function() {
                    B = 0;
                    if (typeof cV === "function") {
                        cV()
                    }
                };
                cT = cT.replace("send_image=0", "send_image=1");
                cU.src = av + (av.indexOf("?") < 0 ? "?" : "&") + cT
            }

            function cG(cU, cX, cT) {
                if (!G(cT) || null === cT) {
                    cT = true
                }
                try {
                    var cW = Q.XMLHttpRequest ? new Q.XMLHttpRequest() : Q.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
                    cW.open("POST", av, true);
                    cW.onreadystatechange = function() {
                        if (this.readyState === 4 && !(this.status >= 200 && this.status < 300) && cT) {
                            b8(cU, cX)
                        } else {
                            if (this.readyState === 4 && (typeof cX === "function")) {
                                cX()
                            }
                        }
                    };
                    cW.setRequestHeader("Content-Type", cf);
                    cW.send(cU)
                } catch (cV) {
                    if (cT) {
                        b8(cU, cX)
                    }
                }
            }

            function bY(cU) {
                var cT = new Date();
                var cV = cT.getTime() + cU;
                if (!p || cV > p) {
                    p = cV
                }
            }

            function b6(cT) {
                if (bU || !aU) {
                    return
                }
                bU = setTimeout(function cU() {
                    bU = null;
                    if (!a0) {
                        a0 = (!D.hasFocus || D.hasFocus())
                    }
                    if (!a0) {
                        b6(aU);
                        return
                    }
                    if (bA()) {
                        return
                    }
                    var cV = new Date(),
                        cW = aU - (cV.getTime() - cB);
                    cW = Math.min(aU, cW);
                    b6(cW)
                }, cT || aU)
            }

            function bt() {
                if (!bU) {
                    return
                }
                clearTimeout(bU);
                bU = null
            }

            function aY() {
                a0 = true;
                if (bA()) {
                    return
                }
                b6()
            }

            function ap() {
                bt()
            }

            function cQ() {
                if (aE || !aU) {
                    return
                }
                aE = true;
                ag(Q, "focus", aY);
                ag(Q, "blur", ap);
                b6()
            }

            function cj(cX) {
                var cU = new Date();
                var cT = cU.getTime();
                cB = cT;
                if (ci && cT < ci) {
                    var cV = ci - cT;
                    setTimeout(cX, cV);
                    bY(cV + 50);
                    ci += 50;
                    return
                }
                if (ci === false) {
                    var cW = 800;
                    ci = cT + cW
                }
                cX()
            }

            function bo(cU, cT, cV) {
                if (!cu && cU) {
                    cj(function() {
                        if (cL === "POST" || String(cU).length > 2000) {
                            cG(cU, cV)
                        } else {
                            b8(cU, cV)
                        }
                        bY(cT)
                    })
                }
                if (!aE) {
                    cQ()
                } else {
                    b6()
                }
            }

            function b2(cT) {
                if (cu) {
                    return false
                }
                return (cT && cT.length)
            }

            function cP(cV, cT) {
                if (!b2(cV)) {
                    return
                }
                var cU = '{"requests":["?' + cV.join('","?') + '"]}';
                cj(function() {
                    cG(cU, null, false);
                    bY(cT)
                })
            }

            function aJ(cT) {
                return a6 + cT + "." + bO + "." + ba
            }

            function bN() {
                if (a7) {
                    return "0"
                }
                if (!G(g.cookieEnabled)) {
                    var cT = aJ("testcookie");
                    cO(cT, "1");
                    return au(cT) === "1" ? "1" : "0"
                }
                return g.cookieEnabled ? "1" : "0"
            }

            function a4() {
                ba = bP((cA || cy) + (bb || "/")).slice(0, 4)
            }

            function bF() {
                var cU = aJ("cvar"),
                    cT = au(cU);
                if (cT.length) {
                    cT = JSON_PIWIK.parse(cT);
                    if (S(cT)) {
                        return cT
                    }
                }
                return {}
            }

            function ck() {
                if (aG === false) {
                    aG = bF()
                }
            }

            function cv() {
                return bP((g.userAgent || "") + (g.platform || "") + JSON_PIWIK.stringify(cJ) + (new Date()).getTime() + Math.random()).slice(0, 16)
            }

            function aq() {
                return bP((g.userAgent || "") + (g.platform || "") + JSON_PIWIK.stringify(cJ)).slice(0, 6)
            }

            function a2() {
                return Math.floor((new Date()).getTime() / 1000)
            }

            function aA() {
                var cU = a2();
                var cV = aq();
                var cT = String(cU) + cV;
                return cT
            }

            function cF(cW) {
                cW = String(cW);
                var cZ = aq();
                var cX = cZ.length;
                var cY = cW.substr(-1 * cX, cX);
                var cV = parseInt(cW.substr(0, cW.length - cX), 10);
                if (cV && cY && cY === cZ) {
                    var cT = a2();
                    var cU = 45;
                    if (cT >= cV && cT <= (cV + cU)) {
                        return true
                    }
                }
                return false
            }

            function cR(cT) {
                if (!cr) {
                    return ""
                }
                var cX = e(cT, an);
                if (!cX) {
                    return ""
                }
                cX = String(cX);
                var cV = new RegExp("^[a-zA-Z0-9]+$");
                if (cX.length === 32 && cV.test(cX)) {
                    var cU = cX.substr(16, 32);
                    if (cF(cU)) {
                        var cW = cX.substr(0, 16);
                        return cW
                    }
                }
                return ""
            }

            function cs() {
                if (!bx) {
                    bx = cR(bw)
                }
                var cV = new Date(),
                    cT = Math.round(cV.getTime() / 1000),
                    cU = aJ("id"),
                    cY = au(cU),
                    cX, cW;
                if (cY) {
                    cX = cY.split(".");
                    cX.unshift("0");
                    if (bx.length) {
                        cX[1] = bx
                    }
                    return cX
                }
                if (bx.length) {
                    cW = bx
                } else {
                    if ("0" === bN()) {
                        cW = ""
                    } else {
                        cW = cv()
                    }
                }
                cX = ["1", cW, cT, 0, cT, "", ""];
                return cX
            }

            function aN() {
                var c0 = cs(),
                    cW = c0[0],
                    cX = c0[1],
                    cU = c0[2],
                    cT = c0[3],
                    cY = c0[4],
                    cV = c0[5];
                if (!G(c0[6])) {
                    c0[6] = ""
                }
                var cZ = c0[6];
                return {
                    newVisitor: cW,
                    uuid: cX,
                    createTs: cU,
                    visitCount: cT,
                    currentVisitTs: cY,
                    lastVisitTs: cV,
                    lastEcommerceOrderTs: cZ
                }
            }

            function ay() {
                var cW = new Date(),
                    cU = cW.getTime(),
                    cX = aN().createTs;
                var cT = parseInt(cX, 10);
                var cV = (cT * 1000) + cp - cU;
                return cV
            }

            function aC(cT) {
                if (!bO) {
                    return
                }
                var cV = new Date(),
                    cU = Math.round(cV.getTime() / 1000);
                if (!G(cT)) {
                    cT = aN()
                }
                var cW = cT.uuid + "." + cT.createTs + "." + cT.visitCount + "." + cU + "." + cT.lastVisitTs + "." + cT.lastEcommerceOrderTs;
                cO(aJ("id"), cW, ay(), bb, cA)
            }

            function bv() {
                var cT = au(aJ("ref"));
                if (cT.length) {
                    try {
                        cT = JSON_PIWIK.parse(cT);
                        if (S(cT)) {
                            return cT
                        }
                    } catch (cU) {}
                }
                return ["", "", 0, ""]
            }

            function bG(cV, cU, cT) {
                cO(cV, "", -86400, cU, cT)
            }

            function bh(cU) {
                var cT = "testvalue";
                cO("test", cT, 10000, null, cU);
                if (au("test") === cT) {
                    bG("test", null, cU);
                    return true
                }
                return false
            }

            function aw() {
                var cU = a7;
                a7 = false;
                var cT, cV;
                for (cT = 0; cT < bf.length; cT++) {
                    cV = aJ(bf[cT]);
                    if (0 !== au(cV)) {
                        bG(cV, bb, cA)
                    }
                }
                a7 = cU
            }

            function bL(cT) {
                bO = cT;
                aC()
            }

            function cS(cX) {
                if (!cX || !S(cX)) {
                    return
                }
                var cW = [];
                var cV;
                for (cV in cX) {
                    if (Object.prototype.hasOwnProperty.call(cX, cV)) {
                        cW.push(cV)
                    }
                }
                var cY = {};
                cW.sort();
                var cT = cW.length;
                var cU;
                for (cU = 0; cU < cT; cU++) {
                    cY[cW[cU]] = cX[cW[cU]]
                }
                return cY
            }

            function bV() {
                cO(aJ("ses"), "*", b7, bb, cA)
            }

            function a3() {
                var cW = "";
                var cU = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var cV = cU.length;
                var cT;
                for (cT = 0; cT < 6; cT++) {
                    cW += cU.charAt(Math.floor(Math.random() * cV))
                }
                return cW
            }

            function cb(cV, dg, dh, cW) {
                var df, cU = new Date(),
                    c3 = Math.round(cU.getTime() / 1000),
                    c0, de, cX = 1024,
                    dm, c4, dc = aG,
                    cY = aJ("ses"),
                    da = aJ("ref"),
                    c7 = aJ("cvar"),
                    c8 = au(cY),
                    dd = bv(),
                    dj = aT || bw,
                    c1, cT;
                if (a7) {
                    aw()
                }
                if (cu) {
                    return ""
                }
                var c9 = aN();
                if (!G(cW)) {
                    cW = ""
                }
                var c6 = D.characterSet || D.charset;
                if (!c6 || c6.toLowerCase() === "utf-8") {
                    c6 = null
                }
                c1 = dd[0];
                cT = dd[1];
                c0 = dd[2];
                de = dd[3];
                if (!c8) {
                    var di = b7 / 1000;
                    if (!c9.lastVisitTs || (c3 - c9.lastVisitTs) > di) {
                        c9.visitCount++;
                        c9.lastVisitTs = c9.currentVisitTs
                    }
                    if (!bg || !c1.length) {
                        for (df in b9) {
                            if (Object.prototype.hasOwnProperty.call(b9, df)) {
                                c1 = e(dj, b9[df]);
                                if (c1.length) {
                                    break
                                }
                            }
                        }
                        for (df in bp) {
                            if (Object.prototype.hasOwnProperty.call(bp, df)) {
                                cT = e(dj, bp[df]);
                                if (cT.length) {
                                    break
                                }
                            }
                        }
                    }
                    dm = c(a9);
                    c4 = de.length ? c(de) : "";
                    if (dm.length && !aL(dm) && (!bg || !c4.length || aL(c4))) {
                        de = a9
                    }
                    if (de.length || c1.length) {
                        c0 = c3;
                        dd = [c1, cT, c0, bK(de.slice(0, cX))];
                        cO(da, JSON_PIWIK.stringify(dd), cH, bb, cA)
                    }
                }
                cV += "&idsite=" + bO + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + cU.getHours() + "&m=" + cU.getMinutes() + "&s=" + cU.getSeconds() + "&url=" + r(bK(dj)) + (a9.length ? "&urlref=" + r(bK(a9)) : "") + ((bj && bj.length) ? "&uid=" + r(bj) : "") + "&_id=" + c9.uuid + "&_idts=" + c9.createTs + "&_idvc=" + c9.visitCount + "&_idn=" + c9.newVisitor + (c1.length ? "&_rcn=" + r(c1) : "") + (cT.length ? "&_rck=" + r(cT) : "") + "&_refts=" + c0 + "&_viewts=" + c9.lastVisitTs + (String(c9.lastEcommerceOrderTs).length ? "&_ects=" + c9.lastEcommerceOrderTs : "") + (String(de).length ? "&_ref=" + r(bK(de.slice(0, cX))) : "") + (c6 ? "&cs=" + r(c6) : "") + "&send_image=0";
                for (df in cJ) {
                    if (Object.prototype.hasOwnProperty.call(cJ, df)) {
                        cV += "&" + df + "=" + cJ[df]
                    }
                }
                var dl = [];
                if (dg) {
                    for (df in dg) {
                        if (Object.prototype.hasOwnProperty.call(dg, df) && /^dimension\d+$/.test(df)) {
                            var cZ = df.replace("dimension", "");
                            dl.push(parseInt(cZ, 10));
                            dl.push(String(cZ));
                            cV += "&" + df + "=" + dg[df];
                            delete dg[df]
                        }
                    }
                }
                if (dg && y(dg)) {
                    dg = null
                }
                for (df in a8) {
                    if (Object.prototype.hasOwnProperty.call(a8, df)) {
                        var c5 = (-1 === J(dl, df));
                        if (c5) {
                            cV += "&dimension" + df + "=" + a8[df]
                        }
                    }
                }
                if (dg) {
                    cV += "&data=" + r(JSON_PIWIK.stringify(dg))
                } else {
                    if (ah) {
                        cV += "&data=" + r(JSON_PIWIK.stringify(ah))
                    }
                }

                function c2(dn, dp) {
                    var dq = JSON_PIWIK.stringify(dn);
                    if (dq.length > 2) {
                        return "&" + dp + "=" + r(dq)
                    }
                    return ""
                }
                var dk = cS(bE);
                var db = cS(b4);
                cV += c2(dk, "cvar");
                cV += c2(db, "e_cvar");
                if (aG) {
                    cV += c2(aG, "_cvar");
                    for (df in dc) {
                        if (Object.prototype.hasOwnProperty.call(dc, df)) {
                            if (aG[df][0] === "" || aG[df][1] === "") {
                                delete aG[df]
                            }
                        }
                    }
                    if (bz) {
                        cO(c7, JSON_PIWIK.stringify(aG), b7, bb, cA)
                    }
                }
                if (aR) {
                    if (b5) {
                        cV += "&gt_ms=" + b5
                    } else {
                        if (h && h.timing && h.timing.requestStart && h.timing.responseEnd) {
                            cV += "&gt_ms=" + (h.timing.responseEnd - h.timing.requestStart)
                        }
                    }
                }
                if (aB) {
                    cV += "&pv_id=" + aB
                }
                c9.lastEcommerceOrderTs = G(cW) && String(cW).length ? cW : c9.lastEcommerceOrderTs;
                aC(c9);
                bV();
                cV += W(dh, {
                    tracker: br,
                    request: cV
                });
                if (cC.length) {
                    cV += "&" + cC
                }
                if (x(bT)) {
                    cV = bT(cV)
                }
                return cV
            }
            bA = function aV() {
                var cT = new Date();
                if (cB + aU <= cT.getTime()) {
                    var cU = cb("ping=1", null, "ping");
                    bo(cU, bs);
                    return true
                }
                return false
            };

            function bc(cW, cV, c1, cX, cT, c4) {
                var cZ = "idgoal=0",
                    c0, cU = new Date(),
                    c2 = [],
                    c3, cY = String(cW).length;
                if (cY) {
                    cZ += "&ec_id=" + r(cW);
                    c0 = Math.round(cU.getTime() / 1000)
                }
                cZ += "&revenue=" + cV;
                if (String(c1).length) {
                    cZ += "&ec_st=" + c1
                }
                if (String(cX).length) {
                    cZ += "&ec_tx=" + cX
                }
                if (String(cT).length) {
                    cZ += "&ec_sh=" + cT
                }
                if (String(c4).length) {
                    cZ += "&ec_dt=" + c4
                }
                if (cD) {
                    for (c3 in cD) {
                        if (Object.prototype.hasOwnProperty.call(cD, c3)) {
                            if (!G(cD[c3][1])) {
                                cD[c3][1] = ""
                            }
                            if (!G(cD[c3][2])) {
                                cD[c3][2] = ""
                            }
                            if (!G(cD[c3][3]) || String(cD[c3][3]).length === 0) {
                                cD[c3][3] = 0
                            }
                            if (!G(cD[c3][4]) || String(cD[c3][4]).length === 0) {
                                cD[c3][4] = 1
                            }
                            c2.push(cD[c3])
                        }
                    }
                    cZ += "&ec_items=" + r(JSON_PIWIK.stringify(c2))
                }
                cZ = cb(cZ, ah, "ecommerce", c0);
                bo(cZ, bs);
                if (cY) {
                    cD = {}
                }
            }

            function bH(cT, cX, cW, cV, cU, cY) {
                if (String(cT).length && G(cX)) {
                    bc(cT, cX, cW, cV, cU, cY)
                }
            }

            function bd(cT) {
                if (G(cT)) {
                    bc("", cT, "", "", "", "")
                }
            }

            function bI(cU, cW, cV) {
                aB = a3();
                var cT = cb("action_name=" + r(ae(cU || a5)), cW, "log");
                bo(cT, bs, cV)
            }

            function aP(cV, cU) {
                var cW, cT = "(^| )(piwik[_-]" + cU;
                if (cV) {
                    for (cW = 0; cW < cV.length; cW++) {
                        cT += "|" + cV[cW]
                    }
                }
                cT += ")( |$)";
                return new RegExp(cT)
            }

            function aK(cT) {
                return (av && cT && 0 === String(cT).indexOf(av))
            }

            function cc(cX, cT, cY, cU) {
                if (aK(cT)) {
                    return 0
                }
                var cW = aP(bu, "download"),
                    cV = aP(aW, "link"),
                    cZ = new RegExp("\\.(" + cI.join("|") + ")([?&#]|$)", "i");
                if (cV.test(cX)) {
                    return "link"
                }
                if (cU || cW.test(cX) || cZ.test(cT)) {
                    return "download"
                }
                if (cY) {
                    return 0
                }
                return "link"
            }

            function am(cU) {
                var cT;
                cT = cU.parentNode;
                while (cT !== null && G(cT)) {
                    if (Y.isLinkElement(cU)) {
                        break
                    }
                    cU = cT;
                    cT = cU.parentNode
                }
                return cU
            }

            function cM(cY) {
                cY = am(cY);
                if (!Y.hasNodeAttribute(cY, "href")) {
                    return
                }
                if (!G(cY.href)) {
                    return
                }
                var cX = Y.getAttributeValueFromNode(cY, "href");
                if (aK(cX)) {
                    return
                }
                var cU = cY.pathname || b3(cY.href);
                var cZ = cY.hostname || c(cY.href);
                var c0 = cZ.toLowerCase();
                var cV = cY.href.replace(cZ, c0);
                var cW = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):", "i");
                if (!cW.test(cV)) {
                    var cT = cc(cY.className, cV, ak(c0, cU), Y.hasNodeAttribute(cY, "download"));
                    if (cT) {
                        return {
                            type: cT,
                            href: cV
                        }
                    }
                }
            }

            function aF(cT, cU, cV, cW) {
                var cX = t.buildInteractionRequestParams(cT, cU, cV, cW);
                if (!cX) {
                    return
                }
                return cb(cX, null, "contentInteraction")
            }

            function cq(cV, cW, c0, cT, cU) {
                if (!G(cV)) {
                    return
                }
                if (aK(cV)) {
                    return cV
                }
                var cY = t.toAbsoluteUrl(cV);
                var cX = "redirecturl=" + r(cY) + "&";
                cX += aF(cW, c0, cT, (cU || cV));
                var cZ = "&";
                if (av.indexOf("?") < 0) {
                    cZ = "?"
                }
                return av + cZ + cX
            }

            function aZ(cT, cU) {
                if (!cT || !cU) {
                    return false
                }
                var cV = t.findTargetNode(cT);
                if (t.shouldIgnoreInteraction(cV)) {
                    return false
                }
                cV = t.findTargetNodeNoDefault(cT);
                if (cV && !R(cV, cU)) {
                    return false
                }
                return true
            }

            function cd(cV, cU, cX) {
                if (!cV) {
                    return
                }
                var cT = t.findParentContentNode(cV);
                if (!cT) {
                    return
                }
                if (!aZ(cT, cV)) {
                    return
                }
                var cW = t.buildContentBlock(cT);
                if (!cW) {
                    return
                }
                if (!cW.target && cX) {
                    cW.target = cX
                }
                return t.buildInteractionRequestParams(cU, cW.name, cW.piece, cW.target)
            }

            function aM(cU) {
                if (!bS || !bS.length) {
                    return false
                }
                var cT, cV;
                for (cT = 0; cT < bS.length; cT++) {
                    cV = bS[cT];
                    if (cV && cV.name === cU.name && cV.piece === cU.piece && cV.target === cU.target) {
                        return true
                    }
                }
                return false
            }

            function bn(cW) {
                if (!cW) {
                    return false
                }
                var cZ = t.findTargetNode(cW);
                if (!cZ || t.shouldIgnoreInteraction(cZ)) {
                    return false
                }
                var c0 = cM(cZ);
                if (cK && c0 && c0.type) {
                    return false
                }
                if (Y.isLinkElement(cZ) && Y.hasNodeAttributeWithValue(cZ, "href")) {
                    var cT = String(Y.getAttributeValueFromNode(cZ, "href"));
                    if (0 === cT.indexOf("#")) {
                        return false
                    }
                    if (aK(cT)) {
                        return true
                    }
                    if (!t.isUrlToCurrentDomain(cT)) {
                        return false
                    }
                    var cX = t.buildContentBlock(cW);
                    if (!cX) {
                        return
                    }
                    var cV = cX.name;
                    var c1 = cX.piece;
                    var cY = cX.target;
                    if (!Y.hasNodeAttributeWithValue(cZ, t.CONTENT_TARGET_ATTR) || cZ.wasContentTargetAttrReplaced) {
                        cZ.wasContentTargetAttrReplaced = true;
                        cY = t.toAbsoluteUrl(cT);
                        Y.setAnyAttribute(cZ, t.CONTENT_TARGET_ATTR, cY)
                    }
                    var cU = cq(cT, "click", cV, c1, cY);
                    t.setHrefAttribute(cZ, cU);
                    return true
                }
                return false
            }

            function aD(cU) {
                if (!cU || !cU.length) {
                    return
                }
                var cT;
                for (cT = 0; cT < cU.length; cT++) {
                    bn(cU[cT])
                }
            }

            function aO(cT) {
                return function(cU) {
                    if (!cT) {
                        return
                    }
                    var cX = t.findParentContentNode(cT);
                    var cY;
                    if (cU) {
                        cY = cU.target || cU.srcElement
                    }
                    if (!cY) {
                        cY = cT
                    }
                    if (!aZ(cX, cY)) {
                        return
                    }
                    bY(bs);
                    if (Y.isLinkElement(cT) && Y.hasNodeAttributeWithValue(cT, "href") && Y.hasNodeAttributeWithValue(cT, t.CONTENT_TARGET_ATTR)) {
                        var cV = Y.getAttributeValueFromNode(cT, "href");
                        if (!aK(cV) && cT.wasContentTargetAttrReplaced) {
                            Y.setAnyAttribute(cT, t.CONTENT_TARGET_ATTR, "")
                        }
                    }
                    var c2 = cM(cT);
                    if (ai && c2 && c2.type) {
                        return c2.type
                    }
                    if (bn(cX)) {
                        return "href"
                    }
                    var cZ = t.buildContentBlock(cX);
                    if (!cZ) {
                        return
                    }
                    var cW = cZ.name;
                    var c3 = cZ.piece;
                    var c1 = cZ.target;
                    var c0 = aF("click", cW, c3, c1);
                    bo(c0, bs);
                    return c0
                }
            }

            function bJ(cV) {
                if (!cV || !cV.length) {
                    return
                }
                var cT, cU;
                for (cT = 0; cT < cV.length; cT++) {
                    cU = t.findTargetNode(cV[cT]);
                    if (cU && !cU.contentInteractionTrackingSetupDone) {
                        cU.contentInteractionTrackingSetupDone = true;
                        ag(cU, "click", aO(cU))
                    }
                }
            }

            function bi(cV, cW) {
                if (!cV || !cV.length) {
                    return []
                }
                var cT, cU;
                for (cT = 0; cT < cV.length; cT++) {
                    if (aM(cV[cT])) {
                        cV.splice(cT, 1);
                        cT--
                    } else {
                        bS.push(cV[cT])
                    }
                }
                if (!cV || !cV.length) {
                    return []
                }
                aD(cW);
                bJ(cW);
                var cX = [];
                for (cT = 0; cT < cV.length; cT++) {
                    cU = cb(t.buildImpressionRequestParams(cV[cT].name, cV[cT].piece, cV[cT].target), undefined, "contentImpressions");
                    if (cU) {
                        cX.push(cU)
                    }
                }
                return cX
            }

            function ch(cU) {
                var cT = t.collectContent(cU);
                return bi(cT, cU)
            }

            function aX(cU) {
                if (!cU || !cU.length) {
                    return []
                }
                var cT;
                for (cT = 0; cT < cU.length; cT++) {
                    if (!t.isNodeVisible(cU[cT])) {
                        cU.splice(cT, 1);
                        cT--
                    }
                }
                if (!cU || !cU.length) {
                    return []
                }
                return ch(cU)
            }

            function ax(cV, cT, cU) {
                var cW = t.buildImpressionRequestParams(cV, cT, cU);
                return cb(cW, null, "contentImpression")
            }

            function cN(cW, cU) {
                if (!cW) {
                    return
                }
                var cT = t.findParentContentNode(cW);
                var cV = t.buildContentBlock(cT);
                if (!cV) {
                    return
                }
                if (!cU) {
                    cU = "Unknown"
                }
                return aF(cU, cV.name, cV.piece, cV.target)
            }

            function ct(cU, cW, cT, cV) {
                return "e_c=" + r(cU) + "&e_a=" + r(cW) + (G(cT) ? "&e_n=" + r(cT) : "") + (G(cV) ? "&e_v=" + r(cV) : "")
            }

            function al(cV, cX, cT, cW, cZ, cY) {
                if (String(cV).length === 0 || String(cX).length === 0) {
                    return false
                }
                var cU = cb(ct(cV, cX, cT, cW), cZ, "event");
                bo(cU, bs, cY)
            }

            function bQ(cT, cW, cU, cX) {
                var cV = cb("search=" + r(cT) + (cW ? "&search_cat=" + r(cW) : "") + (G(cU) ? "&search_count=" + cU : ""), cX, "sitesearch");
                bo(cV, bs)
            }

            function cx(cT, cW, cV) {
                var cU = cb("idgoal=" + cT + (cW ? "&revenue=" + cW : ""), cV, "goal");
                bo(cU, bs)
            }

            function cE(cW, cT, c0, cZ, cV) {
                var cY = cT + "=" + r(bK(cW));
                var cU = cd(cV, "click", cW);
                if (cU) {
                    cY += "&" + cU
                }
                var cX = cb(cY, c0, "link");
                bo(cX, bs, cZ)
            }

            function bC(cU, cT) {
                if (cU !== "") {
                    return cU + cT.charAt(0).toUpperCase() + cT.slice(1)
                }
                return cT
            }

            function bZ(cY) {
                var cX, cT, cW = ["", "webkit", "ms", "moz"],
                    cV;
                if (!a1) {
                    for (cT = 0; cT < cW.length; cT++) {
                        cV = cW[cT];
                        if (Object.prototype.hasOwnProperty.call(D, bC(cV, "hidden"))) {
                            if (D[bC(cV, "visibilityState")] === "prerender") {
                                cX = true
                            }
                            break
                        }
                    }
                }
                if (cX) {
                    ag(D, cV + "visibilitychange", function cU() {
                        D.removeEventListener(cV + "visibilitychange", cU, false);
                        cY()
                    });
                    return
                }
                cY()
            }

            function b1(cT) {
                if (!cT) {
                    return
                }
                if (!Y.hasNodeAttribute(cT, "href")) {
                    return
                }
                var cU = Y.getAttributeValueFromNode(cT, "href");
                if (!cU || aK(cU)) {
                    return
                }
                cU = j(cU, an);
                if (cU.indexOf("?") > 0) {
                    cU += "&"
                } else {
                    cU += "?"
                }
                var cW = aN().uuid;
                var cV = aA();
                cU = C(cU, an, cW + cV);
                Y.setAnyAttribute(cT, "href", cU)
            }

            function ar(cW) {
                var cX = Y.getAttributeValueFromNode(cW, "href");
                if (!cX) {
                    return false
                }
                cX = String(cX);
                var cU = cX.indexOf("//") === 0 || cX.indexOf("http://") === 0 || cX.indexOf("https://") === 0;
                if (!cU) {
                    return false
                }
                var cT = cW.pathname || b3(cW.href);
                var cV = (cW.hostname || c(cW.href)).toLowerCase();
                if (ak(cV, cT)) {
                    if (!cn(cy, I(cV))) {
                        return true
                    }
                    return false
                }
                return false
            }

            function cm(cT) {
                var cU = cM(cT);
                if (cU && cU.type) {
                    cU.href = n(cU.href);
                    cE(cU.href, cU.type, undefined, null, cT);
                    return
                }
                if (cr) {
                    cT = am(cT);
                    if (ar(cT)) {
                        b1(cT)
                    }
                }
            }

            function ce() {
                return D.all && !D.addEventListener
            }

            function cz(cT) {
                var cV = cT.which;
                var cU = (typeof cT.button);
                if (!cV && cU !== "undefined") {
                    if (ce()) {
                        if (cT.button & 1) {
                            cV = 1
                        } else {
                            if (cT.button & 2) {
                                cV = 3
                            } else {
                                if (cT.button & 4) {
                                    cV = 2
                                }
                            }
                        }
                    } else {
                        if (cT.button === 0 || cT.button === "0") {
                            cV = 1
                        } else {
                            if (cT.button & 1) {
                                cV = 2
                            } else {
                                if (cT.button & 2) {
                                    cV = 3
                                }
                            }
                        }
                    }
                }
                return cV
            }

            function bB(cT) {
                switch (cz(cT)) {
                    case 1:
                        return "left";
                    case 2:
                        return "middle";
                    case 3:
                        return "right"
                }
            }

            function aQ(cT) {
                return cT.target || cT.srcElement
            }

            function at(cT) {
                return function(cW) {
                    cW = cW || Q.event;
                    var cV = bB(cW);
                    var cX = aQ(cW);
                    if (cW.type === "click") {
                        var cU = false;
                        if (cT && cV === "middle") {
                            cU = true
                        }
                        if (cX && !cU) {
                            cm(cX)
                        }
                    } else {
                        if (cW.type === "mousedown") {
                            if (cV === "middle" && cX) {
                                aH = cV;
                                bl = cX
                            } else {
                                aH = bl = null
                            }
                        } else {
                            if (cW.type === "mouseup") {
                                if (cV === aH && cX === bl) {
                                    cm(cX)
                                }
                                aH = bl = null
                            } else {
                                if (cW.type === "contextmenu") {
                                    cm(cX)
                                }
                            }
                        }
                    }
                }
            }

            function aj(cV, cU) {
                var cT = typeof cU;
                if (cT === "undefined") {
                    cU = true
                }
                ag(cV, "click", at(cU), false);
                if (cU) {
                    ag(cV, "mouseup", at(cU), false);
                    ag(cV, "mousedown", at(cU), false);
                    ag(cV, "contextmenu", at(cU), false)
                }
            }

            function bm(cV, cX) {
                ai = true;
                var cW, cU = aP(bk, "ignore"),
                    cY = D.links,
                    cT = null,
                    cZ = null;
                if (cY) {
                    for (cW = 0; cW < cY.length; cW++) {
                        cT = cY[cW];
                        if (!cU.test(cT.className)) {
                            cZ = typeof cT.piwikTrackers;
                            if ("undefined" === cZ) {
                                cT.piwikTrackers = []
                            }
                            if (-1 === J(cT.piwikTrackers, cX)) {
                                cT.piwikTrackers.push(cX);
                                aj(cT, cV)
                            }
                        }
                    }
                }
            }

            function aI(cV, cX, cY) {
                if (bX) {
                    return true
                }
                bX = true;
                var cZ = false;
                var cW, cU;

                function cT() {
                    cZ = true
                }
                l(function() {
                    function c0(c2) {
                        setTimeout(function() {
                            if (!bX) {
                                return
                            }
                            cZ = false;
                            cY.trackVisibleContentImpressions();
                            c0(c2)
                        }, c2)
                    }

                    function c1(c2) {
                        setTimeout(function() {
                            if (!bX) {
                                return
                            }
                            if (cZ) {
                                cZ = false;
                                cY.trackVisibleContentImpressions()
                            }
                            c1(c2)
                        }, c2)
                    }
                    if (cV) {
                        cW = ["scroll", "resize"];
                        for (cU = 0; cU < cW.length; cU++) {
                            if (D.addEventListener) {
                                D.addEventListener(cW[cU], cT)
                            } else {
                                Q.attachEvent("on" + cW[cU], cT)
                            }
                        }
                        c1(100)
                    }
                    if (cX && cX > 0) {
                        cX = parseInt(cX, 10);
                        c0(cX)
                    }
                })
            }

            function cl() {
                var cU, cW, cX = {
                    pdf: "application/pdf",
                    qt: "video/quicktime",
                    realp: "audio/x-pn-realaudio-plugin",
                    wma: "application/x-mplayer2",
                    dir: "application/x-director",
                    fla: "application/x-shockwave-flash",
                    java: "application/x-java-vm",
                    gears: "application/x-googlegears",
                    ag: "application/x-silverlight"
                };
                if (!((new RegExp("MSIE")).test(g.userAgent))) {
                    if (g.mimeTypes && g.mimeTypes.length) {
                        for (cU in cX) {
                            if (Object.prototype.hasOwnProperty.call(cX, cU)) {
                                cW = g.mimeTypes[cX[cU]];
                                cJ[cU] = (cW && cW.enabledPlugin) ? "1" : "0"
                            }
                        }
                    }
                    if (typeof navigator.javaEnabled !== "unknown" && G(g.javaEnabled) && g.javaEnabled()) {
                        cJ.java = "1"
                    }
                    if (x(Q.GearsFactory)) {
                        cJ.gears = "1"
                    }
                    cJ.cookie = bN()
                }
                var cV = parseInt(T.width, 10);
                var cT = parseInt(T.height, 10);
                cJ.res = parseInt(cV, 10) + "x" + parseInt(cT, 10)
            }
            cl();
            a4();
            aC();
            this.getVisitorId = function() {
                return aN().uuid
            };
            this.getVisitorInfo = function() {
                return cs()
            };
            this.getAttributionInfo = function() {
                return bv()
            };
            this.getAttributionCampaignName = function() {
                return bv()[0]
            };
            this.getAttributionCampaignKeyword = function() {
                return bv()[1]
            };
            this.getAttributionReferrerTimestamp = function() {
                return bv()[2]
            };
            this.getAttributionReferrerUrl = function() {
                return bv()[3]
            };
            this.setTrackerUrl = function(cT) {
                av = cT
            };
            this.getTrackerUrl = function() {
                return av
            };
            this.getPiwikUrl = function() {
                return L(this.getTrackerUrl(), bq)
            };
            this.addTracker = function(cT, cV) {
                if (!cV) {
                    throw new Error("A siteId must be given to add a new tracker")
                }
                if (!G(cT) || null === cT) {
                    cT = this.getTrackerUrl()
                }
                var cU = new N(cT, cV);
                F.push(cU);
                return cU
            };
            this.getSiteId = function() {
                return bO
            };
            this.setSiteId = function(cT) {
                bL(cT)
            };
            this.setUserId = function(cT) {
                if (!G(cT) || !cT.length) {
                    return
                }
                bj = cT;
                bx = bP(bj).substr(0, 16)
            };
            this.getUserId = function() {
                return bj
            };
            this.setCustomData = function(cT, cU) {
                if (S(cT)) {
                    ah = cT
                } else {
                    if (!ah) {
                        ah = {}
                    }
                    ah[cT] = cU
                }
            };
            this.getCustomData = function() {
                return ah
            };
            this.setCustomRequestProcessing = function(cT) {
                bT = cT
            };
            this.appendToTrackingUrl = function(cT) {
                cC = cT
            };
            this.getRequest = function(cT) {
                return cb(cT)
            };
            this.addPlugin = function(cT, cU) {
                a[cT] = cU
            };
            this.setCustomDimension = function(cT, cU) {
                cT = parseInt(cT, 10);
                if (cT > 0) {
                    if (!G(cU)) {
                        cU = ""
                    }
                    if (!u(cU)) {
                        cU = String(cU)
                    }
                    a8[cT] = cU
                }
            };
            this.getCustomDimension = function(cT) {
                cT = parseInt(cT, 10);
                if (cT > 0 && Object.prototype.hasOwnProperty.call(a8, cT)) {
                    return a8[cT]
                }
            };
            this.deleteCustomDimension = function(cT) {
                cT = parseInt(cT, 10);
                if (cT > 0) {
                    delete a8[cT]
                }
            };
            this.setCustomVariable = function(cU, cT, cX, cV) {
                var cW;
                if (!G(cV)) {
                    cV = "visit"
                }
                if (!G(cT)) {
                    return
                }
                if (!G(cX)) {
                    cX = ""
                }
                if (cU > 0) {
                    cT = !u(cT) ? String(cT) : cT;
                    cX = !u(cX) ? String(cX) : cX;
                    cW = [cT.slice(0, be), cX.slice(0, be)];
                    if (cV === "visit" || cV === 2) {
                        ck();
                        aG[cU] = cW
                    } else {
                        if (cV === "page" || cV === 3) {
                            bE[cU] = cW
                        } else {
                            if (cV === "event") {
                                b4[cU] = cW
                            }
                        }
                    }
                }
            };
            this.getCustomVariable = function(cU, cV) {
                var cT;
                if (!G(cV)) {
                    cV = "visit"
                }
                if (cV === "page" || cV === 3) {
                    cT = bE[cU]
                } else {
                    if (cV === "event") {
                        cT = b4[cU]
                    } else {
                        if (cV === "visit" || cV === 2) {
                            ck();
                            cT = aG[cU]
                        }
                    }
                }
                if (!G(cT) || (cT && cT[0] === "")) {
                    return false
                }
                return cT
            };
            this.deleteCustomVariable = function(cT, cU) {
                if (this.getCustomVariable(cT, cU)) {
                    this.setCustomVariable(cT, "", "", cU)
                }
            };
            this.deleteCustomVariables = function(cT) {
                if (cT === "page" || cT === 3) {
                    bE = {}
                } else {
                    if (cT === "event") {
                        b4 = {}
                    } else {
                        if (cT === "visit" || cT === 2) {
                            aG = {}
                        }
                    }
                }
            };
            this.storeCustomVariablesInCookie = function() {
                bz = true
            };
            this.setLinkTrackingTimer = function(cT) {
                bs = cT
            };
            this.getLinkTrackingTimer = function() {
                return bs
            };
            this.setDownloadExtensions = function(cT) {
                if (u(cT)) {
                    cT = cT.split("|")
                }
                cI = cT
            };
            this.addDownloadExtensions = function(cU) {
                var cT;
                if (u(cU)) {
                    cU = cU.split("|")
                }
                for (cT = 0; cT < cU.length; cT++) {
                    cI.push(cU[cT])
                }
            };
            this.removeDownloadExtensions = function(cV) {
                var cU, cT = [];
                if (u(cV)) {
                    cV = cV.split("|")
                }
                for (cU = 0; cU < cI.length; cU++) {
                    if (J(cV, cI[cU]) === -1) {
                        cT.push(cI[cU])
                    }
                }
                cI = cT
            };
            this.setDomains = function(cT) {
                ao = u(cT) ? [cT] : cT;
                var cX = false,
                    cV = 0,
                    cU;
                for (cV; cV < ao.length; cV++) {
                    cU = String(ao[cV]);
                    if (cn(cy, I(cU))) {
                        cX = true;
                        break
                    }
                    var cW = b3(cU);
                    if (cW && cW !== "/" && cW !== "/*") {
                        cX = true;
                        break
                    }
                }
                if (!cX) {
                    ao.push(cy)
                }
            };
            this.enableCrossDomainLinking = function() {
                cr = true
            };
            this.disableCrossDomainLinking = function() {
                cr = false
            };
            this.isCrossDomainLinkingEnabled = function() {
                return cr
            };
            this.setIgnoreClasses = function(cT) {
                bk = u(cT) ? [cT] : cT
            };
            this.setRequestMethod = function(cT) {
                cL = cT || b0
            };
            this.setRequestContentType = function(cT) {
                cf = cT || az
            };
            this.setReferrerUrl = function(cT) {
                a9 = cT
            };
            this.setCustomUrl = function(cT) {
                aT = bD(bw, cT)
            };
            this.getCurrentUrl = function() {
                return aT || bw
            };
            this.setDocumentTitle = function(cT) {
                a5 = cT
            };
            this.setAPIUrl = function(cT) {
                bq = cT
            };
            this.setDownloadClasses = function(cT) {
                bu = u(cT) ? [cT] : cT
            };
            this.setLinkClasses = function(cT) {
                aW = u(cT) ? [cT] : cT
            };
            this.setCampaignNameKey = function(cT) {
                b9 = u(cT) ? [cT] : cT
            };
            this.setCampaignKeywordKey = function(cT) {
                bp = u(cT) ? [cT] : cT
            };
            this.discardHashTag = function(cT) {
                by = cT
            };
            this.setCookieNamePrefix = function(cT) {
                a6 = cT;
                aG = bF()
            };
            this.setCookieDomain = function(cT) {
                var cU = I(cT);
                if (bh(cU)) {
                    cA = cU;
                    a4()
                }
            };
            this.getCookieDomain = function() {
                return cA
            };
            this.hasCookies = function() {
                return "1" === bN()
            };
            this.setSessionCookie = function(cV, cU, cT) {
                if (!cV) {
                    throw new Error("Missing cookie name")
                }
                if (!G(cT)) {
                    cT = b7
                }
                bf.push(cV);
                cO(aJ(cV), cU, cT, bb, cA)
            };
            this.getCookie = function(cU) {
                var cT = au(aJ(cU));
                if (cT === 0) {
                    return null
                }
                return cT
            };
            this.setCookiePath = function(cT) {
                bb = cT;
                a4()
            };
            this.getCookiePath = function(cT) {
                return bb
            };
            this.setVisitorCookieTimeout = function(cT) {
                cp = cT * 1000
            };
            this.setSessionCookieTimeout = function(cT) {
                b7 = cT * 1000
            };
            this.getSessionCookieTimeout = function() {
                return b7
            };
            this.setReferralCookieTimeout = function(cT) {
                cH = cT * 1000
            };
            this.setConversionAttributionFirstReferrer = function(cT) {
                bg = cT
            };
            this.disableCookies = function() {
                a7 = true;
                cJ.cookie = "0";
                if (bO) {
                    aw()
                }
            };
            this.deleteCookies = function() {
                aw()
            };
            this.setDoNotTrack = function(cU) {
                var cT = g.doNotTrack || g.msDoNotTrack;
                cu = cU && (cT === "yes" || cT === "1");
                if (cu) {
                    this.disableCookies()
                }
            };
            this.addListener = function(cU, cT) {
                aj(cU, cT)
            };
            this.enableLinkTracking = function(cU) {
                cK = true;
                var cT = this;
                bZ(function() {
                    o(function() {
                        bm(cU, cT)
                    })
                })
            };
            this.enableJSErrorTracking = function() {
                if (cw) {
                    return
                }
                cw = true;
                var cT = Q.onerror;
                Q.onerror = function(cY, cW, cV, cX, cU) {
                    bZ(function() {
                        var cZ = "JavaScript Errors";
                        var c0 = cW + ":" + cV;
                        if (cX) {
                            c0 += ":" + cX
                        }
                        al(cZ, c0, cY)
                    });
                    if (cT) {
                        return cT(cY, cW, cV, cX, cU)
                    }
                    return false
                }
            };
            this.disablePerformanceTracking = function() {
                aR = false
            };
            this.setGenerationTimeMs = function(cT) {
                b5 = parseInt(cT, 10)
            };
            this.enableHeartBeatTimer = function(cT) {
                cT = Math.max(cT, 1);
                aU = (cT || 15) * 1000;
                if (cB !== null) {
                    cQ()
                }
            };
            this.disableHeartBeatTimer = function() {
                bt();
                if (aU || aE) {
                    if (Q.removeEventListener) {
                        Q.removeEventListener("focus", aY, true);
                        Q.removeEventListener("blur", ap, true)
                    } else {
                        if (Q.detachEvent) {
                            Q.detachEvent("onfocus", aY);
                            Q.detachEvent("onblur", ap)
                        }
                    }
                }
                aU = null;
                aE = false
            };
            this.killFrame = function() {
                if (Q.location !== Q.top.location) {
                    Q.top.location = Q.location
                }
            };
            this.redirectFile = function(cT) {
                if (Q.location.protocol === "file:") {
                    Q.location = cT
                }
            };
            this.setCountPreRendered = function(cT) {
                a1 = cT
            };
            this.trackGoal = function(cT, cV, cU) {
                bZ(function() {
                    cx(cT, cV, cU)
                })
            };
            this.trackLink = function(cU, cT, cW, cV) {
                bZ(function() {
                    cE(cU, cT, cW, cV)
                })
            };
            this.getNumTrackedPageViews = function() {
                return ca
            };
            this.trackPageView = function(cT, cV, cU) {
                bS = [];
                if (K(bO)) {
                    bZ(function() {
                        U(av, bq, bO)
                    })
                } else {
                    bZ(function() {
                        ca++;
                        bI(cT, cV, cU)
                    })
                }
            };
            this.trackAllContentImpressions = function() {
                if (K(bO)) {
                    return
                }
                bZ(function() {
                    o(function() {
                        var cT = t.findContentNodes();
                        var cU = ch(cT);
                        cP(cU, bs)
                    })
                })
            };
            this.trackVisibleContentImpressions = function(cT, cU) {
                if (K(bO)) {
                    return
                }
                if (!G(cT)) {
                    cT = true
                }
                if (!G(cU)) {
                    cU = 750
                }
                aI(cT, cU, this);
                bZ(function() {
                    l(function() {
                        var cV = t.findContentNodes();
                        var cW = aX(cV);
                        cP(cW, bs)
                    })
                })
            };
            this.trackContentImpression = function(cV, cT, cU) {
                if (K(bO)) {
                    return
                }
                if (!cV) {
                    return
                }
                cT = cT || "Unknown";
                bZ(function() {
                    var cW = ax(cV, cT, cU);
                    bo(cW, bs)
                })
            };
            this.trackContentImpressionsWithinNode = function(cT) {
                if (K(bO) || !cT) {
                    return
                }
                bZ(function() {
                    if (bX) {
                        l(function() {
                            var cU = t.findContentNodesWithinNode(cT);
                            var cV = aX(cU);
                            cP(cV, bs)
                        })
                    } else {
                        o(function() {
                            var cU = t.findContentNodesWithinNode(cT);
                            var cV = ch(cU);
                            cP(cV, bs)
                        })
                    }
                })
            };
            this.trackContentInteraction = function(cV, cW, cT, cU) {
                if (K(bO)) {
                    return
                }
                if (!cV || !cW) {
                    return
                }
                cT = cT || "Unknown";
                bZ(function() {
                    var cX = aF(cV, cW, cT, cU);
                    bo(cX, bs)
                })
            };
            this.trackContentInteractionNode = function(cU, cT) {
                if (K(bO) || !cU) {
                    return
                }
                bZ(function() {
                    var cV = cN(cU, cT);
                    bo(cV, bs)
                })
            };
            this.logAllContentBlocksOnPage = function() {
                var cV = t.findContentNodes();
                var cT = t.collectContent(cV);
                var cU = typeof console;
                if (cU !== "undefined" && console && console.log) {
                    console.log(cT)
                }
            };
            this.trackEvent = function(cU, cW, cT, cV, cY, cX) {
                bZ(function() {
                    al(cU, cW, cT, cV, cY, cX)
                })
            };
            this.trackSiteSearch = function(cT, cV, cU, cW) {
                bZ(function() {
                    bQ(cT, cV, cU, cW)
                })
            };
            this.setEcommerceView = function(cW, cT, cV, cU) {
                if (!G(cV) || !cV.length) {
                    cV = ""
                } else {
                    if (cV instanceof Array) {
                        cV = JSON_PIWIK.stringify(cV)
                    }
                }
                bE[5] = ["_pkc", cV];
                if (G(cU) && String(cU).length) {
                    bE[2] = ["_pkp", cU]
                }
                if ((!G(cW) || !cW.length) && (!G(cT) || !cT.length)) {
                    return
                }
                if (G(cW) && cW.length) {
                    bE[3] = ["_pks", cW]
                }
                if (!G(cT) || !cT.length) {
                    cT = ""
                }
                bE[4] = ["_pkn", cT]
            };
            this.addEcommerceItem = function(cX, cT, cV, cU, cW) {
                if (cX.length) {
                    cD[cX] = [cX, cT, cV, cU, cW]
                }
            };
            this.trackEcommerceOrder = function(cT, cX, cW, cV, cU, cY) {
                bH(cT, cX, cW, cV, cU, cY)
            };
            this.trackEcommerceCartUpdate = function(cT) {
                bd(cT)
            };
            this.trackRequest = function(cU, cW, cV, cT) {
                bZ(function() {
                    var cX = cb(cU, cW, cT);
                    bo(cX, bs, cV)
                })
            };
            d.trigger("TrackerSetup", [this])
        }

        function E() {
            return {
                push: Z
            }
        }

        function b(am, al) {
            var an = {};
            var aj, ak;
            for (aj = 0; aj < al.length; aj++) {
                var ah = al[aj];
                an[ah] = 1;
                for (ak = 0; ak < am.length; ak++) {
                    if (am[ak] && am[ak][0]) {
                        var ai = am[ak][0];
                        if (ah === ai) {
                            Z(am[ak]);
                            delete am[ak];
                            if (an[ai] > 1) {
                                ad("The method " + ai + ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: http://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers')
                            }
                            an[ai]++
                        }
                    }
                }
            }
            return am
        }
        var z = ["addTracker", "disableCookies", "setTrackerUrl", "setAPIUrl", "enableCrossDomainLinking", "setCookiePath", "setCookieDomain", "setDomains", "setUserId", "setSiteId", "enableLinkTracking"];

        function X(ah, aj) {
            var ai = new N(ah, aj);
            F.push(ai);
            _paq = b(_paq, z);
            for (B = 0; B < _paq.length; B++) {
                if (_paq[B]) {
                    Z(_paq[B])
                }
            }
            _paq = new E();
            return ai
        }
        ag(Q, "beforeunload", ab, false);
        Date.prototype.getTimeAlias = Date.prototype.getTime;
        d = {
            initialized: false,
            JSON: JSON_PIWIK,
            DOM: {
                addEventListener: function(ak, aj, ai, ah) {
                    var al = typeof ah;
                    if (al === "undefined") {
                        ah = false
                    }
                    ag(ak, aj, ai, ah)
                },
                onLoad: l,
                onReady: o,
                isNodeVisible: i,
                isOrWasNodeVisible: t.isNodeVisible
            },
            on: function(ai, ah) {
                if (!v[ai]) {
                    v[ai] = []
                }
                v[ai].push(ah)
            },
            off: function(aj, ai) {
                if (!v[aj]) {
                    return
                }
                var ah = 0;
                for (ah; ah < v[aj].length; ah++) {
                    if (v[aj][ah] === ai) {
                        v[aj].splice(ah, 1)
                    }
                }
            },
            trigger: function(aj, ak, ai) {
                if (!v[aj]) {
                    return
                }
                var ah = 0;
                for (ah; ah < v[aj].length; ah++) {
                    v[aj][ah].apply(ai || Q, ak)
                }
            },
            addPlugin: function(ah, ai) {
                a[ah] = ai
            },
            getTracker: function(ah, ai) {
                if (!G(ai)) {
                    ai = this.getAsyncTracker().getSiteId()
                }
                if (!G(ah)) {
                    ah = this.getAsyncTracker().getTrackerUrl()
                }
                return new N(ah, ai)
            },
            getAsyncTrackers: function() {
                return F
            },
            addTracker: function(ah, ai) {
                if (!F.length) {
                    X(ah, ai)
                } else {
                    F[0].addTracker(ah, ai)
                }
            },
            getAsyncTracker: function(ai, al) {
                var ak;
                if (F && F.length && F[0]) {
                    ak = F[0]
                } else {
                    return X(ai, al)
                }
                if (!al && !ai) {
                    return ak
                }
                if ((!G(al) || null === al) && ak) {
                    al = ak.getSiteId()
                }
                if ((!G(ai) || null === ai) && ak) {
                    ai = ak.getTrackerUrl()
                }
                var aj, ah = 0;
                for (ah; ah < F.length; ah++) {
                    aj = F[ah];
                    if (aj && String(aj.getSiteId()) === String(al) && aj.getTrackerUrl() === ai) {
                        return aj
                    }
                }
            },
            retryMissedPluginCalls: function() {
                var ai = aa;
                aa = [];
                var ah = 0;
                for (ah; ah < ai.length; ah++) {
                    Z(ai[ah])
                }
            }
        };
        if (typeof define === "function" && define.amd) {
            define("piwik", [], function() {
                return d
            })
        }
        return d
    }());
    /*!!! pluginTrackerHook */
}(function() {
    function b() {
        if ("object" !== typeof _paq) {
            return false
        }
        var c = typeof _paq.length;
        if ("undefined" === c) {
            return false
        }
        return !!_paq.length
    }
    if (window && "object" === typeof window.piwikPluginAsyncInit && window.piwikPluginAsyncInit.length) {
        var a = 0;
        for (a; a < window.piwikPluginAsyncInit.length; a++) {
            if (typeof window.piwikPluginAsyncInit[a] === "function") {
                window.piwikPluginAsyncInit[a]()
            }
        }
    }
    if (window && window.piwikAsyncInit) {
        window.piwikAsyncInit()
    }
    if (!window.Piwik.getAsyncTrackers().length) {
        if (b()) {
            window.Piwik.addTracker()
        } else {
            _paq = {
                push: function(c) {
                    var d = typeof console;
                    if (d !== "undefined" && console && console.error) {
                        console.error("_paq.push() was used but Piwik tracker was not initialized before the piwik.js file was loaded. Make sure to configure the tracker via _paq.push before loading piwik.js. Alternatively, you can create a tracker via Piwik.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.", c)
                    }
                }
            }
        }
    }
    window.Piwik.trigger("PiwikInitialized", []);
    window.Piwik.initialized = true
}());
(function() {
    var a = (typeof AnalyticsTracker);
    if (a === "undefined") {
        AnalyticsTracker = window.Piwik
    }
}());
if (typeof piwik_log !== "function") {
    piwik_log = function(b, f, d, g) {
        function a(h) {
            try {
                if (window["piwik_" + h]) {
                    return window["piwik_" + h]
                }
            } catch (i) {}
            return
        }
        var c, e = window.Piwik.getTracker(d, f);
        e.setDocumentTitle(b);
        e.setCustomData(g);
        c = a("tracker_pause");
        if (c) {
            e.setLinkTrackingTimer(c)
        }
        c = a("download_extensions");
        if (c) {
            e.setDownloadExtensions(c)
        }
        c = a("hosts_alias");
        if (c) {
            e.setDomains(c)
        }
        c = a("ignore_classes");
        if (c) {
            e.setIgnoreClasses(c)
        }
        e.trackPageView();
        if (a("install_tracker")) {
            piwik_track = function(i, k, j, h) {
                e.setSiteId(k);
                e.setTrackerUrl(j);
                e.trackLink(i, h)
            };
            e.enableLinkTracking()
        }
    };
    /*!! @license-end */
};