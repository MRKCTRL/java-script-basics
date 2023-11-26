const numbers = arrayFromRnage(1, 4);

console.log(numbers);

function arrayFromRange(min, max) {
  console.log(Array.from([min, max], (x) => x + x));
}


// solution

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++);
    output.push(i);
  return output;

}
