const numbers = [ 1, 2, 3, 4, 5, 6]

const count = countOccurences(numbers, 1);

consoole.log(count);

function countOccurences(array, searchElement) {
  const counts = []

  for (const num of numbers) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

}


// solution

function countOccurences(array, searchElement) {
//   let count = 0;
//   for (let element of array)
//     if (element === searchElement)
//         count++;
//     return count;
      return array.reduce((accumalator, current) =>{
        const occurrences = (current === searchElement) ? 1 : 0;
        console.log(accumalator, current, searchElement)
        return accumalator + occurrences;
      }, 0);
}
