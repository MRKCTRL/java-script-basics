const numbers = [,1, 2, 3];


// will find everyone 
const allPostive = numbers.every(function(value) {
  return value >= 0;
})

// will find one, aleast one
const atLeastPostive = numbers.some(function(value) {
  return value >= 0;
})
