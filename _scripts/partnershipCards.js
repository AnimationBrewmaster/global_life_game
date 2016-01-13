/**
 * @author Glen
 */

// create 2D array for country type partnership cards
var partnershipCards = new Array();
partnershipCards[0] = new Array();
partnershipCards[1] = new Array();
partnershipCards[2] = new Array();


//create cards

//card 1
var partnershipCard1A = new Object();
partnershipCard1A.title = "Wage / Employment";
partnershipCard1A.text = "Your government implements a new train system in your city providing you with a job and eventually reducing the cost and environmental impact of worker’s commutes";
partnershipCard1A.impact = "Gain 3 Global Life Bucks.";
partnershipCard1A.hp = 0;
partnershipCard1A.wp = 0;
partnershipCard1A.ep = 0;
partnershipCard1A.gb = 3;
partnershipCards[0][0] = partnershipCard1A;

var partnershipCard1B = new Object();
partnershipCard1B.title = "Wage / Employment";
partnershipCard1B.text = "You buy and sell goods and services for fair prices because of Fair Trade practices in your country. This allows you to make enough money to support yourself and your family while still  sustaining your business.";
partnershipCard1B.impact = "Gain 3 Global Life Bucks.";
partnershipCard1B.hp = 0;
partnershipCard1B.wp = 0;
partnershipCard1B.ep = 0;
partnershipCard1B.gb = 3;
partnershipCards[1][0] = partnershipCard1B;

var partnershipCard1C = new Object();
partnershipCard1C.title = "Wage / Employment";
partnershipCard1C.text = "Your government negotiates exporting your country's goods with a fair trade organization. Selling your goods for a fair price gives you a fair profit and you are able to support yourself and improve your business. ";
partnershipCard1C.impact = "Gain 3 Global Life Bucks.";
partnershipCard1C.hp = 0;
partnershipCard1C.wp = 0;
partnershipCard1C.ep = 0;
partnershipCard1C.gb = 3;
partnershipCards[2][0] = partnershipCard1C;

//card 2
var partnershipCard2A = new Object();
partnershipCard2A.title = "Food Prices";
partnershipCard2A.text = "You pay fair prices for foods like coffee beans, which are shipped into your country. Paying fair prices means it costs you a little more for your coffee, but it also allows international farmers to, to sell their foods for a price that helps sustain themselves and their families.";
partnershipCard2A.impact = "Add 2 Health Points.";
partnershipCard2A.hp = 2;
partnershipCard2A.wp = 0;
partnershipCard2A.ep = 0;
partnershipCard2A.gb = 0;
partnershipCards[0][1] = partnershipCard2A;

var partnershipCard2B = new Object();
partnershipCard2B.title = "Food Prices";
partnershipCard2B.text = "You and your friends start buying locally grown fruits and vegetables, because you like supporting local farmers. You don’t have to pay for your food to be shipped or flown from other countries which helps the environment. Local farmers are able to sell their products for fair prices and you receive fresher/healthier food.";
partnershipCard2B.impact = "Add 2 Health Points and 2 Global Life Bucks.";
partnershipCard2B.hp = 2;
partnershipCard2B.wp = 0;
partnershipCard2B.ep = 0;
partnershipCard2B.gb = 2;
partnershipCards[1][1] = partnershipCard2B;

var partnershipCard2C = new Object();
partnershipCard2C.title = "Food Prices";
partnershipCard2C.text = "You're partnered with a microfinance organization that makes small loans to people who want to purchase materials to help create or sustain a business. You and other farmers who borrowed money are now able to purchase better farming equipment which allows you to produce more crops. This increases your profit, and makes it possible for you to repay the loans.";
partnershipCard2C.impact = "Add 2 Health Points and 2 Global Life Bucks.";
partnershipCard2C.hp = 2;
partnershipCard2C.wp = 0;
partnershipCard2C.ep = 0;
partnershipCard2C.gb = 2;
partnershipCards[2][1] = partnershipCard2C;

//card 3
var partnershipCard3A = new Object();
partnershipCard3A.title = "Food Availability";
partnershipCard3A.text = "A community garden is started in your neighbourhood. You and your family are able to grow your own fruits and vegetables. This connection with food helps you be healthier, happier, and saves you money.";
partnershipCard3A.impact = "Add 3 Health Points and 2 Global Life Bucks.";
partnershipCard3A.hp = 3;
partnershipCard3A.wp = 0;
partnershipCard3A.ep = 0;
partnershipCard3A.gb = 2;
partnershipCards[0][2] = partnershipCard3A;

var partnershipCard3B = new Object();
partnershipCard3B.title = "Food Availability";
partnershipCard3B.text = "Your government keeps massive agribusiness companies out of your country, and instead supports farmers with tax cuts and small loans. This allows you to expand your crops, grow healthier crops, and improve your quality of life.";
partnershipCard3B.impact = "Add 3 Health Points and 2 Global Life Bucks.";
partnershipCard3B.hp = 3;
partnershipCard3B.wp = 0;
partnershipCard3B.ep = 0;
partnershipCard3B.gb = 2;
partnershipCards[1][2] = partnershipCard3B;

var partnershipCard3C = new Object();
partnershipCard3C.title = "Food Availability";
partnershipCard3C.text = "This year’s crops were plentiful because the drought had finally ended. These extra crops mean you can feed your family better and also sell extra crops at the market for extra money. This money allows you to send your children to school.";
partnershipCard3C.impact = "Add 3 Health Points, 1 education level, and 2 Global Life Bucks.";
partnershipCard3C.hp = 3;
partnershipCard3C.wp = 0;
partnershipCard3C.ep = 0;
partnershipCard3C.gb = 2;
partnershipCard3C.special = "gainEductionalLevel";
partnershipCards[2][2] = partnershipCard3C;

//card 4
var partnershipCard4A = new Object();
partnershipCard4A.title = "Food Quality";
partnershipCard4A.text = "With high standards of sanitation and government regulation, the food you eat is unlikely to make you sick. You are able to work everyday and earn a full income, if you are an adult. If you are a child, you are able to go to school everyday and learn.";
partnershipCard4A.impact = "Add 3 Health Points.";
partnershipCard4A.hp = 3;
partnershipCard4A.wp = 0;
partnershipCard4A.ep = 0;
partnershipCard4A.gb = 0;
partnershipCards[0][3] = partnershipCard4A;

var partnershipCard4B = new Object();
partnershipCard4B.title = "Food Quality";
partnershipCard4B.text = "The food you are buying from the market is grown without the use of pesticides and will not make you sick. This locally grown food is very fresh and therefore very healthy. If you are healthy, you can attend work and school more often.";
partnershipCard4B.impact = "Add 3 Health Points.";
partnershipCard4B.hp = 3;
partnershipCard4B.wp = 0;
partnershipCard4B.ep = 0;
partnershipCard4B.gb = 0;
partnershipCards[1][3] = partnershipCard4B;

var partnershipCard4C = new Object();
partnershipCard4C.title = "Food Quality";
partnershipCard4C.text = "Your farms had a perfect growing season. You have lots of fresh food to feed your family. Because you are all healthy you can attend work/school more often.";
partnershipCard4C.impact = "Add 3 Health Points and go up 1 education level.";
partnershipCard4C.hp = 3;
partnershipCard4C.wp = 0;
partnershipCard4C.ep = 0;
partnershipCard4C.gb = 0;
partnershipCard4C.special = "gainEductionalLevel";
partnershipCards[2][3] = partnershipCard4C;

//card 5
var partnershipCard5A = new Object();
partnershipCard5A.title = "Land Ownership";
partnershipCard5A.text = "You made a good investment and now own a large piece of land. Over time the land will become more valuable which helps your family financially.";
partnershipCard5A.impact = "Add 4 Global Life Bucks.";
partnershipCard5A.hp = 0;
partnershipCard5A.wp = 0;
partnershipCard5A.ep = 0;
partnershipCard5A.gb = 4;
partnershipCards[0][4] = partnershipCard5A;

var partnershipCard5B = new Object();
partnershipCard5B.title = "Land Ownership";
partnershipCard5B.text = "Your neighbour is moving and has offered you a good deal for his land. You decide to buy the land and have made a good investment. This is important because land is a stable investment and will benefit your family financially.";
partnershipCard5B.impact = "Add 4 Global Life Bucks.";
partnershipCard5B.hp = 0;
partnershipCard5B.wp = 0;
partnershipCard5B.ep = 0;
partnershipCard5B.gb = 4;
partnershipCards[1][4] = partnershipCard5B;

var partnershipCard5C = new Object();
partnershipCard5C.title = "Land Ownership";
partnershipCard5C.text = "An international aid organization has helped your village secure the surrounding land, which will allow you to plant sustainable crops. This is important because the land will not be taken away from you.";
partnershipCard5C.impact = "Add 4 Global Life Bucks.";
partnershipCard5C.hp = 0;
partnershipCard5C.wp = 0;
partnershipCard5C.ep = 0;
partnershipCard5C.gb = 4;
partnershipCards[2][4] = partnershipCard5C;

//card 6
var partnershipCard6A = new Object();
partnershipCard6A.title = "Agriculture";
partnershipCard6A.text = "Scientists from your country have discovered a new, eco-friendly, and more efficient way to grow crops. Due to increased supply of food, prices are now lower, and your country is also helping the environment.";
partnershipCard6A.impact = "Add 4 Health Points and 1 Global Buck.";
partnershipCard6A.hp = 4;
partnershipCard6A.wp = 0;
partnershipCard6A.ep = 0;
partnershipCard6A.gb = 1;
partnershipCards[0][5] = partnershipCard6A;

var partnershipCard6B = new Object();
partnershipCard6B.title = "Agriculture";
partnershipCard6B.text = "An international partner supplies your town with modern farming machines such as combines, allowing you to grow and harvest more crops. Due to increased supply of food there is less chance of a food shortage and you can also sell your crops for a fairer price.";
partnershipCard6B.impact = "Add 4 Health Points and 1 Global Life Buck.";
partnershipCard6B.hp = 4;
partnershipCard6B.wp = 0;
partnershipCard6B.ep = 0;
partnershipCard6B.gb = 1;
partnershipCards[1][5] = partnershipCard6B;

var partnershipCard6C = new Object();
partnershipCard6C.title = "Agriculture";
partnershipCard6C.text = "An international partner teaches the farmers in your village how to build terraces. This creates more space to plant crops and protects the village from erosion. Now that local farmers have improved technology they are able to supply the community with more food.";
partnershipCard6C.impact = "Add 3 Health Points. ";
partnershipCard6C.hp = 3;
partnershipCard6C.wp = 0;
partnershipCard6C.ep = 0;
partnershipCard6C.gb = 0;
partnershipCards[2][5] = partnershipCard6C;

//card 7
var partnershipCard7A = new Object();
partnershipCard7A.title = "Deforestation";
partnershipCard7A.text = "Your government creates a new national park in your country protecting the forest and all of its inhabitants from deforestation. They also draw up policies that enforce sustainable forestry practices. This benefits people who work in the industry and the environment.";
partnershipCard7A.impact = "Add 3 Health Points and 2 Global Bucks";
partnershipCard7A.hp = 3;
partnershipCard7A.wp = 0;
partnershipCard7A.ep = 0;
partnershipCard7A.gb = 2;
partnershipCards[0][6] = partnershipCard7A;

var partnershipCard7B = new Object();
partnershipCard7B.title = "Deforestation";
partnershipCard7B.text = "A local non-governmental organization (NGO) is funded by people in a developed country. They are able to plant trees around your village and farm. This helps prevent soil erosion and also provides you with more crops to help sustain you and your family. The extra crops can be sold for extra income.";
partnershipCard7B.impact = "Add 3 Health Points and 2 Global Bucks.";
partnershipCard7B.hp = 3;
partnershipCard7B.wp = 0;
partnershipCard7B.ep = 0;
partnershipCard7B.gb = 2;
partnershipCards[1][6] = partnershipCard7B;

var partnershipCard7C = new Object();
partnershipCard7C.title = "Deforestation";
partnershipCard7C.text = "Your country's rainforests are protected through donations from people in developed nations to organizations such as Rainforest Concern.";
partnershipCard7C.impact = "Add 3 Health Points.";
partnershipCard7C.hp = 3;
partnershipCard7C.wp = 0;
partnershipCard7C.ep = 0;
partnershipCard7C.gb = 0;
partnershipCards[2][6] = partnershipCard7C;

//card 8
var partnershipCard8A = new Object();
partnershipCard8A.title = "Natural Fertilizers and organic pesticides";
partnershipCard8A.text = "You begin to use natural fertilizers such as manure and compost on your crops, and you also use organic pesticide. This is a safer and more environmentally friendly way to farm. ";
partnershipCard8A.impact = "Gain 1 Global Buck and 2 Health Points.";
partnershipCard8A.hp = 2;
partnershipCard8A.wp = 0;
partnershipCard8A.ep = 0;
partnershipCard8A.gb = 1;
partnershipCards[0][7] = partnershipCard8A;

var partnershipCard8B = new Object();
partnershipCard8B.title = "Natural Fertilizers and organic pesticides";
partnershipCard8B.text = "You begin to use natural fertilizers such as manure and compost on your farm. This is a safer and more environmentally friendly way to farm your crops.";
partnershipCard8B.impact = "Gain 1 Global Buck and 2 Health Points.";
partnershipCard8B.hp = 2;
partnershipCard8B.wp = 0;
partnershipCard8B.ep = 0;
partnershipCard8B.gb = 1;
partnershipCards[1][7] = partnershipCard8B;

var partnershipCard8C = new Object();
partnershipCard8C.title = "Natural Fertilizers and organic pesticides";
partnershipCard8C.text = "You are taught new farming techniques using natural fertilizers such as compost. You are supplied with some of these fertilizers and organic pesticides by an international partner. You can now safely farm your crops while being environmentally friendly.";
partnershipCard8C.impact = "Gain 1 Global Buck and 2 Health Points.";
partnershipCard8C.hp = 2;
partnershipCard8C.wp = 0;
partnershipCard8C.ep = 0;
partnershipCard8C.gb = 1;
partnershipCards[2][7] = partnershipCard8C;

//card 9
var partnershipCard9A = new Object();
partnershipCard9A.title = "Government Spending/Debt";
partnershipCard9A.text = "Your government reduces taxes due to a large increase in the value of one of your country’s natural resources.";
partnershipCard9A.impact = "Gain 3 Global Bucks.";
partnershipCard9A.hp = 0;
partnershipCard9A.wp = 0;
partnershipCard9A.ep = 0;
partnershipCard9A.gb = 3;
partnershipCards[0][8] = partnershipCard9A;

var partnershipCard9B = new Object();
partnershipCard9B.title = "Government Spending/Debt";
partnershipCard9B.text = "A new party is elected in your country and they reduce taxes.";
partnershipCard9B.impact = "Gain 2 Global Bucks.";
partnershipCard9B.hp = 0;
partnershipCard9B.wp = 0;
partnershipCard9B.ep = 0;
partnershipCard9B.gb = 2;
partnershipCards[1][8] = partnershipCard9B;

var partnershipCard9C = new Object();
partnershipCard9C.title = "Government Spending/Debt";
partnershipCard9C.text = "Your government reduces taxes after they receive funding from developed nations.";
partnershipCard9C.impact = "Gain 2 Global Bucks.";
partnershipCard9C.hp = 0;
partnershipCard9C.wp = 0;
partnershipCard9C.ep = 0;
partnershipCard9C.gb = 2;
partnershipCards[2][8] = partnershipCard9C;

//card 10
var partnershipCard10A = new Object();
partnershipCard10A.title = "Disease";
partnershipCard10A.text = "Your mother survives having stage three cancer due to the technologically advanced medical facilities, free access to health care, and well trained medical personnel in your country.";
partnershipCard10A.impact = "Gain 3 Health Points.";
partnershipCard10A.hp = 3;
partnershipCard10A.wp = 0;
partnershipCard10A.ep = 0;
partnershipCard10A.gb = 0;
partnershipCards[0][9] = partnershipCard10A;

var partnershipCard10B = new Object();
partnershipCard10B.title = "Disease";
partnershipCard10B.text = "Your father gets sick. Luckily he is able to get rid of it quickly and return to work because he had access to both a doctor and medicine thanks to an international aid organization.";
partnershipCard10B.impact = "Gain 3 Health Points.";
partnershipCard10B.hp = 3;
partnershipCard10B.wp = 0;
partnershipCard10B.ep = 0;
partnershipCard10B.gb = 0;
partnershipCards[1][9] = partnershipCard10B;

var partnershipCard10C = new Object();
partnershipCard10C.title = "Disease";
partnershipCard10C.text = "An international aid organization pays for medication so your sick mother can recover and return to work, providing income and thusfood for your family.";
partnershipCard10C.impact = "Gain 3 Health Points.";
partnershipCard10C.hp = 3;
partnershipCard10C.wp = 0;
partnershipCard10C.ep = 0;
partnershipCard10C.gb = 0;
partnershipCards[2][9] = partnershipCard10C;

//TODO - add the 55 other cards....

// TODO - gain an education level (card #21) - .special = "gainEductionalLevel" - see challengeCards.js

// template for partnership cards
/*
var partnershipCardXXA = new Object();
partnershipCardXXA.title = "";
partnershipCardXXA.text = "";
partnershipCardXXA.impact = "";
partnershipCardXXA.hp = 0;
partnershipCardXXA.wp = 0;
partnershipCardXXA.ep = 0;
partnershipCardXXA.gb = 0;
partnershipCards[0][QQ] = partnershipCardXXA;

var partnershipCardXXB = new Object();
partnershipCardXXB.title = "";
partnershipCardXXB.text = "";
partnershipCardXXB.impact = "";
partnershipCardXXB.hp = 0;
partnershipCardXXB.wp = 0;
partnershipCardXXB.ep = 0;
partnershipCardXXB.gb = 0;
partnershipCards[1][QQ] = partnershipCardXXB;

var partnershipCardXXC = new Object();
partnershipCardXXC.title = "";
partnershipCardXXC.text = "";
partnershipCardXXC.impact = "";
partnershipCardXXC.hp = 0;
partnershipCardXXC.wp = 0;
partnershipCardXXC.ep = 0;
partnershipCardXXC.gb = 0;
partnershipCards[2][QQ] = partnershipCardXXC;
*/
 
