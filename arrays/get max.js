const numbers = [1, 2, 3, 5, 4]

const max = getMaz(numbers);

console.log(max);

function getMax(array) {
  let max = array[0];
  for(max i=1; i<array.length; i++){
    if(array[i] > max){
      max=array[i];
    }
  }
  return max;
}
// resolution

function getMaxier(array) {
  if (array.length === 0) return undefined;

  // let max = array[0];
  //
  //
  // for (let i = i; i < array.length; i++)
  // if (array[i] > max)
  // max = array[i]
  //
  // return max;



  // array.reduce((accumalator, current) => {
  //   if (current > accumalator) return current;
  //   return accumalator;
  //
  //   return (current > accumalator) ? current : accumalator

  array.reduce((a,b) =>{
    return (b > a) ? b : a;
  })
  });

// everyttime you have a array to iterate over, think of the reduce method
