const number = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<h1>' + '</h1>')

const html = '<ul>' + items.join(' ') + '</ul>';

console.log(filtered)


const items = filtered.map(n => {
  const obj = {value: n};
  return obj;
});


const items = filtered.map(n => {
  return {value: n};
});


const items = filtered.map(n => {value: n};
});


better and cleaner code
const items = numbers
  .filter(n => n >= 0 )
  .map(n => ({value: n}))
  .filter(obj => ibj.value > 1)
  .map(obj => obj.value);
