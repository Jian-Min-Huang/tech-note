(function(){'use strict';var g;var h={i:function(a,b){var c=h.c();c&&c.saveStyleOverride(this,a,b);this.style[a]=b},f:function(a,b){b?this.classList.add(a):this.classList.remove(a)},v:function(a){if("undefined"!=typeof a){var b=h.c();b&&b.saveInitialText(this);this.textContent=a;b&&b.applyStylePreservation(this)}},u:function(a){if("undefined"!=typeof a){var b=h.c();b&&b.saveInitialText(this);this.innerHTML=a;b&&b.applyStylePreservation(this)}},show:function(a){this.style.display=a?"":"none"},setAttribute:function(a,b){this.setAttribute(a,
b)},c:function(){return document.querySelector("gwd-text-helper")}};window.Binder=h;h.setText=h.v;h.setStyle=h.i;h.setHtml=h.u;h.addOrRemoveClassName=h.f;h.show=h.show;h.setAttribute=h.setAttribute;var l={limit:function(a,b){return b?a&&a.length&&("string"==typeof b&&(b=parseInt(b,10)),!isNaN(b))?a.slice(0,b):a:a},pluck:function(a,b){if(a){var c=b.split(".");return a.map(function(a){if(1==c.length)return a[c[0]];var b=a;c.forEach(function(a){b&&(b=b[a])});return b})}return[]},join:function(a,b){return a?a.join(b||","):""},s:function(a,b){return l.join(l.pluck(a,b))},toUpperCase:function(a){return a?a.toUpperCase():a},toLowerCase:function(a){return a?a.toLowerCase():a},A:function(a){if("undefined"!=
typeof a)return a+"px"},w:function(a){return a?a.replace(/0x/,"#"):a}};window.Formatter=l;l.limit=l.limit;l.toUpperCase=l.toUpperCase;l.toLowerCase=l.toLowerCase;l.toPixelValue=l.A;l.toHex=l.w;l.pluck=l.pluck;l.join=l.join;l.pluckAndJoin=l.s;var n=/^bind-/,p=/^style-/,q=/^class-/,r=/^each-/,t=/\/-([a-z])\/g/;function u(a){return String(a).replace(t,function(a,c){return c.toUpperCase()})}function w(a){return!(!a||!n.test(a.name))}function x(a){return!(!a||0!=a.name.indexOf("bind-each"))}function y(a){Array.prototype.slice.call(a.attributes).filter(x).forEach(function(b){a.removeAttribute(b.name)})}var z=function(){};goog.inherits(z,HTMLElement);g=z.prototype;
g.createdCallback=function(){this.a={text:"setText",html:"setHtml",show:"show"};this.b={limit:"limit",pixelvalue:"toPixelValue",uppercase:"toUpperCase",lowercase:"toLowerCase",hex:"toHex",pluck:"pluck",join:"join",pluckandjoin:"pluckAndJoin"};this.h=!1};g.getBinder=function(){return h};g.getFormatter=function(){return l};
g.bindData=function(a,b){b=b||Array.prototype.slice.call(document.querySelectorAll("*"));var c=document.querySelector("meta[name=environment]");this.h="gwd-adwords"==(c?c.getAttribute("content"):"");b.forEach(this.j.bind(this,a))};g.j=function(a,b){if(!b.hasAttribute("gwd-bind-each-template")){for(var c,f=Array.prototype.slice.call(b.attributes),d=f.length,e=0;e<d;e++)if(x(f[e])){c=f[e];break}a=this.m.bind(this,b,a);c?a(c):f.filter(w).forEach(a)}};
g.m=function(a,b,c){var f=c.name,d=f.replace(n,""),e;e=this.getBinder();if(p.test(d)){var m=d.replace(p,"");e=e.i.bind(a,u(m))}else q.test(d)?(m=d.replace(q,""),e=e.f.bind(a,m)):r.test(d)?(e=d.replace(r,""),e=this.l.bind(this,a,e,b)):e=this.a[d]&&"function"==typeof e[this.a[d]]?e[this.a[d]]:window.gwd&&window.gwd.binders&&"function"==typeof window.gwd.binders[d]?window.gwd.binders[d]:e.setAttribute.bind(a,d);f=a.getAttribute(f);b=(-1!==f.indexOf("|")?this.o.bind(this,b,f):this.g.bind(this,b,f)).call(a);
"exit-override-url"==d&&(d=(d=c.value)&&d.match(/product\.\d+/i)?(d=d.match(/product\.(\d+)/i))&&d[1]?parseInt(d[1],10):null:null,null!=d&&a.setAttribute("product-index",d),this.h&&a.setAttribute("exit-id",c.value.replace(/\./g,"_")));e.apply(a,[b])};
g.l=function(a,b,c,f){var d=a.parentNode;if(d){var e=a.cloneNode(!0);y(e);for(var m=[],k=0;f&&k<f.length;k++)m.push(e.cloneNode(!0));k={instances:m};e=document.createEvent("CustomEvent");e.initCustomEvent("gwdbindeachcloned",!0,!0,k);a.dispatchEvent(e);e=document.createComment("gwd-bind-each-placeholder");d.insertBefore(e,a);d.removeChild(a);A(a);if(f&&0!=f.length){for(var v,k=0;k<f.length;k++)c[b]=f[k],a=m[k],a.setAttribute("gwd-repeat-index",k),c.$index=k,v=Array.prototype.slice.call(a.querySelectorAll("*")),
this.bindData(c,v.concat(a)),d.insertBefore(a,e);delete c[b]}}};var A=function(a){a.setAttribute("gwd-bind-each-template","");Array.prototype.slice.call(a.querySelectorAll("*")).forEach(function(a){a.setAttribute("gwd-bind-each-template","")})};z.prototype.g=function(a,b){if(a){if(b){b=b.replace("[",".");b=b.replace("]","");var c=a;b.split(".").forEach(function(a){c&&(c=c[a])});return c}return a}return null};
z.prototype.o=function(a,b){if(b){b=b.split("|");var c=b.shift().trim();for(a=this.g(a,c);0<b.length;){var c=b.shift().trim(),c=c.split(" "),f=c.shift().trim();c.unshift(a);var d=this.getFormatter();a=this.b[f]&&"function"==typeof d[this.b[f]]?d[this.b[f]].apply(this,c):window.gwd&&window.gwd.formatters&&"function"==typeof window.gwd.formatters[f]?window.gwd.formatters[f].apply(this,c):a}}return a};z.prototype.attributeChangedCallback=function(){};document.registerElement("gwd-data-binder",{prototype:z.prototype});}).call(this);
