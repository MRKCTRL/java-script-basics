showPrime(20);

function showPrimes(limit) {
    const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++){
    if(num % i === 0) return false;
  }
  return num > 1;
    }
}
const logPrimes = num => {
  for (let i = num; i > 0; i--){
    if(isPrime(i)) console.log(i);
  }
}

logPrimes(10);


// solution 
function showPrimes(limit) {
    for (let number = 2; number <= limit; i++)

        // let isPrime = true;
        // for (let factor = 2; factor < number; factor++) {
        //     if (number % factor === 0) {
        //         isPrime = false;
        //         break;

        if (isPrime(number)) console.log(number);
            }   

        // if (isPrime) console.log(number);
//     }
// }


function checker(arraynumber) {
     let isPrime = true;
        for (let factor = 2; factor < number; factor++)
            if (number % factor === 0) 
                return false;

    return true
}