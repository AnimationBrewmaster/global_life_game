/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         if(bStopDice == 1)
         sym.stop();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         if(bStopDice == 2)
         sym.stop();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         if(bStopDice == 3)
         sym.stop();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         if(bStopDice == 4){
         	sym.stop();
         }
         // call the destination function for
         // whichever path we're currently on:
         DestinationFunction();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         if(bStopDice == 5)
         sym.stop();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         if(bStopDice == 6)
         sym.stop();

      });
      //Edge binding end
      
        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         if(bStopDice == 7)
         sym.stop();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         if(bStopDice == 8) // 8 is our max steps:
         {
         	sym.stop();
         	// show the selection HUD
         	sym.$("hudNextDest").show();
         }
         stop();
         
         

      });
      //Edge binding end
      
      
      
      
      
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         if(bStopDice < 1)
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // COMP READY:
         // bStopDice is the var we check against to stop the dice rolling on the correct number.
         bStopDice = -1;
         // create an array holding all the dice labels i've created:
         var diceFacePos = new Array("one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve");
         // this holds the frame dice 1 stops at:
         var diceStopsAt1;
         // and this holds the frame dice 2 stops at, visible or not:
         var diceStopsAt2;
         //var TOTAL_POSITIONS = 8; // how many positions the game will allow for before looping around again.
         
         // null these out to start:
         sym.setVariable("diceStopsAt1", -1);
         sym.setVariable("diceStopsAt2", -1); 
         //sym.setVariable("TOTAL_POSITIONS", 8); 
         // INIT TYPE STUFF FOR COMP READY:
         // make username unselectable. i've already gone into Edge and tweaked the cursor.
         sym.$("txtUsername").css("webkit-user-select","none");  
         sym.$("txtUsername").css("moz-user-select","none");  
         sym.$("txtUsername").css("ms-user-select","none");  
         
         
         // show the popup:
         sym.ShowPopup = function(cardtype)
         {
         	switch(cardtype)
         	{
         		case "red" :
         		// hide the green div
         
         		// Hide an element 
         		sym.getSymbol("mcPopup").$("mcGreen").hide();
         		sym.getSymbol("mcPopup").$("mcRed").show();
         		// then play
         		break;
         
         		case "green" :
         		// hide the red div
         		sym.getSymbol("mcPopup").$("mcRed").hide();
         		sym.getSymbol("mcPopup").$("mcGreen").show();
         		// then play
         		break;
         
         		default:
         		alert('problem showing cards');
         		break;
         	}
         
         	console.log('sym.showPopup from Edge compready');
         	sym.$("mcPopup").show(); 
         	sym.getSymbol("mcPopup").play();
         
         }
         
         sym.ShowHudForNextChoice = function()
         {
         	console.log('sym.ShowHudForNextChoice() from Edge compready');
         	sym.$("hudNextDest").show();
         	sym.getSymbol("hudNextDest").play(0);
         }
         
         
         sym.HideHudAfterSelection = function()
         {
         	console.log('sym.HideHudAfterSelection from Edge compready');
         	sym.getSymbol("hudNextDest").play(300);
         }
         
         sym.ShowMarket = function()
         {
         	console.log('ShowMarket from Edge compready');
         	sym.$("hudMarket").show(); 
         }
         
         sym.HideMarket = function()
         {
         	console.log('HideMarket from Edge compready');
         	sym.$("hudMarket").hide(); 
         }
         
         UpdatePlayerStageName = function(nom)
         {
         	console.log('UpdatePlayerStageName from Edge compready');
         	// this is the big version
         	sym.$("txtUsername").html(nom);	
         	// and the name/status at the very bottom too:
         	sym.getSymbol("mcHUD").$("tPlayerName").html(nom);
         
         	// update obit text too
         	sym.getSymbol("obit").$("txtObit").html(nom + " died. RIP.");
         
         
         }
         
         UpdatePlayerAvatar = function(avtr, bike)
         {
         	console.log('UpdatePlayerAvatar; called from EDGE:' + avtr);
         	//_bike = avtr = "_bike"
         	//sym.$("").src = avtr;
         	sym.$("charJob").attr("src", avtr);
         	sym.$("charMed").attr("src", avtr);
         	sym.$("charMarket").attr("src", avtr);
         	sym.$("charToilet").attr("src", avtr);
         	sym.$("charWater").attr("src", avtr);
         	sym.$("charSchool").attr("src", avtr);
         	sym.$("charFarm").attr("src", avtr);
         	sym.getSymbol("hudNextDest").$("character").attr("src", avtr);
         	// and the bike versions:
         	sym.$("bikeJob").attr("src", bike);
         	sym.$("bikeMed").attr("src", bike);
         	sym.$("bikeMarket").attr("src", bike);
         	sym.$("bikeToilet").attr("src", bike);
         	sym.$("bikeWater").attr("src", bike);
         	sym.$("bikeSchool").attr("src", bike);
         	sym.$("bikeFarm").attr("src", bike);
         }
         
         UpdateUserMessage = function(msg)
         {
         	sym.getSymbol("mcUserMessage").$("txtScoreMessage").html("");
         	sym.getSymbol("mcUserMessage").stop(0);
         	sym.getSymbol("mcUserMessage").$("txtScoreMessage").html(msg);
         	sym.getSymbol("mcUserMessage").play(0);
         }
         
         // write to our global bStopDice
         sym.SetNumberDiceShouldStopOn = function(newrollamt)
         {
         	//console.log('SetNumberDiceShouldStopOn:' + newrollamt);
         	sym.ShowDiceBasedOnGlensValue(newrollamt);
         	//StartDice();
         }
         
         sym.SetNewTimelineStopPosition = function(val)
         {
         	//console.log('SetNewTimelineStopPosition');
         	bStopDice = val;
         }
         
         sym.HideAllBackgrounds = function()
         {
         	//alert('hiding all backgrounds');
         	sym.$("divJob").hide();
         	sym.$("divMedical").hide();
         	sym.$("divMarket").hide();
         	sym.$("divToilet").hide();
         	sym.$("divWater").hide();
         	sym.$("divSchool").hide();
         	sym.$("divFarm").hide();
         }
         
         sym.ShowNewBackground = function(whichbg)
         {
         	var _nextBg = whichbg;
         
         	// hide all 
         	sym.HideAllBackgrounds();
         
         	switch(whichbg)
         	{
         		case "job" :
         		_nextBg = "divJob";
         		break;
         
         		case "medical" :
         		_nextBg = "divMedical";
         		break;
         
         		case "store" :
         		_nextBg = "divMarket";
         		break;
         
         		case "toilet" :
         		_nextBg = "divToilet";
         		break;
         
         		case "school" :
         		_nextBg = "divSchool";
         		break;
         
         		case "farm" :
         		_nextBg = "divFarm";
         		break;
         
         		case "water" :
         		_nextBg = "divWater";
         		break;
         
         		default :
         		_nextBg = undefined;
         		break;
         
         	}
         
         	if(_nextBg != undefined){
         		sym.$(_nextBg).show();
         	}	
         }
         
         
         
         // figure out what numbers to show based on what they rolled
         sym.ShowDiceBasedOnGlensValue = function(val)
         {
         
         //alert('ShowDiceBasedOnGlensValue:' + val);
         
         	var diceTotal = val;
         	var _diceStopsAt1 = "zero"; // zero is hidden
         	var _diceStopsAt2 = "zero";
         
         	// these next bools are used to show an alternate dice roll, ie if they roll an 8 we use
         	// this to show them a 3+5 one time and a 4+4 another, then switch it back next time they roll it
         	var b7 = false;
         	var b8 = false;
         	var b9 = false;
         	var b10 = false;
         	var b11 = false;
         	var b12 = false;
         
         	switch(diceTotal){
         		case 1: 
         
         		// set the rollto number for the first one
         		_diceStopsAt1 = "one";
         		_diceStopsAt2 = "zero";
         		HideSecondDice();
         		break;
         
         		case 2: 
         		// set the rollto number for the first one
         		_diceStopsAt1 = "two";
         		_diceStopsAt2 = "zero";
         		HideSecondDice();
         		break;
         
         		case 3: 
         		// set the rollto number for the first one
         		_diceStopsAt1 = "three";
         		_diceStopsAt2 = "zero";
         		HideSecondDice();
         		break;
         
         		case 4: 
         		// set the rollto number for the first one
         		_diceStopsAt1 = "four";
         		_diceStopsAt2 = "zero";
         		HideSecondDice();
         		break;
         
         		case 5: 
         		// set the rollto number for the first one
         		_diceStopsAt1 = "five";
         		_diceStopsAt2 = "zero";
         		HideSecondDice();
         		break;
         
         		case 6: 
         		// set the rollto number for the first one
         		_diceStopsAt1 = "six";
         		_diceStopsAt2 = "zero";
         		HideSecondDice();
         		break;
         
         		case 7: 
         		ShowSecondDice();
         		// set the rollto number for the first one
         		if(b7){
         		_diceStopsAt1 = "three";
         		_diceStopsAt2 = "four";
         		b7 = false;
         		} else {
         		_diceStopsAt1 = "five";
         		_diceStopsAt2 = "two";
         		b7 = true;
         		}
         		break;
         
         		case 8: 
         		ShowSecondDice();
         		// set the rollto number for the first one
         		if(b8){
         		_diceStopsAt1 = "four";
         		_diceStopsAt2 = "four";
         		b8 = false;
         		} else {
         		_diceStopsAt1 = "five";
         		_diceStopsAt2 = "three";
         		b8 = true;
         		}
         		break;
         
         		case 9: 
         		ShowSecondDice();
         		// set the rollto number for the first one
         		if(b9){
         		_diceStopsAt1 = "five";
         		_diceStopsAt2 = "four";
         		b9 = false;
         		} else {
         		_diceStopsAt1 = "six";
         		_diceStopsAt2 = "three";
         		b9 = true;
         		}
         		break;
         
         		case 10: 
         		ShowSecondDice();
         		// set the rollto number for the first one
         		if(b10){
         		_diceStopsAt1 = "five";
         		_diceStopsAt2 = "five";
         		b10 = false;
         		} else {
         		_diceStopsAt1 = "six";
         		_diceStopsAt2 = "four";
         		b10 = true;
         		}
         		break;
         
         		case 11: 
         		ShowSecondDice();
         		// set the rollto number for the first one
         		if(b11){
         		_diceStopsAt1 = "five";
         		_diceStopsAt2 = "six";
         		b11 = false;
         		} else {
         		_diceStopsAt1 = "six";
         		_diceStopsAt2 = "five";
         		b11 = true;
         		}
         		break;
         
         		case 12: 
         		ShowSecondDice();
         		// set the rollto number for both. redundant in this case but
         		// that never stopped me before.
         		if(b12){
         		_diceStopsAt1 = "six";
         		_diceStopsAt2 = "six";
         		b12 = false;
         		} else {
         		_diceStopsAt1 = "six";
         		_diceStopsAt2 = "six";
         		b12 = true;
         		}
         		break;
         
         		default:
         		alert(this + 'recd a weird value in a switch statement, look into it then find a way to blame on Glen.');
         		break;
         	}
         	sym.setVariable("diceStopsAt1", _diceStopsAt1);
         	sym.setVariable("diceStopsAt2", _diceStopsAt2); 
         }
         
         HideSecondDice = function() // not a sym.function because it gets called locally in this file
         {
         //	console.log("SHOULD BE HIDING 2ND DICE RIGHT NOW");
         
         	sym.getSymbol("dicePair").$("dice_symbol_2").hide();
         	sym.getSymbol("dicePair").$("shadow2").hide();
         
         //	console.log("2ND should be hidden now");
         }
         // same as above:
         ShowSecondDice = function()
         {
         	sym.getSymbol("dicePair").$("dice_symbol_2").show();
         	sym.getSymbol("dicePair").$("shadow2").show();
         }
         
         sym.StopDice = function()
         {
         //	console.log("sym.stopDice called");
         	sym.getSymbol("dicePair").getSymbol("dice_symbol_1").stop(0);
         	sym.getSymbol("dicePair").getSymbol("dice_symbol_2").stop(0);
         	sym.getSymbol("dicePair").stop(0);
         }
         
         sym.StartDice = function()
         {
         	sym.getSymbol("dicePair").getSymbol("dice_symbol_1").play(0);
         	sym.getSymbol("dicePair").getSymbol("dice_symbol_2").play(0);
         	sym.getSymbol("dicePair").play(0);
         }
         
         sym.FlashDiceButton = function()
         {
         //	console.log("FLASH DICE BUTTON #####################");
         	sym.getSymbol("mcHUD").$("buttonflash").show();
         	sym.getSymbol("mcHUD").getSymbol("buttonflash").play();
         }
         
         sym.StopFlashDiceButton = function()
         {
         	sym.getSymbol("mcHUD").$("buttonflash").hide();
         }
         
         sym.ShowDiceButtons = function()
         {
         	sym.getSymbol("mcHUD").$("rectButton").show();
         	sym.$("clicker").show();
         }
         
         sym.HideDiceButtons = function()
         {
         	sym.getSymbol("mcHUD").$("rectButton").hide();	
         	sym.$("clicker").hide();
         
         }
         
         sym.HideAllBikes = function()
         {
         	// Hide all the bikes
         	sym.$("bikeJob").hide();
         	sym.$("bikeMed").hide();
         	sym.$("bikeMarket").hide();
         	sym.$("bikeToilet").hide();
         	sym.$("bikeWater").hide();
         	sym.$("bikeSchool").hide();
         	sym.$("bikeFarm").hide();
         	// and SHOW the avatar
         	sym.$("charJob").show();
         	sym.$("charMed").show();
         	sym.$("charMarket").show();
         	sym.$("charToilet").show();
         	sym.$("charWater").show();
         	sym.$("charSchool").show();
         	sym.$("charFarm").show();
         }
         
         sym.ShowAllBikes = function()
         {
         	// Hide all the bikes
         	sym.$("bikeJob").show();
         	sym.$("bikeMed").show();
         	sym.$("bikeMarket").show();
         	sym.$("bikeToilet").show();
         	sym.$("bikeWater").show();
         	sym.$("bikeSchool").show();
         	sym.$("bikeFarm").show();
         	// now that we're showing Bike Avatar we need 
         	// to hide the old avatar
         	sym.$("charJob").hide();
         	sym.$("charMed").hide();
         	sym.$("charMarket").hide();
         	sym.$("charToilet").hide();
         	sym.$("charWater").hide();
         	sym.$("charSchool").hide();
         	sym.$("charFarm").hide();
         }
         
         sym.ShowObituary = function(nom, obit)
         {
         	sym.getSymbol("obit").$("txtNom").html(nom);
         	sym.getSymbol("obit").$("txtObit").html(obit);
         
         	// now unhide it and play the animation:
         	sym.$("obit").show();
         	sym.getSymbol("obit").play(1);
         }
         
         
         // don't let the dice roll yet:
         sym.StopDice();
         // hide all the backgrounds until the user chooses a destination:
         sym.HideAllBackgrounds();
         // hide the dice button so it can't be clicked
         sym.HideDiceButtons();
         //sym.ShowAllBikes();
         sym.HideAllBikes();
         //HideSecondDice();

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${clicker}", "click", function(sym, e) {
         // rewind the clip so it plays:
         sym.getSymbol("dicePair").getSymbol("dice_symbol_1").play(0);
         sym.getSymbol("dicePair").getSymbol("dice_symbol_2").play(0);
         sym.getSymbol("dicePair").play(0);
         
         ExecutePlayerRoll();
         //sym.StartDice();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rountBtn}", "mouseover", function(sym, e) {
         sym.getSymbol("rountBtn").stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rountBtn}", "mouseout", function(sym, e) {
         sym.getSymbol("rountBtn").stop("out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rountBtn}", "click", function(sym, e) {
         GetRandomGameTip();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${clicker}", "mouseover", function(sym, e) {
         sym.getSymbol("mcHUD").getSymbol("rectButton").stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${clicker}", "mouseout", function(sym, e) {
         // NOTE: clicker is a transparent clip placed over the rectangular dice button, NOT THE RED BUTTON ITSELF.
         // crappy fix to solve issue with button text getting selected during clicks, irritating.
         sym.getSymbol("mcHUD").getSymbol("rectButton").stop("out");
         sym.StopFlashDiceButton();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8096, function(sym, e) {
         if(bStopDice > 8)
         {
         	sym.stop(0);
         	// show the selection HUD
         	sym.$("hudNextDest").show();
         }
         stop();
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'popChallenge'
   (function(symbolName) {   
   
   })("popChallenge");
   //Edge symbol end:'popChallenge'

   //=========================================================
   
   //Edge symbol: 'popPartnership'
   (function(symbolName) {   
   
   })("popPartnership");
   //Edge symbol end:'popPartnership'

   //=========================================================
   
   //Edge symbol: 'mcHome'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${character_home}", "dblclick", function(sym, e) {
         // insert code for mouse double click here
         sym.play();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${div_home}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "stop", function(sym, e) {
         // insert code here to be run when the timeline stops
         
      });
      //Edge binding end

   })("mcHome");
   //Edge symbol end:'mcHome'

   //=========================================================
   
   //Edge symbol: 'mcHUD'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${rectButton}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.getSymbol("rectButton").stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rectButton}", "mouseout", function(sym, e) {
         sym.getSymbol("rectButton").stop("out");

      });
      //Edge binding end

   })("mcHUD");
   //Edge symbol end:'mcHUD'

   //=========================================================
   
   //Edge symbol: 'button_close'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${button_red}", "click", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("button_close");
   //Edge symbol end:'button_close'

   //=========================================================
   
   //Edge symbol: 'popup'
   (function(symbolName) {   
   
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${SCRIM}", "click", function(sym, e) {
         return;

      });
      //Edge binding end

   })("popup");
   //Edge symbol end:'popup'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'simpleButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseenter", function(sym, e) {
         sym.stop( "enter" );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseleave", function(sym, e) {
         sym.stop( "normal" );
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseup", function(sym, e) {
         sym.stop( "enter" );
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mousedown", function(sym, e) {
         sym.stop( "down" );
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Read title attribute and use it as label
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "click", function(sym, e) {
         

      });
      //Edge binding end

   })("simpleButton");
   //Edge symbol end:'simpleButton'

   //=========================================================
   
   //Edge symbol: 'simpleButton_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseenter", function(sym, e) {
         sym.stop( "enter" );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseleave", function(sym, e) {
         sym.stop( "normal" );
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseup", function(sym, e) {
         sym.stop( "enter" );
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mousedown", function(sym, e) {
         sym.stop( "down" );
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Read title attribute and use it as label
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
      //Edge binding end

   })("simpleButton_1");
   //Edge symbol end:'simpleButton_1'

   //=========================================================
   
   //Edge symbol: 'simpleButton_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseenter", function(sym, e) {
         sym.stop( "enter" );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseleave", function(sym, e) {
         sym.stop( "normal" );
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseup", function(sym, e) {
         sym.stop( "enter" );
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mousedown", function(sym, e) {
         sym.stop( "down" );
         
         // Hide an element 
         sym.getComposition().getStage().$("mcPopup").hide();
         
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Read title attribute and use it as label
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
      //Edge binding end

   })("simpleButton_2");
   //Edge symbol end:'simpleButton_2'

   //=========================================================
   
   //Edge symbol: 'buttonGameTips'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseenter", function(sym, e) {
         sym.stop( "enter" );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseleave", function(sym, e) {
         sym.stop( "normal" );
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseup", function(sym, e) {
         sym.stop( "enter" );
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mousedown", function(sym, e) {
         sym.stop( "down" );
         
         // Hide an element 
         sym.getComposition().getStage().$("mcPopup").hide();
         
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Read title attribute and use it as label
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
      //Edge binding end

   })("buttonGameTips");
   //Edge symbol end:'buttonGameTips'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'simpleButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseenter", function(sym, e) {
         sym.stop( "enter" );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseleave", function(sym, e) {
         sym.stop( "normal" );
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mouseup", function(sym, e) {
         sym.stop( "enter" );
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot}", "mousedown", function(sym, e) {
         sym.stop( "down" );
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Read title attribute and use it as label
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
      //Edge binding end

   })("simpleButton_3");
   //Edge symbol end:'simpleButton_3'

   //=========================================================
   
   //Edge symbol: 'hudNextDest'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btnSoap}", "click", function(sym, e) {
         // set which item we've bought
         stuffBuy = "soap";
         // confirm the purchase
         var confirmPurchase = confirm("Buy " + stuffBuy + "?");
         if(confirmPurchase)
         {
         	buyNewStuff();
         	// close the window if we're done, else they can click again.
         	sym.getComposition().getStage().$("hudMarket").hide();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnTablet}", "click", function(sym, e) {
         // set which item we've bought
         stuffBuy = "tablet";
         // confirm the purchase
         var confirmPurchase = confirm("Buy " + stuffBuy + "?");
         if(confirmPurchase)
         {
         	buyNewStuff();
         	// close the window if we're done, else they can click again.
         	sym.getComposition().getStage().$("hudMarket").hide();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnBucket}", "click", function(sym, e) {
         // set which item we've bought
         stuffBuy = "bucket";
         // confirm the purchase
         var confirmPurchase = confirm("Buy " + stuffBuy + "?");
         if(confirmPurchase)
         {
         	buyNewStuff();
         	// close the window if we're done, else they can click again.
         	sym.getComposition().getStage().$("hudMarket").hide();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnFood}", "click", function(sym, e) {
         // set which item we've bought
         stuffBuy = "food";
         // confirm the purchase
         var confirmPurchase = confirm("Buy " + stuffBuy + "?");
         if(confirmPurchase)
         {
         	buyNewStuff();
         	// close the window if we're done, else they can click again.
         	sym.getSymbolElement().hide();
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnKit}", "click", function(sym, e) {
         // set which item we've bought
         stuffBuy = "kit";
         // confirm the purchase
         var confirmPurchase = confirm("Buy " + stuffBuy + "?");
         if(confirmPurchase)
         {
         	buyNewStuff();
         	// close the window if we're done, else they can click again.
         	sym.getComposition().getStage().$("hudMarket").hide();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnFilter}", "click", function(sym, e) {
         // set which item we've bought
         stuffBuy = "filter";
         // confirm the purchase
         var confirmPurchase = confirm("Buy " + stuffBuy + "?");
         if(confirmPurchase)
         {
         	buyNewStuff();
         	// close the window if we're done, else they can click again.
         	sym.getComposition().getStage().$("hudMarket").hide();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnPlumbing}", "click", function(sym, e) {
         // set which item we've bought
         stuffBuy = "plumbing";
         // confirm the purchase
         var confirmPurchase = confirm("Buy " + stuffBuy + "?");
         if(confirmPurchase)
         {
         	buyNewStuff();
         	// close the window if we're done, else they can click again.
         	sym.getComposition().getStage().$("hudMarket").hide();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnBike}", "click", function(sym, e) {
         // set which item we've bought
         stuffBuy = "bike";
         // confirm the purchase
         var confirmPurchase = confirm("Buy " + stuffBuy + "?");
         if(confirmPurchase)
         {
         	buyNewStuff();
         	// close the window if we're done, else they can click again.
         	sym.getComposition().getStage().$("hudMarket").hide();
         
         }
         

      });
      //Edge binding end

   })("hudNextDest");
   //Edge symbol end:'hudNextDest'

   //=========================================================
   
   //Edge symbol: 'hudNextDest_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btnSoap}", "click", function(sym, e) {
         // set which item we've bought
         stuffBuy = "soap";
         // confirm the purchase
         var confirmPurchase = confirm("Buy " + stuffBuy + "?");
         if(confirmPurchase)
         {
         	// close the window if we're done, else they can click again.
         	sym.getSymbolElement().hide();
         }
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnTablet}", "click", function(sym, e) {
         // set which item we've bought
         stuffBuy = "tablet";
         // confirm the purchase
         var confirmPurchase = confirm("Buy " + stuffBuy + "?");
         if(confirmPurchase)
         {
         	// close the window if we're done, else they can click again.
         	sym.getSymbolElement().hide();
         }
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnBucket}", "click", function(sym, e) {
         // set which item we've bought
         stuffBuy = "bucket";
         // confirm the purchase
         var confirmPurchase = confirm("Buy " + stuffBuy + "?");
         if(confirmPurchase)
         {
         	// close the window if we're done, else they can click again.
         	sym.getSymbolElement().hide();
         }
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnFood}", "click", function(sym, e) {
         // set which item we've bought
         stuffBuy = "food";
         // confirm the purchase
         var confirmPurchase = confirm("Buy " + stuffBuy + "?");
         if(confirmPurchase)
         {
         	// close the window if we're done, else they can click again.
         	sym.getSymbolElement().hide();
         }
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnKit}", "click", function(sym, e) {
         // set which item we've bought
         stuffBuy = "kit";
         // confirm the purchase
         var confirmPurchase = confirm("Buy " + stuffBuy + "?");
         if(confirmPurchase)
         {
         	// close the window if we're done, else they can click again.
         	sym.getSymbolElement().hide();
         }
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnFilter}", "click", function(sym, e) {
         // set which item we've bought
         stuffBuy = "filter";
         // confirm the purchase
         var confirmPurchase = confirm("Buy " + stuffBuy + "?");
         if(confirmPurchase)
         {
         	// close the window if we're done, else they can click again.
         	sym.getSymbolElement().hide();
         }
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnPlumbing}", "click", function(sym, e) {
         // set which item we've bought
         stuffBuy = "plumbing";
         // confirm the purchase
         var confirmPurchase = confirm("Buy " + stuffBuy + "?");
         if(confirmPurchase)
         {
         	// close the window if we're done, else they can click again.
         	sym.getSymbolElement().hide();
         }
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnBike}", "click", function(sym, e) {
         // set which item we've bought
         stuffBuy = "bike";
         // confirm the purchase
         var confirmPurchase = confirm("Buy " + stuffBuy + "?");
         if(confirmPurchase)
         {
         	// close the window if we're done, else they can click again.
         	sym.getSymbolElement().hide();
         }
         

      });
         //Edge binding end

      })("hud_MARKET");
   //Edge symbol end:'hud_MARKET'

   //=========================================================
   
   //Edge symbol: 'hudNextDest_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btnHospital}", "click", function(sym, e) {
         getMedical();
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnEmployment}", "click", function(sym, e) {
         //alert('btnHospital be clicked');
         getJob();
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnMarket}", "click", function(sym, e) {
         
         getStore();
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnBathroom}", "click", function(sym, e) {
         getToilet();
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnFarm}", "click", function(sym, e) {
         getfood();
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnSchool}", "click", function(sym, e) {
         getSchool();
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnWater}", "click", function(sym, e) {
         getWater();
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("hudNextDest_1");
   //Edge symbol end:'hudNextDest_1'

   //=========================================================
   
   //Edge symbol: 'hudNextDest_2'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 712, function(sym, e) {
         // insert code here
         sym.stop();
         // Hide an element 
         //sym.getComposition().getStage().$("hudNextDest").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnFarm}", "mouseover", function(sym, e) {
         UpdateUserMessage("Farms have fresh food.");
         sym.getSymbol("btnFarm").play("over");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnFarm}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("btnFarm").play("out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnFarm}", "click", function(sym, e) {
         //getfood();
         sym.getSymbolElement().hide();
          SetChosenPath("farm");
         SetHolderFunction(getFood);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnSchool}", "mouseover", function(sym, e) {
         UpdateUserMessage("An education will get you a better job. A better job will get you more money faster.");
         sym.getSymbol("btnSchool").play("over");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnSchool}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("btnSchool").play("out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnSchool}", "click", function(sym, e) {
         //getSchool();
         sym.getSymbolElement().hide();
          SetChosenPath("school");
         SetHolderFunction(getSchool);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnWater}", "mouseover", function(sym, e) {
         UpdateUserMessage("Living uses water. Every turn will use some of yours. Always have an ample supply.");
         sym.getSymbol("btnWater").play("over");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnWater}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("btnWater").play("out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnWater}", "click", function(sym, e) {
         //getWater();
         sym.getSymbolElement().hide();
          SetChosenPath("water");
         SetHolderFunction(getwater);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnHospital}", "mouseover", function(sym, e) {
         UpdateUserMessage("Hospitals heal you when you're sick and give you health related items.");
         sym.getSymbol("btnHospital").play("over");
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnHospital}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("btnHospital").play("out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnHospital}", "click", function(sym, e) {
         //getMedical();
         sym.getSymbolElement().hide();
          SetChosenPath("medical");
         SetHolderFunction(getMedical);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnJob}", "mouseover", function(sym, e) {
         UpdateUserMessage("A job will bring in income and allow you to buy food and supplies.");
         sym.getSymbol("btnJob").play("over");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnJob}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("btnJob").play("out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnJob}", "click", function(sym, e) {
         
         sym.getSymbolElement().hide();
          SetChosenPath("job");
         SetHolderFunction(getJob);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnMarket}", "mouseover", function(sym, e) {
         UpdateUserMessage("Markets will sell you a variety of useful items including food and transportation.");
         sym.getSymbol("btnMarket").play("over");
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnMarket}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("btnMarket").play("out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnMarket}", "click", function(sym, e) {
         //getStore();
         sym.getSymbolElement().hide();
          SetChosenPath("store");
         SetHolderFunction(getStore);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnToilet}", "mouseover", function(sym, e) {
         UpdateUserMessage("Visiting a toilet gives you a health advantage and allows you to avoid nasty diseases");
         sym.getSymbol("btnToilet").play("over");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnToilet}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("btnToilet").play("out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnToilet}", "click", function(sym, e) {
         //getToilet();
         sym.getSymbolElement().hide();
          SetChosenPath("toilet");
         SetHolderFunction(getToilet);
         

      });
      //Edge binding end

   })("hudNextDest_2");
   //Edge symbol end:'hudNextDest_2'

   //=========================================================
   
   //Edge symbol: 'mcUserMessage'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("mcUserMessage");
   //Edge symbol end:'mcUserMessage'

   //=========================================================
   
   //Edge symbol: 'dice-resized-v2_symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         if(bStopDice == 1){
         	sym.stop();
         }
         
         //alert("in frame one bStopDice is " + bStopDice);
         
         //alert("stop on " + GetNumberDiceShouldStopOn());
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 222, function(sym, e) {
         if(bStopDice == 2){
         	sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 385, function(sym, e) {
         if(bStopDice == 3){
         	sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 632, function(sym, e) {
         if(bStopDice == 4){
         	sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 858, function(sym, e) {
         if(bStopDice == 5){
         	sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 999, function(sym, e) {
         if(bStopDice == 6){
         	sym.stop();
         }

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1053, function(sym, e) {
         // stop the dice from going on and on if there's no current number, i.e
         // we finished the path:
         if(bStopDice == 0){
         	sym.stop();
         } else {
         	console.log("dice looping again, bStopDice is currently " + bStopDice);
         	sym.play(0);
         }

      });
      //Edge binding end

   })("dice-resized-v2_symbol_1");
   //Edge symbol end:'dice-resized-v2_symbol_1'

   //=========================================================
   
   //Edge symbol: 'obit'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisible_button}", "click", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${simpleButton}", "click", function(sym, e) {
         location.reload(true);

      });
      //Edge binding end

   })("obit");
   //Edge symbol end:'obit'

   //=========================================================
   
   //Edge symbol: 'destinationGlow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("destinationGlow");
   //Edge symbol end:'destinationGlow'

   //=========================================================
   
   //Edge symbol: 'btnInvisible'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("btnInvisible");
   //Edge symbol end:'btnInvisible'

   //=========================================================
   
   //Edge symbol: 'dicePair'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 931, function(sym, e) {
         
         var diceFacePos = new Array("one","two","three","four","five","six");
         var randomNumber = Math.floor(Math.random() * 5); // 
         var randomNumber2 = Math.floor(Math.random() * 5); // 
         var stopAt = diceFacePos[randomNumber];
         var stopAt2 = diceFacePos[randomNumber2];
         //alert(stopAt);
         sym.getSymbol("dice_symbol_1").stop(stopAt);
         sym.getSymbol("dice_symbol_2").stop(stopAt2);
         

      });
      //Edge binding end

   })("dicePair");
   //Edge symbol end:'dicePair'

   //=========================================================
   
   //Edge symbol: 'dice_symbol_1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1208, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("dice_symbol_1_1");
   //Edge symbol end:'dice_symbol_1_1'

   //=========================================================
   
   //Edge symbol: 'dicePair_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 931, function(sym, e) {
         //alert(4);
         //alert("DSA:"+diceStopsAt1);
         //alert('stopping dice 1 at ' + sym.getParentSymbol().getVariable("diceStopsAt1"));
         //alert('stopping dice 2 at ' + sym.getParentSymbol().getVariable("diceStopsAt2"));
         
         sym.stop();
         var _stopOn1 = sym.getParentSymbol().getVariable("diceStopsAt1");
         var _stopOn2 = sym.getParentSymbol().getVariable("diceStopsAt2");
         
         //alert(typeof(_stopOn1)); // numner
         
         //alert(_stopOn1 + "/" + _stopOn2);
         // this is bad data.
         sym.getSymbol("dice_symbol_1").stop( _stopOn1 );
         sym.getSymbol("dice_symbol_2").stop( _stopOn2 );
         sym.play();
         // stop them BEFORE the slide while testing:
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("dicePair_1");
   //Edge symbol end:'dicePair_1'

   //=========================================================
   
   //Edge symbol: 'shadow'
   (function(symbolName) {   
   
   })("shadow");
   //Edge symbol end:'shadow'

   //=========================================================
   
   //Edge symbol: 'rectButton'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         //sym.play("loop");
         

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         // insert code to be run at timeline play here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("flash");
         

      });
      //Edge binding end

   })("rectButton");
   //Edge symbol end:'rectButton'

   //=========================================================
   
   //Edge symbol: 'rountBtn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rountBtn");
   //Edge symbol end:'rountBtn'

   //=========================================================
   
   //Edge symbol: 'flare_animation'
   (function(symbolName) {   
   
   })("flare_animation");
   //Edge symbol end:'flare_animation'

   //=========================================================
   
   //Edge symbol: 'buttonflash'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("buttonflash");
   //Edge symbol end:'buttonflash'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-581531069");