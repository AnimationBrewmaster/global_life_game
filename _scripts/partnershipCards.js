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
partnershipCard12A.hp = 2;
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

// card 21
var partnershipCard21A = new Object();
partnershipCard21A.title = "National Education";
partnershipCard21A.text = "Your government invests more in education and as a result class sizes decrease. You now have more one on one time with the teacher which helps you learn more.";
partnershipCard21A.impact = "Add 1 Education level.";
partnershipCard21A.hp = 0;
partnershipCard21A.wp = 0;
partnershipCard21A.ep = 0;
partnershipCard21A.gb = 0;
partnershipCard21A.special = "gainEducationLevel";
partnershipCards[0][17] = partnershipCard21A;

var partnershipCard21B = new Object();
partnershipCard21B.title = "National Education";
partnershipCard21B.text = "Your government standardizes their education and now other countries will recognize your diploma, meaning you will be able to study abroad if you achieve good grades. This benefits both you and your country since having more citizens with a better education will improve all aspects of life.";
partnershipCard21B.impact = "Add 1 Education level.";
partnershipCard21B.hp = 0;
partnershipCard21B.wp = 0;
partnershipCard21B.ep = 0;
partnershipCard21B.gb = 0;
partnershipCard21B.special = "gainEducationLevel";
partnershipCards[1][17] = partnershipCard21B;

var partnershipCard21C = new Object();
partnershipCard21C.title = "National Education";
partnershipCard21C.text = "An NGO visits your city and offers to teach English for free. You are now able to help your parents do business with foreigners in english. You have now helped your family earn more income.";
partnershipCard21C.impact = "Add 2 Education levels.";
partnershipCard21C.hp = 0;
partnershipCard21C.wp = 0;
partnershipCard21C.ep = 0;
partnershipCard21C.gb = 0;
partnershipCard21C.special = "gain2EducationLevels";
partnershipCards[2][17] = partnershipCard21C;

// card 23
var partnershipCard23A = new Object();
partnershipCard23A.title = "Military";
partnershipCard23A.text = "The military comes and assists your community during a disaster. They provide supplies and services to make it easier for you to recover from the disaster.";
partnershipCard23A.impact = "Gain 1 Health Point.";
partnershipCard23A.hp = 1;
partnershipCard23A.wp = 0;
partnershipCard23A.ep = 0;
partnershipCard23A.gb = 0;
partnershipCards[0][18] = partnershipCard23A;

var partnershipCard23B = new Object();
partnershipCard23B.title = "Military";
partnershipCard23B.text = "There aren't many jobs in your country but the large military force provides a large variety of employment opportunities.";
partnershipCard23B.impact = "Gain 1 Global Buck.";
partnershipCard23B.hp = 0;
partnershipCard23B.wp = 0;
partnershipCard23B.ep = 0;
partnershipCard23B.gb = 1;
partnershipCards[1][18] = partnershipCard23B;

var partnershipCard23C = new Object();
partnershipCard23C.title = "Military";
partnershipCard23C.text = "The military in your country puts a stop to civil war for the first time in many years. This allows you to have a stable life and grow crops without worrying about your safety.";
partnershipCard23C.impact = "Gain 1 Health Point and 2 Global Bucks.";
partnershipCard23C.hp = 1;
partnershipCard23C.wp = 0;
partnershipCard23C.ep = 0;
partnershipCard23C.gb = 2;
partnershipCards[2][18] = partnershipCard23C;

// card 24
var partnershipCard24A = new Object();
partnershipCard24A.title = "Transportation";
partnershipCard24A.text = "You are given a new bike for Christmas which allows you to get places in an environmentally friendly and healthy way.";
partnershipCard24A.impact = "Gain 1 Health Point.";
partnershipCard24A.hp = 1;
partnershipCard24A.wp = 0;
partnershipCard24A.ep = 0;
partnershipCard24A.gb = 0;
partnershipCards[0][19] = partnershipCard24A;

var partnershipCard24B = new Object();
partnershipCard24B.title = "Transportation";
partnershipCard24B.text = "The new government in your country upgrades the road system. You now spend less money on gas, allowing you to use the money on food and other necessities.";
partnershipCard24B.impact = "Gain 1 Global Buck.";
partnershipCard24B.hp = 0;
partnershipCard24B.wp = 0;
partnershipCard24B.ep = 0;
partnershipCard24B.gb = 1;
partnershipCards[1][19] = partnershipCard24B;

var partnershipCard24C = new Object();
partnershipCard24C.title = "Transportation";
partnershipCard24C.text = "Congratulations! Bicycles for Humanity has delivered a shipping container of bicycles to your community. With a bicycle, you can get places faster and easier. That means you can get to the river to get water for your house and still go to school all day which increases your education level. You can also access things like medical care in the next village. They also train several locals to fix bicycles which creates jobs in your community.";
partnershipCard24C.impact = "Gain 2 Health Points and go up 1 education level. Plus you get a bike!!!";
partnershipCard24C.hp = 2;
partnershipCard24C.wp = 0;
partnershipCard24C.ep = 0;
partnershipCard24C.gb = 0;
partnershipCard21C.special = "getABikeEducation";
partnershipCards[2][19] = partnershipCard24C;

// card 25
var partnershipCard25A = new Object();
partnershipCard25A.title = "Weather/Agriculture";
partnershipCard25A.text = "Scientists from your country have discovered a new, eco-friendly, and more efficient way to grow crops which can survive with a small amount of water, meaning you use water more efficiently.";
partnershipCard25A.impact = "Add 1 Health Point.";
partnershipCard25A.hp = 1;
partnershipCard25A.wp = 0;
partnershipCard25A.ep = 0;
partnershipCard25A.gb = 0;
partnershipCards[0][20] = partnershipCard25A;

var partnershipCard25B = new Object();
partnershipCard25B.title = "Weather/Agriculture";
partnershipCard25B.text = "An international partner supplies your town with tractors. This allows you to build more farms providing your town with more local food. Your town also has begun to build a stock of food in case of a natural disaster.";
partnershipCard25B.impact = "Add 2 Health Points.";
partnershipCard25B.hp = 2;
partnershipCard25B.wp = 0;
partnershipCard25B.ep = 0;
partnershipCard25B.gb = 0;
partnershipCards[1][20] = partnershipCard25B;

var partnershipCard25C = new Object();
partnershipCard25C.title = "Weather/Agriculture";
partnershipCard25C.text = "An international organization has provided your town with seeds to grow a diversified number of crops. This will help the farmers in your town recover after the recent flood.";
partnershipCard25C.impact = "Add 3 Health Points.";
partnershipCard25C.hp = 3;
partnershipCard25C.wp = 0;
partnershipCard25C.ep = 0;
partnershipCard25C.gb = 0;
partnershipCards[2][20] = partnershipCard25C;

// card 26
var partnershipCard26A = new Object();
partnershipCard26A.title = "Natural Disaster";
partnershipCard26A.text = "There was a flood in your city and your government and other organizations come and help rebuild. Theyhelp the people who have lost their homes and possessions.";
partnershipCard26A.impact = "Add 2 Water Points.";
partnershipCard26A.hp = 0;
partnershipCard26A.wp = 2;
partnershipCard26A.ep = 0;
partnershipCard26A.gb = 0;
partnershipCards[0][21] = partnershipCard26A;

var partnershipCard26B = new Object();
partnershipCard26B.title = "Natural Disaster";
partnershipCard26B.text = "Your village is hit by a hurricane. Other countries around the world, as well as some charities, send supplies and come to your village to help you rebuild.";
partnershipCard26B.impact = "Add 2 Water Points.";
partnershipCard26B.hp = 0;
partnershipCard26B.wp = 2;
partnershipCard26B.ep = 0;
partnershipCard26B.gb = 0;
partnershipCards[1][21] = partnershipCard26B;

var partnershipCard26C = new Object();
partnershipCard26C.title = "Natural Disaster";
partnershipCard26C.text = "There is a drought in your village, but an organization comes in and teaches you new innovations to make the wells able to access water. These innovations also allow you to conserve as much water as possible.";
partnershipCard26C.impact = "Add 3 Water Points.";
partnershipCard26C.hp = 0;
partnershipCard26C.wp = 3;
partnershipCard26C.ep = 0;
partnershipCard26C.gb = 0;
partnershipCards[2][21] = partnershipCard26C;

// card 27
var partnershipCard27A = new Object();
partnershipCard27A.title = "Education";
partnershipCard27A.text = "The economy in your city is thriving and there is extra money to fund schools. The cost of extracurricular activities and field trips are covered. This lessens your expenses, allowing you to spend money on other necessities.";
partnershipCard27A.impact = "Add 1 Global Buck and 1 Education Level.";
partnershipCard27A.hp = 0;
partnershipCard27A.wp = 0;
partnershipCard27A.ep = 0;
partnershipCard27A.gb = 1;
partnershipCard27A.special = "gainEductionalLevel";
partnershipCards[0][22] = partnershipCard27A;

var partnershipCard27B = new Object();
partnershipCard27B.title = "Education";
partnershipCard27B.text = "Your country’s government encourages all children to go to school and get an education. To help families with low-incomes, the government pays for a large portion of their education. This lessens your expenses, allowing you to spend the extra money on things such as clothing or food.";
partnershipCard27B.impact = "Add 1 Global Buck and 1 Education Level.";
partnershipCard27B.hp = 0;
partnershipCard27B.wp = 0;
partnershipCard27B.ep = 0;
partnershipCard27B.gb = 1;
partnershipCard27B.special = "gainEductionalLevel";
partnershipCards[1][22] = partnershipCard27B;

var partnershipCard27C = new Object();
partnershipCard27C.title = "Education";
partnershipCard27C.text = "School fees drop due to government funding and you are able to send one of your children to school. This child is able to bring back knowledge from school and share it with the rest of the family.";
partnershipCard27C.impact = "Add 1 Global Buck and 1 Education Level.";
partnershipCard27C.hp = 0;
partnershipCard27C.wp = 0;
partnershipCard27C.ep = 0;
partnershipCard27C.gb = 0;
partnershipCard27C.special = "gainEductionalLevel";
partnershipCards[2][22] = partnershipCard27C;

// card 28
var partnershipCard28A = new Object();
partnershipCard28A.title = "Water";
partnershipCard28A.text = "Some students from a local school teach you about the importance of conserving water. This allows you to use less water in everyday life.";
partnershipCard28A.impact = "Add 4 water points.";
partnershipCard28A.hp = 0;
partnershipCard28A.wp = 4;
partnershipCard28A.ep = 0;
partnershipCard28A.gb = 0;
partnershipCards[0][23] = partnershipCard28A;

var partnershipCard28B = new Object();
partnershipCard28B.title = "Water";
partnershipCard28B.text = "An international partner teaches you about the importance of boiling your water before drinking or cooking with it, having proper sanitation to deal with human waste, and washing your hands after going to the toilet. This keeps everyone in your family healthier, allowing them to attend school/work more, which means more money and better education.";
partnershipCard28B.impact = "Add 3 Health Points and 4 Water Points, 2 Global Bucks and go up 1 Education Level.";
partnershipCard28B.hp = 3;
partnershipCard28B.wp = 4;
partnershipCard28B.ep = 0;
partnershipCard28B.gb = 2;
partnershipCard28B.special = "gainEductionalLevel";
partnershipCards[1][23] = partnershipCard28B;

var partnershipCard28C = new Object();
partnershipCard28C.title = "Water";
partnershipCard28C.text = "An international partner teaches you about the importance of  boiling your water before drinking or cooking with it, having proper sanitation to deal with human waste, and washing your hands after going to the toilet. This keeps everyone in your family healthier, allowing them to attend school/work more, which means more money and better education.";
partnershipCard28C.impact = "Add 3 Health Points and 4 Water Points, 2 Global Bucks and go up 1 Education Level.";
partnershipCard28C.hp = 3;
partnershipCard28C.wp = 4;
partnershipCard28C.ep = 0;
partnershipCard28C.gb = 2;
partnershipCard28C.special = "gainEductionalLevel";
partnershipCards[2][23] = partnershipCard28C;

// card 29
var partnershipCard29A = new Object();
partnershipCard29A.title = "Family";
partnershipCard29A.text = "You are lucky to be raised in a loving home in a developed nation. This means you have a very good quality of life.";
partnershipCard29A.impact = "Add 3 Health Points and Water Points and 1 Global Buck.";
partnershipCard29A.hp = 3;
partnershipCard29A.wp = 3;
partnershipCard29A.ep = 0;
partnershipCard29A.gb = 1;
partnershipCards[0][24] = partnershipCard29A;

var partnershipCard29B = new Object();
partnershipCard29B.title = "Family";
partnershipCard29B.text = "You learn about sustainable population in undeveloped countries and decide that it’s a good idea to have a smaller family. You are able to give your family a better life. Having less children will save you money in the long run.";
partnershipCard29B.impact = "Add 5 Global Bucks.";
partnershipCard29B.hp = 0;
partnershipCard29B.wp = 0;
partnershipCard29B.ep = 0;
partnershipCard29B.gb = 5;
partnershipCards[1][24] = partnershipCard29B;

var partnershipCard29C = new Object();
partnershipCard29C.title = "Family";
partnershipCard29C.text = "You are sponsored by a family in a developed nation (Country A) and you can now attend school and cover your basic necessities.";
partnershipCard29C.impact = "Add 4 Health Points and 4 Water Points and 1 Global Buck.";
partnershipCard29C.hp = 4;
partnershipCard29C.wp = 4;
partnershipCard29C.ep = 0;
partnershipCard29C.gb = 1;
partnershipCards[2][24] = partnershipCard29C;

// card 30
var partnershipCard30A = new Object();
partnershipCard30A.title = "War";
partnershipCard30A.text = "A war your country was participating in has finished. As a result your taxes can be put towards things like education, health care, and other things that help your country.";
partnershipCard30A.impact = "Add 1 Health Point and 1 Global Buck.";
partnershipCard30A.hp = 1;
partnershipCard30A.wp = 0;
partnershipCard30A.ep = 0;
partnershipCard30A.gb = 1;
partnershipCards[0][25] = partnershipCard30A;

var partnershipCard30B = new Object();
partnershipCard30B.title = "War";
partnershipCard30B.text = "A war in your country has ended and you can go back to farming your crops safely without fear of having to flee for your lives.";
partnershipCard30B.impact = "Add 3 Health and 1 Water Point.";
partnershipCard30B.hp = 3;
partnershipCard30B.wp = 1;
partnershipCard30B.ep = 0;
partnershipCard30B.gb = 0;
partnershipCards[1][25] = partnershipCard30B;

var partnershipCard30C = new Object();
partnershipCard30C.title = "War";
partnershipCard30C.text = "There is war in your country but an organization comes into your village and makes sure it is kept safe. They supply you with food, water and other necessities.";
partnershipCard30C.impact = "Add 3 Health and Water Points.";
partnershipCard30C.hp = 3;
partnershipCard30C.wp = 3;
partnershipCard30C.ep = 0;
partnershipCard30C.gb = 0;
partnershipCards[2][25] = partnershipCard30C;

// card 31
var partnershipCard31A = new Object();
partnershipCard31A.title = "Intensive Farming";
partnershipCard31A.text = "A major grocery store food chain in your country stops getting their food from factory farms and instead gets their supplies from better sources that use sustainable farming practices including organic production, improving the quality of the food consumed by the general population.";
partnershipCard31A.impact = "Add 3 Health Points.";
partnershipCard31A.hp = 3;
partnershipCard31A.wp = 0;
partnershipCard31A.ep = 0;
partnershipCard31A.gb = 0;
partnershipCards[0][26] = partnershipCard31A;

var partnershipCard31B = new Object();
partnershipCard31B.title = "Intensive Farming";
partnershipCard31B.text = "Your government creates new regulations for waste removal from factory farms requiring that the waste be put in a lagoon with an impermeable liner. This prevents the waste from escaping the lagoon and protects your land and rivers.";
partnershipCard31B.impact = "Add 3 Health Points.";
partnershipCard31B.hp = 3;
partnershipCard31B.wp = 0;
partnershipCard31B.ep = 0;
partnershipCard31B.gb = 0;
partnershipCards[1][26] = partnershipCard31B;

var partnershipCard31C = new Object();
partnershipCard31C.title = "Intensive Farming";
partnershipCard31C.text = "An international aid organization comes to your community and teaches the farmers how to grow crops without pesticides or chemicals. This means the people who eat the crops are healthier and that the farmers are better educated in new farming techniques.";
partnershipCard31C.impact = "Add 3 Health Points.";
partnershipCard31C.hp = 3;
partnershipCard31C.wp = 0;
partnershipCard31C.ep = 0;
partnershipCard31C.gb = 0;
partnershipCards[2][26] = partnershipCard31C;

// card 32
var partnershipCard32A = new Object();
partnershipCard32A.title = "Endangered Species";
partnershipCard32A.text = "You join an organization fighting to protect endangered animals, and thanks to your protests, imports of certain animals into your country is banned. You have saved several species from extinction.";
partnershipCard32A.impact = "Add 3 Health Points.";
partnershipCard32A.hp = 3;
partnershipCard32A.wp = 0;
partnershipCard32A.ep = 0;
partnershipCard32A.gb = 0;
partnershipCards[0][27] = partnershipCard32A;

var partnershipCard32B = new Object();
partnershipCard32B.title = "Endangered Species";
partnershipCard32B.text = "You and your family boycott palm oil products to help protect local tiger habitats from destruction, and in turn, protecting tigers from extinction.";
partnershipCard32B.impact = "Add 3 Health Points.";
partnershipCard32B.hp = 3;
partnershipCard32B.wp = 0;
partnershipCard32B.ep = 0;
partnershipCard32B.gb = 0;
partnershipCards[1][27] = partnershipCard32B;

var partnershipCard32C = new Object();
partnershipCard32C.title = "Endangered Species";
partnershipCard32C.text = "Your village agrees to protect an area of land inhabited by an endangered species, and you collectively work with your government to keep the species safe. Not only have you helped to save the species, you also bring more tourism into your village which in turn creates more jobs.";
partnershipCard32C.impact = "Add 3 Health Points and 3 Global Bucks";
partnershipCard32C.hp = 3;
partnershipCard32C.wp = 0;
partnershipCard32C.ep = 0;
partnershipCard32C.gb = 3;
partnershipCards[2][27] = partnershipCard32C;

// card 33
var partnershipCard33A = new Object();
partnershipCard33A.title = "Discrimination Against Women";
partnershipCard33A.text = "Your government passes a new law reducing gender discrimination in the workplace. As a result women get both paid and treated as equals.";
partnershipCard33A.impact = "Add 3 Global Bucks.";
partnershipCard33A.hp = 0;
partnershipCard33A.wp = 0;
partnershipCard33A.ep = 0;
partnershipCard33A.gb = 3;
partnershipCards[0][28] = partnershipCard33A;

var partnershipCard33B = new Object();
partnershipCard33B.title = "Discrimination Against Women";
partnershipCard33B.text = "In your city, the recently elected mayor decides to help promote the development of gender equality. This means that you now get paid a fair wage and feel generally safer on your way to and from work.";
partnershipCard33B.impact = "Add 3 Health Points and 1 Global Buck.";
partnershipCard33B.hp = 3;
partnershipCard33B.wp = 0;
partnershipCard33B.ep = 0;
partnershipCard33B.gb = 1;
partnershipCards[1][28] = partnershipCard33B;

var partnershipCard33C = new Object();
partnershipCard33C.title = "Discrimination Against Women";
partnershipCard33C.text = "An organization comes into your area and makes sure that all the women living there are allowed to go to school. This allows you to get an education to set yourself up for a better future.";
partnershipCard33C.impact = "Add 3 Global Bucks.";
partnershipCard33C.hp = 0;
partnershipCard33C.wp = 0;
partnershipCard33C.ep = 0;
partnershipCard33C.gb = 3;
partnershipCards[2][28] = partnershipCard33C;

// card 34
var partnershipCard34A = new Object();
partnershipCard34A.title = "";
partnershipCard34A.text = "";
partnershipCard34A.impact = "";
partnershipCard34A.hp = 0;
partnershipCard34A.wp = 0;
partnershipCard34A.ep = 0;
partnershipCard34A.gb = 0;
partnershipCards[0][29] = partnershipCard34A;

var partnershipCard34B = new Object();
partnershipCard34B.title = "";
partnershipCard34B.text = "";
partnershipCard34B.impact = "";
partnershipCard34B.hp = 0;
partnershipCard34B.wp = 0;
partnershipCard34B.ep = 0;
partnershipCard34B.gb = 0;
partnershipCards[1][29] = partnershipCard34B;

var partnershipCard34C = new Object();
partnershipCard34C.title = "";
partnershipCard34C.text = "";
partnershipCard34C.impact = "";
partnershipCard34C.hp = 0;
partnershipCard34C.wp = 0;
partnershipCard34C.ep = 0;
partnershipCard34C.gb = 0;
partnershipCards[2][29] = partnershipCard34C;

// card 35
var partnershipCard35A = new Object();
partnershipCard35A.title = "Government Elections";
partnershipCard35A.text = "Your government has increased transparency on its budget and the spending of each member of the government can now be seen by everyone. This increases government accountability and stops the government from lying to the public.";
partnershipCard35A.impact = "Add 3 Global Bucks.";
partnershipCard35A.hp = 0;
partnershipCard35A.wp = 0;
partnershipCard35A.ep = 0;
partnershipCard35A.gb = 3;
partnershipCards[0][30] = partnershipCard35A;

var partnershipCard35B = new Object();
partnershipCard35B.title = "Government Elections";
partnershipCard35B.text = "Your government has allowed all adults to vote in the next election. This means everybody has their interests represented by the government, making it possible to take different groups’ opinions and interests into account.";
partnershipCard35B.impact = "Add 2 Health Points.";
partnershipCard35B.hp = 2;
partnershipCard35B.wp = 0;
partnershipCard35B.ep = 0;
partnershipCard35B.gb = 0;
partnershipCards[1][30] = partnershipCard35B;

var partnershipCard35C = new Object();
partnershipCard35C.title = "Government Elections";
partnershipCard35C.text = "Through public pressure, your country has decided to allow public elections to decide the next government, removing the current dictator who has been in power for decades. This allows you to vote for a government which will represent your interests, which in turn improves the economy.";
partnershipCard35C.impact = "Add 2 Health Points and 2 Global Bucks.";
partnershipCard35C.hp = 2;
partnershipCard35C.wp = 0;
partnershipCard35C.ep = 0;
partnershipCard35C.gb = 2;
partnershipCards[2][30] = partnershipCard35C;

// card 36
var partnershipCard36A = new Object();
partnershipCard36A.title = "Power/Electricity";
partnershipCard36A.text = "Your family has recently bought solar panels and installed them on your roof.  This act will save your family money in the long term, as well as help the environment.";
partnershipCard36A.impact = "Add 2 Global Bucks and 1 Health Point.";
partnershipCard36A.hp = 1;
partnershipCard36A.wp = 0;
partnershipCard36A.ep = 0;
partnershipCard36A.gb = 2;
partnershipCards[0][31] = partnershipCard36A;

var partnershipCard36B = new Object();
partnershipCard36B.title = "Power/Electricity";
partnershipCard36B.text = "Your government has invested in solar and wind technology production in your country creating jobs and helping the air quality and environment since it means less coal fired electricity plants will be required.";
partnershipCard36B.impact = "Add 2 Global Bucks and 2 Health Points.";
partnershipCard36B.hp = 2;
partnershipCard36B.wp = 0;
partnershipCard36B.ep = 0;
partnershipCard36B.gb = 2;
partnershipCards[1][31] = partnershipCard36B;

var partnershipCard36C = new Object();
partnershipCard36C.title = "Power/Electricity";
partnershipCard36C.text = "An international aid organization provides everyone in your village a solar panel light. This allows you to study at night so you advance faster at school. The better educated you are, the better your chance to get out of poverty.";
partnershipCard36C.impact = "Add 3 Global Bucks and go up one Education Level";
partnershipCard36C.hp = 0;
partnershipCard36C.wp = 0;
partnershipCard36C.ep = 0;
partnershipCard36C.gb = 3;
partnershipCard36C.special = "gainEducationLevel";
partnershipCards[2][31] = partnershipCard36C;

// card 37
var partnershipCard37A = new Object();
partnershipCard37A.title = "Overfishing";
partnershipCard37A.text = "Your city has officially made the selling of shark fins and products containing shark fins illegal. Many sharks will now be saved from shark finning. Your city has contributed to a healthy ocean ecosystem thus securing a food source.";
partnershipCard37A.impact = "Add 2 Health Points.";
partnershipCard37A.hp = 2;
partnershipCard37A.wp = 0;
partnershipCard37A.ep = 0;
partnershipCard37A.gb = 0;
partnershipCards[0][32] = partnershipCard37A;

var partnershipCard37B = new Object();
partnershipCard37B.title = "Overfishing";
partnershipCard37B.text = "A certain species of fish on your coastline has been overfished and as a result your local government has put regulations in place protecting the population. Your government has contributed to a healthy ecosystem and has helped maintain a healthy environment.";
partnershipCard37B.impact = "Add 3 Health Points.";
partnershipCard37B.hp = 3;
partnershipCard37B.wp = 0;
partnershipCard37B.ep = 0;
partnershipCard37B.gb = 0;
partnershipCards[1][32] = partnershipCard37B;

var partnershipCard37C = new Object();
partnershipCard37C.title = "Overfishing";
partnershipCard37C.text = "The U.N. has banned hunting for sharksin certain ocean areas near your village. More sharks will now be protected from shark finning. This has contributed to a healthy ocean ecosystem, which in turn means more fish for your community.";
partnershipCard37C.impact = "Add 3 Health Points. ";
partnershipCard37C.hp = 3;
partnershipCard37C.wp = 0;
partnershipCard37C.ep = 0;
partnershipCard37C.gb = 0;
partnershipCards[2][32] = partnershipCard37C;

// card 38
var partnershipCard38A = new Object();
partnershipCard38A.title = "Environment";
partnershipCard38A.text = "A local organization has visited your school to educate your class on the importance of saving energy/water and recycling. You now know how to help protect the environment as well as how to save money on resources.";
partnershipCard38A.impact = "Add 2 Global Bucks and 2 Water Points.";
partnershipCard38A.hp = 0;
partnershipCard38A.wp = 2;
partnershipCard38A.ep = 0;
partnershipCard38A.gb = 2;
partnershipCards[0][33] = partnershipCard38A;

var partnershipCard38B = new Object();
partnershipCard38B.title = "Environment";
partnershipCard38B.text = "A recycling program has been put into action in your town. Not only will this keep your town cleaner, it will also decrease the amount of pollution in the streets and local river.";
partnershipCard38B.impact = "Add 1 Global Buck and 3 Water Points.";
partnershipCard38B.hp = 0;
partnershipCard38B.wp = 3;
partnershipCard38B.ep = 0;
partnershipCard38B.gb = 1;
partnershipCards[1][33] = partnershipCard38B;

var partnershipCard38C = new Object();
partnershipCard38C.title = "Environment";
partnershipCard38C.text = "A major oil company is planning on drilling for oil under a nearby forest. Your village comes together to form a petition and protest along with the help of an international partner. In the end, the company is denied the right to drill and your forest is saved.";
partnershipCard38C.impact = "Add 3 Health Points.";
partnershipCard38C.hp = 3;
partnershipCard38C.wp = 0;
partnershipCard38C.ep = 0;
partnershipCard38C.gb = 0;
partnershipCards[2][33] = partnershipCard38C;

// card 39
var partnershipCard39A = new Object();
partnershipCard39A.title = "Forestry";
partnershipCard39A.text = "A tree planting program has been started after an early snow storm caused a lot of damage to many trees across the city. This will help reduce carbon dioxide emissions as you now have more trees than you did even before the snow. Trees in a city are 12 times more effective at taking carbon out of atmosphere than rural trees.";
partnershipCard39A.impact = "Add 3 Health Points.";
partnershipCard39A.hp = 3;
partnershipCard39A.wp = 0;
partnershipCard39A.ep = 0;
partnershipCard39A.gb = 0;
partnershipCards[0][34] = partnershipCard39A;

var partnershipCard39B = new Object();
partnershipCard39B.title = "Forestry";
partnershipCard39B.text = "Your government stops removing deadwood from forests and allows the ecosystem to develop. This allows new plants to grow and reproduce in a natural way that doesn’t waste resources.";
partnershipCard39B.impact = "Add 3 Health Points.";
partnershipCard39B.hp = 3;
partnershipCard39B.wp = 0;
partnershipCard39B.ep = 0;
partnershipCard39B.gb = 0;
partnershipCards[1][34] = partnershipCard39B;

var partnershipCard39C = new Object();
partnershipCard39C.title = "Forestry";
partnershipCard39C.text = "Rainforest concern has purchased the majority of the rainforest around your village with money from donors in developed nations so that they can ensure the protection of the ecosystem.";
partnershipCard39C.impact = "Add 3 Health Points.";
partnershipCard39C.hp = 3;
partnershipCard39C.wp = 0;
partnershipCard39C.ep = 0;
partnershipCard39C.gb = 0;
partnershipCards[2][34] = partnershipCard39C;

// card 40
var partnershipCard40A = new Object();
partnershipCard40A.title = "Bullying";
partnershipCard40A.text = "Your school shows a presentation educating you about bullying. Afterwards, students begin to take action and stand up for those being bullied.  By stopping the abusers in a nonviolent manner, bullying in your school reduces by 50% making school a healthier place for everyone.";
partnershipCard40A.impact = "Add 2 Health Points and go up one education level.";
partnershipCard40A.hp = 2;
partnershipCard40A.wp = 0;
partnershipCard40A.ep = 0;
partnershipCard40A.gb = 0;
partnershipCard40A.special = "gainEducationLevel";
partnershipCards[0][35] = partnershipCard40A;

var partnershipCard40B = new Object();
partnershipCard40B.title = "Bullying";
partnershipCard40B.text = "You tell your parents that you are being bullied and they bring up the situation with the school counselor who speaks to you and the bully in an effort to understand and resolve the conflict.  Now you can go to school without the fear of being bullied.";
partnershipCard40B.impact = "Add 2 Health Points and go up one education level.";
partnershipCard40B.hp = 2;
partnershipCard40B.wp = 0;
partnershipCard40B.ep = 0;
partnershipCard40B.gb = 0;
partnershipCard40B.special = "gainEducationLevel";
partnershipCards[1][35] = partnershipCard40B;

var partnershipCard40C = new Object();
partnershipCard40C.title = "Bullying";
partnershipCard40C.text = "Right to Play presents your village with sports equipment, and uses play to educate and empower children and youth to overcome the effects of poverty, conflict and disease in disadvantaged communities.";
partnershipCard40C.impact = "Add 2 Health Points and go up one education level.";
partnershipCard40C.hp = 2;
partnershipCard40C.wp = 0;
partnershipCard40C.ep = 0;
partnershipCard40C.gb = 0;
partnershipCard40C.special = "gainEducationLevel";
partnershipCards[2][35] = partnershipCard40C;

// card 41
var partnershipCard41A = new Object();
partnershipCard41A.title = "Lack Of Education/Experience";
partnershipCard41A.text = "A guest speaker comes into your school that teaches you about people who live in developing nations and what you can do to support them in having a better quality of life.";
partnershipCard41A.impact = "Add 1 Education level and 2 Global Bucks.";
partnershipCard41A.hp = 0;
partnershipCard41A.wp = 0;
partnershipCard41A.ep = 0;
partnershipCard41A.gb = 2;
partnershipCard41A.special = "gainEducationLevel";
partnershipCards[0][36] = partnershipCard41A;

var partnershipCard41B = new Object();
partnershipCard41B.title = "Lack Of Education/Experience";
partnershipCard41B.text = "An organization comes into your country, teaching you about the human rights that you and everyone around you are entitled to. As a result, people are better able to demand better treatment from their government.";
partnershipCard41B.impact = "Add 1 Education Level and 3 Global Bucks.";
partnershipCard41B.hp = 0;
partnershipCard41B.wp = 0;
partnershipCard41B.ep = 0;
partnershipCard41B.gb = 3;
partnershipCard41B.special = "gainEducationLevel";
partnershipCards[1][36] = partnershipCard41B;

var partnershipCard41C = new Object();
partnershipCard41C.title = "Lack Of Education/Experience";
partnershipCard41C.text = "An organization comes into your village and teaches your community how to maintain a well. This improves your access to clean water along with your sanitation and hydration. Because everyone in the village is healthier and get sick less often, they are able to attend work and school more.";
partnershipCard41C.impact = "Add 1 Education Level and 3 Health Points.";
partnershipCard41C.hp = 3;
partnershipCard41C.wp = 0;
partnershipCard41C.ep = 0;
partnershipCard41C.gb = 0;
partnershipCard41C.special = "gainEducationLevel";
partnershipCards[2][36] = partnershipCard41C;

// card 42
var partnershipCard42A = new Object();
partnershipCard42A.title = "Injuries/Work";
partnershipCard42A.text = "Your mom gets an infection which requires her to go on a leave from work. Her free health care allowed her doctor to prescribe her antibiotics which enable her to return to work and help support and care for her family.";
partnershipCard42A.impact = "Add 2 Health Points.";
partnershipCard42A.hp = 2;
partnershipCard42A.wp = 0;
partnershipCard42A.ep = 0;
partnershipCard42A.gb = 0;
partnershipCards[0][37] = partnershipCard42A;

var partnershipCard42B = new Object();
partnershipCard42B.title = "Injuries/Work";
partnershipCard42B.text = "Your father breaks his leg at his work at the shipping yard and he can no longer handle his physically demanding job. While recovering he gets an office job that he can do while he has a broken leg. This allows your mother to continue taking care of your younger sister instead of going to work and you can freely go to school.";
partnershipCard42B.impact = "Add 3 Health Points.";
partnershipCard42B.hp = 3;
partnershipCard42B.wp = 0;
partnershipCard42B.ep = 0;
partnershipCard42B.gb = 0;
partnershipCards[1][37] = partnershipCard42B;

var partnershipCard42C = new Object();
partnershipCard42C.title = "Injuries/Work";
partnershipCard42C.text = "The UN comes in to help improve workplace conditions. The mine your father works in is now safe and you can go to school without worrying for his well-being.";
partnershipCard42C.impact = "Add 3 Health Points.";
partnershipCard42C.hp = 3;
partnershipCard42C.wp = 0;
partnershipCard42C.ep = 0;
partnershipCard42C.gb = 0;
partnershipCards[2][37] = partnershipCard42C;

// card 43
var partnershipCard43A = new Object();
partnershipCard43A.title = "Palm Oil";
partnershipCard43A.text = "Your teacher alerts your class about a petition that is protecting an endangered rain forest from being destructed and used as a palm oil plantation. You sign the petition, along with many of the kids in your class. You also make sure your family only buys products that either use sustainable palm oil or no palm oil at all.";
partnershipCard43A.impact = "Add 2 Health Points.";
partnershipCard43A.hp = 2;
partnershipCard43A.wp = 0;
partnershipCard43A.ep = 0;
partnershipCard43A.gb = 0;
partnershipCards[0][38] = partnershipCard43A;

var partnershipCard43B = new Object();
partnershipCard43B.title = "Palm Oil";
partnershipCard43B.text = "A major corporation is planning on tearing down a large area of rainforest for palm oil development. This rainforest is home to many endangered species. You decide to start a letter writing campaign to alert the government and major corporations about the importance of these rainforests.";
partnershipCard43B.impact = "Add 3 Health Points.";
partnershipCard43B.hp = 3;
partnershipCard43B.wp = 0;
partnershipCard43B.ep = 0;
partnershipCard43B.gb = 0;
partnershipCards[1][38] = partnershipCard43B;

var partnershipCard43C = new Object();
partnershipCard43C.title = "Palm Oil";
partnershipCard43C.text = "A large company is planning on the destruction of a nearby forest for the production of palm oil. Not only will this harm your village, everyone will be forced to evacuate. You start a local association that is working hard to raise global awareness about the destruction of rainforests for palm oil. Because you are organized, and the media is covering the situation, your government is forced to act.";
partnershipCard43C.impact = "Add 2 Global Bucks and 2 Health Points. ";
partnershipCard43C.hp = 2;
partnershipCard43C.wp = 0;
partnershipCard43C.ep = 0;
partnershipCard43C.gb = 2;
partnershipCards[2][38] = partnershipCard43C;

// card 44
var partnershipCard44A = new Object();
partnershipCard44A.title = "Working Conditions";
partnershipCard44A.text = "A workplace safety official comes into your office and inspects safety regulations. They find faulty wiring throughout the building.  In order to remain operational, your employer is forced to hire an electrician to replace the potentially life threatening wiring.  After the safety regulations are fulfilled, your workplace is now a safer place to do business.";
partnershipCard44A.impact = "Add 2 Health Points and 1 Global Buck.";
partnershipCard44A.hp = 2;
partnershipCard44A.wp = 0;
partnershipCard44A.ep = 0;
partnershipCard44A.gb = 1;
partnershipCards[0][39] = partnershipCard44A;

var partnershipCard44B = new Object();
partnershipCard44B.title = "Working Conditions";
partnershipCard44B.text = "For years you have been growing coffee beans for a company that pays you very poorly, but you continue because it is the only source of income for your family.  A different Fair Trade certified company recognizes your struggle and offers a new partnership with you where they pay you a fair wage for your coffee beans, allowing you to support your family.";
partnershipCard44B.impact = "Add 5 Global Bucks.";
partnershipCard44B.hp = 0;
partnershipCard44B.wp = 0;
partnershipCard44B.ep = 0;
partnershipCard44B.gb = 5;
partnershipCards[1][39] = partnershipCard44B;

var partnershipCard44C = new Object();
partnershipCard44C.title = "Working Conditions";
partnershipCard44C.text = "You run a farming operation in your town which provides food for most of the people in your community.  An organization gives you safer farming equipment which allows you to work more safely and efficiently by producing enough food to meet the needs of those around you.";
partnershipCard44C.impact = "Add 3 Global Bucks and 2 Health Points.";
partnershipCard44C.hp = 2;
partnershipCard44C.wp = 0;
partnershipCard44C.ep = 0;
partnershipCard44C.gb = 3;
partnershipCards[2][39] = partnershipCard44C;

// card 45
var partnershipCard45A = new Object();
partnershipCard45A.title = "Housing";
partnershipCard45A.text = "After you lose your job and end up on the streets, a very generous charity gives you a new home to live in so that you are no longer homeless. This will give you a second chance at life. You can now have time to do more work or even get a better education.";
partnershipCard45A.impact = "Add 4 Global Bucks and 2 Health Points.";
partnershipCard45A.hp = 2;
partnershipCard45A.wp = 0;
partnershipCard45A.ep = 0;
partnershipCard45A.gb = 4;
partnershipCards[0][40] = partnershipCard45A;

var partnershipCard45B = new Object();
partnershipCard45B.title = "Housing";
partnershipCard45B.text = "You live in an area that is at high risk for an earthquake. An organization comes into your community and reinforces many of the homes, making them more stable if an earthquake were to hit.";
partnershipCard45B.impact = "Add 3 Global Bucks and 2 Health Points.";
partnershipCard45B.hp = 2;
partnershipCard45B.wp = 0;
partnershipCard45B.ep = 0;
partnershipCard45B.gb = 3;
partnershipCards[1][40] = partnershipCard45B;

var partnershipCard45C = new Object();
partnershipCard45C.title = "Housing";
partnershipCard45C.text = "There was a tsunami on the coast of your country and your house has been completely washed away. Both organizations and developed nations send supplies and people to help you and your country recover from this natural disaster.";
partnershipCard45C.impact = "Add 2 Global Bucks and 2 Health Points.";
partnershipCard45C.hp = 2;
partnershipCard45C.wp = 0;
partnershipCard45C.ep = 0;
partnershipCard45C.gb = 2;
partnershipCards[2][40] = partnershipCard45C;

// card 46
var partnershipCard46A = new Object();
partnershipCard46A.title = "Global Warming/Climate Change";
partnershipCard46A.text = "Your government takes Climate Change as a very serious threat to the planet. They attend an international summit on Climate Change and, working with industry and environmental groups, design a plan to reduce carbon emissions while keeping your country’s economy strong.";
partnershipCard46A.impact = "Add 3 Health Points and 3 Water Points.";
partnershipCard46A.hp = 3;
partnershipCard46A.wp = 3;
partnershipCard46A.ep = 0;
partnershipCard46A.gb = 0;
partnershipCards[0][41] = partnershipCard46A;

var partnershipCard46B = new Object();
partnershipCard46B.title = "Global Warming/Climate Change";
partnershipCard46B.text = "Your government takes environmental action by putting a new law into effect that holds industries that cause pollution accountable for the damage they are doing to the environment.  Enforcing fines and substantially increased taxes, it encourages the companies who pollute to find more sustainable options and reduce their emissions.";
partnershipCard46B.impact = "Add 3 Health Points and 3 Water Points.";
partnershipCard46B.hp = 3;
partnershipCard46B.wp = 3;
partnershipCard46B.ep = 0;
partnershipCard46B.gb = 0;
partnershipCards[1][41] = partnershipCard46B;

var partnershipCard46C = new Object();
partnershipCard46C.title = "Global Warming/Climate Change";
partnershipCard46C.text = "Your government creates a new law where companies are only allowed to output a certain amount of greenhouse gases every year. This law creates a positive impact towards becoming a healthier and more developed nation.";
partnershipCard46C.impact = "Add 3 Health Points and 3 Water Points.";
partnershipCard46C.hp = 3;
partnershipCard46C.wp = 3;
partnershipCard46C.ep = 0;
partnershipCard46C.gb = 0;
partnershipCards[2][41] = partnershipCard46C;

// card 47
var partnershipCard47A = new Object();
partnershipCard47A.title = "Family Abuse";
partnershipCard47A.text = "You go to see a therapist to help you recover from a childhood of abuse. This helps you move on from the past and live a happier life in the future.";
partnershipCard47A.impact = "Add 3 Health Points.";
partnershipCard47A.hp = 3;
partnershipCard47A.wp = 0;
partnershipCard47A.ep = 0;
partnershipCard47A.gb = 0;
partnershipCards[0][42] = partnershipCard47A;

var partnershipCard47B = new Object();
partnershipCard47B.title = "Family Abuse";
partnershipCard47B.text = "Your school teacher has recently noticed scars and bruises on your arm and she contacts the police. The police protect you from your abusive parents and place you in a safe home.";
partnershipCard47B.impact = "Add 5 Health Points.";
partnershipCard47B.hp = 5;
partnershipCard47B.wp = 0;
partnershipCard47B.ep = 0;
partnershipCard47B.gb = 0;
partnershipCards[1][42] = partnershipCard47B;

var partnershipCard47C = new Object();
partnershipCard47C.title = "Family Abuse";
partnershipCard47C.text = "Your father has been having problems at work lately and he has taken some of it out on you. You seek refuge with another family who takes you in with open arms. You join their family business and earn enough money to support you and your new family.";
partnershipCard47C.impact = "Add 3 Global Bucks and 3 Health Points. ";
partnershipCard47C.hp = 3;
partnershipCard47C.wp = 0;
partnershipCard47C.ep = 0;
partnershipCard47C.gb = 3;
partnershipCards[2][42] = partnershipCard47C;

// card 48
var partnershipCard48A = new Object();
partnershipCard48A.title = "Lack of Resources";
partnershipCard48A.text = "You get loans from a microfinance organization called Kiva and are now able to purchase the supplies you need to expand your business. Over time this will allow you to create a better income for yourself and you will have access to all the resources you need to keep improving your sales.";
partnershipCard48A.impact = "Add 4 Global Bucks.";
partnershipCard48A.hp = 0;
partnershipCard48A.wp = 0;
partnershipCard48A.ep = 0;
partnershipCard48A.gb = 4;
partnershipCards[0][43] = partnershipCard48A;

var partnershipCard48B = new Object();
partnershipCard48B.title = "Lack of Resources";
partnershipCard48B.text = "Your country enters a trade agreement with another developed country and now you are able to purchase the supplies needed to start up your own jewelry business and support you and your family with a steady income.";
partnershipCard48B.impact = "Add 4 Global Bucks.";
partnershipCard48B.hp = 0;
partnershipCard48B.wp = 0;
partnershipCard48B.ep = 0;
partnershipCard48B.gb = 4;
partnershipCards[1][43] = partnershipCard48B;

var partnershipCard48C = new Object();
partnershipCard48C.title = "Lack of Resources";
partnershipCard48C.text = "You get loans from a microfinance organization called Kiva and are now able to purchase the supplies you need to expand your business. Over time this will allow you to create a better income for yourself and you will have access to all the resources you need to keep improving your sales.";
partnershipCard48C.impact = "Add 4 Global Bucks.";
partnershipCard48C.hp = 0;
partnershipCard48C.wp = 0;
partnershipCard48C.ep = 0;
partnershipCard48C.gb = 4;
partnershipCards[2][43] = partnershipCard48C;

// card 49
var partnershipCard49A = new Object();
partnershipCard49A.title = "Invasive Species";
partnershipCard49A.text = "The ISSG (Invasive Species Specialists Group) comes to your region to rehabilitate all of the local species. Without invasive species and pests farmers have an easier time to grow food and do not need to rely on pesticides and other unhealthy farming practices. ";
partnershipCard49A.impact = "Add 5 Health Points.";
partnershipCard49A.hp = 5;
partnershipCard49A.wp = 0;
partnershipCard49A.ep = 0;
partnershipCard49A.gb = 0;
partnershipCards[0][44] = partnershipCard49A;

var partnershipCard49B = new Object();
partnershipCard49B.title = "Invasive Species";
partnershipCard49B.text = "The National Strategy Plan for Invasive Species has come to your region and are rehabilitating your local species. Without pests farmers have an easier time to grow food and do not need to rely on pesticides and other unhealthy farming practices.";
partnershipCard49B.impact = "Add 4 Health Points.";
partnershipCard49B.hp = 4;
partnershipCard49B.wp = 0;
partnershipCard49B.ep = 0;
partnershipCard49B.gb = 0;
partnershipCards[1][44] = partnershipCard49B;

var partnershipCard49C = new Object();
partnershipCard49C.title = "Invasive Species";
partnershipCard49C.text = "The organization GISP (Global Invasive Species Programme) came to your village and are helping relocate your local invasive species. Without pests farmers have an easier time to grow food and do not need to rely on pesticides and other unhealthy farming practices.";
partnershipCard49C.impact = "Add 5 Health Points.";
partnershipCard49C.hp = 5;
partnershipCard49C.wp = 0;
partnershipCard49C.ep = 0;
partnershipCard49C.gb = 0;
partnershipCards[2][44] = partnershipCard49C;

// card 50
var partnershipCard50A = new Object();
partnershipCard50A.title = "Fisheries Decline";
partnershipCard50A.text = "Your local grocery store is purchasing fish that comes from sustainably managed fishing industries that are certified by the Marine Stewardship Council. You are supporting sustainable fish populations and a healthy ocean. This improves your quality of water and seafood.";
partnershipCard50A.impact = "Add 3 Health Points and 3 Water Points.";
partnershipCard50A.hp = 3;
partnershipCard50A.wp = 3;
partnershipCard50A.ep = 0;
partnershipCard50A.gb = 0;
partnershipCards[0][45] = partnershipCard50A;

var partnershipCard50B = new Object();
partnershipCard50B.title = "Fisheries Decline";
partnershipCard50B.text = "With corporations respecting protected marine zones, populations of fish nearby are increasing which raises your countries’ local businesses’ fish quotas.";
partnershipCard50B.impact = "Add 3 Global Bucks and 2 Health Points.";
partnershipCard50B.hp = 2;
partnershipCard50B.wp = 0;
partnershipCard50B.ep = 0;
partnershipCard50B.gb = 3;
partnershipCards[1][45] = partnershipCard50B;

var partnershipCard50C = new Object();
partnershipCard50C.title = "Fisheries Decline";
partnershipCard50C.text = "Due to an international agreement to not catch endangered fish populations on your country's coastline, your tourism industry for diving and sea exploration has rebounded and you can earn an income.";
partnershipCard50C.impact = "Add 4 Global Bucks and 2 Water points.";
partnershipCard50C.hp = 0;
partnershipCard50C.wp = 2;
partnershipCard50C.ep = 0;
partnershipCard50C.gb = 4;
partnershipCards[2][45] = partnershipCard50C;

// card 51
var partnershipCard51A = new Object();
partnershipCard51A.title = "Access to power";
partnershipCard51A.text = "Your community gains access to hydro and solar power in combination with natural gas resources. Because of the new options for clean power you can rely less upon fossil fuels and you can make a positive impact on pollution.";
partnershipCard51A.impact = "Add 1 Global Buck and 2 Health Points.";
partnershipCard51A.hp = 2;
partnershipCard51A.wp = 0;
partnershipCard51A.ep = 0;
partnershipCard51A.gb = 1;
partnershipCards[0][46] = partnershipCard51A;

var partnershipCard51B = new Object();
partnershipCard51B.title = "Access to power";
partnershipCard51B.text = "You get a new power grid in your community and can now access electricity in a cheaper and more efficient manner.";
partnershipCard51B.impact = "Add 2 Global Bucks.";
partnershipCard51B.hp = 0;
partnershipCard51B.wp = 0;
partnershipCard51B.ep = 0;
partnershipCard51B.gb = 2;
partnershipCards[1][46] = partnershipCard51B;

var partnershipCard51C = new Object();
partnershipCard51C.title = "Access to power";
partnershipCard51C.text = "An international aid organization provides every home in your village with solar powered lights. This allows students to study at night so they can advance faster at school. It is also much safer, healthier, and more environmentally friendly than the kerosene lamps people in the village were burning previously.";
partnershipCard51C.impact = "Add 3 Global Bucks and go up 1 education level.";
partnershipCard51C.hp = 0;
partnershipCard51C.wp = 0;
partnershipCard51C.ep = 0;
partnershipCard51C.gb = 3;
partnershipCard51C.special = "gainEducationLevel";
partnershipCards[2][46] = partnershipCard51C;

// card 52
var partnershipCard52A = new Object();
partnershipCard52A.title = "Refugees";
partnershipCard52A.text = "Your country has designed a model for incorporating refugees which is admired by other countries. Although it is not simple, your country has improved the lives of thousand of immigrants fleeing violence, conflict, human rights violations, and persecution.";
partnershipCard52A.impact = "Add 2 Health Points and 2 Global Bucks.";
partnershipCard52A.hp = 2;
partnershipCard52A.wp = 0;
partnershipCard52A.ep = 0;
partnershipCard52A.gb = 2;
partnershipCards[0][47] = partnershipCard52A;

var partnershipCard52B = new Object();
partnershipCard52B.title = "Refugees";
partnershipCard52B.text = "Your country has received funding and volunteers from the UN to build better refugee camps in order to adequately house the refugee population that is in your country.";
partnershipCard52B.impact = "Add 2 Health points and 2 Global Bucks.";
partnershipCard52B.hp = 2;
partnershipCard52B.wp = 0;
partnershipCard52B.ep = 0;
partnershipCard52B.gb = 2;
partnershipCards[1][47] = partnershipCard52B;

var partnershipCard52C = new Object();
partnershipCard52C.title = "Refugees";
partnershipCard52C.text = "You are able to move back to your home after a civil war reaches a peaceful end. You reconnect with your family that was separated years ago.";
partnershipCard52C.impact = "Add 2 Health Points and 2 Global Bucks.";
partnershipCard52C.hp = 2;
partnershipCard52C.wp = 0;
partnershipCard52C.ep = 0;
partnershipCard52C.gb = 2;
partnershipCards[2][47] = partnershipCard52C;

// card 53
var partnershipCard53A = new Object();
partnershipCard53A.title = "Vaccination Access";
partnershipCard53A.text = "Your country has a universal healthcare system and pays for all of its citizens’ vaccinations. This helps save money on hospital resources in the future. You are safe from contracting many diseases now that you are vaccinated.";
partnershipCard53A.impact = "Add 4 Health Points.";
partnershipCard53A.hp = 4;
partnershipCard53A.wp = 0;
partnershipCard53A.ep = 0;
partnershipCard53A.gb = 0;
partnershipCards[0][48] = partnershipCard53A;

var partnershipCard53B = new Object();
partnershipCard53B.title = "Vaccination Access";
partnershipCard53B.text = "Your country is beginning to subsidize vaccinations for children. This improves overall life expectancy and helps the children avoid getting sick so they can go to school more frequently, improving their quality of life. It also reduces demands on your already over-taxed medical system.";
partnershipCard53B.impact = "Add 4 Health Points.";
partnershipCard53B.hp = 4;
partnershipCard53B.wp = 0;
partnershipCard53B.ep = 0;
partnershipCard53B.gb = 0;
partnershipCards[1][48] = partnershipCard53B;

var partnershipCard53C = new Object();
partnershipCard53C.title = "Vaccination Access";
partnershipCard53C.text = "A NGO (Non-Government Organization) comes to your community and gives free vaccinations for diphtheria and it is now rare for somebody to contract the illness. Health is at an all-time high in your community. This also means people are sick less often and can attend work and school more frequently. Because of this, they earn more money and advance their education faster.";
partnershipCard53C.impact = "Add 4 Health Points, 2 Global Bucks, and go up 1 education level.";
partnershipCard53C.hp = 4;
partnershipCard53C.wp = 0;
partnershipCard53C.ep = 0;
partnershipCard53C.gb = 2;
partnershipCard53C.special = "gainEducationLevel";
partnershipCards[2][48] = partnershipCard53C;

// card 54
var partnershipCard54A = new Object();
partnershipCard54A.title = "Obesity/Recreation";
partnershipCard54A.text = "Your country implements a program promoting physical activity to improve the health and lifestyle of the general population. This means everyone is getting enough exercise to have an elevated heart rate for a minimum of 150 minutes per week (at least 20 minutes per day).";
partnershipCard54A.impact = "Add 3 Health Points.";
partnershipCard54A.hp = 3;
partnershipCard54A.wp = 0;
partnershipCard54A.ep = 0;
partnershipCard54A.gb = 0;
partnershipCards[0][49] = partnershipCard54A;

var partnershipCard54B = new Object();
partnershipCard54B.title = "Obesity/Recreation";
partnershipCard54B.text = "Your country implements a program promoting physical activity to improve the health and lifestyle of the general population. This means everyone is getting enough exercise to have an elevated heart rate for a minimum of 150 minutes per week (at least 20 minutes per day).";
partnershipCard54B.impact = "Add 3 Health Points.";
partnershipCard54B.hp = 3;
partnershipCard54B.wp = 0;
partnershipCard54B.ep = 0;
partnershipCard54B.gb = 0;
partnershipCards[1][49] = partnershipCard54B;

var partnershipCard54C = new Object();
partnershipCard54C.title = "Obesity/Recreation";
partnershipCard54C.text = "Right to Play use play to educate and empower children and youth to overcome the effects of poverty, conflict and disease in disadvantaged communities. This makes the young people in your community healthier, happier, and better able to cope with life.";
partnershipCard54C.impact = "Add 3 Health Points and go up 1 education level.";
partnershipCard54C.hp = 3;
partnershipCard54C.wp = 0;
partnershipCard54C.ep = 0;
partnershipCard54C.gb = 0;
partnershipCard54C.special = "gainEducationLevel";
partnershipCards[2][49] = partnershipCard54C;

// card 55
var partnershipCard55A = new Object();
partnershipCard55A.title = "Habitat Destruction";
partnershipCard55A.text = "Your government has just secured a large plot of land that will be used as a nature reserve. This allows a native species near extinction to regain a healthy population.";
partnershipCard55A.impact = "Add 3 Health Points.";
partnershipCard55A.hp = 3;
partnershipCard55A.wp = 0;
partnershipCard55A.ep = 0;
partnershipCard55A.gb = 0;
partnershipCards[0][50] = partnershipCard55A;

var partnershipCard55B = new Object();
partnershipCard55B.title = "Habitat Destruction";
partnershipCard55B.text = "Your government enacts a policy that regulates how many wolves can be hunted. Now, with healthy populations of wolves in the forests, they help balance other species to create a healthy ecosystem. This alsoprevents huge numbers of deer from eating your crops or starving to death.";
partnershipCard55B.impact = "Add 3 Health Points.";
partnershipCard55B.hp = 3;
partnershipCard55B.wp = 0;
partnershipCard55B.ep = 0;
partnershipCard55B.gb = 0;
partnershipCards[1][50] = partnershipCard55B;

var partnershipCard55C = new Object();
partnershipCard55C.title = "Habitat Destruction";
partnershipCard55C.text = "A transnational corporation has agreed to plant a tree belt to combat desertification in exchange for using local resources. This has a verypositive effect. More nature for wildlife to live which increases tourism to the region, a healthier environment for the people who live in the area, and a steady income for your community.";
partnershipCard55C.impact = "Add 3 Global Bucks and 2 Health Points.";
partnershipCard55C.hp = 2;
partnershipCard55C.wp = 0;
partnershipCard55C.ep = 0;
partnershipCard55C.gb = 3;
partnershipCards[2][50] = partnershipCard55C;

// card 56
var partnershipCard56A = new Object();
partnershipCard56A.title = "Ivory Trade";
partnershipCard56A.text = "The World Wildlife Fund chapter in your country has produced advertisements about how ivory products lead to the endangerment of elephant populations. You are now better informed about the product and its negative effect in the world.";
partnershipCard56A.impact = "Add 1 Education Level and 2 Global Bucks.";
partnershipCard56A.hp = 0;
partnershipCard56A.wp = 0;
partnershipCard56A.ep = 0;
partnershipCard56A.gb = 2;
partnershipCard56A.special = "gainEducationLevel";
partnershipCards[0][51] = partnershipCard56A;

var partnershipCard56B = new Object();
partnershipCard56B.title = "Ivory Trade";
partnershipCard56B.text = "Your country’s trade enforcement agency acquires better funding. Now the trade of ivory products is halted throughout your country which improves your country’s international reputation and provides more jobs within the legal trading business.";
partnershipCard56B.impact = "Add 3 Global Bucks.";
partnershipCard56B.hp = 0;
partnershipCard56B.wp = 0;
partnershipCard56B.ep = 0;
partnershipCard56B.gb = 3;
partnershipCards[1][51] = partnershipCard56B;

var partnershipCard56C = new Object();
partnershipCard56C.title = "Ivory Trade";
partnershipCard56C.text = "The international community has strengthened its trade policies and enforcement. Now poachers are not able to transport ivory across your country's borders. This leads to a long term increase in elephant populations, which helps your community’s tourism income.";
partnershipCard56C.impact = "Add 3 Global Bucks.";
partnershipCard56C.hp = 0;
partnershipCard56C.wp = 0;
partnershipCard56C.ep = 0;
partnershipCard56C.gb = 3;
partnershipCards[2][51] = partnershipCard56C;

// card 57
var partnershipCard57A = new Object();
partnershipCard57A.title = "Overpopulation";
partnershipCard57A.text = "Family’s in your community plan to have smaller, healthier families. This stable population means that things like education and health care are able to be provided for everyone. It also means that more of the issues in the community can be dealt with.";
partnershipCard57A.impact = "Add 4 Health Points.";
partnershipCard57A.hp = 4;
partnershipCard57A.wp = 0;
partnershipCard57A.ep = 0;
partnershipCard57A.gb = 0;
partnershipCards[0][52] = partnershipCard57A;

var partnershipCard57B = new Object();
partnershipCard57B.title = "Overpopulation";
partnershipCard57B.text = "Family’s in your community plan to have smaller, healthier families. This stable population means that things like education and health care are able to be provided for everyone. It also means that more of the issues in the community can be dealt with.";
partnershipCard57B.impact = "Add 4 Health Points.";
partnershipCard57B.hp = 4;
partnershipCard57B.wp = 0;
partnershipCard57B.ep = 0;
partnershipCard57B.gb = 0;
partnershipCards[1][52] = partnershipCard57B;

var partnershipCard57C = new Object();
partnershipCard57C.title = "Overpopulation";
partnershipCard57C.text = "Family’s in your community plan to have smaller, healthier families. This stable population means that things like education and health care are able to be provided for everyone. It also means that more of the issues in the community can be dealt with.";
partnershipCard57C.impact = "Add 4 Health Points.";
partnershipCard57C.hp = 4;
partnershipCard57C.wp = 0;
partnershipCard57C.ep = 0;
partnershipCard57C.gb = 0;
partnershipCards[2][52] = partnershipCard57C;

// card 58
var partnershipCard58A = new Object();
partnershipCard58A.title = "Education Funding";
partnershipCard58A.text = "Your school uses its budget to cut down class sizes and make more learning resources available to you. This allows you to get more help from teachers, to understand concepts more easily, and you get distracted less than you used to.";
partnershipCard58A.impact = "Add 1 Education Level.";
partnershipCard58A.hp = 0;
partnershipCard58A.wp = 0;
partnershipCard58A.ep = 0;
partnershipCard58A.gb = 0;
partnershipCard58A.special = "gainEducationLevel";
partnershipCards[0][53] = partnershipCard58A;

var partnershipCard58B = new Object();
partnershipCard58B.title = "Education Funding";
partnershipCard58B.text = "An international aid organization gives your school enough money to open another classroom and higher another teacher. Your previously very large class is split in two so that it isn’t as crowded. This allows you to get more help from teachers and you get distracted less often.";
partnershipCard58B.impact = "Add 1 Education Level.";
partnershipCard58B.hp = 0;
partnershipCard58B.wp = 0;
partnershipCard58B.ep = 0;
partnershipCard58B.gb = 0;
partnershipCard58B.special = "gainEducationLevel";
partnershipCards[1][53] = partnershipCard58B;

var partnershipCard58C = new Object();
partnershipCard58C.title = "Education Funding";
partnershipCard58C.text = "An anonymous donorinternational aid organization gives your school enough money to open another classroom and higher another teacher. Your previously very large class is split in two so that it isn’t as crowded. This allows you to get more help from teachers and you get distracted less often.";
partnershipCard58C.impact = "Add 2 Education Levels.";
partnershipCard58C.hp = 0;
partnershipCard58C.wp = 0;
partnershipCard58C.ep = 0;
partnershipCard58C.gb = 0;
partnershipCard58C.special = "gain2EductionalLevels";
partnershipCards[2][53] = partnershipCard58C;

// card 59
var partnershipCard59A = new Object();
partnershipCard59A.title = "Shark Finning";
partnershipCard59A.text = "You join an organization working to ban shark finning. You begin going to schools, educating students on the consequences of shark finning so they understand why it’s important to protect sharks and the oceans.";
partnershipCard59A.impact = "Add 3 Water Points and 1 Education Level.";
partnershipCard59A.hp = 0;
partnershipCard59A.wp = 3;
partnershipCard59A.ep = 0;
partnershipCard59A.gb = 0;
partnershipCard59A.special = "gainEducationLevel";
partnershipCards[0][54] = partnershipCard59A;

var partnershipCard59B = new Object();
partnershipCard59B.title = "Shark Finning";
partnershipCard59B.text = "You join an organization working to ban against shark finning. Y and you begin going to schools, educating students on the consequences of shark finning so they understand why it’s wrong to purchase fins.important to protect sharks and the oceans.";
partnershipCard59B.impact = "Add 3 Water Points and 1 Education Level.";
partnershipCard59B.hp = 0;
partnershipCard59B.wp = 3;
partnershipCard59B.ep = 0;
partnershipCard59B.gb = 0;
partnershipCard59B.special = "gainEducationLevel";
partnershipCards[1][54] = partnershipCard59B;

var partnershipCard59C = new Object();
partnershipCard59C.title = "Shark Finning";
partnershipCard59C.text = "Shark finning is banned in your country and the ocean's ecosystem is rebalanced, producing more fish for your fisherman to catch, so they can provide more food for your village.";
partnershipCard59C.impact = "Add 3 Water Points and 3 Health Points.";
partnershipCard59C.hp = 3;
partnershipCard59C.wp = 3;
partnershipCard59C.ep = 0;
partnershipCard59C.gb = 0;
partnershipCards[2][54] = partnershipCard59C;

// card 60
var partnershipCard60A = new Object();
partnershipCard60A.title = "Ocean Acidification";
partnershipCard60A.text = "Your country’s government has made industries reduce their carbon dioxide production through subsidizing carbon capture programs. Now the air quality is better, and in addition, this helps slow down acidification within the world’s oceans. With healthier oceans comes healthier food sources.";
partnershipCard60A.impact = "Add 3 Health Points and 3 Water Points.";
partnershipCard60A.hp = 3;
partnershipCard60A.wp = 3;
partnershipCard60A.ep = 0;
partnershipCard60A.gb = 0;
partnershipCards[0][55] = partnershipCard60A;

var partnershipCard60B = new Object();
partnershipCard60B.title = "Ocean Acidification";
partnershipCard60B.text = "To lower carbon dioxide production, your government has proactively invested in a good public transport system. Now you don’t have to buy a car. Another side effect is that this has helped slow ocean acidification, which helps create and maintain healthier oceans.";
partnershipCard60B.impact = "Add 2 Global Bucks and 2 Health Points.";
partnershipCard60B.hp = 2;
partnershipCard60B.wp = 0;
partnershipCard60B.ep = 0;
partnershipCard60B.gb = 2;
partnershipCards[1][55] = partnershipCard60B;

var partnershipCard60C = new Object();
partnershipCard60C.title = "Ocean Acidification";
partnershipCard60C.text = "Through international agreements made possible with the UN, countries have been reducing their carbon dioxide output. This has slowed the process of ocean acidification. That progress made an impact of directly increasing fish population numbers near your country, therefore helping the fishing industry.";
partnershipCard60C.impact = "Add 4 health points.";
partnershipCard60C.hp = 4;
partnershipCard60C.wp = 0;
partnershipCard60C.ep = 0;
partnershipCard60C.gb = 0;
partnershipCards[2][55] = partnershipCard60C;

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
 
