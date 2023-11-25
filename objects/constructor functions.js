// Constructor Function
// pascal notation: OneTwoThreeFour
// this  reference a empty object

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}


//  the new, creates a empty js object, set this to point to a empty empty, will return the new object option
const Circle = new Circle(1)
const x = {};


