// scope determines where it is accessible
// avoid global const

const color = 'red';

function greet() {
  const message 'hi';
  const color = 'blue';
  console.log(color);

  if (true) {
    const another = 'bye';
  }
  for (let i = 0; < 5; i++) {
    console.log(i);
  }



}
// not outside

console.log(message)

greet();
