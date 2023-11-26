const courses = [
  {id: 1, name: 'a' },
  {id: 2, name: 'b'},
]


// this are two objects, object we have in a array two diff reference, objects are reference signs
console.log(courses.includes({id: 1, name: 'a'}));

const course = courses.find(function(course) {
  return course.name === 'a';
})


courses.find(function(element)) {
  return element > 10;
});

const course = courses.findIndex(function(course) {
  return course.name === 'a';
})
