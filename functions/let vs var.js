let x = 0;

var y = 0;

// when you use var, the scope is not limited to its define, its limited to the functions
function begining() {
  for (var i = 0; i < 5; i++) {
    if (true) {
      var color = 'red'
    }
  }
    console.log(i)


  console.log(i)
}

// var => function-scoped
// ES6(ES2015): let, const => block-scoped

begining()



var color = 'red';
let age = 30;

// avoid using the var cause it caluses with the window object
// function coped not block scoped
