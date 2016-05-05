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
challengeCard4C.impact = "Lose 2 health points per turn until you can reach medical aid. Treatment for your sickness will cost you $4 Global Bucks.";
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

var challengeCard11C = new Object();
challengeCard11C.title = "Hygiene and Sanitation";
challengeCard11C.text = "You get sick with diarrhea because you didn't wash your hands after using the washroom. Without treatment, it could be fatal, but luckily you can purchase medicine for $3 Global Bucks if you make it to the hospital in the next three turns.";
challengeCard11C.impact = "If not, lose 6 health points.";
challengeCard11C.hp = -6;
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
challengeCard12C.special = "educationBlock7";
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

// TODO - how to implement?
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
//card 19
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
challengeCard20C.special = "educationBlock7";
challengeCards[2][18] = challengeCard20C;

//card 21
var challengeCard21A = new Object();
challengeCard21A.title = "Education";
challengeCard21A.text = "Your country has great education that is free up to grade 12, but you want to go to college or university which is expensive. You accumulate student loans that take you years to pay off.";
challengeCard21A.impact = "Lose $10 Global Bucks but gain one education level.";
challengeCard21A.hp = 0;
challengeCard21A.wp = 0;
challengeCard21A.ep = 0;
challengeCard21A.gb = -10;
challengeCard21A.special = "gainEducationLevel";
challengeCards[0][19] = challengeCard21A;

var challengeCard21B = new Object();
challengeCard21B.title = "Education";
challengeCard21B.text = "Your country has good education that is free up to grade 9, but you want to finish high school. This costs money.";
challengeCard21B.impact = "Lose $6 Global Bucks but gain one education level.";
challengeCard21B.hp = 0;
challengeCard21B.wp = 0;
challengeCard21B.ep = 0;
challengeCard21B.gb = -6;
challengeCard21B.special = "gainEducationLevel";
challengeCards[1][19] = challengeCard21B;

var challengeCard21C = new Object();
challengeCard21C.title = "Education";
challengeCard21C.text = "Your country only provides free education up to age 8. To continue on, you must pay.";
challengeCard21C.impact = "Pay $6 Global Bucks to move up an education level. If you don’t have the money, you aren’t able to go to school for 5 turns.";
challengeCard21C.hp = 0;
challengeCard21C.wp = 0;
challengeCard21C.ep = 0;
challengeCard21C.gb = 0;
challengeCard21C.special = "payEducationLevel";
challengeCards[2][19] = challengeCard21C;

//card 22
var challengeCard22A = new Object();
challengeCard22A.title = "Family Illness";
challengeCard22A.text = "Your parent gets the common cold and you have to cook your own supper.";
challengeCard22A.impact = "Appreciate that you have food to eat and start helping out around the house more.";
challengeCard22A.hp = 0;
challengeCard22A.wp = 0;
challengeCard22A.ep = 0;
challengeCard22A.gb = 0;
challengeCards[0][20] = challengeCard22A;

var challengeCard22B = new Object();
challengeCard22B.title = "Family Illness";
challengeCard22B.text = "Your mother gets very ill and you have to start working to help support the family. This causes you to miss some school.";
challengeCard22B.impact = "You may not go to school for 7 turns.";
challengeCard22B.hp = 0;
challengeCard22B.wp = 0;
challengeCard22B.ep = 0;
challengeCard22B.gb = 0;
challengeCard22B.special = "educationBlock7";
challengeCards[1][20] = challengeCard22B;

var challengeCard22C = new Object();
challengeCard22C.title = "Family Illness";
challengeCard22C.text = "Your mother becomes very sick. She is too sick to harvest the crop on your farm. You miss school to harvest the crop.";
challengeCard22C.impact = "You may not go to school for 5 turns.";
challengeCard22C.hp = 0;
challengeCard22C.wp = 0;
challengeCard22C.ep = 0;
challengeCard22C.gb = 0;
challengeCard22C.special = "educationBlock5";
challengeCards[2][20] = challengeCard22C;

//card 23
var challengeCard23A = new Object();
challengeCard23A.title = "Taxation and the Military";
challengeCard23A.text = "Taxes go up to pay for the military equipment needed for soldiers and peacekeepers who are involved in international operations in other countries.";
challengeCard23A.impact = "Pay $4 Global Bucks in extra taxes";
challengeCard23A.hp = 0;
challengeCard23A.wp = 0;
challengeCard23A.ep = 0;
challengeCard23A.gb = -4;
challengeCards[0][21] = challengeCard23A;

var challengeCard23B = new Object();
challengeCard23B.title = "Taxation and the Military";
challengeCard23B.text = "Taxes in your country are raised to pay for military expansion due to ongoing conflict with a nearby nation.";
challengeCard23B.impact = "Pay $3 Global Bucks in extra taxes";
challengeCard23B.hp = 0;
challengeCard23B.wp = 0;
challengeCard23B.ep = 0;
challengeCard23B.gb = -3;
challengeCards[1][21] = challengeCard23B;

var challengeCard23C = new Object();
challengeCard23C.title = "Taxation and the Military";
challengeCard23C.text = "The military takes over your country in a coup d’etat. Unfortunately there is a lot of fighting that causes food and water shortages.";
challengeCard23C.impact = "Lose 2 health points and 2 water points. You also may not go to school, the medical centre, or the market for 3 turns.";
challengeCard23C.hp = -2;
challengeCard23C.wp = -2;
challengeCard23C.ep = 0;
challengeCard23C.gb = 0;
challengeCard23C.special = "educationSchoolMedicalBlock";
challengeCards[2][21] = challengeCard23C;

//card 24
var challengeCard24A = new Object();
challengeCard24A.title = "Lack of Transportation";
challengeCard24A.text = "You are forced to take a detour to work because of road maintenance, making you late.";
challengeCard24A.impact = "Lose $1 Global Buck";
challengeCard24A.hp = 0;
challengeCard24A.wp = 0;
challengeCard24A.ep = 0;
challengeCard24A.gb = -1;
challengeCards[0][22] = challengeCard24A;

var challengeCard24B = new Object();
challengeCard24B.title = "Lack of Transportation";
challengeCard24B.text = "Due to deteriorating roads and a lack of mass transportation such as buses and subways, your travel time to work is way longer than it should be. That means you spend less time with your family.";
challengeCard24B.impact = "Lose 2 health points.";
challengeCard24B.hp = -2;
challengeCard24B.wp = 0;
challengeCard24B.ep = 0;
challengeCard24B.gb = 0;
challengeCards[1][22] = challengeCard24B;

var challengeCard24C = new Object();
challengeCard24C.title = "Lack of Transportation";
challengeCard24C.text = "The local militia set up a roadblock in the path to your destination.";
challengeCard24C.impact = "Pay them $2 Global Bucks – if you don’t have $2 Global Bucks, lose 4 health points for the beating you take for not paying.";
challengeCard24C.hp = 0;
challengeCard24C.wp = 0;
challengeCard24C.ep = 0;
challengeCard24C.gb = 0;
challengeCard24C.special = "payOrBeat";
challengeCards[2][22] = challengeCard24C;

//card 25
var challengeCard25A = new Object();
challengeCard25A.title = "Weather and Agriculture";
challengeCard25A.text = "Heavy rains from climate change wash the topsoil on your organic garden away which results in a poor harvest.";
challengeCard25A.impact = "Lose $4 Global Bucks and 2 health points.";
challengeCard25A.hp = -2;
challengeCard25A.wp = 0;
challengeCard25A.ep = 0;
challengeCard25A.gb = -4;
challengeCards[0][23] = challengeCard25A;

var challengeCard25B = new Object();
challengeCard25B.title = "Weather and Agriculture";
challengeCard25B.text = "Torrential rain from climate change washes your topsoil away on your garden. This leads to a poor harvest.";
challengeCard25B.impact = "Lose $2 Global Bucks and 2 health points.";
challengeCard25B.hp = -2;
challengeCard25B.wp = 0;
challengeCard25B.ep = 0;
challengeCard25B.gb = -2;
challengeCards[1][23] = challengeCard25B;

var challengeCard25C = new Object();
challengeCard25C.title = "Weather and Agriculture";
challengeCard25C.text = "Torrential rain from climate change has caused massive flooding in your village, washing away many of the buildings, agricultural land, and river banks. You are forced to become an environmental refugee. You and your family take whatever you can carry and abandon your house to find safer ground.";
challengeCard25C.impact = "Lose 2 health points, 2 water points, $2 Global Bucks, and do not attend school for 7 turns. ";
challengeCard25C.hp = -2;
challengeCard25C.wp = -2;
challengeCard25C.ep = 0;
challengeCard25C.gb = -2;
challengeCard25C.special = "educationBlock7";
challengeCards[2][23] = challengeCard25C;

//card 26
var challengeCard26A = new Object();
challengeCard26A.title = "Natural Disaster";
challengeCard26A.text = "There is flooding in your city. You are evacuated in order to stay safe, although no damage is caused to any of your belongings you must spend the night in a hotel. You also must purchase food and bottled water, along with other household necessities you were forced to leave behind.";
challengeCard26A.impact = "Lose $8 Global Bucks.";
challengeCard26A.hp = 0;
challengeCard26A.wp = 0;
challengeCard26A.ep = 0;
challengeCard26A.gb = -8;
challengeCards[0][24] = challengeCard26A;

var challengeCard26B = new Object();
challengeCard26B.title = "Natural Disaster";
challengeCard26B.text = "There was flooding in your town and some of the dirt roads were washed out stopping you from getting you to school or work. Also, your local water source is contaminated until your city can get the water treatment plant up and running again.";
challengeCard26B.impact = "Lose $2 Global Bucks, 2 water points, and do not go to work or school for 3 turns.";
challengeCard26B.hp = 0;
challengeCard26B.wp = -2;
challengeCard26B.ep = 0;
challengeCard26B.gb = -2;
challengeCard26B.special = "educationBlock3";
challengeCards[1][24] = challengeCard26B;

var challengeCard26C = new Object();
challengeCard26C.title = "Natural Disaster";
challengeCard26C.text = "There was a flood in your village. Flooding increases the health threat from inadequate drinking water and sanitation systems. Water supplies become contaminated.";
challengeCard26C.impact = "Pay $2 Global Bucks for bottled water until the flooding recedes – if you don’t have $2 Global Bucks, lose 2 health points and 2 water points.";
challengeCard26C.hp = 0;
challengeCard26C.wp = 0;
challengeCard26C.ep = 0;
challengeCard26C.gb = 0;
challengeCard26C.special = "payOrNoWater";
challengeCards[2][24] = challengeCard26C;

//card 27
var challengeCard27A = new Object();
challengeCard27A.title = "Education";
challengeCard27A.text = "You miss school because you catch the flu from another student who didn’t cough into their elbow like the teacher said and instead coughed into their hands and touched the doorknob without washing their hands.";
challengeCard27A.impact = "Lose 2 health points and drop one education level.";
challengeCard27A.hp = -2;
challengeCard27A.wp = 0;
challengeCard27A.ep = 0;
challengeCard27A.gb = 0;
challengeCard27A.special = "loseEducationLevel";
challengeCards[0][25] = challengeCard27A;

var challengeCard27B = new Object();
challengeCard27B.title = "Education";
challengeCard27B.text = "You miss school because of fighting between the country you live in and a neighbouring country.  This has also prevented food shipments from reaching your area of the country.";
challengeCard27B.impact = "Lose 2 health points, 1 water point, and drop an education level.";
challengeCard27B.hp = -2;
challengeCard27B.wp = -1;
challengeCard27B.ep = 0;
challengeCard27B.gb = 0;
challengeCard27B.special = "loseEducationLevel";
challengeCards[1][25] = challengeCard27B;

var challengeCard27C = new Object();
challengeCard27C.title = "Education";
challengeCard27C.text = "You miss school because you have to walk 5 kilometres to the nearest river to get water for your family several times a day. The water you collect is not clean and could easily get your whole family to sick.";
challengeCard27C.impact = "Drop 2 health points, 2 water points, and do not go to school until you purchase a biosand filter.";
challengeCard27C.hp = -2;
challengeCard27C.wp = -2;
challengeCard27C.ep = 0;
challengeCard27C.gb = 0;
challengeCard27C.special = "bsfBlock";
challengeCards[2][25] = challengeCard27C;

//card 28
var challengeCard28A = new Object();
challengeCard28A.title = "Water";
challengeCard28A.text = "The water has been turned off in your house due to construction.";
challengeCard28A.impact = "Lose 1 water point and $1 Global Buck because you had to buy bottled water.";
challengeCard28A.hp = 0;
challengeCard28A.wp = -1;
challengeCard28A.ep = 0;
challengeCard28A.gb = -1;
challengeCards[0][26] = challengeCard28A;

var challengeCard28B = new Object();
challengeCard28B.title = "Water";
challengeCard28B.text = "The water often goes off in your home because of poor water infrastructure in your city and no money for the government to fix it.";
challengeCard28B.impact = "Lose 2 health points and 1 water point.";
challengeCard28B.hp = -2;
challengeCard28B.wp = -1;
challengeCard28B.ep = 0;
challengeCard28B.gb = 0;
challengeCards[1][26] = challengeCard28B;

var challengeCard28C = new Object();
challengeCard28C.title = "Water";
challengeCard28C.text = "There has been a drought in your country. Many people have died as a result and you must walk an extra kilometer to find water";
challengeCard28C.impact = "Lose 3 water points and 2 health points.";
challengeCard28C.hp = -2;
challengeCard28C.wp = -3;
challengeCard28C.ep = 0;
challengeCard28C.gb = 0;
challengeCards[2][26] = challengeCard28C;

//card 29
var challengeCard29A = new Object();
challengeCard29A.title = "Family";
challengeCard29A.text = "You lose a family member due to a car accident involving a distracted/intoxicated driver. You must now make arrangements for a funeral.";
challengeCard29A.impact = "Lose 2 health points and $5 Global Bucks.";
challengeCard29A.hp = -2;
challengeCard29A.wp = 0;
challengeCard29A.ep = 0;
challengeCard29A.gb = -5;
challengeCards[0][27] = challengeCard29A;

var challengeCard29B = new Object();
challengeCard29B.title = "Family";
challengeCard29B.text = "A family member has been arrested for speaking out against the government’s horrible Human Rights record. Without their income, your family struggles to make ends meet. You also get the sense the government’s secret police are watching the rest of your family.";
challengeCard29B.impact = "Lose $2 Global Bucks and 2 health points.";
challengeCard29B.hp = -2;
challengeCard29B.wp = 0;
challengeCard29B.ep = 0;
challengeCard29B.gb = -2;
challengeCards[1][27] = challengeCard29B;

var challengeCard29C = new Object();
challengeCard29C.title = "Family";
challengeCard29C.text = "You lose a family member to a deadly waterborne disease. You lose a source of income in your household.  There are 1.8 million deaths a year caused by waterborne diseases. 90% of these deaths are children under 12.";
challengeCard29C.impact = "Lose $2 Global Bucks and don’t go to school for 5 turns.";
challengeCard29C.hp = 0;
challengeCard29C.wp = 0;
challengeCard29C.ep = 0;
challengeCard29C.gb = -2;
challengeCard29C.special = "educationBlock5";
challengeCards[2][27] = challengeCard29C;

//card 30
var challengeCard30A = new Object();
challengeCard30A.title = "War";
challengeCard30A.text = "Your country is involved with a war in a distant country. Many of the returning soldiers suffer from PTSD and struggle to fit back into society. Your government does not seem to support them upon their return. This has a negative impact on the families and communities these soldiers return to. Your country also spends money on this war causing taxes to go up.";
challengeCard30A.impact = "Lose 2 health points and $3 Global Bucks.";
challengeCard30A.hp = -2;
challengeCard30A.wp = 0;
challengeCard30A.ep = 0;
challengeCard30A.gb = -3;
challengeCards[0][28] = challengeCard30A;

var challengeCard30B = new Object();
challengeCard30B.title = "War";
challengeCard30B.text = "War breaks out between your country and a neighbouring country over water and resources. Someone in your family is forced to go and fight. Much damage is done during the fighting, and it is difficult to get food and water, and what is available is much more expensive than it used to be.";
challengeCard30B.impact = "Lose 2 health points, 2 water points, and $3 Global Bucks.";
challengeCard30B.hp = -2;
challengeCard30B.wp = -2;
challengeCard30B.ep = 0;
challengeCard30B.gb = -3;
challengeCards[1][28] = challengeCard30B;

var challengeCard30C = new Object();
challengeCard30C.title = "War";
challengeCard30C.text = "Civil war breaks out in your country. You are forced to flee and seek refuge elsewhere.";
challengeCard30C.impact = "Lose 2 health points, 2 water points and $2 Global Bucks. Also, if you purchased anything from the market or own anything, leave it behind when you flee.";
challengeCard30C.hp = -2;
challengeCard30C.wp = -2;
challengeCard30C.ep = 0;
challengeCard30C.gb = -2;
challengeCard30C.special = "createInventory";
challengeCards[2][28] = challengeCard30C;

//card 31
var challengeCard31A = new Object();
challengeCard31A.title = "Farming";
challengeCard31A.text = "Your country allows massive agriculture companies to not practice environmentally sustainable farming practices and not use diversified, non-genetically modified crops. That means that everyone who eats this food is less healthy, and the land it is grown on is also becoming less and less able to produce food.";
challengeCard31A.impact = "Lose 4 health points but gain $1 Global Buck – you get the global buck to show that your country is putting profits before health and the environment.";
challengeCard31A.hp = -4;
challengeCard31A.wp = 0;
challengeCard31A.ep = 0;
challengeCard31A.gb = 1;
challengeCards[0][29] = challengeCard31A;

var challengeCard31B = new Object();
challengeCard31B.title = "Farming";
challengeCard31B.text = "Your country allows massive agriculture companies to force your farmers to grow only certain crops and only use certain pesticides. This makes it harder and harder for them to make money and also means that there are less types of food available for sale in your country – and that the food that is available is less healthy.";
challengeCard31B.impact = "Lose $2 Global Bucks and 2 health points.";
challengeCard31B.hp = -2;
challengeCard31B.wp = 0;
challengeCard31B.ep = 0;
challengeCard31B.gb = -2;
challengeCards[1][29] = challengeCard31B;

var challengeCard31C = new Object();
challengeCard31C.title = "Farming";
challengeCard31C.text = " exploited so that the food you produce can be sold cheaper in Country A nations. You work long hours for little money, and if you complain, you are fired.";
challengeCard31C.impact = "Gain $1 Global Buck but lose 3 health points.";
challengeCard31C.hp = 3;
challengeCard31C.wp = 0;
challengeCard31C.ep = 0;
challengeCard31C.gb = 1;
challengeCards[2][29] = challengeCard31C;

//card 32
var challengeCard32A = new Object();
challengeCard32A.title = "Endangered Species";
challengeCard32A.text = "Urban sprawl has encroached onto wildlife territory. Your suburban home is constantly threatened by coyotes when you leave out the garbage, and deer are always eating your garden.";
challengeCard32A.impact = "Lose 2 health points for damaging the environment.";
challengeCard32A.hp = -2;
challengeCard32A.wp = 0;
challengeCard32A.ep = 0;
challengeCard32A.gb = 0;
challengeCards[0][3.] = challengeCard32A;

var challengeCard32B = new Object();
challengeCard32B.title = "Endangered Species";
challengeCard32B.text = "Along the coast of your country, the fish populations drop so drastically that certain species are now protected. You are no longer allowed to fish for these species and you are now making less money. Even worse, fishing trawlers from other countries continue to fish the endangered species, ignoring the ban which further destroys populations.";
challengeCard32B.impact = "Lose 2 health points and $2 Global Bucks.";
challengeCard32B.hp = -2;
challengeCard32B.wp = 0;
challengeCard32B.ep = 0;
challengeCard32B.gb = -2;
challengeCards[1][30] = challengeCard32B;

var challengeCard32C = new Object();
challengeCard32C.title = "Endangered Species";
challengeCard32C.text = "Excessive illegal poaching has ruined your fragile ecosystem. Many of the special animals that used to bring tourists to the region are now extinct in your area.";
challengeCard32C.impact = "Lose $2 Global Bucks because there are no tourism jobs anymore, and lose 2 health points because you won’t have the money to feed your family properly.";
challengeCard32C.hp = -2;
challengeCard32C.wp = 0;
challengeCard32C.ep = 0;
challengeCard32C.gb = -2;
challengeCards[2][30] = challengeCard32C;

//card 33
var challengeCard33A = new Object();
challengeCard33A.title = "Discrimination";
challengeCard33A.text = "Police stop your car based on your skin colour. This is not the first time you have faced discrimination in your country despite the fact you are a law-abiding citizen who works hard, and is a valuable member of your community. This is very frustrating and unfair. ";
challengeCard33A.impact = "Lose 2 health points.";
challengeCard33A.hp = -2;
challengeCard33A.wp = 0;
challengeCard33A.ep = 0;
challengeCard33A.gb = 0;
challengeCards[0][31] = challengeCard33A;

var challengeCard33B = new Object();
challengeCard33B.title = "Discrimination";
challengeCard33B.text = "Because you are a woman, you do not have the same rights as men in your country such as voting, working at higher paying jobs, attending school past a certain level, etc.. Because you cannot vote, the government doesn’t pay attention to women’s issues.";
challengeCard33B.impact = "Lose 2 health points, $2 Global Bucks, and drop an education level.";
challengeCard33B.hp = -2;
challengeCard33B.wp = 0;
challengeCard33B.ep = 0;
challengeCard33B.gb = -2;
challengeCard33B.special = "loseEducationLevel";
challengeCards[1][31] = challengeCard33B;

var challengeCard33C = new Object();
challengeCard33C.title = "Discrimination";
challengeCard33C.text = "There are two major ethnic groups in your country. One of those groups has decided to attack the other group. Many of your family members are killed in the genocide that occurs – and the rest of your family must flee for their lives.";
challengeCard33C.impact = "Lose 2 health points, 2 water points, and $3 Global Bucks.";
challengeCard33C.hp = -2;
challengeCard33C.wp = -2;
challengeCard33C.ep = 0;
challengeCard33C.gb = -3;
challengeCards[2][31] = challengeCard33C;

//card 34
var challengeCard34A = new Object();
challengeCard34A.title = "Equality for Women";
challengeCard34A.text = "You likely didn’t get a promotion because you are a woman in a male-dominated industry. This is frustrating because you have the same training, experience, and ability as your male counterparts, yet you are paid less and are constantly passed over for promotions.";
challengeCard34A.impact = "Lose $2 Global Bucks and 2 health points.";
challengeCard34A.hp = -2;
challengeCard34A.wp = 0;
challengeCard34A.ep = 0;
challengeCard34A.gb = -2;
challengeCards[0][32] = challengeCard34A;

var challengeCard34B = new Object();
challengeCard34B.title = "Equality for Women";
challengeCard34B.text = "You are stuck in a low paying job because women in your country are never promoted into managerial roles. You work long hours for poor wages, but because there aren’t many options for women in your country, there isn’t much you can do – especially since you need the money you make to feed your children.";
challengeCard34B.impact = "Lose $2 Global Bucks and 2 health points.";
challengeCard34B.hp = -2;
challengeCard34B.wp = 0;
challengeCard34B.ep = 0;
challengeCard34B.gb = -2;
challengeCards[1][32] = challengeCard34B;

var challengeCard34C = new Object();
challengeCard34C.title = "Equality for Women";
challengeCard34C.text = "Women/girls in your country aren’t allowed to go to school, aren’t allowed to drive a car, aren’t allowed to vote, and aren’t allowed to own a business. You work many hours for very little pay.";
challengeCard34C.impact = "Lose $2 Global Bucks and 2 health points.";
challengeCard34C.hp = -2;
challengeCard34C.wp = 0;
challengeCard34C.ep = 0;
challengeCard34C.gb = -2;
challengeCards[2][32] = challengeCard34C;

//card 35
var challengeCard35A = new Object();
challengeCard35A.title = "Government Elections";
challengeCard35A.text = "The political party you vote for doesn't win. This results in a tax law change that costs you money. You do realize how lucky you are to live in a peaceful country where elections are fair and democratic.";
challengeCard35A.impact = "Lose $1 Global Buck.";
challengeCard35A.hp = 0;
challengeCard35A.wp = 0;
challengeCard35A.ep = 0;
challengeCard35A.gb = -1;
challengeCards[0][33] = challengeCard35A;

var challengeCard35B = new Object();
challengeCard35B.title = "Government Elections";
challengeCard35B.text = "The election in your country appears to have been rigged and the current corrupt political party remains in power. As these politicians line their pockets with tax money, things like schools, hospitals, roads, and other things do not get the money they need.";
challengeCard35B.impact = "Lose $2 Global Bucks and 2 health points.";
challengeCard35B.hp = -2;
challengeCard35B.wp = 0;
challengeCard35B.ep = 0;
challengeCard35B.gb = -2;
challengeCards[1][33] = challengeCard35B;

var challengeCard35C = new Object();
challengeCard35C.title = "Government Elections";
challengeCard35C.text = "Though the dictator who has run your country for years has finally agreed to hold elections, you realize quite early that these elections are not going to be fair or legitimate. Gangs of thugs are intimidating anyone who dares to support the opposing parties, and many people are afraid to even go out and vote for fear of being beaten or killed by these gangs. It isn’t much of a surprise when the dictator wins with 90% of the vote, though almost everyone knows it wasn’t a real election. Since the dictator won, most of the people in your country will continue to go without proper education, medical treatment, safety, or jobs due to a poor economy.";
challengeCard35C.impact = "Lose $2 Global Bucks and 2 health points.";
challengeCard35C.hp = -2;
challengeCard35C.wp = 0;
challengeCard35C.ep = 0;
challengeCard35C.gb = -2;
challengeCards[2][33] = challengeCard35C;

//card 36
var challengeCard36A = new Object();
challengeCard36A.title = "Power and Electricity";
challengeCard36A.text = "A tree falls on your power line during a storm you are out of power until it gets repaired.";
challengeCard36A.impact = "Lose $1 Global Buck and 1 health point.";
challengeCard36A.hp = -1;
challengeCard36A.wp = 0;
challengeCard36A.ep = 0;
challengeCard36A.gb = -1;
challengeCards[0][34] = challengeCard36A;

var challengeCard36B = new Object();
challengeCard36B.title = "Power and Electricity";
challengeCard36B.text = "A blackout in your neighbourhood occurs as a result of a malfunction in your city's old power grid.";
challengeCard36B.impact = "Lose $1 Global Buck and 1 health point.";
challengeCard36B.hp = -1;
challengeCard36B.wp = 0;
challengeCard36B.ep = 0;
challengeCard36B.gb = -1;
challengeCards[1][34] = challengeCard36B;

var challengeCard36C = new Object();
challengeCard36C.title = "Power and Electricity";
challengeCard36C.text = "The price of kerosene goes up and you can no longer afford to buy it therefore you can no longer power your lamp.";
challengeCard36C.impact = "This makes it impossible for you to study at night. Lose one education level.";
challengeCard36C.hp = 0;
challengeCard36C.wp = 0;
challengeCard36C.ep = 0;
challengeCard36C.gb = 0;
challengeCard36C.special = "loseEducationLevel";
challengeCards[2][34] = challengeCard36C;

//card 37
var challengeCard37A = new Object();
challengeCard37A.title = "Overfishing";
challengeCard37A.text = "As the world’s oceans continue to be over-fished, the price of fish continues to go up because there are less and less fish to be caught.";
challengeCard37A.impact = "Eat fish tonight to gain 2 health points but lose $2 Global Bucks.";
challengeCard37A.hp = 2;
challengeCard37A.wp = 0;
challengeCard37A.ep = 0;
challengeCard37A.gb = -2;
challengeCards[0][35] = challengeCard37A;

var challengeCard37B = new Object();
challengeCard37B.title = "Overfishing";
challengeCard37B.text = "You are a fisherman. You make your living and feed your family by fishing every day. Over the past few years, you have caught less and less fish every time you go out on your boat. This week, you have caught no fish at all.";
challengeCard37B.impact = "Lost $3 Global Bucks, 1 water point, and 3 health points.";
challengeCard37B.hp = -3;
challengeCard37B.wp = -1;
challengeCard37B.ep = 0;
challengeCard37B.gb = -3;
challengeCards[1][35] = challengeCard37B;

var challengeCard37C = new Object();
challengeCard37C.title = "Overfishing";
challengeCard37C.text = "Almost the entire population of your country lives along the coast and depends on fish/fishing for food. Over the past few years, fewer and fewer fish are being caught, and on many nights, your family goes hungry. You also aren’t making enough money to send your children to school. On top of that, the water around the coast is full of garbage.";
challengeCard37C.impact = "Lose $2 Global Bucks, 2 health points, 1 water point, and drop 1 education level.";
challengeCard37C.hp = -2;
challengeCard37C.wp = -1;
challengeCard37C.ep = 0;
challengeCard37C.gb = -2;
challengeCard37C.special = "loseEducationLevel";
challengeCards[2][35] = challengeCard37C;

//card 38
var challengeCard38A = new Object();
challengeCard38A.title = "Climate Change";
challengeCard38A.text = "Climate Change is a huge issue facing all humanity. Climate change will have a much bigger impact on poorer countries than wealthier countries like the one you live in. Still, you will face more erratic weather patterns. It will also be harder to import certain crops from other countries that may be more affected by climate change.";
challengeCard38A.impact = "Lose $2 Global Bucks and 2 water points.";
challengeCard38A.hp = 0;
challengeCard38A.wp = -2;
challengeCard38A.ep = 0;
challengeCard38A.gb = -2;
challengeCards[0][36] = challengeCard38A;

var challengeCard38B = new Object();
challengeCard38B.title = "Climate Change";
challengeCard38B.text = "Climate Change is a huge issue facing all humanity. With more erratic weather patterns, you will face things such as flooding and other weather challenges. Climate Change will affect your entire way of life.";
challengeCard38B.impact = "Lose $2 Global Bucks and 2 water points.";
challengeCard38B.hp = 0;
challengeCard38B.wp = -2;
challengeCard38B.ep = 0;
challengeCard38B.gb = -2;
challengeCards[1][36] = challengeCard38B;

var challengeCard38C = new Object();
challengeCard38C.title = "Climate Change";
challengeCard38C.text = "Climate Change is a huge issue facing all humanity. Countries that were wet before, will now face flooding. Countries that were dry before, will now face more drought. Low lying countries and islands will have less land due to rising sea levels. Climate Change will force people from their homes, creating millions of environmental refugees.";
challengeCard38C.impact = "Lose 2 Global Bucks and 2 water points.";
challengeCard38C.hp = 0;
challengeCard38C.wp = -2;
challengeCard38C.ep = 0;
challengeCard38C.gb = -2;
challengeCards[2][36] = challengeCard38C;

//card 39
var challengeCard39A = new Object();
challengeCard39A.title = "Palm Oil";
challengeCard39A.text = "Palm oil plantations are now the number one cause of rainforest destruction. Palm oil that is not sustainably sourced causes deforestation and also threatens animal habitat (such as orangutans). Many of the products purchased in your country use unsustainable palm oil. You enjoy the products but don’t realize the destruction it causes.";
challengeCard39A.impact = "Lose $2 Global Bucks, 2 health points, and drop one level of education.";
challengeCard39A.hp = -2;
challengeCard39A.wp = 0;
challengeCard39A.ep = 0;
challengeCard39A.gb = -2;
challengeCard39A.special = "loseEducationLevel";
challengeCards[0][37] = challengeCard39A;

var challengeCard39B = new Object();
challengeCard39B.title = "Palm Oil";
challengeCard39B.text = "Palm oil plantations are now the number one cause of rainforest destruction. Palm oil that is not sustainably sourced causes deforestation and also threatens animal habitat (such as orangutans). Many of the products purchased in your country use unsustainable palm oil. You enjoy the products but don’t realize the destruction it causes.";
challengeCard39B.impact = "Lose $2 Global Bucks, 2 health points, and drop one level of education.";
challengeCard39B.hp = -2;
challengeCard39B.wp = 0;
challengeCard39B.ep = 0;
challengeCard39B.gb = -2;
challengeCard39B.special = "loseEducationLevel";
challengeCards[1][37] = challengeCard39B;

var challengeCard39C = new Object();
challengeCard39C.title = "Palm Oil";
challengeCard39C.text = "In order to feed your family, you are working for a company that is clear cutting palm tree forests in your country. Unfortunately, that is destroying both animal habitat and the native way of life for local tribes. You know that this type of clear cutting is wrong, but you also need a job to feed your family.";
challengeCard39C.impact = "Gain $2 Global Bucks, but lose 2 health points and 1 water point.";
challengeCard39C.hp = -2;
challengeCard39C.wp = -1;
challengeCard39C.ep = 0;
challengeCard39C.gb = 2;
challengeCards[2][37] = challengeCard39C;

//card 42
var challengeCard42A = new Object();
challengeCard42A.title = "Injuries and Education";
challengeCard42A.text = "Your mom is sick and cannot drive you to school.";
challengeCard42A.impact = "Lose 1 health point.";
challengeCard42A.hp = -1;
challengeCard42A.wp = 0;
challengeCard42A.ep = 0;
challengeCard42A.gb = 0;
challengeCards[0][38] = challengeCard42A;

var challengeCard42B = new Object();
challengeCard42B.title = "Injuries and Education";
challengeCard42B.text = "Your dad breaks his leg and needs to be in a wheelchair. You have to miss school and stay to work on the farm";
challengeCard42B.impact = "Lose 3 education points.";
challengeCard42B.hp = 0;
challengeCard42B.wp = 0;
challengeCard42B.ep = -3;
challengeCard42B.gb = 0;
challengeCards[1][38] = challengeCard42B;

var challengeCard42C = new Object();
challengeCard42C.title = "Injuries and Education";
challengeCard42C.text = "Your mom steps on a land mine and loses her legs. She is alive but unable to take care of your little sister. The responsibility falls on you to take care of your family.";
challengeCard42C.impact = "Lose 3 education points.";
challengeCard42C.hp = 0;
challengeCard42C.wp = 0;
challengeCard42C.ep = -3;
challengeCard42C.gb = 0;
challengeCards[2][38] = challengeCard42C;

//card 44
var challengeCard44A = new Object();
challengeCard44A.title = "Working Conditions";
challengeCard44A.text = "You are a new worker in the workforce and haven’t been fully trained before you begin working. You are injured on the job and miss several days of work.";
challengeCard44A.impact = "Lose $2 Global Bucks and 2 health points.";
challengeCard44A.hp = -2;
challengeCard44A.wp = 0;
challengeCard44A.ep = 0;
challengeCard44A.gb = -2;
challengeCards[0][39] = challengeCard44A;

var challengeCard44B = new Object();
challengeCard44B.title = "Working Conditions";
challengeCard44B.text = "There are few jobs where you live, so you take a job in a factory with unsafe working conditions. You are also underpaid. You are injured on the job and there is no compensation while you are off. ";
challengeCard44B.impact = "Lose $2 Global Bucks and 2 health points.";
challengeCard44B.hp = -2;
challengeCard44B.wp = 0;
challengeCard44B.ep = 0;
challengeCard44B.gb = -2;
challengeCards[1][39] = challengeCard44B;

var challengeCard44C = new Object();
challengeCard44C.title = "Working Conditions";
challengeCard44C.text = "You are forced to work to pay off your family debt. Unfortunately, you only make enough money to cover the interest on the debt, so you never pay any of the debt off. This means you could be working there forever. This is known as indentured servitude or also child slave labour. ";
challengeCard44C.impact = "Lose 2 health points, 1 water point, and you cannot attend school again.";
challengeCard44C.hp = -2;
challengeCard44C.wp = -1;
challengeCard44C.ep = 0;
challengeCard44C.gb = 0;
challengeCard44C.special = "educationBlockAll";
challengeCards[2][39] = challengeCard44C;

//card 45
var challengeCard45A = new Object();
challengeCard45A.title = "Housing";
challengeCard45A.text = "There is a shortage of affordable housing in your community so you are forced to decide between paying the rent and having enough food to eat. You are lucky that you have a food bank in your city you can access.";
challengeCard45A.impact = "Lose $2 Global Bucks and 2 health points.";
challengeCard45A.hp = 0;
challengeCard45A.wp = 0;
challengeCard45A.ep = 0;
challengeCard45A.gb = 0;
challengeCards[0][40] = challengeCard45A;

var challengeCard45B = new Object();
challengeCard45B.title = "Housing";
challengeCard45B.text = "Due to the high cost of housing, there are several generations of your family, including many aunts, uncles, cousins, etc. forced to all live in one home. It is very crowded.";
challengeCard45B.impact = "Lose 2 health points.";
challengeCard45B.hp = 0;
challengeCard45B.wp = 0;
challengeCard45B.ep = 0;
challengeCard45B.gb = 0;
challengeCards[1][40] = challengeCard45B;

var challengeCard45C = new Object();
challengeCard45C.title = "Housing";
challengeCard45C.text = "our country is densely populated. With so many people there is a high demand for farming land to grow crops. Violent outbreaks over food and agricultural land have been happening lately and you do not feel you or your family are safe.";
challengeCard45C.impact = "Lose $1 Global Buck and 2 health points.";
challengeCard45C.hp = 0;
challengeCard45C.wp = 0;
challengeCard45C.ep = 0;
challengeCard45C.gb = 0;
challengeCards[2][40] = challengeCard45C;

//card 46
var challengeCard46A = new Object();
challengeCard46A.title = "Global Warming/Climate Change";
challengeCard46A.text = "You drive a car that creates 5 tonnes of CO2 emissions a year. This adds to high levels of CO2 in the atmosphere which causes the temperature around the world to slightly increase. This also adds to the air pollution in your community where asthma rates are going up every year.";
challengeCard46A.impact = "Lose 3 health points.";
challengeCard46A.hp = -3;
challengeCard46A.wp = 0;
challengeCard46A.ep = 0;
challengeCard46A.gb = 0;
challengeCards[0][41] = challengeCard46A;

var challengeCard46B = new Object();
challengeCard46B.title = "Global Warming/Climate Change";
challengeCard46B.text = "Climate change causes flooding in your town and you lose some of your possessions. You are also unable to go to work because the factory where you work has been flooded and will take a while to repair.";
challengeCard46B.impact = "Lose $3 Global Bucks and 2 health points.";
challengeCard46B.hp = -2;
challengeCard46B.wp = 0;
challengeCard46B.ep = 0;
challengeCard46B.gb = -3;
challengeCards[1][41] = challengeCard46B;

var challengeCard46C = new Object();
challengeCard46C.title = "Global Warming/Climate Change";
challengeCard46C.text = "Climate Change causes more extreme weather conditions. Because your village was already in a dry region, Climate Change is making it even more dry causing draughts which leads to food scarcity.";
challengeCard46C.impact = "Lose 2 health points and 2 water points.";
challengeCard46C.hp = -2;
challengeCard46C.wp = -2;
challengeCard46C.ep = 0;
challengeCard46C.gb = 0;
challengeCards[2][41] = challengeCard46C;

//card 50
var challengeCard50A = new Object();
challengeCard50A.title = "Fisheries decline";
challengeCard50A.text = "Due to high levels of toxicity in the oceans, and decreasing fish populations worldwide, you reduce the amount of fish you eat even though you know eating fish is healthy.";
challengeCard50A.impact = "Lose $2 Global Bucks because fish prices are going up, and lose 2 health points because you can’t eat as much fish as you should.";
challengeCard50A.hp = -2;
challengeCard50A.wp = 0;
challengeCard50A.ep = 0;
challengeCard50A.gb = -2;
challengeCards[0][42] = challengeCard50A;

var challengeCard50B = new Object();
challengeCard50B.title = "Fisheries decline";
challengeCard50B.text = "You used to be a fisherman but you have lost your job because of decreasing fish populations in the oceans. Your government has put a ban on fishing to help the fish populations recover, but massive fishing vessels from other countries continue to fish just offshore in international waters so the fish may never recover.";
challengeCard50B.impact = "Lose $3 Global Bucks and 2 health points.";
challengeCard50B.hp = -2;
challengeCard50B.wp = 0;
challengeCard50B.ep = 0;
challengeCard50B.gb = -3;
challengeCards[1][42] = challengeCard50B;

var challengeCard50C = new Object();
challengeCard50C.title = "Fisheries decline";
challengeCard50C.text = "You work on a local fishing vessel. Unfortunately the ocean’s fish populations are going down, so it is harder and harder to catch fish. This means less work and less food for your family. Even worse, much of the fish you catch is shipped to richer countries to be made into pet food. So as your family suffers from hunger, you know people’s pets in richer countries are eating better than your family.";
challengeCard50C.impact = "Lose $2 Global Bucks and 2 health points.";
challengeCard50C.hp = -2;
challengeCard50C.wp = 0;
challengeCard50C.ep = 0;
challengeCard50C.gb = -2;
challengeCards[2][42] = challengeCard50C;

//card 51
var challengeCard51A = new Object();
challengeCard51A.title = "Access to power";
challengeCard51A.text = "You lose access to electricity in your home, this happens for only a short period of time.";
challengeCard51A.impact = "Lose $1 Global Buck because you had to throw out some food that went bad while your fridge didn’t work.";
challengeCard51A.hp = 0;
challengeCard51A.wp = 0;
challengeCard51A.ep = 0;
challengeCard51A.gb = -1;
challengeCards[0][42] = challengeCard51A;

var challengeCard51B = new Object();
challengeCard51B.title = "Access to power";
challengeCard51B.text = "Your city's power source is down for a couple of days, you miss school and much of your food goes bad because you have no refrigeration.";
challengeCard51B.impact = "Lose $2 Global Bucks and do not go to school for 20 dice rolls.";
challengeCard51B.hp = 0;
challengeCard51B.wp = 0;
challengeCard51B.ep = 0;
challengeCard51B.gb = -2;
challengeCard44C.special = "educationBlock20";
challengeCards[1][42] = challengeCard51B;

var challengeCard51C = new Object();
challengeCard51C.title = "Access to power";
challengeCard51C.text = "You do not have electricity in your hut, making it impossible to study at night.";
challengeCard51C.impact = "Drop one education level.";
challengeCard51C.hp = 0;
challengeCard51C.wp = 0;
challengeCard51C.ep = 0;
challengeCard51C.gb = 0;
challengeCard51C.special = "loseEducationLevel";
challengeCards[2][42] = challengeCard51C;

//card 52
var challengeCard52A = new Object();
challengeCard52A.title = "Refugees";
challengeCard52A.text = "Your country’s policies over the past 50 years have caused wars in many other countries which the people living in those countries have had to flee. Also, by not helping other countries rise out of poverty, many people living in poorer countries see their only chance for a better life is to move to your country. As a country, you have a humanitarian responsibility to help people all over the world, as well as help refugees fleeing violence and poverty. You must remember that these refugees want to be in your country and will be valuable and contributing members of society. Many of the young people will appreciate education more than people who were born in your country because they know what life is like without an education.";
challengeCard52A.impact = "Give $3 Global Bucks to help these people adjust to life in your country. ";
challengeCard52A.hp = 0;
challengeCard52A.wp = 0;
challengeCard52A.ep = 0;
challengeCard52A.gb = -3;
challengeCards[0][43] = challengeCard52A;

var challengeCard52B = new Object();
challengeCard52B.title = "Refugees";
challengeCard52B.text = "Your small country has thousands of refugees streaming into it as they flee conflict and war in a neighbouring country. Your country wants to help, but it doesn’t have much money and is overwhelmed by the number of refugees arriving.";
challengeCard52B.impact = "You want to help so you give $1 Global Buck.";
challengeCard52B.hp = 0;
challengeCard52B.wp = 0;
challengeCard52B.ep = 0;
challengeCard52B.gb = -1;
challengeCards[1][43] = challengeCard52B;

var challengeCard52C = new Object();
challengeCard52C.title = "Refugees";
challengeCard52C.text = "Civil war has been going on in your country for years but the fighting has been getting worse lately. You have lost many friends and family members to the war. With no water, food, education, hospitals or any government services, it is difficult to survive. You fear for the safety of your family, especially your young children who are constantly afraid to go outside. You make the difficult decision to abandon everything you have and make the dangerous journey to another country in hope of a better life for your family.";
challengeCard52C.impact = "Lose $2 Global Bucks.";
challengeCard52C.hp = 0;
challengeCard52C.wp = 0;
challengeCard52C.ep = 0;
challengeCard52C.gb = -2;
challengeCards[2][43] = challengeCard52C;

//card 55
var challengeCard55A = new Object();
challengeCard55A.title = "Habitat Destruction";
challengeCard55A.text = "The city you live in is growing, but instead of building more densely populated areas, your city is experiencing urban sprawl – meaning it just keeps getting bigger and bigger. As the city expands, it takes more farm land and forest animal habitat. The larger the city gets, the more driving people need to do, which adds more pollution. Also, people who have to drive all the time spend less time with their family.";
challengeCard55A.impact = "Lose 4 health points.";
challengeCard55A.hp = -4;
challengeCard55A.wp = 0;
challengeCard55A.ep = 0;
challengeCard55A.gb = 0;
challengeCards[0][44] = challengeCard55A;

var challengeCard55B = new Object();
challengeCard55B.title = "Habitat Destruction";
challengeCard55B.text = "To expand business and farming in your country, more and more forest and natural areas have been destroyed. This has led to the loss of much animal habitat.";
challengeCard55B.impact = "Gain $1 Global Buck but lose 3 health points.";
challengeCard55B.hp = -3;
challengeCard55B.wp = 0;
challengeCard55B.ep = 0;
challengeCard55B.gb = 1;
challengeCards[1][44] = challengeCard55B;

var challengeCard55C = new Object();
challengeCard55C.title = "Habitat Destruction";
challengeCard55C.text = "In order to heat your home at night, and so you have light, you light a fire every night. Unfortunately, so do all the other people in your village. This constant collecting of fire wood from the nearby natural area has been very destructive to the ecosystem. It has also hurt local tourism, which many people depend on for income.";
challengeCard55C.impact = "Lose 2 health points and $2 Global Bucks.";
challengeCard55C.hp = -2;
challengeCard55C.wp = 0;
challengeCard55C.ep = 0;
challengeCard55C.gb = -2;
challengeCards[2][44] = challengeCard55C;

//card 56
var challengeCard56A = new Object();
challengeCard56A.title = "Illegal Animal Trafficking";
challengeCard56A.text = "Black market medicine made from ivory does not work. Consider getting your medicine through other means.";
challengeCard56A.impact = "Lose 1 health point.";
challengeCard56A.hp = -1;
challengeCard56A.wp = 0;
challengeCard56A.ep = 0;
challengeCard56A.gb = 0;
challengeCards[0][45] = challengeCard56A;

var challengeCard56B = new Object();
challengeCard56B.title = "Illegal Animal Trafficking";
challengeCard56B.text = "Black market medicine made from rhino horn does not work (rhino horn is made from the same stuff as your fingernails) – but the illegal poaching/killing of rhinos had them on the endangered species list.";
challengeCard56B.impact = "Lose $5 Global Bucks for purchasing illegal animal parts that have no medicinal properties. Also lose 2 health points.";
challengeCard56B.hp = -2;
challengeCard56B.wp = 0;
challengeCard56B.ep = 0;
challengeCard56B.gb = -5;
challengeCards[1][45] = challengeCard56B;

var challengeCard56C = new Object();
challengeCard56C.title = "Illegal Animal Trafficking";
challengeCard56C.text = "Elephants in the national park near your village are dying because poachers are killing them illegally for their ivory. This hurts the local ecosystem, and also hurts tourism in the area.";
challengeCard56C.impact = "Lose $3 Global Bucks and 1 health point. ";
challengeCard56C.hp = -1;
challengeCard56C.wp = 0;
challengeCard56C.ep = 0;
challengeCard56C.gb = -3;
challengeCards[2][45] = challengeCard56C;

//card 59
var challengeCard59A = new Object();
challengeCard59A.title = "Shark Finning";
challengeCard59A.text = "Due to shark finning, there is a reduction of tourism in your country. The tourists stop coming because there are no longer sharks to view.";
challengeCard59A.impact = "Lose $2 Global Bucks.";
challengeCard59A.hp = 0;
challengeCard59A.wp = 0;
challengeCard59A.ep = 0;
challengeCard59A.gb = -2;
challengeCards[0][46] = challengeCard59A;

var challengeCard59B = new Object();
challengeCard59B.title = "Shark Finning";
challengeCard59B.text = "Healthy shark populations support healthier fish species, like tuna. You lose your job as a fisherman because there is not enough tuna to fish.";
challengeCard59B.impact = "Lose $2 Global Bucks.";
challengeCard59B.hp = 0;
challengeCard59B.wp = 0;
challengeCard59B.ep = 0;
challengeCard59B.gb = -2;
challengeCards[1][46] = challengeCard59B;

var challengeCard59C = new Object();
challengeCard59C.title = "Shark Finning";
challengeCard59C.text = "Your village's food supply gets limited due to the oceans unbalanced ecosystem caused by an abundance of sharks being killed for their fins.";
challengeCard59C.impact = "Lose 3 health points.";
challengeCard59C.hp = -3;
challengeCard59C.wp = 0;
challengeCard59C.ep = 0;
challengeCard59C.gb = 0;
challengeCards[2][46] = challengeCard59C;


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
