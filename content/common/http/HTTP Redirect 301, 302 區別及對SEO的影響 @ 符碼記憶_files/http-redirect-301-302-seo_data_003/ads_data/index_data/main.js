/********************
/********************
* HELPERS FUNCTIONS
********************/
//JQuery alias
var $ = function(slt) {
    return document.querySelector(slt);
}

/**************
* GLOBAL VARS
**************/
// Parameters Constant to all Units
var adVersion = 2.1; // Internal Ad version. Will be displayed in console log. Increment as necessary
var tl = new TimelineLite(); // Timeline for main animation constant through all units
var tlIcon = new TimelineLite(); // Separate timeline for icon animations

// Dynamic, pulled from GDN. Populated with default values.
var bgEndColor = "#d94236";
var introCopy2Start = 5; // Animation event happens at X seconds
var wipeStart = 9;

// Containers for dynamically pulled copy text
var copyBatch1 = [], copyBatch2 = [], copyBatch3 = [];
var copyBatchLineCount = 3; // max lines of copy per batch

// Main template timeline timing vars
var copyTweenDuration = 0.4;
var copyStaggerDuration = 0.1;
var wipeFade = 1.5;
var wipeDuration = 2;
var endBGDuration = 0.5;
var dockCTAStart = 2.5;
var dockCTADuration = 0.5;
var introButtonCTADuration = 0.2;
var introButtonCTACopyDuration = 0.3;
var introButtonReplayDuration = 1;

// Flocking Tangram Shapes for End Wipe
var shapeCount = 48;
var shapeUnitScale = 20; // Wipe Tangrams + animation currently based on 15px
var shapes = []; // container for shapes
var shapeType = [3, 1, 1, 2, 3, 2, 0, 1, 0, 0, 0, 0, 3, 4, 1, 4, 1, 4, 0, 2, 0, 0, 0, 2, 0, 1, 3, 0, 4, 4, 0, 0, 0, 3, 0, 0, 0, 2, 3, 4, 2, 3, 0, 2, 2, 3, 0, 0];
var shapeStartX = [], shapeStartY = []; // For potential future use, currently randomized during initialization. 
var shapeDockX = [], shapeDockY = []; // Rendered docking positions. To be computed via shapeDockUnitX/Y[i] * shapeUnitScale
var shapeDockUnitX = [-1, 3, 7, 7, 7, 7, 15, 19, 19, 1, 9, 13, 13, 15, -1, 1, 7, 9, 15, 19, 3, 11, -1, -1, 7, 11, 9, 13, -1, 3, 9, 9, 13, 11, 15, -1, 1, 7, 7, 9, 11, -1, 9, 17, 19, 3, 1, 7];
var shapeDockUnitY = [-1, 3, -1, -1, -1, -1, 3, -1, 3, 1, 1, 5, 1, 1, 3, 3, 3, 3, 3, 3, 7, 7, 7, 7, 11, 7, 9, 9, 9, 9, 13, 9, 9, 11, 11, 11, 13, 11, 11, 11, 11, 15, 13, 17, 11, 15, 17, 15];
var shapeRotation = [0, 180, 90, 90, 0, 0, 180, 90, 180, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 90, -90, -90, 0, 0, 180, 90, -90, -90, 0, 0, 180, 0, 90, -90, -90, 0, -90, 90, 0, 0, 0, -90, 0, 180, 90, 90, -90, 0];

var shapeHolderX = 0, shapeHolderY = 0; // Registration point of end wipe holder
var shapeWidth = 200, shapeHeight = 200; // Generic shape size for computing Wipe shape screen offset starting positions
var xMin = 0, xMax = 0, yMin = 0, yMax = 0; // Bounds of wipe shape starting positions

// Immediately stop main & icon animation timelines.
// They will play simultaneously once the custom icon animation
// .js code fragment is loaded and executes 
tl.stop();
tlIcon.stop();

/*******************
* STUDIO FUNCTIONS
*******************/
// Enabler is initialized, set up polite load for remainder of ad.
if (!Enabler.isInitialized())
{
    Enabler.addEventListener(
        studio.events.StudioEvent.INIT,
        enablerInitialized);
} else {
    enablerInitialized();
}

// Enabler is initialized, set up polite load for remainder of ad.
function enablerInitialized() 
{
    // Wait for page loaded
    if (!Enabler.isPageLoaded()) 
    {
        Enabler.addEventListener(
            studio.events.StudioEvent.PAGE_LOADED,
                    pageLoaded);
    } else {
        pageLoaded();
    }
}

/*****************
* INITIALIZATIONS
*****************/
function pageLoaded() 
{

	parseDynamicContent();

	console.log("336x280 Phase 2 Ad version: " + adVersion);
	console.log("Reporting label: (" + dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].Reporting_Label + ")");
	console.log("Exit url: (" + dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].Exit_URL.Url + dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].Sub_ID + ")");

    //Load in CSS
    var extCSS = document.createElement("link");
    extCSS.setAttribute("rel", "stylesheet");
    extCSS.setAttribute("type", "text/css");
    extCSS.setAttribute("href", dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].CSS_Name);
    document.head.appendChild(extCSS);

    var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].JS_Name;
	document.getElementsByTagName('body')[0].appendChild(script);

	initApp();
    addListeners();
    initMainAnimations();
}

function initApp()
{
	var i = 0, j = 0;
	var arrLength = 0; // for caching array length
	var copyBatch3LineOffset = 0;
	var sx = 0, sy = 0;
	var quadSide = 0;
	var tempElement;
	var tempClass = "";
	var shapeHolder = $("#shapeHolder");
	dummy = $("#dummyDiv"); // Dummy used for TweenLite param setting

	// Populate Copy Text
	arrLength = copyBatch1.length;
	for (i = 0; i < arrLength; i ++)
	{
		$("#copyA" + i).innerHTML = copyBatch1[i];
	}

	arrLength = copyBatch2.length;
	for (i = 0; i < arrLength; i ++)
	{
		$("#copyB" + i).innerHTML = copyBatch2[i];
	}

	arrLength = copyBatch3.length;
	copyBatch3LineOffset = copyBatchLineCount - arrLength;
	for (i = 0; i < arrLength; i ++)
	{
		$("#copyC" + (copyBatch3LineOffset + i)).innerHTML = copyBatch3[i];
	}

	$("#buttonLabel").innerHTML = dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].CTA_Text; // CTA_Text

	// Initialize End Screen Shape Wipe info
	TweenLite.to(shapeHolder, 0, {x:shapeHolderX, y:shapeHolderY});
	TweenLite.to($("#endBG"), 0, {backgroundColor:bgEndColor});

	xMin = 0;
	xMax = 336;
	yMin = 0;
	yMax = 280;

	// Place shapes in random positions offscreen
	for (i = 0; i < shapeCount; i ++)
	{
		shapeDockX[i] = shapeDockUnitX[i] * shapeUnitScale;
		shapeDockY[i] = shapeDockUnitY[i] * shapeUnitScale;

		// Create Tangram Shapes
		shapes[i] = document.createElement("div");
		shapes[i].setAttribute("id", "shape" + i);
		switch(shapeType[i])
		{
			default:
			case 0:
				tempClass = "sprite triangle1";
				break;
			case 1:
				tempClass = "sprite triangle2";
				break;
			case 2:
				tempClass = "sprite triangle3";
				break;
			case 3:
				tempClass = "sprite parallelogram";
				break;
			case 4:
				tempClass = "sprite diamond";
				break;
		}
		shapes[i].setAttribute("class", tempClass);
		shapeHolder.appendChild(shapes[i]);

		quadSide = Math.floor(Math.random() * 4);
		switch(quadSide)
		{
			case 0:
				sx = xMin - shapeWidth;
				sy = yMin + Math.random() * (yMax - yMin);
				break;
			case 1:
				sx = xMin + Math.random() * (xMax - xMin);
				sy = yMin - shapeHeight;
				break;
			case 2:
				sx = xMax + shapeWidth;
				sy = yMin + Math.random() * (yMax - yMin);
				break;
			case 3:
			default:
				sx = xMin + Math.random() * (xMax - xMin);
				sy = yMax + shapeHeight;
		}
		TweenLite.to(shapes[i], 0, {x:sx, y:sy, rotation:shapeRotation[i]});
	}
}

function parseDynamicContent()
{
	var tempString = "";
	bgEndColor = dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].BG_Color; // BG_Color
	introCopy2Start = parseFloat(dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].Start_Time_Text_2); // Start_Time_Text_2
	wipeStart = parseFloat(dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].Start_Time_Wipe); // Start_Time_Wipe

	parseFontSizes()

	// Grab dynamic copy text & place into array holders
	tempString  = dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].text_1; // Text_1_Line_1
	copyBatch1 = tempString.split("|");
	tempString  = dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].text_2; // Text_1_Line_1
	copyBatch2 = tempString.split("|");
	tempString  = dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].text_3; // Text_1_Line_1
	copyBatch3 = tempString.split("|");
}


function parseFontSizes()
{
	var tempString = "";
	var i = 0;
	var j = 4; // max lines of copy

	if (dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].fontsize && dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].fontsize != "")
	{
		tempString = dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].fontsize;
		fontSizes = tempString.split("|");
		j = fontSizes.length;
		for (i = 0; i < j; i++)
		{
			fontSizes[i] = fontSizes[i] + "px";
		}

		if (fontSizes[0])
		{
			TweenLite.to([$("#copyA0"), $("#copyA1"), $("#copyA2")], 0, {fontSize:fontSizes[0]});
		}
		if (fontSizes[1])
		{
			TweenLite.to([$("#copyB0"), $("#copyB1"), $("#copyB2")], 0, {fontSize:fontSizes[1]});
		}
		if (fontSizes[2])
		{
			TweenLite.to([$("#copyC0"), $("#copyC1"), $("#copyC2")], 0, {fontSize:fontSizes[2]});
		}
		if (fontSizes[3])
		{
			TweenLite.to($(".copyTextCTA"), 0, {fontSize:fontSizes[3]});
		}
	}
}

function initMainAnimations()
{
	tl.addLabel("outroCopy1", introCopy2Start);
	tl.addLabel("introCopy2", introCopy2Start + copyTweenDuration); //0.333 fade
	tl.addLabel("dockShapes", wipeStart);
	tl.addLabel("introEndBG", wipeStart + wipeFade); // 0.5sec
	tl.addLabel("introCopy3", wipeStart + wipeDuration); // 0.4 secs
	tl.addLabel("dockCTA", wipeStart + dockCTAStart); // starts 1 sec later, lasts 0.5 secs
	tl.addLabel("showCTAButton", wipeStart + dockCTAStart + dockCTADuration); // 0.2 secs
	tl.addLabel("showCTAButtonLabel", wipeStart + dockCTAStart + dockCTADuration + introButtonCTADuration); // 0.3 secs
	tl.addLabel("showReplayButton", wipeStart + dockCTAStart + dockCTADuration + introButtonCTADuration + introButtonCTACopyDuration); // 0.3 secs
    
	tl.staggerTo([$("#copyA0"), $("#copyA1"), $("#copyA2")], copyTweenDuration, {opacity:0}, copyStaggerDuration, "outroCopy1");
	tl.staggerTo([$("#copyB0"), $("#copyB1"), $("#copyB2")], copyTweenDuration, {opacity:1}, copyStaggerDuration, "introCopy2");
	dockShapes();
	tl.to($("#googleLogoWhite"), wipeDuration, {opacity:1}, "dockShapes");
	tl.to($("#endBG"), endBGDuration, {opacity: 1}, "introEndBG");
	tl.staggerTo([$("#copyC0"), $("#copyC1"), $("#copyC2")], copyTweenDuration, {opacity:1}, copyStaggerDuration, "introCopy3");
	tl.to([$("#ctaTriangleLeft"), $("#ctaParallelogram"), $("#ctaTriangleRight")], 0, {opacity:1}, "dockCTA");
	tl.to($("#ctaTriangleLeft"), dockCTADuration, {left:4, top:135, ease:Power1.easeInOut}, "dockCTA");
	tl.to($("#ctaParallelogram"), dockCTADuration, {left:4, top:135, ease:Power1.easeInOut}, "dockCTA");
	tl.to($("#ctaTriangleRight"), dockCTADuration, {left:104, top:135, ease:Power1.easeInOut}, "dockCTA");
	tl.to($("#ctaRectangle"), introButtonCTADuration, {opacity: 1}, "showCTAButton");
	tl.to([$("#ctaTriangleLeft"), $("#ctaParallelogram"), $("#ctaTriangleRight")], introButtonCTADuration, {opacity: 0}, "showCTAButtonLabel");
	tl.to($("#buttonLabel"), introButtonCTACopyDuration, {opacity: 1, onComplete:onMainAnimationComplete}, "showCTAButtonLabel");
    tl.to($("#buttonReplay"), introButtonReplayDuration, {opacity: 1}, "showReplayButton");
    
}

/*****************
* MISC FUNCTIONS
*****************/
function addListeners()
{
	$("#clickLayer").addEventListener("click", onMainHolderClick, false);
    $("#buttonReplay").addEventListener("click", onBtnReplayClick, false);
    $("#buttonReplay").addEventListener("mouseover", onButtonReplayOver, false);
}

// End Wipe Animation
function dockShapes()
{
	var i = 0;
	for (i = 0; i < shapeCount; i ++)
	{
		tl.to(shapes[i], wipeDuration, {x:shapeDockX[i], y:shapeDockY[i], ease:Power4.easeOut}, "dockShapes");
	}
}

function startAnimations()
{
	TweenLite.to([$("#googleLogoColored"), $("#copyA0"), $("#copyA1"), $("#copyA2")], 0, {opacity:1});
    tlIcon.play();
    tl.play();
}

/*********************
* LISTENER FUNCTIONS
*********************/
function onMainHolderClick(e)
{
	Enabler.exitOverride("CTA Exit", dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].Exit_URL.Url + dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].Sub_ID);
}

function onBtnReplayClick(e)
{
    tl.restart();
    tlIcon.restart();
    TweenLite.to($("#buttonReplay"), 0, {display:"none"});
    Enabler.counter("Replay Clicked", true);
}

function onMainAnimationComplete(e)
{
    TweenLite.to($("#buttonReplay"), 0, {display:"block"});
}

function onButtonReplayOver(e)
{
	TweenLite.to($("#buttonReplay"), 0.5, {rotation:360, onComplete:onButtonReplaySpinComplete});
}

function onButtonReplaySpinComplete(e)
{
	TweenLite.to($("#buttonReplay"), 0, {rotation:0});
}