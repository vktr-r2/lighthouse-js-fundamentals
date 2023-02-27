// Define isOdd function - takes num as parameter, 
//checks to make sure that (num % 2) does not equal 0
const isOdd = function(num) {
  return num % 2 != 0;
}

//Log to see if function works as expected
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
