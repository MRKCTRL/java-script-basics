// value types 
// number string boolean symbol undefined and none

// reference types 
// object function array


let x = {value: 10};
let y = x;

x.value = 20;

// primitives are copied by thier value 
// object are copied by thier reference

let number = 10;

function increase(number) {
    number++;
}


increase(number);
console.log(number)

// -----------------------------------------------------------------------------

let obj = {value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);