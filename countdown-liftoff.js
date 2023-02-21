// Code based on Udacity Intro to Loops (Excercise 4-3)

// Declare and define x for start of countdown
let x = 60;

// While loop to count us down from x to 0
while (x >= 0) {
    //ternary operator used for custom strings based on x
    let output = (x === 50)? 'Orbiter transfers from ground to internal power'
    : (x === 31)? 'Ground launch sequencer is go for auto sequence start'
    : (x === 16)? 'Activate launch pad sound suppression system'
    : (x === 10)? 'Activate main engine hydrogen burnoff system'
    : (x === 6)? 'Main engine start'
    : (x === 0)? 'Solid rocket booster ignition and liftoff!'
    :`T-${x} seconds`;
    console.log(output);
    x = x-1;
}