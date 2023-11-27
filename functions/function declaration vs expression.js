// function declaration

function walk {
  console.log('walk')
}

// function expression
let run = function() {
  console.log('run')
};


let x = 1;

// named function
let run = function walk() {
  console.log('run')
};

// anon function expression
// named function
let run = function() {
  console.log('run')
};
let move = run;
run();
