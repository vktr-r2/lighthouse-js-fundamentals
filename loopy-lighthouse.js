
//For loop to count from 100 to 200
for (let i = 100; i <= 200; i++) {
  //if statement to determine which string/int should be logged based on whether number is multiple of 3 and 4
  if (i % 3 === 0  && i % 4 === 0) {
    console.log('LoopyLighthouse');
  } else if (i % 3 === 0) {
    console.log('Loopy');
  } else if (i % 4 === 0) {
    console.log('Lighthouse');
  } else {
    console.log(i);
  }
}

