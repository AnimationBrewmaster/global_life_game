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
challengeCard1C.text = "You get a job on a fishing boat. Unfortunately, the fish you catch are sold to feed the pets of people in wealthy countries. Overfishing has depleted your fish population, this leaves little food for your community.";
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
challengeCard3B.text = "Not enough food is delivered to the market due to drought and crop shortage so you were unable to buy enough food.";
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
challengeCard4C.impact = "Lose 2 health points per turn until you can reach medical aid. Treatment for your sickness will cost you $4 Global Bucks."; // TODO - need to implement this (already part of main game - need to add user feedback)
challengeCard4C.hp = -2;
challengeCard4C.wp = 0;
challengeCard4C.ep = 0;
challengeCard4C.gb = 0;
challengeCard4C.special = "gotSick";
challengeCards[2][3] = challengeCard4C;

//card 5
var challengeCard5A = new Object();
challengeCard5A.title = "Land Ownership";
challengeCard5A.text = "Your City purchases your house so they can expand a local roadway. This helps speed up traffic but means you have to relocate out of your neighbourhood. You also aren’t happy with the price they forced you to take for your house.";
challengeCard5A.impact = "Gain $2 Global Bucks but lose 2 health points.";
challengeCard5A.hp = -2;
challengeCard5A.wp = 0;
challengeCard5A.ep = 0;
challengeCard5A.gb = 2;
challengeCards[0][4] = challengeCard5A;

var challengeCard5B = new Object();
challengeCard5B.title = "Land Ownership";
challengeCard5B.text = "The government takes your land and you don’t have enough money for another good plot of land. You must now grow your crops on rough land, reducing its yield.";
challengeCard5B.impact = "Lose 2 health points and $2 Global Bucks";
challengeCard5B.hp = -2;
challengeCard5B.wp = 0;
challengeCard5B.ep = 0;
challengeCard5B.gb = -2;
challengeCards[1][4] = challengeCard5B;

var challengeCard5C = new Object();
challengeCard5C.title = "Land Ownership";
challengeCard5C.text = "Poor farmers in your community are forced onto marginal land that makes growing profitable crops increasingly difficult. They also don’t own the land, so any money they make goes to pay the landowners very high rent.";
challengeCard5C.impact = "Lose 2 health points and $2 Global Bucks";
challengeCard5C.hp = -2;
challengeCard5C.wp = 0;
challengeCard5C.ep = 0;
challengeCard5C.gb = -2;
challengeCards[2][4] = challengeCard5C;

//card 6
var challengeCard6A = new Object();
challengeCard6A.title = "Agriculture";
challengeCard6A.text = "The food you are able to purchase at the grocery store is cheap but has not been grown locally. It has been modified to last longer to survive the trip from the country where it can be produced cheaply, so it has less nutrition than non-modified food.";
challengeCard6A.impact = "Lost 4 health points.";
challengeCard6A.hp = -4;
challengeCard6A.wp = 0;
challengeCard6A.ep = 0;
challengeCard6A.gb = 0;
challengeCards[0][5] = challengeCard6A;

var challengeCard6B = new Object();
challengeCard6B.title = "Agriculture";
challengeCard6B.text = "Wealthier countries have put rules in place to protect and fund their own farmers, while taxing food from other countries so it is more expensive. This means you have trouble selling your food to anyone outside your country.";
challengeCard6B.impact = "Lose$ 3 Global Bucks.";
challengeCard6B.hp = 0;
challengeCard6B.wp = 0;
challengeCard6B.ep = 0;
challengeCard6B.gb = -3;
challengeCards[1][5] = challengeCard6B;

var challengeCard6C = new Object();
challengeCard6C.title = "Agriculture";
challengeCard6C.text = "You harvested a good crop this year. You would have earned $5 Global Bucks but a rich family who lives 100kms away owns the land and you were forced to pay their very high rent.";
challengeCard6C.impact = "Earn $5 Global Bucks then pay $3 for rent. ";
challengeCard6C.hp = 0;
challengeCard6C.wp = 0;
challengeCard6C.ep = 0;
challengeCard6C.gb = 2;
challengeCards[2][5] = challengeCard6C;

//card 7
var challengeCard7A = new Object();
challengeCard7A.title = "Deforestation";
challengeCard7A.text = "Companies are clear cutting forests in order to make room for grazing land for cattle, this leads to an environmental crisis involving erosion, flooding, turbidity in the water, loss of animal habitat, and a loss of tourism to the region.";
challengeCard7A.impact = "Gain $3 Global Bucks for adding grazing land, then lose $8 Global Bucks due to decreased tourism and environmental disasters causing damage.";
challengeCard7A.hp = 0;
challengeCard7A.wp = 0;
challengeCard7A.ep = 0;
challengeCard7A.gb = -5;
challengeCards[0][6] = challengeCard7A;

var challengeCard7B = new Object();
challengeCard7B.title = "Deforestation";
challengeCard7B.text = "A foreign company is using your local forest for lumber, driving up prices on wood/lumber in your country for building and heating.";
challengeCard7B.impact = "Lose $2 Global Bucks.";
challengeCard7B.hp = 0;
challengeCard7B.wp = 0;
challengeCard7B.ep = 0;
challengeCard7B.gb = -2;
challengeCards[1][6] = challengeCard7B;

var challengeCard7C = new Object();
challengeCard7C.title = "Deforestation";
challengeCard7C.text = "Transnational companies are using resources from your country but it is causing massive deforestation near your town. Over cutting leads to less land that had previously been used for shelter and hunting. It also causes soil erosion and threatens the native species  along with damaging crops and your water supply.";
challengeCard7C.impact = "Lose $1 global buck, lose 2 water points, and lose one health point.";
challengeCard7C.hp = -1;
challengeCard7C.wp = -2;
challengeCard7C.ep = 0;
challengeCard7C.gb = -1;
challengeCards[2][6] = challengeCard7C;

//card 8
var challengeCard8A = new Object();
challengeCard8A.title = "Fertilizer/Pesticide";
challengeCard8A.text = "Fertilizer/pesticide companies generated record breaking profits this year, but because of all of the inorganic chemicals used in the fertilizer, the people who ate the foods that used the fertilizer/pesticides may have increased health risks.";
challengeCard8A.impact = "Gain $3 Global Bucks but lose 5 health points.";
challengeCard8A.hp = -5;
challengeCard8A.wp = 0;
challengeCard8A.ep = 0;
challengeCard8A.gb = 3;
challengeCards[0][7] = challengeCard8A;

var challengeCard8B = new Object();
challengeCard8B.title = "Fertilizer/Pesticide";
challengeCard8B.text = "Several small farms have overused fertilizer and the resulting runoff has contaminated your town’s water supply.";
challengeCard8B.impact = "Lose 3 water points and 3 health points.";
challengeCard8B.hp = -3;
challengeCard8B.wp = -3;
challengeCard8B.ep = 0;
challengeCard8B.gb = 0;
challengeCards[1][7] = challengeCard8B;

var challengeCard8C = new Object();
challengeCard8C.title = "Fertilizer/Pesticide";
challengeCard8C.text = "Your family's small farm produced very little because you have not been taught proper crop rotation and could not afford fertilizer. The agriculture you did produce is substantially smaller so it is not in high demand.";
challengeCard8C.impact = "Lose $2 Global Bucks and 2 health points";
challengeCard8C.hp = -2;
challengeCard8C.wp = 0;
challengeCard8C.ep = 0;
challengeCard8C.gb = -2;
challengeCards[2][7] = challengeCard8C;

//card 9
var challengeCard9A = new Object();
challengeCard9A.title = "Government Spending/Debt";
challengeCard9A.text = "Your government spent money they did not have and have gone into debt because of that. That means an increase in taxes and a reduction in services such as hospitals and schools.";
challengeCard9A.impact = "Lose $4 Global Bucks and lose 1 education level";
challengeCard9A.hp = 0;
challengeCard9A.wp = 0;
challengeCard9A.ep = 0;
challengeCard9A.gb = -4;
challengeCard9A.special = "loseEducationLevel";
challengeCards[0][8] = challengeCard9A;

var challengeCard9B = new Object();
challengeCard9B.title = "Government Spending/Debt";
challengeCard9B.text = "Your government spends money to expand their military rather than improve services to the people. That means a reduction in services such as schools and hospitals.";
challengeCard9B.impact = "Lose 2 health points and lose 1 education leve";
challengeCard9B.hp = -2;
challengeCard9B.wp = 0;
challengeCard9B.ep = 0;
challengeCard9B.gb = 0;
challengeCard9B.special = "loseEducationLevel";
challengeCards[1][8] = challengeCard9B;

var challengeCard9C = new Object();
challengeCard9C.title = "Government Spending/Debt";
challengeCard9C.text = "Foreign aid workers do not consult local farmers when developing a project. The money is wasted and no progress is made.";
challengeCard9C.impact = "Lose $2 Global Bucks and 1 health point.";
challengeCard9C.hp = -1;
challengeCard9C.wp = 0;
challengeCard9C.ep = 0;
challengeCard9C.gb = -2;
challengeCards[2][8] = challengeCard9C;

//card 10
var challengeCard10A = new Object();
challengeCard10A.title = "Disease";
challengeCard10A.text = "You get sick with a bacterial infection. You have to go to the doctor, which is covered by your health insurance, and then get medicine from the pharmacy.";
challengeCard10A.impact = "Lose 2 health point and $3 Global Bucks";
challengeCard10A.hp = -2;
challengeCard10A.wp = 0;
challengeCard10A.ep = 0;
challengeCard10A.gb = -3;
challengeCards[0][9] = challengeCard10A;

var challengeCard10B = new Object();
challengeCard10B.title = "Disease";
challengeCard10B.text = "You get sick with a bacterial infection. You miss 3 days of work, and have to pay to see a doctor, pay for medicine, and lose salary.";
challengeCard10B.impact = "Lose 2 health points and $4 Global Bucks";
challengeCard10B.hp = -2;
challengeCard10B.wp = 0;
challengeCard10B.ep = 0;
challengeCard10B.gb = -4;
challengeCards[1][9] = challengeCard10B;

var challengeCard10C = new Object();
challengeCard10C.title = "Disease";
challengeCard10C.text = "You have been infected with malaria and have to travel far to get medical treatment. The medicine is expensive and you have not been able to work since you got sick.";
challengeCard10C.impact = "Lose 3 Global Bucks and 3 health points";
challengeCard10C.hp = -3;
challengeCard10C.wp = 0;
challengeCard10C.ep = 0;
challengeCard10C.gb = -3;
challengeCards[2][9] = challengeCard10C;

//card 11
var challengeCard11A = new Object();
challengeCard11A.title = "Hygiene and Sanitation";
challengeCard11A.text = "You get sick with diarrhea because you didn't wash your hands after using the washroom. You must travel to the pharmacy down the block to purchase medicine.";
challengeCard11A.impact = "Lose $2 Global Bucks and 2 water points";
challengeCard11A.hp = 0;
challengeCard11A.wp = -2;
challengeCard11A.ep = 0;
challengeCard11A.gb = -2;
challengeCards[0][10] = challengeCard11A;

var challengeCard11B = new Object();
challengeCard11B.title = "Hygiene and Sanitation";
challengeCard11B.text = "You get sick with diarrhea because you didn't wash your hands after using the washroom. Getting medicine is a little bit tricky and costs quite a bit of money.";
challengeCard11B.impact = "Lose $3 Global Bucks and 2 water points";
challengeCard11B.hp = 0;
challengeCard11B.wp = -2;
challengeCard11B.ep = 0;
challengeCard11B.gb = -3;
challengeCards[1][10] = challengeCard11B;

// TODO - implement sickness function 
var challengeCard11C = new Object();
challengeCard11C.title = "Hygiene and Sanitation";
challengeCard11C.text = "You get sick with diarrhea because you didn't wash your hands after using the washroom. Without treatment, it could be fatal, but luckily you can purchase medicine for $3 Global Bucks if you make it to the hospital in the next three turns.";
challengeCard11C.impact = "If not, lose 6 health points.";
challengeCard11C.hp = -6; // TODO - remove health point loss when "diarrhea" function works implemented 
challengeCard11C.wp = 0;
challengeCard11C.ep = 0;
challengeCard11C.gb = 0;
challengeCard11C.special = "gotDiarrhea";
challengeCards[2][10] = challengeCard11C;

//card 12
var challengeCard12A = new Object();
challengeCard12A.title = "Illness and Education";
challengeCard12A.text = "You get sick with the flu and must stay home from school.";
challengeCard12A.impact = "Lose 2 health points and drop one education level.";
challengeCard12A.hp = -2;
challengeCard12A.wp = 0;
challengeCard12A.ep = 0;
challengeCard12A.gb = 0;
challengeCard12A.special = "loseEducationLevel";
challengeCards[0][11] = challengeCard12A;

var challengeCard12B = new Object();
challengeCard12B.title = "Illness and Education";
challengeCard12B.text = "You get sick with the flu and must stay home from school.";
challengeCard12B.impact = "Lose 2 health points and drop one education level.";
challengeCard12B.hp = -2;
challengeCard12B.wp = 0;
challengeCard12B.ep = 0;
challengeCard12B.gb = 0;
challengeCard12B.special = "loseEducationLevel";
challengeCards[1][11] = challengeCard12B;

// TODO - block user from a destination for # of turns - use countdown variable to send an unblock message
var challengeCard12C = new Object();
challengeCard12C.title = "Illness and Education";
challengeCard12C.text = "One of your family members dies of HIV/AIDS. You cannot go to school and must stay home to run the family business.";
challengeCard12C.impact = "You cannot go to school for 7 turns.";
challengeCard12C.hp = 0;
challengeCard12C.wp = 0;
challengeCard12C.ep = 0;
challengeCard12C.gb = 0;
challengeCards[2][11] = challengeCard12C;

//card 13
var challengeCard13A = new Object();
challengeCard13A.title = "Waterborne Illness";
challengeCard13A.text = "You get sick from drinking water from the river while out camping.";
challengeCard13A.impact = "Lose 2 health and 2 water points.";
challengeCard13A.hp = -2;
challengeCard13A.wp = -2;
challengeCard13A.ep = 0;
challengeCard13A.gb = 0;
challengeCards[0][12] = challengeCard13A;

var challengeCard13B = new Object();
challengeCard13B.title = "Waterborne Illness";
challengeCard13B.text = "You get sick from drinking untreated water.";
challengeCard13B.impact = "Lose 2 health and 2 water points.";
challengeCard13B.hp = -2;
challengeCard13B.wp = -2;
challengeCard13B.ep = 0;
challengeCard13B.gb = 0;
challengeCards[1][12] = challengeCard13B;

var challengeCard13C = new Object();
challengeCard13C.title = "Waterborne Illness";
challengeCard13C.text = "You get infected with a waterborne illness after drinking untreated water. Half the beds in the local hospital are filled with similar cases. Diarrhea kills over 1 million people around the world each year due to lack of access to sanitation and clean water.";
challengeCard13C.impact = "Lose 2 health points, 2 water points, and a Global Buck.";
challengeCard13C.hp = -2;
challengeCard13C.wp = -2;
challengeCard13C.ep = 0;
challengeCard13C.gb = -1;
challengeCards[2][12] = challengeCard13C;

//card 14
// TODO - mini game - bathroom break (card #14) - think this has to be a mini-game - otherwise it throws off all game turn functionality
var challengeCard14A = new Object();
challengeCard14A.title = "Bathroom Break";
challengeCard14A.text = "You have to go to the bathroom! Many people around the world lack access to proper sanitation. Double the number you rolled and move that many spaces. You must make it to the bathroom right away!";
challengeCard14A.impact = "If you don’t make it, lose 3 health points and 3 water points.";
challengeCard14A.hp = -3;
challengeCard14A.wp = -3;
challengeCard14A.ep = 0;
challengeCard14A.gb = 0;
challengeCards[0][13] = challengeCard14A;

var challengeCard14B = new Object();
challengeCard14B.title = "Bathroom Break";
challengeCard14B.text = "You have to go to the bathroom! Many people around the world lack access to proper sanitation. Double the number you rolled and move that many spaces. You must make it to the bathroom right away!";
challengeCard14B.impact = "If you don’t make it, lose 3 health points and 3 water points.";
challengeCard14B.hp = -3;
challengeCard14B.wp = -3;
challengeCard14B.ep = 0;
challengeCard14B.gb = 0;
challengeCards[1][13] = challengeCard14B;

var challengeCard14C = new Object();
challengeCard14C.title = "Bathroom Break";
challengeCard14C.text = "You have to go to the bathroom! Many people around the world lack access to proper sanitation. Double the number you rolled and move that many spaces. You must make it to the bathroom right away!";
challengeCard14C.impact = "If you don’t make it, lose 3 health points and 3 water points.";
challengeCard14C.hp = -3;
challengeCard14C.wp = -3;
challengeCard14C.ep = 0;
challengeCard14C.gb = 0;
challengeCards[2][13] = challengeCard14C;

//card 15
var challengeCard15A = new Object();
challengeCard15A.title = "Hygiene and Sanitation";
challengeCard15A.text = "You don’t wash your hands while out in a public bathroom and you get sick. You must miss work for a of couple days.";
challengeCard15A.impact = "Lose $3 Global Bucks and 2 Health Points.";
challengeCard15A.hp = -2;
challengeCard15A.wp = 0;
challengeCard15A.ep = 0;
challengeCard15A.gb = -3;
challengeCards[0][14] = challengeCard15A;

var challengeCard15B = new Object();
challengeCard15B.title = "Hygiene and Sanitation";
challengeCard15B.text = "You get diarrhea from your lack of access to clean water so you must miss work for 4 days.";
challengeCard15B.impact = "Lose $3 Global Bucks and 2 Health Points.";
challengeCard15B.hp = -2;
challengeCard15B.wp = 0;
challengeCard15B.ep = 0;
challengeCard15B.gb = -3;
challengeCards[1][14] = challengeCard15B;

var challengeCard15C = new Object();
challengeCard15C.title = "Hygiene and Sanitation";
challengeCard15C.text = "An illness caused by your lack of sanitation/washing your hands after going to the bathroom, causes you to miss work.";
challengeCard15C.impact = "Lose $3 Global Bucks and 2 Health Points.";
challengeCard15C.hp = -2;
challengeCard15C.wp = 0;
challengeCard15C.ep = 0;
challengeCard15C.gb = -3;
challengeCards[2][14] = challengeCard15C;

//card 16
//no card 16

//card 17
var challengeCard17A = new Object();
challengeCard17A.title = "Civil War and Unrest";
challengeCard17A.text = "There is civil unrest in your country due to poor representation of your ethnicity in government. This makes it difficult to have a healthy lifestyle or get to work.";
challengeCard17A.impact = "Lose $3 Global Bucks and 2 health points";
challengeCard17A.hp = -2;
challengeCard17A.wp = 0;
challengeCard17A.ep = 0;
challengeCard17A.gb = -3;
challengeCards[0][15] = challengeCard17A;

var challengeCard17B = new Object();
challengeCard17B.title = "Civil War and Unrest";
challengeCard17B.text = "A small country near you has thousands of refugees flooding into your country due to civil war.. The cost of feeding these refugees is huge and because your country is small it doesn’t have the resources. Your country is also frustrated that other countries around the world are not doing more to help.";
challengeCard17B.impact = "Lose $2 Global Bucks and 2 health points.";
challengeCard17B.hp = -2;
challengeCard17B.wp = 0;
challengeCard17B.ep = 0;
challengeCard17B.gb = -2;
challengeCards[1][15] = challengeCard17B;

var challengeCard17C = new Object();
challengeCard17C.title = "Civil War and Unrest";
challengeCard17C.text = "Civil war breaks out! You and your family must abandon everything you have to avoid being caught up in the violence.";
challengeCard17C.impact = "Lose 3 Global Bucks, 2 health points and 2 water points. ";
challengeCard17C.hp = -2;
challengeCard17C.wp = -2;
challengeCard17C.ep = 0;
challengeCard17C.gb = -3;
challengeCards[2][15] = challengeCard17C;

//card 18
var challengeCard18A = new Object();
challengeCard18A.title = "Injury";
challengeCard18A.text = "You hurt your knee playing football with your friend. Physiotherapy is not covered completely by your health care.";
challengeCard18A.impact = "Lose $5 Global Buck";
challengeCard18A.hp = 0;
challengeCard18A.wp = 0;
challengeCard18A.ep = 0;
challengeCard18A.gb = -5;
challengeCards[0][16] = challengeCard18A;

var challengeCard18B = new Object();
challengeCard18B.title = "Injury";
challengeCard18B.text = "Your leg is broken because of your unsafe workplace. Your job does not provide Worker Compensation and as recover you receive no income.";
challengeCard18B.impact = "Lose $5 Global Bucks";
challengeCard18B.hp = 0;
challengeCard18B.wp = 0;
challengeCard18B.ep = 0;
challengeCard18B.gb = -5;
challengeCards[1][16] = challengeCard18B;

var challengeCard18C = new Object();
challengeCard18C.title = "Injury";
challengeCard18C.text = "Even though the civil war in your country has ended, there are still thousands of landmines left around. You step on one and are lucky to only lose your leg. Unfortunately, this makes it hard to do work.";
challengeCard18C.impact = "Lose 4 health points and $4 Global Bucks. ";
challengeCard18C.hp = -4;
challengeCard18C.wp = 0;
challengeCard18C.ep = 0;
challengeCard18C.gb = -4;
challengeCards[2][16] = challengeCard18C;

// DONE - be able to send extra information beyond the impact stats from the card Object - try sending a string value of the function to preform the additional task 

// DONE - TEST - drop an education level (card #19) - .special = "loseEductionalLevel"
var challengeCard19A = new Object();
challengeCard19A.title = "Illness and Education";
challengeCard19A.text = "You get the flu and miss a field trip that covered half a topic of your class, resulting in a poor test result. Appreciate the fact that you get to go to school. It is estimated that over 770 million people around the world are illiterate and do not have access to education - leaving them trapped in poverty.";
challengeCard19A.impact = "Lose 2 health points and drop an education level.";
challengeCard19A.hp = -2;
challengeCard19A.wp = 0;
challengeCard19A.ep = 0;
challengeCard19A.gb = 0;
challengeCard19A.special = "loseEducationLevel";
challengeCards[0][17] = challengeCard19A;

var challengeCard19B = new Object();
challengeCard19B.title = "Illness and Education";
challengeCard19B.text = "You get sick and miss a few days of school. You fall slightly behind and must do homework to catch up. Appreciate the fact that you get to go to school. It is estimated that over 770 million people around the world are illiterate and do not have access to education - leaving them trapped in poverty.";
challengeCard19B.impact = "Lose 2 health points and drop an education level.";
challengeCard19B.hp = -2;
challengeCard19B.wp = 0;
challengeCard19B.ep = 0;
challengeCard19B.gb = 0;
challengeCard19B.special = "loseEducationLevel";
challengeCards[1][17] = challengeCard19B;

var challengeCard19C = new Object();
challengeCard19C.title = "Illness and Education";
challengeCard19C.text = "A lack of sanitation causes you to get schistosomiasis, a parasite that invades your body causing many health problems - this also keeps you from attending school.";
challengeCard19C.impact = "Lose 1 health point, lose 2 water points, and drop an education level.";
challengeCard19B.hp = -1;
challengeCard19C.wp = -2;
challengeCard19C.ep = 0;
challengeCard19C.gb = 0;
challengeCard19C.special = "loseEducationLevel";
challengeCards[2][17] = challengeCard19C;


// TODO - block user from a destination until power up is gained - check when power-up is purchased for all timed losses

//TODO - add the other cards....

//card 20
var challengeCard20A = new Object();
challengeCard20A.title = "Family Illness";
challengeCard20A.text = "Your father just got diagnosed with cancer and the treatment is very expensive. Luckily your government has a universal healthcare system where everyone receives medical treatment and your job provides health insurance so the cost to you is reduced.";
challengeCard20A.impact = "Lose $5 Global Bucks to help while he is off of work.";
challengeCard20A.hp = 0;
challengeCard20A.wp = 0;
challengeCard20A.ep = 0;
challengeCard20A.gb = -5;
challengeCards[0][18] = challengeCard20A;

var challengeCard20B = new Object();
challengeCard20B.title = "Family Illness";
challengeCard20B.text = "Your father becomes ill and cannot work. You must now support your family.";
challengeCard20B.impact = "Lose $6 Global Bucks.";
challengeCard20B.hp = 0;
challengeCard20B.wp = 0;
challengeCard20B.ep = 0;
challengeCard20B.gb = -6;
challengeCards[1][18] = challengeCard20B;

// TODO - block user from a destination for # of turns - use countdown variable a send an unblock message
var challengeCard20C = new Object();
challengeCard20C.title = "Family Illness";
challengeCard20C.text = "Your country has great education that is free up to grade 12, but you want to go to college or university which is expensive. You accumulate student loans that take you years to pay off.";
challengeCard20C.impact = "You cannot go to school for 7 turns.";
challengeCard20C.hp = 0;
challengeCard20C.wp = 0;
challengeCard20C.ep = 0;
challengeCard20C.gb = 0;
challengeCards[2][18] = challengeCard20C;

// DONE- TEST - remove items (all) from inventory - .special = "createInventory"
//card 30 TODO - when rest of cards are in set array values to correct number
var challengeCard30A = new Object();
challengeCard30A.title = "War";
challengeCard30A.text = "Your country is involved with a war in a distant country. Many of the returning soldiers suffer from PTSD and struggle to fit back into society. Your government does not seem to support them upon their return. This has a negative impact on the families and communities these soldiers return to. Your country also spends money on this war causing taxes to go up.";
challengeCard30A.impact = "Lose 2 health points and $3 Global Bucks.";
challengeCard30A.hp = -2;
challengeCard30A.wp = 0;
challengeCard30A.ep = 0;
challengeCard30A.gb = -3;
challengeCards[0][19] = challengeCard30A;

var challengeCard30B = new Object();
challengeCard30B.title = "War";
challengeCard30B.text = "War breaks out between your country and a neighbouring country over water and resources. Someone in your family is forced to go and fight. Much damage is done during the fighting, and it is difficult to get food and water, and what is available is much more expensive than it used to be.";
challengeCard30B.impact = "Lose 2 health points, 2 water points, and $3 Global Bucks.";
challengeCard30B.hp = -2;
challengeCard30B.wp = -2;
challengeCard30B.ep = 0;
challengeCard30B.gb = -3;
challengeCards[1][19] = challengeCard30B;

var challengeCard30C = new Object();
challengeCard30C.title = "War";
challengeCard30C.text = "Civil war breaks out in your country. You are forced to flee and seek refuge elsewhere.";
challengeCard30C.impact = "Lose 2 health points, 2 water points and $2 Global Bucks. Also, if you purchased anything from the market or own anything, leave it behind when you flee.";
challengeCard30C.hp = -2;
challengeCard30C.wp = -2;
challengeCard30C.ep = 0;
challengeCard30C.gb = -2;
challengeCard30C.special = "createInventory";
challengeCards[2][19] = challengeCard30C;


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
challengeCards[0][QQ] = challengeCardXXA;

var challengeCardXXB = new Object();
challengeCardXXB.title = "";
challengeCardXXB.text = "";
challengeCardXXB.impact = "";
challengeCardXXB.hp = 0;
challengeCardXXB.wp = 0;
challengeCardXXB.ep = 0;
challengeCardXXB.gb = 0;
challengeCards[1][QQ] = challengeCardXXB;

var challengeCardXXC = new Object();
challengeCardXXC.title = "";
challengeCardXXC.text = "";
challengeCardXXC.impact = "";
challengeCardXXC.hp = 0;
challengeCardXXC.wp = 0;
challengeCardXXC.ep = 0;
challengeCardXXC.gb = 0;
challengeCards[2][QQ] = challengeCardXXC;
 */
