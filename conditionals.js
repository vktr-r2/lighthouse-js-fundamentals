const raining = false;  //Intro and define raining var

const cold = true; //Intro and define cold var

// Raining IF statement - should I bring umbrella?
if (raining) {
  console.log('Take an umbrella!');
}

//Cold IF statement - should I bring scarf?
if (cold) {
  console.log('Take a scarf!');
}

// Default log - now I'm ready
console.log('Now you\'re ready :)');



//Skip line in log for terminal readability
console.log('\n');



//Intro and define frigid var
const frigid = false;

//If/Else on whether I need my parka based on frigid var
if (frigid) {
  console.log('Time to bring out that parka.');
} else {
  console.log('Your normal jacket should be fine today.');
}



//Skip line in log for terminal readability
console.log('\n');



//Intro and define temp
const temp = 40

//If/Else on what to wear based on temp
if (temp < 5) {
  console.log('Full winter gear today!');
} else if (temp < 12) {
  console.log('Light jacket should be just fine');
} else {
  console.log('Ooo baby, we golfin :)');
}



//Skip line in log for terminal readability
console.log('\n');



//If/Else to determine if we should even be going outside
if (temp <-35 || temp >35) {
  console.log('On second though, maybe we should stay indoors today.');
}



//Skip line in log for terminal readability
console.log('\n');



//If/Else using logical not to determine if umbrella is needed
if (!raining) {
  console.log('Leave your umbrella at home today.');
}