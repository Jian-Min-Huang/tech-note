(function() {
    var _protocol = "//";
    var _domain = "tw-gmtdmp.mookie1.com";
    var _path = "/t/v2/";
    var _event = "learn";
    var _params = getParams(getQuery("tagr_lib_learn_tw_v3.js"));
    setDomainAndUrl();
    setSrcId();
    createImageRequest();

    function createImageRequest() {
        var image = document.createElement("img");
        image.src = encodeURI(_protocol + _domain + _path + _event + "?" + createParamList(_params) + "&src.rand=" + Math.floor(Math.random() * 9999999999));
        image.style.width = "0";
        image.style.height = "0";
        image.style.border = "0";
        image.style.display = "none";
        createDivTag(image)
    };

    function setSrcId() {
        if (_params["id"]) {
            _params["src.id"] = _params["id"];
            delete(_params["id"])
        }
    };

    function createDivTag(image) {
        var theBody = document.getElementsByTagName("body")[0];
        var theDiv = document.createElement("div");
        theDiv.id = "tagrdiv";
        theDiv.style.width = "0";
        theDiv.style.height = "0";
        theDiv.style.overflow = "hidden";
        theDiv.style.position = "absolute";
        theDiv.style.display = "none";
        theDiv.appendChild(image);
        theBody.appendChild(theDiv)
    };

    function createParamList(params) {
        var paramList = [];
        for (var item in params) {
            if (params[item]) {
                paramList.push(item + "=" + params[item])
            }
        }
        return paramList.join('&')
    };

    function getQuery(scriptName) {
        var query;
        if (typeof document.currentScript !== undefined && document.currentScript != null) {
            query = document.currentScript.src.replace(/^[^\?]+\?/, '')
        } else {
            var scripts = document.getElementsByTagName('script');
            for (var index = 0; index < scripts.length; index++) {
                if (scripts[index].src.indexOf(scriptName) != -1) {
                    query = scripts[index].src.replace(/^[^\?]+\?/, '')
                }
            }
        }
        return query
    };

    function getParams(query) {
        var params = new Object();
        if (query) {
            var pairs = query.split(/[;&]/);
            for (var index = 0; index < pairs.length; index++) {
                var keyValuePair = pairs[index].split('=');
                if (keyValuePair && keyValuePair.length == 2) {
                    var key = decodeURIComponent(keyValuePair[0]).toLowerCase();
                    var value = decodeURIComponent(keyValuePair[1]);
                    value = value.replace(/\+/g, ' ');
                    params[key] = value
                }
            }
        }
        return params
    };

    function setDomainAndUrl() {
        var referrer = getDocumentReferrer();
        _params["src.domain"] = referrer.host;
        _params["src.url"] = referrer.path
    };

    function DomainInfo(host, path) {
        this.host = host;
        this.path = path
    };

    function getDocumentReferrer() {
        try {
            if (parent !== window) {
                return calculateDocumentReferrer()
            } else {
                return new DomainInfo(encodeURIComponent(location.host), encodeURIComponent(location.pathname))
            }
        } catch (exception) {
            return calculateDocumentReferrer()
        }
    };

    function calculateDocumentReferrer() {
        try {
            if ((window.location.ancestorOrigins) && (window.location.ancestorOrigins.length > 1)) {
                return new DomainInfo(window.location.ancestorOrigins[window.location.ancestorOrigins.length - 1], '/')
            } else {
                return getDomainInfoFromDocument()
            }
        } catch (err) {
            return getDomainInfoFromDocument()
        }
    };

    function getDomainInfoFromDocument() {
        if (document.referrer.length > 0) {
            return new DomainInfo(document.referrer.split('/')[2], document.referrer.substr(document.referrer.indexOf(document.referrer.split('/')[2]) + document.referrer.split('/')[2].length))
        } else {
            return new DomainInfo(encodeURIComponent(location.host), encodeURIComponent(location.pathname))
        }
    }
})();