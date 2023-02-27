//Introduct stations array of arrays showing each location name, capacity, and establishment type
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//Introduce chooseStations function
const chooseStations = function (locations) {
  //Introducte goodStations array where suitable locations will be stored
  let goodStations = [];
  for (i = 0; i < locations.length; i++) {
    if (locations[i][1] > 19 && (locations[i][2] === 'community centre' || locations[i][2] === 'school')) {
      goodStations.push(locations[i][0]);
    } 
  } return goodStations;
};

//Call chooseStations function on stations array
console.log(chooseStations(stations));
