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
partnershipCard1B.text = "You buy and sell goods and services for fair prices. This allows you to make enough money to support yourself and your family while still  sustaining your business.";
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
partnershipCard2A.text = "You pay fair prices for foods like coffee beans, which are shipped into your country. Paying fair prices allows for the international farmers to improve their farming equipment, allowing them to sell their foods for a price that helps sustain themselves.";
partnershipCard2A.impact = "Add 2 Health Points.";
partnershipCard2A.hp = 2;
partnershipCard2A.wp = 0;
partnershipCard2A.ep = 0;
partnershipCard2A.gb = 0;
partnershipCards[0][1] = partnershipCard2A;

var partnershipCard2B = new Object();
partnershipCard2B.title = "Food Prices";
partnershipCard2B.text = "You and your friends start buying locally grown fruits and vegetables, because you are supporting local farmers. You don’t have to pay for your food to be shipped or flown from other countries. Local farmers are able to sell their products for fair prices and you receive fresher/healthier food.";
partnershipCard2B.impact = "Add 2 Health Points and 2 Global Life Bucks.";
partnershipCard2B.hp = 2;
partnershipCard2B.wp = 0;
partnershipCard2B.ep = 0;
partnershipCard2B.gb = 2;
partnershipCards[1][1] = partnershipCard2B;

var partnershipCard2C = new Object();
partnershipCard2C.title = "Food Prices";
partnershipCard2C.text = "Your partnered with a microfinance organization that makes small loans to people who want to purchase materials to help create or sustain a business. You and other farmers who borrowed money are now able to purchase better farming equipment which allows you to produce more crops. This increases your profit, and makes it possible for you to repay the loans.";
partnershipCard2C.impact = "Add 2 Health Points and 2 Global Life Bucks.";
partnershipCard2C.hp = 2;
partnershipCard2C.wp = 0;
partnershipCard2C.ep = 0;
partnershipCard2C.gb = 2;
partnershipCards[2][1] = partnershipCard2C;

//card 3
var partnershipCard3A = new Object();
partnershipCard3A.title = "Food Availability";
partnershipCard3A.text = "A community garden is started in your neighbourhood. You and your family are able to grow your own food from seeds to fruits and vegetables. This connection with food helps you be healthier, happier, and saves you money.";
partnershipCard3A.impact = "Add 3 Health Points and 2 Global Life Bucks.";
partnershipCard3A.hp = 3;
partnershipCard3A.wp = 0;
partnershipCard3A.ep = 0;
partnershipCard3A.gb = 2;
partnershipCards[0][2] = partnershipCard3A;

var partnershipCard3B = new Object();
partnershipCard3B.title = "Food Availability";
partnershipCard3B.text = "Your government keeps massive agribusiness companies out of your country, and instead supports farmers with tax cuts and small loans. This allows you to expand your crops and improve your quality of life without the competition of large companies.";
partnershipCard3B.impact = "Add 3 Health Points and 2 Global Life Bucks.";
partnershipCard3B.hp = 3;
partnershipCard3B.wp = 0;
partnershipCard3B.ep = 0;
partnershipCard3B.gb = 2;
partnershipCards[1][2] = partnershipCard3B;

var partnershipCard3C = new Object();
partnershipCard3C.title = "Food Availability";
partnershipCard3C.text = "This year’s crops were plentiful because the drought had finally ended. These extra crops mean you can feed your family better and also sell extra crops at the market.";
partnershipCard3C.impact = "Add 3 Health Points and 2 Global Life Bucks.";
partnershipCard3C.hp = 3;
partnershipCard3C.wp = 0;
partnershipCard3C.ep = 0;
partnershipCard3C.gb = 2;
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
partnershipCard4C.text = "Your farms had a perfect growing season. You have lots of fresh food to feed your family. Because you are all healthy you can attend work more often.";
partnershipCard4C.impact = "Add 3 Health Points.";
partnershipCard4C.hp = 3;
partnershipCard4C.wp = 0;
partnershipCard4C.ep = 0;
partnershipCard4C.gb = 0;
partnershipCards[2][3] = partnershipCard4C;

//TODO - add the 55 other cards....
