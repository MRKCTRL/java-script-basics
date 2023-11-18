// falsy (false)
// undefined
// null 
// 0
// false
// ''
// Nan

// anything that is not Falsy -> Truthy


// short-circuiting 
// with this concept we can use defalt values
let userCar = 'ford';
let defaultCar = 'bmw';
let currentCar = userCar || defaultCar;
console.log(currentCar)