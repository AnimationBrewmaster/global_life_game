/*jshint undef: false, strict: false, latedef: nofunc, maxerr: 300*/
/* @author Glen (THIS IS THE MERGED VERSION V2) */
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
var playerStats;
var message;
var medicineBuy;
var diceRoll; // this holds the current dice roll and is used to figure out how far we move the player
var nextPosition; // this holds where the player needs to move to; we validate against this
// adding some vars that JSHINT is bitching about
var playerDetails;

// debug row color:
var THE_GAME;
var bRowColor = true;
// keep track of where the player icon should be on the board:
var currPlayerPosition = 0;
var currentPlayerSquare = 0;
var numberOfRolls = 0;
var DESTINATION = 4;
var HOME = 8;
var inputDifficulty = "a"; // USA! USA! USA!
var bPlayerIsDead = false;
var sicknessTimer = -1; // variable that can be used to track timed sickness attacks
var freeTravel = 0; // variable to track the number of "free" travel turns left
var bCountryHasBeenSelected = false;
var bNameHasBeenEntered = false;
var my_stage;
var startingGameTip;
var arrGameTips = [];
var getDifficulty;
var countryValue = 3; // numberic value for country used for card selection and serving Country Specific Game Tips (3 means none)
var _username;
var bUserInputDisabled = false; // used to disable user changing input after game start
var additionalInfo = ""; // extra messgae info to concat on dice roll messages
var destBlocked = ""; // destination that will be blocked
var blockedFunction = ""; // destination function that can not be called 
var blockedTurns = 0; // number of turns left that userr is blocked from destination


var _prevLife = 0;
var _prevWater = 0;
var _prevGlob = 0;
var _prevEdu = 0;

// USE A GENERIC HOLDER FUNCTION TO DELAY TRIGGERING THE MAIN PATH
// ACTION UNTIL THE USER REACHES THE DESTINATION:
var holderFunction;
var holderParam1;
var holderParam2;
var holderParam3;

// create our pause intervals so the player can finish moving
// before the game play moves ahead:
var intervalDiceAnimTimeDelay;
var intervalDiceButtonFlashes;


// holds all the game text
var objGameText = {};

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

var selectedPathEdgeFile; // getMedical, getJob, getStore, getToilet, getfood, getSchool, getWater
var chosenPath = ""; // 'medical', 'job', 'store', 'toilet', 'food', 'school' or 'water'
var pathDescription = "";
var selectedCountry;

var arrPotentialCharNamesMale;
var arrPotentialCharNamesFemale;
var characterName = "";

var currentPathFunctionHolder; //used to delay the main game functions (getjob, gettoilet) until the user rolls.

function InitGame() {
    THE_GAME = AdobeEdge.getComposition('EDGE-581531069').getStage();
    createInventory();
}

/*

*/
function SetChosenPath(which_path) {
    //var selectedPathEdgeFile; // getMedical, getJob, getStore, getToilet, getfood, getSchool, getWater

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
        case "c":
            player1.hp = 20;
            player1.wp = 20;
            player1.ep = 7;
            player1.gb = 7;
            countryValue = 1;
            break;
        case "d":
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
    console.log("displaying inventory");
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

// sends player stats to console
function playerDetails() {
    // display information about player
    console.log("Current Stats \n" + this.name + "\nHealth: " + this.hp + "\nWater: " + this.wp + "\nEducation: " + this.ep + "\nGlobal Bucks: " + this.gb);
}


function HideStartingInstructions() {
    console.log("HideStartingInstructions()");
    //document.getElementById('starting_instructions').style.display = "none";
    //document.getElementById('starting_instructions').style.visibility = "hidden";
 
     document.getElementById('Stage').style.position = "absolute";
    document.getElementById('Stage').style.display = "visible";
    document.getElementById('Stage').style.zIndex = 100;
}

// ------- gameplay functions -------

// update the screen displayed game stats
function updateStats() {
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
    
    InvUpdateInventory(inventoryTally);
}


//-------- destination functions ------------

// actions that take place when food destination is selected
function getFood() {
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
   // SetChosenPath("toilet");    
    var roll = Math.floor((Math.random() * 6) + 1);
    freeTravel += roll;
    if (roll == 1) {
        var message = "<br>You also get 1 turn of free Travel";
    }
    else {
        var message = "<br>You also get " + roll + " turns of free Travel";
    } 
    UpdateUserMessage("You have arrived at the toilet.\nGet 2 Health Points for free.\n" + message);
    player1.hp += 2;
    updateStats();
}

// actions that take place when job destination is selected
function getJob() {
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
        } else {
            UpdateUserMessage("You are very sick but don't have enough money for the cure.");
        }
    } else {
        if (player1.gb > 0) {
            buyMedicine();
        } else {
            UpdateUserMessage("Unfortunately you have no money to buy medicine.");
        }
    }
}

// get and check user input for buying medicine and then update player stats
function buyMedicine() {

    var medicineBuy = prompt("For every Global Buck you spend on medicine you get 2 Health Points.\nHow many Global Bucks do you want to spend on medicine? (Maximum 5 Global Bucks)\nOr you can buy medicine to take with you for $10", Math.round(Math.random() * 4) + 1);
    medicineBuy = Number(medicineBuy);

    if (parseInt(medicineBuy) == NaN) {
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
            default:
                UpdateUserMessage("Bad input, please try again");
                break;
        }
    }
    //UpdateUserMessage("You spent " + medicineBuy + " Global Bucks and gained " + 2 * medicineBuy + " Health Points.");

}

// actions that take place when school destination is selected
function getSchool() {
   // SetChosenPath("school");
    if (player1.gb <= 0) {
        message = "Unfortunately you have no money to buy an education.";
    } else {
        buySchool();
    }
}

// gets and checks user input for schooling spending and updates player stats
// TODO - have function call EDGE interface, send possbile values and recieve players input
function buySchool() {
    var schoolBuy = prompt("For every Global Buck you spend on schooling you get 2 Education Points.\nHow many Global Bucks do you want to spend on Education (Maximum 3 Global Bucks)?", Math.round(Math.random() * 3));
    var bucksSpent = parseInt(schoolBuy);
    if (bucksSpent == NaN) {
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
    ShowMarket();
}

function CloseMarketHud() {
    HideMarket();
}

function buyNewStuff() {
    var spent = 0;
    var itemMessage = "";

    // our global called stuffBuy holds anything the user has clicked in the market
    if (stuffBuy === "") {
        UpdateUserMessage('nothing chosen to buy');
        
        // TODO: get it to reopen the window? will this ever get called empty? - set stuffBuy to "" when transaction rejected to avoid infinite recursion loop
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
            } else {
                rejectTransaction();
            }
            break;

        case "bike":
            spent = 20;
            itemMessage = "bike message";
            if (checkout("bike", spent, itemMessage)) {
                player1.bike = true;
                // call the show bike function inside the Adobe Edge doc:
                // THE_GAME.getComposition().getStage().ShowBike();
                THE_GAME.ShowAllBikes();
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
            } else {
                rejectTransaction();
            }
            break;

        case "nothing":
            spent = 0;
            itemMessage = "No bonuses for you.";
            UpdateUserMessage("You bought nothing and spent 0 Global Bucks.\n" + itemMessage);
            break;

        default:
            UpdateUserMessage("Bad input, please try again");
            OpenMarketHud(); // TODO: does not appear to re-open the market - continues on with the game
            break;
    }
    checkPowerUp(stuffBuy); // checks the item to give player the bonus (heal them idf sick, feed them if hungry, etc.)
}

// checks to see if you have money for transaction and then completes transaction, displays purchse confirmation message
function checkout(item, value, message) {
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
    UpdateUserMessage("You don't have enough money for that, please try again");
    stuffBuy = ""; // added this variable reset to stop infinte recursion if player tries to buy something they don't have enough money for (keeps passing same item chosen)
    buyNewStuff();
}

function checkPowerUp(powerUp) {
    // go through the power up list and give them the power
    switch (powerUp) {
        case "plumbing":
            console.log("plumbing power up");
            player1.wp = 100;
            break;
            
        default:
        console.log("nothing");
    }
}

// -------------- card functions ---------------

// checks for action cards and chooses the type
// TODO function checkCard(square) - once we get pop-up to start working
function checkCard() {
    
    var square = currentPlayerSquare;
	//console.log("position arguement sent: " + square);

	// TODO simple version for now, will check vs each destination in future (randomize where they appear?)
	if (square == 2 || square == 7) {
		getChallengeCard();
	}
	else if (square == 5) {
		getPartnershipCard();
	}
	else {
		console.log("empty square");
	}
}

// randomly selects challenge card
function getChallengeCard() {
    var number = Math.floor(Math.random() * challengeCards[countryValue].length);
    var specialMsg = ""; //TEMP TESTING
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
    UpdateHUD(player1.hp, player1.wp, player1.gb, player1.ep); // TODO (Glen) - determine if this MUST be called here or if its called ELSEWHERE
    // pass data to console
    console.log("**********CARD DATA**********");
    console.log(_title);
    console.log(challengeCards[countryValue][number].impact);
    console.log(specialMsg);
    console.log("*****************************");
}

// randomly selects partnership card
function getPartnershipCard() {
    var number = Math.floor(Math.random() * partnershipCards[countryValue].length);
    var specialMsg = ""; //TEMP TESTING
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
    UpdateHUD(player1.hp, player1.wp, player1.gb, player1.ep); // TODO (Glen) - determine if this MUST be called here or if its called ELSEWHERE
    // pass data to console
    console.log("**********CARD DATA**********");
    console.log(_title);
    console.log(challengeCards[countryValue][number].impact);
    console.log(specialMsg);
    console.log("*****************************");
}

// special card function that get agruements from challengeCards.js
function specialCards(fnstring) {
	// one way - makes sense to me
	console.log("activating special case function: " + fnstring);
	switch (fnstring) {
		case "gotSick":
			gotSick();
			break;
			
		case "gainEductionalLevel":
			gainEducationLevel();
			break;
			
		case "loseEducationLevel": 
			loseEducationLevel();
			break;
			
		case "createInventory": 
			createInventory();
			break;
			
		case "gotDiarrhea":
			gotDiarrhea();
			break;	
		
		case "educationBlockAll":
            educationBlock(99);
            break;
			
		case "educationBlock20":
            educationBlock(20);
            break; 
			
        case "educationBlock7":
            educationBlock(7);
            break; 
            
        case "educationBlock5":
            educationBlock(5);
            break;
            
        case "educationBlock3":
            educationBlock(3);
            break;          
            
        case "payEducationLevel":
            payEducationLevel();
            break;  
         
         case "educationSchoolMedicalBlock":
            esmBlock();
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
	sick = true;
	console.log("you got sick!!");
}

function gainEducationLevel() {
	modifyEducationLevel(1);
	console.log("gain some education");
}	

function loseEducationLevel() {
	modifyEducationLevel(-1);
	console.log("lose some education");
}

function payEducationLevel() {
    // need to charge for educational level if they have $6, otherwise block from Education for 5 turns
}

function gotDiarrhea() {
	// TODO - test this (get medicine in 3 turns or lose 6 health points)
	sicknessTimer = 3;
	console.log("you got Diarrhea!");
}

function educationBlock(val) {
    destBlocked = "school";
    blockedFunction = "getSchool";
    blockedTurns = val;
    console.log("blocked from Education for" + val + " turns!");
}

// TODO
function esmBlock() {
    // block education, medical and market for 3 turns
    educationBlock(3);
}

// TODO
function payOrBeat() {
    // lose 2 global bucks, if can't pay, lose 4 health points
}

// TODO
function payOrNoWater() {
    // pay $2 Global Bucks for bottled water until the flooding recedes – if you don’t have $2 Global Bucks, lose 2 health points and 2 water points     
}

// TODO
function bsfBlock() {
    // block school until bsf filter is purchased
}

// TODO - test function more fully
function modifyEducationLevel(direction){
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
    // NOTE TO GLEN: THIS IS GIVING ME A NUMBEROFTURNS IS NOT DEFINED ERROR. - FIXED
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
    else if (sicknessTimer == 1) {
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
    player1.hp += hp;
    player1.wp += wp;
    player1.ep += ep;
    player1.gb += gb;
    checkGameOver();
}

// determines stats decay based on number of rolls in the turn and player held power ups and/or power downs
// TODO - needs to add power ups and down turn impacts
function travelToll(numberOfTurns) {
    // resetting number of rolls global variable
    //numberOfRolls = 0;
    //UpdateUserMessage('hello');
    //UpdateUserMessage("this trip cost you:\n" + numberOfTurns + " health and water points");
    if (freeTravel > 0) {
        freeTravel -= 1;
        if (freeTravel == 0) {
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
}

// TODO (Glen) - Turn into Help Message (when low on health remind them they have options to click)
function checkPowerUps() {
    // some temp functions to make up for loss of inventory control
    if (player1.food && player1.hp < 2) {
        console.log("used food");
        player1.food = false;
        player1.hp += 4;
        updateStats();
        additionalInfo += "<br>You ate some food you were carrying and gained 4 Health Points.";
    }
    if (player1.kit && player1.hp < 2) {
        console.log("used kit");
        player1.kit = false;
        player1.hp += 6;
        updateStats();
        additionalInfo += "<br>You used your first aid kit and gained 6 Health Points.";
    }
    if (player1.plumbing == true) {
        player1.wp = 100;
        updateStats();
    }
}

function checkBlocks() {
    if (blockedTurns > 0) {
        blockedTurns--;
    }
    else {
        destBlocked = "";
        blockedFunction = "";
    }
}

// executes impacts when player uses invetory item and removes item from inventory list
// send argument of the inveotry item being used (only "food" and "kit" are used by player iteraction)
function useInventory(item) {
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

function ShowTheDice() {
    THE_GAME.getComposition().getStage().ShowDice();
}

function HideTheDice() {
    THE_GAME.getComposition().getStage().HideDice();
}

function ExecutePlayerRoll() // called by the dice function.
{   
    // hide the dice so it can't be clicked again:
     THE_GAME.HideDiceButtons();
    var dice_roll = 0;

    if (player1.bike) {
        dice_roll = Math.floor((Math.random() * 6) + 1);
        dice_roll += Math.floor((Math.random() * 6) + 1);
    } else {
        dice_roll = Math.floor((Math.random() * 6) + 1);
    }

    PassDiceRollToEdge(dice_roll);

    // delay doing anything until the dice animation has had time to finish:
    intervalDiceAnimTimeDelay = setInterval(WaitUntilDiceAnimationPlaysBeforeAddingNewDiceTotal, 1000, dice_roll);
}


function WaitUntilDiceAnimationPlaysBeforeAddingNewDiceTotal(dice_roll) {
    clearInterval(intervalDiceAnimTimeDelay);
    checkDiceRoll(dice_roll);
    // pass it to the new dice:
    THE_GAME.ShowDiceBasedOnGlensValue(dice_roll);
}


// checks to see if player has died
function checkGameOver() {
    
    var _gameOver = true;
    console.log("CHECK GAME OVER. player1.hp = " + player1.hp);

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
}

// checks for win condition
function playerWins() {
	//return true;
	if (player1.hp >= 50 && player1.wp >= 50 && player1.ep >= 30 && player1.gb >= 75 && (player1.filter == true || player1.plumbing == true)) {
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
    //alert('dead');
    UpdateUserMessage("You'd better sit down for this...");
    updateStats();

    gameOver = true;
    UpdateHUD();
    
    THE_GAME.ShowObituary(_username, getDeathMessage());

}

function playerWon() {
    //alert('dead');
    console.log("player won");
    UpdateUserMessage("Congratulations! You won!!");
    updateStats();

    gameOver = true;
    UpdateHUD();
    
    // pop up the tombstone
   var winMessage = "Congratulations on achieving a sustainable life! Hopefully you have learned about some of the global issues people face around the world – and even more importantly, this will inspire you to take actions! Please visit the ACTIONS YOU CAN TAKE page to read more about global issues, get ideas for how you can take action, and lesson plans you can use in your school.";
   
   THE_GAME.ShowObituary(_username, winMessage);  

}
/*
function CalcHowBadlyPlayerDied()
{
    var _msgWater = "";
    var _msgHealth = "";
    var _msgEducation = "";
    var _messageBucks = "";
    
    // WATER
    if(player1.wp > 0)
    {
     // had water
        _msgWater = "Died of ailing health, bad luck and poor choices.";
        
    } else {
        // no water    
        _msgWater = "Died horribly of thirst and poor planning.";
    }
    
    // HEALTH
    if(player1.hp > 0)
    {
     // had health
        _msgHealth = "They was just too thirsty for this world.";
        
    } else {
     // no health   
        _msgHealth = "They died in poor health.";
    }
    
    // EDUCATION
    if(player1.ep > 10)
    {
     // had education
        _msgEducation = "They tried to better themselves with book learning.";
        
    } else {
        // no education
        _msgEducation = "They died how they lived, ignorant and uneducated.";
    }
    
    // MONEY:
    if(player1.gb > 10)
    {
     // had money
        _messageBucks = "They were good money managers.";
        
    } else {
        // no money
        _messageBucks = "They were buried anonymously in a paupers grave.";
    }
    
    var _finalMessage = _msgWater + "<br>";
        _finalMessage += _msgHealth + "<br>";
        _finalMessage += _msgEducation + "<br>";
        _finalMessage += _messageBucks + "<br><br>";
    
    return _finalMessage;
}
*/

function getDeathMessage()
{
 var deathMsg = "We are very sorry to say that your life has come to an end. Hopefully you have learned about some of the global issues people face around the world – and even more importantly, this will inspire you to take actions! Please visit the ACTIONS YOU CAN TAKE page to read more about global issues, get ideas for how you can take action, and lesson plans you can use in your school.";  
return deathMsg;
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
    // write it to the global
    diceRoll = _roll;
    THE_GAME.SetNumberDiceShouldStopOn(diceRoll);
}

function FlashTheDice()
{
    // clear the interval if it needs it:
     clearInterval(intervalDiceButtonFlashes);
  //local caller of FlashDice
    THE_GAME.ShowDiceButtons();
    THE_GAME.FlashDiceButton();
}

function checkDiceRoll(diceRoll) {
    
    // see if they're still alive:
    checkGameOver();
    
    if(gameOver){
        return;   
    }
  
    //THE_GAME.HideDiceButton();
    UpdateUserMessage("YOU JUST ROLLED A " + diceRoll);
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
            checkCard(); 
            // checkCard(currentPlayerSquare); - TODO - use once we can sort out why pop-up is not displaying
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
            checkCard(); 
            
            //checkCard(currentPlayerSquare); - TODO - use once we can sort out why pop-up is not displaying
            FlashTheDice();
        }
    }
    // move player to currentplayersquare:
    UpdatePlayerPositionAlongTimeline(Number(currentPlayerSquare));

    // alert the correct message. i moved the alerts here so they wouldn't stop time and halt player movement:
    if (msgDiceRoll !== "") {
        //        alert("checkDiceRoll: "+msgDiceRoll);
        UpdateUserMessage(msgDiceRoll+additionalInfo);
    }
}

function DestinationFunction()
{
    console.log("THIS IS WHERE EDGE CALLS THE DESTINATION FUNCTION, SUCH AS GETJOB()");
    /*
    NOTE TO GLEN: This is the function Edge calls when it hits spot 4, the destination tile.
    */
    holderFunction();
}

function SetHolderFunction(what)
{
    holderFunction = null;
   // alert(what);
 holderFunction = what;   
}

function HideDice() {
    THE_GAME.getComposition().getStage().HideDice();
}

function UpdatePlayerPositionAlongTimeline(num_of_secs) {
    // alert('UpdatePlayerPositionAlongTimeline:' + num_of_secs);
    var _currentTimelineMilliseconds = num_of_secs * 1000;
    // alert("seconds:" + _currentTimelineMilliseconds);
    //THE_GAME.stop(_currentTimelineMilliseconds);
    THE_GAME.getComposition().getStage().SetNewTimelineStopPosition(num_of_secs);
    THE_GAME.play();
}

// moved content to gametips.js
/*
function InitGameTips() {
    arrGameTips[0] = "The first thing you should do is buy a bike from the market. The bike will allow you to travel much faster.";
    arrGameTips[1] = "Education points equals more work, and more work equals more money, and more money equals better opportunities.";
    arrGameTips[2] = "As Country A, the game is much easier than in Country B or C.";
    arrGameTips[3] = "The second thing you should do is buy education. Go back and forth from education to job to make lots of money.";
    arrGameTips[4] = "Once you have reached an Intelligence level of 31 or more, start saving for indoor plumbing.";
    arrGameTips[5] = "Don’t underestimate the importance of education.";
    arrGameTips[6] = "Compared to the others, seeking sanitation is not as important in County A.";
    arrGameTips[7] = "Getting medical help is still important. Buy medicine or soap just in case you get sick.";
    arrGameTips[8] = "If you are running low on water and have enough money, buy a Biosand Filter. This will allow you to get clean water safely.";
    arrGameTips[9] = "Only if you get below 10 health and/or water points should you then go to the farm or river.";
    arrGameTips[10] = "Although you can’t do so in the game, try to donate money and resources to actual people living in developing countries.";
    arrGameTips[11] = "Prioritize getting your food and water levels up.";
    arrGameTips[12] = "Get to the market to buy any essential supplies.";
    arrGameTips[13] = "One you have enough health and water for the next couple of turns, try to get some education points.";
    arrGameTips[14] = "Your survival should be your priority. Prioritize getting health, water, and medicine instead of education or things from the market.";
    arrGameTips[15] = "Purchase a bar of soap and a water purification tablet from the store. These things can save your life.";
    arrGameTips[16] = "Buying a bucket is very useful if you are low on water.";
    arrGameTips[17] = "If you are low on health points and money, you can go to the toilet to get some free health points.";
    arrGameTips[18] = "Once you have sustainable health points and water points, start working on your education. ";
    arrGameTips[19] = "After you make enough money, buying a bike can help you get food and water faster.";
    arrGameTips[20] = "Buying a biosand filter can really help you stay healthy and get lots of clean water.";
    arrGameTips[21] = "Seeing how much help a biosand filter can be, consider how much a biosand filter would help people in real life that need clean water.";
    arrGameTips[22] = "You must always have an eye on your health and water for it can drop quite fast with any waterborne diseases. Especially when you are far away from water or food.";
    arrGameTips[23] = "Buying a cheap water sanitation tablet can save you from sickness.";
    arrGameTips[24] = "An education is less important than proper sanitation, medicine and food.";
    arrGameTips[25] = "Don’t underestimate the crippling power of diseases and parasites.";
    arrGameTips[26] = "A stable job is the gateway to a better quality of life. ";

    startingGameTip = Math.floor(Math.random() * arrGameTips.length);
}
*/

function GetRandomGameTip() {
    // every game will start the tips from a 
    // random position to keep things fresh:
    /*
    startingGameTip++;
    if (startingGameTip > arrGameTips.length - 1)
        startingGameTip = 0;

    swal("Random Game Tip!", arrGameTips[startingGameTip]);
    */
    startingGameTip++;
    if (startingGameTip > arrGameTips[countryValue].length - 1)
        startingGameTip = 0;

    swal("Random Game Tip!", arrGameTips[countryValue][startingGameTip]);
}

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

var characterImg;
var characterBike;

function GetCharacterName(_selectedCountry)
{
    
    console.log("SELECTED COUNTRY IS " + _selectedCountry);
    switch(_selectedCountry)
    {
        case "a" :       
            arrPotentialCharNamesMale = new Array("Arthur_Anderson", "Aaron_Albertson", "Albert_Aduna");
            arrPotentialCharNamesFemale = new Array("Anne Archer", "Anita Anderson", "Allison Arno");
            break;
            
         case "b" :       
            arrPotentialCharNamesMale = new Array("Bob_Butcher", "Bill_Banker", "Ben_Barkowitz");
            arrPotentialCharNamesFemale = new Array("Betty_Blue", "Bjorna_Banksty", "Breanne_Bennett");
            break;    
        
         case "c" :       
            arrPotentialCharNamesMale = new Array("Charlie_Cho", "Chad_Charger", "Champ_Chowdah");
            arrPotentialCharNamesFemale = new Array("Carey_Cash", "Coraline_Collins", "Chevy_Chase");
            break;
            
        default:
            console.log('bad switch');
    }
    
    var randNum = Math.ceil(Math.random() * arrPotentialCharNamesMale.length - 1); // give us a 0, 1 or 2
    var _sex = MakeBoyOrGirl();
    var _ethnix = Math.round(Math.random()); // females start at +2;
    
    switch(_sex)
    {
        case "MALE" :
            characterName = arrPotentialCharNamesMale[randNum];
            characterImg = "images/character_" + _selectedCountry + "_" + _ethnix + ".png"; 
            characterBike = "images/character_" + _selectedCountry + "_" + _ethnix + "_bike.png"; 
            //onsole.log("CHAR NAME: " + characterName);
            break;
                
        case "FEMALE" :
            characterName = arrPotentialCharNamesFemale[randNum];
            characterImg = "images/character_" + _selectedCountry + "_" + Number(_ethnix + 2) + ".png"; 
            characterBike = "images/character_" + _selectedCountry + "_" + Number(_ethnix + 2) + "_bike.png"; 
            break;
    }
    
    console.log("CHAR NAME IS " + characterName + " and randNum was " + randNum);
    console.log("CHAR BIKE IS " + characterBike + " and randNum was " + randNum);
    console.log("CHAR IMAGE IS " + characterImg);
    
    document.getElementById("character").src = characterImg;
   // playername = characterName;
    
    // update the large text at the top of the screen. still hoping to do something cool with this.
    UpdatePlayerStageName(playername);
    // update all the avatars to the current pick (inside EDGE):
    UpdatePlayerAvatar(characterImg,characterBike);
    // also update the text at the very bottom of the HUD that states whether the user is alive or dead:
    UpdatePlayerName(playername.toUpperCase());
    
}


function SetCountrySelected(_countrySelected) {
    
    console.log('SET COUNTRY SELECTED');
    
    // entering new sweetalert to get user name:
    UserName();   
    
    bNameHasBeenEntered = true;    
    bCountryHasBeenSelected = true;
    
    SetInputDifficulty(_countrySelected);
    // update the stats accordingly:
    updateStats();
}

function HideStarterContentAndShowTheGame()
{
     document.getElementById("column1").style.display = "none";
     document.getElementById("column1").style.visibility = "hidden";
     document.getElementById("column2").style.display = "none";
     document.getElementById("column2").style.visibility = "hidden";
    // show third one holding Edge stuff
     document.getElementById("column3").style.display = "block";
     document.getElementById("column3").style.visibility = "visible";
     document.getElementById("Stage").style.display = "block";
     document.getElementById("Stage").style.visibility = "visible";
}

function SetInputDifficulty(val) {
    
    var msgA = "Welcome to easy street. Country A gives you easy access to healthcare, food and plenty of options. Make good choices and life should be a breeze.";
    var msgB = "Be careful. To live in Country B you need to make good choices, have luck on your side and be able to get yourself out of a jam. Medicine and water are your friend. So is a bicycle! Put your mettle to the pedal.";
    var msgC = "You are brave. Life is HARD in Country C. You live at the mercy of warlords and disease, famine and - dear lord, what is that SMELL? Oh yeah, no bathrooms. Only your wits can save you now. Make great choices!";
    
    getDifficulty(val);
    inputDifficulty = val;
    //  alert("difficulty:"+inputDifficulty);
    var bgImage = "";
  //  var charImage = "";
    switch (val) {
        case "a":
            bgImage = "url('images/bgA.jpg')";
            //charImage="url('images/asdf.jpg')";
            _message = msgA;
            break;
        case "b":
            bgImage = "url('images/bgB.jpg')";
          //  charImage="url('images/asdf.jpg')";
             _message = msgB;
            break;
        case "c":
            bgImage = "url('images/bgC.jpg')";
           // charImage="url('images/asdf.jpg')";
             _message = msgC;
            break;
        default:
            bgImage = "url('images/bg0.jpg')";
             _message = "A = EASIER (Developed Nation), B = CHALLENGING (Emerging Nation) , C = DIFFICULT (Developing Nation)";
            break;
    }

    document.getElementById("after").style.backgroundImage = bgImage;
    document.getElementById("choice_description").textContent = _message;

    updateStats();
}

function AreWeReadyToStart() {
    if ((bCountryHasBeenSelected) && (bNameHasBeenEntered)) {
        // show the HUD
        ShowDestinations();
        HideStartingInstructions();
        HideStarterContentAndShowTheGame();
    }
    
   
//EnableDestination("store");
//job|medical|store|toilet|school|farm|water
}

function UpdateHUD(life, water, glob, edu) {
    // alert('UpdateHud');
    console.log("UPDATEHUD:"+life + " " + glob + " " + water + " " + edu);
    var _life;
    var _water;
    var _glob;
    var _edu;
    var _playerLifeStatus;

    var _mTweenTime = 1;

    // check for player death        
    if (gameOver != true) {
        _playerLifeStatus = " is alive and well-ish.";
    } else {
        _playerLifeStatus = " is super dead. Sorry.";
    }

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

function CallAvatarPositioningFunction() {
    clearInterval(_varSetInterval);
    THE_GAME.TrackAvatar();
}

function UpdateLife() {
THE_GAME.getSymbol("mcHUD").$("labelLife").html(Math.round(objLife.newScore));
}

function UpdateWater() {    THE_GAME.getSymbol("mcHUD").$("labelWater").html(Math.round(objWater.newScore));
}

function UpdateGlobal() {
THE_GAME.getSymbol("mcHUD").$("labelGlobal").html(Math.round(objGlobal.newScore));
}

function UpdateEducation() {
    THE_GAME.getSymbol("mcHUD").$("labelEducation").html(Math.round(objEdu.newScore));
}

function UpdatePlayerName(playername) {
    // alert('UpdateHud');
    var _playerName = playername;
    // output it:
    THE_GAME.getSymbol("mcHUD").$("tPlayerName").html(_playerName);
}

function UpdateEdgeStageDestinationTextField(destination) {
    // output it:
    THE_GAME.$("txtDestination").html(destination);

}

function UpdatePopup(head_txt, body_txt, poptype) {
    THE_GAME.getSymbol("mcPopup").$("txtHeading").html(head_txt);
    THE_GAME.getSymbol("mcPopup").$("txtBody").html(body_txt);
    THE_GAME.getComposition().getStage().ShowPopup(poptype);
}

function ShowDestinations() {
    THE_GAME.getComposition().getStage().ShowHudForNextChoice();
   // THE_GAME.DisableDestination("medical");

}

function HideDestinations() {

    THE_GAME.getComposition().getStage().HideHudAfterSelection();
}

function ShowMarket() {
    THE_GAME.getComposition().getStage().HideHudAfterSelection();
    THE_GAME.$("hudMarket").show(); 
}

function HideMarket() {
    //THE_GAME.getComposition().getStage().HideHudAfterSelection();
     THE_GAME.$("hudMarket").hide();
}

var usernameInput;
function UserName()
{
    if(!usernameInput)
        usernameInput = "Luke Warmwater";
var input_name =  swal({   
    title: "WELCOME!",   
    text: "YOUR NAME:",   
    type: "input",   
    showCancelButton: true,   
    closeOnConfirm: false,   
    animation: "slide-from-bottom",   
    inputPlaceholder: "Luke Warmwater" }, 
    function(inputValue){   
        if (inputValue === false) 
            return false;      
    
    if (inputValue === "") 
    {     
        swal.showInputError("YOUR NAME *PLEASE*:");     
        return false;   
    }      
    UpdatePlayerName(inputValue.toUpperCase());
    swal("Welcome to the Global Life Game, " + inputValue, "Make good choices!", "success"); });  
    
    // hide first two columns:
    document.getElementById("startButton").style.display = "block";
     document.getElementById("startButton").style.visibility = "visible";
    
}


