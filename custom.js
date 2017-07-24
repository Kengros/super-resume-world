var contentDiv = document.getElementById("content");
var pageDiv = document.getElementById("page");
var kenContainerDiv = document.getElementById("ken-container");
var kenDiv = document.getElementById("ken");
var kenFramesDiv = document.getElementById("ken-slides");
var kenBlanksCloseDiv = document.getElementById("ken-eyes-close");
var blinkKenEyesTimer;

var bannersContainerDiv = document.getElementById("bolt-block-container");

var isPreloadShiftUpAnimationFinish = false;
var canFinishShiftUpHorizontalLayersAfterEverythingLoaded = true;

var splashContainerDiv = document.getElementById("splash-container");
var liftDiv = document.getElementById("lift");
var groundAndGrassContainer1Div = document.getElementById("ground-and-grass-container-1");

var pylon1Div = document.getElementById("pylon-1");
var pylon2Div = document.getElementById("pylon-2");

var layerHorizontalArray = new Array();
var layerVerticalArray = new Array();

var gapBetweenContactCloudAndBannersContainer = 400;

var layerHorizontalSpeedArray = new Array();
var layerVerticalSpeedArray = new Array();

var sea1Div = document.getElementById("sea-1");
var seaFloorDiv = document.getElementById("sea-floor");
var seaFloorFrontObjectArray = new Array();
var seaFloorBackObjectArray = new Array();

var about1ContainerDiv = document.getElementById("plants-container");

var plantLine1Div = document.getElementById("plant-line-1");
var plantLine2Div = document.getElementById("plant-line-2");
var plantArray = new Array();
var plantTargetTopObjectArray = new Array();
plantTargetTopObjectArray.push(plantLine1Div, plantLine1Div, plantLine2Div, plantLine2Div);
var canAnimatePlantInformation;

var about2ContainerDiv = document.getElementById("yoshi-house-container");
var yoshiHouseTargetLeft1 = 0;
var yoshiHouseTargetLeft2 = 305;
var yoshiHouseTargetLeft3 = 710;
var yoshiHouseEarlyPosition1 = 795;
var yoshiHouseEarlyPosition2 = 1100;
var yoshiHouseEarlyPosition3 = 1505;
var yoshiHouseArray = new Array();
var yoshiHouseTargetLeftArray = new Array();
yoshiHouseTargetLeftArray.push(yoshiHouseTargetLeft1, yoshiHouseTargetLeft2, yoshiHouseTargetLeft3);
var yoshiHouseEarlyPositionArray = new Array();
yoshiHouseEarlyPositionArray.push(yoshiHouseEarlyPosition1, yoshiHouseEarlyPosition2, yoshiHouseEarlyPosition3);
var yoshiHouseEmptyArray = new Array();
var canAnimateYoshiHouseInformation;
var yoshiHouseCounter = 0;
var yoshiHouseEmptyTimer;
var yoshiHouseBlinkTimer;
var yoshiHouseKgmBlankArray = new Array();
var yoshiHouseEmptyContainerArray = new Array();
var yoshiHouseEmptyContainer1Div = document.getElementById("yoshiHouse-grp-container-1");
var yoshiHouseEmptyContainer2Div = document.getElementById("yoshiHouse-grp-container-2");
var yoshiHouseEmptyContainer3Div = document.getElementById("yoshiHouse-grp-container-3");
var yoshiHouseEmptyFrameArray = new Array();
var yoshiHouse1EmptyFrameDiv = document.getElementById("yoshi-house-grp-frame");
var yoshiHouse2EmptyFrameDiv = document.getElementById("yoshiHouse-2-grp-frame");
var yoshiHouse3EmptyFrameDiv = document.getElementById("yoshiHouse-3-grp-frame");

var experience1ContainerDiv = document.getElementById("experience-1-container");
var experience2ContainerDiv = document.getElementById("experience-2-container");
var experience3ContainerDiv = document.getElementById("experience-3-container");
var experience4ContainerDiv = document.getElementById("experience-4-container");
var experience5ContainerDiv = document.getElementById("experience-5-container");

var experienceTextContainerArray = new Array();
var BoltBlockContainerArray = new Array();
var experienceTextContainerDistanceFromFloor = 185;

var ascendiaDiv = document.getElementById("ascendia");
var animateAscendiaBlankTimer;
var spinAscendiaBlankTimer;
var changeAscendiaBlankCounter = 0;
var ascendiaBlankLeftDiv = document.getElementById("ascendia-hand-left");
var ascendiaBlankRightDiv = document.getElementById("ascendia-hand-right");
var ascendiaBlankChildrenLength = $(ascendiaBlankLeftDiv).children().length;

var sduisDiv = document.getElementById("sduis");
var sduisBlankCloseArray = new Array();
var sduisBlankOpenArray = new Array();
var animateSduisBlankTimer;
var moveSduisBlankTimer;
var openAndCloseSduisBlankCounter = 0;

var kgmDiv = document.getElementById("kgm");
var animateKgmBlankTimer;
var kgmEmptyDiv = document.getElementById("kgm-steer");
var kgmEmptyDiv = 0;
var kgmEmptyPreviousDiv;
var kgmEmptyDivLimit = 15;
var kgmEmptyDivIncrement = 5;

var petroDiv = document.getElementById("petro");
var animatePetroBlankTimer;
var spinPetroBlankTimer;
var changePetroBlankCounter = 0;
var petroBlankLeftDiv = document.getElementById("ascendia-hand-left");
var petroBlankRightDiv = document.getElementById("ascendia-hand-right");
var petroBlankChildrenLength = $(petroBlankLeftDiv).children().length;

var hmhcoDiv = document.getElementById("hmhco");
var animateHmhcoBlankTimer;
var spinHmhcoBlankTimer;
var changeHmhcoBlankCounter = 0;
var hmhcoBlankLeftDiv = document.getElementById("ascendia-hand-left");
var hmhcoBlankRightDiv = document.getElementById("ascendia-hand-right");
var hmhcoBlankChildrenLength = $(hmhcoBlankLeftDiv).children().length;

var canAnimateSpacerInformation;
var canAnimateAscendiaInformation;
var canAnimateSduisInformation;
var canAnimateKgmInformation;
var canAnimatePetroInformation;
var canAnimateHmhcoInformation;


var piechartAscendiaFrontDiv = document.getElementById("piechart-ascendia-front");
var piechartAscendiaTextGraphic1Div = document.getElementById("piechart-ascendia-text-graphic-1");
var piechartAscendiaTextGraphic2Div = document.getElementById("piechart-ascendia-text-graphic-2");
var piechartAscendiaTextAnimation1Div = document.getElementById("piechart-ascendia-text-animation-1");
var piechartAscendiaTextAnimation2Div = document.getElementById("piechart-ascendia-text-animation-2");
var piechartAscendiaTextCode1Div = document.getElementById("piechart-ascendia-text-code-1");
var piechartAscendiaTextCode2Div = document.getElementById("piechart-ascendia-text-code-2");

var piechartSduisFrontDiv = document.getElementById("piechart-sduis-front");
var piechartSduisTextGraphic1Div = document.getElementById("piechart-sduis-text-graphic-1");
var piechartSduisTextGraphic2Div = document.getElementById("piechart-sduis-text-graphic-2");
var piechartSduisTextAnimation1Div = document.getElementById("piechart-sduis-text-animation-1");
var piechartSduisTextAnimation2Div = document.getElementById("piechart-sduis-text-animation-2");
var piechartSduisTextCode1Div = document.getElementById("piechart-sduis-text-code-1");
var piechartSduisTextCode2Div = document.getElementById("piechart-sduis-text-code-2");

var piechartKgmFrontDiv = document.getElementById("piechart-kgm-front");
var piechartKgmTextGraphic1Div = document.getElementById("piechart-kgm-text-graphic-1");
var piechartKgmTextGraphic2Div = document.getElementById("piechart-kgm-text-graphic-2");
var piechartKgmTextAnimation1Div = document.getElementById("piechart-kgm-text-animation-1");
var piechartKgmTextAnimation2Div = document.getElementById("piechart-kgm-text-animation-2");
var piechartKgmTextCode1Div = document.getElementById("piechart-kgm-text-code-1");
var piechartKgmTextCode2Div = document.getElementById("piechart-kgm-text-code-2");

var piechartPetroFrontDiv = document.getElementById("piechart-petro-front");
var piechartPetroTextGraphic1Div = document.getElementById("piechart-petro-text-graphic-1");
var piechartPetroTextGraphic2Div = document.getElementById("piechart-petro-text-graphic-2");
var piechartPetroTextAnimation1Div = document.getElementById("piechart-petro-text-animation-1");
var piechartPetroTextAnimation2Div = document.getElementById("piechart-petro-text-animation-2");
var piechartPetroTextCode1Div = document.getElementById("piechart-petro-text-code-1");
var piechartPetroTextCode2Div = document.getElementById("piechart-petro-text-code-2");

var piechartHmhcoFrontDiv = document.getElementById("piechart-hmhco-front");
var piechartHmhcoTextGraphic1Div = document.getElementById("piechart-hmhco-text-graphic-1");
var piechartHmhcoTextGraphic2Div = document.getElementById("piechart-hmhco-text-graphic-2");
var piechartHmhcoTextAnimation1Div = document.getElementById("piechart-hmhco-text-animation-1");
var piechartHmhcoTextAnimation2Div = document.getElementById("piechart-hmhco-text-animation-2");
var piechartHmhcoTextCode1Div = document.getElementById("piechart-hmhco-text-code-1");
var piechartHmhcoTextCode2Div = document.getElementById("piechart-hmhco-text-code-2");


var bubbleDiv = document.getElementById("bubble");
var bubbleTimer;

var shiftUpLayerHorizontalDistance;
var shiftUpLayerHorizontalTimer;
var shiftDownLayerHorizontalTimer;
var shiftUpDownLayerHorizontalIncrement = 40;
var shiftUpDownLayerHorizontalInterval = 40;

var seaAnimalSwimDistance = 900;
var blinkSeaAnimalsTimer;

var skill1ContainerDiv = document.getElementById("skill-1-container");
var coinArray = new Array();
var coinBlankArray = new Array();
var canAnimateCoinInformation;
var isCoinStillAnimating = false;
var coinAnimateNumber = 0;
var numberOfCoinInEachRowArray = new Array();
numberOfCoinInEachRowArray.push(5, 5, 5, 4);

var skill2ContainerDiv = document.getElementById("skill-2-container");
var koopaArray = new Array();
var koopaBlankArray = new Array();
var canAnimateKoopaInformation;
var isKoopaStillAnimating = false;
var koopaAnimateNumber = 0;
var numberOfKoopaInEachRowArray = new Array();
numberOfKoopaInEachRowArray.push(5, 5, 4, 3);

var skill3ContainerDiv = document.getElementById("skill-3-container");
var qblockArray = new Array();
var qblockBlankArray = new Array();
var canAnimateQblockInformation;
var isQblockStillAnimating = false;
var qblockAnimateNumber = 0;
var numberOfQblockInEachRowArray = new Array();
numberOfQblockInEachRowArray.push(4, 3, 2, 2);

var pageVerticalPosition = 0;
var pageVerticalPositionOnTouch = 0;
var previousPageVerticalPosition = 0;
var deltaPageVerticalPosition = 0;

var isKenSwimming = false;
var isKenJumping;
var isKenFalling;
var isKenBelowSeaLevel = false;
var swimUpHeight;

var layersMovement;

var pylonArray = new Array();
var pylonNumberBelowKen = null;

var kenRightEdge;
var kenLeftEdge;
var distanceBetweenKenAndLift = 150; //ken center to lift center
var kenMaxHorizontalDistance;

var counter = 0;
var switcher = 1; //either 1 or -1
var kenStaticFrame = 0;
var kenStartRunFrame = 1;
var kenStopRunFrame = 2;
var kenStartSwimFrame = 3;
var kenStopSwimFrame = 4;
var kenSwimDownFrame = 5
var kenStartJumpFrame = 6;
var kenStopJumpFrame = 7;
var kenOneFrameWidth = 200;
var shiftKenFrameTimeInterval = 200;
var canAnimateKenRunSwim;
var kenStartFrame;
var kenStopFrame;
var shiftKenFrameTimer;
var pageVerticalPositionWhenAnimateKen1;
var pageVerticalPositionWhenAnimateKen2;
var minimumVerticalDistanceToTriggerKenSwimDownFrame = 100;

var kartBoardArray = new Array();
var about3ContainerDiv = document.getElementById("kart-container");
var kartPlayerDiv = document.getElementById("yoshi-kart");
var kartPlayerContainerDiv = document.getElementById("yoshi-kart-container");
var kartPlayerFrameDiv = document.getElementById("yoshi-kart-frame");
var kartRimContainerDiv = document.getElementById("finish-line-container");
var kartBallDiv = document.getElementById("race-coin");
var canAnimateKartInformation;
var kartBoardsCounter;
var kartBoardsAnimationTimer;
var kartPlayerCounter;
var kartPlayerTimer;
var kartPlayerBlanksDiv = document.getElementById("yoshi-kart-eyes");
var blinkKartPlayerTimer;

var contactContainerDiv = document.getElementById("contact-container");
var socialContainerDiv = document.getElementById("social-container");
var canAnimateSocialContainer;

var happyKenTimer;
var isKenHappy = false;

var scrollOrSwipeTextContainer1Div = document.getElementById("scroll-or-swipe-text-container-1");
var scrollOrSwipeTextContainer2Div = document.getElementById("scroll-or-swipe-text-container-2");
var canHideScrollOrSwipeTextContainer = true;
var scrollOrSwipeTextContainerTimer;
var canAnimateScrollOrSwipeTextContainer = true;

var contactConfirmationContainerArray = new Array();
var emailAddressDiv = document.getElementById("email-address");
var emailSubjectDiv = document.getElementById("email-subject");
var emailMessageDiv = document.getElementById("email-message");
var isContactConfirmationContainerVisible = true;

var waterfall1Div = document.getElementById("waterfall-1");
var waterfall2Div = document.getElementById("waterfall-2");
var waterfall3Div = document.getElementById("waterfall-3");
var waterfall4Div = document.getElementById("waterfall-4");
var waterfall5Div = document.getElementById("waterfall-5");
var waterfall6Div = document.getElementById("waterfall-6");
var waterfall7Div = document.getElementById("waterfall-7");
var waterfall8Div = document.getElementById("waterfall-8");


var waterfallTimer;

var touchStartX = 0;
var touchCurrentX = 0;
var touchEndX = 0;

var fireworksContainerDiv = document.getElementById("fireworks-container");
var fireworkArray = new Array();
var fireworkSvgArray = new Array();
var cArray = new Array();
var drawFireworkTimer;
var drawFireworkCounter = 0;
var fireworkRowNumber = 8;
var fireworkColumnNumber = 16;
var fireworkLayerNumber = 0;
var fireworkDotRadius = 30;
var fireworkCenterX;
var fireworkCenterY;
var fireworkOneRadiusDistance;
var fireworkOneRotationDiv;
var drawOneLayerOfFireworkTimer;
var canDrawManyFireworks = true;

disableIsKenJumpingAndFalling();

var landInformationContainerArray = new Array();
landInformationContainerArray.push(about1ContainerDiv, about2ContainerDiv, about3ContainerDiv, experience1ContainerDiv, experience2ContainerDiv, experience3ContainerDiv, experience4ContainerDiv, experience5ContainerDiv);
var seaInformationContainerArray = new Array();
seaInformationContainerArray.push(skill1ContainerDiv, skill2ContainerDiv, skill3ContainerDiv);
	
setAllKartCounter();

var canScrollOrSwipe;
disableScrollOrSwipe();

//so browser will not jump to last position when refresh
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

window.onload = function()
{
	if (deviceName != "computer")
	{
		initTouchEvents();
	}
	
	storeDivs();
	
	setFrontLayerVerticalHeight();
	setBannersContainerVerticalPosition();
	
	shiftUpPreloader(); //function in preloader.js
	showContainer();
	initVariablesAfterShowContainer(); //so the div width will be detected
	shiftUpHorizontalLayersAfterEverythingLoaded();
	disableAnimateKenRunSwim();
	resetVariables();
	setPageHeight();
	setLayerSpeed();
	positionVerticalLayersHorizontally();
	positionLiftAndKenContainerHorizontally();
	positionLiftVertically();
	positionContactContainer();
	positionFireworksContainer();
	resetFunctions();
	positionSplashContainer();
	setKenLeftAndRightEdge();
	positionContactConfirmationContainer();
	hideContactConfirmationContainer();
	hideKenBlanksClose();
	animateKenBlanks();
	animateWaterfall();
	positionSeaFloorObjectsVertically();
	openSduisBlank();
	hideBubble();
	setAscendiaBlankToDefault();
	createFireworkSvg();
	appendFireworkSvgToContainer();
}

window.onscroll = function (e)
{
	if (canScrollOrSwipe == true) //to avoid user swipe when window is still resizing after screen orientation changed on table
	{
		detectPageVerticalPosition();
		runTheseFunctionsAfterScrollOrSwipe();
	}
}

window.onresize = function (e)
{
	setFrontLayerVerticalHeight();
	setBannersContainerVerticalPosition();
	
	setPageHeight();
	detectPageVerticalPosition();
	orientKen();
	setLayerSpeed();
	moveLayers(); //before blinkKenBlanks(), positionLiftAndKenContainerHorizontally(), animateKenRunSwim(), shiftKenFrame(), positionContactConfirmationContainer()
	setKenLeftAndRightEdge();
	shiftUpDownHorizontalLayersOnResize();
	animateInformationAndEnemiesElements();
	positionSplashContainer();
	positionKenContainerVertically();
	positionLiftVertically();
	positionSocialContainer();
	positionPlants();
	hideContactConfirmationContainer();
	positionContactConfirmationContainer();
	positionExperienceTextContainer();
	positionBoltBlockContainer();
	positionSeaFloorObjectsVertically();
	enableScrollOrSwipe();
	printResizeText();
}

//use orientation change function below to handle so orientation screen bug in android
$(window).on('orientationchange', orientationChangeBlankler);
function orientationChangeBlankler(e)
{
	disableScrollOrSwipe();
    setTimeout(function() {$(window).trigger('resize');}, 500);
}

function enableScrollOrSwipe()
{
	canScrollOrSwipe = true;
}

function disableScrollOrSwipe()
{
	canScrollOrSwipe = false;
}

function initVariablesAfterShowContainer() //give variables value based on width height div etc
{	
	fireworkCenterX = 0.5 * fireworkArray[0].offsetWidth;
	fireworkCenterY = 0.5 * fireworkArray[0].offsetHeight;
	fireworkOneRadiusDistance = (fireworkCenterY - fireworkDotRadius) / fireworkRowNumber;
	fireworkOneRotationDiv = 2 * Math.PI / fireworkColumnNumber;
}

function resetVariables()
{
	pageVerticalPosition = 0;
	canAnimatePlantInformation = true;
	canAnimateYoshiHouseInformation = true;
	
	if (isCoinStillAnimating == false)
	{
		canAnimateCoinInformation = true;
	}
	if (isKoopaStillAnimating == false)
	{
		canAnimateKoopaInformation = true;
	}
	if (isQblockStillAnimating == false)
	{
		canAnimateQblockInformation = true;
	}
		
	canAnimateAscendiaInformation = true;
	canAnimateSduisInformation = true;
	canAnimateKgmInformation = true;
	canAnimatePetroInformation = true;
	canAnimateHmhcoInformation = true;
	canAnimateKartInformation = true;
	canAnimateSocialContainer = true;
	canDrawManyFireworks = true;
}

function resetFunctions()
{
	positionPlants();
	positionYoshiHouse();
	
	if (isCoinStillAnimating == false)
	{
		positionSeaAnimals(coinArray, numberOfCoinInEachRowArray, 150, 100);
	}
	if (isKoopaStillAnimating == false)
	{	
		positionSeaAnimals(koopaArray, numberOfKoopaInEachRowArray, 150, 100);
	}
	if (isQblockStillAnimating == false)
	{
		positionSeaAnimals(qblockArray, numberOfQblockInEachRowArray, 150, 100);
	}
	
	positionKartElements();
	positionExperience1Elements();
	positionExperience2Elements();
	positionExperience3Elements();
	positionExperience4Elements();
	positionExperience5Elements();
	positionSocialContainer();
	positionExperienceTextContainer();
	positionBoltBlockContainer();
	resetFireworkSvg();
}

function initTouchEvents()
{
	document.addEventListener("touchstart", handleStart, false);
	document.addEventListener("touchmove", handleMove, false);
	document.addEventListener("touchend", handleEnd, false);
}

function handleStart(e)
{
	//disable preventDefault() on touchstart so url will still be clickable
	//e.preventDefault();
	
	touchStartX = e.targetTouches[0].pageX;
	pageVerticalPositionOnTouch = pageVerticalPosition;
}

function handleMove(e)
{
	e.preventDefault();
	touchCurrentX = e.targetTouches[0].pageX;
	
	if (canScrollOrSwipe == true) //to avoid user swipe when window is still resizing after screen orientation changed on table
	{
		detectPageVerticalPosition();
		runTheseFunctionsAfterScrollOrSwipe();
	}
}

function handleEnd(e)
{
	e.preventDefault();
	touchEndX = e.changedTouches[0].pageX;
}

function runTheseFunctionsAfterScrollOrSwipe()
{
	orientKen();
	checkKenJumpFallSwim();
	moveLayers();
	shiftUpDownHorizontalLayers();
	animateInformationAndEnemiesElements();
	animateKenRunSwim();
	hideScrollOrSwipeTextContainer();
	hideContactConfirmationContainer();
	deviceFunctionScrollSwipe();
		
	printScrollSwipeText();
}

function deviceFunctionScrollSwipe()
{
	if (deviceName != "computer")
	{
		if (layersMovement == "vertical")
		{
			positionHorizontalLayersToHaveSameRightPosition();
		}
	}
}

function showContainer()
{
	containerDiv.setAttribute("class", "");
}

function shiftUpHorizontalLayersAfterEverythingLoaded()
{
	for (var i=0; i<layerHorizontalArray.length; i++)
	{
		$(layerHorizontalArray[i]).stop().animate({top: "0px"}, 1000, function() {finishShiftUpHorizontalLayersAfterEverythingLoaded()});
	}
}

function finishShiftUpHorizontalLayersAfterEverythingLoaded()
{
	if (canFinishShiftUpHorizontalLayersAfterEverythingLoaded == true)
	{
		canFinishShiftUpHorizontalLayersAfterEverythingLoaded = false;
		isPreloadShiftUpAnimationFinish = true;
		
		makePageScrollable();
		shiftDownKenContainer();
		animateScrollOrSwipeTextContainer();
	}
}

function shiftDownKenContainer()
{
	setKenJumpDownAndFallFrame();
	$(kenContainerDiv).stop().animate({bottom: "20%"}, 500, function() {setKenStaticFrame(); enableAnimateKenRunSwim()});
	
	//to make ken run animation work from beginning in internet explorer 8
	if ((browserName == "internet explorer") && (browserVersion <= 8))
	{
		enableAnimateKenRunSwim();
	}
}

function makePageScrollable()
{
	contentDiv.setAttribute("class", "");
	enableScrollOrSwipe();
}

function setFrontLayerVerticalHeight()
{
	layerVerticalArray[layerVerticalArray.length - 1].style.height = (2 * containerDiv.offsetHeight) + bannersContainerDiv.offsetHeight + gapBetweenContactCloudAndBannersContainer + "px";
}

function setBannersContainerVerticalPosition()
{
	bannersContainerDiv.style.bottom = containerDiv.offsetHeight + "px";
}

function setPageHeight()
{
	pageDiv.style.height = layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth + layerVerticalArray[layerVerticalArray.length - 1].offsetHeight + distanceBetweenKenAndLift + "px";
}

function setLayerSpeed()
{
	//empty array first
	while (layerHorizontalSpeedArray.length > 0)
	{
    	layerHorizontalSpeedArray.pop();
  	}
	
	while (layerVerticalSpeedArray.length > 0)
	{
    	layerVerticalSpeedArray.pop();
  	}
	
	//fill array
	for (var i=0; i<layerHorizontalArray.length; i++)
	{
		var layerHorizontalSpeed = (layerHorizontalArray[i].offsetWidth - containerDiv.offsetWidth) / (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth);
		layerHorizontalSpeedArray.push(layerHorizontalSpeed);
	}
	
	for (var i=0; i<layerVerticalArray.length; i++)
	{
		var layerVerticalSpeed = (layerVerticalArray[i].offsetHeight - containerDiv.offsetHeight) / (layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight);
		layerVerticalSpeedArray.push(layerVerticalSpeed);
	}
}

function detectPageVerticalPosition()
{
	previousPageVerticalPosition = pageVerticalPosition;
	
	if (deviceName == "computer")
	{	
		if (browserName == "internet explorer")
		{
			pageVerticalPosition = document.documentElement.scrollTop;
		}
		else
		{
			pageVerticalPosition = pageYOffset;
		}
	}
	else //mobile
	{
		pageVerticalPosition = pageVerticalPositionOnTouch + (touchStartX - touchCurrentX);
	
		if (pageVerticalPosition < 0)
		{
			pageVerticalPosition = 0;
		}
		if (pageVerticalPosition > pageDiv.offsetHeight - containerDiv.offsetHeight)
		{
			pageVerticalPosition = pageDiv.offsetHeight - containerDiv.offsetHeight;
		}
	}
	
	deltaPageVerticalPosition = pageVerticalPosition - previousPageVerticalPosition;
	
	if (pageVerticalPosition <= 0)
	{
		resetVariables();
		resetFunctions();
	}
}

function moveLayers()
{
	setLayersMovement();
	
	if (layersMovement == "horizontal")
	{
		//move layer horizontal
		for (var i=0; i<layerHorizontalArray.length; i++)
		{
			layerHorizontalArray[i].style.left = (-1 * layerHorizontalSpeedArray[i] * pageVerticalPosition) + "px";
		}
		
		positionLayerHorizontalToBottom();
		
		clearHappyKenTimer();
		positionVerticalLayersHorizontally(); //move vertical layers to follow horizontal layer movement
	}
	
	if (layersMovement == "vertical")
	{
		//shift layer vertical position
		for (var i=0; i<layerVerticalArray.length; i++)
		{
			layerVerticalArray[i].style.bottom = (-1 * layerVerticalSpeedArray[i] * (pageVerticalPosition - (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth))) + "px";
		}
		
		positionVerticalLayersAtLeftMost(); //make layer vertical position has same left position
		positionHorizontalLayersToHaveSameRightPosition(); //make layer horizontal position has same right position
		positionHorizontalLayersVertically();
		
		clearShiftKenFrameTimer(); //make ken stand still when he is inside lift
		clearHappyKenTimer();
	}
	
	if (layersMovement == "not moving 1")
	{
		positionVerticalLayersAtLeftMost();
		positionVerticalLayersToHaveSameTopPosition();
		positionHorizontalLayersAtBottomMost();
		positionHorizontalLayersToHaveSameRightPosition();
		
		clearHappyKenTimer();
	}
	
	if (layersMovement == "not moving 2")
	{
		positionVerticalLayersAtLeftMost();
		positionVerticalLayersToHaveSameTopPosition();
		positionHorizontalLayersAtBottomMost();
		positionHorizontalLayersToHaveSameRightPosition();
		
		animateSocialContainer();
		happyKen();
		drawManyFireworks();
	}
	
	positionLiftAndKenContainerHorizontally();
	positionContactContainer();
	positionFireworksContainer();
}

function positionVerticalLayersAtLeftMost()
{
	for (var i=0; i<layerVerticalArray.length; i++)
	{
		layerVerticalArray[i].style.left = "0px";
	}
}

function positionHorizontalLayersToHaveSameRightPosition()
{
	for (var i=0; i<layerHorizontalArray.length; i++)
	{
		layerHorizontalArray[i].style.left = containerDiv.offsetWidth - layerHorizontalArray[i].offsetWidth + "px";
	}
}

function positionHorizontalLayersVertically()
{
	for (var i=0; i<layerHorizontalArray.length; i++)
	{
		//layerHorizontalArray[i].style.top = layerVerticalArray[i].offsetTop + layerVerticalArray[i].offsetHeight - containerDiv.offsetHeight + "px";
		layerHorizontalArray[i].style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetTop + layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight + "px";
	}
}

function positionHorizontalLayersAtBottomMost()
{
	for (var i=0; i<layerHorizontalArray.length; i++)
	{
		layerHorizontalArray[i].style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight + "px";
	}
}

function setKenLeftAndRightEdge()
{
	var distanceBetweenKenDivEdgeToHisFeet = 65;
	
	kenRightEdge = 0.5 * (containerDiv.offsetWidth + kenDiv.offsetWidth) - distanceBetweenKenDivEdgeToHisFeet;
	kenLeftEdge = 0.5 * (containerDiv.offsetWidth - kenDiv.offsetWidth) + distanceBetweenKenDivEdgeToHisFeet;
}

function positionVerticalLayersToHaveSameTopPosition()
{
	for (var i=0; i<layerVerticalArray.length; i++)
	{
		layerVerticalArray[i].style.bottom = containerDiv.offsetHeight - layerVerticalArray[i].offsetHeight + "px";
	}
}

function positionVerticalLayersBottomToHorizontalLayersBottom()
{
	for (var i=0; i<layerVerticalArray.length; i++)
	{
		layerVerticalArray[i].style.bottom = (-1 * layerHorizontalArray[i].offsetTop) + "px";
	}
}

function shiftUpDownHorizontalLayers()
{
		if (
		((previousPageVerticalPosition < sea1Div.offsetLeft - kenLeftEdge) || (previousPageVerticalPosition > sea1Div.offsetLeft + sea1Div.offsetWidth - kenRightEdge))
		&&
		((pageVerticalPosition >= sea1Div.offsetLeft - kenLeftEdge) && (pageVerticalPosition <= sea1Div.offsetLeft + sea1Div.offsetWidth - kenRightEdge))
		)
		{
			isKenSwimming = true;
			shiftUpLayerHorizontal();
			shiftKenToSeaFloor();
			createBubble();
		}
		if (
		((previousPageVerticalPosition >= sea1Div.offsetLeft - kenLeftEdge) && (previousPageVerticalPosition <= sea1Div.offsetLeft + sea1Div.offsetWidth - kenRightEdge))
		&&
		((pageVerticalPosition < sea1Div.offsetLeft - kenLeftEdge) || (pageVerticalPosition > sea1Div.offsetLeft + sea1Div.offsetWidth - kenRightEdge))
		)
		{
			isKenSwimming = false;
			shiftDownLayerHorizontal();
			shiftKenToGroundLevel();
			clearInterval(bubbleTimer);
			clearInterval(blinkSeaAnimalsTimer);
		}
}

function shiftUpDownHorizontalLayersOnResize()
{
	if
	(
	((pageVerticalPosition >= sea1Div.offsetLeft - kenLeftEdge) && (pageVerticalPosition <= sea1Div.offsetLeft + sea1Div.offsetWidth - kenRightEdge))
	)
	{
		clearInterval(shiftUpLayerHorizontalTimer);
		clearInterval(shiftDownLayerHorizontalTimer);
		
		isKenSwimming = true;	
		
		positionLayerHorizontalToTop();
			
		//need to shift up vertical layers too, so the cloud in vertical layers are not entering the sea
		positionVerticalLayersBottomToHorizontalLayersBottom();
		
		createBubble();
	}
	if
	(
	((pageVerticalPosition < sea1Div.offsetLeft - kenLeftEdge) || (pageVerticalPosition > sea1Div.offsetLeft + sea1Div.offsetWidth - kenRightEdge))
	)
	{
		clearInterval(shiftUpLayerHorizontalTimer);
		clearInterval(shiftDownLayerHorizontalTimer);
		
		isKenSwimming = false;
		
		if (layersMovement == "horizontal") 
		{
			positionLayerHorizontalToBottom();
			positionVerticalLayersBottomToHorizontalLayersBottom();
		}
		else
		{
			positionHorizontalLayersAtBottomMost();
			positionHorizontalLayersToHaveSameRightPosition();
		}
		
		clearInterval(bubbleTimer);
		clearInterval(blinkSeaAnimalsTimer);
	}
}

function setShiftUpLayerHorizontalDistance()
{
	shiftUpLayerHorizontalDistance = 0.75 * containerDiv.offsetHeight;
}

function shiftUpLayerHorizontal()
{	
	setShiftUpLayerHorizontalDistance();
	
	//shift up horizontal layers
	clearShiftUpDownLayerHorizontalTimer();
	shiftUpLayerHorizontalTimer = setInterval(function(){moveUpLayerHorizontal()}, shiftUpDownLayerHorizontalInterval);
	
	disableIsKenJumpingAndFalling();
}

function moveUpLayerHorizontal() //ken from ground into sea
{
	if (layersMovement == "horizontal") 
	{
		for (var i=0; i<layerHorizontalArray.length; i++)
		{
			var layerHorizontalArrayTop = layerHorizontalArray[i].offsetTop - shiftUpDownLayerHorizontalIncrement;
			
			//shift up horizontal layers
			if (layerHorizontalArrayTop <= -shiftUpLayerHorizontalDistance)
			{
				layerHorizontalArrayTop = -shiftUpLayerHorizontalDistance;
				layerHorizontalArray[i].style.top = layerHorizontalArrayTop + "px";
				clearInterval(shiftUpLayerHorizontalTimer);
			}
			else
			{
				layerHorizontalArray[i].style.top = layerHorizontalArrayTop + "px";
			}
			
			//check if ken already below sea level or not
			if (kenContainerDiv.offsetTop > sea1Div.offsetTop + layerHorizontalArray[layerHorizontalArray.length - 1].offsetTop)
			{
				isKenBelowSeaLevel = true;
			}
		}
		
		//need to shift up vertical layers too, so the cloud in vertical layers are not entering the sea
		positionVerticalLayersBottomToHorizontalLayersBottom();
	}
	else
	{
		clearInterval(shiftUpLayerHorizontalTimer);
		positionHorizontalLayersAtBottomMost();
		positionHorizontalLayersToHaveSameRightPosition();
		
		isKenBelowSeaLevel = false;
	}
}

function shiftDownLayerHorizontal()
{
	//shift down horizontal layers
	clearShiftUpDownLayerHorizontalTimer();
	shiftDownLayerHorizontalTimer = setInterval(function(){moveDownLayerHorizontal()}, shiftUpDownLayerHorizontalInterval);
}

function moveDownLayerHorizontal() //ken from sea to ground
{
	if (layersMovement == "horizontal") 
	{
		for (var i=0; i<layerHorizontalArray.length; i++)
		{
			var layerHorizontalArrayTop = layerHorizontalArray[i].offsetTop + shiftUpDownLayerHorizontalIncrement;
			
			//shift down horizontal layers
			if (layerHorizontalArrayTop >= 0)
			{
				layerHorizontalArrayTop = 0;
				layerHorizontalArray[i].style.top = layerHorizontalArrayTop + "px";
				clearInterval(shiftDownLayerHorizontalTimer);
			}
			else
			{
				layerHorizontalArray[i].style.top = layerHorizontalArrayTop + "px";
			}
			
			//check if ken already above sea level or not
			if (kenContainerDiv.offsetTop < sea1Div.offsetTop + layerHorizontalArray[layerHorizontalArray.length - 1].offsetTop)
			{
				isKenBelowSeaLevel = false;
			}
		}
		
		//need to shift down vertical layers back
		positionVerticalLayersBottomToHorizontalLayersBottom();
	}
	else
	{
		clearInterval(shiftDownLayerHorizontalTimer);
		positionHorizontalLayersAtBottomMost();
		positionHorizontalLayersToHaveSameRightPosition();
		
		isKenBelowSeaLevel = false;
	}
}

function clearShiftUpDownLayerHorizontalTimer()
{
	clearInterval(shiftUpLayerHorizontalTimer);
	clearInterval(shiftDownLayerHorizontalTimer);
}

function shiftKenToGroundLevel()
{
	$(kenContainerDiv).stop().animate({bottom: containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop + "px"}, 300, function() {});
}

function shiftKenToSeaFloor()
{
	$(kenContainerDiv).stop().animate({bottom: seaFloorDiv.offsetHeight + "px"}, 300, function() {});
}

function positionLayerHorizontalToTop()
{
	if (isKenSwimming == true)
	{
		setShiftUpLayerHorizontalDistance();
		
		//shift up horizontal layers
		for (var i=0; i<layerHorizontalArray.length; i++)
		{
			layerHorizontalArray[i].style.top = -shiftUpLayerHorizontalDistance + "px";
		}
		
		//shift up vertical layers too
		for (var i=0; i<layerVerticalArray.length; i++)
		{
			layerVerticalArray[i].style.bottom = shiftUpLayerHorizontalDistance + "px";
		}
	}
}

function positionLayerHorizontalToBottom()
{
	if (isKenSwimming == false)
	{
		//make sure horizontal layers have same vertical position after they are moved vertically
		for (var i=0; i<layerHorizontalArray.length; i++)
		{
			layerHorizontalArray[i].style.top = "0px";
		}
			
		//make layer vertical position has same bottom position
		for (var i=0; i<layerVerticalArray.length; i++)
		{
			layerVerticalArray[i].style.bottom = "0px";
		}
	}
}

function checkKenJumpFallSwim()
{
	if (layersMovement == "horizontal") 
	{
		if (isKenSwimming == true)
		{
			if (isKenBelowSeaLevel == true) //to avoid ken swims above the water level
			{
				kenSwimUp();
			}
		}
		else
		{
			for (var i=0; i<pylonArray.length; i++)
			{
				kenJumpUp(i);
				kenFall(i);
			}
		}
	}
}

function kenJumpUp(i)
{
		//when character move from left to right
		if (((previousPageVerticalPosition <= pylonArray[i].offsetLeft - kenRightEdge) && (pageVerticalPosition > pylonArray[i].offsetLeft - kenRightEdge))
		||
		//when character move from right to left
		((previousPageVerticalPosition >= pylonArray[i].offsetLeft + pylonArray[i].offsetWidth - kenLeftEdge) && (pageVerticalPosition < pylonArray[i].offsetLeft + pylonArray[i].offsetWidth - kenLeftEdge)))
		{
			positionKenAtGroundLevel(); 
			$(kenContainerDiv).stop().animate({bottom: [containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop + 300, 'easeOutCubic']}, 300, function() {kenJumpDown(i)});
			setKenJumpUpFrame();
		}	
}

function kenJumpDown(i)
{
		//when character move from left to right and landing on pylon
		if ((pageVerticalPosition > pylonArray[i].offsetLeft - kenRightEdge) && (pageVerticalPosition < pylonArray[i].offsetLeft + pylonArray[i].offsetWidth - kenLeftEdge))
		{
			$(kenContainerDiv).stop().animate({bottom: [containerDiv.offsetHeight - pylonArray[i].offsetTop, 'easeInCubic']}, 300, function() {disableIsKenJumpingAndFalling(); setKenStaticFrame()});
			setKenJumpDownAndFallFrame();
		}
}

function kenFall(i)
{
		//when character move from left to right
		if (((previousPageVerticalPosition < pylonArray[i].offsetLeft + pylonArray[i].offsetWidth - kenLeftEdge) && (pageVerticalPosition >= pylonArray[i].offsetLeft + pylonArray[i].offsetWidth - kenLeftEdge))
		||
		//when character move from right to left
		((previousPageVerticalPosition > pylonArray[i].offsetLeft - kenRightEdge) && (pageVerticalPosition <= pylonArray[i].offsetLeft - kenRightEdge)))
		{
			isKenFalling = true;
			setKenJumpDownAndFallFrame();
			$(kenContainerDiv).stop().animate({bottom: [containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop, 'easeInCubic']}, 300, function() {disableIsKenJumpingAndFalling(); setKenStaticFrame()});
		}
}

function setKenJumpUpFrame()
{
	clearShiftKenFrameTimer();
	isKenJumping = true;
	kenFramesDiv.style.left = (-1 * kenStartJumpFrame * kenOneFrameWidth) + "px";
}

function setKenJumpDownAndFallFrame()
{
	kenFramesDiv.style.left = (-1 * kenStopJumpFrame * kenOneFrameWidth) + "px";
}

function setKenStaticFrame()
{
	kenFramesDiv.style.left = "0px";
}

function disableIsKenJumpingAndFalling()
{
	isKenJumping = false;
	isKenFalling = false;
}

function kenSwimUp()
{
	getSwimUpHeight();
	
	if (swimUpHeight > 0) 
	{
		var swimUpDistance = seaFloorDiv.offsetHeight + swimUpHeight + "px";
		
		var kenSwimUpTime = 3 * swimUpHeight;
		var kenSwimDownTime = 6 * swimUpHeight;
		
		$(kenContainerDiv).stop().animate({bottom: swimUpDistance}, kenSwimUpTime, function() {kenSwimDown(kenSwimDownTime)});
	}
}

function kenSwimDown(kenSwimDownTime)
{
	$(kenContainerDiv).stop().animate({bottom: seaFloorDiv.offsetHeight + "px"}, kenSwimDownTime, function() {setKenStaticFrame()});
	
	if (kenContainerDiv.offsetTop + kenContainerDiv.offsetHeight <= containerDiv.offsetHeight - seaFloorDiv.offsetHeight - minimumVerticalDistanceToTriggerKenSwimDownFrame) //if ken position high enough when swim down
	{
		kenFramesDiv.style.left = (-1 * kenSwimDownFrame * kenOneFrameWidth) + "px"; //swim with cape on top
	}
	else
	{
		setKenStaticFrame();
	}
}

function animateKenBlanks()
{
	clearInterval(blinkKenEyesTimer);
	blinkKenEyesTimer = setInterval(function(){blinkKenBlanks()}, 4000);
}

function blinkKenBlanks()
{
	if (layersMovement != "not moving 2")
	{
		$(kenBlanksCloseDiv).fadeTo(0,1);
		$(kenBlanksCloseDiv).stop().delay(300).animate({opacity: 0}, 0, function() {});
	}
}

function hideKenBlanksClose()
{
	$(kenBlanksCloseDiv).fadeTo(0,0);
}

function getSwimUpHeight()
{
	swimUpHeight = Math.abs(deltaPageVerticalPosition);
	var maxSwimUpHeight = sea1Div.offsetHeight - kenDiv.offsetHeight;
	
	if (swimUpHeight > maxSwimUpHeight)
	{
		swimUpHeight = maxSwimUpHeight;
	}
}

function positionVerticalLayersHorizontally()
{	
	for (var i=0; i<layerVerticalArray.length; i++)
	{
		layerVerticalArray[i].style.left = layerHorizontalArray[i].offsetLeft + layerHorizontalArray[i].offsetWidth - containerDiv.offsetWidth + "px";
	}
}

function positionLiftAndKenContainerHorizontally()
{
	var layerVerticalMovementDistance = (pageVerticalPosition * layerHorizontalSpeedArray[layerHorizontalSpeedArray.length - 1]) - (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth);
	
	var kenMaxHorizontalDistanceFromCenter = 250;
	var liftMaxHorizontalDistanceFromCenter = 50;
	
	//calculate kenHorizontalDistance
	kenMaxHorizontalDistance = (0.5 * containerDiv.offsetWidth) + kenMaxHorizontalDistanceFromCenter;
	var kenHorizontalDistance = (0.5 * containerDiv.offsetWidth) + layerVerticalMovementDistance;
	if (kenHorizontalDistance >= kenMaxHorizontalDistance)
	{
		kenHorizontalDistance = kenMaxHorizontalDistance
	}
	
	//calculate liftHorizontalDistance
	var liftMaxHorizontalDistance = (0.5 * containerDiv.offsetWidth) + liftMaxHorizontalDistanceFromCenter;
	var liftHorizontalDistance = (0.5 * (containerDiv.offsetWidth - liftDiv.offsetWidth)) + layerVerticalMovementDistance;
	if (liftHorizontalDistance >= liftMaxHorizontalDistance)
	{
		liftHorizontalDistance = liftMaxHorizontalDistance;
	}
	
	if (layersMovement == "vertical")
	{
		//shift lift to right
		liftDiv.style.left = liftHorizontalDistance + "px";
		
		//shift ken to right
		kenContainerDiv.style.left = kenHorizontalDistance + "px";
			
	}
	else if ((layersMovement == "not moving 1") || (layersMovement == "not moving 2"))
	{
		//ken start walk on the cloud
		kenContainerDiv.style.left = kenHorizontalDistance + pageVerticalPosition - (pageDiv.offsetHeight - containerDiv.offsetHeight - distanceBetweenKenAndLift) + "px";
		
		//reposition lift for on resize
		liftDiv.style.left = liftHorizontalDistance + "px"; 
	}
	else
	{
		//lift and ken still in normal position
		liftDiv.style.left = layerHorizontalArray[layerHorizontalArray.length - 1].offsetLeft + layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - (0.5 * (containerDiv.offsetWidth + liftDiv.offsetWidth)) + "px";
		kenContainerDiv.style.left = "50%";
	}
}

function positionLiftVertically() //to fix the bug in android change screen orientation
{
	liftDiv.style.bottom = (0.045 * containerDiv.offsetHeight) + "px";
}

function setLayersMovement()
{
	if (pageVerticalPosition * layerHorizontalSpeedArray[layerHorizontalSpeedArray.length - 1] <= layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth)
	{
		layersMovement = "horizontal";
	}
	else if ((pageVerticalPosition >= pageDiv.offsetHeight - containerDiv.offsetHeight - distanceBetweenKenAndLift) && (pageVerticalPosition < pageDiv.offsetHeight - containerDiv.offsetHeight))
	{
		layersMovement = "not moving 1"; //ken walking from lift to the finish line
	}
	else if (pageVerticalPosition >= pageDiv.offsetHeight - containerDiv.offsetHeight)
	{
		layersMovement = "not moving 2"; //ken at the finish line
	}
	else
	{
		layersMovement = "vertical";
	}
}

function orientKen()
{
	if (deltaPageVerticalPosition > 0)
	{
		kenFramesDiv.style.top = "0px";
		kenBlanksCloseDiv.style.left = "85px";
	}
	if (deltaPageVerticalPosition < 0)
	{
		kenFramesDiv.style.top = "-200px";
		kenBlanksCloseDiv.style.left = "48px";
	}
}

function storeDivs()
{
	var divArray = document.getElementsByTagName("div");
	
    for (var i=0; i<divArray.length; i++)
	{
        if (divArray[i].getAttribute("class") == "coin")
		{
			coinArray.push(divArray[i]);
        }
		if (divArray[i].getAttribute("class") == "koopa")
		{
			koopaArray.push(divArray[i]);
        }
		if (divArray[i].getAttribute("class") == "qblock")
		{
			qblockArray.push(divArray[i]);
        }
		if ((divArray[i].getAttribute("class") == "kart-dk") || (divArray[i].getAttribute("class") == "kart-koopa") || (divArray[i].getAttribute("class") == "kart-luigi") || (divArray[i].getAttribute("class") == "kart-mario") || (divArray[i].getAttribute("class") == "kart-peach") || (divArray[i].getAttribute("class") == "kart-toad") || (divArray[i].getAttribute("class") == "kart-yoshi") || (divArray[i].getAttribute("class") == "kart-bowser"))
		{
			kartBoardArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "pylon")
		{
			pylonArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "plant")
		{
			plantArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "yoshiHouse")
		{
			yoshiHouseArray.push(divArray[i]);
		}
		if ((divArray[i].getAttribute("class") == "yoshiHouse-blank-a-eyes") || (divArray[i].getAttribute("class") == "yoshiHouse-blank-b-eyes"))
		{
			yoshiHouseKgmBlankArray.push(divArray[i]);
		}
		if ((divArray[i].getAttribute("class") == "yoshiHouse-grp-frame-a") || (divArray[i].getAttribute("class") == "yoshiHouse-grp-frame-b"))
		{
			yoshiHouseEmptyFrameArray.push(divArray[i]);
		}
		if ((divArray[i].getAttribute("class") == "yoshiHouse-grp-container-a") || (divArray[i].getAttribute("class") == "yoshiHouse-grp-container-b"))
		{
			yoshiHouseEmptyContainerArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "contact-confirmation-container")
		{
			contactConfirmationContainerArray.push(divArray[i]);
		}
		
		if ((divArray[i].getAttribute("class") == "experience-text-container-ascendia") || (divArray[i].getAttribute("class") == "experience-text-container-sd") || (divArray[i].getAttribute("class") == "experience-text-container-kgm") || (divArray[i].getAttribute("class") == "experience-text-container-petro") || (divArray[i].getAttribute("class") == "experience-text-container-hmhco"))
		{
			experienceTextContainerArray.push(divArray[i]);
		}
		
		if (divArray[i].getAttribute("class") == "bolt-block-drop-container")
		{
			BoltBlockContainerArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "layer-horizontal")
		{
			layerHorizontalArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "layer-vertical")
		{
			layerVerticalArray.push(divArray[i]);
		}
		if ((divArray[i].getAttribute("class") == "algae-a") || (divArray[i].getAttribute("class") == "algae-b") || (divArray[i].getAttribute("class") == "title-skills-class"))
		{
			seaFloorFrontObjectArray.push(divArray[i]);
		}
		if ((divArray[i].getAttribute("class") == "rock") || (divArray[i].getAttribute("class") == "rock-big"))
		{
			seaFloorBackObjectArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "sduis-hand-close")
		{
			sduisBlankCloseArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "sduis-hand-open")
		{
			sduisBlankOpenArray.push(divArray[i]);
		}
		if (divArray[i].getAttribute("class") == "firework")
		{
			fireworkArray.push(divArray[i]);
        }
    }
}

function animatePlants()
{
	for (var i=0; i<plantArray.length; i++)
	{
		$(plantArray[i]).stop().delay(i * 300).animate({top: [plantTargetTopObjectArray[i].offsetTop, 'easeOutElastic']}, 800, function() {});
	}
}

function positionPlants()
{
	for (var i=0; i<plantArray.length; i++)
	{
		if (canAnimatePlantInformation == true)
		{
			plantArray[i].style.top = "100%";
		}
		else
		{
			plantArray[i].style.top = plantTargetTopObjectArray[i].offsetTop + "px";
		}
	}
}

function animateYoshiHouse()
{
	clearInterval(yoshiHouseEmptyTimer);
	yoshiHouseEmptyTimer = setInterval(function(){animateYoshiHouseEmpty()}, 200);
	
	for (var i=0; i<yoshiHouseArray.length; i++)
	{
		$(yoshiHouseArray[i]).stop().delay(i * 300).animate({left: [yoshiHouseTargetLeftArray[i], 'easeOutCubic']}, 1000, function() {});
	}
}

function animateYoshiHouseEmpty()
{
	yoshiHouseCounter = yoshiHouseCounter + 1;
	
	for (var i=0; i<yoshiHouseEmptyFrameArray.length; i++)
	{
		if (yoshiHouseEmptyFrameArray[yoshiHouseArray.length - 1].offsetLeft == yoshiHouseTargetLeftArray[yoshiHouseTargetLeftArray.length - 1]) //if last yoshiHouse already stop moving
		{
			yoshiHouseEmptyFrameArray[yoshiHouseEmptyFrameArray.length - 1].style.left = "0px";
			clearInterval(yoshiHouseEmptyTimer);
			yoshiHouseCounter = 0;
			
			return;
		}
		else if ((yoshiHouseEmptyFrameArray[i].offsetLeft > yoshiHouseTargetLeftArray[i]) && (yoshiHouseEmptyFrameArray[i].offsetLeft < yoshiHouseEarlyPositionArray[i])) //if yoshiHouse still running
		{
			yoshiHouseEmptyFrameArray[i].style.left = (-1 * yoshiHouseEmptyContainerArray[i].offsetWidth * (yoshiHouseCounter % 2)) + "px";
		}
		
		else //if yoshiHouse already stop moving
		{
			yoshiHouseEmptyFrameArray[i].style.left = "0px";
		}
	}
}

function animateYoshiHouseBlanks()
{
	clearInterval(yoshiHouseBlinkTimer);
	yoshiHouseBlinkTimer = setInterval(function(){blinkYoshiHouse()}, 4000); //start to blink yoshiHouse eyes
}

function blinkYoshiHouse()
{
	if ((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < about2ContainerDiv.offsetLeft) || (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > about2ContainerDiv.offsetLeft + about2ContainerDiv.offsetWidth))
	{
		clearInterval(yoshiHouseBlinkTimer);
	}
	else
	{
		var yoshiHouseRandomNumber = Math.floor(Math.random() * yoshiHouseArray.length); //generate random number between 0-2
		
		$(yoshiHouseKgmBlankArray[yoshiHouseRandomNumber]).fadeTo(0,1);
		$(yoshiHouseKgmBlankArray[yoshiHouseRandomNumber]).stop().delay(300).animate({opacity: 0}, 0, function() {});
	}
}

function positionYoshiHouse()
{
	for (var i=0; i<yoshiHouseArray.length; i++)
	{
		yoshiHouseArray[i].style.left = yoshiHouseEarlyPositionArray[i] + "px";
	}
}

function kartBoardsJump()
{
	for (var i=0; i<kartBoardArray.length; i++)
	{
		$(kartBoardArray[i]).stop().delay(i * 100).animate({bottom: [200, 'easeOutCubic']}, 300, function() {kartBoardsFall()});
	}
}

function kartBoardsFall()
{
	$(kartBoardArray[kartBoardsCounter]).stop().animate({bottom: [0, 'easeInCubic']}, 300, function() {});
	
	kartBoardsCounter = kartBoardsCounter + 1;
	
	if (kartBoardsCounter >= kartBoardArray.length)
	{
		kartBoardsCounter = 0; //reset kartBoardsCounter
	}
}

function positionKartBoard()
{
	for (var i=0; i<kartBoardArray.length; i++)
	{
		kartBoardArray[i].style.bottom = "0px";
	}
}

function animateKartBoardsContinuously()
{
	clearInterval(kartBoardsAnimationTimer);
	kartBoardsAnimationTimer = setInterval(function(){kartBoardsJump()}, 3000);
}

function animateKartPlayer()
{
	kartPlayerRun();
}

function kartPlayerRun()
{
	clearInterval(kartPlayerTimer);
	kartPlayerTimer = setInterval(function(){animateKartPlayerRun()}, 200);
	
	$(kartPlayerContainerDiv).stop().animate({left: "690px"}, 1000, function() {kartPlayerFall()});
}

function animateKartPlayerRun()
{
	kartPlayerCounter = kartPlayerCounter + 1;
	shiftKartPlayerFrame(kartPlayerCounter % 2);
}

function kartPlayerFall()
{
	shakeRim();
	bounceBall();
	kartBoardsJump();
	animateKartBoardsContinuously();
	$(kartPlayerContainerDiv).stop().animate({left: "350px", bottom:[0, 'easeInCubic']}, 300, function() {});
}

function shiftKartPlayerFrame(kartPlayerFrameNumber)
{
	kartPlayerFrameDiv.style.left = (-290 * kartPlayerFrameNumber) + "px";
}

function shakeRim()
{
	//rim go down first with this function, then bounce up with the moveRimUp function
	$(kartRimContainerDiv).stop().animate({bottom:[-50, 'easeOutCubic']}, 100, function() {moveRimUp()});
}

function moveRimUp()
{
	$(kartRimContainerDiv).stop().animate({bottom:[0, 'easeOutElastic']}, 500, function() {});
}

function bounceBall()
{
	$(kartBallDiv).fadeTo(0,1);
	$(kartBallDiv).stop().animate({bottom:[150, 'easeOutBounce']}, 1200, function() {});
}

function positionKartElements()
{
	stopAllKartAnimation();
	setAllKartCounter();
	clearAllKartTimer();
	positionKartBoard();
	positionKartPlayerContainer();
	hideKartBall();
}

function positionKartPlayerContainer()
{
	kartPlayerContainerDiv.style.left = "1400px";
	kartPlayerContainerDiv.style.bottom = "0px";
}

function hideKartBall()
{
	$(kartBallDiv).fadeTo(0,0);
	
	kartBallDiv.style.left = "415px";
	kartBallDiv.style.bottom = "250px";
}

function animateKartPlayerBlanks()
{
	clearInterval(blinkKartPlayerTimer);
	blinkKartPlayerTimer = setInterval(function(){blinkKartPlayer()}, 4000);
}

function blinkKartPlayer()
{
	if ((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < about3ContainerDiv.offsetLeft) || (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > about3ContainerDiv.offsetLeft + about3ContainerDiv.offsetWidth))
	{
		clearInterval(blinkKartPlayerTimer);
	}
	else
	{
		$(kartPlayerBlanksDiv).fadeTo(0,1);	
		$(kartPlayerBlanksDiv).stop().delay(300).animate({opacity: 0}, 0, function() {});
	}
}

function clearAllKartTimer()
{
	clearInterval(blinkKartPlayerTimer);
	clearInterval(kartBoardsAnimationTimer);
	clearInterval(kartPlayerTimer);
}

function setAllKartCounter()
{
	kartBoardsCounter = 0;
	kartPlayerCounter = 0;
}

function stopAllKartAnimation()
{
	//stop kart board animation
	for (var i=0; i<kartBoardArray.length; i++)
	{
		$(kartBoardArray[i]).stop(true, false);
	}
	
	//stop kart player animation
	$(kartPlayerContainerDiv).stop(true, false);
}

function positionSeaAnimals(seaAnimalArray, numberOfSeaAnimalInEachRowArray, horizontalDistanceBetweenAnimals, verticalDistanceBetweenAnimals)
{
	var seaAnimalLocalArray = seaAnimalArray;
	var numberOfSeaAnimalInEachRowLocalArray = numberOfSeaAnimalInEachRowArray;
	var columnDistance = horizontalDistanceBetweenAnimals;
	var rowDistance = verticalDistanceBetweenAnimals;
	
	var seaAnimalLocalNumber = 0;
	
	for (var i=0; i<numberOfSeaAnimalInEachRowLocalArray.length; i++)
	{
		for (var j=0; j<numberOfSeaAnimalInEachRowLocalArray[i]; j++)
		{
			seaAnimalLocalArray[seaAnimalLocalNumber].style.left = seaAnimalSwimDistance + (j * columnDistance) + "px";
			seaAnimalLocalArray[seaAnimalLocalNumber].style.top = (i * rowDistance) + "px";
			seaAnimalLocalNumber = seaAnimalLocalNumber + 1;
		}
	}
}

function animateSeaAnimals(seaAnimalArray)
{	
	var seaAnimalLocalArray = seaAnimalArray;
	
	if (seaAnimalLocalArray == coinArray)
	{
		isCoinStillAnimating = true;
	}
	
	if (seaAnimalLocalArray == koopaArray)
	{
		isKoopaStillAnimating = true;
	}
	
	if (seaAnimalLocalArray == qblockArray)
	{
		isQblockStillAnimating = true;
	}
	
	for (var i=0; i<seaAnimalLocalArray.length; i++)
	{
		$(seaAnimalLocalArray[i]).stop().delay(i * 100).animate({left: [seaAnimalLocalArray[i].offsetLeft - seaAnimalSwimDistance, 'easeOutCubic']}, 600, function() {disableIsSeaAnimalStillAnimating(seaAnimalLocalArray)});
	}
}

function disableIsSeaAnimalStillAnimating(seaAnimalArray)
{
	var seaAnimalLocalArray = seaAnimalArray;
	
	if (seaAnimalLocalArray == coinArray)
	{
		if (coinAnimateNumber >= seaAnimalLocalArray.length - 1)
		{
			isCoinStillAnimating = false;
			coinAnimateNumber = 0;
		}
		else
		{
			coinAnimateNumber = coinAnimateNumber + 1;
		}
	}
		
	if (seaAnimalLocalArray == koopaArray)
	{
		if (koopaAnimateNumber >= seaAnimalLocalArray.length - 1)
		{
			isKoopaStillAnimating = false;
			koopaAnimateNumber = 0;
		}
		else
		{
			koopaAnimateNumber = koopaAnimateNumber + 1;
		}
	}
		
	if (seaAnimalLocalArray == qblockArray)
	{
		if (qblockAnimateNumber >= seaAnimalLocalArray.length - 1)
		{
			isQblockStillAnimating = false;
			qblockAnimateNumber = 0;
		}
		else
		{
			qblockAnimateNumber = qblockAnimateNumber + 1;
		}
	}
}

function animateKenRunSwim()
{
	if ((canAnimateKenRunSwim == true) && (isKenJumping == false) && (isKenFalling == false) && (layersMovement != "vertical"))
	{
		disableAnimateKenRunSwim();
		
		clearInterval(shiftKenFrameTimer);
		shiftKenFrameTimer = setInterval(function(){shiftKenFrame()}, shiftKenFrameTimeInterval);
	}
}

function shiftKenFrame()
{
	if (isKenFalling == true)
	{
		clearShiftKenFrameTimer();
		setKenJumpDownAndFallFrame();
		return; //exit shiftKenFrame function now
	}
	else if ((isKenSwimming == true) && (isKenBelowSeaLevel == true))
	{
		kenStartFrame = kenStartSwimFrame;
		kenStopFrame = kenStopSwimFrame;
	}
	else
	{
		kenStartFrame = kenStartRunFrame;
		kenStopFrame = kenStopRunFrame;
	}
		
	kenFramesDiv.style.left = (-1 * kenOneFrameWidth * (kenStartFrame + counter)) + "px"; //(kenStartFrame + counter) will decide which frame will be shown
	
	if (kenStartFrame + counter + switcher > kenStopFrame) //time to decrease counter by making counter has a negative value
	{
		switcher = -1 * switcher;
	}
	
	if (kenStartFrame + counter  + switcher == kenStartFrame)
	{
		pageVerticalPositionWhenAnimateKen1 = pageVerticalPosition; //record previous page vertical position when ken animate
	}
		
	if (kenStartFrame + counter  + switcher < kenStartFrame)
	{
		pageVerticalPositionWhenAnimateKen2 = pageVerticalPosition; //record current page vertical position when ken animate
		
		if (pageVerticalPositionWhenAnimateKen1 == pageVerticalPositionWhenAnimateKen2) //when user is no longer scrolling
		{
			clearShiftKenFrameTimer();
			
			//to make ken hands up right away after pass the finish line (one time animation only)
			if (layersMovement == "not moving 2")
			{
				kenBlankUp();
			}
			
			return; //to exit shiftKenFrame function now, otherwise counter will be plus one (counter = counter + switcher)
		}	
		else //user still scrolling, so increase the counter again by making counter has a positive value
		{
			switcher = -1 * switcher;
		}
	}
		
	counter = counter + switcher;
}

function clearShiftKenFrameTimer()
{
	clearInterval(shiftKenFrameTimer);
	
	if (
	(isKenSwimming == false)
	||
	((isKenSwimming == true) && (kenContainerDiv.offsetTop + kenContainerDiv.offsetHeight >= containerDiv.offsetHeight - seaFloorDiv.offsetHeight)) //ken at the bottom of the sea
	)
	{
		setKenStaticFrame();
	}
	
	counter = 0;
	switcher = 1;
	enableAnimateKenRunSwim();
}

function enableAnimateKenRunSwim()
{
	canAnimateKenRunSwim = true;
}

function disableAnimateKenRunSwim()
{
	canAnimateKenRunSwim = false;
}

function positionBoltBlockContainer()
{
	for (var i=0; i<BoltBlockContainerArray.length; i++)
	{
		if (i == 0)
		{
			canAnimateSpacerInformation = canAnimateAscendiaInformation;
		}
		if (i == 1)
		{
			canAnimateSpacerInformation = canAnimateSduisInformation;
		}
		if (i == 2)
		{
			canAnimateSpacerInformation = canAnimateKgmInformation;
		}
		if (i == 3)
		{
			canAnimateSpacerInformation = canAnimatePetroInformation;
		}
		if (i == 4)
		{
			canAnimateSpacerInformation = canAnimateHmhcoInformation;
		}
		
		//position x
		BoltBlockContainerArray[i].style.left = (0.5 * experienceTextContainerArray[i].offsetWidth) - (0.5 * BoltBlockContainerArray[i].offsetWidth) + "px";
		
		//position y
		if (canAnimateSpacerInformation == true)
		{
			BoltBlockContainerArray[i].style.bottom = (0.8 * containerDiv.offsetHeight) + experienceTextContainerArray[i].offsetHeight + "px";
		}
		else
		{
			BoltBlockContainerArray[i].style.bottom = experienceTextContainerDistanceFromFloor + experienceTextContainerArray[i].offsetHeight + "px";
		}
	}
}

function animateBoltBlockContainer(BoltBlockContainerNumber)
{
	$(BoltBlockContainerArray[BoltBlockContainerNumber]).stop().animate({bottom: [experienceTextContainerDistanceFromFloor + experienceTextContainerArray[BoltBlockContainerNumber].offsetHeight, 'easeOutCubic']}, 1000, function() {});
}

function positionExperienceTextContainer()
{
	for (var i=0; i<experienceTextContainerArray.length; i++)
	{
		if (i == 0)
		{
			canAnimateSpacerInformation = canAnimateAscendiaInformation;
		}
		if (i == 1)
		{
			canAnimateSpacerInformation = canAnimateSduisInformation;
		}
		if (i == 2)
		{
			canAnimateSpacerInformation = canAnimateKgmInformation;
		}
		if (i == 3)
		{
			canAnimateSpacerInformation = canAnimatePetroInformation;
		}
		if (i == 4)
		{
			canAnimateSpacerInformation = canAnimateHmhcoInformation;
		}
		if (canAnimateSpacerInformation == true)
		{
			experienceTextContainerArray[i].style.bottom = (0.8 * containerDiv.offsetHeight) + "px";
		}
		else
		{
			experienceTextContainerArray[i].style.bottom = experienceTextContainerDistanceFromFloor + "px";
		}
	}
}

function animateExperienceTextContainer(experienceTextContainerNumber)
{
	$(experienceTextContainerArray[experienceTextContainerNumber]).stop().animate({bottom: [experienceTextContainerDistanceFromFloor, 'easeOutCubic']}, 1000, function() {});
}

function positionExperience1Elements()
{
	ascendiaDiv.style.left = experience1ContainerDiv.offsetWidth + "px";
	
	$(piechartAscendiaTextGraphic1Div).fadeTo(0,0);
	$(piechartAscendiaTextGraphic2Div).fadeTo(0,0);
	$(piechartAscendiaTextAnimation1Div).fadeTo(0,0);
	$(piechartAscendiaTextAnimation2Div).fadeTo(0,0);
	$(piechartAscendiaTextCode1Div).fadeTo(0,0);
	$(piechartAscendiaTextCode2Div).fadeTo(0,0);

	if (!((browserName == "internet explorer") && (browserVersion <= 8)))
	{
		$(piechartAscendiaFrontDiv).fadeTo(0,0); //hide only if browser is not ie8 or below
	}

}

function positionExperience2Elements()
{
	sduisDiv.style.left = experience2ContainerDiv.offsetWidth + "px";
	
	$(piechartSduisTextGraphic1Div).fadeTo(0,0);
	$(piechartSduisTextGraphic2Div).fadeTo(0,0);
	$(piechartSduisTextAnimation1Div).fadeTo(0,0);
	$(piechartSduisTextAnimation2Div).fadeTo(0,0);
	$(piechartSduisTextCode1Div).fadeTo(0,0);
	$(piechartSduisTextCode2Div).fadeTo(0,0);
	
	if (!((browserName == "internet explorer") && (browserVersion <= 8)))
	{
		$(piechartSduisFrontDiv).fadeTo(0,0); //hide only if browser is not ie8 or below
	}
}

function positionExperience3Elements()
{
	kgmDiv.style.left = experience3ContainerDiv.offsetWidth + "px";
	
	$(piechartKgmTextGraphic1Div).fadeTo(0,0);
	$(piechartKgmTextGraphic2Div).fadeTo(0,0);
	$(piechartKgmTextAnimation1Div).fadeTo(0,0);
	$(piechartKgmTextAnimation2Div).fadeTo(0,0);
	$(piechartKgmTextCode1Div).fadeTo(0,0);
	$(piechartKgmTextCode2Div).fadeTo(0,0);
	
	if (!((browserName == "internet explorer") && (browserVersion <= 8)))
	{
		$(piechartKgmFrontDiv).fadeTo(0,0); //hide only if browser is not ie8 or below
	}
}

function positionExperience4Elements()
{
	petroDiv.style.left = experience4ContainerDiv.offsetWidth + "px";
	
	$(piechartPetroTextGraphic1Div).fadeTo(0,0);
	$(piechartPetroTextGraphic2Div).fadeTo(0,0);
	$(piechartPetroTextAnimation1Div).fadeTo(0,0);
	$(piechartPetroTextAnimation2Div).fadeTo(0,0);
	$(piechartPetroTextCode1Div).fadeTo(0,0);
	$(piechartPetroTextCode2Div).fadeTo(0,0);
	
	if (!((browserName == "internet explorer") && (browserVersion <= 8)))
	{
		$(piechartPetroFrontDiv).fadeTo(0,0); //hide only if browser is not ie8 or below
	}
}

function positionExperience5Elements()
{
	hmhcoDiv.style.left = experience5ContainerDiv.offsetWidth + "px";
	
	$(piechartHmhcoTextGraphic1Div).fadeTo(0,0);
	$(piechartHmhcoTextGraphic2Div).fadeTo(0,0);
	$(piechartHmhcoTextAnimation1Div).fadeTo(0,0);
	$(piechartHmhcoTextAnimation2Div).fadeTo(0,0);
	$(piechartHmhcoTextCode1Div).fadeTo(0,0);
	$(piechartHmhcoTextCode2Div).fadeTo(0,0);
	
	if (!((browserName == "internet explorer") && (browserVersion <= 8)))
	{
		$(piechartHmhcoFrontDiv).fadeTo(0,0); //hide only if browser is not ie8 or below
	}
}

function animateInformationAndEnemiesElements()
{
	if (layersMovement == "horizontal")
	{
		if (isKenSwimming == false)
		{
			for (var i=0; i<landInformationContainerArray.length; i++)
			{
				if (((previousPageVerticalPosition + (0.5 * containerDiv.offsetWidth) < landInformationContainerArray[i].offsetLeft) || (previousPageVerticalPosition + (0.5 * containerDiv.offsetWidth) > landInformationContainerArray[i].offsetLeft + landInformationContainerArray[i].offsetWidth))
			&& 
			((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > landInformationContainerArray[i].offsetLeft) && (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < landInformationContainerArray[i].offsetLeft + landInformationContainerArray[i].offsetWidth)))
				{
					//plants
					if (landInformationContainerArray[i] == about1ContainerDiv)
					{
						if (canAnimatePlantInformation == true)
						{
							animatePlants();
							canAnimatePlantInformation = false;
						}
					}
					
					//yoshiHouse
					if (landInformationContainerArray[i] == about2ContainerDiv)
					{
						animateYoshiHouseBlanks();
				
						if (canAnimateYoshiHouseInformation == true)
						{
							animateYoshiHouse();
							canAnimateYoshiHouseInformation = false;
						}
					}
					
					//kart
					if (landInformationContainerArray[i] == about3ContainerDiv)
					{
						animateKartPlayerBlanks();
				
						if (canAnimateKartInformation == true)
						{
							animateKartPlayer();
							canAnimateKartInformation = false;
						}
					}
					
					//ascendia
					if (landInformationContainerArray[i] == experience1ContainerDiv)
					{
						if (canAnimateAscendiaInformation == false) //if true, animateAscendiaBlank will be execute after ascendia finish move from left to right
						{
							animateAscendiaBlank();
						}
						else
						{
							animateAscendia();
							animateExperienceTextContainer(0);
							animateBoltBlockContainer(0);
							canAnimateAscendiaInformation = false;
						}
					}
					
					//sduis
					if (landInformationContainerArray[i] == experience2ContainerDiv)
					{
						if (canAnimateSduisInformation == false) //if true, animateSduisBlank will be execute after sduis finish move from left to right
						{
							animateSduisBlank();
						}
						else
						{
							animateSduis();
							animateExperienceTextContainer(1);
							animateBoltBlockContainer(1);
							canAnimateSduisInformation = false;
						}
					}
					
					//kgm
					if (landInformationContainerArray[i] == experience3ContainerDiv)
					{
						if (canAnimateKgmInformation == false) //if true, animateKgmBlank will be execute after kgm finish move from left to right
						{
							animateKgmBlank();
						}
						else
						{
							animateKgm();
							animateExperienceTextContainer(2);
							animateBoltBlockContainer(2);
							canAnimateKgmInformation = false;
						}
					}
					
					//petro
					if (landInformationContainerArray[i] == experience4ContainerDiv)
					{
						if (canAnimatePetroInformation == false) //if true, animatePetroBlank will be execute after kgm finish move from left to right
						{
						}
						else
						{
							animatePetro();
							animateExperienceTextContainer(3);
							animateBoltBlockContainer(3);
							canAnimatePetroInformation = false;
						}
					}

					//hmhco
					if (landInformationContainerArray[i] == experience5ContainerDiv)
					{
						if (canAnimateHmhcoInformation == false) //if true, animateHmhcoBlank will be execute after kgm finish move from left to right
						{
						}
						else
						{
							animateHmhco();
							animateExperienceTextContainer(4);
							animateBoltBlockContainer(4);
							canAnimateHmhcoInformation = false;
						}
					}
				}
			}
		}
		
		//sea animals
		if (isKenSwimming == true)
		{
			for (var i=0; i<seaInformationContainerArray.length; i++)
			{
				if ( 
				((previousPageVerticalPosition + (0.5 * containerDiv.offsetWidth) < sea1Div.offsetLeft + seaInformationContainerArray[i].offsetLeft) || (previousPageVerticalPosition + (0.5 * containerDiv.offsetWidth) > sea1Div.offsetLeft +  seaInformationContainerArray[i].offsetLeft + seaInformationContainerArray[i].offsetWidth))	
				&&	
				((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > sea1Div.offsetLeft + seaInformationContainerArray[i].offsetLeft) && (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < sea1Div.offsetLeft + seaInformationContainerArray[i].offsetLeft + seaInformationContainerArray[i].offsetWidth))
				)
				{
					//coin
					if (seaInformationContainerArray[i] == skill1ContainerDiv)
					{
						makeSeaAnimalsBlinking(coinBlankArray);
				
						if (canAnimateCoinInformation == true)
						{
							animateSeaAnimals(coinArray);
							canAnimateCoinInformation = false;
						}
					}
					
					//koopa
					if (seaInformationContainerArray[i] == skill2ContainerDiv)
					{
						makeSeaAnimalsBlinking(koopaBlankArray);
				
						if (canAnimateKoopaInformation == true)
						{
							animateSeaAnimals(koopaArray);
							canAnimateKoopaInformation = false;
						}
					}
					
					//qblock
					if (seaInformationContainerArray[i] == skill3ContainerDiv)
					{
						makeSeaAnimalsBlinking(qblockBlankArray);
				
						if (canAnimateQblockInformation == true)
						{
							animateSeaAnimals(qblockArray);
							canAnimateQblockInformation = false;
						}	
					}
				}
			}
		}
	}
}

function animateAscendia()
{
	$(ascendiaDiv).stop().animate({left: "380px"}, 1000, function() {animatePiechartAscendiaFront(); animatePiechartAscendiaText(); animateAscendiaBlank()});
}

function animateAscendiaBlank()
{
	//animate ascendia hand right away for one time only
	spinAscendiaBlank();
	
	//animate ascendia hand continuously
	clearInterval(animateAscendiaBlankTimer);
	animateAscendiaBlankTimer = setInterval(function(){spinAscendiaBlank()}, 4000);
}

function spinAscendiaBlank()
{
	clearInterval(spinAscendiaBlankTimer);
	spinAscendiaBlankTimer = setInterval(function(){changeAscendiaBlank()}, 100);
}

function changeAscendiaBlank()
{
	if (changeAscendiaBlankCounter >= ascendiaBlankChildrenLength)
	{
		changeAscendiaBlankCounter = 0;
		clearInterval(spinAscendiaBlankTimer);
		setAscendiaBlankToDefault();
		
		if ((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < experience1ContainerDiv.offsetLeft) || (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > experience1ContainerDiv.offsetLeft + experience1ContainerDiv.offsetWidth))
		{
			clearInterval(animateAscendiaBlankTimer);
		}
	}
	else
	{
		for (var i=0; i<ascendiaBlankChildrenLength; i++)
		{
			if (i == changeAscendiaBlankCounter)
			{
				setAscendiaBlankToOpaque(i);
			}
			else
			{
				setAscendiaBlankToTransparent(i);
			}
		}
	}
	
	changeAscendiaBlankCounter = changeAscendiaBlankCounter + 1;
}

function setAscendiaBlankToDefault()
{
	for (var i=0; i<ascendiaBlankChildrenLength; i++)
	{
		if (i == 0)
		{
			setAscendiaBlankToOpaque(i);
		}
		else
		{
			setAscendiaBlankToTransparent(i);
		}
	}
}

function setAscendiaBlankToOpaque(ascendiaBlankNumber)
{
	//use javascript instead jquery to avoid opacity glitch since this trigger by a very quick timer
				
	ascendiaBlankLeftDiv.children[ascendiaBlankNumber].style.opacity = 1;
	ascendiaBlankLeftDiv.children[ascendiaBlankNumber].style.filter = "alpha(opacity=" + 100 + ")";
				
	ascendiaBlankRightDiv.children[ascendiaBlankNumber].style.opacity = 1;
	ascendiaBlankRightDiv.children[ascendiaBlankNumber].style.filter = "alpha(opacity=" + 100 + ")";
}

function setAscendiaBlankToTransparent(ascendiaBlankNumber)
{
	//use javascript instead jquery to avoid opacity glitch since this trigger by a very quick timer
				
	ascendiaBlankLeftDiv.children[ascendiaBlankNumber].style.opacity = 0;
	ascendiaBlankLeftDiv.children[ascendiaBlankNumber].style.filter = "alpha(opacity=" + 0 + ")";
				
	ascendiaBlankRightDiv.children[ascendiaBlankNumber].style.opacity = 0;
	ascendiaBlankRightDiv.children[ascendiaBlankNumber].style.filter = "alpha(opacity=" + 0 + ")";
}

function animateSduis()
{
	$(sduisDiv).stop().animate({left: "430px"}, 1000, function() {animatePiechartSduisFront(); animateSduisBlank()});
}

function animateSduisBlank()
{
	//animate sduis hand right away for one time
	moveSduisBlank();
	
	//animate sduis hand continuously
	clearInterval(animateSduisBlankTimer);
	animateSduisBlankTimer = setInterval(function(){moveSduisBlank()}, 4000);
}

function moveSduisBlank()
{
	clearInterval(moveSduisBlankTimer);
	moveSduisBlankTimer = setInterval(function(){openAndCloseSduisBlank()}, 200);
}

function openAndCloseSduisBlank()
{
	if (openAndCloseSduisBlankCounter >= 8)
	{
		openAndCloseSduisBlankCounter = 0;
		clearInterval(moveSduisBlankTimer);
		openSduisBlank();
		
		if ((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < experience2ContainerDiv.offsetLeft) || (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > experience2ContainerDiv.offsetLeft + experience2ContainerDiv.offsetWidth))
		{
			clearInterval(animateSduisBlankTimer);
		}
	}
	else
	{
		if (openAndCloseSduisBlankCounter % 2 == 0)
		{
			openSduisBlank();
		}
		else
		{
			closeSduisBlank();
		}
	}
	
	openAndCloseSduisBlankCounter = openAndCloseSduisBlankCounter + 1;
}

function openSduisBlank()
{
	//use javascript instead jquery to avoid opacity glitch since this trigger by a very quick timer
	for (var i=0; i<sduisBlankOpenArray.length; i++)
	{
		sduisBlankOpenArray[i].style.opacity = 1;
		sduisBlankOpenArray[i].style.filter = "alpha(opacity=" + 100 + ")";
	}
	
	for (var i=0; i<sduisBlankCloseArray.length; i++)
	{
		sduisBlankCloseArray[i].style.opacity = 0;
		sduisBlankCloseArray[i].style.filter = "alpha(opacity=" + 0 + ")";
	}
}

function closeSduisBlank()
{
	//use javascript instead jquery to avoid opacity glitch since this trigger by a very quick timer
	for (var i=0; i<sduisBlankOpenArray.length; i++)
	{
		sduisBlankOpenArray[i].style.opacity = 0;
		sduisBlankOpenArray[i].style.filter = "alpha(opacity=" + 0 + ")";
	}
	
	for (var i=0; i<sduisBlankCloseArray.length; i++)
	{
		sduisBlankCloseArray[i].style.opacity = 1;
		sduisBlankCloseArray[i].style.filter = "alpha(opacity=" + 100 + ")";
	}
}

function animateKgmBlank()
{
	clearInterval(animateKgmBlankTimer);
	animateKgmBlankTimer = setInterval(function(){rotateKgmBlank()}, 100);
}

function rotateKgmBlank()
{
	kgmEmptyPreviousDiv = kgmEmptyDiv;
	kgmEmptyDiv = kgmEmptyDiv + kgmEmptyDivIncrement;
	
	if (kgmEmptyDiv > kgmEmptyPreviousDiv) //steering wheel rotate to right
	{
		if (kgmEmptyDiv > kgmEmptyDivLimit)
		{
			kgmEmptyDivIncrement = -1 * kgmEmptyDivIncrement;
			kgmEmptyDivLimit = -1 * kgmEmptyDivLimit;
		}
	}
	else //steering wheel rotate to left
	{
		if (kgmEmptyDiv < kgmEmptyDivLimit)
		{
			kgmEmptyDivIncrement = -1 * kgmEmptyDivIncrement;
			kgmEmptyDivLimit = -1 * kgmEmptyDivLimit;
		}
	}
	
	if ((kgmEmptyDiv == 0) && ((pageVerticalPosition + (0.5 * containerDiv.offsetWidth) < experience3ContainerDiv.offsetLeft) || (pageVerticalPosition + (0.5 * containerDiv.offsetWidth) > experience3ContainerDiv.offsetLeft + experience3ContainerDiv.offsetWidth))) //check is it time to stop moving steering wheel
	{
		clearInterval(animateKgmBlankTimer);
		
	}
	else	
	{	
	}
}

function animateKgm()
{
	$(kgmDiv).stop().animate({left: "500px"}, 1000, function() {animatePiechartKgmFront(); animateKgmBlank()});
}

function animatePiechartAscendiaFront()
{
	if ((browserName == "internet explorer") && (browserVersion <= 8))
	{
		animatePiechartAscendiaText(); //no pie chart animation, only text animation
	}
	else
	{
		$(piechartAscendiaFrontDiv).stop().animate({opacity: 1}, 500, function() {animatePiechartAscendiaText()}); //animate piechart
	}
}

function animatePetro()
{
	$(petroDiv).stop().animate({left: "430px"}, 1000, function() {animatePiechartPetroFront()});
}



function animateHmhco()
{
	$(hmhcoDiv).stop().animate({left: "430px"}, 1000, function() {animatePiechartHmhcoFront()});
}



function animatePiechartAscendiaFront()
{
	if ((browserName == "internet explorer") && (browserVersion <= 8))
	{
		animatePiechartAscendiaText(); //no pie chart animation, only text animation
	}
	else
	{
		$(piechartAscendiaFrontDiv).stop().animate({opacity: 1}, 500, function() {animatePiechartAscendiaText()}); //animate piechart
	}
}

function animatePiechartSduisFront()
{
	if ((browserName == "internet explorer") && (browserVersion <= 8))
	{
		animatePiechartSduisText(); //no pie chart animation, only text animation
	}
	else
	{
		$(piechartSduisFrontDiv).stop().animate({opacity: 1}, 500, function() {animatePiechartSduisText()}); //animate piechart
	}
}

function animatePiechartKgmFront()
{
	if ((browserName == "internet explorer") && (browserVersion <= 8))
	{
		animatePiechartKgmText(); //no pie chart animation, only text animation
	}
	else
	{
		$(piechartKgmFrontDiv).stop().animate({opacity: 1}, 500, function() {animatePiechartKgmText()}); 
//animate piechart
	}
}

function animatePiechartPetroFront()
{
	if ((browserName == "internet explorer") && (browserVersion <= 8))
	{
		animatePiechartPetroText(); //no pie chart animation, only text animation
	}
	else
	{
		$(piechartPetroFrontDiv).stop().animate({opacity: 1}, 500, function() {animatePiechartPetroText()}); 
//animate piechart
	}
}

function animatePiechartHmhcoFront()
{
	if ((browserName == "internet explorer") && (browserVersion <= 8))
	{
		animatePiechartHmhcoText(); //no pie chart animation, only text animation
	}
	else
	{
		$(piechartHmhcoFrontDiv).stop().animate({opacity: 1}, 500, function() {animatePiechartHmhcoText()}); 
//animate piechart
	}
}

function animatePiechartAscendiaText()
{
	animatePiechartAscendiaTextGraphic();
	animatePiechartAscendiaTextAnimation();
	animatePiechartAscendiaTextCode();
	
}

function animatePiechartAscendiaTextCode()
{
	$(piechartAscendiaTextCode1Div).stop().delay(100).animate({opacity: 1}, 1000, function() {});
	$(piechartAscendiaTextCode2Div).stop().delay(100).animate({opacity: 1}, 1000, function() {});
}

function animatePiechartAscendiaTextGraphic()
{
	$(piechartAscendiaTextGraphic1Div).stop().delay(400).animate({opacity: 1}, 1000, function() {});
	$(piechartAscendiaTextGraphic2Div).stop().delay(400).animate({opacity: 1}, 1000, function() {});
}

function animatePiechartAscendiaTextAnimation()
{
	$(piechartAscendiaTextAnimation1Div).stop().delay(700).animate({opacity: 1}, 1000, function() {});
	$(piechartAscendiaTextAnimation2Div).stop().delay(700).animate({opacity: 1}, 1000, function() {});
}

function animatePiechartSduisText()
{
    animatePiechartSduisTextCode();
	animatePiechartSduisTextGraphic();
	animatePiechartSduisTextAnimation();
}

function animatePiechartSduisTextCode()
{
	$(piechartSduisTextCode1Div).stop().animate({opacity: 1}, 1000, function() {});
	$(piechartSduisTextCode2Div).stop().animate({opacity: 1}, 1000, function() {});
}

function animatePiechartSduisTextGraphic()
{
	$(piechartSduisTextGraphic1Div).stop().delay(300).animate({opacity: 1}, 1000, function() {});
	$(piechartSduisTextGraphic2Div).stop().delay(300).animate({opacity: 1}, 1000, function() {});
}

function animatePiechartSduisTextAnimation()
{
	$(piechartSduisTextAnimation1Div).stop().delay(600).animate({opacity: 1}, 1000, function() {});
	$(piechartSduisTextAnimation2Div).stop().delay(600).animate({opacity: 1}, 1000, function() {});
}

function animatePiechartKgmText()
{
	animatePiechartKgmTextGraphic();
	animatePiechartKgmTextAnimation();
	animatePiechartKgmTextCode();
}

function animatePiechartKgmTextCode()
{
	$(piechartKgmTextCode1Div).stop().animate({opacity: 1}, 1000, function() {});
	$(piechartKgmTextCode2Div).stop().animate({opacity: 1}, 1000, function() {});
}

function animatePiechartKgmTextAnimation()
{
	$(piechartKgmTextAnimation1Div).stop().delay(300).animate({opacity: 1}, 1000, function() {});
	$(piechartKgmTextAnimation2Div).stop().delay(300).animate({opacity: 1}, 1000, function() {});
}

function animatePiechartKgmTextGraphic()
{
	$(piechartKgmTextGraphic1Div).stop().delay(600).animate({opacity: 1}, 1000, function() {});
	$(piechartKgmTextGraphic2Div).stop().delay(600).animate({opacity: 1}, 1000, function() {});
}

function animatePiechartPetroText()
{
	animatePiechartPetroTextGraphic();
	animatePiechartPetroTextAnimation();
	animatePiechartPetroTextCode();
}

function animatePiechartPetroTextCode()
{
	$(piechartPetroTextCode1Div).stop().animate({opacity: 1}, 1000, function() {});
	$(piechartPetroTextCode2Div).stop().animate({opacity: 1}, 1000, function() {});
}

function animatePiechartPetroTextAnimation()
{
	$(piechartPetroTextAnimation1Div).stop().delay(300).animate({opacity: 1}, 1000, function() {});
	$(piechartPetroTextAnimation2Div).stop().delay(300).animate({opacity: 1}, 1000, function() {});
}

function animatePiechartPetroTextGraphic()
{
	$(piechartPetroTextGraphic1Div).stop().delay(600).animate({opacity: 1}, 1000, function() {});
	$(piechartPetroTextGraphic2Div).stop().delay(600).animate({opacity: 1}, 1000, function() {});
}

function animatePiechartHmhcoText()
{
	animatePiechartHmhcoTextGraphic();
	animatePiechartHmhcoTextAnimation();
	animatePiechartHmhcoTextCode();
}

function animatePiechartHmhcoTextCode()
{
	$(piechartHmhcoTextCode1Div).stop().animate({opacity: 1}, 1000, function() {});
	$(piechartHmhcoTextCode2Div).stop().animate({opacity: 1}, 1000, function() {});
}

function animatePiechartHmhcoTextAnimation()
{
	$(piechartHmhcoTextAnimation1Div).stop().delay(300).animate({opacity: 1}, 1000, function() {});
	$(piechartHmhcoTextAnimation2Div).stop().delay(300).animate({opacity: 1}, 1000, function() {});
}

function animatePiechartHmhcoTextGraphic()
{
	$(piechartHmhcoTextGraphic1Div).stop().delay(600).animate({opacity: 1}, 1000, function() {});
	$(piechartHmhcoTextGraphic2Div).stop().delay(600).animate({opacity: 1}, 1000, function() {});
}



function createBubble()
{
	clearInterval(bubbleTimer);
	bubbleTimer = setInterval(function(){animateBubble()}, 3000);
}

function animateBubble()
{
	var kenToSeaSurfaceDistance = kenContainerDiv.offsetTop - (sea1Div.offsetTop - shiftUpLayerHorizontalDistance);
	
	positionBubble(kenToSeaSurfaceDistance);
	showBubble();
	
	$(bubbleDiv).stop().animate({top: "0px"}, 2 * kenToSeaSurfaceDistance, function() {hideBubble()});
}

function hideBubble()
{
	$(bubbleDiv).fadeTo(0,0);
}

function showBubble()
{
	$(bubbleDiv).fadeTo(0,1);
}

function positionBubble(kenToSeaSurfaceDistance)
{
	bubbleDiv.style.left = pageVerticalPosition + (0.5 * containerDiv.offsetWidth) - sea1Div.offsetLeft + "px";
	bubbleDiv.style.top = kenToSeaSurfaceDistance + "px";
}

function blinkSeaAnimals(seaAnimalBlankArray)
{
	var seaAnimalLocalBlankArray = seaAnimalBlankArray;
	var selectedSeaAnimalBlankArray = new Array();
	
	var seaAnimalBlinkMaxNumber = Math.ceil(Math.random() * 5); //at most there are 5 sea animals blink at the same time
	
	for (var i=0; i<seaAnimalBlinkMaxNumber; i++) //select the animals that will blink, and put them in array
	{
		var selectedSeaAnimalNumber = Math.floor(Math.random() * seaAnimalBlankArray.length);
		selectedSeaAnimalBlankArray.push(seaAnimalLocalBlankArray[selectedSeaAnimalNumber]);
	}
	
	for (var i=0; i<selectedSeaAnimalBlankArray.length; i++)
	{
		$(selectedSeaAnimalBlankArray[i]).fadeTo(0,1);
		$(selectedSeaAnimalBlankArray[i]).stop().delay(300).animate({opacity: 0}, 0, function() {});
	}
}

function makeSeaAnimalsBlinking(seaAnimalBlankArray)
{
	clearInterval(blinkSeaAnimalsTimer);
	blinkSeaAnimalsTimer = setInterval(function(){blinkSeaAnimals(seaAnimalBlankArray)}, 3000);
}

function positionContactContainer()
{
	contactContainerDiv.style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetTop + "px";
	contactContainerDiv.style.left = layerVerticalArray[layerVerticalArray.length - 1].offsetLeft + "px";
}

function positionFireworksContainer()
{	
	fireworksContainerDiv.style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetTop + "px";
	fireworksContainerDiv.style.left = layerVerticalArray[layerVerticalArray.length - 1].offsetLeft + "px";
}

function positionSocialContainer()
{
	if (canAnimateSocialContainer == true) //social container is still hiding behind cloud
	{
		setSocialContainerOpacity(0);
		socialContainerDiv.style.top = "80%";
	}
	else //social container already on top
	{
		socialContainerDiv.style.top = "0px";
	}
}

function animateSocialContainer()
{
	if (canAnimateSocialContainer == true)
	{
		$(socialContainerDiv).stop().animate({top: [0, 'easeOutCubic']}, 1000, function() {});
		setSocialContainerOpacity(1);
		canAnimateSocialContainer = false;
	}
}

function setSocialContainerOpacity(socialContainerOpacity) //custome social container and icon set opacity for internet explorer 8
{
	if (socialContainerOpacity > 1)
	{
		socialContainerOpacity = 1;
	}
	if (socialContainerOpacity < 0)
	{
		socialContainerOpacity = 0;
	}
	
	var socialContainerChildrenLength = $(socialContainerDiv).children().length;
	for (var i=0; i<socialContainerChildrenLength; i++)
	{
		$(socialContainerDiv.children[i]).fadeTo(0, socialContainerOpacity);
	}
	
	var socialMiddleChildren = $(socialContainerDiv.children[1]).children().length;
	for (var i=0; i<socialMiddleChildren; i++)
	{
		$(socialContainerDiv.children[1].children[i]).fadeTo(0, socialContainerOpacity);
	}
}

function happyKen()
{
	if (isKenHappy == false)
	{	
		clearInterval(happyKenTimer);
		happyKenTimer = setInterval(function(){kenBlankUp()}, 3000); //repeating ken hands up
		isKenHappy = true;
	}
}

function clearHappyKenTimer()
{
	if (isKenHappy == true)
	{
		clearInterval(happyKenTimer);
		isKenHappy = false;
	}
}

function kenBlankUp()
{
	kenFramesDiv.style.left = "-1600px";
	
	setTimeout(function() {setKenStaticFrame()}, 1000); //ken hands down after 1 sec
}

function positionSplashContainer()
{
	splashContainerDiv.style.left = (0.5 * (containerDiv.offsetWidth - splashContainerDiv.offsetWidth)) + "px";
}

function positionKenContainerVertically()
{
	if (isPreloadShiftUpAnimationFinish == true)
	{
		$(kenContainerDiv).stop(true, false); //to stop ken animation, especially when swimming
		setKenStaticFrame();
		
		if (isKenSwimming == true) //ken in sea
		{
			positionKenAtSeaFloorLevel();	
		}
		else
		{
			checkPylonNumberBelowKen();
			
			if (pylonNumberBelowKen != null) //ken on top of pylon
			{
				kenContainerDiv.style.bottom = containerDiv.offsetHeight - pylonArray[pylonNumberBelowKen].offsetTop + "px";
			}
			else
			{
				positionKenAtGroundLevel();
			}
		}
	}
}

function positionKenAtGroundLevel()
{
	kenContainerDiv.style.bottom = (0.2 * containerDiv.offsetHeight) + "px";
}

function positionKenAtSeaFloorLevel()
{
	kenContainerDiv.style.bottom = seaFloorDiv.offsetHeight + "px";
}

function checkPylonNumberBelowKen()
{
	for (var i=0; i<pylonArray.length; i++)
	{
		if ((pageVerticalPosition < pylonArray[i].offsetLeft + pylonArray[i].offsetWidth - kenLeftEdge) && (pageVerticalPosition > pylonArray[i].offsetLeft - kenRightEdge))
		{
			pylonNumberBelowKen = i;
			break;
		}
		else
		{
			pylonNumberBelowKen = null;
		}
	}
}

function animateWaterfall()
{
	clearInterval(waterfallTimer);
	waterfallTimer = setInterval(function(){switchWaterfallTexture()}, 700);
}

function switchWaterfallTexture()
{
	$(waterfall2Div).fadeTo(0,0);
	$(waterfall2Div).stop().delay(100).animate({opacity: 1}, 0, function() {});
	$(waterfall3Div).fadeTo(0,0);
	$(waterfall3Div).stop().delay(200).animate({opacity: 1}, 0, function() {});
	$(waterfall4Div).fadeTo(0,0);
	$(waterfall4Div).stop().delay(300).animate({opacity: 1}, 0, function() {});
	$(waterfall5Div).fadeTo(0,0);
	$(waterfall5Div).stop().delay(400).animate({opacity: 1}, 0, function() {});
	$(waterfall6Div).fadeTo(0,0);
	$(waterfall6Div).stop().delay(500).animate({opacity: 1}, 0, function() {});
	$(waterfall7Div).fadeTo(0,0);
	$(waterfall7Div).stop().delay(600).animate({opacity: 1}, 0, function() {});
	$(waterfall8Div).fadeTo(0,0);
	$(waterfall8Div).stop().delay(700).animate({opacity: 1}, 0, function() {});

}

function positionSeaFloorObjectsVertically()
{
	for (var i=0; i<seaFloorFrontObjectArray.length; i++)
	{
		if (seaFloorFrontObjectArray[i].offsetHeight > sea1Div.offsetHeight)
		{
			seaFloorFrontObjectArray[i].style.bottom = (-1 * (seaFloorFrontObjectArray[i].offsetHeight - sea1Div.offsetHeight)) + "px";
		}
		else
		{
			seaFloorFrontObjectArray[i].style.bottom = "0px";
		}
	}
	
	for (var i=0; i<seaFloorBackObjectArray.length; i++)
	{
		if (seaFloorBackObjectArray[i].offsetHeight > sea1Div.offsetHeight)
		{
			seaFloorBackObjectArray[i].style.bottom = ((-0.7 * containerDiv.offsetHeight) - (seaFloorBackObjectArray[i].offsetHeight - sea1Div.offsetHeight)) + "px";
		}
		else
		{
			seaFloorBackObjectArray[i].style.bottom = "-70%";
		}
	}
}

function animateScrollOrSwipeTextContainer()
{
	if (canAnimateScrollOrSwipeTextContainer == true)  //to protect so it is not call twice in internet explorer 8
	{
		canAnimateScrollOrSwipeTextContainer = false;
		clearInterval(scrollOrSwipeTextContainerTimer);
		scrollOrSwipeTextContainerTimer = setInterval(function(){turnOnAndOffScrollOrSwipeTextContainer()}, 1000);
	}
}

function turnOnAndOffScrollOrSwipeTextContainer()
{
	if (deviceName == "computer")
	{
		$(scrollOrSwipeTextContainer1Div).fadeTo(0,1);
		$(scrollOrSwipeTextContainer1Div).stop().delay(500).animate({opacity: 0}, 0, function() {});
	}
	else
	{
		$(scrollOrSwipeTextContainer2Div).fadeTo(0,1);
		$(scrollOrSwipeTextContainer2Div).stop().delay(500).animate({opacity: 0}, 0, function() {});
	}
}

function hideScrollOrSwipeTextContainer()
{
	if (canHideScrollOrSwipeTextContainer == true)
	{
		clearInterval(scrollOrSwipeTextContainerTimer);
		fadeOutScrollOrSwipeTextContainer();
		canHideScrollOrSwipeTextContainer = false;
	}
}

function fadeOutScrollOrSwipeTextContainer()
{
	$(scrollOrSwipeTextContainer1Div).fadeTo(0,0);
	$(scrollOrSwipeTextContainer2Div).fadeTo(0,0);
}

function positionContactConfirmationContainer()
{
	for (var i=0; i<contactConfirmationContainerArray.length; i++)
	{
		if ((layersMovement == "not moving 1") || (layersMovement == "not moving 2"))
		{
			contactConfirmationContainerArray[i].style.left = kenContainerDiv.offsetLeft + "px";
		}
		else
		{
			contactConfirmationContainerArray[i].style.left = kenMaxHorizontalDistance + "px";
		}
		
		contactConfirmationContainerArray[i].style.top = 0.8 * containerDiv.offsetHeight - 370 + "px";
	}
}

function hideContactConfirmationContainer()
{
	if (isContactConfirmationContainerVisible == true)
	{
		for (var i=0; i<contactConfirmationContainerArray.length; i++)
		{
			var contactConfirmationChildrenLength = $(contactConfirmationContainerArray[i]).children().children().length;
			
			for (var j=0; j<contactConfirmationChildrenLength; j++)
			{
				$(contactConfirmationContainerArray[i].children[0].children[j]).fadeTo(0,0);
			}
		}
		
		isContactConfirmationContainerVisible = false;
	}
}

function showContactConfirmationContainer(contactConfirmationContainerNumber)
{
	var contactConfirmationChildrenLength = $(contactConfirmationContainerArray[contactConfirmationContainerNumber]).children().children().length;
	
	for (var j=0; j<contactConfirmationChildrenLength; j++)
	{
		$(contactConfirmationContainerArray[contactConfirmationContainerNumber].children[0].children[j]).fadeTo(0,1);
	}
	
	isContactConfirmationContainerVisible = true;
}

function focusEmail() //called from email.js
{
	emailAddressDiv.focus();
}

function focusSubject() //called from email.js
{
	emailSubjectDiv.focus();
}

function focusMessage() //called from email.js
{
	emailMessageDiv.focus();
}

function clearAllInputField()
{
	emailAddressDiv.value = "";
	emailSubjectDiv.value = "";
	emailMessageDiv.value = "";
}

function createFireworkSvg()
{
	if (!((browserName == "internet explorer") && (browserVersion <= 8)))
	{
		for (var i=0; i<fireworkArray.length; i++)
		{
			var fireworkSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			fireworkSvg.setAttribute("version", "1.2");
			fireworkSvg.setAttribute("baseProfile", "tiny");
			fireworkSvg.setAttribute("width", "100%");
			fireworkSvg.setAttribute("height", "100%");
			fireworkSvgArray.push(fireworkSvg);
		}
	}
}

function appendFireworkSvgToContainer()
{
	if (!((browserName == "internet explorer") && (browserVersion <= 8)))
	{
		for (var i=0; i<fireworkArray.length; i++)
		{
			fireworkArray[i].appendChild(fireworkSvgArray[i]);
		}
	}
}

function drawManyFireworks()
{
	if (!((browserName == "internet explorer") && (browserVersion <= 8)))
	{
		if (canDrawManyFireworks == true)
		{
			clearInterval(drawFireworkTimer);
			drawFireworkTimer = setInterval(function(){drawFirework()},1000);
			
			canDrawManyFireworks = false;
		}
	}
}

function drawFirework()
{
	if (drawFireworkCounter >= fireworkArray.length) //finish draw firework
	{
		drawFireworkCounter = 0;
		clearInterval(drawFireworkTimer);
	}
	else
	{
		clearInterval(drawOneLayerOfFireworkTimer);
		drawOneLayerOfFireworkTimer = setInterval(function(){drawOneLayerOfFirework()},40);	
	}
}

function drawOneLayerOfFirework()
{
	if (fireworkLayerNumber < fireworkRowNumber)
	{
		fireworkLayerNumber = fireworkLayerNumber + 1;
		
		for (var i=0; i<fireworkColumnNumber; i++)
		{
			var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			c.setAttribute("cx", String(fireworkCenterX ));
			c.setAttribute("cy", String(fireworkCenterY));
			c.setAttribute("r", fireworkDotRadius);
			c.setAttribute('stroke', "#ff3900");
			c.setAttribute('stroke-width', 15);
			c.setAttribute("fill", "#fdffc0");
							
			fireworkSvgArray[drawFireworkCounter].appendChild(c);
		}
	}
	else
	{
		fireworkLayerNumber = 0;
		clearInterval(drawOneLayerOfFireworkTimer);
		makeFireworkDisappear(drawFireworkCounter);
		drawFireworkCounter = drawFireworkCounter + 1;
	}
}

function makeFireworkDisappear(fireworkNumber)
{
	$(fireworkArray[fireworkNumber]).fadeTo(1000,0);
}

function resetFireworkSvg()
{
	for (var i=0; i<fireworkArray.length; i++)
	{
		$(fireworkSvgArray[i]).empty(); //delete every childrens (dots) inside firework svg
		$(fireworkArray[i]).fadeTo(0,1);
	}
}

function printResizeText()
{
	//document.getElementById("detect-value-1").innerHTML = containerDiv.offsetHeight;
	//document.getElementById("detect-value-2").innerHTML = layerVerticalArray[layerVerticalArray.length - 1].offsetHeight;
}

function printScrollSwipeText()
{
}