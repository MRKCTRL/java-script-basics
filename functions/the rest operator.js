function sum(discount, ...prices, someValue) {
  // we cant have a parameter after rest opertor
  // the rest operator , when we apply a rest, we can pass as many and args will take all of them in a array
  // let total = 0;
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
  // console.log(args)
}

console.log(sum(0.1 20, 30, 1));
