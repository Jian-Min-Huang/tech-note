﻿(function (D) {
    var g = { c: function (t) { return D.createElement(t) }, u: function (s) { s = unescape(s); return s + (s.indexOf("?") > 0 ? "&" : "?") + "o=" + Math.random() }, q: function (k) { var b = D.location.search; b = (b = /^\?/.test(b) ? b.substring(1) : b).split("&"); for (var c in b) { var d = b[c]; if ((new RegExp("^" + k + "=", "ig")).test(d)) return d.split("=").slice(1).join("=") } return "" } }; D.onmousedown = function (b) {
        b = b || event; if (D.attachEvent) { if (b.button != 1) return } else if (b.button != 0) return; var c = g.q("clickTAG"); if (c != "") {
            var r = g.q("r"); if (r !=
            "") g.c("img").src = g.u(c) + "&r=" + r; else g.c("img").src = g.u(c)
        }
    }; window.onload = function () { g.c("img").src = g.u(g.q("imprTAG")); var a = D.createElement("script"), m = D.getElementsByTagName("body")[0]; a.async = 1; a.src = "//js1.bloggerads.net/Store/" + g.q("mid") + "/-1"; m.parentNode.insertBefore(a, m) }; window.rdn = function () { return Math.floor(Math.random() * 1E10, 0) }
})(document);