// functions are objects

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
// 
// Circle.

// this is the same as bottom line code
// we can call the function
Circle.call({}, 1)
Circle.apply({}, [1, 2, 3]);

// const Circle1 = new Function('radius',`
//  this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }` );
// const circle = new Circle1(1)

const another = new Circle(1);
