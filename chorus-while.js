
//Define chorus string
const chorus = 'Let\'s dance!'

//Introduce 'repeat' as loop condition variable
let repeat = 0;

//While loop
while (repeat < 10) {
  console.log(chorus);
  repeat ++;
}

//String that will end the chorus
console.log('Until the sun comes up!');


//New line string for readability in Node
console.log('\n');



//NESTED WHILE+IF LOOP

//Intro loop condition variable
let repeat2 = 0;

//While loop to repeat chorus 10 times
while (repeat2 < 10) {
  //If loop to remind singer after 5 repeats of chorus they should change key
  if (repeat2 === 5) {
    console.log('*change key*');
  }
  console.log(chorus);
  repeat2 ++;
}

//String that will end the chorus
console.log('Until the sun comes up!');

