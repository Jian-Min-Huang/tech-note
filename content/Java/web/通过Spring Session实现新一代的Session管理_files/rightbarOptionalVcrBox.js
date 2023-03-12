// for this to work all it needs is a vcrOptionalListJson in the page (see rightbar_related.jsp -> var vcrOptionalListJson = "<ww:property value='%{vendorContentOptionalListJson}'/>"; )

var optionalVcrBox = {
	vcrOptionalList : null,
	topBannerId : "id_300x250_banner_top",
	bottomBannerId : "id_300x250_banner_bottom",
	abTestVersion : null,
	
	// the following variables are needed to check the display/tracking status when box is displayed before page load or after page load. DO NOT CHANGE!!!!
	isGACustomVarSet : false,
	isOptionalVcrTopDisplayed : false,
	isOptionalVcrBottomDisplayed : false,
	isOptiopnalVcrTopTrackingDone : false,
	isOptiopnalVcrBottomTrackingDone : false,
	
	
	//workaround the fact the slotRenderedEvent is fired multiple times for the same slot(not sure why)
	checkedBannerTop: false,
	checkedBannerBottom: false,
		
	parseVendorContentOptionalList : function(vcrOptionalListJson) {
		// since the json is encoded as hrml, we need to decode it(jquery way,
		// create a div with a text and get the text)
		this.vcrOptionalList =  $.parseJSON($("<div/>").html(JSON.stringify(vcrOptionalListJson)).text());
	},

	addWidgetVcrItem : function(vcrItem, trackerClass, place) {
		// tvi = tracked vcr id, tvl = tracked vcr label used for impression tracking, see tracker.js (called on document ready)
		vcrUrl=InfoQConstants.countryCode+"/vendorcontent/show.action?vcr="+vcrItem.id;

		vcrResult="<li> <a href=\""+vcrUrl+this.addVcrGATracking(place)+"\" class=\"rhs_b_s__cover\"><img src=\""+vcrItem.coverImagePath+"\" ></a>";
		vcrResult+="<a href=\""+vcrUrl+this.addVcrGATracking(place)+"\"" + " class=\"rhs_b_s__title "+trackerClass+"\" tvi=\""+vcrItem.id+"\" tvl=\"rightbar\">"+vcrItem.title+"</a><br>";
		vcrResult+="</li>";
		
		return vcrResult;
	},

	// this replaces the native vcr box used for homepage or other places. display one or two randomly from an array 
	addOptionalVcrSection : function (place, afterElemId){
		// place can be top or bottom		
		if(this.vcrOptionalList!=null && this.vcrOptionalList.length>0){
			var boxClassName = "f_sponsorbox_";
			if(place == "top" && ($('.f_sponsorbox').length > 0 ||
					$('.f_sponsorbox_top_1').length > 0 ||
					$('.f_sponsorbox_bottom_1').length > 0 )) {
				boxClassName += "bottom";
			} else {
				boxClassName += place;
			}
			boxClassName += "_1";

			$("<div id=\"optionalVcr_"+place+"\" class=\"" + boxClassName + " rhs_b rhs_b_s rhs_b_s--single nocontent\"><div class=\"rhs_b__title\">"+JSi18n.relatedRightbar_sponsoredContent+"</div><ul id=\"optionalVcr_ul_"+place+"\" class=\"rhs_b_s__books\"> </ul></div>").insertAfter("#"+afterElemId);

			var vcrClassName = "f_vcrrightbar_optional_"+place+"_1";


			if(this.vcrOptionalList.length>2){
				// 1 random 
				index1 = Math.floor(Math.random() * this.vcrOptionalList.length);
				index2 = Math.floor(Math.random() * this.vcrOptionalList.length);
				// check if not used before
				while (index1==index2) {
				    index2 = Math.floor(Math.random() * this.vcrOptionalList.length);
				}
				//f_vcrrightbar_optional_top or bottom is used for impression tracking and we differentiate with classes not to double impressions if we have 2 boxes on the same page


				$( "#optionalVcr_ul_"+place ).append(this.addWidgetVcrItem(this.vcrOptionalList[index1],vcrClassName, place));
				$( "#optionalVcr_ul_"+place ).append(this.addWidgetVcrItem(this.vcrOptionalList[index2],vcrClassName, place));
			}else{
				$.each(this.vcrOptionalList, function(i,vcrItem) {
					//f_vcrrightbar_optional is used for impression tracking
					$( "#optionalVcr_ul_"+place ).append(optionalVcrBox.addWidgetVcrItem(vcrItem,vcrClassName, place));
				});
			}
			
			if(place=="top"){
				this.isOptionalVcrTopDisplayed = true;
			}else{
				this.isOptionalVcrBottomDisplayed = true;
			}
			
			// check to see if the GA variable exisis and is initialized, if yes to the tracking now)
			if(typeof _gaq !== "undefined"){
				this.doTracking(place);
			}
		}
	},
	
	addVcrGATracking: function(place){
		return "&utm_source=infoq&utm_medium=related_content_native_link&utm_campaign=relatedContent_native_"+contentUriMapping+"_clk&utm_content=" + place;
	},
	
	optionalVcrBoxDisplayAdBlock : function(){

		//check to see if we have adBlock on and if we have banners elements on page if yes insert optional vcr box
		if(isAdBlocked()){
			if($("#"+this.topBannerId).length>0){
				// we have a top banner and ad block on
				if($('.f_vcrrightbar_sponsorship_top_1').length > 0 ||
					$('.f_vcrrightbar_sponsorship_top_2').length > 0 ||
					$('.f_vcrrightbar_sponsorship_bottom_1').length > 0 ||
					$('.f_vcrrightbar_sponsorship_bottom_2').length > 0) {
					optionalVcrBox.addOptionalVcrSection("bottom","id_300x250_banner_top");
				} else {
					optionalVcrBox.addOptionalVcrSection("top","id_300x250_banner_top");
				}
			}
			if($("#"+this.bottomBannerId).length>0){
				// we have a top banner and ad block on
				optionalVcrBox.addOptionalVcrSection("bottom","id_300x250_banner_bottom");
			}
		}
	},
	
	// used on slotRendered event (see gpt.jsp) to see if the banners were displayed
	relatedRightbarNativeVcrSlotRendered: function(event){
		if (event.slot.getSlotElementId() == "id_300x250_banner_top") {
			  // not sure sometimes events get called even if we did not put any banner on page so check to be sure first
			  if($("#"+optionalVcrBox.topBannerId).length>0){
				  if(event.isEmpty && !optionalVcrBox.checkedBannerTop){
					  optionalVcrBox.checkedBannerTop = true;
					  optionalVcrBox.addOptionalVcrSection("top","id_300x250_banner_top");					  
				  }
			  }
		  }
		  if (event.slot.getSlotElementId() == "id_300x250_banner_bottom") {
			  // not sure sometimes events get called even if we did not put any banner on page so check to be sure first		  				  
			  if($("#"+optionalVcrBox.bottomBannerId).length>0){
				  if(event.isEmpty && !optionalVcrBox.checkedBannerBottom){
					  optionalVcrBox.checkedBannerBottom = true;
					  optionalVcrBox.addOptionalVcrSection("bottom","id_300x250_banner_bottom");					  
				  }
			  }
		  }
	},
	
	doTracking : function(place){
		if(this.isOptionalVcrTopDisplayed || this.isOptionalVcrBottomDisplayed){
			if(!this.isGACustomVarSet){
				_gaq.push(['_setCustomVar', 3, 'VCR Native Related Rightbar', this.abTestVersion, 3]);
				this.isGACustomVarSet = true;
			}
		}
		if(place=="top"){
			if(!this.isOptiopnalVcrTopTrackingDone){
				if(this.isOptionalVcrTopDisplayed){
					Tracker.doTrackVcrRightbarImpressions("f_vcrrightbar_optional_top_1");
					Tracker.doTrackVcrRightbarBoxesImpressions("f_sponsorbox_top_1");
					Tracker.doTrackVcrRightbarImpressions("f_vcrrightbar_optional_top_2");
					Tracker.doTrackVcrRightbarBoxesImpressions("f_sponsorbox_top_2");
					this.isOptiopnalVcrTopTrackingDone = true;
				}
			}
		}else{
			if(!this.isOptiopnalVcrBottomTrackingDone){
				if(this.isOptionalVcrBottomDisplayed){
					Tracker.doTrackVcrRightbarImpressions("f_vcrrightbar_optional_bottom_1");
					Tracker.doTrackVcrRightbarBoxesImpressions("f_sponsorbox_bottom_1");
					Tracker.doTrackVcrRightbarImpressions("f_vcrrightbar_optional_bottom_2");
					Tracker.doTrackVcrRightbarBoxesImpressions("f_sponsorbox_bottom_2");
					this.isOptiopnalVcrBottomTrackingDone = true;
				}
			}
		}		
	}	
	
};