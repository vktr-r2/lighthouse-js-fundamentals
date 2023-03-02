/* 
- Declare function with array and value as parameters
- Iterate through array.  If i = value then store i in a let variable
- After iteration, return/log let variable
*/

//Define function - takes array and value as parameters
const lastIndexOf = (array, value) => {
  //Intro runningIndex variable where index will be stored/updated
  // + intro tally variable to check if value occurs in array
  let runningIndex;
  let tally = 0;
  //For loop to iterate through array passed to function
  for (let i = 0; i < array.length; i++) {
    //If statement to check if array element equals value.  If true, update runningIndex var
    if (array[i] === value) {
      runningIndex = i;
      tally += 1;
    }
    //Second if statement to check if value was found in array or not.  If true, retun runningIndex var
  }  if (tally > 0) {
  return runningIndex;
  } else {
    return -1;
  }
}

