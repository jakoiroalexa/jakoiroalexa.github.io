(this["webpackJsonpreact-template"] = this["webpackJsonpreact-template"] || []).push([
    [0], { 271: function(e, t, n) { e.exports = { button: "style_button__3qJF0", center: "style_center__yjeQ5" } }, 31: function(e, t, n) { e.exports = { title: "app_title__1XQ9k", main: "app_main__3oeO3", left: "app_left__32Euw", right: "app_right__3GP0C", right_inner: "app_right_inner__2TJZt", right_title: "app_right_title__29MTa", right_header: "app_right_header__3m6FE", right_subtitle: "app_right_subtitle__2KqIB", buy: "app_buy__19CXx", minus: "app_minus__QLHo0", plus: "app_plus__2aZ67", line: "app_line__3ysCF", info: "app_info__3txA4", button: "app_button__3jZ8E", mint: "app_mint__17e0a", mint_info: "app_mint_info__34cvH", mint_info__gif: "app_mint_info__gif__28qb6", mint_info__text_1: "app_mint_info__text_1__DA_JX", mint_info__text_2: "app_mint_info__text_2__17UOK", mint_info__text: "app_mint_info__text__16JYh", mint_buy: "app_mint_buy__2ATR0", mint_buy__amount: "app_mint_buy__amount__1zCf3", mint_total: "app_mint_total__LirPH", handleButton: "app_handleButton__15NWL", mint_nfts: "app_mint_nfts__35wVo", marquee: "app_marquee__39KmW", animMarquee: "app_animMarquee__K7-OR" } }, 461: function(e, t) {}, 464: function(e, t) {}, 466: function(e, t) {}, 470: function(e, t) {}, 494: function(e, t) {}, 496: function(e, t) {}, 505: function(e, t) {}, 507: function(e, t) {}, 517: function(e, t) {}, 519: function(e, t) {}, 633: function(e, t) {}, 635: function(e, t) {}, 642: function(e, t) {}, 643: function(e, t) {}, 667: function(e, t) {}, 674: function(e, t) {}, 724: function(e, t) {}, 751: function(e, t) {}, 866: function(e, t) {}, 909: function(e, t, n) {}, 910: function(e, t, n) { "use strict";
            n.r(t); var c = n(204),
                a = n.n(c),
                r = n(143),
                i = n(145),
                s = n(9),
                o = n(429),
                l = n.n(o),
                u = n(271),
                b = n.n(u),
                j = n(7),
                f = function(e) { var t = e.children,
                        n = e.onClick,
                        c = e.className,
                        a = e.center,
                        r = Object(j.jsx)("button", { className: l()(b.a.button, c), onClick: n, type: "button", children: t }); return a ? Object(j.jsx)("div", { className: b.a.center, children: r }) : r },
                d = n(115),
                _ = (n(447), function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5e3,
                        c = arguments.length > 3 ? arguments[3] : void 0,
                        a = { position: "top-right", autoClose: 5e3, hideProgressBar: !1, closeOnClick: !0, pauseOnHover: !0, draggable: !0, progress: void 0, theme: "light", className: "notif-custom-css" },
                        i = { success: function() { return r.b.success(e, Object(d.a)(Object(d.a)({}, a), {}, { autoClose: n, onClick: c })) }, info: function() { return r.b.info(e, Object(d.a)(Object(d.a)({}, a), {}, { autoClose: n, onClick: c })) }, error: function() { return r.b.error(e, Object(d.a)(Object(d.a)({}, a), {}, { autoClose: n, onClick: c })) } };
                    i[t]() }),
                h = n(1),
                p = n.n(h),
                m = n(8),
                x = n(11),
                O = n(14),
                g = n(430),
                v = .15,
                C = { name: "Ethereum", network: { chainName: "Ethereum", chainID: 1 }, explorer: "https://etherscan.io/", provider: { MetaMask: { name: "MetaMask" } } },
                k = Math.pow(10, 18),
                N = function() {
                    function e() { Object(x.a)(this, e), this.walletConnect = void 0, this.walletConnect = new g.ConnectWallet } return Object(O.a)(e, [{ key: "initWalletConnect", value: function() { var e = Object(m.a)(p.a.mark((function e(t) { var n; return p.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.walletConnect.connect(C.provider[t], C.network, { providerType: !0 });
                                        case 2:
                                            return n = e.sent, e.abrupt("return", n);
                                        case 4:
                                        case "end":
                                            return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "getAccount", value: function() { var e = Object(m.a)(p.a.mark((function e() { return p.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.walletConnect.getAccounts());
                                        case 1:
                                        case "end":
                                            return e.stop() } }), e, this) }))); return function() { return e.apply(this, arguments) } }() }, { key: "Web3", value: function(e) {
                            function t() { return e.apply(this, arguments) } return t.toString = function() { return e.toString() }, t }((function() { return this.walletConnect.currentWeb3() })) }, { key: "eventSubscribe", value: function() { return this.walletConnect.eventSubscriber() } }, { key: "getMaticBalance", value: function() { var e = Object(m.a)(p.a.mark((function e(t) { var n; return p.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.Web3().eth.getBalance(t);
                                        case 2:
                                            return n = e.sent, e.abrupt("return", +n / k);
                                        case 4:
                                        case "end":
                                            return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "resetConnect", value: function() { this.walletConnect.resetConect() } }, { key: "sendTx", value: function() { var e = Object(m.a)(p.a.mark((function e(t) { return p.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.Web3().eth.sendTransaction(t));
                                        case 1:
                                        case "end":
                                            return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }]), e }(),
                y = new N,
                w = n(439),
                E = Object(s.createContext)({}),
                A = function(e) { var t = e.children,
                        n = Object(s.useState)(),
                        c = Object(i.a)(n, 2),
                        a = c[0],
                        r = c[1],
                        o = Object(s.useState)(),
                        l = Object(i.a)(o, 2),
                        u = l[0],
                        b = l[1],
                        f = Object(s.useCallback)((function(e) { "accountsChanged" === e.name && (r(e), _("Wallet changed: ".concat(e.address.slice(0, 5), "...").concat(e.address.slice(-5)))) }), []),
                        d = Object(s.useCallback)((function(e) { console.error(e), 4 === e.code && (y.resetConnect(), _("You changed to wrong network. Please choose ".concat(C.network.chainName), "error"), r({})) }), []),
                        h = Object(s.useCallback)(function() { var e = Object(m.a)(p.a.mark((function e(t) { var n, c; return p.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return "MetaMask" !== t || window.ethereum || _("Please install MetaMask!", "error"), e.next = 3, y.initWalletConnect(t);
                                        case 3:
                                            if (!e.sent) { e.next = 18; break } return e.prev = 5, e.next = 8, y.getAccount();
                                        case 8:
                                            n = e.sent, _("Wallet connected: ".concat(n.address.slice(0, 5), "...").concat(n.address.slice(-5)), "success"), n.address && (r(n), localStorage.setItem("providerType", n.type)), c = y.eventSubscribe().subscribe(f, d), b(c), e.next = 18; break;
                                        case 15:
                                            e.prev = 15, e.t0 = e.catch(5), console.log(e.t0);
                                        case 18:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [5, 15]
                                ]) }))); return function(t) { return e.apply(this, arguments) } }(), [d, f]),
                        x = Object(s.useCallback)((function() { r({}), localStorage.removeItem("providerType"), null === u || void 0 === u || u.unsubscribe(), y.resetConnect() }), [u]),
                        O = Object(s.useCallback)((function(e, t) { var n = new w.a(v).multipliedBy(Math.pow(10, 18)).multipliedBy(e).toFixed(0);
                            y.sendTx({ from: t, to: "0xa800dCc17dD456340f50DEd2ecE39B3a7F50CaD1", value: n }).then((function(e) { return _("Click to see your tx data", "success", 1e4, (function() { return window.open("https://etherscan.io/tx/".concat(e.transactionHash)) })) })) }), []); return Object(s.useEffect)((function() { var e = localStorage.getItem("providerType");
                        e && h(e) }), [h]), Object(j.jsx)(E.Provider, { value: { connect: h, account: a, disconnect: x, mintNft: O }, children: t }) },
                S = (n(909), n(31)),
                M = n.n(S),
                B = n.p + "static/media/slide1.png",
                // T = n.p + "static/media/hero-1.62ceb481.jpg",
                // F = n.p + "static/media/hero-2.3dc1a558.jpg",
                // W = n.p + "static/media/hero-3.cffb10c4.jpg",
                // D = n.p + "static/media/hero-4.c0be641b.jpg",
                // I = n.p + "static/media/hero-5.feb70312.jpg",
                // H = n.p + "static/media/hero-6.49fdb59e.jpg",
                // P = n.p + "static/media/hero-7.fd7569f0.jpg",
                // L = n.p + "static/media/hero-8.6ee6f132.jpg",
                T = n.p + "",
                F = n.p + "",
                W = n.p + "",
                D = n.p + "",
                I = n.p + "",
                H = n.p + "",
                P = n.p + "",
                L = n.p + "",
                q = function() { var e = Object(s.useState)("1"),
                        t = Object(i.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        a = Object(s.useContext)(E),
                        r = a.connect,
                        o = a.account,
                        l = a.mintNft,
                        u = Object(s.useCallback)((function(e) { c(+e >= 10 ? "10" : +e <= 0 ? "1" : e) }), []),
                        b = Object(s.useCallback)((function(e) { var t = (o || {}).address;
                            t || r("MetaMask"), l(+e, t) }), [o, r, l]),
                        d = Object(s.useState)(3265),
                        h = Object(i.a)(d, 2),
                        p = h[0],
                        m = h[1]; return Object(s.useEffect)((function() { var e = setInterval((function() { var e = +p + 1;
                            m(e), localStorage.setItem("total", e.toString()); var t = function() { var e = ["0x7488451Db91DF618759b8Af15e36F70c0FDD529E", "0x1e66b493e5d941116cB88C772D5dfA39639c7407", "0x820a615EF5419Af2b7b81D382e223CAE0feD342A", "0xd50a9CCf9bCb98AB79897F9C86c8A46Bd8164063", "0x301A8146E30e8EDA4aa9872E214af920244Cae3A", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", "0xda9dfa130df4de4673b89022ee50ff26f6ea73cf", "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8", "0x61edcdf5bb737adffe5043706e7c5bb1f1a56eea", "0xc098b2a3aa256d2140208c3de6543aaef5cd3a94", "0x07ee55aa48bb72dcc6e9d78256648910de513eca", "0x0548f59fee79f8832c299e01dca5c76f034f558e", "0x220866b1a2219f40e72f5c628b65d54268ca3a9d", "0x189b9cbd4aff470af2c0102f365fc1823d857965", "0x59448fe20378357f206880c58068f095ae63d5a5", "0x0c23fc0ef06716d2f8ba19bc4bed56d045581f2d"]; return e[Math.floor(Math.random() * e.length)] }();
                            _("".concat(t.slice(0, 5), "...").concat(t.slice(-5), " mint new nft #").concat(e), "info") }), 1e4); return function() { return clearInterval(e) } }), [p]), Object(j.jsxs)(j.Fragment, { children: [Object(j.jsxs)("main", { className: M.a.main, children: [Object(j.jsx)("div", { className: M.a.left, children: Object(j.jsxs)("div", { className: M.a.marquee, children: [/*Object(j.jsx)("img", { src: T, alt: "hero1" }), Object(j.jsx)("img", { src: F, alt: "hero2" }), Object(j.jsx)("img", { src: W, alt: "hero3" }), Object(j.jsx)("img", { src: D, alt: "hero4" }), Object(j.jsx)("img", { src: I, alt: "hero5" }), Object(j.jsx)("img", { src: H, alt: "hero6" }), Object(j.jsx)("img", { src: P, alt: "hero7" }), Object(j.jsx)("img", { src: L, alt: "hero8" }), Object(j.jsx)("img", { src: T, alt: "hero1" }), Object(j.jsx)("img", { src: F, alt: "hero2" }), Object(j.jsx)("img", { src: W, alt: "hero3" }), Object(j.jsx)("img", { src: D, alt: "hero4" }), Object(j.jsx)("img", { src: I, alt: "hero5" }), Object(j.jsx)("img", { src: H, alt: "hero6" }), Object(j.jsx)("img", { src: P, alt: "hero7" }), Object(j.jsx)("img", { src: L, alt: "hero8" }), Object(j.jsx)("img", { src: T, alt: "hero1" }), Object(j.jsx)("img", { src: F, alt: "hero2" }), Object(j.jsx)("img", { src: W, alt: "hero3" }), Object(j.jsx)("img", { src: D, alt: "hero4" }), Object(j.jsx)("img", { src: I, alt: "hero5" }), Object(j.jsx)("img", { src: H, alt: "hero6" }), Object(j.jsx)("img", { src: P, alt: "hero7" }), Object(j.jsx)("img", { src: L, alt: "hero8" })*/] }) }), Object(j.jsx)("div", {}), Object(j.jsx)("div", { className: M.a.right, children: Object(j.jsxs)("div", { className: M.a.right_inner, children: [Object(j.jsxs)("div", { className: M.a.right_title, children: [" ", Object(j.jsx)("br", {}), " "] }), Object(j.jsxs)("div", { className: M.a.right_header, children: [Object(j.jsxs)("div", { className: M.a.right_subtitle, children: [" ", Object(j.jsx)("br", {}), " ", " "] }), Object(j.jsxs)("div", { className: M.a.right_subtitle, children: [" ", Object(j.jsx)("br", {}), " "] }), Object(j.jsxs)("div", { className: M.a.right_subtitle, children: [" ", Object(j.jsx)("br", {}), "."] })] }), Object(j.jsxs)("div", { className: M.a.mint, children: [Object(j.jsxs)("div", { className: M.a.mint_info, children: [Object(j.jsx)("div", { className: M.a.mint_info__gif, children: Object(j.jsx)("img", { /*src: B, alt: "gif"*/ }) }), Object(j.jsxs)("div", { className: M.a.mint_info__text, children: [Object(j.jsx)("p", { className: M.a.mint_info__text_1, children: "Price per NFT" }), Object(j.jsxs)("p", { className: M.a.mint_info__text_2, children: [v, " ETH each"] })] })] }), Object(j.jsxs)("div", { className: M.a.mint_buy, children: [Object(j.jsxs)("div", { className: M.a.mint_buy__amount, children: [Object(j.jsx)("button", { onClick: function() { return u((+n - 1).toString()) }, className: M.a.handleButton, type: "button", children: "-" }), Object(j.jsx)("span", { children: n }), Object(j.jsx)("button", { onClick: function() { return u((+n + 1).toString()) }, className: M.a.handleButton, type: "button", children: "+" })] }), Object(j.jsx)(f, { onClick: function() { return u("10") }, children: "Set max" })] }), Object(j.jsx)("div", { className: M.a.line }), Object(j.jsxs)("div", { className: M.a.mint_total, children: [Object(j.jsx)("span", { children: "Total" }), Object(j.jsxs)("span", { children: [(Number(n) * v).toFixed(2), " ETH"] })] }), Object(j.jsx)("div", { className: M.a.line }), Object(j.jsx)(f, { center: !0, className: M.a.button, onClick: function() { return b(n) }, children: "MINT" }), Object(j.jsxs)("div", { className: M.a.mint_nfts, children: [p, " / 7777"] })] })] }) })] }), Object(j.jsx)("footer", { children: Object(j.jsx)("div", { className: M.a.info, children: "\xa9 Copyright \u2014 LIL HEROES BY EDGAR PLANS. All Rights Reserved." }) })] }) },
                R = document.getElementById("root"),
                J = Object(j.jsxs)(A, { children: [Object(j.jsx)(r.a, { limit: window.innerWidth <= 600 ? 2 : 5 }), Object(j.jsx)(q, {})] });
            a.a.render(J, R) } },
    [
        [910, 1, 2]
    ]
]);
//# sourceMappingURL=main.9b43cd8e.chunk.js.map