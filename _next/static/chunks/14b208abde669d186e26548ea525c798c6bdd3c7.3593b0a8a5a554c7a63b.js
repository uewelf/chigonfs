(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [22], {
        GWLh: function(e, n, a) {
            "use strict";
            a.d(n, "b", (function() {
                return K
            })), a.d(n, "a", (function() {
                return N
            }));
            a("mXGw");
            var l, t, r, i = a("aXrf"),
                o = a("UutA"),
                c = a("+n/q"),
                s = a("xiTr"),
                d = a("uMSw"),
                u = a("Q5Gx"),
                g = a("b7Z7"),
                m = a("QrBS"),
                b = a("9E9p"),
                p = a("QCNz"),
                h = a("1p8O"),
                j = a("n0tG"),
                C = a("YTPJ"),
                f = a("7v7j"),
                x = a("67yl"),
                y = a("ocrj"),
                k = a("t3V9"),
                O = a("m5he"),
                v = a("oYCi"),
                S = o.d.div.withConfig({
                    componentId: "sc-1267gkc-0"
                })(["opacity:0.85;:hover{opacity:1;}"]),
                w = Object(o.d)(x.a).withConfig({
                    componentId: "sc-1267gkc-1"
                })(["background-color:", ";border-radius:", ";color:", ";overflow:hidden;opacity:0.9;padding:4px;&:hover{box-shadow:", ";opacity:1;}"], (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.colors.text.body
                }), (function(e) {
                    return e.theme.shadows.default
                })),
                F = function(e) {
                    var n = e.dataKey,
                        t = Object(i.useFragment)(void 0 !== l ? l : l = a("hc1Z"), n);
                    return Object(v.jsx)(m.a, {
                        position: "absolute",
                        right: "12px",
                        top: "12px",
                        children: Object(v.jsx)(y.a, {
                            content: function(e) {
                                var n = e.List,
                                    a = e.Item;
                                return Object(v.jsxs)(n, {
                                    children: [Object(v.jsx)(S, {
                                        children: Object(v.jsxs)(a, {
                                            href: Object(C.c)(t),
                                            children: [Object(v.jsx)(a.Avatar, {
                                                icon: "edit"
                                            }), Object(v.jsx)(a.Content, {
                                                children: Object(v.jsx)(a.Title, {
                                                    children: "Edit"
                                                })
                                            })]
                                        })
                                    }), Object(v.jsx)(S, {
                                        children: Object(v.jsxs)(a, {
                                            href: Object(C.d)(t),
                                            children: [Object(v.jsx)(a.Avatar, {
                                                icon: "view_list"
                                            }), Object(v.jsx)(a.Content, {
                                                children: Object(v.jsx)(a.Title, {
                                                    children: "Creator Earnings"
                                                })
                                            })]
                                        })
                                    })]
                                })
                            },
                            placement: "bottom-end",
                            children: Object(v.jsx)(w, {
                                children: Object(v.jsx)(k.a, {
                                    onClick: function(e) {
                                        e.stopPropagation(), e.preventDefault()
                                    },
                                    children: Object(v.jsx)(O.a, {
                                        "aria-label": "More",
                                        value: "more_vert"
                                    })
                                })
                            })
                        })
                    })
                },
                T = a("NXiZ"),
                K = function(e, n) {
                    var l = Object(i.readInlineData)(void 0 !== t ? t : t = a("qMh9"), e),
                        r = l.logo,
                        o = l.banner;
                    return !!r && (!n || !!o)
                },
                N = Object.assign((function(e) {
                    var n = e.containerClassName,
                        l = e.dataKey,
                        t = e.requireBannerImage,
                        o = e.showContextMenu,
                        s = e.showTotalSupply,
                        u = Object(i.useFragment)(void 0 !== r ? r : r = a("bmVz"), l),
                        b = u.owner,
                        h = u.banner,
                        x = u.logo,
                        y = u.slug,
                        k = u.name,
                        O = u.description,
                        S = u.isVerified,
                        w = u.stats.totalSupply;
                    return K(u, t) ? Object(v.jsxs)(_, {
                        alt: "",
                        containerClassName: n,
                        contentClassName: "CollectionCard--content",
                        href: Object(C.f)(u),
                        imageHeight: 200,
                        imageUrl: h,
                        children: [Object(v.jsx)(d.b, {
                            alt: "",
                            className: "CollectionCard--round-image",
                            size: 50,
                            sizing: "cover",
                            url: x,
                            variant: "round"
                        }), o && Object(v.jsx)("div", {
                            className: "CollectionCard--context-menu",
                            children: Object(v.jsx)(F, {
                                dataKey: u
                            })
                        }), Object(v.jsxs)(m.a, {
                            alignItems: "center",
                            marginTop: "8px",
                            children: [Object(v.jsx)(j.b, {
                                as: "div",
                                className: "CollectionCard--name",
                                variant: "h4",
                                children: k
                            }), S && Object(v.jsx)(T.a, {
                                size: "small",
                                verificationStatus: "verified"
                            })]
                        }), b ? Object(v.jsxs)(m.a, {
                            alignItems: "center",
                            fontSize: "14px",
                            fontWeight: "500",
                            children: [Object(v.jsx)(j.b, {
                                margin: "0 4px 0 0",
                                variant: "small",
                                children: "by"
                            }), Object(v.jsx)(c.a, {
                                dataKey: b,
                                variant: "no-image"
                            })]
                        }) : Object(v.jsx)(g.a, {
                            height: "24px"
                        }), Object(v.jsx)(j.b, {
                            as: "span",
                            className: "CollectionCard--description",
                            variant: "body",
                            children: Object(v.jsx)(p.a, {
                                children: O ? "".concat(O.substring(0, 100)).concat(O.length > 100 ? "..." : "") : "Explore the ".concat(k, " collection")
                            })
                        }), s && Object(v.jsx)(j.b, {
                            as: "span",
                            marginTop: "20px",
                            variant: "small",
                            children: "".concat(w, " ").concat(Object(f.i)("item", w))
                        })]
                    }, y) : null
                }), {
                    Skeleton: function(e) {
                        var n = e.className;
                        return Object(v.jsx)(L, {
                            className: n,
                            children: Object(v.jsxs)(h.a, {
                                children: [Object(v.jsx)(h.a.Row, {
                                    className: "CollectionCard--skeleton-image",
                                    children: Object(v.jsx)(h.a.Block, {
                                        direction: "rtl",
                                        height: "200px"
                                    })
                                }), Object(v.jsxs)(h.a.Row, {
                                    className: "CollectionCard--skeleton-info",
                                    children: [Object(v.jsx)(h.a.Circle, {
                                        className: "CollectionCard--skeleton-circle",
                                        height: "50px",
                                        variant: "full",
                                        width: "50px"
                                    }), Object(v.jsxs)(b.a, {
                                        className: "CollectionCard--skeleton-item",
                                        height: "190px",
                                        children: [Object(v.jsx)(h.a.Block, {
                                            className: "CollectionCard--skeleton-title"
                                        }), Object(v.jsx)(h.a.Block, {
                                            className: "CollectionCard--skeleton-subtitle"
                                        }), Object(v.jsx)(h.a.Block, {
                                            className: "CollectionCard--skeleton-text"
                                        }), Object(v.jsx)(h.a.Block, {
                                            className: "CollectionCard--skeleton-text"
                                        }), Object(v.jsx)(h.a.Block, {
                                            className: "CollectionCard--skeleton-text"
                                        })]
                                    })]
                                })]
                            })
                        })
                    }
                }),
                _ = Object(o.d)(s.a).withConfig({
                    componentId: "sc-1b2ne4j-0"
                })(["position:relative;padding-bottom:22px;.CollectionCard--content{align-items:center;margin-top:-36px;}.CollectionCard--context-menu{display:block;", "}.CollectionCard--round-image{background-color:", ";border:3px solid ", ";box-shadow:rgb(14 14 14 / 60%) 0px 0px 2px 0px;}.CollectionCard--name{color:", ";font-weight:600;font-size:16px;text-transform:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;max-width:200px;margin-top:2px;}.CollectionCard--description{max-width:80%;margin-top:20px;height:66px;overflow:hidden;text-align:center;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;p,ul,ol,dl,dd,blockquote,h1,h2,h3,h4,h5,h6{margin:0;}}&:hover{.CollectionCard--context-menu{display:block;}}"], Object(u.e)({
                    tabletS: Object(o.c)(["display:none;"])
                }), (function(e) {
                    return e.theme.colors.surface
                }), (function(e) {
                    return e.theme.colors.surface
                }), (function(e) {
                    return e.theme.colors.text.heading
                })),
                L = Object(o.d)(g.a).withConfig({
                    componentId: "sc-1b2ne4j-1"
                })(["width:100%;.CollectionCard--skeleton-image{margin-bottom:-10px;border-top-left-radius:", ";border-top-right-radius:", ";width:100%;}.CollectionCard--skeleton-info{flex-direction:column;align-items:center;margin-bottom:40px;", " .CollectionCard--skeleton-circle{margin-top:-25px;z-index:2;}.CollectionCard--skeleton-item{margin-top:-25px;flex-direction:column;align-items:center;border-radius:", ";.CollectionCard--skeleton-title{height:24px;width:75px;margin-top:20px;border-radius:12px;}.CollectionCard--skeleton-subtitle{height:16px;width:150px;margin-top:8px;margin-bottom:10px;border-radius:8px;}.CollectionCard--skeleton-text{height:12px;width:60%;margin-top:10px;}}}"], (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), Object(u.e)({
                    tabletS: Object(o.c)(["margin-bottom:0;"])
                }), (function(e) {
                    return e.theme.borderRadius.default
                }))
        },
        O4Bb: function(e, n, a) {
            "use strict";
            a.d(n, "l", (function() {
                return r
            })), a.d(n, "o", (function() {
                return i
            })), a.d(n, "n", (function() {
                return o
            })), a.d(n, "m", (function() {
                return c
            })), a.d(n, "j", (function() {
                return s
            })), a.d(n, "i", (function() {
                return d
            })), a.d(n, "h", (function() {
                return u
            })), a.d(n, "g", (function() {
                return g
            })), a.d(n, "c", (function() {
                return m
            })), a.d(n, "d", (function() {
                return b
            })), a.d(n, "e", (function() {
                return p
            })), a.d(n, "f", (function() {
                return h
            })), a.d(n, "k", (function() {
                return j
            })), a.d(n, "a", (function() {
                return C
            })), a.d(n, "b", (function() {
                return f
            })), a.d(n, "p", (function() {
                return x
            }));
            var l = a("DqVd"),
                t = a("DWpj"),
                r = Object(l.a)("home page"),
                i = Object(l.a)("rankings page"),
                o = Object(l.a)("ventures page"),
                c = Object(l.a)("grants page"),
                s = Object(l.a)("collection page"),
                d = Object(l.a)("collection manager page"),
                u = Object(l.a)("collection manager edit collection page"),
                g = Object(l.a)("collection manager create collection page"),
                m = Object(t.b)("asset sell page"),
                b = Object(t.c)("asset purchase successful page"),
                p = Object(l.a)("bundle sell page"),
                h = Object(l.a)("bundle transfer page"),
                j = Object(l.a)("error page"),
                C = Object(l.a)("account banned page"),
                f = Object(l.a)("account page"),
                x = Object(l.a)("watchlist page")
        },
        bmVz: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = function() {
                var e = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "logo",
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "banner",
                        storageKey: null
                    };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "CollectionCard_data",
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "description",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "shortDescription",
                        storageKey: null
                    }, e, n, a, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isVerified",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "AccountType",
                        kind: "LinkedField",
                        name: "owner",
                        plural: !1,
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "AccountLink_data"
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "CollectionStatsType",
                        kind: "LinkedField",
                        name: "stats",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "totalSupply",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "ChainType",
                        kind: "LinkedField",
                        name: "defaultChain",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "identifier",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "CollectionCardContextMenu_data"
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "CollectionCard_getShowCollectionCardData",
                        selections: [n, a]
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "collection_url",
                        selections: [e]
                    }],
                    type: "CollectionType",
                    abstractKey: null
                }
            }();
            l.hash = "44d47a9122b8edd3b03310e2f376152c", n.default = l
        },
        h7iG: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return v
            }));
            var l, t = a("mXGw"),
                r = a("UutA"),
                i = a("g/rM"),
                o = a("ocrj"),
                c = a("QrBS"),
                s = a("n0tG"),
                d = a("XHwO"),
                u = a("7Yyi"),
                g = a("iSwZ"),
                m = a("Q5Gx"),
                b = a("zMYZ"),
                p = a("LsOE"),
                h = a("a7GP"),
                j = a("GWLh"),
                C = a("bK7F"),
                f = a("oYCi"),
                x = Object(h.b)((function(e) {
                    var n = e.data,
                        a = Object(b.a)().showArrows;
                    if (!n || !n.trendingCollections) return Object(f.jsx)(y, {
                        children: new Array(a ? 12 : 6).fill(0).map((function() {
                            return Object(f.jsx)(j.a.Skeleton, {
                                className: "CollectionsScroller--card-container"
                            }, Math.random())
                        }))
                    });
                    var l = n.trendingCollections,
                        t = a ? Object(p.d)(l) : Object(p.d)(l).slice(0, 6);
                    return Object(f.jsx)(y, {
                        children: t.map((function(e, n) {
                            return Object(f.jsx)(j.a, {
                                containerClassName: "CollectionsScroller--card-container",
                                dataKey: e,
                                requireBannerImage: !0
                            }, n)
                        }))
                    })
                }), void 0 !== l ? l : l = a("ukhD")),
                y = Object(r.d)(C.b).withConfig({
                    componentId: "sc-sodf7b-0"
                })([".Carousel--left-arrow{left:-17px;top:185px;}.Carousel--right-arrow{right:-17px;top:185px;}.CollectionsScroller--card-container{padding:10px;", "}"], Object(m.e)({
                    tabletS: Object(r.c)(["margin-bottom:10px;"])
                })),
                k = a("m5he"),
                O = a("uMSw"),
                v = function() {
                    var e = Object(t.useState)(),
                        n = e[0],
                        a = e[1],
                        l = Object(t.useState)(),
                        r = l[0],
                        m = l[1],
                        b = Object(t.useState)("all categories"),
                        p = b[0],
                        h = b[1],
                        j = Object(i.a)().theme;
                    return Object(f.jsxs)(S, {
                        children: [Object(f.jsx)(c.a, {
                            justifyContent: "center",
                            children: Object(f.jsxs)(s.b, {
                                as: "h2",
                                margin: "56px 8px",
                                textAlign: "center",
                                variant: "h3",
                                children: ["Trending in", " ", Object(f.jsx)(o.a, {
                                    content: function(e) {
                                        var l = e.close,
                                            t = e.List,
                                            r = e.Item;
                                        return Object(f.jsx)(t, {
                                            children: g.a.map((function(e) {
                                                return "New" !== e.label ? Object(f.jsx)(r, {
                                                    onClick: function() {
                                                        a(e.trendingData.category), m(e.trendingData.chain), h("/assets" === e.url ? "all categories" : e.label), Object(u.c)({
                                                            category: n,
                                                            label: p
                                                        }), l()
                                                    },
                                                    children: Object(f.jsx)(r.Content, {
                                                        children: Object(f.jsxs)(c.a, {
                                                            alignItems: "center",
                                                            children: [Object(f.jsx)(O.b, {
                                                                alt: "",
                                                                size: 24,
                                                                url: "".concat(e.image, "-").concat(j, ".svg")
                                                            }), Object(f.jsx)(r.Title, {
                                                                marginLeft: "8px",
                                                                children: "/assets" === e.url ? "All Categories" : e.label
                                                            })]
                                                        })
                                                    })
                                                }, e.url) : null
                                            }))
                                        })
                                    },
                                    children: Object(f.jsxs)(c.a, {
                                        className: "TrendingCollections--dropdown",
                                        children: [Object(f.jsx)(s.b, {
                                            className: "TrendingCollections--category",
                                            margin: "0",
                                            textAlign: "center",
                                            variant: "h3",
                                            children: p
                                        }), Object(f.jsx)(k.a, {
                                            className: "TrendingCollections--icon",
                                            color: "blue",
                                            value: "expand_more"
                                        })]
                                    })
                                })]
                            })
                        }), Object(f.jsx)(d.a.Provider, {
                            value: {
                                eventSource: "TrendingCollections"
                            },
                            children: Object(f.jsx)(x, {
                                variables: {
                                    categories: n ? [n] : void 0,
                                    chains: r ? [r] : void 0
                                }
                            })
                        })]
                    })
                },
                S = Object(r.d)(c.a).attrs({
                    as: "section"
                }).withConfig({
                    componentId: "sc-qjz2ad-0"
                })(["align-items:center;flex-direction:column;margin-top:60px;margin-bottom:100px;.TrendingCollections--dropdown{display:inline-flex;align-items:center;cursor:pointer;justify-content:center;.TrendingCollections--category{color:", ";&:hover{color:", ";}}}"], (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.colors.darkSeaBlue
                }))
        },
        hc1Z: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CollectionCardContextMenu_data",
                selections: [{
                    kind: "InlineDataFragmentSpread",
                    name: "collection_url",
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    }]
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "97b1d12017f765d3122871168f060d38"
            };
            n.default = l
        },
        qMh9: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = {
                kind: "InlineDataFragment",
                name: "CollectionCard_getShowCollectionCardData",
                hash: "3e8b0694a4275c064905e8ec1da3b11d"
            };
            n.default = l
        },
        ukhD: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "categories"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "chains"
                    }],
                    n = [{
                        kind: "Variable",
                        name: "categories",
                        variableName: "categories"
                    }, {
                        kind: "Variable",
                        name: "chains",
                        variableName: "chains"
                    }, {
                        kind: "Literal",
                        name: "first",
                        value: 12
                    }],
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "CollectionsScrollerQuery",
                        selections: [{
                            alias: null,
                            args: n,
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "trendingCollections",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "CollectionCard_data"
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "CollectionsScrollerQuery",
                        selections: [{
                            alias: null,
                            args: n,
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "trendingCollections",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "slug",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "logo",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "banner",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "description",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "name",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "shortDescription",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isVerified",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "AccountType",
                                        kind: "LinkedField",
                                        name: "owner",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "address",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "config",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "isCompromised",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "UserType",
                                            kind: "LinkedField",
                                            name: "user",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "publicUsername",
                                                storageKey: null
                                            }, a],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "displayName",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "imageUrl",
                                            storageKey: null
                                        }, a],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionStatsType",
                                        kind: "LinkedField",
                                        name: "stats",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSupply",
                                            storageKey: null
                                        }, a],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "ChainType",
                                        kind: "LinkedField",
                                        name: "defaultChain",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "identifier",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, a],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "2f29191725803ddd756281b1badb3cba",
                        id: null,
                        metadata: {},
                        name: "CollectionsScrollerQuery",
                        operationKind: "query",
                        text: "query CollectionsScrollerQuery(\n  $categories: [CategorySlug!]\n  $chains: [ChainScalar!]\n) {\n  trendingCollections(first: 12, categories: $categories, chains: $chains) {\n    edges {\n      node {\n        ...CollectionCard_data\n        id\n      }\n    }\n  }\n}\n\nfragment AccountLink_data on AccountType {\n  address\n  config\n  isCompromised\n  user {\n    publicUsername\n    id\n  }\n  displayName\n  ...ProfileImage_data\n  ...wallet_accountKey\n  ...accounts_url\n}\n\nfragment CollectionCardContextMenu_data on CollectionType {\n  ...collection_url\n}\n\nfragment CollectionCard_data on CollectionType {\n  ...CollectionCardContextMenu_data\n  ...CollectionCard_getShowCollectionCardData\n  ...collection_url\n  description\n  name\n  shortDescription\n  slug\n  logo\n  banner\n  isVerified\n  owner {\n    ...AccountLink_data\n    id\n  }\n  stats {\n    totalSupply\n    id\n  }\n  defaultChain {\n    identifier\n  }\n}\n\nfragment CollectionCard_getShowCollectionCardData on CollectionType {\n  logo\n  banner\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n  user {\n    publicUsername\n    id\n  }\n  displayName\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n}\n"
                    }
                }
            }();
            l.hash = "ac25a1b07ea49510186fc0f3d19d1797", n.default = l
        },
        xiTr: function(e, n, a) {
            "use strict";
            a("mXGw");
            var l = a("UutA"),
                t = a("b7Z7"),
                r = a("QrBS"),
                i = a("u6YR"),
                o = a("uMSw"),
                c = a("qymy"),
                s = a("oYCi");
            n.a = function(e) {
                var n = e.imageUrl,
                    a = e.href,
                    l = e.imageWidth,
                    t = e.imageHeight,
                    u = e.containerClassName,
                    g = e.contentClassName,
                    m = e.className,
                    b = e.children,
                    p = e.eventSource,
                    h = e.alt;
                return Object(s.jsx)(d, {
                    className: u,
                    children: Object(s.jsxs)(c.a, {
                        className: Object(i.a)("CarouselCard", {
                            main: !0
                        }, m),
                        eventSource: p,
                        href: a,
                        children: [Object(s.jsx)(o.b, {
                            alt: h,
                            className: "CarouselCard--image",
                            height: t,
                            sizing: "cover",
                            url: n,
                            width: l
                        }), Object(s.jsx)(r.a, {
                            className: Object(i.a)("CarouselCard", {
                                content: !0
                            }, g),
                            children: b
                        })]
                    })
                })
            };
            var d = Object(l.d)(t.a).withConfig({
                componentId: "sc-152cap8-0"
            })(["display:inline-block;width:100%;.CarouselCard--main{display:inline-block;border:1px solid ", ";background-color:", ";border-radius:", ";cursor:pointer;width:100%;&:hover{box-shadow:", ";transition:0.1s;}.CarouselCard--image{border-radius:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:1px solid ", ";background-color:", ";}.CarouselCard--content{flex-direction:column;padding:10px;}}"], (function(e) {
                return e.theme.colors.border
            }), (function(e) {
                return e.theme.colors.card
            }), (function(e) {
                return e.theme.borderRadius.default
            }), (function(e) {
                return e.theme.shadows.default
            }), (function(e) {
                return e.theme.colors.border
            }), (function(e) {
                return e.theme.colors.border
            }))
        }
    }
]);