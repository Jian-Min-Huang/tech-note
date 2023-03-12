//Generated:2017-05-04 00:23:45
// 6-218
(function(){
    var o = {
    $: function(el) {
        var x = el || o.divID, p = {
            o: o
        };
        p.y = typeof x === 'string' ? o.w.document.getElementById(x) : x;
        return new o.$Base(p);
    },
    $Base: function(p) {
        var $o = this;
        this.$ = true;
        this.o = p.o;
        p.y = p.y || {};
        this.target = p.y.$ ? p.y.target : p.y;
        this.style = p.y.style || {};
        this.parent = function() {
            if ($o.target.parentNode && $o.target.parentNode !== p.o.w.document) {
                return p.o.$($o.target.parentNode);
            } else {
                return $o;
            }
        };
        this.hash = function() {
            return 1;
        };
        this.alignTo = function(ob) {
            if (ob.$ && ob.target) {
                ob = ob.target;
            }
            p.y.style.left = p.o.$(ob).x() + 'px';
            p.y.style.top = p.o.$(ob).y() + 'px';
            return $o;
        };
        this.x = function() {
            return p.o.getAbsLeft(this.target);
        };
        this.y = function() {
            return p.o.getAbsTop(this.target);
        };
        this.getStyle = function(style) {
            var x = window.getComputedStyle ? window.getComputedStyle($o.target, '') : $o.target.currentStyle;
            if (x != null) {
                try {
                    return x[style];
                } catch (e) {
                    return 'auto';
                }
            } else {
                return x;
            }
        };
    },
    addEventListener: function(type, func) {
        if (typeof o.eventListeners[type] === 'undefined') {
            o.eventListeners[type] = [];
        }
        if (typeof func === 'function') {
            o.eventListeners[type].unshift(func);
        }
        if ((type === 'adonpage' || type === 'adready') && o.adDisplayed) {
            func.call(o);
        }
    },
    addVClick: function(ct) {
        var pubClick = o.decode(o.qs('click', ''));
        var encodeCount = o.encodeClickCount;
        if (encodeCount && pubClick) {
            while (encodeCount--) {
                ct = encodeURIComponent(ct);
            }
        } else if (pubClick && o.inApp) {
            if (/^mopubnativebrowser:\/\//.test(pubClick)) {
                ct = encodeURIComponent(encodeURIComponent(ct));
            } else {
                ct = encodeURIComponent(ct);
            }
        }
        return pubClick + ct;
    },
    appendScriptToHead: function(scr) {
        var div = o.$().target, newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        newScript.src = scr;
        div.appendChild(newScript);
    },
    bver: function(b, p) {
        p = p || 'appVersion';
        var str, wpr = /android|ios|ip(?:ad|hone|od)/gi;
        if (!o.navigator) {
            if (/Windows Phone/.test(navigator.appVersion)) {
                o.navigator = {
                    appVersion: navigator.appVersion.replace(wpr, ''),
                    userAgent: navigator.userAgent.replace(wpr, '')
                };
            } else {
                o.navigator = {};
            }
        }
        str = (o.navigator || {})[p] || navigator[p];
        return b instanceof RegExp ? b.test(str) : str.toLowerCase().indexOf(b.toLowerCase()) >= 0;
    },
    compareVersions: function(a, b) {
        if (!this.adReady) {
            return 1;
        }
        a = a.split('.');
        b = b.split('.');
        for (var i = 0; i < 3; i++) {
            if ((+a[i] || 0) > (+b[i] || 0)) {
                return 1;
            }
            if ((+a[i] || 0) < (+b[i] || 0)) {
                return -1;
            }
        }
        return 0;
    },
    decode: function(str) {
        try {
            return decodeURIComponent(str);
        } catch (e) {
            return unescape(str);
        }
    },
    dispatchEvent: function(type, msg) {
        if (typeof o.eventListeners[type] !== 'undefined') {
            var i = o.eventListeners[type].length;
            while (i--) {
                o.eventListeners[type][i].call(o, msg);
            }
        }
        if (type === 'adonpage' || type === 'backup') {
            o.adDisplayed = true;
        }
    },
    getAbsLeft: function(id) {
        return id.getBoundingClientRect().left + (window.scrollX != null ? window.scrollX : window.pageXOffset != null ? window.pageXOffset : document.documentElement.scrollLeft);
    },
    getAbsTop: function(id) {
        return id.getBoundingClientRect().top + (window.scrollY != null ? window.scrollY : window.pageYOffset != null ? window.pageYOffset : document.documentElement.scrollTop);
    },
    insertParam: function(str, insert) {
        if (typeof str === 'string' && insert.value !== '') {
            str = str.replace('/?', '/?' + insert.param + '=' + insert.value + '&');
        }
        return str;
    },
    listen: function(element, type, callback) {
        this.cachedEvents.push([ element, type, callback ]);
        if (typeof window.addEventListener !== 'undefined') {
            element.addEventListener(type, callback, false);
            return function(el, ev, cb) {
                el.addEventListener(ev, cb, false);
            };
        } else {
            element.attachEvent('on' + type, callback, false);
            return function(el, ev, cb) {
                el.attachEvent('on' + ev, cb, false);
            };
        }
    },
    macSaf: function() {
        return o.is.mac && o.is.safari && !o.is.chrome;
    },
    modifyClicks: function() {
        var clicks = o.clickTags.slice(0), insert = [ {
            param: 'ft_custom',
            value: window['ftCustom_' + o.pID] || ''
        }, {
            param: 'ft_section',
            value: window['ftSection_' + o.pID] || ''
        }, {
            param: 'ft_id',
            value: o.ftId ? o.ftId : ''
        }, {
            param: 'ft_impID',
            value: o.ftImpId ? o.ftImpId : ''
        }, {
            param: 'ft_agentEnv',
            value: o.qs('ft_agentEnv') && o.qs('ft_agentEnv') !== '0' ? o.qs('ft_agentEnv') : ''
        } ], i, j;
        for (i = clicks.length; i--; ) {
            if (clicks[i]) {
                j = insert.length;
                while (j--) {
                    clicks[i] = o.insertParam(clicks[i], insert[j]);
                }
                clicks[i] = o.replaceMacros(clicks[i], true);
            }
        }
        j = insert.length;
        while (j--) {
            o.altimghref = o.altImgHref = o.insertParam(o.altimghref || o.altImgHref, insert[j]);
        }
        o.altimghref = o.altImgHref = o.replaceMacros(o.altimghref || o.altImgHref, true);
        return clicks;
    },
    once: function(type, func) {
        var newFunc = function(e) {
            var i = o.eventListeners[type].length;
            func.call(o, e);
            while (i--) {
                if (o.eventListeners[type][i] === newFunc) {
                    o.eventListeners[type].splice(i, 1);
                }
            }
        };
        o.addEventListener(type, newFunc);
    },
    outputExtExpTrack: function() {
        var et = o.decode(o.qs('ftExpTrack', ''));
        if (et && !o.expandTracked) {
            new Image().src = o.replaceMacros(et);
            o.expandTracked = true;
        }
    },
    outputExternals: function() {
        var i = o.exttrack.length;
        function outputPixel(p) {
            if (p) {
                new Image().src = o.replaceMacros(p);
            }
        }
        while (i--) {
            outputPixel(o.exttrack[i]);
        }
    },
    parseURL: function(url) {
        var a;
        if (url) {
            a = document.createElement('a');
            a.href = url || '';
        } else {
            a = {
                search: ''
            };
        }
        return {
            domain: a.hostname || '',
            hash: a.hash || '',
            host: a.host || '',
            hostname: a.hostname || '',
            href: a.href || '',
            query: a.search.substring(1, a.search.length) || '',
            path: a.pathname || '',
            pathname: a.pathname || '',
            port: a.port || '',
            protocol: a.protocol || '',
            search: a.search || ''
        };
    },
    protocolSwitch: function() {
        var t, i;
        if (o.secure) {
            for (i = o.switchArray.length; i--; ) {
                t = o[o.switchArray[i]];
                if (!t) {
                    continue;
                }
                o[o.switchArray[i]] = t.replace('http:', 'https:');
            }
        }
    },
    pubPos: function() {
        var centre = o.centreAd ? 'margin:0 auto;' : '', str = o.attachtobody ? 'absolute;' : 'relative;' + centre, x = o.qs('ftx', ''), y = o.qs('fty', ''), z = o.qs('ftadz', '');
        if (x !== '' || y !== '') {
            str = 'absolute;';
            str += x ? 'left:' + x + 'px;' : '';
            str += y ? 'top:' + y + 'px;' : '';
        }
        if (z !== '') {
            str += 'z-index:' + z + ';';
        }
        return str;
    },
    random: function(x) {
        x = x || 1e9;
        return Math.floor(Math.random() * x);
    },
    removeListener: function(element, event, callback) {
        if (window.removeEventListener) {
            element.removeEventListener(event, callback, false);
        } else {
            element.detachEvent("on" + event, callback, false);
        }
    },
    replaceMacros: function(str, cb) {
        var noCache, hasRandom, map = {
            TIMESTAMP: window['ftTimestamp_' + o.pID],
            GUID: window['ftGUID_' + o.pID],
            IDFA: o.ftId,
            RANDOM: o.random(),
            CONFID: window['ftConfID_' + o.pID],
            NOCACHEBUSTER: '',
            IMPRESSIONID: o.ftImpId,
            PROTOCOL: o.secure ? 'https' : 'http'
        }, allMacros = /(?:\[|%5B|%255B)(%|%25|%2525)?(?:FT_)?(\w+)\1(?:\]|%5D|%255D)/gi, replacer = function($0, d, macro) {
            macro = macro.toUpperCase();
            if (macro === 'NOCACHEBUSTER') {
                noCache = true;
            }
            if (macro === 'RANDOM' && noCache !== false) {
                hasRandom = true;
                return $0;
            }
            return map.hasOwnProperty(macro) ? map[macro] : $0;
        };
        str = str.replace(allMacros, replacer);
        noCache = !!noCache;
        if (!noCache && hasRandom) {
            str = str.replace(allMacros, replacer);
        }
        return str + (noCache || hasRandom || cb ? '' : (str.indexOf('?') !== -1 ? '&' : '?') + o.random());
    },
    setupLoadListener: function() {
        var w = o.w, f = function() {
            o.dispatchEvent('load');
        };
        if (o.is('ie', '<10')) {
            if (o.advload) {
                document.attachEvent('onreadystatechange', function() {
                    if (document.readyState === 'complete') {
                        f();
                    }
                });
            } else {
                w.attachEvent('onload', f);
            }
        } else {
            w.addEventListener(o.advload ? 'DOMContentLoaded' : 'load', f, false);
        }
    },
    setupPageVisibility: function() {
        var prevVis, prevFocus, focus, blurTimeout, checkBlur = true, w = function() {
            if (o.expand) {
                return o.w;
            } else if (o.w !== window.parent) {
                try {
                    return typeof o.w.parent.document.body.style.cssText === 'string' && o.w.parent;
                } catch (e) {
                    return o.w;
                }
            }
            return o.w;
        }(), document = w.document, prop = 'hidden';
        function onchange(evt) {
            var type = (evt || w.event).type, map = {
                focus: 'yes',
                blur: 'maybe',
                focusin: 'yes',
                focusout: 'maybe'
            }, vis = document[prop] ? 'no' : map.hasOwnProperty(type) ? map[type] : 'yes';
            if (o.pageVisible !== vis) {
                o.pageVisible = vis;
                o.dispatchEvent('visibilitychange', vis);
                if (o.dispatchToCreative) {
                    o.dispatchToCreative('visibilitychange', vis);
                }
            }
            if (prevVis !== (vis !== 'no')) {
                prevVis = checkBlur = vis !== 'no';
                o.dispatchEvent('viewableChange', prevVis);
                if (o.api) {
                    o.api.dispatchEvent('viewableChange', prevVis);
                }
                if (checkBlur) {
                    clearTimeout(blurTimeout);
                    blurTimeout = setTimeout(blurCheck, 100);
                }
            }
        }
        function blurCheck() {
            var evt = {};
            if (checkBlur && typeof w.document.hasFocus !== 'undefined') {
                focus = w.document.hasFocus() || o.w.document.hasFocus();
                if (focus !== prevFocus) {
                    prevFocus = focus;
                    evt.type = focus ? 'focus' : 'blur';
                    onchange(evt);
                }
                clearTimeout(blurTimeout);
                blurTimeout = setTimeout(blurCheck, 100);
            }
        }
        if (prop in document) {
            o.listen(document, 'visibilitychange', onchange);
        } else if ('mozHidden' in document) {
            prop = 'mozHidden';
            o.listen(document, 'mozvisibilitychange', onchange);
        } else if ('webkitHidden' in document) {
            prop = 'webkitHidden';
            o.listen(document, 'webkitvisibilitychange', onchange);
        }
        o.addEventListener('adonpage', function() {
            clearTimeout(blurTimeout);
            blurTimeout = setTimeout(blurCheck, 100);
            o.pageVisible = document[prop] ? 'no' : document.hasFocus && (document.hasFocus() || o.w.document.hasFocus()) ? 'yes' : 'maybe';
        });
        o.pageVisible = document[prop] ? 'no' : document.hasFocus && document.hasFocus() ? 'yes' : 'maybe';
    },
    setupQS: function(query) {
        var a = query.split('&');
        var q = {};
        var i = a.length;
        var fn = function(ref, def) {
            return q[ref] || def;
        };
        var f = function(s) {
            return o.decode(s);
        };
        var x;
        while (i--) {
            x = a[i].split('=');
            x[1] = x.slice(1).join('=');
            q[f(x[0])] = f(x[1]);
        }
        return window.qs && window.qs.get || fn;
    },
    setupResizeListener: function() {
        var f = function() {
            o.dispatchEvent('resize');
        };
        o.listen(o.w, 'resize', f);
    },
    checkProtocols: function() {
        var t, i;
        if (o.secure) {
            for (i = o.switchArray.length; i--; ) {
                t = o[o.switchArray[i]];
                o[o.switchArray[i]] = t.replace("http:", "https:");
            }
        }
    },
    getBackup: function() {
        var href = o.addVClick(o.altimghref);
        o.fullClick = href;
        href = o.api._BRIDGE !== o.api.fallbackAPI ? 'target="_self" href="javascript:ft' + o.pID + '.api.open(\'' + href + '\');"' : 'target="_blank" href="' + href + '"';
        return '<a id="' + o.altimgID + '" ' + href + '><img src="' + o.altimg + '?' + o.random() + '" alt="' + o.alttext + '" style="width:' + o.width + 'px; height:' + o.height + 'px; border:' + o.altimgborder + 'px"/></a>';
    },
    getFrame: function() {
        return '<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" width="' + o.width + '" height="' + o.height + '" src="' + o.cdnSrc + '"></iframe>';
    },
    init: function() {
        var frame = false, i = o.extscript.length, guid = window['ftGUID_' + o.pID];
        o.qs = o.setupQS(o.params);
        o.setAPI();
        o.checkProtocols();
        o.setupPageVisibility();
        o.adId = o.altimgID;
        if (o.storeGUID && !o.servedby && !o.cdn) {
            o.cdnSrc += guid + '&p=' + encodeURIComponent(o.params);
            o.cdnSrc += '&c=' + o.confID;
            o.cdnSrc += '&pID=' + o.pID + '&xx=' + Math.floor(o.pID / 1e4);
            o.cdnSrc += '&creativeID=' + o.creativeID;
            o.insertParam(o.altimghref, {
                param: 'ft_guid',
                value: guid
            });
            frame = true;
            o.outputDiv(frame);
        } else {
            o.setup();
            o.outputExternals();
            o.dispatchEvent('start');
            o.outputDiv(frame);
            o.dispatchEvent('end');
            while (i--) {
                if (o.extscript[i] !== '') {
                    o.appendScriptToHead(o.replaceMacros(o.extscript[i]));
                }
            }
        }
    },
    output207: function() {
        var fr = document.createElement('iframe'), cdnFr;
        fr.style.display = 'none';
        if (o.servedby) {
            cdnFr = fr.cloneNode();
            cdnFr.src = o.cdnGUID;
            document.body.appendChild(cdnFr);
        }
        o.iDeviceImp = o.insertParam(o.iDeviceImp, {
            param: 'ft_creative',
            value: o.creativeID
        });
        o.iDeviceImp = o.insertParam(o.iDeviceImp, {
            param: 'ft_configuration',
            value: window['ftConfID_' + o.pID]
        });
        fr.src = o.iDeviceImp;
        document.body.appendChild(fr);
    },
    outputDiv: function(frame) {
        var div = '', absPos = '', content = frame ? 'getFrame' : 'getBackup', posStyle = 'relative';
        if (this.qs('ftx', '') || this.qs('fty', '')) {
            absPos = 'left:' + this.qs('ftx', '') + 'px; top:' + this.qs('fty', '') + 'px; ';
            posStyle = 'absolute';
        }
        if (this.qs('ftadz', '') !== '') {
            absPos += 'z-index:' + this.qs('ftadz') + ';';
        }
        if (this.centreAd) {
            absPos += ' margin: 0 auto;';
        }
        div += '<div id="' + this.divID + '" style="position:' + posStyle + '; width:' + this.width + 'px; height:' + this.height + 'px;' + absPos + '">';
        div += o[content]();
        div += '</div>';
        if (o.append) {
            o.scriptLocation.insertAdjacentHTML('afterEnd', div);
        } else {
            document.write(div);
        }
        o.$().target.onclick = function(evt) {
            evt = evt || window.event;
            if (evt.preventDefault) {
                evt.preventDefault();
            }
            evt.returnValue = false;
            window.open(o.fullClick || o.altimghref, '_blank');
        };
        if (o.countOnDownload && !o.firedRenderedImpression) {
            new Image().src = o.replaceMacros(o.viewableImpressionURL);
            o.firedRenderedImpression = true;
        }
        this.dispatchEvent('backup');
        this.dispatchEvent('adready');
        this.adDisplayed = true;
    },
    removeMargin: function(remove) {
        if (remove) {
            if (document.body) {
                document.body.style.margin = 0;
            } else {
                setTimeout(function() {
                    o.removeMargin(remove);
                }, 20);
            }
        }
    },
    setAPI: function() {
        o.api._BRIDGE = o.api.bridge = window.ormma || window.mraid || o.api.fallbackAPI;
        if (o.api._BRIDGE !== o.api.fallbackAPI) {
            o.removeMargin(true);
            o.setupViewport();
            o.storeGUID = false;
        } else {
            o.api.fallbackAPI._STATE = 'default';
        }
    },
    setClickListener: function() {
        var a = o.$(o.altimgID).target, href = o.addVClick(o.altimghref);
        a.addEventListener("click", function() {
            o.api.open(href);
        });
    },
    setup: function() {
        var q = o.qs, guid = window['ftGUID_' + o.pID] || '99999999999';
        o.ftId = window['ftId_' + o.pID] = window['ftId_' + o.pID] || o.qs('ft_id', '');
        if (q('ftx', '') !== '' || q('fty', '') !== '') {
            q.ftx = q('ftx', '0');
            q.fty = q('fty', '0');
        }
        if (o.storeGUID) {
            try {
                if (typeof localStorage !== 'undefined') {
                    guid = localStorage.ftGUID = window['ftGUID_' + o.pID] = localStorage.ftGUID || window['ftGUID_' + o.pID];
                }
            } catch (e) {}
            o.altimghref = o.altImgHref = o.insertParam(o.altimghref, {
                param: 'ft_guid',
                value: guid
            });
        }
        o.iDeviceImp += guid + '&cb=' + o.random();
        o.cdnGUID += guid;
        o.setupLoadListener();
        o.modifyClicks();
        if (o.storeGUID) {
            o.output207(guid);
        }
        o.setupBackupImp();
    },
    setupBackupImp: function() {
        o.altimg = o.insertParam(o.altimg, {
            param: 'ft_creative',
            value: o.creativeID
        });
        o.altimg = o.insertParam(o.altimg, {
            param: 'ft_configuration',
            value: window['ftConfID_' + o.pID]
        });
    },
    setupViewport: function() {
        var w = this.w || window, head = w.document.getElementsByTagName('head')[0], metas = w.document.getElementsByTagName('meta'), viewportMeta = w.document.createElement('meta'), i = metas.length, viewportTagExists = false;
        while (i--) {
            if (metas[i].name === 'viewport') {
                viewportTagExists = true;
                break;
            }
        }
        if (!viewportTagExists) {
            if (!head) {
                head = w.document.createElement(head);
                w.document.body.parentElement.insertBefore(head, w.document.body);
            }
            viewportMeta.name = 'viewport';
            viewportMeta.content = 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1';
            head.insertBefore(viewportMeta, head.children[0]);
        }
    },
    api: {
        _BRIDGE: null,
        _STATE: 'loading',
        _LISTENERQUEUE: [],
        _EVENTS: {},
        _call: function(name) {
            return this._BRIDGE[name] || this.fallbackAPI[name] || function() {};
        },
        addEventListener: function(event, callback) {
            var o = this;
            if (o._BRIDGE === null || o.getState() === 'loading' && event !== 'ready') {
                o._LISTENERQUEUE.push([ event, callback ]);
            } else {
                if (typeof o._EVENTS[event] === 'undefined') {
                    o._EVENTS[event] = [];
                    this._call('addEventListener').call(this._BRIDGE, event, function() {
                        var args = [ event ].concat([].slice.call(arguments, 0));
                        o.dispatchEvent.apply(o, args);
                    });
                }
                if (typeof callback === 'function') {
                    o._EVENTS[event].push(callback);
                }
            }
        },
        close: function() {
            this._call('close').apply(this._BRIDGE, arguments);
        },
        dispatchEvent: function() {
            var o = this;
            var event = arguments[0];
            var args = [].slice.call(arguments, 1);
            if (typeof o._EVENTS[event] !== 'undefined') {
                for (var i = 0; i < o._EVENTS[event].length; i++) {
                    o._EVENTS[event][i].apply(o, args);
                }
            }
        },
        getOrientation: function(width, height) {
            var or = typeof this._call('getOrientation').apply(this._BRIDGE, arguments) !== 'undefined' ? this._call('getOrientation').call(this._BRIDGE) : this.fallbackAPI.getOrientation.call(this._BRIDGE);
            if (this.fallbackAPI._FT.goneFullscreen && width) {
                if (or % 180 === 0) {
                    or = width > height ? 90 : or;
                } else {
                    or = width < height ? 0 : or;
                }
            }
            return or;
        },
        getState: function() {
            return this._call('getState').call(this._BRIDGE);
        },
        getVersion: function() {
            if (!this._BRIDGE.getVersion) {
                return 2;
            } else {
                return this._call('getVersion').apply(this._BRIDGE, arguments);
            }
        },
        isViewable: function() {
            return this._call('isViewable').apply(this._BRIDGE, arguments);
        },
        open: function(url) {
            if (window.ftClickYOC) {
                this._call("open").call(this._BRIDGE, encodeURIComponent(window.ftClickYOC), true, encodeURIComponent(url));
            } else {
                this._call("open").call(this._BRIDGE, url);
            }
        },
        processQueuedListeners: function() {
            var o = this;
            for (var i = 0; i < o._LISTENERQUEUE.length; i++) {
                o.addEventListener(o._LISTENERQUEUE[i][0], o._LISTENERQUEUE[i][1]);
            }
        },
        removeEventListener: function(event, callback) {
            var o = this;
            var evs = o._EVENTS[event];
            var i = evs && evs.length || 0;
            while (i--) {
                if (evs[i] === callback) {
                    evs.splice(i, 1);
                }
            }
        },
        request: function(url, display) {
            this.fallbackAPI.request(url, display);
        },
        useCustomClose: function() {
            return this._call('useCustomClose').apply(this._BRIDGE, arguments);
        },
        fallbackAPI: {
            addEventListener: function(event, callback) {
                var api = this;
                if (typeof api._EVENTS[event] === 'undefined') {
                    api._EVENTS[event] = [];
                }
                if (typeof callback === 'function') {
                    api._EVENTS[event].push(callback);
                }
            },
            close: function() {
                if (this._STATE !== 'default' && this.ft.api._STATE === 'default') {
                    this._STATE = this.ft.api._STATE = 'default';
                } else {
                    this._STATE = this.ft.api._STATE = 'hidden';
                }
                if (this._FT.safeFrame) {
                    this._FT.safeFrame.collapse();
                }
                this.dispatchEvent('stateChange', this._STATE);
            },
            dispatchEvent: function() {
                var o = this;
                var event = arguments[0];
                var args = [].slice.call(arguments, 1);
                if (typeof o._EVENTS[event] !== "undefined") {
                    for (var i = 0; i < o._EVENTS[event].length; i++) {
                        o._EVENTS[event][i].apply(o, args);
                    }
                }
            },
            getOrientation: function() {
                var w = 0, s = o.w.screen;
                if (o.w === window.top) {
                    w = s.orientation && s.orientation.type || s.mozOrientation || s.msOrientation || o.w.orientation;
                    w = isNaN(w) ? /portrait/.test(w) ? 0 : /landscape/.test(w) ? 90 : window.innerHeight > window.innerWidth ? 0 : 90 : w;
                }
                return w;
            },
            getState: function() {
                return this._STATE;
            },
            isViewable: function() {
                return true;
            },
            open: function(url) {
                window.open(url, '_blank');
            },
            request: function(url) {
                new Image().src = url;
            },
            _FT: null,
            _STATE: 'loading',
            _EVENTS: {},
            _TARGET: '_blank',
            expand: function(dimensions) {
                var geom = {}, left, width, top, down;
                if (o.safeFrame) {
                    if (dimensions.fullscreen) {
                        geom = o.safeFrame.geom();
                        left = parseInt(geom.exp.l, 10);
                        width = parseInt(geom.win.w, 10) - o.width - left;
                        top = parseInt(geom.exp.t, 10);
                        down = parseInt(geom.win.h, 10) - o.height - top;
                    } else {
                        left = Math.abs(dimensions.indentAcross);
                        top = Math.abs(dimensions.indentDown);
                        width = dimensions.width - o.width - left;
                        down = dimensions.height - o.height - top;
                    }
                    o.safeFrame.expand({
                        t: top,
                        l: left,
                        r: width,
                        b: down,
                        push: o.pushdown ? o.safeFrame.supports('exp_push') : false
                    });
                }
                this._STATE = o.api._STATE = dimensions.fullscreen ? 'expanded' : 'resized';
                this.dispatchEvent('stateChange', this._STATE);
            },
            getExpandProperties: function() {
                return this._EXPANDPROPERTIES;
            },
            getMaxSize: function() {
                return o.safeFrame ? {
                    width: o.safeFrame.geom().win.w,
                    height: o.safeFrame.geom().win.h
                } : {
                    width: o.w.innerWidth,
                    height: o.w.innerHeight,
                    scale: o.w.innerWidth / o.w.document.documentElement.clientWidth
                };
            },
            setExpandProperties: function(properties) {
                this._EXPANDPROPERTIES = properties;
            }
        },
        expand: function(dimensions, url) {
            var v1 = /^1/.test(this.getVersion());
            var maxSize, finalOb, useCustomClose;
            if (this._BRIDGE === window.mraid) {
                if (dimensions.fullscreen || v1) {
                    if (v1 && dimensions.fullscreen) {
                        dimensions.width = this.getExpandProperties().width;
                        dimensions.height = this.getExpandProperties().height;
                        if (/Android/.test(navigator.userAgent) && dimensions.width > screen.width / window.devicePixelRatio) {
                            dimensions.width /= window.devicePixelRatio;
                            dimensions.height /= window.devicePixelRatio;
                        }
                    }
                    useCustomClose = typeof dimensions.useCustomClose !== 'undefined' ? dimensions.useCustomClose : true;
                    finalOb = {
                        width: Math.floor(dimensions.width),
                        height: Math.floor(dimensions.height),
                        useCustomClose: useCustomClose
                    };
                    if (!v1) {
                        finalOb.allowOrientationChange = typeof dimensions.allowOrientationChange !== 'undefined' ? dimensions.allowOrientationChange : true;
                        finalOb.forceOrientation = typeof dimensions.forceOrientation !== 'undefined' ? dimensions.forceOrientation : 'none';
                    }
                    this._call('setExpandProperties').call(this._BRIDGE, finalOb);
                    this._call('useCustomClose').call(this._BRIDGE, useCustomClose);
                    this._call('expand').call(this._BRIDGE, url);
                } else {
                    maxSize = this.getMaxSize();
                    dimensions.indentAcross = dimensions.width < maxSize.width ? (maxSize.width - dimensions.width) / 2 : dimensions.indentAcross;
                    dimensions.allowOffscreen = typeof dimensions.allowOffscreen !== 'undefined' ? dimensions.allowOffscreen : false;
                    for (var i in dimensions) {
                        if (typeof dimensions[i] === 'number') {
                            dimensions[i] = Math.floor(dimensions[i]);
                        }
                    }
                    this._call('setResizeProperties').call(this._BRIDGE, {
                        width: dimensions.width,
                        height: dimensions.height,
                        offsetX: dimensions.indentAcross,
                        offsetY: dimensions.indentDown,
                        customClosePosition: dimensions.customClosePosition || 'top-right',
                        allowOffscreen: dimensions.allowOffscreen
                    });
                    this._call('resize').call(this._BRIDGE);
                }
            } else if (this._BRIDGE === window.ormma) {
                this._call('setExpandProperties').call(this._BRIDGE, {
                    width: dimensions.width,
                    height: dimensions.height,
                    useCustomClose: typeof dimensions.useCustomClose === 'undefined' ? true : dimensions.useCustomClose
                });
                if (dimensions.fullscreen) {
                    this._call('expand').call(this._BRIDGE);
                } else {
                    this._call('resize').call(this._BRIDGE, dimensions.width, dimensions.height);
                }
            } else {
                this._call('expand').call(this._BRIDGE, dimensions, url);
            }
        },
        getExpandProperties: function() {
            return this._call('getExpandProperties').call(this._BRIDGE);
        },
        getMaxSize: function() {
            var ob, temp;
            if (/^2/.test(this.getVersion()) || !o.inApp) {
                ob = o.inApp ? this.getExpandProperties() : this.fallbackAPI.getMaxSize();
                if (!ob.width || typeof window.MMJS !== 'undefined') {
                    ob = this._call('getMaxSize').apply(this._BRIDGE, arguments);
                    if (!ob.width) {
                        ob = o.api.fallbackAPI.getMaxSize();
                    }
                }
                if (/android/i.test(navigator.userAgent) && /mydas\.mobi/.test(location.href)) {
                    ob.width = ob.width *= window.devicePixelRatio * 2;
                    ob.height = ob.height *= window.devicePixelRatio * 2;
                }
                return ob;
            } else {
                ob = this.getExpandProperties();
                if (!ob.width) {
                    ob = o.api.fallbackAPI.getMaxSize();
                }
                if (/mobile/i.test(navigator.userAgent)) {
                    if (o.api.getOrientation() % 180 !== 0 && o.api.getOrientation() !== -1 && ob.width < ob.height) {
                        temp = ob.width;
                        ob.width = ob.height;
                        ob.height = temp;
                    } else if (o.api.getOrientation() % 180 === 0 && ob.width > ob.height) {
                        temp = ob.width;
                        ob.width = ob.height;
                        ob.height = temp;
                    }
                }
                return ob;
            }
        }
    }
};
    (function() {
    var pID = "2505987", n = JSON.parse('[]'), w = window, c = function() {
        var r = w["ftClick_" + pID];
        var i = n.length;
        if (!r) {
            r = "";
            while (i--) {
                if (w["ftClick_" + n[i]]) {
                    r = w["ftClick_" + n[i]];
                    break;
                }
            }
        }
        return r;
    }(), q = "ftParams_" + pID;
    if (c && w[q].indexOf("click=") == -1) {
        c = c.indexOf("&") != -1 ? encodeURIComponent(c) : c;
        w[q] += "&click=" + c;
    }
})();

o.is = function platform(navigator) {
    var fn = function(p, v) {
        if (!v || !fn[p]) {
            return !!fn[p];
        }
        var eq, op = (/^\D+/.exec(v) || [ '' ]).pop(), comparison = new Function('a', 'b', 'return a' + (op || '==') + 'b'), currentParts = fn[p].split('.'), desiredParts = String(v).slice(String(v).search(/\d/)).split('.');
        for (var i = 0, m = desiredParts.length; i < m; i++) {
            eq = currentParts[i] === desiredParts[i];
            if (comparison(+currentParts[i], +desiredParts[i])) {
                if (!desiredParts[i + 1] || op.charAt(1) !== '=' || !eq) {
                    return true;
                }
            } else if (!desiredParts[i + 1] || op !== '>' && op !== '<' && !eq) {
                return false;
            }
        }
    }, getVersion = function(n) {
        return (RegExp(n + '[/ ](\\d+(?:[\\._]\\d+)*)').exec(u) || [ '' ]).pop().replace(/_/g, '.') || false;
    }, u = navigator.userAgent, p = navigator.platform, ios = p.slice(0, 2) === 'iP' && getVersion('OS'), ie = ~u.search(/MSIE|Trident|Edge/), android = !ie && getVersion('Android'), aosp = !!(~u.indexOf('; U;') || ~u.indexOf('Verson')) && android, chriOS = !ie && getVersion('ChriOS'), is = {
        mobile: !!(android || ios) || !!(ie && ~u.indexOf('Windows Phone')),
        android: !ie && android,
        ios: ios,
        windows: getVersion('Windows(?: NT| Phone(?: OS)?)?'),
        mac: !/like Mac OS/.test(u) && getVersion('Mac OS X'),
        linux: p.slice(0, 5) === 'Linux' && !android,
        chromeOS: getVersion('CrOS \\w+'),
        aosp: aosp,
        chrome: !ie && !aosp && (!!window.chrome && getVersion('Chrome')),
        firefox: getVersion('Firefox'),
        safari: !ie && !chriOS && navigator.vendor.slice(0, 5) === 'Apple' && getVersion('Version'),
        ie: !!ie && String(document.documentMode || getVersion('(?:MSIE|IEMobile|Edge)')),
        webkit: !ie && getVersion('AppleWebKit'),
        kindleFire: getVersion('Silk')
    };
    for (var i in is) {
        fn[i] = is[i];
    }
    return fn;
}(navigator);
    var data = {
    params:window.ftParams_2505987||'',
    guid:window.ftGUID_2505987||'',
    confID:window.ftConfID_2505987||'0',
    ftReturn: window.ftReturn_2505987||'',
    keyword:window.ftKeyword_2505987||'',
    ftId:window.ftId_2505987||'',
    ftImpId:window.ftImp2505987 && window.ftImp2505987.impID || '',
    campaignID: '76390',
    cID:'74946',
    pID:'2505987',
    creativeID:'1806280',
    exttrack:["https://pixel.mathtag.com/event/img?mt_id=1171480&mt_adid=126869&mt_exem=&mt_excl=&v1=&v2=&v3=&s1=&s2=&s3=&mt_nsync=1"],
    extscript:[""],
    clickTags: ['http://servedby.flashtalking.com/click/4/76390;2505987;1806280;210;[FT_CONFID]/?g=[FT_GUID]&random=[FT_RANDOM]&ft_width=728&ft_height=90&url=http://go.shoretel.com/boost-business-with-the-right-uc-solution?utm_campaign=JM%20Find%20Your%20Best%20Fit%20Campaign&utm_source=IDG&utm_medium=Display&utm_content=ebook'],
    statBaseURL: 'http://stat.flashtalking.com/reportV3/ft.stat?86788621-2505987;1806280;',
    centreAd: true,
    width:728,
    height:90,
    adType:'altimage'.toLowerCase(),
    altimg:'http://cdn.flashtalking.com/xre/250/2505987/1806280/image/1806280.gif',
    viewableImpressionURL: 'http://servedby.flashtalking.com/imp/4/76390;2505987;202;pixel;IDG;SHOR1BestFitQ4FY17IDGTNODContextualBNUS728x90Telecommuting/?',
    stump: 'http://servedby.flashtalking.com',
    altimghref:'http://servedby.flashtalking.com/click/4/76390;2505987;1806280;210;[FT_CONFID]/?g=[FT_GUID]&random=[FT_RANDOM]&ft_width=728&ft_height=90&url=http://go.shoretel.com/boost-business-with-the-right-uc-solution?utm_campaign=JM%20Find%20Your%20Best%20Fit%20Campaign&utm_source=IDG&utm_medium=Display&utm_content=ebook',
    divID:'ftdiv2505987',
    altimgID:'ftalt2505987',
    alttext:'Click here',
    iDeviceImp:'http://servedby.flashtalking.com/imp/4/76390;2505987;207;guid;IDG;SHOR1BestFitQ4FY17IDGTNODContextualBNUS728x90Telecommuting/?ft_guid=',
    w: window,
    adDisplayed: false,
    customPos: false,
    customPosFunc: function() {},
    eventListeners: {},
    cachedEvents: [],
    altimgtarget: '_blank',
    countOnDownload: o.is.mobile && 0,
    encodeClickCount: parseInt('0', 10) || 0,
    append: !!(window.ftImp2505987 && parseInt(window.ftImp2505987.jsAppend, 10) === 1),
    lockableOrientation: !!(window.screen && (screen.mozLockOrientation || screen.msLockOrientation || screen.lockOrientation || (screen.orientation && screen.orientation.lock))),
    altimgborder: '0',
    storeGUID: !!o.is.ios,
    servedby: /servedby\.flashtalking/.test(location.host),
    cdn: /(cdn|secure)\.flashtalking/.test(location.host),
    cdnSrc: 'http://cdn.flashtalking.com/frameworks/js/frame/index.html?g=',
    cdnGUID: 'http://cdn.flashtalking.com/frameworks/js/ftGUID.html?g=',
    secure: !!(location.protocol === 'https:' || /^https:/.test((document.getElementById('ftscript_m2505987') || {}).src) || window.qs && typeof qs.get === 'function' && /^https:/.test(qs.get('ifsrc',''))),
    scriptLocation: document.getElementById('ftscript_m2505987'),
    pageVisible: 'maybe',
    cssPrefix: (function(bStyle) {
        var pres = ['MozT', 'MsT', 'webkitT', 't'];
        var prefix = '';
        for (var i = pres.length - 1; i > -1; i--) {
            if (pres[i] + 'ransform' in bStyle) {
                prefix = pres[i].slice(0, pres[i].length - 1).toLowerCase();
                break;
            }
        }
        return !prefix || prefix === 't' ? '' : ('-' + prefix + '-');
    }(document.documentElement.style)),
    switchArray: ['altimg', 'altimghref', 'cdnSrc', 'cdnGUID', 'iDeviceImp', 'statBaseURL', 'viewableImpressionURL', 'cdnSrc', 'iDeviceImp']
};

        for(var i in data){
                o[i] = data[i];
        }

        window["ft" + data.pID] = o;

    // temp pagefold code
    (function(ft) {
        var ua = navigator.userAgent;
        var safari = /Safari/.test(ua) && !/Chrome/.test(ua) && !/Edge/.test(ua);
        ft.viewableConversion = "false" === "true";
        ft.viewableImpressionURL = setupViewableImpression(ft.stump + "/state/" + ft.pID + ";" + ft.creativeID + ";" + "[CONFID];271;[IMPRESSIONID]/?cachebuster=[RANDOM]");

        ft.fireRenderedImpression = function() {
            if (ft.viewableConversion) {

                if (!(safari) || ft.pageVisible !== 'no' && !ft.firedRenderedImpression) {
                    new Image().src = ft.replaceMacros(ft.viewableImpressionURL);
                    ft.firedRenderedImpression = true;
                }
            }
        };

        function setupViewableImpression(str) {
            var inserts = [{
                "param": "ft_product",
                "value": ft.productSKU || ""
            }, {
                "param": "ft_data",
                "value": ft.ftData || ""
            }];
            var i = inserts.length;

            while (i--) {
                str = ft.insertParam(str, inserts[i]);
            }

            return str[str.length - 1] === '&' ? str.substring(0, str.length - 1) : str;
        }
    }(o));

    //--start extensions


    //--end extensions
    o.init();

}());