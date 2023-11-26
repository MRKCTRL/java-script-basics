const courses = [
  {id: 1, name: 'a' },
  {id: 2, name: 'b'},
];

// remove the function keyword
// if yout function has a single paramter, you can remove the parenthesis
// if you dont have any parameters, a empty parenthesis
const course = courses.find(course => course.name === 'a')

console.log(course)
