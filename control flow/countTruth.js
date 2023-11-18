// false 
// undefined 
// null 
// ''
// 0 
// Nan
// let array = ['Falsy', 'undefined', 'null', 'false', "''", '0', 'Nan'];


// my code

const array = [0, 1, 2, 3, 4, 5];


function countTruthy(array) {
    for (let index in array)
    console.log(index, array[index]);
} 
function countTruthy(array) {
    let count = 0
    for (let value of array)
    if (value)
    count++;
    return count;
}


