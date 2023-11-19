const mark = [80, 80, 50];

//a function that calculates an average of the total
// adds all
// divides by it 3

// if statments 
// 1-59: f
// 60-69: d
// 70-79: c 
//80-89: b
//90-100" a


console.log(calculateGrade(mark));

function calculateGrade(mark) {
    if (mark.length <= 59)
    console.log('f')

    if (mark.length <= 60)
    console.log('d')

    if (mark.length <= 70)
    console.log('c')

    if (mark.length <= 80)
    console.log('b')

    if (mark.length <= 90)
    console.log('a')

    for (i = 0; i < mark.length; i++){
        sum += mark[i];
    
    }
}

// solution

function calculateGrades(marks) {

    const average = calculateeAverage(marks)
    
    // if (averagege >= 0 && average <= 59) return 'f';
    if (average < 60) return 'f';
    if (average < 70) return 'd';
    if (average < 80) return 'b';
    return 'a'
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
      sum += value;
    return sum / array.lengh;
    // return average
}