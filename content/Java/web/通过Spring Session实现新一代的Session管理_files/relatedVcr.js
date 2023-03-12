var VCRLocationGA = {
    "RIGHTBAR_BOX_TYPE1_TOP" : "top",
    "RIGHTBAR_BOX_TYPE1_BOTTOM ": "bottom",
    "RIGHTBAR_BOX_TYPE2_TOP" : "top",
    "RIGHTBAR_BOX_TYPE2_BOTTOM" : "bottom"
};

var VCR = {

	loadAllVcrs : function(communityIds, topicIds) {
		window.vcrsLoaded = false;
		$.ajax({
			type : "POST",
			url  : InfoQConstants.countryCode + "/vendorcontent/loadVcrs.action",
			dataType : 'json',
			data : {
				'communityIds' : communityIds,
				'topicIds' : topicIds
			},
			success : function(result){
				if(result.vcrs != null && result.vcrs.length > 0)
				{
					window.vcrList = result.vcrs;
					window.excludedVcrs = [];
					window.vcrsLoaded = true;
				} else {
                    window.vcrList = [];
                    window.excludedVcrs = [];
                    window.vcrsLoaded = true;
				}
			},
			error : function(xhr, errmsg) {
				console.log("Error!!! " + errmsg);
			}
		});
	},

	filterByCover : function(maxItems, toFilter) {
		var filteredVcrs = toFilter.filter(function(vcr){
			return window.excludedVcrs.indexOf(vcr) == -1 &&
				vcr.coverImagePath != undefined &&
				vcr.coverImagePath != null &&
				vcr.coverImagePath != "";
		});
		filteredVcrs.sort(function() { return 0.5 - Math.random() });
        if(maxItems < 0 || filteredVcrs.length <= maxItems) {
            return filteredVcrs;
        }
		return filteredVcrs.slice(0, maxItems);
	},

	filterByCompany : function(company, toFilter) {
		return toFilter.filter(function(vcr){
			return window.excludedVcrs.indexOf(vcr) == -1 &&
				vcr.company == company;
		});
	},

	filterByTopic : function(topicId, toFilter) {
		return toFilter.filter(function(vcr){
			return window.excludedVcrs.indexOf(vcr) == -1 &&
				vcr.categories.indexOf(parseInt(topicId)) > -1;
		});
	},

	filterByTopics : function(topics, toFilter) {
		var topicIds = topics.split(",");
		return toFilter.filter(function(vcr){
			if(window.excludedVcrs.indexOf(vcr) != -1) {
				return false;
			}
			for(var index in topicIds) {
				if(vcr.categories.indexOf(parseInt(topicIds[index])) > -1) {
					return true;
				}
			}
			return false;
		});
	},

    filterByTopicsWithoutList : function(topics, toFilter, withoutList) {
        var topicIds = topics.split(",");
        return toFilter.filter(function(vcr){
            if(window.excludedVcrs.indexOf(vcr) != -1 || withoutList.indexOf(vcr) != -1) {
                return false;
            }
            for(var index in topicIds) {
                if(vcr.categories.indexOf(parseInt(topicIds[index])) > -1) {
                    return true;
                }
            }
            return false;
        });
    },

	addToExcludedList : function(vcrs) {
		window.excludedVcrs = window.excludedVcrs.concat(vcrs);
	},

	addIdstoExcludeList : function(vcrIds) {
		if( vcrIds != "") {
			var excludedIds = vcrIds.split(",");
			for(var vcr in window.excludedVcrs) {
				if(excludedIds.indexOf(window.excludedVcrs[vcr].id.toString()) > -1) {
					VCR.addToExcludedList(vcr);
				}
			}
		}
	},

	getRandomVcrs : function(maxItems, fromList) {
		var filteredVcrs = fromList.filter(function(vcr){
			return window.excludedVcrs.indexOf(vcr) == -1 && vcr.categories != null && vcr.categories.length > 0;
		});
		if(filteredVcrs.length <= maxItems) {
			return filteredVcrs;
		}
        filteredVcrs = VCR.shuffleArray(filteredVcrs);
		return filteredVcrs.slice(0, maxItems);
	},

    shuffleArray : function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
	},

	getByTopicsAndCommunities : function(fromList, topicIds, communityIds, maxItems, withCover, company) {
		var result = [];
		var filteredByTopic = fromList;
		if(topicIds != "") {
            filteredByTopic = VCR.filterByTopics(topicIds, fromList);
		}
		if(withCover) {
			filteredByTopic = VCR.filterByCover(-1, filteredByTopic);
		}
		if(company != null) {
            filteredByTopic = VCR.filterByCompany(company, filteredByTopic);
		}
		if(filteredByTopic.length < maxItems) {
			var remainingItems = maxItems - filteredByTopic.length;
			var filteredByCommunities = fromList;
			if(communityIds != "") {
                filteredByCommunities = VCR.filterByTopicsWithoutList(communityIds, fromList, filteredByTopic);
			}
            if(withCover) {
                filteredByCommunities = VCR.filterByCover(-1, filteredByCommunities);
            }
            if(company != null) {
                filteredByCommunities = VCR.filterByCompany(company, filteredByCommunities);
            }
			if(filteredByCommunities.length < remainingItems) {
				result = filteredByTopic.concat(filteredByCommunities);
			} else {
				result = filteredByTopic.concat(VCR.getRandomVcrs(remainingItems, filteredByCommunities));
			}
		} else {
			result = VCR.getRandomVcrs(maxItems, filteredByTopic);
		}
		return result;
	},
	isVcrSponsored : function(sponsoredLinks, vcr) {
		for(var index in sponsoredLinks) {
			var item = sponsoredLinks[index];
			if(item.target != null && item.target != "") {
				if(item.target.indexOf("show.action?vcr=" + vcr.id) != -1) {
					return true;
				} else if(item.target == vcr.sponsoredPath) {
					return true;
				}
			}
		}
		return false;
	}
};


function submitNativeAdCustomVar(position){
    var _gaq = _gaq || [];
    _gaq.push(['_setCustomVar', 5, 'VCR Native Ads experiment', "native-vcr-A" + position, 3]);
}


function getVendorContentIconType(vcr) {
	if(null == vcr.type) {
		return "";
	}
	if(vcr.isPodcast) {
		return "podcast";
	}
	if(vcr.type != "sponsorship") {
		return vcr.type;
	}
	if (null != vcr.sponsoredPath){
		if(vcr.sponsoredPath.startsWith("/news")) {
			return "article";
		}
		if(vcr.sponsoredPath.startsWith("/articles")) {
			return "article";
		}
		if(vcr.sponsoredPath.startsWith("/interviews")) {
			return "demo";
		}
		if(vcr.sponsoredPath.startsWith("/presentations")) {
			return "demo";
		}
		if(vcr.sponsoredPath.startsWith("/minibooks")) {
			return "pdf";
		}
		if(vcr.sponsoredPath.startsWith("/podcasts")) {
			return "podcast";
		}

	}
	return "";
}

function getVcrAnchorUrl(vcr, uriMapping, dataPlace, isInline) {
	var primaryTopicId = $('#cont_item_primary_topic').val();
	var vcrAnchorUrl = "";
	vcrAnchorUrl += InfoQConstants.countryCode + '/vendorcontent/show.action?vcr=' + vcr.id;
	if(primaryTopicId){
		vcrAnchorUrl += '&primaryTopicId=' + primaryTopicId;
		vcrAnchorUrl += '&vcrPlace=' + dataPlace;
		if(InfoQConstants.pageType){
			vcrAnchorUrl += '&pageType=' + InfoQConstants.pageType;
		}
		vcrAnchorUrl += '&vcrReferrer=' + encodeURIComponent(InfoQConstants.pageUrl);
	}
	var source = "infoq";
	if(window.device === "mobile") {
		source += "_mobile";
	}
	vcrAnchorUrl += "&utm_source=" + source + "&utm_medium=" + (isInline ? "VCRinlineitem" : "VCR") + "&utm_campaign=vcr_";
    if(uriMapping !== undefined && uriMapping !== null && uriMapping !== "") {
		vcrAnchorUrl +=  uriMapping ;
	} else {
		vcrAnchorUrl += getPageMappingforPageType();
	}

	var content = VCRLocationGA[dataPlace];
	if(content === undefined) {
		content = dataPlace.toLowerCase();
	}
    vcrAnchorUrl += "_click&utm_content=" + content;

	return vcrAnchorUrl;
}

function getOptionalVcrAnchorUrl(vcr, uriMapping, dataPlace) {
    var vcrAnchorUrl = "";
    vcrAnchorUrl += InfoQConstants.countryCode + '/vendorcontent/show.action?vcr=' + vcr.id;
    if(uriMapping !== undefined && uriMapping !== null && uriMapping !== "") {
        vcrAnchorUrl += '&utm_source=infoq&utm_medium=related_content_native_link&utm_campaign=relatedContent_native_' + uriMapping + '_clk';
    } else {
        vcrAnchorUrl += '&utm_source=infoq&utm_medium=related_content_native_link&utm_campaign=relatedContent_native_' + getPageMappingforPageType() + '_clk';
    }
    vcrAnchorUrl += "&utm_content=" + dataPlace.toLowerCase();

    return vcrAnchorUrl;
}

function getPageMappingforPageType() {
	if(InfoQConstants.pageType === "CONTENT_TYPE_PAGE") {
		return "contentTypePage_all" + InfoQConstants.mapping.toLowerCase();
	} else if(InfoQConstants.pageType === "CATEGORY_PAGE_BY_CONTENT_TYPE") {
		return "categoryPageByContentType_all" + InfoQConstants.mapping.toLowerCase();
	} else if(InfoQConstants.pageType === "CATEGORY_PAGE") {
		return "categoryPage";
    }
    return "homePage";
}

function getVcrCoverElement(vcrCoverMain, vcr, isPopup) {
	var vcrCoverSection = $(document.createElement('div'));
	vcrCoverSection.addClass("m-section");

	var vcrCoverImage = $(document.createElement('div'));
	vcrCoverImage.addClass("m-atom");
	vcrCoverImage.addClass("m-cover");

	var vcrCoverImageStencil = $(document.createElement('div'));
	vcrCoverImageStencil.addClass("m-cover-stencil");

	var img = $(document.createElement('img'));
	img.attr("src", vcr.coverImagePath);
	img.css("height", "177px");
	img.css("width", "125px");

	var vcrCoverTitle = $(document.createElement('div'));
	vcrCoverTitle.addClass("m-atom");
	vcrCoverTitle.addClass("m-title");

	var vcrCoverTitleTable = $(document.createElement('div'));
	vcrCoverTitleTable.addClass("m-table");
	vcrCoverTitleTable.css("width", "100%");
	if(!isPopup) {
		vcrCoverTitleTable.css("border-right", "1px dotted #d7d7d7");
	}

	var vcrCoverTitleSpan = $(document.createElement('span'));
	vcrCoverTitleSpan.addClass("m-table-cell");
	var vcrCoverTitleSpanP = $(document.createElement('p'));
	vcrCoverTitleSpanP.text(vcr.title);
	if(standaloneVcr.title.length > 88) {
		vcrCoverTitleSpanP.css("font-size", "12px");
	}
	var vcrCoverTitleSpanSpan = $(document.createElement('span'));
	if(vcr.author && vcr.author != ""){
		vcrCoverTitleSpanSpan.text(vcr.author);
	} else {
		vcrCoverTitleSpanSpan.text(vcr.company);
	}

	vcrCoverTitleSpan.append(vcrCoverTitleSpanP);
	vcrCoverTitleSpan.append(vcrCoverTitleSpanSpan);
	vcrCoverTitleTable.append(vcrCoverTitleSpan);
	vcrCoverTitle.append(vcrCoverTitleTable);
	vcrCoverImage.append(vcrCoverImageStencil);

	vcrCoverImageStencil.append(img);
	if(isPopup) {
		vcrCoverSection.append(vcrCoverImage);
		vcrCoverMain.append(vcrCoverSection);
	} else {
		vcrCoverMain.append(vcrCoverImage);
	}

	vcrCoverSection.append(vcrCoverImage);
	vcrCoverMain.append(vcrCoverImage);
	vcrCoverMain.append(vcrCoverTitle);
}

function getCommonElements(vcrs, uriMapping, place) {
	var $vcrs = $(".vcrs");
	$vcrs.empty();
	for(var vcr in vcrs) {
		var jsh = '{"id": "' + vcrs[vcr].id + '", "title": "' + vcrs[vcr].title + '"}';

		var vcrElement = $(document.createElement('h3'));
		vcrElement.addClass("entry" + getVendorContentIconType(vcrs[vcr]));
		vcrElement.addClass("f_vcrdefault");
		vcrElement.attr("data-place", place);
		vcrElement.attr("jsh", jsh);

		var vcrAnchor = $(document.createElement('a'));
		if(vcrs[vcr].external && !vcrs[vcr].registerOnInfoQ && ! vcrs[vcr].landingOnInfoq) {
			vcrAnchor.attr("target","_blank");
		}
		vcrAnchor.attr("href", getVcrAnchorUrl(vcrs[vcr], uriMapping, place, false));
		vcrAnchor.text(vcrs[vcr].title);

		vcrElement.append(vcrAnchor);

		$vcrs.append(vcrElement);
	}
}

function getMobileCommonElements(vcrs, uriMapping, place) {
	var $vcrs = $(".rvc_vcrs ul");
	$vcrs.empty();
	for(var vcr in vcrs) {
		var jsh = '{"id": "' + vcrs[vcr].id + '", "title": "' + vcrs[vcr].title + '"}';

		var vcrElement = $(document.createElement('li'));
		vcrElement.addClass("rvc_" + getVendorContentIconType(vcrs[vcr]));
		vcrElement.addClass("f_vcrdefault");
		vcrElement.attr("data-place", place);
		vcrElement.attr("jsh", jsh);

		var vcrAnchor = $(document.createElement('a'));
		if(vcrs[vcr].external && !vcrs[vcr].registerOnInfoQ && ! vcrs[vcr].landingOnInfoq) {
			vcrAnchor.attr("target","_blank");
		}
		vcrAnchor.attr("href", getVcrAnchorUrl(vcrs[vcr], uriMapping, place, false));

		vcrAnchor.text(vcrs[vcr].title);
		vcrElement.append(vcrAnchor);

		$vcrs.append(vcrElement);
	}
}

function getCommonMobileElement(vcr, uriMapping) {
	var element = $(document.createElement('li'));
	element.addClass("f_vcrdefault");
	element.attr("data-place", "BOTTOM");
	var jsh = '{"id": "' + vcr.id + '", "title": "' + vcr.title + '"}';
	element.attr("jsh", jsh);

	var anchor = $(document.createElement('a'));
	anchor.addClass("rvc_" + getVendorContentIconType(vcr));
	anchor.attr("href", getVcrAnchorUrl(vcr, uriMapping, "BOTTOM", false));
	anchor.text(vcr.title);

	element.append(anchor);

	return element;
}



function getABC2Elements(standaloneVcr, uriMapping, $firstBox, $secondBox) {
	$secondBox.addClass("m-trigger");
	$secondBox.css("width","46%");
	$secondBox.css("float","right");
	$secondBox.find("p.title").css("font-size", "16px");

	var vcrCoverMain = $(document.createElement('a'));
	vcrCoverMain.addClass("f_vcrdefault");
	vcrCoverMain.addClass("no-jsh");
	vcrCoverMain.attr("data-place", "BOTTOM");
	vcrCoverMain.attr("data-vcrtitle", standaloneVcr.title);
	vcrCoverMain.attr("data-vcrid", standaloneVcr.id);
	if(standaloneVcr.external && !standaloneVcr.registerOnInfoQ && !standaloneVcr.landingOnInfoq) {
		vcrCoverMain.attr("target","_blank");
	}
	vcrCoverMain.attr("href", getVcrAnchorUrl(standaloneVcr, uriMapping, "BOTTOM", false));

	getVcrCoverElement(vcrCoverMain, standaloneVcr, false);

	$firstBox.append(vcrCoverMain);
	$firstBox.css("display", "block");
}

function getPopUpVcr(vcr, uriMapping) {
	var popUpVcr = $(document.createElement('a'));
	popUpVcr.addClass("f_vcrdefault");
	popUpVcr.addClass("hidden");
	popUpVcr.addClass("no-jsh");
	popUpVcr.addClass("no-data");
	popUpVcr.attr("data-place", "BOTTOM");
	popUpVcr.css("float", "left");

	if(vcr.external && !vcr.registerOnInfoQ && !vcr.landingOnInfoq) {
		popUpVcr.attr("target","_blank");
	}
	popUpVcr.attr("href", getVcrAnchorUrl(vcr, uriMapping, "BOTTOM", false));

	var hiddenVcrId = $(document.createElement('div'));
	hiddenVcrId.addClass("vcrid");
	hiddenVcrId.css("display", "none");
	hiddenVcrId.text(vcr.id);

	var hiddenVcrTitle = $(document.createElement('div'));
	hiddenVcrTitle.addClass("vcrtitle");
	hiddenVcrTitle.css("display", "none");
	hiddenVcrTitle.text(vcr.title);

	popUpVcr.append(hiddenVcrId);
	popUpVcr.append(hiddenVcrTitle);

	getVcrCoverElement(popUpVcr, vcr, true);

	return popUpVcr;
}

function getABC3Elements(vcrList, uriMapping, $firstBox) {

	$firstBox.addClass("m-trigger");
	$firstBox.addClass("m-section");

	var popUp = $(document.createElement('div'));
	popUp.addClass("m-panel");

	popUp.append(getPopUpVcr(vcrList[0], uriMapping));
	popUp.append(getPopUpVcr(vcrList[1], uriMapping));

	return popUp;
}

function getOptionalElements(vcrs, params){
	for(var vcr in vcrs) {
		var row = $(document.createElement('div'));
		row.addClass("row");

		var anchor = $(document.createElement('a'));
		anchor.attr("data-vcrtitle", vcrs[vcr].title);
		anchor.attr("data-vcrid", vcrs[vcr].id);
		anchor.attr("data-place", params.vcrsPosition <=1 ? "1" : "2");
		anchor.attr("href", getOptionalVcrAnchorUrl(vcrs[vcr], params.uriMapping, params.vcrsPosition <=1 ? "top" : "bottom"));

		var cover = $(document.createElement('div'));
		cover.addClass("cover");

		var container = $(document.createElement('div'));
		container.addClass("vcr_optional_icontainer");

		var image = $(document.createElement('img'));
		image.attr("src", vcrs[vcr].coverImagePath);

		container.append(image);
		cover.append(container);
		anchor.append(cover);


		var title = $(document.createElement('div'));
		title.addClass("vcr_title");

		var titleP = $(document.createElement('p'));
		titleP.text(vcrs[vcr].title);

		var titleSpan = $(document.createElement('span'));
		if(vcrs[vcr].author && vcrs[vcr].author != ""){
			titleSpan.text(vcrs[vcr].author);
		} else {
			titleSpan.text(vcrs[vcr].company);
		}

		title.append(titleP);
		title.append(titleSpan);
		anchor.append(title);

		row.append(anchor);
		$(".vcrs_optional_" + params.vcrsPosition).append(row);
	}
}

function toggleAds(vcrs, params) {
	var hasOptionalContent = (vcrs.length == 2);
	setTimeout(function () {
		var theDiv;
		if(params.vcrsPosition <= 1) {
		    theDiv = $('#id_300x250_banner_top');
		} else {
		    theDiv = $('#id_300x250_banner_bottom');
		}
		var ad_iframe = theDiv.find("iframe");
		var ad_height = 0;

		if(ad_iframe.length > 0) {
        	    ad_height+=ad_iframe.contents().height();
		}
	
		if (ad_height === 0 || theDiv.css("display")  === "none") {
			theDiv.css("display", "none");
			var idString = "vcrOptional" + (params.vcrsPosition <= 1 ? "1" : "2");
			if (hasOptionalContent) {
				$("#" + idString).css("display", "block");
                $("#" + idString + " .row > a").addClass("f_vcroptional");
				VCR.addToExcludedList(vcrs);

				if(params.vcrsPosition <= 1) {
					window.finishedVcrOptional1 = true;
				}else {
                    window.finishedVcrOptional2 = true;
                }
				setTimeout(function () {
                    submitNativeAdCustomVar(params.vcrsPosition <= 1 ? "-top" : "-bottom");
				}, isAdBlocked() ? 2500 : 0);
			} else {
				if ($("#" + idString).parents('.gbanner').length) {
					$("#" + idString).parents('.gbanner').first().css("display", "none");
				}
				if(params.vcrsPosition <= 1) {
					window.finishedVcrOptional1 = true;
				} else {
                    window.finishedVcrOptional2 = true;
                }
			}
		} else {
			theDiv.addClass("f_dfp_ad");
			if(params.vcrsPosition <= 1) {
				window.finishedVcrOptional1 = true;
			} else {
                window.finishedVcrOptional2 = true;
			}
		}

	}, isAdBlocked() ? 0 : 3500);
}

function getSponsoredPodcast(url, topicIds, filteringCategoryId, podcastChannel, language) {
	var sponsoredPodcast = null;
	$.ajax({
		type: "POST",
		url: url,
		dataType: 'json',
		data: {
			'topicIds': topicIds,
			'categoryId': filteringCategoryId,
			'channel':podcastChannel,
			'language':language
		},
		success: function (result) {
			if (result.vcrs != null && result.vcrs.length > 0) {
				populateSponsoredPodcast(result.vcrs[0], podcastChannel, language);
			}
		},
		error: function (xhr, errmsg) {
			console.log("Error!!! " + errmsg);
		}
	});
	return sponsoredPodcast;
}

function populateSponsoredPodcast(sponsoredPodcast, podcastChannel, language) {
	var sponsoredPodcastElement = jQuery(".podcast__sponsored." + podcastChannel.toLowerCase());

	if(sponsoredPodcastElement.length) {
        sponsoredPodcastElement.attr("data-vcrid", sponsoredPodcast.id);
        sponsoredPodcastElement.attr("data-vcrtitle", sponsoredPodcast.title);

        var anchorUrl = getVcrAnchorUrl(sponsoredPodcast, "contentTypePage", sponsoredPodcastElement.data("place"), false);

        var $sponsoredPodcastElementImage = sponsoredPodcastElement.find(".podcast__featured-image");
        $sponsoredPodcastElementImage.attr("href", anchorUrl);
        if(sponsoredPodcast.external && !sponsoredPodcast.registerOnInfoQ && !sponsoredPodcast.landingOnInfoq) {
            $sponsoredPodcastElementImage.attr("target","_blank");
        }
        $sponsoredPodcastElementImage.find("img").attr("src", sponsoredPodcast.coverImagePath);

        var $sponsoredPodcastElementTitle = sponsoredPodcastElement.find(".podcast__title").find("a");
        $sponsoredPodcastElementTitle.attr("href", anchorUrl);
        $sponsoredPodcastElementTitle.text(sponsoredPodcast.title);

        sponsoredPodcastElement.find(".podcast__excerpt").text(sponsoredPodcast.shortSummary);
        sponsoredPodcastElement.find(".podcast__highlighted").text(sponsoredPodcast.company);
        sponsoredPodcastElement.find(".la").attr("href", anchorUrl);

        sponsoredPodcastElement.css("display", "block");
	}
}