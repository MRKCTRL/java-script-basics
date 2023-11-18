function addNumber(param1, param2) {
    return param1 + param2;
}

let result = addNumber(20, 6);
console.log(result);

function max(a, b) {
    if (a > b) return a;
    return b;
    //  short code to do the above
    return (a > b) ? a : b;
}