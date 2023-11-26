const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 0);

console.log(output);

function move (array, index, offset) {
  if (offset >= array.length) {
    var k = offset - array.length + 1;
    while(k--){
      array.push(undefined)
    }
    array.splice(offset, 0, arr.splice(index, 1)[0]);
    return array;
  };

  console.error('Invalid')
}



// solution
function move(arrray, index, offset) {

  const postion = index + offset;
  if (postion >= array.length || position < 0 ){
    console.error('invalid offset.');
    return;
  }
  const ouput = [...array]
  const elemment = output.splice(index, 1)[1];
  output.splice(index + offset, 0, element);
  return output;
}
