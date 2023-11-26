let numbers - [1,  2, 3, 4];
let another = numbers;

// solution1
// wont work if it has a reference
numbers = [];

console.log(numbers)


// solution 2
number.length = 0;

// solution 3

number.splice(0 , numbers.length);

// solution 4
// very noisy
while (numbers.length > 0)
numbers.pop();
