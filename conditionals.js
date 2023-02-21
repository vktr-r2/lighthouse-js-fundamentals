const raining = true;  //Intro and define raining var

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



console.log('\n');



//Intro and define frigid var
const frigid = false;

//If/Else on whether I need my parka based on frigid var
if (frigid) {
  console.log('Time to bring out that parka.');
} else {
  console.log('Your normal jacket should be fine today.');
}


console.log('\n');


//Intro and define temp
const temp = 12

//If/Else on what to wear based on temp
if (temp < 0) {
  console.log('Full winter gear today!');
} else if (temp < 12) {
  console.log('Light jacket should be just fine');
} else {
  console.log('Ooo baby, we golfing :)');
}