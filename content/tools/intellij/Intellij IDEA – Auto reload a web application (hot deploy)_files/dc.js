function adVisibilityHandler(evt) {

    // Grab Dynamic Feed
    var feed = dynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0];

    // Set Copy & CTA
    document.getElementById('gcp_copy').innerHTML = feed.Copy_Line;
    document.getElementById('cta_btn').innerHTML = feed.CTA;

    // Create an image tag.
    document.getElementById('icon').src = feed.Image_728x90.Url;

    // Set Copy Size
    var typeSize = feed.Font_728x90;
    if(typeSize) document.getElementById('gcp_copy').style.fontSize = (typeSize + "px");

    // Set Theme
    var theme = feed.Theme.toLowerCase();
    if( theme == "white" || theme == "gray"){

        // set background
        if( theme == "gray" ) {
            document.getElementById("content").style.backgroundColor = "#F4F4F4";
        } else {
            document.getElementById("content").style.backgroundColor = "#FFFFFF";
        }
        
        // set border color
        document.getElementById("container").style.borderColor = "#000000";
        
        // set copy color
        document.getElementById("gcp_copy").style.color = "#757575";

        // set gcp image
        document.getElementById('gcp_logo').src = "images/gcp_logo_color.png";

        // set google cloud image
        document.getElementById('google_cloud').src = "images/google_cloud_color.png";

    }

    // kick off animation
    init();

}

function pageLoadedHandler(evt) {

    initDynamicData();
    initEssencePixel();

    if (Enabler.isVisible()) {
        adVisibilityHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
    }

}

function enablerInitHandler(evt) {
    if (Enabler.isPageLoaded()) {
        pageLoadedHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
    }
}

if (Enabler.isInitialized()) {
    enablerInitHandler();
} else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
}

/* ClickTag */

var cta_btn = document.getElementById('cta_btn');
cta_btn.style.cursor = "pointer";

var content_btn = document.getElementById('content');
content_btn.style.cursor = "pointer";

content_btn.onclick = function(evt) {
    Enabler.exit('DCM Exit Tag');
    //Enabler.exitOverride("Exit URL", dynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Exit_URL.Url);
};

/*
 * Dynamic Content Enable code for Profile: 1115256
 *
 * The following code initializes the following dynamic variables for
 * development testing and live serving of Fields associated to the above profile
*/

// DynamicContent Start: HTML5 invocation code. -->

// Dynamic Content variables and sample values

function initDynamicData(){

// Dynamic Content variables and sample values
Enabler.setProfileId(10000943);
  var devDynamicContent = {};

  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed= [{}];
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0]._id = 0;
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Unique_ID = 1;
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Reporting_Label = "unit1";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Elem_Type = "BAN";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Targeting_Key = "Dev";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Audience = "";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Copy_Line = "Go from zero to hyperscale with App Engine.";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].CTA = "Try It Free ";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Theme = "Dark";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Font_300x250 = 20;
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Font_728x90 = 23;
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Font_300x600 = 36;
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Font_160x600 = 25;
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Font_970x250 = 36;
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Image_300x250 = {};
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Image_300x250.Type = "file";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Image_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/24157216/24157216_20170428083239142_01_300x250_blocks_bl.png";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Image_728x90 = {};
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Image_728x90.Type = "file";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Image_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/24157216/24157216_20170428083242460_01_728x90_blocks_bl.png";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Image_300x600 = {};
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Image_300x600.Type = "file";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Image_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/24157216/24157216_20170428083240973_01_300x600_blocks_bl.png";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Image_160x600 = {};
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Image_160x600.Type = "file";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Image_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/24157216/24157216_20170428083237568_01_160x600_blocks_bl.png";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Image_970x250 = {};
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Image_970x250.Type = "file";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Image_970x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/24157216/24157216_20170428101453337_01_970x250_blocks_bl.png";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Exit_URL = {};
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Exit_URL.Url = "https://cloud.google.com/appengine/?utm_source=DBM&utm_medium=cpm&utm_campaign=2017-Q2-cloud-na-gcp-display-freetrial&utm_content=unit1-Dark";
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Weights = 50;
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Default = true;
  devDynamicContent.Google_GCP_DR_Banners_Dynamic__APAC__Q2_2017_Feed[0].Active = true;
  Enabler.setDevDynamicContent(devDynamicContent);

};

/*
 * You may access the variables in the following manner
 * AFTER the Studio Enabler is initialized.
 * var Unique_ID = dynamicContent.Google_GCP_DR_Dynamic_Feed_v1_Feed[0].Unique_ID;
 * Note: be sure to use "dynamicContent", not "devDynamicContent"
 * Note: be sure to use ExitOverride to create your exit URL dynamically; follow the instructions on our Help center: https://support.google.com/richmedia/answer/2664807
*/

/** ----- Essense Pixel ----- **/

/**
 * DoubleClick dynamic creative data transfer reporting solution
 *
 * Append this entire block to enablerInitHandler(), but only
 * after calling Enabler.setDevDynamicContent(devDynamicContent)
 */

function initEssencePixel(){

    var adParams = 'Buy:' + (Enabler.getParameter('buy') || 0) + '|PID:' + (Enabler.getDartPageId() || 0) + '|AID:' + (Enabler.getDartAdId() ||0) + '|CID:' + (Enabler.getDartCreativeId() || 0);
    var dynamicPixelImg = document.createElement('img');
    var dynamicPixelStr = 'https://ad.doubleclick.net/ddm/ad/N5295.275509.TESTSITE/B11222446.149473255;sz=1x1;ord=' + Math.floor(Math.random() * 10000000000000) + ';u=';
    var dynamicContentRowId = (function() {
      var row = '';
     
      for (var feed in dynamicContent) {
        if (feed !== '_profileid') {
          for (var feedObject in dynamicContent[feed]) {
            row += (dynamicContent[feed][feedObject].Elem_Type + dynamicContent[feed][feedObject].Unique_ID);
          }
        }
      }
     
      return row;
    })();
     
    dynamicPixelImg.src = dynamicPixelStr + adParams + '|' + dynamicContentRowId;
    document.body.appendChild(dynamicPixelImg);

}
