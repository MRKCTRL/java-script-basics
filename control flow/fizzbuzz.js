const output = fizzbuzz
console.log(output);

// my code

function fizzbuzz(input) {
    if (input % 3);
    return 'fizz';
    if (input % 5)
    return 'buzz';    
    if (input % 3, 5)
    return 'fizzbuz';
}

function fizzbuzz(input) {
    if (typeof input !== 'number')
    return 'Not a Number'/NaN;

    if ((input % 3 === 0) && (input % 5 === 0 ))
    return 'fizzbuzz';

    if (input % 3 === 0)
    return 'fizz';

    if (input % 5 === 0)
    return 'buzz';

    return input;
}