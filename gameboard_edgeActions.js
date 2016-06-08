/*jshint undef: false, strict: false, latedef: nofunc, maxerr: 300*/
/* @author Glen (THIS IS THE MERGED VERSION V3) */
// V 11.01.01

var player1 = {
    name: "",
    hp: 30,
    wp: 30,
    ep: 14,
    gb: 25
};

var gameOver = false;
var sick = false;
var sickWater = false;
////var playerStats;
var message;
////var medicineBuy;
var diceRoll; // this holds the current dice roll and is used to figure out how far we move the player
////var nextPosition; // this holds where the player needs to move to; we validate against this
// adding some vars that JSHINT is bitching about
////var playerDetails;

// debug row color:
var THE_GAME;
////var bRowColor = true;
// keep track of where the player icon should be on the board:
////var currPlayerPosition = 0;
var currentPlayerSquare = 0;
////var numberOfRolls = 0;
var DESTINATION = 4;
var HOME = 8;
var inputDifficulty = "a"; // USA! USA! USA!
////var bPlayerIsDead = false;
var bPlayerHasBike = false;
var sicknessTimer = -1; // variable that can be used to track timed sickness attacks
var freeTravel = 0; // variable to track the number of "free" travel turns left
var bCountryHasBeenSelected = false;
var bNameHasBeenEntered = false;
var _playerName;
////var my_stage;
var startingGameTip;
var arrGameTips = [];
var getDifficulty;
var countryValue = 3; // numberic value for country used for card selection and serving Country Specific Game Tips (3 means none)
////var _username;
////var bUserInputDisabled = false; // used to disable user changing input after game start
var additionalInfo = ""; // extra message info to concat on dice roll messages
////var destBlocked = ""; // destination that will be blocked
////var blockedFunction = ""; // destination function that can not be called 
////var blockedTurns = 0; // number of turns left that userr is blocked from destination
var turnNumber = 0; // number of turns played (currently only used for debugging)
var destinationBlocked = false; // set to true if one or more destination are being blocked
var bDest = {}; // dictionary to hold blocked destinations
var bsfBlocked = false; // varaible for special card case requiring tracking

// DEBUGGING VARIABLES
var winVal = 99; // DANNY - change this value to the turn # you want the win condition triggered
var loseVal = 99; // DANNY - change this value to the turn # you want the lose condition triggered
var pCard = -1; // set to partnership card value you want to test (-1 value for random card)
var cCard = -1; // set to challenge card value you want to test (-1 value for random card)
var setRoll = -1; // set dice roll value (-1 is ignored and random dice roll is generated)
var hitCcard = false; // set to true to "land" on a Challenge card with first roll (resets to false after 1st card)
var hitPcard = false; // set to true to "land" on a Partnership vard with first roll (resets to false after 1st card)
// end debuggibg variables

////var _prevLife = 0;
////var _prevWater = 0;
////var _prevGlob = 0;
////var _prevEdu = 0;

// USE A GENERIC HOLDER FUNCTION TO DELAY TRIGGERING THE MAIN PATH
// ACTION UNTIL THE USER REACHES THE DESTINATION:
var holderFunction;
////var holderParam1;
////var holderParam2;
////var holderParam3;

var characterImg = "images/character_a_0.png";
var characterBike = "images/character_a_0_bike.png";

// create our pause intervals so the player can finish moving
// before the game play moves ahead:
var intervalDiceAnimTimeDelay;
var intervalDiceButtonFlashes;

////var usernameInput = "Luke Warmwater";

// holds all the game text
////var objGameText = {};

// hold the old score data so we can roll up from that in an animation:
var objWater = {
    newScore: 0
};
var objGlobal = {
    newScore: 0
};
var objEdu = {
    newScore: 0
};
var objLife = {
    newScore: 0
};

////var selectedPathEdgeFile; // getMedical, getJob, getStore, getToilet, getfood, getSchool, getWater
////var chosenPath = ""; // 'medical', 'job', 'store', 'toilet', 'food', 'school' or 'water'
var pathDescription = "";
////var selectedCountry;

////var arrPotentialCharNamesMale;
////var arrPotentialCharNamesFemale;
////var characterName = "";

////var currentPathFunctionHolder; //used to delay the main game functions (getjob, gettoilet) until the user rolls.

// used to allow user to choose avatar
// at beginning of game:
var bCharacterWasChosen = false;
var bCharIndex = 0;

var cc = []; // cc = chosen character
    cc.push("character_a_0.png");
    cc.push("character_a_1.png");
    cc.push("character_a_2.png");
    cc.push("character_a_3.png");
    cc.push("character_b_0.png");
    cc.push("character_b_1.png");
    cc.push("character_b_2.png");
    cc.push("character_b_3.png");
    cc.push("character_c_0.png");
    cc.push("character_c_1.png");
    cc.push("character_c_2.png");
    cc.push("character_c_3.png");

var cb = []; // cb = character bike
    cb.push("character_a_0_bike.png");
    cb.push("character_a_1_bike.png");
    cb.push("character_a_2_bike.png");
    cb.push("character_a_3_bike.png");
    cb.push("character_b_0_bike.png");
    cb.push("character_b_1_bike.png");
    cb.push("character_b_2_bike.png");
    cb.push("character_b_3_bike.png");
    cb.push("character_c_0_bike.png");
    cb.push("character_c_1_bike.png");
    cb.push("character_c_2_bike.png");
    cb.push("character_c_3_bike.png");

// setting blocked destinations dictionary
bDest.job = 0;
bDest.medical = 0;
bDest.store = 0;
bDest.toilet = 0;
bDest.school = 0;
bDest.farm = 0;
bDest.water = 0;
//console.log(bDest);
//checkBlocks();

function InitGame() {
    
    console.log("MAINJS.InitGame");
    THE_GAME = AdobeEdge.getComposition('EDGE-581531069').getStage();
    createInventory();
    
    // make our character clickable
    document.getElementById("character").addEventListener("click", function(){
        ChooseCharacter();
    });
}

function CallDebugFunctions()
{
    console.log("MAINJS.CallDebugFunctions");
    player1.bike = true;
     // DEBUG STUFF. CALLED AS SOON AS USER CHOOSES A COUNTRY.
    if(bCharacterWasChosen === true)
    {
        document.getElementById("character").src = characterBike;
    } else {
        // they get the default bike:
        document.getElementById("character").src = "images/character_a_0_bike.png";
    }
}


function SetChosenPath(which_path) {
    //var selectedPathEdgeFile; // getMedical, getJob, getStore, getToilet, getfood, getSchool, getWater
console.log("MAINJS.SetChosenPath");
    switch (which_path) {
        case "medical":
            pathDescription = "Go here to gain health points and cure illnesses. For every Global Buck you spend, you 2 Health Points (max 10 points per visit). You can also purchase 1 dose of medication per visit.";
            break;
        case "job":
            pathDescription = "Go to your job to earn money. The higher your education, the more money you earn. You will need Global Bucks to help you buy things and survive the game.";
            break;
        case "store":
            pathDescription = "Go here to purchase a variety of items that can help you in your life. (Max 1 item purchased per visit) ";
            break;
        case "toilet":
            pathDescription = "Go here to gain 2 health points for free. Dispose of your human waste properly to reduce the chance of getting sick.";
            break;
        case "farm":
            pathDescription = "Go here to get the health points you need to survive. To determine how many health points you can buy for 1 Global Buck, but be careful – rolling a 1 will get you sick. ";
            break;
        case "school":
            pathDescription = "Go here to gain education points. The more Education Points you have, the more you get paid when you go to your job. You gain 2 education points for every Global Buck you spend (MAX of 6 points per visit).";
            break;
        case "water":
            pathDescription = "Go here to collect the water points you will need to survive. If you have a bucket, you will be able to collect twice as many water points. Be cautious, untreated water can give you a water borne illness. ";
            break;
        default:
            pathDescription = "invalid path selected. see line 104-ish of 'main.js'";
            break;
    }
    // this is where i'll update the field on stage for now.
    UpdateUserMessage("" + pathDescription + "!");
    UpdateEdgeStageDestinationTextField(which_path);
    // hide the starting instructions:
    HideStartingInstructions();

    // and show the correct background.    
    THE_GAME.getComposition().getStage().ShowNewBackground(which_path);
    FlashTheDice();
}

// sets player onject stats based on user input choice of country card
function getDifficulty(value) {
    console.log("MAINJS.getDifficulty");
    //inputDifficulty = inputDifficulty.toLowerCase();
    switch (value) {

        case "a":
            player1.hp = 30;
            player1.wp = 30;
            player1.ep = 14;
            player1.gb = 25;
            countryValue = 0;
            break;
        case "b":
            player1.hp = 20;
            player1.wp = 20;
            player1.ep = 10;
            player1.gb = 12;
            countryValue = 1;
            break;
        /* DANNY THINKS THESE ARE THE ACTUAL DEBUG VALUES THAT HE HAS LOWERED IN ORDER
        TO MAKE IT EASIER TO DIE FOR TESTING, ETC.
        case "c":
            player1.hp = 20;
            player1.wp = 20;
            player1.ep = 7;
            player1.gb = 7;
            countryValue = 1;
            break;
        */
        case "c":
            player1.hp = 15;
            player1.wp = 15;
            player1.ep = 3;
            player1.gb = 2;
            countryValue = 2;
            break;

        default:
            player1.hp = 30;
            player1.wp = 30;
            player1.ep = 14;
            player1.gb = 25;
            countryValue = 0;
            break;
    }
    // MANUALLY UPDATING, IE FOR TESTING END OF GAME SCENARIOS, LOW HEALTH:
    /*
    player1.hp = 5;
    player1.wp = 5;
    player1.ep = 5;
    player1.gb = 5;
    */
    // DONE
    updateStats();
}

// creates blank inventory
function createInventory() {
    console.log("MAINJS.createInventory");
    player1.soap = false;
    player1.tablet = false;
    player1.bucket = false;
    player1.food = false;
    player1.kit = false;
    player1.filter = false;
    player1.bike = false; 
    player1.plumbing = false;
    player1.medicine = false;
}

// goes through inventory list and displays items that are held
function displayInventory() {
    console.log("MAINJS.displayInventory");
    var currentItems = [];
    for (var key in player1) {
        if (player1[key]) {
            // console.log(key);
            currentItems.push(key);
        }
    }
    // removing player stats from currentItems list to leave only inventory items
    currentItems.splice(0, 4);
    console.log(currentItems);
}

/*
// sends player stats to console
function playerDetails() {
    // display information about player
    console.log("MAINJS.playerDetails");
    console.log("Current Stats \n" + this.name + "\nHealth: " + this.hp + "\nWater: " + this.wp + "\nEducation: " + this.ep + "\nGlobal Bucks: " + this.gb);
}
*/
function DoesPlayerHaveABike()
{
   console.log("MAINJS.DoesPlayerHaveABike");
    
    if(player1.bike === true){
        bPlayerHasBike = true;
    } else {
        bPlayerHasBike = false;
    }
    return bPlayerHasBike;
}

function HideStartingInstructions() {
    console.log("MAINJS.HideStartingInstructions");
    console.log("HideStartingInstructions()");
    document.getElementById('Stage').style.position = "absolute";
    document.getElementById('Stage').style.display = "visible";
    document.getElementById('Stage').style.zIndex = 100;
}

// ------- gameplay functions -------

// update the screen displayed game stats
function updateStats() {
    console.log("MAINJS.updateStats");
    // this appears to be the replacement candidate for takeTurn() so I'll check for cards here.
    //checkCard(); --- was moved to checkDiceRoll function - its called here to often.
    // pass to Danny's side:
    UpdateHUD(player1.hp, player1.wp, player1.gb, player1.ep);
    
    var inventoryTally = "";
    
    /*
     var inventoryTally = 
    player1.soap + "<br>" + 
    player1.tablet + "<br>" + 
    player1.bucket + "<br>" + 
    player1.food + "<br>" + 
    player1.kit + "<br>" + 
    player1.filter + "<br>" + 
    player1.bike + "<br>" + 
    player1.plumbing + "<br>" + 
    player1.medicine;
    */
    
    if(player1.soap){
        inventoryTally += "YES";
    } else {
        inventoryTally += "NO";
    }
    inventoryTally += "<br>";
    
     if(player1.tablet){
        inventoryTally += "YES";
    } else {
        inventoryTally += "NO";
    }
    inventoryTally += "<br>";
    
    
     if(player1.bucket){
        inventoryTally += "YES";
    } else {
        inventoryTally += "NO";
    }
    inventoryTally += "<br>";
    
    
     if(player1.food){
        inventoryTally += "YES";
    } else {
        inventoryTally += "NO";
    }
    inventoryTally += "<br>";
    
    
     if(player1.kit){
        inventoryTally += "YES";
    } else {
        inventoryTally += "NO";
    }
    inventoryTally += "<br>";
    
    
     if(player1.filter){
        inventoryTally += "YES";
    } else {
        inventoryTally += "NO";
    }
    inventoryTally += "<br>";
    
    
     if(player1.bike){
        inventoryTally += "YES";
    } else {
        inventoryTally += "NO";
    }
    inventoryTally += "<br>";
    
    
     if(player1.plumbing){
        inventoryTally += "YES";
    } else {
        inventoryTally += "NO";
    }
    inventoryTally += "<br>";
    
    
     if(player1.medicine){
        inventoryTally += "YES";
    } else {
        inventoryTally += "NO";
    }
    
    //InvUpdateInventory(inventoryTally); // GLEN, THIS WAS CAUSING AN ERROR.
}


//-------- destination functions ------------

// actions that take place when food destination is selected
function getFood() {
    console.log("MAINJS.getFood");
   // SetChosenPath("farm");
    var message = "";
    var roll = Math.floor((Math.random() * 6) + 1);
    if (player1.gb <= 0) {
        message = "Unfortunately you have no money to buy food.";
    } else if (roll === 1) {
        message = "You've gotten sick from eating contaminated food.\nGet to the medical centre and buy medicine.\nYou will lose 2 Health Points per turn until you recover";
        sick = true;
    } else {
        message = "You buy food and get " + roll + " Health Points for 1 Global buck.";
        player1.hp += roll;
        player1.gb -= 1;
    }
    UpdateUserMessage("You have arrived at the farm.\n" + message);
    updateStats();
}

// actions that take place when water destination is selected
function getwater() {
    console.log("MAINJS.getwater");
   // SetChosenPath("water");
    var message = "";
    var roll = Math.floor((Math.random() * 6) + 1);
    
    if (roll === 1) {
        if (player1.filter) {
            message = "The water is contaminated.  Fortunately you have a biosand filter so you don't get sick.";
        } else if (player1.tablet) {
            message = "The water is contaminated.  Fortunately you have a water purifucation tablet so you don't get sick.";
            player1.tablet = false;
        } else {
            message = "You've gotten sick from a water-borne illness.\nGet to the medical centre and buy medicine.\nYou will lose 2 Health Points and 2 Water Points per turn until you recover";
            sickWater = true;
        }
    } else {
        if (player1.bucket) {
            roll = roll * 2;
        }
        message = "You gain " + roll + " water points for collecting water";
        player1.wp += roll;
    }
    UpdateUserMessage("You have arrived at the water source.\n" + message);
    updateStats();
}

// actions that take place when toilet destination is selected
function getToilet() {
    console.log("MAINJS.getToilet");
   // SetChosenPath("toilet");    
    var roll = Math.floor((Math.random() * 6) + 1);
	var message = "";
    freeTravel += roll;
    if (roll === 1) {
        message = "<br>You also get 1 turn of free Travel";
    }
    else {
        message = "<br>You also get " + roll + " turns of free Travel";
    } 
    UpdateUserMessage("You have arrived at the toilet.\nGet 2 Health Points for free.\n" + message);
    player1.hp += 2;
    updateStats();
}

// actions that take place when job destination is selected
function getJob() {
    console.log("MAINJS.getJob");
   // SetChosenPath("job");
    // random roll to see if there is work.
    var roll = Math.floor((Math.random() * 6) + 1);
    if (roll === 1) {
        alertIt("There is no work today, try again tomorrow.");
    } else {
        // award them points based on the education they got.
        // more education is a good investment
        if (player1.ep > 30) {
            player1.gb += 50;
            UpdateUserMessage("You worked hard today and earned 50 Global Bucks at the highly technical job your education got you.");
        } else if (player1.ep > 27) {
            player1.gb += 25;
            UpdateUserMessage("You worked hard today and earned 25 Global Bucks thanks to your college degree");
        } else if (player1.ep > 24) {
            player1.gb += 20;
            UpdateUserMessage("You worked hard today and earned 20 Global Bucks thanks to all the things you learned in night school.");
        } else if (player1.ep > 21) {
            player1.gb += 15;
            UpdateUserMessage("You worked hard today and earned 15 Global Bucks. Taking all those courses paid off!");
        } else if (player1.ep > 18) {
            player1.gb += 10;
            UpdateUserMessage("You worked hard today and earned 10 Global Bucks. Good thing you'd taken that course.");
        } else if (player1.ep > 15) {
            player1.gb += 8;
            UpdateUserMessage("You worked hard today and earned 8 Global Bucks. Have you considered taking a class?");
        } else if (player1.ep > 11) {
            player1.gb += 5;
            UpdateUserMessage("You worked hard today and earned 5 Global Bucks. An education would help you get better skills.");
        } else if (player1.ep > 8) {
            player1.gb += 3;
            UpdateUserMessage("You worked hard today and earned 3 Global Bucks.  Going back to school may get you a higher wage.");
        } else if (player1.ep > 4) {
            player1.gb += 2;
            UpdateUserMessage("You worked hard today and earned 2 Global Bucks. That must be frustrating. Need an education?");
        } else {
            player1.gb += 1;
            UpdateUserMessage("You worked hard today and earned 1 Global Buck at a menial job due to your lack of education.");
        }
        updateStats();
    }
}

// actions that take place when medical destination is selected
function getMedical() {
    console.log("MAINJS.getMedical");
    //SetChosenPath("medical");
    if (sick || sickWater) {
        if (player1.gb > 9) {
            if (confirm("You are very sick, buy medicine for $10?")) {
                impactStats(0, 0, 0, -10);
                sick = false;
                sickWater = false;
                UpdateUserMessage("You've been cured by the Medicine you bought.");
                updateStats();
            }
            else {
            	UpdateUserMessage("You chose not to buy medicine for your sickness");
            	buyMedicine();
            }   
        } 
        else {
            UpdateUserMessage("You are very sick but don't have enough money for the cure.");
        }
    } 
    else if (sicknessTimer > 0 && player1.gb > 2) {
    	if (confirm("You have diarrhea, buy medicine for $3?")) {
            impactStats(0, 0, 0, -3);
            sicknessTimer = -1;
            UpdateUserMessage("You've been cured by the Medicine you bought.");
            updateStats();
        }
        else {
            UpdateUserMessage("You chose not to buy medicine for your diarrhea.");
            buyMedicine();
        }
    	
    }
    else {
        if (player1.gb > 0) {
            buyMedicine();
        } else {
            UpdateUserMessage("Unfortunately you have no money to buy medicine.");
        }
    }
}

// get and check user input for buying medicine and then update player stats
function buyMedicine() {
console.log("MAINJS.buyMedicine");
    var medicineBuy = prompt("For every Global Buck you spend on medicine you get 2 Health Points.\nHow many Global Bucks do you want to spend on medicine? (Maximum 5 Global Bucks)\nOr you can buy medicine to take with you for $10", Math.round(Math.random() * 4) + 1);
    medicineBuy = Number(medicineBuy);

    if ( isNan(parseInt(medicineBuy)) ) {
        UpdateUserMessage("Bad input, please try again");
        buyMedicine();
    } else if (medicineBuy > player1.gb) {
        UpdateUserMessage("You don't have that much money, try buying a little less");
        buyMedicine();

    } else {

        switch (medicineBuy) {
            case 1:
                impactStats(2, 0, 0, -1);
                updateStats();
                UpdateUserMessage("You spent " + medicineBuy + " Global Bucks and gained " + 2 * medicineBuy + " Health Points.");
                break;
            case 2:
                impactStats(4, 0, 0, -2);
                updateStats();
                UpdateUserMessage("You spent " + medicineBuy + " Global Bucks and gained " + 2 * medicineBuy + " Health Points.");
                break;
            case 3:
                impactStats(6, 0, 0, -3);
                updateStats();
                UpdateUserMessage("You spent " + medicineBuy + " Global Bucks and gained " + 2 * medicineBuy + " Health Points.");
                break;
            case 4:
                impactStats(8, 0, 0, -4);
                updateStats();
                UpdateUserMessage("You spent " + medicineBuy + " Global Bucks and gained " + 2 * medicineBuy + " Health Points.");
                break;
            case 5:
                impactStats(10, 0, 0, -5);
                updateStats();
                UpdateUserMessage("You spent " + medicineBuy + " Global Bucks and gained " + 2 * medicineBuy + " Health Points.");
                break;
            case 10:
            	player1.medicine = true;
            	UpdateUserMessage("You bought medicine to carry with you in case you get sick.");  
				break;
				  
            default:
                UpdateUserMessage("Bad input, please try again");
                break;
        }
    }
    //UpdateUserMessage("You spent " + medicineBuy + " Global Bucks and gained " + 2 * medicineBuy + " Health Points.");

}

// actions that take place when school destination is selected
function getSchool() {
    console.log("MAINJS.getSchool");
   // SetChosenPath("school");
    if (player1.gb <= 0) {
        message = "Unfortunately you have no money to buy an education.";
    } else {
        buySchool();
    }
}

// gets and checks user input for schooling spending and updates player stats
function buySchool() {
    console.log("MAINJS.buySchool");
    var schoolBuy = prompt("For every Global Buck you spend on schooling you get 2 Education Points.\nHow many Global Bucks do you want to spend on Education (Maximum 3 Global Bucks)?", Math.round(Math.random() * 3));
    var bucksSpent = parseInt(schoolBuy);
    if ( isNan(bucksSpent) ) {
        UpdateUserMessage("Bad input, please try again");
        buySchool();
    } else if (bucksSpent > 3) {
    	UpdateUserMessage("That amount is above the maximum allowed, please choose a value of 3 or less");
        buySchool();
    } 
    else if (bucksSpent > player1.gb) {
        UpdateUserMessage("You don't have that much money, try buying a little less");
        buySchool();
        
    } else {
        impactStats(0, 0, 2 * bucksSpent, -bucksSpent);
        updateStats();
        UpdateUserMessage("You spent " + schoolBuy + " Global Bucks and gained " + 2 * schoolBuy + " Education Points.");
    }
}

// actions that take place when store destination is selected
function getStore() {
    console.log("MAINJS.getStore");
  //  SetChosenPath("store");
    if (player1.gb <= 0) {
        message = "Unfortunately you have no money to buy anything at the Market.";
        UpdateUserMessage(message);
    } else {
        OpenMarketHud();
    }
    //updateStats();
}

function OpenMarketHud() {
    console.log("MAINJS.OpenMarketHud");
    ShowMarket();
}

function CloseMarketHud() {
    console.log("MAINJS.CloseMarketHud");
    HideMarket();
}

function buyNewStuff() {
    console.log("MAINJS.buyNewStuff");
    var spent = 0;
    var itemMessage = "";

    // our global called stuffBuy holds anything the user has clicked in the market
    if (stuffBuy === "") {
        UpdateUserMessage('nothing chosen to buy');

        return;
    }

    switch (stuffBuy) {
        case "soap":
            spent = 1;
            itemMessage = "bar of soap message";
            if (checkout("soap", spent, itemMessage) === true) {
                player1.soap = true;
                updateStats();
            } else {
                rejectTransaction();
            }
            break;

        case "tablet":
            spent = 1;
            itemMessage = "tablet message";
            if (checkout("tablet", spent, itemMessage)) {
                player1.tablet = true;
                updateStats();
            } else {
                rejectTransaction();
            }
            break;

        case "bucket":
            spent = 2;
            itemMessage = "bucket message";
            if (checkout("bucket", spent, itemMessage)) {
                player1.bucket = true;
                updateStats();
            } else {
                rejectTransaction();
            }
            break;

        case "food":
            spent = 2;
            itemMessage = "food message";
            if (checkout("food", spent, itemMessage)) {
                player1.food = true;
                updateStats();
            } else {
                rejectTransaction();
            }
            break;

        case "kit":
            spent = 3;
            itemMessage = "kit message";
            if (checkout("kit", spent, itemMessage)) {
                player1.kit = true;
                updateStats();
            } else {
                rejectTransaction();
            }
            break;

        case "filter":
            spent = 20;
            itemMessage = "filter message";
            if (checkout("filter", spent, itemMessage)) {
                player1.filter = true;
                updateStats();
                checkPowerUp(stuffBuy); // checks the item to give player the bonus (heal them if sick, feed them if hungry, etc.)
            } else {
                rejectTransaction();
            }
            break;

        case "bike":
            spent = 20;
            itemMessage = "bike message";
            if (checkout("bike", spent, itemMessage)) {
                player1.bike = true;
                document.getElementById("character").src = characterBike;
                characterImg = characterBike;
                 UpdatePlayerAvatar(characterImg);
                console.log("BIKE SHOWN");
                updateStats();
            } else {
                rejectTransaction();
            }
            break;

        case "plumbing":
            spent = 100;
            itemMessage = "plumbing message";
            if (checkout("plumbing", spent, itemMessage)) {
                player1.plumbing = true;
                updateStats();
                checkPowerUp(stuffBuy); // checks the item to give player the bonus (heal them if sick, feed them if hungry, etc.)
            } else {
                rejectTransaction();
            }
            break;

        case "nothing":
            spent = 0;
            itemMessage = "No bonuses for you.";
            UpdateUserMessage("You bought nothing and spent 0 Global Bucks.\n" + itemMessage);
            break;

		// Does this get called?
        default:
            UpdateUserMessage("Bad input, please try again");
            OpenMarketHud(); 
            break;
    }
}

// checks to see if you have money for transaction and then completes transaction, displays purchse confirmation message
function checkout(item, value, message) {
    console.log("MAINJS.checkout");
    if (player1.gb < value) {
        console.log("checkout false");
        return false;
    } else {
        console.log("checkout true");
        player1.gb -= value;
        UpdateUserMessage("You just bought " + item + " for " + value + " Global Bucks.\n"); // "+ message" for more context
        return true;
    }
}

// displays message when you don;t have enough money, sends you back to the store
function rejectTransaction() {
    console.log("MAINJS.rejectTransaction");
    UpdateUserMessage("You don't have enough money for that, please try again");
    stuffBuy = ""; // added this variable reset to stop infinte recursion if player tries to buy something they don't have enough money for (keeps passing same item chosen)
    
    stuffBuy(); // TODO - this doesn't work - it loops out to game play cycle - can't return to store if transaction rejected due to current game loop design.
    console.log("return to buy screen");
}

function checkPowerUp(powerUp) {
    console.log("MAINJS.checkPowerUp");
    // go through the power up list and give them the power
    switch (powerUp) {
        case "plumbing":
            console.log("plumbing power up");
            player1.wp = 100;
            break;
            
        case "filter":
            // TODO - this will wipe all education blocks, even if not tied to bsfBlock card - fix if 
            // time permits (incidince is extremely rare)
            if (bsfBlocked) {
                bDest.school = 0;
                bsfBlocked = false;
                console.log("education available");
            }
            break;
            
        default:
        console.log("nothing");
    }
}


// -------------- card functions ---------------

// checks for action cards and chooses the type
// TODO function checkCard(square) - simple version for now, will check vs each destination in future (randomize where they appear?)
function checkCard() {
    console.log("MAINJS.checkCard");
    var square = currentPlayerSquare;
	//console.log("position arguement sent: " + square);

	// TODO remove first two conditionals once testing done
	if (hitCcard) {
		hitCcard = false;
		getChallengeCard();
	}
	else if (hitPcard) {
		hitPcard = false;
		getPartnershipCard();
	}
	else if (square === 2 || square === 7) {
		getChallengeCard();
	}
	else if (square === 5) {
		getPartnershipCard();
	}
	else {
		console.log("empty square");
	}
}

// randomly selects challenge card
function getChallengeCard() {
    console.log("MAINJS.getChallengeCard");
    var number = Math.floor(Math.random() * challengeCards[countryValue].length);
    var specialMsg = ""; //TEMP TESTING
    // debug to test specific cards
    if (cCard !== -1) {
        if (cCard >= challengeCards[countryValue].length) {
            console.log("cCard value out of bounds!!");
        }
        else {
            number = cCard;
            console.log("debugging specific card");
        }
    }
    console.log("Challenge Card! : " + number);
   // UpdateUserMessage("Challenge Card!\n\n" + challengeCards[number].title + "\n" + challengeCards[number].text + "\n" + challengeCards[number].impact);
    var _title = challengeCards[countryValue][number].title;
    var _msg = challengeCards[countryValue][number].text + "<br><br>" + challengeCards[countryValue][number].impact;
    UpdatePopup(_title, _msg, "red");
    // checking for special case cards
    if (challengeCards[countryValue][number].special) {
    	specialMsg = challengeCards[countryValue][number].special;
    	specialCards(challengeCards[countryValue][number].special); 	   	
    }
    impactStats(challengeCards[countryValue][number].hp, challengeCards[countryValue][number].wp, challengeCards[countryValue][number].ep, challengeCards[countryValue][number].gb);
    UpdateHUD(player1.hp, player1.wp, player1.gb, player1.ep);
    // pass data to console
    console.log("**********CARD DATA**********");
    console.log(_title);
    console.log(challengeCards[countryValue][number].impact);
    console.log(specialMsg);
    console.log("*****************************");
}

// randomly selects partnership card
function getPartnershipCard() {
    console.log("MAINJS.getPartnershipCard");
    var number = Math.floor(Math.random() * partnershipCards[countryValue].length);
    var specialMsg = ""; //TEMP TESTING
    // debug to test specific cards
    if (pCard !== -1) {
        if (pCard >= partnershipCards[countryValue].length) {
            console.log("pCard value out of bounds!!");
        }
        else {
            number = pCard;
            console.log("debugging specific card");
        }
    }
    console.log("Partnership Card! - " + number);
   // UpdateUserMessage("Partnership Card!\n\n" + partnershipCards[number].title + "\n" + partnershipCards[number].text + "\n" + partnershipCards[number].impact);
   	var _title = partnershipCards[countryValue][number].title;
    var _msg = partnershipCards[countryValue][number].text + "<br><br>" + partnershipCards[countryValue][number].impact;
    UpdatePopup(_title, _msg, "green");
    if (partnershipCards[countryValue][number].special) {
    	specialMsg = partnershipCards[countryValue][number].special;
    	specialCards(partnershipCards[countryValue][number].special); 	   	
    }
    impactStats(partnershipCards[countryValue][number].hp, partnershipCards[countryValue][number].wp, partnershipCards[countryValue][number].ep, partnershipCards[countryValue][number].gb);
    UpdateHUD(player1.hp, player1.wp, player1.gb, player1.ep);
    // pass data to console
    console.log("**********CARD DATA**********");
    console.log(_title);
    console.log(partnershipCards[countryValue][number].impact);
    console.log(specialMsg);
    console.log("*****************************");
}

// special card function that get agruements from challengeCards.js
function specialCards(fnstring) {
    console.log("MAINJS.specialCards");
	// one way - makes sense to me
	console.log("activating special case function: " + fnstring);
	switch (fnstring) {
		case "gotSick":
			gotSick();
			break;
			
		case "gainEducationLevel":
			console.log("gaining education level - please stand by");
			gainEducationLevel();
			break;
			
        case "gain2EducationLevels":
            gainEducationLevel();
            gainEducationLevel();
            break;	
			
		case "loseEducationLevel": 
			loseEducationLevel();
			break;
			
		case "createInventory": 
			createInventory();
			updateStats();
			break;
			
		case "gotDiarrhea":
			gotDiarrhea();
			break;	
		
		case "educationBlockAll":
		    blockDestination("school", 99);
            //educationBlock(99);
            break;
			
		case "educationBlock20":
		    blockDestination("school", 20);
            //educationBlock(20);
            break; 
			
        case "educationBlock7":
            blockDestination("school", 7);
            //educationBlock(7);
            break; 
            
        case "educationBlock5":
            blockDestination("school", 5);
            //educationBlock(5);
            break;
            
        case "educationBlock3":
            blockDestination("school", 3);
            blockDestination("job", 3);
            //educationBlock(3);
            break;          
            
        case "payEducationLevel":
            payEducationLevel();
            break;  
         
         case "educationSchoolMedicalBlock":
            blockDestination("school", 3);
            blockDestination("medical", 3);
            blockDestination("store", 3);
            //esmBlock();
            break;
            
          case "payOrBeat":
            payOrBeat();
            break; 
            
          case "payOrNoWater":
            payOrNoWater();
            break; 
          
          case "bsfBlock":
            bsfBlock();
            break;   
            
          case "getABikeEducation":
            gainEducationLevel();
            player1.bike = true;
            THE_GAME.ShowAllBikes();
            break;      
            
		default: 
			// nothing 
			break;
	}
	// alternate
	/*
	 * var fn - window[fnstring];
	 * if (typeof fn === "function") fn();
	 */
}

// functions to handle special effects inroduced by Challenge or Partnership Cards
function gotSick() {
    console.log("MAINJS.gotSick");
	sick = true;
	console.log("you got sick!!");
}

function gainEducationLevel() {
    console.log("MAINJS.gainEducationLevel");
	modifyEducationLevel(1);
	console.log("gain some education");
}	

function loseEducationLevel() {
    console.log("MAINJS.loseEducationLevel");
	modifyEducationLevel(-1);
	console.log("lose some education");
}

function payEducationLevel() {
    // need to charge for educational level if they have $6, otherwise block from Education for 5 turns
    if (player1.gb >= 6) {
        player1.gb -= 6;
        gainEducationLevel();
    }
    else {
        blockDestination("school", 5);
        console.log("you couldn't pay for more school");
    }
    updateStats();
    UpdateHUD(player1.hp, player1.wp, player1.gb, player1.ep);  
}

function gotDiarrhea() {
	sicknessTimer = 4;
	console.log("you got Diarrhea!");
}

function payOrBeat() {
    // lose 2 global bucks, if can't pay, lose 4 health points
    if (player1.gb >= 2) {
        player1.gb -= 2;
        console.log("you paid the 2 global bucks");    
    }
    else {
        player1.hp -= 4;
        console.log("you didn't have enough to pay, lost 4 health points");
    }
    updateStats();
    UpdateHUD(player1.hp, player1.wp, player1.gb, player1.ep);   
}

function payOrNoWater() {
    // pay $2 Global Bucks for bottled water until the flooding recedes – if you don’t have $2 Global Bucks, lose 2 health points and 2 water points
    if (player1.gb >= 2) {
        player1.gb -= 2;
        console.log("you paid 2 global bucks for water");    
    }
    else {
        player1.hp -= 2;
        player1.wp -= 2;
        console.log("you didn't have enough to buy water, lost 2 health points and 2 water points");
    }
    updateStats();
    UpdateHUD(player1.hp, player1.wp, player1.gb, player1.ep);      
}

function bsfBlock() {
    // block school until bsf filter is purchased
    if (player1.filter) {
        console.log("You already have a filter, there is no effect");
    }
    else {
        blockDestination("school", 99);
        console.log("blocked from school until you buy a filter");
        bsfBlocked = true;
    }
}

function blockDestination(dest, val){
	destinationBlocked = true;
    console.log(bDest);
    bDest[dest] += val;
    console.log(dest + " blocked for " + val + " turns!");
    console.log(bDest);
}

function modifyEducationLevel(direction){
     console.log("MAINJS.modifyeducationlevel");
	console.log("modifying Education Level - please standby");
	if (player1.ep > 30) {
        if (direction < 0) {
        	player1.ep = 29;
        	console.log("education dropped from the top spot");
        }
        else {
        	player1.ep += 3;
        	console.log("already at the top spot - have 3 more points");
        }
    } 
    else if (player1.ep <=30 && player1.ep > 4) {
        player1.ep += 3 * direction;
        console.log("resulting education change: " + 3 * direction);
    } 
    else {
        if (direction < 0) {
        	player1.ep = 0;
        	console.log("already have no education - can't get any lower");
        }
        else {
        	player1.ep = 6;
        	console.log("education bumped up to level 2");
        }
    }
    updateStats();
    UpdateHUD(player1.hp, player1.wp, player1.gb, player1.ep);
}


// --------- turn based functions ------------

function checkPlayerCondition(numberOfTurns) {
     console.log("MAINJS.checkplayercondition");
	// check if player is sick from food
    if (sick === true) {
        UpdateUserMessage("You are still sick from eating contaminated food, you lost " + 2 * numberOfTurns + " Health Points.");
        additionalInfo = "<br>You are still sick from eating contaminated food, you lost " + 2 * numberOfTurns + " Health Points.";
        impactStats(-2 * numberOfTurns, 0, 0, 0);
        updateStats();
    }
    // check if player is sick from water
    if (sickWater === true) {
        UpdateUserMessage("You are still sick from drinking contaminated water, you lost " + 2 * numberOfTurns + " Health Points and Water Points");
        additionalInfo = "<br>You are still sick from drinking contaminated water, you lost " + 2 * numberOfTurns + " Health Points and Water Points";
        impactStats(-2 * numberOfTurns, -2 * numberOfTurns, 0, 0);
        updateStats();
    }
    // check if player is sick from Challenge Card
    if (sicknessTimer > 1) {
    	sicknessTimer -= 1;
    	console.log("sicknessTimer = " + sicknessTimer);
    }
    else if (sicknessTimer === 1) {
    	UpdateUserMessage("You didn't get medicine in time, you lost 6 Health Points");
    	player1.hp -= 6;
    	sicknessTimer = -1;
    	console.log("sicknessTimer = " + sicknessTimer);
    	updateStats();
    }
    else {
    	// reset timer if goes beyond point of impact
    	sicknessTimer = -1;
    	console.log("sicknessTimer = " + sicknessTimer);
    }
    
}

// updates player stats from sent agruements
function impactStats(hp, wp, ep, gb) {
     console.log("MAINJS.impactstats");
    player1.hp += hp;
    player1.wp += wp;
    player1.ep += ep;
    player1.gb += gb;
    checkGameOver();
}

// determines stats decay based on number of rolls in the turn and player held power ups and/or power downs
function travelToll(numberOfTurns) {
     console.log("MAINJS.traveltoll");
    if (freeTravel > 0) {
        freeTravel -= 1;
        if (freeTravel === 0) {
            additionalInfo = "<br>That was your last turn of free Travel.";
        }        
    }
    else {
    	additionalInfo = "";
        impactStats(-numberOfTurns, -numberOfTurns, 0, 0);
    }
    updateStats();
    checkPlayerCondition(numberOfTurns);
    checkPowerUps();
    checkBlocks();
    UpdateHUD(player1.hp, player1.wp, player1.gb, player1.ep);
    turnNumber++; // updates turn number    
}

function checkPowerUps() {
    console.log("MAINJS.checkPowerUps");
    if (player1.plumbing === true) {
        player1.wp = 100;
        updateStats();
    }
    if (player1.kit && player1.hp < 8) {
        console.log("used kit?");
        additionalInfo += "<br>You are running low on Health, use your first aid kit to gain 6 Health Points.";
    } 
    else if (player1.food && player1.hp < 8) {
        console.log("used food?");
        additionalInfo += "<br>You are running low on Health, try eating some food to gain 4 Health Points.";
    }
    else {
    	console.log("no powerup message");
    }
          
}

function checkBlocks() {
    console.log("MAINJS.checkBlocks");
    if (destinationBlocked) {
    	console.log("destination is blocked - checking for unblocks");
    	destinationBlocked = false;
	    for (var key in bDest) {
	        var value = bDest[key];
	        if (value > 0) {
	            disableDestination(key);
	            bDest[key]--;
	            destinationBlocked = true;
	        }
	        else {
	            enableDestination(key);
	        }       
	    }
    }
    else {
    	console.log("no blocked destination - no checking required");
    }
    console.log(bDest); 
}

// executes impacts when player uses invetory item and removes item from inventory list
// send argument of the inveotry item being used (only "food" and "kit" are used by player iteraction)
function useInventory(item) {
     console.log("MAINJS.useInventory");
    // checks argument sent and gives stats boost and removes item from player object
    switch (item) {
    case "food":
        if (player1.food) { 
            player1.hp += 4;
            player1.food = false;
        }
        else {
            console.log("user does not have food to use");
        }
        break;
        
    case "kit":
        if (player1.kit) {
            player1.hp += 6;
            player1.kit = false;
        }
        else {
            console.log("user does not have first-aid kit to use");
        }
        break;
               
    default: 
        // nothing 
        break;
    }
    displayInventory();    
    updateStats();
}
/*
function ShowTheDice() {
    console.log("MAINJS.ShowTheDice");
    THE_GAME.getComposition().getStage().ShowDice();
}

function HideTheDice() {
    console.log("MAINJS.HideTheDice");
    THE_GAME.getComposition().getStage().HideDice();
}
*/
function ExecutePlayerRoll() // called by the dice function.
{   
    console.log("MAINJS.ExecutePlayerRoll");
    // hide the dice so it can't be clicked again:
     THE_GAME.HideDiceButtons();
    var dice_roll_1 = 0;
    var dice_roll_2 = 0;

    // set first dice value:
    dice_roll_1 = Math.floor((Math.random() * 6) + 1);
    // do they have a bike, thus a second dice?
    if (player1.bike === true) {
        dice_roll_2 = Math.floor((Math.random() * 6) + 1);
    }
    
    //debug code, allows us to manually set the roll:
    if (setRoll > 0) {
        dice_roll = setRoll;
    }
    // end debug code
    
    // delay doing anything until the dice animation has had time to finish:
    intervalDiceAnimTimeDelay = setInterval( WaitUntilDiceAnimationPlaysBeforeAddingNewDiceTotal, 750, dice_roll_1, dice_roll_2 );
}


function WaitUntilDiceAnimationPlaysBeforeAddingNewDiceTotal( dice_roll_1 , dice_roll_2 ) {
    console.log("MAINJS.WaitUntilDiceAnimationPlaysBeforeAddingNewDiceTotal");
    // reset the interval
    clearInterval(intervalDiceAnimTimeDelay);
    // check 
    checkDiceRoll(dice_roll_1 + dice_roll_2);
    
    var bHasBike = player1.bike;
    // pass it to the new dice:
    console.log("PASSING VALUES TO SDBOGV: " + dice_roll_1 + "," + dice_roll_2 + "," + bHasBike);
    THE_GAME.ShowDiceBasedOnGlensValue( dice_roll_1, dice_roll_2, bHasBike);
}


// checks to see if player has died
function checkGameOver() {
    console.log("MAINJS.checkGameOver");
   // var _gameOver = true;

    if (player1.hp < 1) {
     
        playerDied();
    }

    if (player1.wp < 1) {
      
        playerDied();
    }
    // Check for player win scenario
    if (playerWins()) {
    	playerWon();
    }
    // check debug variable 
    if (turnNumber >= winVal) {
        console.log("playerW wins via debug val of " + winVal);
        playerWon();       
    }
    else if (turnNumber >= loseVal) {
        console.log("player loses via debug val of " + loseVal);
        playerDied();
        
    }
    else {
        console.log("turn Number = " + turnNumber);
    }
}

// checks for win condition
function playerWins() {
    console.log("MAINJS.playerWins");
	//return true;
	if (player1.hp >= 50 && player1.wp >= 50 && player1.ep >= 30 && player1.gb >= 75 && (player1.filter === true || player1.plumbing === true)) {
		console.log("players wins = true");
		return true;
	}
	else {
		console.log("players wins = false");
		return false;
	}	
}

// updates game once player has died
function playerDied() {
    console.log("MAINJS.playerDied");
    //alert('dead');
    UpdateUserMessage("You'd better sit down for this...");
    updateStats();

    gameOver = true;
    UpdateHUD();
    
    THE_GAME.ShowObituary(_playerName, getDeathMessage());
}

function playerWon(){
    console.log("MAINJS.playerWon");
    UpdateUserMessage("Well Done and Congratulations!!!");
    updateStats();

    gameOver = true;
    UpdateHUD();
    
    THE_GAME.ShowWinMessage(_playerName + " WINS!", getWinMessage());  
}

function getDeathMessage()
{
    console.log("MAINJS.getDeathMessage");
 var deathMsg = "We are very sorry to say that your life has come to an end. Hopefully you have learned about some of the global issues people face around the world – and even more importantly, this will inspire you to take actions! Please visit the ACTIONS YOU CAN TAKE page to read more about global issues, get ideas for how you can take action, and lesson plans you can use in your school.";  
return deathMsg;
}

function getWinMessage()
{
    console.log("MAINJS.getWinMessage");
 var winMsg = "Congratulations on achieving a sustainable life! Hopefully you have learned about some of the global issues people face around the world – and even more importantly, this will inspire you to take action! Please visit the ACTIONS YOU CAN TAKE page to read more about global issues, get ideas for how you can get involved, and lesson plans you can use in your school.";   
    return winMsg;
}
function alertIt(what) {
    if (what === undefined) {
        alert('nothing defined to alert');
    }

    var outputlist = document.createElement("li");
    var node = document.createTextNode(what + "\n");
    outputlist.appendChild(node);
    document.getElementById("debug_text").appendChild(outputlist);
    outputlist.scrollIntoView(false);
}

function PassDiceRollToEdge(_roll) {
    console.log("MAINJS.PassDiceRollToEdge");
    // write it to the global
    diceRoll = _roll;
    THE_GAME.SetNumberDiceShouldStopOn(diceRoll);
}

function FlashTheDice()
{
    console.log("MAINJS.FlashTheDice");
    // clear the interval if it needs it:
     clearInterval(intervalDiceButtonFlashes);
  //local caller of FlashDice
    THE_GAME.ShowDiceButtons();
    THE_GAME.FlashDiceButton();
}

function checkDiceRoll(diceRoll) {
    console.log("MAINJS.checkDiceRoll");
    var cardYes = false;
    // see if they're still alive:
    checkGameOver();
    
    if(gameOver){
        return;   
    }

    UpdateUserMessage("YOU JUST ROLLED A " + diceRoll + ".");
    var msgDiceRoll = "";
    // check to see if we're on the first leg
    if (currentPlayerSquare < 4) {

        if (currentPlayerSquare + diceRoll >= DESTINATION) {
            // round down to the destination value:
            currentPlayerSquare = DESTINATION;
            // stop them at midpoint
            msgDiceRoll = 'You rolled a ' + diceRoll + ', more than enough to arrive safely at your destination!';      
            
            intervalDiceButtonFlashes = setInterval(FlashTheDice, 3000);
			// adjust their stats before passing to VIEW
            travelToll(1);
        } else {
            currentPlayerSquare += diceRoll;
            // goto, or at least stop at, currentPlayerSquare * 1000ms.
            msgDiceRoll = "You rolled a " + diceRoll + ". Player is now at position " + currentPlayerSquare + " of 8.\nRoll Again?";           
            travelToll(1);
            cardYes = true;         
            FlashTheDice();
        }

    } else {
        // we are on the second leg returning home:
        if (currentPlayerSquare + diceRoll >= HOME) {
            currentPlayerSquare = HOME;
            // path is complete
            msgDiceRoll = 'You rolled a ' + diceRoll + '! More than enough to arrive back at home! Sweet!';
            travelToll(1);
            // show hud here
            // reset currentPlayerSquare to zero
            currentPlayerSquare = 0;
            // path finished
           // swal('path complete');
            UpdateUserMessage("Congratulations! You FINISHED a path!");
            //HideDice();
            THE_GAME.getComposition().getStage().ShowHudForNextChoice();
        } else {
            currentPlayerSquare += diceRoll;
            // goto, or at least stop at, currentPlayerSquare * 1000ms.
            msgDiceRoll = "Player is now at position " + currentPlayerSquare + "\nRoll Again?";
            travelToll(1);
            cardYes = true;
            FlashTheDice();
        }
    }
    // move player to currentplayersquare:
    UpdatePlayerPositionAlongTimeline(Number(currentPlayerSquare));	
    // alert the correct message. i moved the alerts here so they wouldn't stop time and halt player movement:    
    if (msgDiceRoll !== "") {
        //        alert("checkDiceRoll: "+msgDiceRoll);
        UpdateUserMessage(msgDiceRoll + additionalInfo + ".");
    }
    // if card square was hit, wait 1.5 seconds then call the card function to determine the card and pop-up the card graphic
    if (cardYes) {
    	setTimeout(checkCard, 1500);
    	//checkCard(currentPlayerSquare); - TODO use this for randomized card squares
    }
}

function DestinationFunction()
{
    console.log("MAINJS.DestinationFunction");
    console.log("THIS IS WHERE EDGE CALLS THE DESTINATION FUNCTION, SUCH AS GETJOB()");
    /*
    NOTE TO GLEN: This is the function Edge calls when it hits spot 4, the destination tile.
    */
    holderFunction();
}

function SetHolderFunction(what)
{
    console.log("MAINJS.SetHolderFunction");
    holderFunction = null;
   // alert(what);
 holderFunction = what;   
}

function HideDice() {
    console.log("MAINJS.HideDice");
    THE_GAME.getComposition().getStage().HideDice();
}

function UpdatePlayerPositionAlongTimeline(num_of_secs) {
    console.log("MAINJS.UpdatePlayerPositionAlongTimeline");
    //var _currentTimelineMilliseconds = num_of_secs * 1000;
    THE_GAME.getComposition().getStage().SetNewTimelineStopPosition(num_of_secs);
    THE_GAME.play();
}


function GetRandomGameTip() {
    console.log("MAINJS.GetRandomGameTip");
    // every game will start the tips from a 
    // random position to keep things fresh:
    startingGameTip++;
    if (startingGameTip > arrGameTips[countryValue].length - 1){
        startingGameTip = 0;
	}

    swal("Random Game Tip!", arrGameTips[countryValue][startingGameTip]);
}
/* not used any more
function MakeBoyOrGirl()
{
    var playerSex = null;
    var bRandomRoll = Math.round(Math.random());
    
    if(bRandomRoll)
    {
        playerSex = "MALE";   
    } else {
        playerSex = "FEMALE";
    }
    
    console.log('PLAYER SEX IS ' + playerSex);
    return playerSex;
}
*/

/*
function UpdateNameStuff() // not called any more. let them click the avatar to choose one.
{
    
    var randNum = Math.ceil(Math.random() * 3);
    var _sex = MakeBoyOrGirl();
    var _ethnix = Math.round(Math.random()); // females start at +2;
    
    _selectedCountry = inputDifficulty; // grab whether user clicked a, b or c and swap the player image accordingly.
    
    switch(_sex)
    {
        case "MALE" :
            characterImg = "images/character_" + _selectedCountry + "_" + _ethnix + ".png"; 
            characterBike = "images/character_" + _selectedCountry + "_" + _ethnix + "_bike.png"; 
            //onsole.log("CHAR NAME: " + characterName);
            break;
                
        case "FEMALE" :
            characterImg = "images/character_" + _selectedCountry + "_" + Number(_ethnix + 2) + ".png"; 
            characterBike = "images/character_" + _selectedCountry + "_" + Number(_ethnix + 2) + "_bike.png"; 
            break;
    }
    
    console.log("CHAR BIKE IS " + characterBike + " and randNum was " + randNum);
    console.log("CHAR IMAGE IS " + characterImg);
    
   // characterImg = characterBike;
    
    document.getElementById("character").src = characterImg;
    document.getElementById("character").src = characterBike;
   
    // update all the avatars to the current pick (inside EDGE):
    UpdatePlayerAvatar(characterImg);
   
    
}
 */

function SetCountrySelected(_countrySelected) {
  
    // entering new sweetalert to get user name:
    UserName();   
    
    bNameHasBeenEntered = true;    
    bCountryHasBeenSelected = true;
    bCharacterWasChosen = true;
    
    SetInputDifficulty(_countrySelected);
    // update the stats accordingly:
    updateStats();
    //HideButtonChoices();
    //CallDebugFunctions();
}

function HideButtonChoices()
{
    console.log("MAINJS.HideButtonChoices");
     document.getElementById("column2").style.display = "none";
     document.getElementById("column2").style.visibility = "hidden";
}

function HideStarterContentAndShowTheGame()
{
    console.log("MAINJS.HideStarterContentAndShowTheGame");
     document.getElementById("column1").style.display = "none";
     document.getElementById("column1").style.visibility = "hidden";
     document.getElementById("column2").style.display = "none";
     document.getElementById("column2").style.visibility = "hidden";
    // show third one holding Edge stuff
     document.getElementById("column3").style.display = "block";
     document.getElementById("column3").style.visibility = "visible";
     document.getElementById("Stage").style.display = "block";
     document.getElementById("Stage").style.visibility = "visible";
    document.getElementById("startButton").style.visibility = "hidden";
}

function SetInputDifficulty(val) {
    console.log("MAINJS.SetInputDifficulty");
    var msgA = "Welcome to easy street. Country A gives you easy access to healthcare, food and plenty of options. Make good choices and life should be a breeze.";
    var msgB = "Be careful. To live in Country B you need to make good choices, have luck on your side and be able to get yourself out of a jam. Medicine and water are your friend. So is a bicycle! Put your mettle to the pedal.";
    var msgC = "You are brave. Life is HARD in Country C. You live at the mercy of warlords and disease, famine and - dear lord, what is that SMELL? Oh yeah, no bathrooms. Only your wits can save you now. Make great choices!";
    
    getDifficulty(val);
    inputDifficulty = val;
    var bgImage = "";
  //  var charImage = "";
    switch (val) {
        case "a":
            bgImage = "url('images/bgA.jpg')";
            _message = msgA;
            break;
        case "b":
            bgImage = "url('images/bgB.jpg')";
             _message = msgB;
            break;
        case "c":
            bgImage = "url('images/bgC.jpg')";
             _message = msgC;
            break;
        default:
            bgImage = "url('images/bg0.jpg')";
             _message = "A = EASIER (Developed Nation), B = CHALLENGING (Emerging Nation) , C = DIFFICULT (Developing Nation)";
            break;
    }

    //document.getElementById("after").style.backgroundImage = bgImage; // not swapping to background as we don't have rights to it
    document.getElementById("choice_description").textContent = _message;
    updateStats();
}

function AreWeReadyToStart() {
    console.log("MAINJS.AreWeReadyToStart");
    if ((bCountryHasBeenSelected) && (bNameHasBeenEntered)) {
        // show the HUD
        ShowDestinations();
        HideStartingInstructions();
        HideStarterContentAndShowTheGame();
    }
}

function UpdateHUD(life, water, glob, edu) {
    console.log("MAINJS.UpdateHUD");
    // alert('UpdateHud');
    console.log("UPDATEHUD:"+life + " " + glob + " " + water + " " + edu);
    var _life;
    var _water;
    var _glob;
    var _edu;
    ////var _playerLifeStatus;

    var _mTweenTime = 1;
/*
    // check for player death        
    if (gameOver != true) {
        _playerLifeStatus = " is alive and well-ish.";
    } else {
        _playerLifeStatus = " is super dead. Sorry.";
    }
*/
   // if ((life != "") && (life != undefined)) {
        _life = life;
        TweenLite.to(objLife, _mTweenTime, {
            overwrite: "all",
            newScore: _life,
            onUpdate: UpdateLife
        });
   // }

  //  if ((water != "") && (water != undefined)) {
        _water = water;
        TweenLite.to(objWater, _mTweenTime, {
            overwrite: "all",
            newScore: _water,
            onUpdate: UpdateWater
        });
   // }

  //  if (0==0) {
        _glob = glob;
        TweenLite.to(objGlobal, _mTweenTime, {
            overwrite: "all",
            newScore: _glob,
            onUpdate: UpdateGlobal
        });
 //   }

   // if ((edu != "") && (edu != undefined)) {
        _edu = edu;
        TweenLite.to(objEdu, _mTweenTime, {
            overwrite: "all",
            newScore: _edu,
            onUpdate: UpdateEducation
        });
  //  }
}


/*
STICK ALL FUNCTIONS THAT TALK TO EDGE AFTER THIS:
*/

// Glen Added
function disableDestination(dest) {
    console.log("MAINJS.disableDestination");
    THE_GAME.DisableDestination(dest);
}

// Glen Added
function enableDestination(dest) {
    console.log("MAINJS.enableDestination");
    THE_GAME.EnableDestination(dest);
}

/*
function CallAvatarPositioningFunction() {
    console.log("MAINJS.CallAvatarPositioningFunction");
    clearInterval(_varSetInterval);
    THE_GAME.TrackAvatar();
}
*/
function UpdateLife() {
    THE_GAME.getSymbol("mcHUD").$("labelLife").html(Math.round(objLife.newScore));
}

function UpdateWater() {
    THE_GAME.getSymbol("mcHUD").$("labelWater").html(Math.round(objWater.newScore));
}

function UpdateGlobal() {
    THE_GAME.getSymbol("mcHUD").$("labelGlobal").html(Math.round(objGlobal.newScore));
}

function UpdateEducation() {
    THE_GAME.getSymbol("mcHUD").$("labelEducation").html(Math.round(objEdu.newScore));
}

function UpdatePlayerName(playername) {
    // alert('UpdateHud');
    _playerName = playername;
    // output it:
    THE_GAME.getSymbol("mcHUD").$("tPlayerName").html(_playerName);
     // update the large text at the top of the screen.
    UpdatePlayerStageName(playername.toUpperCase());
}

function UpdateEdgeStageDestinationTextField(destination) {
    // output it:
    console.log("MAINJS.UpdateEdgeStageDestinationTextField");
    THE_GAME.$("txtDestination").html(destination);

}

function UpdatePopup(head_txt, body_txt, poptype) {
    console.log("MAINJS.UpdatePopup");
    THE_GAME.getSymbol("mcPopup").$("txtHeading").html(head_txt);
    THE_GAME.getSymbol("mcPopup").$("txtBody").html(body_txt);
    THE_GAME.getComposition().getStage().ShowPopup(poptype);
}

function ShowDestinations() {
     console.log("MAINJS.ShowDestinations");
    THE_GAME.getComposition().getStage().ShowHudForNextChoice();
   // THE_GAME.DisableDestination("medical");
    UpdatePlayerAvatar(characterImg);
}

function HideDestinations() {
console.log("MAINJS.HideDestinations");
    THE_GAME.getComposition().getStage().HideHudAfterSelection();
}

function ShowMarket() {
    console.log("MAINJS.ShowMarket");
    THE_GAME.getComposition().getStage().HideHudAfterSelection();
    THE_GAME.$("hudMarket").show(); 
}

function HideMarket() {
    console.log("MAINJS.HideMarket");
     THE_GAME.$("hudMarket").hide();
}

function ChooseCharacter()
{
    // grab the next character image from our array
    // of possible images:
    bCharIndex++;
    if(bCharIndex > cc.length - 1)
    {
        bCharIndex = 0;
    }
    
    if(bCharacterWasChosen === false){
     // advance to next   
        characterImg = "images/" + cc[bCharIndex];
        characterBike = "images/" + cb[bCharIndex];
        
        document.getElementById("character").src = characterImg;
    }
     UpdatePlayerAvatar(characterImg);
}
     
function UserName()
{
    var input_name =  swal({   
    title: "WELCOME!",   
    text: "PLEASE ENTER YOUR NAME:",   
    type: "input",   
    showCancelButton: true,   
    closeOnConfirm: false,   
    animation: "slide-from-bottom",   
    inputPlaceholder: "Player One" }, 
    function(inputValue){   
	
        if (inputValue === false) {
            return false;      
		}
    
        if (inputValue === "") 
        {     
            swal.showInputError("YOUR NAME *** PRETTY PLEASE ***:");     
            return false;   
        } else {
            // hide first two columns:
            UpdatePlayerName(inputValue.toUpperCase());
            swal("Welcome to the Global Life Game, " + inputValue.toUpperCase(), "Make good choices!", "success");
            document.getElementById("startButton").style.display = "block";
            document.getElementById("startButton").style.visibility = "visible";   
            UpdatePlayerAvatar(characterImg);
            HideButtonChoices();
        }
    });   
}



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
         if(bStopDice === 1) {
         sym.stop();
		 }
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         if(bStopDice === 2){
         sym.stop();
		 }
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         if(bStopDice === 3){
         sym.stop();
		 }
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         if(bStopDice === 4){
         	sym.stop();
         }
         // call the destination function for
         // whichever path we're currently on:
          console.log('EA.Calling DestinationFunction');
         DestinationFunction();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         if(bStopDice === 5){
         sym.stop();
		 }
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         if(bStopDice === 6){
         sym.stop();
		 }
      });
      //Edge binding end
      
        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         if(bStopDice === 7){
         sym.stop();
		 }
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         if(bStopDice >= 8) // 8 is our max steps:
         {
         	// show the selection HUD
         	sym.$("hudNextDest").show();
         	sym.stop();	
         	sym.ShowHudForNextChoice();
         }
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         if((bStopDice < 1 ) || (bStopDice === undefined) || (bStopDice === null)){
         	sym.stop();
         }
         
         if(DoesPlayerHaveABike === true)
         {
         	// make sure we show the bike
         	document.getElementById("character").src = characterBike;
            characterImg = characterBike;
         
            // also make sure we are showing the second dice
            ShowSecondDice();
         }
         console.log("EA.FUNCTION AT 0Ms was called");

      });
      //Edge binding end

      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // COMP READY:
          console.log('EA1. Comp is READY!');
         // bStopDice is the var we check against to stop the dice rolling on the correct number.
         bStopDice = -1;
         // create an array holding all the dice labels i've created:
         ////var diceFacePos = new Array("one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve");
         // this holds the frame dice 1 stops at:
         ////var diceStopsAt1;
         // and this holds the frame dice 2 stops at, visible or not:
         ////var diceStopsAt2;
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
         		sym.getSymbol("mcPopup").$("mcGreen").hide();
         		sym.getSymbol("mcPopup").$("mcRed").show();
         		// then play
         		break;
         
         		case "green" :
         		// hide the red div
         		sym.getSymbol("mcPopup").$("mcRed").hide();
         		sym.getSymbol("mcPopup").$("mcGreen").show();
         		break;
         
         		default:
         		alert('problem showing cards');
         		break;
         	}
         
         	//console.log('sym.showPopup from Edge compready');
         	sym.$("mcPopup").show(); 
         	sym.getSymbol("mcPopup").play();
         };
         
         sym.ShowHudForNextChoice = function()
         {
         	console.log('EA2. sym.ShowHudForNextChoice() from Edge compready');
         	sym.$("hudNextDest").show();
         	sym.getSymbol("hudNextDest").play(0);
         };
         
         sym.HideHudAfterSelection = function()
         {
         	console.log('EA3. sym.HideHudAfterSelection from Edge compready');
         	sym.getSymbol("hudNextDest").play(300);
         };
         
         sym.ShowMarket = function()
         {
         	console.log('EA4. ShowMarket from Edge compready');
         	sym.$("hudMarket").show(); 
         };
         
         sym.HideMarket = function()
         {
         	console.log('EA5. HideMarket from Edge compready');
         	sym.$("hudMarket").hide(); 
         };
         
         UpdatePlayerStageName = function(nom)
         {
         	console.log('EA6. UpdatePlayerStageName from Edge compready');
         	// this is the big version
         	sym.$("txtUsername").html(nom);	
         	// and the name/status at the very bottom too:
         	sym.getSymbol("mcHUD").$("tPlayerName").html(nom);
         
         	// update obit text too
         	sym.getSymbol("obit").$("txtObit").html(nom + " died. RIP.");
         };
         
         UpdatePlayerAvatar = function(avtr)
         {
         	console.log('EA7.UpdatePlayerAvatar; called from EDGE:' + avtr);
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
         };
         
         UpdateUserMessage = function(msg)
         {
             console.log('EA8. UpdateUserMessage');
         	sym.getSymbol("mcUserMessage").$("txtScoreMessage").html("");
         	sym.getSymbol("mcUserMessage").stop(0);
         	sym.getSymbol("mcUserMessage").$("txtScoreMessage").html(msg);
         	sym.getSymbol("mcUserMessage").play(0);
         };
         
         sym.SetNewTimelineStopPosition = function(val)
         {
         	console.log('EA9.SetNewTimelineStopPosition');
         	bStopDice = val;
         };
         
         sym.HideAllBackgrounds = function()
         {
         	console.log("EA10. HIDING ALL BACKGROUNDS");
         	sym.$("divJob").hide();
         	sym.$("divMedical").hide();
         	sym.$("divMarket").hide();
         	sym.$("divToilet").hide();
         	sym.$("divWater").hide();
         	sym.$("divSchool").hide();
         	sym.$("divFarm").hide();
         };
         
         sym.ShowNewBackground = function(whichbg)
         {
             console.log('EA11. ShowNewBackground');
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
         
         	if(_nextBg !== undefined){
         		sym.$(_nextBg).show();
         	}	
         };
         
         // figure out what numbers to show based on what they rolled
         sym.ShowDiceBasedOnGlensValue = function( dice1, dice2, bPlayerHasBike )
         {
         console.log("EA12.ShowDiceBasedOnGlensValue() - DICE 1 IS " + dice1 + ", DICE 2 IS " + dice2 + ", AND bPlayerHasBike IS " + bPlayerHasBike);
         	var _dice1 = dice1;
         	var _dice2 = dice2;
         
         	var diceTotal = _dice1 + _dice2;
         	console.log("USER ROLLED: " + diceTotal);
         	var _diceStopsAt1 = "zero"; // zero is hidden
         	var _diceStopsAt2 = "zero";
         
         	/*
         	if we have a bike we need to show a second dice for these values
         	2,3,4,5,6,7,8,9,10,11,12
         
         	if not we need to show one dice for these values
         	1,2,3,4,5,6
         	*/	
         
         	if(bPlayerHasBike === true)
         	{
         	console.log("EA13. EDGE THINKS PLAYER HAS BIKE RIGHT NOW");
         		switch(diceTotal){
         			case 2 :
         			_diceStopsAt1 = "one";
         			_diceStopsAt2 = "one";
         			break;
         
         			case 3 :
         			_diceStopsAt1 = "two";
         			_diceStopsAt2 = "one";
         			break;
         
         			case 4 :
         			_diceStopsAt1 = "two";
         			_diceStopsAt2 = "two";
         			break;
         
         			case 5 :
         			_diceStopsAt1 = "two";
         			_diceStopsAt2 = "three";
         			break;
         
         			case 6 :
         			_diceStopsAt1 = "three";
         			_diceStopsAt2 = "three";
         			break;
         
         			case 7 :
         			_diceStopsAt1 = "four";
         			_diceStopsAt2 = "three";
         			break;
         
         			case 8 :
         			_diceStopsAt1 = "three";
         			_diceStopsAt2 = "five";
         			break;
         
         			case 9 :
         			_diceStopsAt1 = "four";
         			_diceStopsAt2 = "five";
         			break;
         
         			case 10 :
         			_diceStopsAt1 = "six";
         			_diceStopsAt2 = "four";
         			break;
         
         			case 11 :
         			_diceStopsAt1 = "five";
         			_diceStopsAt2 = "six";
         			break;
         
         			case 12 :
         			_diceStopsAt1 = "six";
         			_diceStopsAt2 = "six";
         			break;
         
                    default :
                    console.log("BAD SWITCH IN EA.ShowDiceBasedOnGlensValue");
                    break;
         		}
         	} else {
         	// else player has no bike, only one dice used:
         		HideSecondDice();
         		console.log("EA14. EDGE THINKS PLAYER HAS NO BIKE RIGHT NOW");
         
         		switch(diceTotal){
         		case 1 :
         		_diceStopsAt1 = "one";
         		break;
         
         		case 2 :
         		_diceStopsAt1 = "two";
         		break;
         
         		case 3 :
         		_diceStopsAt1 = "three";
         		break;
         
         		case 4 :
         		_diceStopsAt1 = "four";
         		break;
         
         		case 5 :
         		_diceStopsAt1 = "five";
         		break;
         
         		case 6 :
         		_diceStopsAt1 = "six";
         		break;
         
         		}
         	}
         	sym.setVariable("diceStopsAt1", _diceStopsAt1);
         	sym.setVariable("diceStopsAt2", _diceStopsAt2); 
         };
         
         HideSecondDice = function() // not a sym.function because it gets called locally in this file
         {
         	console.log("EA15.SHOULD BE HIDING 2ND DICE RIGHT NOW");
         	sym.getSymbol("dicePair").$("dice_symbol_2").hide();
         	sym.getSymbol("dicePair").$("shadow2").hide();
         };
         // same as above:
         ShowSecondDice = function()
         {
         	console.log("EA16. SHOW SECOND DICE");
         	sym.getSymbol("dicePair").$("dice_symbol_2").show();
         	sym.getSymbol("dicePair").$("shadow2").show();
         };
         
         sym.StopDice = function()
         {
         	console.log("EA17. sym.stopDice called");
         	sym.getSymbol("dicePair").getSymbol("dice_symbol_1").stop(0);
         	sym.getSymbol("dicePair").getSymbol("dice_symbol_2").stop(0);
         	sym.getSymbol("dicePair").stop(0);
         };
         
         sym.StartDice = function()
         {
             console.log('EA18. DiceStarted');
         	sym.getSymbol("dicePair").getSymbol("dice_symbol_1").play(0);
         	sym.getSymbol("dicePair").getSymbol("dice_symbol_2").play(0);
         	sym.getSymbol("dicePair").play(0);
         };
         
         sym.FlashDiceButton = function()
         {
         	console.log("EA19. FLASH DICE BUTTON #####################");
         	sym.getSymbol("mcHUD").$("buttonflash").show();
         	sym.getSymbol("mcHUD").getSymbol("buttonflash").play();
         };
         
         sym.StopFlashDiceButton = function()
         {
             console.log('EA20. StopFlashDiceButton');
         	sym.getSymbol("mcHUD").$("buttonflash").hide();
         };
         
         sym.ShowDiceButtons = function()
         {
             console.log('EA21. ShowDiceButtons');
         	sym.getSymbol("mcHUD").$("rectButton").show();
         	sym.$("clicker").show();
         };
         
         sym.HideDiceButtons = function()
         {
            console.log('EA22. HideDiceButtons');
         	sym.getSymbol("mcHUD").$("rectButton").hide();	
         	sym.$("clicker").hide();
         };
         
         sym.HideAllBikes = function()
         {
             console.log('EA23. HideAllBikes');
         	// and SHOW the avatar
         	sym.$("charJob").show();
         	sym.$("charMed").show();
         	sym.$("charMarket").show();
         	sym.$("charToilet").show();
         	sym.$("charWater").show();
         	sym.$("charSchool").show();
         	sym.$("charFarm").show();
         };
         
         sym.ShowAllBikes = function()
         {
             console.log('EA24. ShowAllBikes');
         	// now that we're showing Bike Avatar we need 
         	// to hide the old avatar
         	sym.$("charJob").hide();
         	sym.$("charMed").hide();
         	sym.$("charMarket").hide();
         	sym.$("charToilet").hide();
         	sym.$("charWater").hide();
         	sym.$("charSchool").hide();
         	sym.$("charFarm").hide();
         };
         
         sym.ShowObituary = function(nom, obit)
         {
             console.log('EA25. ShowObit');
         	sym.getSymbol("obit").$("txtNom").html(nom);
         	sym.getSymbol("obit").$("txtObit").html(obit);
         
         	// now unhide it and play the animation:
         	sym.$("obit").show();
         	sym.getSymbol("obit").play(1);
         };
         
         sym.ShowWinMessage = function(nom, winmessage)
         {
             console.log('EA26. ShowWinMessage');
         	sym.getSymbol("WinMessage").$("txtNom").html(nom);
         	sym.getSymbol("WinMessage").$("txtWinMessage").html(winmessage);
         
         	// now unhide it and play the animation:
         	sym.$("WinMessage").show();
         	sym.getSymbol("WinMessage").play(1);
         };
         
         sym.DisableDestination = function(dest)
         {
         console.log('EA27. DisableDestinations');
         	switch(dest){
         	case "job" : 
         	sym.getSymbol("hudNextDest").$("btnJob").hide();
         	break;
         
         	case "medical" : 
         	sym.getSymbol("hudNextDest").$("btnHospital").hide();
         	break;
         
         	case "store" : 
         	sym.getSymbol("hudNextDest").$("btnMarket").hide();
         	break;
         
         	case "toilet" : 
         	sym.getSymbol("hudNextDest").$("btnToilet").hide();
         	break;
         
         	case "school" : 
         	sym.getSymbol("hudNextDest").$("btnSchool").hide();
         	break;
         
         	case "farm" : 
         	sym.getSymbol("hudNextDest").$("btnFarm").hide();
         	break;
         
         	case "water" : 
         	sym.getSymbol("hudNextDest").$("btnWater").hide();
         	break;
         
         	default:
         	console.log("problem in DisableDestination (edge)");
         	break;
         	}
         
         };
         
         sym.EnableDestination = function(dest)
         {
             console.log('EA28. EnableDestinations');
         	switch(dest){
         	case "job" : 
         	sym.getSymbol("hudNextDest").$("btnJob").show();
         	break;
         
         	case "medical" : 
         	sym.getSymbol("hudNextDest").$("btnHospital").show();
         	break;
         
         	case "store" : 
         	sym.getSymbol("hudNextDest").$("btnMarket").show();
         	break;
         
         	case "toilet" : 
         	sym.getSymbol("hudNextDest").$("btnToilet").show();
         	break;
         
         	case "school" : 
         	sym.getSymbol("hudNextDest").$("btnSchool").show();
         	break;
         
         	case "farm" : 
         	sym.getSymbol("hudNextDest").$("btnFarm").show();
         	break;
         
         	case "water" : 
         	sym.getSymbol("hudNextDest").$("btnWater").show();
         	break;
         
         	default:
         	Debug.Log("problem in EnableDestination (edge)");
         	break;
         
         	}
         };
         
         InvUpdateInventory = function(inventoryTotals)
         {
             console.log('EA29 . InvUpdateInventory');
         	sym.getSymbol("InventoryItems").$("InventoryTotals").html(inventoryTotals);
         };
         
         function InitGame()
         {
         console.log("EA.666.INitGame");
         // don't let the dice roll yet:
         sym.StopDice();
         
         // hide all the backgrounds until the user chooses a destination:
         sym.HideAllBackgrounds();
         // hide the dice button so it can't be clicked
         sym.HideDiceButtons();
         }
         
         InitGame();
        console.log("THIS FAR?");
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
      
      Symbol.bindElementAction(compId, symbolName, "${btnTips}", "mouseover", function(sym, e) {
         sym.getSymbol("btnTips").stop("over");
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${btnTips}", "mouseout", function(sym, e) {
         sym.getSymbol("btnTips").stop("out");
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${btnTips}", "click", function(sym, e) {
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
      
      Symbol.bindElementAction(compId, symbolName, "${btnInventory}", "click", function(sym, e) {
         sym.getSymbol("InventoryItems").play(1);
         sym.$("InventoryItems").show();
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${btnInventory}", "mouseover", function(sym, e) {
         sym.getSymbol("btnInventory").play("over");
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${btnInventory}", "mouseout", function(sym, e) {
         sym.getSymbol("btnInventory").play("out");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio-button2}", "click", function(sym, e) {
         

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
         sym.getComposition().getStage().$("challenge01")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${SCRIM}", "click", function(sym, e) {
         return;

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
        
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${simpleButton2}", "click", function(sym, e) {
         sym.getComposition().getStage().$("challenge01")[0].pause();
         sym.getSymbolElement().hide();

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
         var confirmPurchase = confirm("Buy " + stuffBuy + " for $1?");
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
         var confirmPurchase = confirm("Buy " + stuffBuy + " for $1?");
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
         var confirmPurchase = confirm("Buy " + stuffBuy + " for $2?");
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
         var confirmPurchase = confirm("Buy " + stuffBuy + " for $2?");
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
         var confirmPurchase = confirm("Buy " + stuffBuy + " for $3?");
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
         var confirmPurchase = confirm("Buy " + stuffBuy + " for $20?");
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
         var confirmPurchase = confirm("Buy " + stuffBuy + " for $100?");
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
         var confirmPurchase = confirm("Buy " + stuffBuy + " for $20?");
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
         sym.getSymbol("btnWater").play("out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnWater}", "click", function(sym, e) {
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

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
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
         
         if(bStopDice === 1){
         	sym.stop();
         }
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 222, function(sym, e) {
         if(bStopDice === 2){
         	sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 385, function(sym, e) {
         if(bStopDice === 3){
         	sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 632, function(sym, e) {
         if(bStopDice === 4){
         	sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 858, function(sym, e) {
         if(bStopDice === 5){
         	sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 999, function(sym, e) {
         if(bStopDice === 6){
         	sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1053, function(sym, e) {
         // stop the dice from going on and on if there's no current number, i.e
         // we finished the path:
         if(bStopDice === 0){
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
         console.log('stopping dice 1 at ' + sym.getParentSymbol().getVariable("diceStopsAt1"));
         console.log('stopping dice 2 at ' + sym.getParentSymbol().getVariable("diceStopsAt2"));
         
         sym.stop();
         var _stopOn1 = sym.getParentSymbol().getVariable("diceStopsAt1");
         var _stopOn2 = sym.getParentSymbol().getVariable("diceStopsAt2");
         
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8, function(sym, e) {
         // insert code here
         // Jump to a playback time (in seconds) 
         sym.$("dice")[0].currentTime = 0;
         sym.$("dice")[0].play();
         
         

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

   //=========================================================
   
   //Edge symbol: 'InventoryItems'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btnMedicine}", "click", function(sym, e) {
         InvBuyMedicine();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnPlumbing}", "click", function(sym, e) {
         InvBuyPlumbing();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnBike}", "click", function(sym, e) {
         InvBuyBike();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnFilter}", "click", function(sym, e) {
         InvBuyFilter();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnKit}", "click", function(sym, e) {
         InvBuyKit();
         useInventory("kit");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnFood}", "click", function(sym, e) {
         InvBuyFood();
         useInventory("food");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnBucket}", "click", function(sym, e) {
         InvBuyBucket();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnTablet}", "click", function(sym, e) {
         InvBuyTablet();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnSoap}", "click", function(sym, e) {
         InvBuySoap();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnCloseInventory}", "click", function(sym, e) {
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("InventoryItems");
   //Edge symbol end:'InventoryItems'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'rountBtn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rountBtn_1");
   //Edge symbol end:'rountBtn_1'

   //=========================================================
   
   //Edge symbol: 'WinMessage'
   (function(symbolName) {   
   
   })("WinMessage");
   //Edge symbol end:'WinMessage'

   //=========================================================
   
   //Edge symbol: 'audio-button'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();
         
         // Play an audio track 
         sym.$("background-music")[0].play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 126, function(sym, e) {
         // insert code here
         sym.stop();
         
         // Pause an audio track 
         sym.$("background-music")[0].pause();     

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

   })("audio-button");
   //Edge symbol end:'audio-button'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-581531069");

InitGame();