let x = 1;
x = 'a';

function sum() { // in js it doesnt matter how many parameters you have, you can pass in as many. but only the first will be used
  let total = 0; // we use the this
  for ( let value of argumets)
    total += value;
  return total;


  // console.log(arguments); //object,.
  // return a + b; // when we have a 1 + undefined we will get NaN
}

console.log(sum(1));
