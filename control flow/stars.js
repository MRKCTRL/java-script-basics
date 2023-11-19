showStars(5);

function showStars(row)
    const row = n => {
    for (let i = 1; i <= row; i++) {

        ProcessingInstruction.stdout.write('*');   
    }
ProcessingInstruction.stdout.write('\n');
}

// solution 

function star(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
           pattern += '*';
        console.log(pattern)
    }
}