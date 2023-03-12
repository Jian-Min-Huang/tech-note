/**********************************
* Icon Animation .JS Fragment File
***********************************/
var iconAnimationName = "bar_chart";
var iconAnimationVersion = 2.2; // Replace this with your version name
var spriteSheetName = "spritesheet_bar_chart.png";
var spriteSheet = new Image();

// For rescaling on other unit sizes
var iconUnitScale = 1.; // Scale = 1 for 300x250
var iconRegistrationX = 0; // Null registration point of animation. Adjust as needed on other unit sizes (728x90, 160x600)
var iconRegistrationY = 0; // 0, 0 is based on the 300x250

// From Dynamic API
var iconAnimationStartTime = parseFloat(dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].Start_Time_Icon_Animation); //Start_Time_Icon_Animation
var copyBatch2StartTime = parseFloat(dynamicContent.APAC_GDN_Q4_Tangram_Datasheet_TW_336x280_CN[0].Start_Time_Text_2); //Start_Time_Icon_Animation

var objPart = [];
var objPartCount = 4;
var objPartStartX = [100, 130, 350, 312];
var objPartStartY = [190, 190, 150, 212];
var objPartDockX = [127, 127, 141, 127];
var objPartDockY = [220, 220, 220, 234];

var square = [];
var squareCount = 5;
var squaretartX = [108, 108, 350, 350, 50];
var squaretartY = [148, 148, 50, 231, 250];
var squareDockX = [180, 180, 180, 194, 180];
var squareDockY = [179, 179, 178, 220, 234];

var arrow = [];
var arrowCount = 8;
var arrowtartX = [180, 180, 180, 180, 200, 150, 150, 180];
var arrowtartY = [148, 148, 50, 231, 250, 100, 111, 180];
var arrowDockX = [222, 249, 234, 248, 234, 234, 234, 234];
var arrowDockY = [136, 136, 162, 162, 161, 203, 217, 231];


function createIconParts()
{
	var i = 0;
	var tempElement;
	var iconHolder = $("#iconHolder");
	// Create Phone Icon Parts & attach to DOM

	divHolder1 = document.createElement("div");
	divHolder1.setAttribute("id", "arrowCont");
	$("#iconHolder").appendChild(divHolder1);


	for (i = 0; i < objPartCount; i++)
	{
		tempElement =  document.createElement("div");
		tempElement.setAttribute("id", "obj" + i);
		tempElement.setAttribute("class", "sprite obj" + i);
		iconHolder.appendChild(tempElement);
		objPart[i] = $("#obj" + i);
		TweenLite.to(objPart[i], 0, {opacity:0, x:(objPartStartX[i] * iconUnitScale + iconRegistrationX), y:(objPartStartY[i] * iconUnitScale + iconRegistrationY)});
	}


	for (i = 0; i < squareCount; i++)
	{
		tempElement =  document.createElement("div");
		tempElement.setAttribute("id", "square" + i);
		tempElement.setAttribute("class", "sprite square" + i);
		iconHolder.appendChild(tempElement);
		square[i] = $("#square" + i);
		TweenLite.to(square[i], 0, {opacity:0, x:(squaretartX[i] * iconUnitScale + iconRegistrationX), y:(squaretartY[i] * iconUnitScale + iconRegistrationY)});
	}

	for (i = 0; i < arrowCount; i++)
	{
		tempElement =  document.createElement("div");
		tempElement.setAttribute("id", "arrow" + i);
		tempElement.setAttribute("class", "sprite arrow" + i);
		divHolder1.appendChild(tempElement);
		arrow[i] = $("#arrow" + i);
		TweenLite.to(arrow[i], 0, {opacity:0, x:(arrowtartX[i] * iconUnitScale + iconRegistrationX), y:(arrowtartY[i] * iconUnitScale + iconRegistrationY)});
	}

}

function initIconAnimations()
{

	// Timeline Markers Definitions
	tlIcon.addLabel("dockPhone", iconAnimationStartTime);
	tlIcon.addLabel("screenTime", iconAnimationStartTime);
	tlIcon.addLabel("arrowShow", iconAnimationStartTime);
	tlIcon.addLabel("moveUp", copyBatch2StartTime + 1);

	// Animation Definitions
	dockPhone();
	screenTime();
	arrowShow();

	tlIcon.to([$("#arrowCont")], 1, {y:-19, ease:Power3.easeInOut}, "moveUp");

	// End Animation
}

function dockPhone()
{
	var i = 0;
	for (i = 0; i < objPartCount; i ++)
	{
		tlIcon.to(objPart[i], 0.3, {opacity:1}, "dockPhone");
		tlIcon.to(objPart[i], 1, {x:(objPartDockX[i] * iconUnitScale + iconRegistrationX), y:(objPartDockY[i] * iconUnitScale + iconRegistrationY), ease:Power4.easeInOut}, "dockPhone");
	}
}

function screenTime() 
{
	var i = 0;
	for (i = 0; i < squareCount; i ++)
	{
		tlIcon.to(square[i], 0.3, {opacity:1}, "screenTime");
		tlIcon.to(square[i], 1, {x:(squareDockX[i] * iconUnitScale + iconRegistrationX), y:(squareDockY[i] * iconUnitScale + iconRegistrationY), ease:Power4.easeInOut}, "screenTime");
	}
}

function arrowShow() 
{
	var i = 0;
	for (i = 0; i < arrowCount; i ++)
	{
		tlIcon.to(arrow[i], 0.3, {opacity:1}, "arrowShow");
		tlIcon.to(arrow[i], 1, {x:(arrowDockX[i] * iconUnitScale + iconRegistrationX), y:(arrowDockY[i] * iconUnitScale + iconRegistrationY), ease:Power4.easeInOut}, "arrowShow");
	}
}

// Create and initialize icon parts + animation
createIconParts();
initIconAnimations();

console.log("Animation: " + iconAnimationName + " ver " + iconAnimationVersion);
console.log("-----");

function onSpriteSheetLoad(e)
{
	// startAnimations is called from main.js
	// it will play the main timeline (tl)
	// + your icon timeline (tlIcon) at the same time
	startAnimations(); // STARTS THE ENTIRE UNIT ANIMATION when SpriteSheet is loaded
}

// play animation once spritesheet is confirmed to have loaded
spriteSheet.addEventListener("load", onSpriteSheetLoad, false);
spriteSheet.src = spriteSheetName;
