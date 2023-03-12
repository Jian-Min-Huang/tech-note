(function(){var window=this;var f=this,k=function(b){return"string"==typeof b},aa=/^[\w+/_-]+[=]{0,2}$/,l=null,n=function(){},q=function(b){var a=typeof b;if("object"==a)if(b){if(b instanceof Array)return"array";if(b instanceof Object)return a;var c=Object.prototype.toString.call(b);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof b.length&&"undefined"!=typeof b.splice&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof b.call&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==a&&"undefined"==typeof b.call)return"object";return a};var ba=function(b,a){for(var c=b.length,d=k(b)?b.split(""):b,e=0;e<c;e++)e in d&&a.call(void 0,d[e],e,b)};var t;a:{var u=f.navigator;if(u){var v=u.userAgent;if(v){t=v;break a}}t=""};var x=function(b){x[" "](b);return b};x[" "]=n;var z=function(){this.b="";this.v=y};z.prototype.l=!0;z.prototype.a=function(){return this.b};var A=function(b){return b instanceof z&&b.constructor===z&&b.v===y?b.b:"type_error:TrustedResourceUrl"},y={};var D=function(){this.g="";this.u=C};D.prototype.l=!0;D.prototype.a=function(){return this.g};var ca=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,C={},E=function(b){var a=new D;a.g=b;return a};E("about:blank");var F=function(b,a){b.src=A(a);if(null===l){a:{if((a=f.document.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&aa.test(a))break a;a=null}l=a||""}if(a=l)b.nonce=a};var da=function(b){var a=!1,c;return function(){a||(c=b(),a=!0);return c}};var fa=function(b){ea();var a=new z;a.b=b;return a},ea=n;var ha=/^[\w+/_-]+[=]{0,2}$/;var ia=function(){if(!f.crypto)return Math.random();try{var b=new Uint32Array(1);f.crypto.getRandomValues(b);return b[0]/65536/65536}catch(a){return Math.random()}},ja=da(function(){return-1!=t.indexOf("Google Web Preview")||1E-4>Math.random()}),ka=function(){try{a:{var b=f.document.querySelector("script[nonce]");if(b){var a=b.nonce||b.getAttribute("nonce");if(a&&ha.test(a)){var c=a;break a}}c=void 0}return c}catch(d){}};var G=function(){return f.googletag||(f.googletag={})};var H={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,13:1500,23:.001,24:200,27:.01,33:"pagead2.googlesyndication.com",37:.01,38:.001,47:0,53:"",58:1,65:.01,66:1E-5,67:0,68:0,69:1,71:.05,162:0,163:"",76:"",77:.001,78:0,81:.001,83:0,85:0,99:.01,103:.01,104:"/pagead/js/rum.js",113:1,114:1,115:0,116:0,117:1,118:1,124:1,208:.05,169:0,207:.01,127:0,129:.05,131:"",156:0,133:0,134:.01,135:.1,137:.01,167:1,138:"",143:.005,168:0,144:.001,187:.01,141:1,158:.001,150:".google.com.tw",179:.05,170:!1,211:!1,183:0,196:.001,197:.001,152:[],172:null,175:"21061661,21061662,21061663,21061664,21061665,21061666,21061667,21061668,22316437,22316438",178:.05,182:1E3,188:0,189:.01,191:1512514930353,192:21510956201635,190:0xa781a7496a3,194:.95,225:.95,199:0,180:null,219:[],210:{},227:{},226:[],195:1,198:1,222:0,223:.5,200:.95,201:0,202:"",203:.01,206:0,213:1,214:.05,215:.01,217:0,218:.01,220:!1,224:!1};H[6]=function(b,a){try{for(var c=null;c!=b;c=b,b=b.parent)switch(b.location.protocol){case "https:":return!0;case "file:":return!!a;case "http:":return!1}}catch(d){}return!0}(window);H[49]=(new Date).getTime();H[36]=/^true$/.test("false");H[46]=/^true$/.test("false");H[148]=/^true$/.test("false");H[221]=/^true$/.test("");var I;a:{if(/^(-?[0-9.]{1,30})$/.test("{{MOD}}")){var la=Number("{{MOD}}");if(!isNaN(la)){I=la;break a}}I=-1}H[204]=I;H[205]=.01;var J=function(){var b={},a;for(a in H)b[a]=H[a];this.a=b};J.prototype.get=function(b){return this.a[b]};J.prototype.set=function(b,a){this.a[b]=a};J.b=void 0;J.a=function(){return J.b?J.b:J.b=new J};var ma=J.a().a,na=G(),oa=na._vars_,K;for(K in oa)ma[K]=oa[K];na._vars_=ma;var pa=function(){return"199"},qa=G();qa.hasOwnProperty("getVersion")||(qa.getVersion=pa);var ra=function(b,a,c){b.addEventListener?b.addEventListener(a,c,void 0):b.attachEvent&&b.attachEvent("on"+a,c)},sa=function(b,a,c){b.removeEventListener?b.removeEventListener(a,c,void 0):b.detachEvent&&b.detachEvent("on"+a,c)};var ta=function(b,a){var c=void 0===c?{}:c;this.error=b;this.context=a.context;this.line=a.line||-1;this.msg=a.message||"";this.file=a.file||"";this.id=a.id||"jserror";this.meta=c};var L=null;var ua=function(b){var a=!1,c=!1;c=void 0===c?!1:c;a=void 0===a?!1:a;f.google_image_requests||(f.google_image_requests=[]);var d=f.document.createElement("img");if(a){var e=function(){if(a){var b=f.google_image_requests;a:if(k(b))var c=k(d)&&1==d.length?b.indexOf(d,0):-1;else{for(c=0;c<b.length;c++)if(c in b&&b[c]===d)break a;c=-1}0<=c&&Array.prototype.splice.call(b,c,1)}sa(d,"load",e);sa(d,"error",e)};ra(d,"load",e);ra(d,"error",e)}c&&(d.referrerPolicy="no-referrer");d.src=b;f.google_image_requests.push(d)};var va=da(function(){var b=f.navigator&&f.navigator.userAgent||"";b=b.toLowerCase();return-1!=b.indexOf("firefox/")||-1!=b.indexOf("chrome/")||-1!=b.indexOf("opr/")}),M=function(b,a,c,d,e){d=void 0===d?"":d;var g=b.createElement("link");g.rel=c;-1!=c.toLowerCase().indexOf("stylesheet")?a=A(a):a instanceof z?a=A(a):a instanceof D?a=a instanceof D&&a.constructor===D&&a.u===C?a.g:"type_error:SafeUrl":(a instanceof D||(a=a.l?a.a():String(a),ca.test(a)||(a="about:invalid#zClosurez"),a=E(a)),a=a.a());g.href=a;d&&"preload"==c&&(g.as=d);e&&(g.nonce=e);if(b=b.getElementsByTagName("head")[0])try{b.appendChild(g)}catch(p){}};var wa=/^\.google\.(com?\.)?[a-z]{2,3}$/,xa=/\.(cn|com\.bi|do|sl|ba|by|ma)$/,N=function(b){return wa.test(b)&&!xa.test(b)},ya=function(b){return b.replace(/[\W]/g,function(b){return"&#"+b.charCodeAt()+";"})},O=f,za=function(b,a){b="https://"+("adservice"+a+"/adsid/integrator."+b);a=["domain="+encodeURIComponent(f.location.hostname)];P[3]>=+new Date&&a.push("adsid="+encodeURIComponent(P[1]));return b+"?"+a.join("&")},P,Q,R=function(){O=f;P=O.googleToken=O.googleToken||{};var b=+new Date;P[1]&&P[3]>b&&0<P[2]||(P[1]="",P[2]=-1,P[3]=-1,P[4]="",P[6]="");Q=O.googleIMState=O.googleIMState||{};N(Q[1])||(Q[1]=".google.com");"array"==q(Q[5])||(Q[5]=[]);"boolean"==typeof Q[6]||(Q[6]=!1);"array"==q(Q[7])||(Q[7]=[]);"number"==typeof Q[8]||(Q[8]=0)},Aa=function(b){try{b()}catch(a){f.setTimeout(function(){throw a;},0)}},Ca=function(b){"complete"==f.document.readyState||"loaded"==f.document.readyState||f.document.currentScript&&f.document.currentScript.async?Ba(3):b()},Da=0,S={c:function(){return 0<Q[8]},h:function(){Q[8]++},m:function(){0<Q[8]&&Q[8]--},o:function(){Q[8]=0},f:function(){},s:function(){return!1},j:function(){return Q[5]},i:Aa},T={c:function(){return Q[6]},h:function(){Q[6]=!0},m:function(){Q[6]=!1},o:function(){Q[6]=!1},f:function(){},s:function(){return".google.com"!=Q[1]&&2<++Da},j:function(){return Q[7]},i:function(b){Ca(function(){Aa(b)})}},Ba=function(b){1E-5>Math.random()&&ua("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+b)};S.f=function(){if(!S.c()){var b=f.document,a=function(a){var c=za("js",a),d=ka();M(b,c,"preload","script",d);a=b.createElement("script");a.type="text/javascript";d&&(a.nonce=d);a.onerror=function(){return f.processGoogleToken({},2)};c=fa(c);F(a,c);try{(b.head||b.body||b.documentElement).appendChild(a),S.h()}catch(r){}},c=Q[1];a(c);".google.com"!=c&&a(".google.com");a={};var d=(a.newToken="FBT",a);f.setTimeout(function(){return f.processGoogleToken(d,1)},1E3)}};T.f=function(){if(!T.c()){var b=f.document,a=za("sync.js",Q[1]);M(b,a,"preload","script");a=ya(a);var c=x("script"),d="",e=ka();e&&(d='nonce="'+ya(e)+'"');var g="<"+c+' src="'+a+'" '+d+"></"+c+">"+("<"+c+" "+d+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Ca(function(){b.write(g);T.h()})}};var Ea=function(b){R();P[3]>=+new Date&&P[2]>=+new Date||b.f()},Ga=function(){f.processGoogleToken=f.processGoogleToken||function(b,a){return Fa(S,b,a)};Ea(S)},Ha=function(){f.processGoogleTokenSync=f.processGoogleTokenSync||function(b,a){return Fa(T,b,a)};Ea(T)},Fa=function(b,a,c){a=void 0===a?{}:a;c=void 0===c?0:c;var d=a.newToken||"",e="NT"==d,g=parseInt(a.freshLifetimeSecs||"",10),p=parseInt(a.validLifetimeSecs||"",10),r=a["1p_jar"]||"";a=a.pucrd||"";R();1==c?b.o():b.m();if(!d&&b.s())N(".google.com")&&(Q[1]=".google.com"),b.f();else{var m=O.googleToken=O.googleToken||{},B=0==c&&d&&k(d)&&!e&&"number"==typeof g&&0<g&&"number"==typeof p&&0<p&&k(r);e=e&&!b.c()&&(!(P[3]>=+new Date)||"NT"==P[1]);var h=!(P[3]>=+new Date)&&0!=c;if(B||e||h)e=+new Date,g=e+1E3*g,p=e+1E3*p,Ba(c),m[5]=c,m[1]=d,m[2]=g,m[3]=p,m[4]=r,m[6]=a,R();if(B||!b.c()){c=b.j();for(d=0;d<c.length;d++)b.i(c[d]);c.length=0}}};var Ia=function(){this.a=null},Ja=function(b,a){b.a=a};Ia.prototype.b=function(b,a,c,d,e){if(Math.random()>(void 0===c?.01:c))return!1;a.error&&a.meta&&a.id||(a=new ta(a,{context:b,id:void 0===e?"gpt_exception":e}));if(d||this.a)a.meta={},this.a&&this.a(a.meta),d&&d(a.meta);f.google_js_errors=f.google_js_errors||[];f.google_js_errors.push(a);f.error_rep_loaded||(a=f.document,b=a.createElement("script"),F(b,fa(f.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js")),(a=a.getElementsByTagName("script")[0])&&a.parentNode&&a.parentNode.insertBefore(b,a),f.error_rep_loaded=!0);return!1};var Ka=function(b,a){var c=void 0===c?b.b:c;try{a()}catch(d){if(!c.call(b,420,d,.01,void 0,"gpt_exception"))throw d;}};var La=function(b){if(!b.google_ltobserver){var a=new b.PerformanceObserver(function(a){var c=b.google_lt_queue=b.google_lt_queue||[];ba(a.getEntries(),function(b){return c.push(b)})});a.observe({entryTypes:["longtask"]});b.google_ltobserver=a}};var Ma=["21061818","21061819","21061820"],Na=["21060622"],Oa=["21061212","21061213","21061214","21061277"];var Pa=[[null,null,2,[null,null,"1-0-23"]]];var Qa={3:[[10,[[21061799],[21061800],[21061801]]],[50,[[21061763],[21061764,[[5,null,null,[1]],[4,null,null,[1]]]]]],[10,[[21060132],[21060133,[[2,null,null,[1]]]]]],[1,[[22321847],[22322161,[[null,null,null,[null,null,null,["250","250"]],null,2]]],[22321848,[[null,null,null,[null,null,null,"50 50 50 50 50 50 50 50 50 50".split(" ")],null,2]]]]],[null,[[21061902],[21061901],[21061900]]],[100,[[21061811],[21061812,[[3,null,null,[1]]]]]],[null,[[21061929,[[null,null,2,[null,null,"1-0-23"]]]],[21061928,[[null,null,null,[null,null,null,["v","1-0-23"]],null,1]]]]],[10,[[21061870],[21061871,[[4,null,null,[1]]]]]],[10,[[21061803],[21061804]]]]};x("partner.googleadservices.com");var U=x("www.googletagservices.com"),V=!1,W=!1,X="",Y="",Ra=J.a().get(46)&&!J.a().get(6);X=Ra?"http:":"https:";Y=J.a().get(Ra?2:3);var Sa=function(b){if(b=b.scripts)for(var a=0;a<b.length;a++){var c=b[a];if(-1<c.src.indexOf(U+"/tag/js/gpt"))return c}return null},Z=function(b,a){if(null===L){L="";try{var c="";try{c=f.top.location.hash}catch(e){c=f.location.hash}if(c){var d=c.match(/\bdeid=([\d,]+)/);L=d?d[1]:""}}catch(e){}}if(c=(c=L)&&c.match(new RegExp("\\b("+b.join("|")+")\\b")))b=c[0];else if(a)a:{a=b.length*a;if(!ja()&&(c=Math.random(),c<a)){c=ia();b=b[Math.floor(c*b.length)];break a}b=null}else b=null;return b};(function(b){var a=new Ia;Ja(a,function(b){b.methodId=420});Ka(a,function(){var a=b,d=G(),e=d.fifWin||window;a=a||e.document;var g=[],p=G();p.hasOwnProperty("cmd")||(p.cmd=g);if(d.evalScripts)d.evalScripts();else{g=J.a();(p=Z(Oa,g.get(178)))&&g.get(152).push(p);switch(p){case "21061213":W=!0;break;case "21061214":V=!0;break;case "21061277":V=W=!0}g=J.a().get(138)||Z(Na,0)||Z(Ma,J.a().get(137))||Z(["21061149"],J.a().get(167));p=a;var r=Z(["21061590","21061591"],.001),m=J.a();m.get(219).length||m.set(219,Pa);a:{var B=m.get(210);for(h in B)if(Object.prototype.hasOwnProperty.call(B,h)){var h=!1;break a}h=!0}h&&m.set(210,Qa);r&&("21061591"==r?(m.set(173,U),m.set(174,U)):m.set(163,r),m.get(152).push(r));-1!=t.indexOf("Mobile")||m.set(194,m.get(225));if(h=m.get(150))R(),N(h)&&(Q[1]=h);g&&m.get(152).push(g);m.set(172,p.currentScript||Sa(p));e.PerformanceObserver&&e.PerformanceLongTaskTiming&&La(e);h=e;h=void 0===h?f:h;if(h=(h=h.performance)&&h.now?h.now():null)h={label:"1",type:9,value:h},e=e.google_js_reporting_queue=e.google_js_reporting_queue||[],1024>e.length&&e.push(h);e=J.a();if(h=e.get(76))var w=h;else e.get(131)&&(w="199"),h=X+"//"+Y+"/gpt/pubads_impl_"+(w||"199")+".js",J.a().set(76,h),w=h;e=a.currentScript;if(!("complete"==a.readyState||"loaded"==a.readyState||e&&e.async)){e="gpt-impl-"+Math.random();try{h='<script id="'+e+'" src="'+w+'">\x3c/script>',V&&va()&&(h+='<link rel="preconnect" href="'+X+"//"+Y+'">'),a.write(h)}catch(Ta){}a.getElementById(e)&&(d._loadStarted_=!0,J.a().set(220,!1),"21061818"!=g&&"21060622"!=g&&"21061149"!=g||Ha())}d._loadStarted_||("21061818"!=g&&"21060622"!=g&&"21061149"!=g||Ga(),W&&M(a,w,"preload","script"),g=a.createElement("script"),g.src=w,g.async=!0,(a.head||a.body||a.documentElement).appendChild(g),V&&va()&&M(a,X+"//"+Y,"preconnect"),J.a().set(220,!0),d._loadStarted_=!0)}})})();}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
