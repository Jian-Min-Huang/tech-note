var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var positionDataTag = "positiondata";

// Used for answers (runs client side) and used for static itjobs header/footer
var adUnitIdsMap = {
    'cfo': '/8456/IDG.US_E_CFOWorld.com',
    'pcw': '/8456/IDG.US_CSMB_PCWorld.com',
    'cio': '/8456/IDG.US_E_CIO.com',
    'cit': '/8456/IDG.US_E_CITEworld.com',
    'cso': '/8456/IDG.US_E_CSOOnline.com',
    'grb': '/8456/IDG.US_CSMB_Greenbot.com',
    'itn': '/8456/IDG.US_E_ITNews.com',
    'jvw': '/8456/IDG.US_E_JavaWorld.com',
    'mw' : '/8456/IDG.US_CSMB_Macworld.com',
    'nww': '/8456/IDG.US_E_NetworkWorld.com',
    'th' : '/8456/IDG.US_CSMB_TechHive.com',
    'ans': '/8456/IDG.US_E_IDGAnswers.com',
    'ifw': '/8456/IDG.US_E_Infoworld.com',
    'itw': '/8456/IDG.US_E_ITworld.com',
    'ctw': '/8456/IDG.US_E_Computerworld.com'
};

//IDGAnswers.com needs this to overwrite the ad unit id
function getSrcCookie() {
    var nameEQ = "src=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function isElementAboveTheFold(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
function isElementInViewport (elementId) {
    var el = document.getElementById(elementId);
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();
    
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

function isVisible(node) {
    // Am I visible?
    // Height and Width are not explicitly necessary in visibility detection, the bottom, right, top and left are the
    // essential checks. If an image is 0x0, it is technically not visible, so it should not be marked as such.
    // That is why either width or height have to be > 0.
    var rect = node.getBoundingClientRect();
    return (
        (rect.height > 0 || rect.width > 0) &&
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
//to detect if the tab is visible or not (for ad refresh)
var isTabVisible = (function(){
	var stateKey, eventKey, keys = {
		hidden: "visibilitychange",
		webkitHidden: "webkitvisibilitychange",
		mozHidden: "mozvisibilitychange",
		msHidden: "msvisibilitychange"
	};
	for (stateKey in keys) {
		if (stateKey in document) {
			eventKey = keys[stateKey];
			break;
		}
	}
	return function(c) {
		if (c) {
			document.addEventListener(eventKey, c);
			//document.addEventListener("blur", c);
			//document.addEventListener("focus", c);
		}
		return !document[stateKey];
	}
})();

//isTabVisible(function(){
	//console.log(new Date, '1 - visible ?', isTabVisible());
//});

function buildPositionData(adposition) {
    if (adLayer && adLayer["itemType"]) {
        var type = adLayer["itemType"];
        var result = type + "_" + IDG.DEVICE.type + "_" + adposition;
        IDG.GPT.log(positionDataTag + " = " + result);
        return result;
    }
}

var IDG = IDG || {};
IDG.GPT = {
    unitName: "",
    localIsMoble: false,
    isSlideshow: false,
    isSRA: true,
    otherAds:{},
    googleCommandPush: function(functionToExecute, arg1, arg2, arg3) {
        googletag.cmd.push(function() {
            functionToExecute(arg1, arg2, arg3);
        });
    },
    addOtherAd: function(key, value) {
        IDG.GPT.otherAds[key] = value;
    },
    getOtherAds: function(delimiter) {
        return IDG.GPT.getDelimiterData(IDG.GPT.otherAds, delimiter);
    },
    extIMUCounter: 1,
    addExtIMU: function() {
        IDG.GPT.extIMUCounter = IDG.GPT.extIMUCounter + 1;
        IDG.GPT.addOtherAd('imu' + IDG.GPT.extIMUCounter, true);
    },
    trackOmniture: function() {
        if (typeof(s) != 'undefined') {
            if (typeof(s.prop41) != 'undefined') {
                let currentSlotSet = IDG.GPT.getDisplayedAds(',') + ',' + IDG.GPT.getOtherAds(',');
                if (s.prop41 != currentSlotSet) {
                    s.linkTrackEvents = s.events = "event38";
                    s.linkTrackVars = "prop41,events";
                    s.prop41 = currentSlotSet;
                    s.event38 = currentSlotSet;
                    s.tl(true, 'o', 'Article DRR IMUs:' + IDG.GPT.getOtherAds(','));
                }
            }
        }
    },
    IMUCounter: 1,
    getIMUSlotName: function() {
        return "imu" + IDG.GPT.IMUCounter;
    },
    getDelimiterData: function(dataSet, delimiter) {
        let delimiterData = "";
        for (let data in dataSet) {
            delimiterData += data + delimiter;
        }
        return delimiterData.slice(0, delimiterData.lastIndexOf(delimiter));
    },
    modules:{},
    addModule: function(key, value) {
        IDG.GPT.modules[key] = value;
    },
    getModules: function(delimiter) {
        return IDG.GPT.getDelimiterData(IDG.GPT.modules, delimiter);
    },
    displayedads:{},
    addDisplayedAd: function(key, value) {
        IDG.GPT.displayedads[key] = value;
    },
    getDisplayedAds: function(delimiter) {
        return IDG.GPT.getDelimiterData(IDG.GPT.displayedads, delimiter);
    },
    lazyloadedads:{},
    addLazyloadedAd: function(key, value) {
        IDG.GPT.lazyloadedads[key] = value;
    },
    getLazyloadedAds: function(delimiter) {
        return IDG.GPT.getDelimiterData(IDG.GPT.lazyloadedads, delimiter);
    },
    getLazyAdCode: function() {
        var adString = "<code type=\"text\/javascript\">" +
            "<!--IDG.GPT.IMUCounter = IDG.GPT.IMUCounter + 1;IDG.GPT.addDisplayedAd(IDG.GPT.getIMUSlotName(), \"true\");" +
            "document.write('<div id=\"' +IDG.GPT.getIMUSlotName() + '\" class=\"ad-container\">');" +
            "IDG.GPT.defineGoogleTagSlot(IDG.GPT.getIMUSlotName(), [[300,250],[300,50]]);" +
            "document.write('</div>');" +
            "$('#' + IDG.GPT.getIMUSlotName()).responsiveAd({screenSize:'971 1115', scriptTags: []});" +
            "if (Object.keys(IDG.GPT.companions).length > 0) { IDG.GPT.display(IDG.GPT.getIMUSlotName());}//--></code>";
        return adString;
    },
    getLazyAdCodeRefreshed: function() {
    	var adString2 = "<code type=\"text\/javascript\">" +
	        "<!--IDG.GPT.IMUCounter = IDG.GPT.IMUCounter + 1;IDG.GPT.addLazyloadedAd(IDG.GPT.getIMUSlotName(), \"true\");" +
	        "document.write('<div id=\"' +IDG.GPT.getIMUSlotName() + '\" class=\"ad-container\">');" +
	        "IDG.GPT._defineGoogleTagSlot(IDG.GPT.getIMUSlotName(), [[300,250]], true);" +
	        "document.write('</div>');" +
	        "$('#' + IDG.GPT.getIMUSlotName()).responsiveAd({screenSize:'971 1115', scriptTags: []});" +
	        "//--></code>";
	    return adString2;
    },
    slots: {},
    slotsOutOfPage: {},
    slotDefinitions: {},
    companions: {},
    refreshAd: function(slotName) {
        if(typeof(slotName) == "undefined") {
            googletag.pubads().refresh();
        }
        else {
            googletag.pubads().refresh([IDG.GPT.slotDefinitions[slotName]]);
        }
    },
    addSlot: function(key, value) {
        IDG.GPT.slots[key] = value;
    },
    addSlotOutOfPage: function(key, value) {
        IDG.GPT.addSlot(key, value);
        IDG.GPT.slotsOutOfPage[key] = value;
    },
    addCompanion: function(slotName, slotAdSize, wrapperSelector) {
        IDG.GPT.companions[slotName] = {
            "size": slotAdSize,
            "wrapperSelector": wrapperSelector || "#" + slotName
        };
    },
    targets: {},
    addTarget: function(key, value) {
        IDG.GPT.targets[key] = value;
    },
    defineGoogleTagSlot: function(slotName, slotAdSize, adSlotRefreshes) {
        if (IDG.GPT.unitName != null && IDG.GPT.unitName != "" && slotName != "") {
            IDG.GPT.addDisplayedAd(slotName, "true");
            IDG.GPT.googleCommandPush(IDG.GPT._defineGoogleTagSlot, slotName, slotAdSize, adSlotRefreshes);
        }
    },
    _defineGoogleTagSlot: function(slotName, slotAdSize, adSlotRefreshes) {
    	try {
            if (IDG.GPT.adIsContained(slotName) || !IDG.GPT.isSRA) {
		        IDG.GPT.slotDefinitions[slotName] = googletag.defineSlot(IDG.GPT.unitName, slotAdSize, slotName).addService(googletag.pubads());
		       // IDG.GPT.log("Inside _defineGoogleTagSlot with " + slotName);
		        if (adSlotRefreshes) {
		        	var refreshCounter = 0;
		            setInterval(function() {
		            	if (isTabVisible()) { // if tab is visible...
			            	if (isVisible(document.getElementById(slotName)) && refreshCounter < 4) { // if element is visible on page and if refresh limit hasn't been reached
			                	//IDG.GPT.log("YES is visible: Inside isVisible(document.getElementById(slotName) = " + slotName);
			                    googletag.pubads().refresh([IDG.GPT.slotDefinitions[slotName]]);
			                    refreshCounter++;
			                    console.log("refreshCounter for "+slotName+"="+refreshCounter);
			                }
		            	}
		            }, 30000);
                }
            }
        }
        catch (e){
            IDG.GPT.log("_defineGoogleTagSlot: " + e);
        }
    },
    displayGoogleTagSlot: function(slotName) {
        if (IDG.GPT.adIsContained(slotName) || !IDG.GPT.isSRA) {
            if (IDG.GPT.unitName != null && IDG.GPT.unitName != "" && slotName != "") {
                IDG.GPT.googleCommandPush(IDG.GPT._displayGoogleTagSlot, slotName);
            }
        }
    },
    _displayGoogleTagSlot: function(slotName) {
        googletag.display(slotName);
    },
    defineAllGoogleTagSlots: function() {
        if (IDG.GPT.unitName != null && IDG.GPT.unitName != "") {
            IDG.GPT.googleCommandPush(IDG.GPT._defineAllGoogleTagSlots, IDG.GPT.slots);
        }
    },
    _renderPos: function(slotName){
        let val=$thm.pos_values()[slotName.replace(/-/g,"_")];
        if (val) {
            let size = IDG.GPT.getSize($thm.deviceWidth());
            return val[size];
        }
        else return slotName;
    },
    _defineAllGoogleTagSlots: function(slotArray) {
        try {
            slotArray = IDG.GPT.filterSlotArray(slotArray);
            for (let slotName in slotArray) {
                if (IDG.GPT.slots[slotName] != null && IDG.GPT.slots[slotName] != "") {
                    var isCompanion = typeof IDG.GPT.companions[slotName] != 'undefined';
                    if (IDG.GPT.slotsOutOfPage[slotName] !== "undefined" && IDG.GPT.slotsOutOfPage[slotName]) {
                        IDG.GPT.log(slotName + ": isCompanion?" + isCompanion + " is Out Of Page");
                        IDG.GPT.slotDefinitions[slotName] = googletag.defineOutOfPageSlot(IDG.GPT.unitName, slotName).
                            setTargeting("pos", IDG.GPT._renderPos(slotName)).
                            setTargeting(positionDataTag, buildPositionData(slotName)).
                            addService(googletag.pubads());
                    }
                    else {
                        IDG.GPT.log(slotName + ": isCompanion?" + isCompanion + " is NOT OUT OF PAGE");
                        //needed now that gpt-skin isn't an out-of-page ad slot - it used to get the pos targeting from that conditional
                        if (slotName == 'gpt-skin' || slotName == 'inread') {
                            if (isCompanion) {
                                IDG.GPT.slotDefinitions[slotName] = googletag.defineSlot(IDG.GPT.unitName, IDG.GPT.companions[slotName].size, slotName).
                                    addService(googletag.companionAds()).
                                    setTargeting("pos", IDG.GPT._renderPos(slotName)).
                                    setTargeting(positionDataTag, buildPositionData(slotName)).
                                    addService(googletag.pubads());
                            } else {
                                IDG.GPT.slotDefinitions[slotName] = googletag.defineSlot(IDG.GPT.unitName, IDG.GPT.slots[slotName], slotName).
                                    setTargeting(positionDataTag, buildPositionData(slotName)).
                                    setTargeting("pos", IDG.GPT._renderPos(slotName)).
                                    addService(googletag.pubads());
                            }
                        }
                        else {
                            if (isCompanion) {
                                IDG.GPT.slotDefinitions[slotName] = googletag.defineSlot(IDG.GPT.unitName, IDG.GPT.companions[slotName].size, slotName).
                                    addService(googletag.companionAds()).
                                    setTargeting(positionDataTag, buildPositionData(slotName)).
                                    setTargeting("pos", IDG.GPT._renderPos(slotName)).
                                    addService(googletag.pubads());
                            } else {
                                IDG.GPT.slotDefinitions[slotName] = googletag.defineSlot(IDG.GPT.unitName, IDG.GPT.slots[slotName], slotName).
                                    setTargeting(positionDataTag, buildPositionData(slotName)).
                                    setTargeting("pos", IDG.GPT._renderPos(slotName)).
                                    addService(googletag.pubads());
                            }
                        }
                    }
                }
            }
            // if (IDG.GPT.slotDefinitions(slotName)) {
            //     googletag.display(slotName);
            //     googletag.pubads().enableServices();
            // }
        }
        catch (e) {
            console.log("IDG.GPT Not Available");
        }

    },
    setAllGoogleTagTargetings: function() {
        IDG.GPT.googleCommandPush(IDG.GPT._setAllGoogleTagTargetings);
    },
    _setAllGoogleTagTargetings: function() {
        for (var targetName in IDG.GPT.targets) {
            if (IDG.GPT.targets[targetName] != null && IDG.GPT.targets[targetName] != "") {
                googletag.pubads().setTargeting(targetName, IDG.GPT.targets[targetName]);
            }
        }
    },
    initGoogleTagService: function() {
        IDG.GPT.googleCommandPush(IDG.GPT._initGoogleTagService);
    },
    _initGoogleTagService: function() {
        googletag.pubads().enableAsyncRendering();
        googletag.pubads().collapseEmptyDivs();
        if (IDG.GPT.isSRA) {
        	googletag.pubads().enableSingleRequest();
        }
        if (Object.keys(IDG.GPT.companions).length > 0) {
            googletag.companionAds().setRefreshUnfilledSlots(false); // do not backfill if no companion is found
            googletag.pubads().disableInitialLoad(); // csmb had this ON //defer loading of the ads until after page load
            googletag.pubads().enableVideoAds();
        }
        if (typeof pbjs != "undefined") {

            pbjs.que.push(function() {
                /* Set query string targeting on all GPT ad units. The logic for deciding query strings is described in the section Configure AdServer Targeting. Note that this function has to be called after all ad units on page are defined.
                 */
                pbjs.setTargetingForGPTAsync();
            });
        }
        googletag.pubads().addEventListener('slotRenderEnded', function (event) {
        	if (event.isEmpty) {	// If the ad is empty
        		IDG.GPT.log('AD IS EMPTY - Get slot element by ID: ' + event.slot.getSlotElementId());
        		//$('#'+event.slot.getSlotElementId()).closest('.next-page.lazyload_ad_article').css('display', 'none');
        		$('#'+event.slot.getSlotElementId()).closest('.next-page.lazyload_ad_article').removeClass('apart ad');
        	} else {
        		IDG.GPT.log('Not empty AD - Get slot element by ID: ' + event.slot.getSlotElementId());
        	}
        });
        googletag.enableServices();
        IDG.GPT.log(".....enabled services.....");

    },
    _responsiveAdDisplay: function(id) {
        let currentAd = IDG.GPT.slotDefinitions[id];
        if (currentAd != undefined) {
            currentAd.setTargeting("pos", IDG.GPT._renderPos(id))
                .setTargeting(positionDataTag, buildPositionData(id));
            googletag.display(id);
        }
        else {
            IDG.GPT.log("currentAd was undefined so no slot Definition for " + id);
        }
    },
    getParameterValue: function(paramString, paramName) {
        let paramValue = "";
        if (paramString && paramString != 'undefined') {
            let searchChars = "[\\?&]"+paramName+"=([^&#]*)";
            let regularExp = new RegExp(searchChars);
            let searchResults = regularExp.exec(paramString);
            if (searchResults != null && searchResults.length >= 1)
                paramValue = searchResults[1];
        }
        return paramValue;
    },
    getReferrerDomain: function() {
        let referrerDomain = "";
        if (document.referrer && document.referrer != 'undefined') {
            let referrerString = document.referrer;
            referrerDomain = referrerString.match(/^http[s]?:\/\/[a-zA-Z0-9-_\.]+[\:]?[0-9]*?\//);
        }
        return String(referrerDomain);
    },
    getSearchEngineQuery: function() {
        let sQuery = "";
        let referrerDomain = IDG.GPT.getReferrerDomain();
        if (referrerDomain != "") {
            let documentReferrer = document.referrer;
            if (referrerDomain.indexOf("google.com") != -1) {
                documentReferrer = documentReferrer.replace("#q=", "?q=");
                sQuery = IDG.GPT.getParameterValue(documentReferrer, "q");
            }
            else if (referrerDomain.indexOf("bing.com") != -1)
                sQuery = IDG.GPT.getParameterValue(documentReferrer, "q");
            else if (referrerDomain.indexOf("yahoo.com") != -1)
                sQuery = IDG.GPT.getParameterValue(documentReferrer, "p");
            else if (referrerDomain.indexOf("nww.com") != -1) {
                sQuery = IDG.GPT.getParameterValue(documentReferrer, "hpg1");
            }
        }
        sQuery = sQuery.replace("+", " ");
        return sQuery;
    },
    userAgentValue: function() {
        let browser = "";
        if (/(iPad|iPhone)/.test(navigator.userAgent)) {
            browser = RegExp.$1;
        }
        return browser;
    },
    setIDGExtraTargetings: function() {
        try {
            IDG.GPT.addTarget("referrer", IDG.GPT.getReferrerDomain());

            // adding "fireplace" targeting for homepage and index pages
            if (IDG.GPT.getPlace()=="homepage"||IDG.GPT.getPlace()=="index") {
                IDG.GPT.addTarget("fireplace", "true");
            }
            
            var temp_browser=navigator.userAgent;
            if(temp_browser!=null && temp_browser.indexOf('@') == -1 && temp_browser.indexOf('%40') == -1
                && temp_browser.indexOf('%2540') == -1 ){
                IDG.GPT.addTarget("browser", temp_browser);
            }

            var tmp_squery=IDG.GPT.getSearchEngineQuery();
            if(temp_squery!=null && tmp_squery.indexOf('@') == -1 && tmp_squery.indexOf('%40') == -1
                && tmp_squery.indexOf('%2540') == -1){
                IDG.GPT.addTarget("squery", IDG.GPT.getSearchEngineQuery());
            }

            IDG.GPT.addTarget("nlsource", IDG.GPT.getParameterValue(window.location.href, "source"));

            if (document.cookie.indexOf("nsdr") > -1)
                IDG.GPT.addTarget("insiderauth", "yes");
            else
                IDG.GPT.addTarget("insiderauth", "no");

            IDG.GPT.addTarget("env", IDG.GPT.getParameterValue(window.location.href, "env"));

            if (typeof(isMobile) != "undefined")
                IDG.GPT.localIsMoble = isMobile;
            if (IDG.GPT.localIsMoble) {
                IDG.GPT.addTarget("mobile", "true");
            }

            if (typeof(dogfish_type) != "undefined" && dogfish_type != "(none)") {
                IDG.GPT.addTarget("type", dogfish_type);
            }
        } catch(e) {
            //console.log(e);
        }
    },
    getQsVal: function(name) {
        if (window.location.search != "") {
            let qs = window.location.search.substring(1);
            let pairs = qs.split("&");
            for (let i=0;i<pairs.length;i++) {
                let pair = pairs[i].split("=");
                if (pair[0] == name) {
                    return pair[1];
                    break;
                }
            }
        }
        return "";
    },
    getAdUnitIdBySrc: function(src) {
        let rtnValue = adUnitIdsMap["ans"];
        if (src) {
            let adUnitIdBySrc = adUnitIdsMap[src];
            if (adUnitIdBySrc) rtnValue = adUnitIdBySrc;
        }
        return rtnValue;
    },
    isValidSource: function(src) {
        let rtnValue = false;
        if (src) {
            if (adUnitIdsMap[src]) rtnValue = true;
        }
        return rtnValue;
    },
    addBiddingParams: function(name, param){
        IDG.GPT.params=IDG.GPT.params || {};
        IDG.GPT.params[name]=param;
    },
    backfillCompanionIfEmpty: function(slotName) {
        // if slot hasn't been filled as a companion, refresh to backfill with another ad
        // if (IDG.GPT.companions && IDG.GPT.companions.hasOwnProperty(slotName) && googletag.pubadsReady && !$.trim($(IDG.GPT.companions[slotName].wrapperSelector).html())) {
        //     IDG.GPT.refreshAd(slotName);
        // }
    },
    backfillCompanionIfAllEmpty: function(slotName) {
        // if (IDG.GPT.companions && Object.keys(IDG.GPT.companions).length > 0 && googletag.pubadsReady) {
        //     var allCompanionsEmpty = true;
        //     $.each(IDG.GPT.companions, function(k, v) {
        //         if($.trim($(v.wrapperSelector).html())) {
        //             allCompanionsEmpty = false;
        //             return false;
        //         }
        //     });
        //     if (allCompanionsEmpty) {
        //         IDG.GPT.refreshAd(slotName);
        //     }
        // }
    },
    filterSlotArray: function(slotArray) {
        let returnArray={};
        for (slot in slotArray){
            if (IDG.GPT.adIsContained(slot) || !IDG.GPT.isSRA) {
                returnArray[slot]=slot;
            }
        }
        //IDG.GPT.slotDefinitions = returnArray;
        return returnArray;
    },
    getPlace:function(){
        let url = document.URL;
        if (url.toString().indexOf("article")!=-1) {
            if ($('#slideshowCarousel').length) return "slideshow";
            else return "article";
        }
        else if (url.toString().indexOf("slideshow")!=-1) return "slideshow";
        else if (url.toString().indexOf("index")!=-1) return "index";
        else if (url.toString().indexOf("category")!=-1){
            if ($('.tentpole').length) return "tentpole";
            else return "index";
        }
        else if (url.toString().indexOf("resource")!=-1) return "resources";
        else if (url.toString().indexOf("video")!=-1) {
            if (/\/video\/\d/.test(url.toString())) return "video";
            else return "video_index";
        }
        else return "homepage";
    },
    adIsContained: function(slot){
        let place = IDG.GPT.getPlace();
        let filter = IDG.GPT.getFilter($thm.deviceWidth(), place);
        if (filter.indexOf(slot)>-1) return true;
        else return false;
    },
    getFilter:function(width, place){
        let array=$thm.ads();
        let size = IDG.GPT.getSize(width);
        return array[place][size];
    },
    getSize:function(width){
        if (width > $thm.deviceBreakpoints.desktop) {
            //also tablet landscape
            return "desktop";
        }
        else if (width > $thm.deviceBreakpoints.mobile) {
            return "tablet";
        }
        else {
            return "mobile";
        }
    },
    getUrlParameter : function getUrlParameter(sParam) {
        let sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    },
    /* GPT Logger */
    log: function (text){
        let log_on=this.getUrlParameter("log");
    	//let log_on="TRUE";
        if (log_on && log_on.toUpperCase()=="TRUE") {
            console.log("%cIDG.GPT.LOG%c - %s", "background:  #ff9900; color: #ffe6cc; font-weight: bold; padding: 3px", "", text);
        }
    }
};

// IDG.GPT.dfpAdManager Keeps track of what ad sizes already present on this page
// seperate counters for Above and Below the Fold
IDG.GPT.dfpAdManager = {
    "constructor" : IDG.GPT.dfpAdManager,
    "init" : function(){
        this.adsizes = {};
        this.adsizes.atf = {};
        this.adsizes.btf = {};
    },
    "push" : function(key, fold){ // add to adsizes, increment if already there
        if(this.has(key, fold))
        {
            this.adsizes[fold + ''][key + ''] = this.adsizes[fold + ''][key + ''] + 1;
        }
        else
        {
            this.adsizes[fold + ''][key + ''] = 1;
        }
    },
    "has" : function(key,fold){
        if(this.adsizes[fold+''].hasOwnProperty(key))
        {
            return true;
        }
        return false;
    },
    "get" : function(key, fold) {
        return this.adsizes[fold][key];
    },
    "all" : function(fold) {
        if(fold == 'atf' || fold == 'btf')
        {
            return this.adsizes[fold];
        }
        return this.adsizes;
    },
    "getCounter" : function(sizes, fold){
        // check how many sizes already there
        let counter = 1;
        for (let i = 0; i < sizes.length; i++) {
            // getWidth() and getHeight() are methods on the object return from the googletag.pubads()
            let key = sizes[i].getWidth() + "x" + sizes[i].getHeight();
            // add sizes
            this.push(key, fold);
            // try for a count
            let c = this.get(key, fold);
            // ads can have multiple sizes,
            // irrespective of their order on the page
            // avoid resetting counter to a lower number
            if(c > counter){
                counter = c;
            }
        }
        return counter;
    }
};

/* Responsive ads  */
(function($){
    $.fn.responsiveAd = function(options) {
        let opts = $.extend({
            "screenSize": 'all',
            "counter" : 1
        },options);

        this.placeAds = function(screenSize) {
            let id = this.attr('id');
            let placeAd = true;
            let debugmsg = 'placeAd:' + placeAd + ", screenSize:" + screenSize + ", id:" + id;
            IDG.GPT.log("RESPONSIVE AD: " + debugmsg);
            if (placeAd == true) {
                let targetElement = document.getElementById(id);
                if (targetElement) {
                    // NOT USED SINCE SRA
                    // var fold = 'btf'; // defaults to BelowTheFold
                    // if (opts.forceFold != undefined) { // can force a fold by setting opts.forceFold
                    //     fold = opts.forceFold;
                    // }
                    // else if (true === isElementAboveTheFold(targetElement)){
                    //     fold = 'atf';
                    // }
                    // Grab reference to defined slot inside func scope sent to googletag.cmd.push
                    IDG.GPT.googleCommandPush(IDG.GPT._responsiveAdDisplay, id);

                } else {
                    console.log('Looking for ' + id + ', but no element found');
                }
            }
        }
        return this.placeAds(opts.screenSize);
    };
})(jQuery);