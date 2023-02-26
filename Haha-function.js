const laugh = (num) => {
  let string = '';
  let i = 0;
  while (i < num) {
      string = string + 'ha';
      i ++
  }
  return (string + '!');
};

console.log(laugh(3));