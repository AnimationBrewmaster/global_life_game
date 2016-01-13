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

// card 11
var partnershipCard11A = new Object();
partnershipCard11A.title = "Hygiene/Sanitation";
partnershipCard11A.text = "An organization comes into your school and teaches you about why you should wash your hands so you and your classmates are sick less often.";
partnershipCard11A.impact = "Add 2 Water Points and 2 Health Points.";
partnershipCard11A.hp = 2;
partnershipCard11A.wp = 2;
partnershipCard11A.ep = 0;
partnershipCard11A.gb = 0;
partnershipCards[0][10] = partnershipCard11A;

var partnershipCard11B = new Object();
partnershipCard11B.title = "Hygiene/Sanitation";
partnershipCard11B.text = "Your teacher teaches you about the importance of hygiene and sanitation and how to keep yourself and others from getting sick, allowing you to prevent illness in the future.";
partnershipCard11B.impact = "Add 2 Water and 2 Health Points.";
partnershipCard11B.hp = 2;
partnershipCard11B.wp = 2;
partnershipCard11B.ep = 0;
partnershipCard11B.gb = 0;
partnershipCards[1][10] = partnershipCard11B;

var partnershipCard11C = new Object();
partnershipCard11C.title = "Hygiene/Sanitation";
partnershipCard11C.text = "An organization comes into your village to teach you about proper sanitation and installs a biosand filter allowing you to drink cleaner water every day so you can fight water borne illness more effectively.";
partnershipCard11C.impact = "Add 2 Water and 2 Health Points.";
partnershipCard11C.hp = 2;
partnershipCard11C.wp = 2;
partnershipCard11C.ep = 0;
partnershipCard11C.gb = 0;
partnershipCards[2][10] = partnershipCard11C;

//card 12
var partnershipCard12A = new Object();
partnershipCard12A.title = "Illness & Education";
partnershipCard12A.text = "Your school nurse comes into your classroom and shows you a presentation about the importance of living a healthy lifestyle and how to avoid illness. The nurse talks about how to lower the spread of illnesses so you and your classmates can go to school more often.";
partnershipCard12A.impact = "Gain 2 Health Points and 1 Education Level.";
partnershipCard12A.hp = 1;
partnershipCard12A.wp = 0;
partnershipCard12A.ep = 0;
partnershipCard12A.gb = 0;
partnershipCard12A.special = "gainEducationLevel";
partnershipCards[0][11] = partnershipCard12A;

var partnershipCard12B = new Object();
partnershipCard12B.title = "Illness & Education";
partnershipCard12B.text = "An organization teaches you about how to keep yourself healthy and how this can help you attend school more often and make a more healthy and successful life for yourself.";
partnershipCard12B.impact = "Gain 2 health points and 1 Education Level.";
partnershipCard12B.hp = 2;
partnershipCard12B.wp = 0;
partnershipCard12B.ep = 0;
partnershipCard12B.gb = 0;
partnershipCard12B.special = "gainEducationLevel";
partnershipCards[1][11] = partnershipCard12B;;

var partnershipCard12C = new Object();
partnershipCard12C.title = "Illness & Education";
partnershipCard12C.text = "An international aid organization teaches you about how to best avoid contracting disease. You get sick less often and can now attend school more to get a better education. You can even teach the rest of your family if they are not educated – this helps all of you raise yourself out of poverty.";
partnershipCard12C.impact = "Gain 2 Health Points and 1 Education Level.";
partnershipCard12C.hp = 2;
partnershipCard12C.wp = 0;
partnershipCard12C.ep = 0;
partnershipCard12C.gb = 0;
partnershipCard12C.special = "gainEducationLevel";
partnershipCards[2][11] = partnershipCard12C;

//card 13
var partnershipCard13A = new Object();
partnershipCard13A.title = "Contamination";
partnershipCard13A.text = "You learn about how soap and chemicals going into water sources from things such as washing your car in your driveway is bad for the environment.This allows you to be more environmentally conscious in regards to your watershed.";
partnershipCard13A.impact = "Gain 2 Water Points.";
partnershipCard13A.hp = 0;
partnershipCard13A.wp = 2;
partnershipCard13A.ep = 0;
partnershipCard13A.gb = 0;
partnershipCards[0][12] = partnershipCard13A;

var partnershipCard13B = new Object();
partnershipCard13B.title = "Contamination";
partnershipCard13B.text = "Your city gets a grant to make sure that your water treatment facilities are up to healthy standards. You now drink and wash in cleaner water every day, making you healthier and preventing water borne illness.";
partnershipCard13B.impact = "Gain 2 Water Points.";
partnershipCard13B.hp = 0;
partnershipCard13B.wp = 2;
partnershipCard13B.ep = 0;
partnershipCard13B.gb = 0;
partnershipCards[1][12] = partnershipCard13B;

var partnershipCard13C = new Object();
partnershipCard13C.title = "Contamination";
partnershipCard13C.text = "An international aid organization teaches your village how to treat their water and dispose of waste using proper sanitation which greatly reduces water borne illness.";
partnershipCard13C.impact = "Gain 3 Water Points.";
partnershipCard13C.hp = 0;
partnershipCard13C.wp = 3;
partnershipCard13C.ep = 0;
partnershipCard13C.gb = 0;
partnershipCards[2][12] = partnershipCard13C;

//card 14
var partnershipCard14A = new Object();
partnershipCard14A.title = "Bathroom Sanitation";
partnershipCard14A.text = "You learn about how washing your hands is important from a very early age. You are sick less often and live a healthier life.";
partnershipCard14A.impact = "Gain 1 Health Point.";
partnershipCard14A.hp = 1;
partnershipCard14A.wp = 0;
partnershipCard14A.ep = 0;
partnershipCard14A.gb = 0;
partnershipCards[0][13] = partnershipCard14A;

var partnershipCard14B = new Object();
partnershipCard14B.title = "Bathroom Sanitation";
partnershipCard14B.text = "Your learn from an early age that having clean hands when you eat is important and you are sick less often.";
partnershipCard14B.impact = "Gain 1 Health Point.";
partnershipCard14B.hp = 1;
partnershipCard14B.wp = 0;
partnershipCard14B.ep = 0;
partnershipCard14B.gb = 0;
partnershipCards[1][13] = partnershipCard14B;

var partnershipCard14C = new Object();
partnershipCard14C.title = "Bathroom Sanitation";
partnershipCard14C.text = "An organization teaches you about the importance of drinking and preparing food in clean water,, this helps keep you and your family healthier.";
partnershipCard14C.impact = "Gain 2 Health Points. ";
partnershipCard14C.hp = 2;
partnershipCard14C.wp = 0;
partnershipCard14C.ep = 0;
partnershipCard14C.gb = 0;
partnershipCards[2][13] = partnershipCard14C;

//card 17
var partnershipCard17A = new Object();
partnershipCard17A.title = "Civil War/Unrest ";
partnershipCard17A.text = "Your government and other members of the United Nations shut down a major terrorist group that were threatening the safety of your country. Your sense of security has improved, and the government no longer needs funding for a war effort.";
partnershipCard17A.impact = "Add 1 Health Point 1 Global Buck. ";
partnershipCard17A.hp = 1;
partnershipCard17A.wp = 0;
partnershipCard17A.ep = 0;
partnershipCard17A.gb = 1;
partnershipCards[0][14] = partnershipCard17A;

var partnershipCard17B = new Object();
partnershipCard17B.title = "Civil War/Unrest ";
partnershipCard17B.text = "The United Nations brokers a peace deal stopping the destructive civil war across your country. Now with less worry of war, your country can expect more foreign investment.";
partnershipCard17B.impact = "Add 2 Global Bucks and 2 Health Point";
partnershipCard17B.hp = 2;
partnershipCard17B.wp = 0;
partnershipCard17B.ep = 0;
partnershipCard17B.gb = 2;
partnershipCards[1][14] = partnershipCard17B;

var partnershipCard17C = new Object();
partnershipCard17C.title = "Civil War/Unrest ";
partnershipCard17C.text = "Your country has just come to the end of a 5 year long civil war. With the war no longer plaguing your country's people and using up resources you have more access to health care, education, and no longer live in fear.";
partnershipCard17C.impact = "Add 3 health points, 3 Global Bucks.";
partnershipCard17C.hp = 3;
partnershipCard17C.wp = 0;
partnershipCard17C.ep = 0;
partnershipCard17C.gb = 3;
partnershipCards[2][14] = partnershipCard17C;

//card 19
var partnershipCard19A = new Object();
partnershipCard19A.title = "Illness - Education";
partnershipCard19A.text = "A new hospital opens near your house. You can now access health care more easily.";
partnershipCard19A.impact = "Add 3 Health Points.";
partnershipCard19A.hp = 3;
partnershipCard19A.wp = 0;
partnershipCard19A.ep = 0;
partnershipCard19A.gb = 0;
partnershipCards[0][15] = partnershipCard19A;

var partnershipCard19B = new Object();
partnershipCard19B.title = "Illness - Education";
partnershipCard19B.text = "A new clinic opens up in a city near your town. You now have more accessible health care. ";
partnershipCard19B.impact = "Add 3 Health Points.";
partnershipCard19B.hp = 3;
partnershipCard19B.wp = 0;
partnershipCard19B.ep = 0;
partnershipCard19B.gb = 0;
partnershipCards[1][15] = partnershipCard19B;

var partnershipCard19C = new Object();
partnershipCard19C.title = "Illness - Education";
partnershipCard19C.text = "A doctor from an international organization has arrived in your village to give free vaccinations.";
partnershipCard19C.impact = "Add 3 Health Points.";
partnershipCard19C.hp = 3;
partnershipCard19C.wp = 0;
partnershipCard19C.ep = 0;
partnershipCard19C.gb = 0;
partnershipCards[2][15] = partnershipCard19C;

//card 20
var partnershipCard20A = new Object();
partnershipCard20A.title = "Illness - Family";
partnershipCard20A.text = "Your brother catches a cold and it quickly spreads to your family. You go to the doctor and he gives an antibiotic that quickly cures your family.";
partnershipCard20A.impact = "Add 2 Health Point.";
partnershipCard20A.hp = 2;
partnershipCard20A.wp = 0;
partnershipCard20A.ep = 0;
partnershipCard20A.gb = 0;
partnershipCards[0][16] = partnershipCard20A;

var partnershipCard20B = new Object();
partnershipCard20B.title = "Illness - Family";
partnershipCard20B.text = "Your father and sister contract malaria. Luckily, an international aid organization has subsidized medicine in your country to buy, so you can afford medication to cure your father and sister.";
partnershipCard20B.impact = "Add 3 Health Point.";
partnershipCard20B.hp = 3;
partnershipCard20B.wp = 0;
partnershipCard20B.ep = 0;
partnershipCard20B.gb = 0;
partnershipCards[1][16] = partnershipCard20B;

var partnershipCard20C = new Object();
partnershipCard20C.title = "Illness - Family";
partnershipCard20C.text = "Your brother and father contract an illness from the dirty water in the village river, luckily there is a doctor only a few kilometers walk away and you get medication from him helping your father and brother recover.";
partnershipCard20C.impact = "Add 3 Health Point.";
partnershipCard20C.hp = 3;
partnershipCard20C.wp = 0;
partnershipCard20C.ep = 0;
partnershipCard20C.gb = 0;
partnershipCards[2][16] = partnershipCard20C;




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
 
