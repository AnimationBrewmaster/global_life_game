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

var bCountryHasBeenSelected = false;
var bNameHasBeenEntered = false;
var my_stage;
var startingGameTip;
var arrGameTips = [];
var getDifficulty;
var _username;
var bUserInputDisabled = false; // used to disable user changing input after game start

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

var currentPathFunctionHolder; //used to delay the main game functions (getjob, gettoilet) until the user rolls.

function InitGame() {
    THE_GAME = AdobeEdge.getComposition('EDGE-581531069').getStage();
    // set the focus on the user name input:    
    document.getElementById("user_name").focus();
}

function SetChosenPath(which_path) {
    //var selectedPathEdgeFile; // getMedical, getJob, getStore, getToilet, getfood, getSchool, getWater

    switch (which_path) {
        case "medical":
            pathDescription = "you should get some medical attention.";
            break;
        case "job":
            pathDescription = "to go to work.";
            break;
        case "store":
            pathDescription = "to buy something at the market.";
            break;
        case "toilet":
            pathDescription = "you had better use a bathroom.";
            break;
        case "farm":
            pathDescription = "you should grab some food from the farm.";
            break;
        case "school":
            pathDescription = "to go to school and improve your education.";
            break;
        case "water":
            pathDescription = "you could use some clean, cool water.";
            break;
        default:
            pathDescription = "invalid path selected. see line 104-ish of 'main.js'";
            break;
    }
    // this is where i'll update the field on stage for now.
    UpdateUserMessage("You've decided " + pathDescription + ". " + getPositiveWord() + "!");
    UpdateEdgeStageDestinationTextField(which_path);
    // hide the starting instructions:
    HideStartingInstructions();

    // and show the correct background.    
    THE_GAME.getComposition().getStage().ShowNewBackground(which_path);
    FlashTheDice();
}


// returns player name from user prompt
function getPlayerName() {
    var inputName = prompt("Enter your Name:", "Honcho");
    return inputName;
}


function getPositiveWord() {
    var arrPosWords = new Array("Nice", "Sweet", "Great", "Awesome", "Excellent", "Wonderful", "Gnarly", "Dope", "Terrific", "Wicked","Shiny");
    var randNum = Math.floor(Math.random() * arrPosWords.length);
    return arrPosWords[randNum];
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
            break;
        case "b":
            player1.hp = 20;
            player1.wp = 20;
            player1.ep = 10;
            player1.gb = 12;
            break;
        case "c":
            player1.hp = 20;
            player1.wp = 20;
            player1.ep = 7;
            player1.gb = 7;
            break;
        case "d":
            player1.hp = 15;
            player1.wp = 15;
            player1.ep = 3;
            player1.gb = 2;
            break;

        default:
            player1.hp = 30;
            player1.wp = 30;
            player1.ep = 14;
            player1.gb = 25;
            break;
    }
    // MANUALLY UPDATING:
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

// hides html placed destination buttons
function hideGlensButtons() {
    document.getElementById("glens_nav").style.visibility = "hidden";
}

// returns html placed button to initial state
function showGlensButtons() {
    document.getElementById("glens_nav").style.visibility = "visible";
}

// ------- gameplay functions -------

// update the screen displayed game stats
function updateStats() {

    // pass to Danny's side:
    UpdateHUD(player1.hp, player1.wp, player1.gb, player1.ep);
}

// actions that take place when food destination is selected
function getFood() {
   // SetChosenPath("farm");
    takeTurn();
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
    takeTurn();
}

// actions that take place when water destination is selected

function getwater() {
   // SetChosenPath("water");
    takeTurn();
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
    takeTurn();
}

// actions that take place when toilet destination is selected
function getToilet() {
   // SetChosenPath("toilet");
    takeTurn();
    alertIt("You have arrived at the toilet.\nGet 3 Health Points for free\n\nHaving a way to properly dispose of watse greatly reduces your chance of getting sick.\nA basic defintion for sanitation is a covered hole in the ground.\nNearly one third of the planet is without sanitation.");
    player1.hp += 3;
    updateStats();
    takeTurn();
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
        // TODO: create feedback messages that remind the player getting 
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
            UpdateUserMessage("You worked hard today and earned 3 Global Bucks. The freaking burro even earned 4. Go back to school.");
        } else if (player1.ep > 4) {
            player1.gb += 2;
            UpdateUserMessage("You worked hard today and earned 2 Global Bucks. That must be frustrating. Need an education?");
        } else {
            player1.gb += 1;
            UpdateUserMessage("You worked hard today and earned 1 Global Buck at a menial job requiring no education. It was a smelly job. Please step back a few feet, downwind.");
        }
        updateStats();
    }
    takeTurn();

}

// actions that take place when medical destination is selected
function getMedical() {
    //SetChosenPath("medical");
    takeTurn();
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
            alertIt("You are very sick but don't have enough money for the cure.");
        }
    } else {
        if (player1.gb > 0) {
            buyMedicine();
        } else {
            UpdateUserMessage("Unfortunately you have no money to buy medicine.");
        }
    }
    takeTurn();
}

// get and check user input for buying medicine and then update player stats
function buyMedicine() {

    var medicineBuy = prompt("For every Global Buck you spend on medicine you get 2 Health Points.\nHow many Global Bucks do you want to spend on medicine? (Maximum 5 Global Bucks)", Math.round(Math.random() * 4) + 1);
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
                break;
            case 2:
                impactStats(4, 0, 0, -2);
                break;
            case 3:
                impactStats(6, 0, 0, -3);
                updateStats();
                break;
            case 4:
                impactStats(8, 0, 0, -4);
                updateStats();
                break;
            case 5:
                impactStats(10, 0, 0, -5);
                updateStats();
                break;
            default:
                UpdateUserMessage("Bad input, please try again");
                break;
        }
    }
    UpdateUserMessage("You spent " + medicineBuy + " Global Bucks and gained " + 2 * medicineBuy + " Health Points.");

}

// actions that take place when school destination is selected
function getSchool() {
   // SetChosenPath("school");
    takeTurn();
    if (player1.gb <= 0) {
        message = "Unfortunately you have no money to buy an education.";
    } else {
        buySchool();
    }
    takeTurn();
}

// gets and checks user input for schooling spending and updates player stats
function buySchool() {
    var schoolBuy = prompt("For every Global Buck you spend on schooling you get 2 Education Points.\nHow many Global Bucks do you want to spend on Education?", Math.round(Math.random() * 5));
    var bucksSpent = parseInt(schoolBuy);
    if (bucksSpent == NaN) {
        UpdateUserMessage("Bad input, please try again");
        buySchool();
    } else if (bucksSpent > player1.gb) {
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
    takeTurn();
    if (player1.gb <= 0) {
        message = "Unfortunately you have no money to buy anything at the Market.";
        UpdateUserMessage(message);
    } else {
        OpenMarketHud();
    }
    takeTurn();
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
        
        // TODO: get it to reopen the window? will this every get called empty? - set stuffBuy to "" when transaction rejected to avoid infinite recursion loop
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
            spent = 3;
            itemMessage = "food message";
            if (checkout("food", spent, itemMessage)) {
                player1.food = true;
                updateStats();
            } else {
                rejectTransaction();
            }
            break;

        case "kit":
            spent = 4;
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
}

// gets user prompt on what they want to buy and adds to inventory if the have enough money
// TODO - better way to do this would be to have store inventory with item, message, and value so can aout check with a single expression
/* moved to buyNewStuff()
function buyStuff() {
    var spent = 0;
    var itemMessage = "";
    var stuffBuy = prompt("Welcome to the store, you have " + player1.gb + " Global Bucks\nWhat would you like to buy?\nbar of 'soap'= $1\nwater purification 'tablet' = $1\n'bucket' for carrying water = $2\n'food' = $3\nfirst aid 'kit' = $4\nbiosand 'filter' = $20\n'bike' = $20\n'plumbing' = $100\n'nothing' = $0", "soap, tablet, bucket, food. kit, filter, bike, plumbing, nothing");
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
            spent = 3;
            itemMessage = "food message";
            if (checkout("food", spent, itemMessage)) {
                player1.food = true;
                updateStats();
            } else {
                rejectTransaction();
            }
            break;

        case "kit":
            spent = 4;
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
            alertIt("You bought nothing and spent 0 Global Bucks.\n" + itemMessage);
            break;

        default:
            alertIt("Bad input, please try again");
            buyNewStuff();
            break;
    }
}

*/

// checks to see if you have money for transaction and then completes transaction, displays purchse confirmation message
function checkout(item, value, message) {
    if (player1.gb < value) {
        console.log("checkout false");
        return false;
    } else {
        console.log("checkout true");
        player1.gb -= value;
        UpdateUserMessage("You just bought " + item + " for " + value + " Global Bucks.\n" + message);
        return true;
    }
}

// displays message when you don;t have enough money, sends you back to the store
function rejectTransaction() {
    UpdateUserMessage("You don't have enough money for that, please try again");
    stuffBuy = ""; // added this variable reset to stop infinte recursion if player tries to buy something they don't have enough money for (keeps passing same item chosen)
    buyNewStuff();
}

// completes the steps for a turn
function takeTurn() {
    // hide the game start stuff, enter name, pick level, etc:
    HideStartingInstructions();
    LetPlayerRoll();
    checkCard(); // cards are live again.
    updateStats();
    displayInventory();
}

function HideStartingInstructions() {
    console.log("HideStartingInstructions()");
    document.getElementById('starting_instructions').style.display = "none";
}

// checks for action cards and chooses the type
function checkCard() {
    var number = Math.floor((Math.random() * 100) + 1);
    console.log("Random Card Numer: " + number);
    if (number < 36) {
        getChallengeCard();

        // DANNY TO: SWAP CARD BACKGROUND TO RED.
    } else if (number < 56) {
        getPartnershipCard();
        // DANNY TO: SWAP CARD BACKGROUND TO GREEN.
    } else {
        UpdateUserMessage("uneventful journey");
    }
}

// randomly selects challenge card
function getChallengeCard() {
    var number = Math.floor(Math.random() * challengeCards.length);
    console.log("challenge Card! - " + number);
   // UpdateUserMessage("Challenge Card!\n\n" + challengeCards[number].title + "\n" + challengeCards[number].text + "\n" + challengeCards[number].impact);
    var _msg = challengeCards[number].title + "\n" + challengeCards[number].text + "\n" + challengeCards[number].impact;
    UpdatePopup("Challenge Card!", _msg, "red");
    impactStats(challengeCards[number].hp, challengeCards[number].wp, challengeCards[number].ep, challengeCards[number].gb);
}

// randomly selects partnership card
function getPartnershipCard() {
    var number = Math.floor(Math.random() * partnershipCards.length);
    console.log("partnership Card! - " + number);
   // UpdateUserMessage("Partnership Card!\n\n" + partnershipCards[number].title + "\n" + partnershipCards[number].text + "\n" + partnershipCards[number].impact);
    var _msg = partnershipCards[number].title + "\n" + partnershipCards[number].text + "\n" + partnershipCards[number].impact;
    UpdatePopup("Partnership Card!", _msg, "green");

    impactStats(partnershipCards[number].hp, partnershipCards[number].wp, partnershipCards[number].ep, partnershipCards[number].gb);
}

// updates player stats from sent agruements
function impactStats(hp, wp, ep, gb) {
    player1.hp += hp;
    player1.wp += wp;
    player1.ep += ep;
    player1.gb += gb;
    checkGameOver();
}

function rolls() {
    // changed to let player control dice roll:
    LetPlayerRoll();
}

function LetPlayerRoll() {
    //    ShowTheDice();
    //alert('Roll Again? (LetPlayerRoll)');
    //ShowTheDice();
    //AdobeEdge.getComposition('EDGE-581531069').getStage().ShowDice();
    // need to show the dice widget.
}

function ShowTheDice() {
    // THE_GAME.ShowDice();
    THE_GAME.getComposition().getStage().ShowDice();
}

function HideTheDice() {
    //   my_stage = AdobeEdge.getComposition('EDGE-581531069').getStage();
    alert('hidthedice');
    //        THE_GAME.HideDice();
    THE_GAME.getComposition().getStage().HideDice();
}




function AlertHolderFunction()
{
    alert("worked");
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

    numberOfRolls += 1;
    console.log("number of rolls = " + numberOfRolls);
    console.log("YOU ROLLED A " + dice_roll);

    // delay doing anything until the dice animation has had time to finish:
    intervalDiceAnimTimeDelay = setInterval(WaitUntilDiceAnimationPlaysBeforeAddingNewDiceTotal, 1000, dice_roll);
}


function WaitUntilDiceAnimationPlaysBeforeAddingNewDiceTotal(dice_roll) {
    clearInterval(intervalDiceAnimTimeDelay);
    checkDiceRoll(dice_roll);
    // pass it to the new dice:

    THE_GAME.ShowDiceBasedOnGlensValue(dice_roll);
}

// rolls 3 dice until total of dice rolls equals 6, then passes number of rolls to travel toll function
function bikeRolls() {
    var number = 0;
    var i = 0;
    while (number <= 6) {
        number += Math.floor((Math.random() * 6) + 1);
        number += Math.floor((Math.random() * 6) + 1);
        number += Math.floor((Math.random() * 6) + 1);
        i++;
    }
    travelToll(i);
}

// determines stats decay based on number of rolls in the turn and player held power ups and/or power downs
// TODO - needs to add power ups and down turn impacts
function travelToll(numberOfTurns) {

    // resetting number of rolls global variable
    numberOfRolls = 0;
    UpdateUserMessage('hello');
    UpdateUserMessage("this trip cost you:\n" + numberOfTurns + " health and water points");

    impactStats(-numberOfTurns, -numberOfTurns, 0, 0);
    updateStats();
    if (sick === true) {
        UpdateUserMessage("You are still sick from eating contaminated food, you lost " + 2 * numberOfTurns + " Health Points.");
        impactStats(-2 * numberOfTurns, 0, 0, 0);
        updateStats();
    }
    if (sickWater === true) {
        UpdateUserMessage("You are still sick from drinking contaminated water, you lost " + 2 * numberOfTurns + " Health Points and Water Points");
        impactStats(-2 * numberOfTurns, -2 * numberOfTurns, 0, 0);
        updateStats();
    }
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
    // TODO do we want to check for the other conditions here? example - player out of money, player reaches set number of turns, is there a "win" scenario?
}

// updates game once player has died
function playerDied() {
    //alert('dead');
    UpdateUserMessage("You'd better sit down for this...");
    updateStats();
    //document.body.style.backgroundColor = "#ff0000";

    gameOver = true;
    
    // pop up the tombstone
   //THE_GAME.ShowGameOver();
    
    THE_GAME.ShowObituary(_username, CalcHowBadlyPlayerDied());

}


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
    
    var factoid = "1,000,000 children die laughing every day. humor. it's just not funny.";
    var _finalMessage = _msgWater + "<br>";
        _finalMessage += _msgHealth + "<br>";
        _finalMessage += _msgEducation + "<br>";
        _finalMessage += _messageBucks + "<br><br>";
        _finalMessage += "<span style='color:#ffee00'>" + factoid + "</span>";
    
    return _finalMessage;
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
            travelToll(numberOfRolls);
            
            
            // call DestinationFunction();
        } else {
            currentPlayerSquare += diceRoll;
            // goto, or at least stop at, currentPlayerSquare * 1000ms.
            msgDiceRoll = "You rolled a " + diceRoll + ". Player is now at position " + currentPlayerSquare + "\nRoll Again?";
            FlashTheDice();
        }

    } else {
        // we are on the second leg returning home:
        if (currentPlayerSquare + diceRoll >= HOME) {
            currentPlayerSquare = HOME;
            // path is complete
            msgDiceRoll = 'You rolled a ' + diceRoll + '! More than enough to arrive back at home! Sweet!';
            travelToll(numberOfRolls);
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
            //LetPlayerRoll();
            FlashTheDice();
        }
    }
    // move player to currentplayersquare:

    UpdatePlayerPositionAlongTimeline(Number(currentPlayerSquare));

    // alert the correct message. i moved the alerts here so they wouldn't stop time and halt player movement:
    if (msgDiceRoll !== "") {
        //        alert("checkDiceRoll: "+msgDiceRoll);
        UpdateUserMessage(msgDiceRoll);
    }
}



function SetHolderFunction(what)
{
    holderFunction = null;
   // alert(what);
 holderFunction = what;   
}

function DestinationFunction()
{
    console.log("DESTINFUNK:");
    //holderFunction( holderParam1, holderParam2, holderParam3 );
    holderFunction();
   // return function(){
    //    holderFunction.apply();   
    //}
}

function HideDice() {
    // alert('hiding dice');
    //  THE_GAME.HideDice();
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

function InitGameTips() {
    arrGameTips[0] = "Getting an education early on improves your chances of success.";
    arrGameTips[1] = "Don't drink water with dead animals in it.";
    arrGameTips[2] = "Don't use your poop bucket as a hat.";
    arrGameTips[3] = "A birthday suit is seldom appropriate for birthday parties.";
    arrGameTips[4] = "Blood is thicker than water. Aquaman's blood is, like, super thick I bet.";
    arrGameTips[5] = "Flies are an excellent source of nutrition for motorcyclists.";
    arrGameTips[6] = "Games are a good way to get good at gaming.";
    arrGameTips[7] = "Losing this game means, technically, you are a loser. Ouch.";
    arrGameTips[8] = "Teamwork means sharing the blame.";
    arrGameTips[9] = "University is okay, but Galaxity is bigger.";
    arrGameTips[10] = "This is not a game about cowboys.";
    arrGameTips[11] = "Shooting aliens in the head is not always effective.";
    arrGameTips[12] = "On earth you would weigh similar values to what you do right now.";
    arrGameTips[13] = "Igpay Atinlay is SO meta.";
    arrGameTips[14] = "An elephant never forgets. To say thank you.";
    arrGameTips[15] = "99% of statistics are completely true.";
    arrGameTips[16] = "The opposite of opposite is favourite.";
    arrGameTips[17] = "It turns out turning my voice into a whine isn't that much of a miracle.";
    arrGameTips[18] = "If you got 99 problems, making lists probably isn't one of them.";
    arrGameTips[19] = "More people die every year than own rabbits.";
    arrGameTips[20] = "Botox keeps zombies fresher longer.";
    arrGameTips[21] = "Last years sausage fest was a total, well, you know.";
    arrGameTips[22] = "Skunks are terrible at long division";

    startingGameTip = Math.floor(Math.random() * arrGameTips.length);
}

function GetRandomGameTip() {
    // every game will start the tips from a 
    // random position to keep things fresh:
    startingGameTip++;
    if (startingGameTip > arrGameTips.length - 1)
        startingGameTip = 0;

    swal("Random Game Tip!", arrGameTips[startingGameTip]);
}



function SetCountrySelected(_countrySelected) {

    if (bNameHasBeenEntered == false) // if they haven't entered their name give them one
    {
        _username = getRandomName();
        bNameHasBeenEntered = true;
        SetNameEntered(_username);
    }
    bCountryHasBeenSelected = true;
    SetInputDifficulty(_countrySelected);

    // update the stats accordingly:
    updateStats();
    AreWeReadyToStart();
}

function SetInputDifficulty(val) {
    getDifficulty(val);
    inputDifficulty = val;
    //  alert("difficulty:"+inputDifficulty);
    var iconsrc = "";
    switch (val) {
        case "a":
            iconsrc = "url('_images/icon_rich.png')";
            break;
        case "b":
            iconsrc = "url('_images/icon_avg.png')";
            break;
        case "c":
            iconsrc = "url('_images/icon_poor.png')";
            break;
        case "d":
            iconsrc = "url('_images/icon_poor.png')";
            break;
    }

    document.getElementById("gameinstructions").style.backgroundImage = iconsrc;
    updateStats();
}

function SetNameEntered(newname) {
    if ((newname == "") || (newname == undefined)) {
        // no name, we need to make one up:
        _username = getRandomName();
    } else {
        // grab the passed value
        _username = newname;
    }
    bNameHasBeenEntered = true;

    //write to the global:
    playername = _username;
    // update the HUD
    //UpdatePlayerName(_username);
    // update stage text:
    UpdatePlayerStageName(_username);
    // update form field:
    document.getElementById("user_name").value = _username;
}

function AreWeReadyToStart() {
    if ((bCountryHasBeenSelected) && (bNameHasBeenEntered)) {
        // show the HUD
        ShowDestinations();
        HideStartingInstructions();
    }
}

function UpdateHUD(life, water, glob, edu) {
    // alert('UpdateHud');
    var _life;
    var _water;
    var _glob;
    var _edu;
    var _playerLifeStatus;

    var _mTweenTime = 0.5;

    // check for player death        
    if (gameOver != true) {
        _playerLifeStatus = " is alive and well-ish.";
    } else {
        _playerLifeStatus = " is super dead. Sorry.";
    }

    if ((life != "") && (life != undefined)) {
        _life = life;
        TweenLite.to(objLife, _mTweenTime, {
            overwrite: "all",
            newScore: _life,
            onUpdate: UpdateLife
        });
    }

    if ((water != "") && (water != undefined)) {
        _water = water;
        TweenLite.to(objWater, _mTweenTime, {
            overwrite: "all",
            newScore: _water,
            onUpdate: UpdateWater
        });
    }

    if ((glob != "") && (glob != undefined)) {
        _glob = glob;
        TweenLite.to(objGlobal, _mTweenTime, {
            overwrite: "all",
            newScore: _glob,
            onUpdate: UpdateGlobal
        });
    }

    if ((edu != "") && (edu != undefined)) {
        _edu = edu;
        TweenLite.to(objEdu, _mTweenTime, {
            overwrite: "all",
            newScore: _edu,
            onUpdate: UpdateEducation
        });
    }
}

function getRandomName() {
    var arrTitles = new Array("", "", "", "Dr.", "Sir", "Mr", "Mrs.", "Ms", "Rev.", "The Hon.");
    var arrFirstNames = new Array("Albert", "Bjork", "Groot", "Winky", "Snuffaluffagus", "Madonna");
    var arrLastNames = new Array("Einstein", "Van Halen", "Rockefeller", "dos Santos", "Khan", "Letterman");
    var rand0 = Math.floor(Math.random() * arrTitles.length);
    var rand1 = Math.floor(Math.random() * arrFirstNames.length);
    var rand2 = Math.floor(Math.random() * arrLastNames.length);
    var nuName = "" + arrTitles[rand0] + " " + arrFirstNames[rand1] + " " + arrLastNames[rand2];
    return nuName;
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