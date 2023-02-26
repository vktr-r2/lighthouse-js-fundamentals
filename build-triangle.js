
//Provided function that prints asterisks based on length needed
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

//Declare and definte buildTriangle function, takes height as argument/parameter
const buildTriangle = (height) => {
  // Introduce line string as empty.
  let line = '';
  // Into lineNum variable as control variable to be used in for loop
  let lineNum = 1
  // For Loop: Takes lineNum starting at 1, updates line string variable with appropriate number of asterisks using pre-existing makeLine function, then increments lien by 1
  for (lineNum; lineNum <= height; lineNum++) {
      line = line + makeLine(lineNum);
  }
  // Return the line that was just made using the for loop + makeLine function
  return line;
} 

console.log(buildTriangle(10));