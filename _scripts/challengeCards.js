/**
 * @author Glen
 */

var challengeCards = new Array();
challengeCards[0] = new Array();
challengeCards[1] = new Array();
challengeCards[2] = new Array();


//var challengeCard = new Object();
var challengeCard1 = new Object();
var challengeCard2 = new Object();
var challengeCard3 = new Object();
var challengeCard4 = new Object();

challengeCard1.title = "Soil Erosion";
challengeCard1.text = "Torrential rain washes your topsoil away. This leads to a poor harvest. Learning better agricultural techniques will help.";
challengeCard1.impact = "Lose 3 health points and $3 Global Bucks";
challengeCard1.hp = -3;
challengeCard1.wp = 0;
challengeCard1.ep = 0;
challengeCard1.gb = -3;
challengeCards[0][0] = challengeCard1;

challengeCard2.title = "Fetch Water";
challengeCard2.text = "You miss school to carry water for your family.";
challengeCard2.impact = "Lose 3 education points.";
challengeCard2.hp = 0;
challengeCard2.wp = 0;
challengeCard2.ep = -3;
challengeCard2.gb = 0;
challengeCards[0][1] = challengeCard2;

challengeCard3.title = "WAR!!!!!";
challengeCard3.text = "Your crops are destroyed. Your country spends money on weapons for the military instead of development. A famine hits your country.";
challengeCard3.impact = "Lose 5 health points and $15 Global Bucks";
challengeCard3.hp = -5;
challengeCard3.wp = 0;
challengeCard3.ep = 0;
challengeCard3.gb = -15;
challengeCards[0][2] = challengeCard3;

challengeCard4.title = "Your village is flooded.";
challengeCard4.text = "Flooding increases the health threat from inadequate drinking water and sanitation systems. Water supplies can become contaminated. Almost 2 Billion people were affected by a natural disaster in the last 10 years.";
challengeCard4.impact = "Lose 2 health points, 2 water points and $2 Global Bucks.";
challengeCard4.hp = -2;
challengeCard4.wp = -2;
challengeCard4.ep = 0;
challengeCard4.gb = -2;
challengeCards[0][3] = challengeCard4;



