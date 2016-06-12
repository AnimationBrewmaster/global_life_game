// first array digit is country code (0-2)
// #3 array is for generic game facts


function InitGameTips() {
	
	// create arrays for each country
var arrGameTips = [];
	arrGameTips[0] = [];
	arrGameTips[1] = [];
	arrGameTips[2] = [];
	arrGameTips[3] = [];
	
    console.log("intitializing game tips");
    arrGameTips[0][0] = "The first thing you should do is buy a bike from the market. The bike will allow you to travel much faster.";
    arrGameTips[0][1] = "Education points equals more work, and more work equals more money, and more money equals better opportunities.";
    arrGameTips[0][2] = "As County A, the game is much easier than in Country B or C.";
    arrGameTips[0][3] = "The second thing you should do is buy education. Go back and forth from education to job to make lots of money.";
    arrGameTips[0][4] = "Once you have reached an Intelligence level of 31 or more, start saving for indoor plumbing.";
    arrGameTips[0][5] = "Don’t underestimate the importance of education.";
    arrGameTips[0][6] = "Compared to the others, seeking sanitation is not as important in County A.";
    arrGameTips[0][7] = "Getting medical help is still important. Buy medicine or soap just in case you get sick.";
    arrGameTips[0][8] = "If you are running low on water and have enough money, buy a Biosand Filter. This will allow you to get clean water safely.";
    arrGameTips[0][9] = "Only if you get below 10 health and/or water points should you then go to the farm or river.";
    arrGameTips[0][10] = "Although you can’t do so in the game, try to donate money and resources to actual people living in developing countries.";
    arrGameTips[1][0] = "Prioritize getting your food and water levels up.";
    arrGameTips[1][1] = "Get to the market to buy any essential supplies.";
    arrGameTips[1][2] = "One you have enough health and water for the next couple of turns, try to get some education points.";
    arrGameTips[1][3] = "Your survival should be your priority. Prioritize getting health, water, and medicine instead of education or things from the market";
    arrGameTips[1][4] = "Purchase a bar of soap and a water purification tablet from the store. These things can save your life.";
    arrGameTips[1][5] = "Buying a bucket is very useful if you are low on water.";
    arrGameTips[1][6] = "If you are low on health points and money, you can go to the toilet to get some free health points.";
    arrGameTips[1][7] = "Once you have sustainable health points and water points, start working on your education. ";
    arrGameTips[1][8] = "After you make enough money, buying a bike can help you get food and water faster.";
    arrGameTips[1][9] = "Buying a biosand filter can really help you stay healthy and get lots of clean water.";
    arrGameTips[1][10] = "Seeing how much help a biosand filter can be, consider how much a biosand filter would help people in real life that need clean water.";
    arrGameTips[2][0] = "You must always have an eye on your health and water for it can drop quite fast with any waterborne diseases. Especially when you are far away from water or food.";
    arrGameTips[2][1] = "Buying a cheap water sanitation tablet can save you from sickness.";
    arrGameTips[2][2] = "An education is less important than proper sanitation, medicine and food.";
    arrGameTips[2][3] = "Don’t underestimate the crippling power of diseases and parasites.";
    arrGameTips[2][4] = "A stable job is the gateway to a better quality of life.";
    arrGameTips[2][5] = "Get your priorities straight: if you are at the store, know what your needs are. For instance, if you have only a few health points left, get a first aid kit.";
    arrGameTips[2][6] = "For every place you can go, there is always a risk of it not working in your favor.";
    arrGameTips[2][7] = "After you are completely healthy and have illness resistance, you could consider purchasing a bike to get around faster.";
    arrGameTips[2][8] = "Being able to filter water properly is a huge plus.";
    arrGameTips[2][9] = "If you live in County C, you should only even consider getting plumbing if you are healthy, hydrated and have an intelligence level of 31 or more.";
    arrGameTips[2][10] = "It’s easy to see how hard it is to survive in a developing country, so try and donate what you can to people in those countries to help them survive.";
    arrGameTips[3][0] = "Half the world lives on less than $2.50 a day.";
    arrGameTips[3][1] = "22,000 kids die everyday due to extreme poverty.";
    arrGameTips[3][2] = "A quarter of all human beings live without electricity.";
    arrGameTips[3][3] = "The vast majority of the world, 80%, lives on less than $10 a day.";
    arrGameTips[3][4] = "The World Food Programme says, Hunger is the number one cause of death in the world, killing more than HIV/AIDS, malaria, and tuberculosis combined.";
    arrGameTips[3][5] = "Poverty is not just restricted to foreign countries. In Canada, 15% of people have low income.";
    arrGameTips[3][6] = "1/4 of all humans live without electricity — approximately 1.6 billion people.";
    arrGameTips[3][7] = "Conflict is also a cause of poverty and hunger — in Pakistan, 28 million people are affected severely by conflict.";
    arrGameTips[3][8] = "More than one-third of Africa lacks clean water. That’s nearly the population of the United States and Canada combined.";
    arrGameTips[3][9] = "165 million people worldwide suffer from childhood malnutrition.";
    arrGameTips[3][10] = "More people have access to a cell phone then a toilet.";
    
    var startingGameTip = Math.round(Math.random() * arrGameTips[0].length-1);
    console.log("Starting Game Tip = " + startingGameTip);
    //console.log(arrGameTips);
}
