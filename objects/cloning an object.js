const circle = {
  radius: 1,
  draw() {
    console.log('draw')
  }
};


const another = {};

for (let key in circle)
another[key] = circle[key];

another['radius'] = circle['circle'];

// this line of code is the same as the above
const another = object.assign({
  color: 'yellow'
}, circle);


const another = {...circle };


console.log(another);
