const numbers = [3, 2, ,5, 8, 5, 4, 10,]

numbers.sort();
console.log(numbers);


numbers.reverse();
coonsole.log(numbers)

// each character in a computer, interanlly represented in a number
const courses = [
  {id: 1, name:'Node.js'},
  {id:2, name 'JavaScript'},
];

courses.sort(function(a, b) {
  // aa < v => =1
  // a > b => 1
  // a === b => 0
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameb) return -1;
  if (nameA > nameb) return 1;

  // if (a.name < n.name) return -1;
  // if (a.name > b.name) return 1;
  return 0;
});

console.log(courses);
