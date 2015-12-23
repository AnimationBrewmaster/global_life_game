/**
 * @author Glen
 */

// create 2D array for country type challenge cards
var challengeCards = new Array();
challengeCards[0] = new Array();
challengeCards[1] = new Array();
challengeCards[2] = new Array();


//create cards

//card 1
var challengeCard1A = new Object();
challengeCard1A.title = "Wage / Employment";
challengeCard1A.text = "You get a job working as a waiter/waitress on a cruise ship. Unfortunately, the tips you earned all go to the owner of the cruise ship.";
challengeCard1A.impact = "Lose 1 Global Buck, 1 health point and 1 water point.";
challengeCard1A.hp = -1;
challengeCard1A.wp = -1;
challengeCard1A.ep = 0;
challengeCard1A.gb = -1;
challengeCards[0][0] = challengeCard1A;

var challengeCard1B = new Object();
challengeCard1B.title = "Wage / Employment";
challengeCard1B.text = "You get a job working at an orange orchard. Unfortunately, all the oranges you produce are sold to grocery stores in wealthier countries. There are no longer any oranges for your own community.";
challengeCard1B.impact = "Add 1 Global Buck but lose 2 health points.";
challengeCard1B.hp = -2;
challengeCard1B.wp = 0;
challengeCard1B.ep = 0;
challengeCard1B.gb = 1;
challengeCards[1][0] = challengeCard1B;

var challengeCard1C = new Object();
challengeCard1C.title = "Wage / Employment";
challengeCard1C.text = "You get a job on a fishing boat. Unfortunately, the fish you catch are sold to feed the pets of people in wealthy countries. Overfishing has depleted your fish population, this leaves little food for your community. ";
challengeCard1C.impact = "You earn 5 Global Bucks but have to give 2 back to developed nations and 2 to the bank, keeping only 1. Also lose 1 health point.";
challengeCard1C.hp = -1;
challengeCard1C.wp = 0;
challengeCard1C.ep = 0;
challengeCard1C.gb = 1;
challengeCards[2][0] = challengeCard1C;

//card 2
var challengeCard2A = new Object();
challengeCard2A.title = "Food Prices";
challengeCard2A.text = "Food prices are lowered due to worker exploitation in developing countries";
challengeCard2A.impact = "Gain 1 Global Buck but feel bad about it.";
challengeCard2A.hp = 0;
challengeCard2A.wp = 0;
challengeCard2A.ep = 0;
challengeCard2A.gb = 1;
challengeCards[0][1] = challengeCard2A;

var challengeCard2B = new Object();
challengeCard2B.title = "Food Prices";
challengeCard2B.text = "Rainfall has become more unpredictable and this year causing a small drought. Food prices rise due to poor crop production this year.";
challengeCard2B.impact = "Lose 2 Global Bucks.";
challengeCard2B.hp = 0;
challengeCard2B.wp = 0;
challengeCard2B.ep = 0;
challengeCard2B.gb = -2;
challengeCards[1][1] = challengeCard2B;

var challengeCard2C = new Object();
challengeCard2C.title = "Food Prices";
challengeCard2C.text = "In order to make a survivable income, you must convert your family farm to a cash crop which means less food for you and your village.";
challengeCard2C.impact = "Lose 2 health points but gain $1 Global Buck.";
challengeCard2C.hp = -2;
challengeCard2C.wp = 0;
challengeCard2C.ep = 0;
challengeCard2C.gb = 1;
challengeCards[2][1] = challengeCard2C;

//card 3
var challengeCard3A = new Object();
challengeCard3A.title = "Food Availability";
challengeCard3A.text = "Climate change causes several crops you enjoy to no longer be available. This means that similar crops are now in higher demand causing prices to rise.";
challengeCard3A.impact = "Lose 3 Global Bucks.";
challengeCard3A.hp = 0;
challengeCard3A.wp = 0;
challengeCard3A.ep = 0;
challengeCard3A.gb = -3;
challengeCards[0][2] = challengeCard3A;

var challengeCard3B = new Object();
challengeCard3B.title = "Food Availability";
challengeCard3B.text = "Not enough food is is delivered to the market due to drought and crop shortage so you were unable to buy enough food.";
challengeCard3B.impact = "Lose 3 health points.";
challengeCard3B.hp = -3;
challengeCard3B.wp = 0;
challengeCard3B.ep = 0;
challengeCard3B.gb = 0;
challengeCards[1][2] = challengeCard3B;

var challengeCard3C = new Object();
challengeCard3C.title = "Food Availability";
challengeCard3C.text = "There has been a crop shortage due to drought and food is too scarce for everyone in your family to eat.";
challengeCard3C.impact = "You allow your family to eat before you, lose 4 health points and a water point.";
challengeCard3C.hp = -4;
challengeCard3C.wp = -1;
challengeCard3C.ep = 0;
challengeCard3C.gb = 0;
challengeCards[2][2] = challengeCard3C;

//card 4
var challengeCard4A = new Object();
challengeCard4A.title = "Food Quality";
challengeCard4A.text = "You get food poisoning from a local restaurant.";
challengeCard4A.impact = "Lose 3 health points.";
challengeCard4A.hp = -3;
challengeCard4A.wp = 0;
challengeCard4A.ep = 0;
challengeCard4A.gb = 0;
challengeCards[0][3] = challengeCard4A;

var challengeCard4B = new Object();
challengeCard4B.title = "Food Quality";
challengeCard4B.text = "You get food poisoning from poorly cooked food from a street vendor and you cannot go to work.";
challengeCard4B.impact = "Lose 2 health points and 2 Global Bucks.";
challengeCard4B.hp = -2;
challengeCard4B.wp = 0;
challengeCard4B.ep = 0;
challengeCard4B.gb = -2;
challengeCards[1][3] = challengeCard4B;

var challengeCard4C = new Object();
challengeCard4C.title = "Food Quality";
challengeCard4C.text = "Malnutrition reduces your immunity to disease. You contract diseases easier now.";
challengeCard4C.impact = "Lose 2 health points per turn until you can reach medical aid. Treatment for your sickness will cost you $4 Global Bucks."; // TODO - need to implement this
challengeCard4C.hp = -2;
challengeCard4C.wp = 0;
challengeCard4C.ep = 0;
challengeCard4C.gb = 0;
challengeCard4C.special = "gotSick";
challengeCards[2][3] = challengeCard4C;

//TODO - add the other cards....

// DONE - be able to send extra information beyond the impact stats from the card Object - try sending a string value of the function to preform the additional task 
// TODO - block user from a destination for # of turns - use countdown variable a send an unblock message
// TODO - block user from a destination until power up is gained - check when power-up is purchased for all timed losses

// TODO - mini game - bathroom break (card #14) - think this has to be a mini-game - otherwise it throws off all game turn functionality

// TODO - TEST - drop an education level (card #19) - .special = "loseEductionalLevel"
//card 19 TODO - when rest of cards are in set array values to correct number
var challengeCard19A = new Object();
challengeCard19A.title = "Illness and Education";
challengeCard19A.text = "You get the flu and miss a field trip that covered half a topic of your class, resulting in a poor test result. Appreciate the fact that you get to go to school. It is estimated that over 770 million people around the world are illiterate and do not have access to education - leaving them trapped in poverty.";
challengeCard19A.impact = "Lose 2 health points and drop an education level.";
challengeCard19A.hp = -3;
challengeCard19A.wp = 0;
challengeCard19A.ep = 0;
challengeCard19A.gb = 0;
challengeCard19A.special = "loseEducationLevel";
challengeCards[0][4] = challengeCard19A;

var challengeCard19B = new Object();
challengeCard19B.title = "Illness and Education";
challengeCard19B.text = "You get sick and miss a few days of school. You fall slightly behind and must do homework to catch up. Appreciate the fact that you get to go to school. It is estimated that over 770 million people around the world are illiterate and do not have access to education - leaving them trapped in poverty.";
challengeCard19B.impact = "Lose 2 health points and drop an education level.";
challengeCard19B.hp = -2;
challengeCard19B.wp = 0;
challengeCard19B.ep = 0;
challengeCard19B.gb = 0;
challengeCard19B.special = "loseEducationLevel";
challengeCards[1][4] = challengeCard19B;

var challengeCard19C = new Object();
challengeCard19C.title = "Illness and Education";
challengeCard19C.text = "A lack of sanitation causes you to get schistosomiasis, a parasite that invades your body causing many health problems - this also keeps you from attending school.";
challengeCard19C.impact = "Lose 1 health point, lose 2 water points, and drop an education level.";
challengeCard19B.hp = -1;
challengeCard19C.wp = 2;
challengeCard19C.ep = 0;
challengeCard19C.gb = 0;
challengeCard19C.special = "loseEducationLevel";
challengeCards[2][4] = challengeCard19C;




// TODO - TEST - remove items (all) from inventory - .special = "createInventory"
//card 30 TODO - when rest of cards are in set array values to correct number
var challengeCard30A = new Object();
challengeCard30A.title = "War";
challengeCard30A.text = "Your country is involved with a war in a distant country. Many of the returning soldiers suffer from PTSD and struggle to fit back into society. Your government does not seem to support them upon their return. This has a negative impact on the families and communities these soldiers return to. Your country also spends money on this war causing taxes to go up.";
challengeCard30A.impact = "Lose 2 health points and $3 Global Bucks.";
challengeCard30A.hp = -2;
challengeCard30A.wp = 0;
challengeCard30A.ep = 0;
challengeCard30A.gb = -3;
challengeCards[0][5] = challengeCard30A;

var challengeCard30B = new Object();
challengeCard30B.title = "War";
challengeCard30B.text = "War breaks out between your country and a neighbouring country over water and resources. Someone in your family is forced to go and fight. Much damage is done during the fighting, and it is difficult to get food and water, and what is available is much more expensive than it used to be.";
challengeCard30B.impact = "Lose 2 health points, 2 water points, and $3 Global Bucks.";
challengeCard30B.hp = -2;
challengeCard30B.wp = -2;
challengeCard30B.ep = 0;
challengeCard30B.gb = -3;
challengeCards[1][5] = challengeCard30B;

var challengeCard30C = new Object();
challengeCard30C.title = "War";
challengeCard30C.text = "Civil war breaks out in your country. You are forced to flee and seek refuge elsewhere. ";
challengeCard30C.impact = "Lose 2 health points, 2 water points and $2 Global Bucks. Also, if you purchased anything from the market or own anything, leave it behind when you flee.";
challengeCard30C.hp = -2;
challengeCard30C.wp = -2;
challengeCard30C.ep = 0;
challengeCard30C.gb = -2;
challengeCard30C.special = "createInventory"; //TODO - BUG!!! - when you have 2 global bucks and you got to market and trigger this card - global bucks up doesn't update, even thouh valeu is 0 and HUD doesn't pop-up
challengeCards[2][5] = challengeCard30C;


// template for cards
/*
var challengeCardXXA = new Object();
challengeCardXXA.title = "";
challengeCardXXA.text = "";
challengeCardXXA.impact = "";
challengeCardXXA.hp = 0;
challengeCardXXA.wp = 0;
challengeCardXXA.ep = 0;
challengeCardXXA.gb = 0;
challengeCards[0][XX] = challengeCardXXA;

var challengeCardXXB = new Object();
challengeCardXXB.title = "";
challengeCardXXB.text = "";
challengeCardXXB.impact = "";
challengeCardXXB.hp = 0;
challengeCardXXB.wp = 0;
challengeCardXXB.ep = 0;
challengeCardXXB.gb = 0;
challengeCards[1][XX] = challengeCardXXB;

var challengeCardXXC = new Object();
challengeCardXXC.title = "";
challengeCardXXC.text = "";
challengeCardXXC.impact = "";
challengeCardXXC.hp = -1;
challengeCardXXC.wp = 2;
challengeCardXXC.ep = 0;
challengeCardXXC.gb = 0;
challengeCards[2][XX] = challengeCardXXC;
 */
