//Array that lists direction moves that the parade route will take
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

//Declare finalPosition function, takes moves parameter/arguement
const finalPosition = function(moves) {
  // Declare x and y variables, and final position as array
  let x = 0;
  let y = 0;
  let final = [];
  //Iterate through array.  If statement adjusts values for x and y
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'north') {
      y += 1;
    } else if (moves[i] === 'south') {
      y -= 1;
    } else if (moves[i] === 'east') {
      x += 1;
    } else {
      x -= 1;
    }
  }
  //Push final values for x and y to final array and return final
  final.push(x);
  final.push(y);
  return final;;
}

console.log(finalPosition(moves));