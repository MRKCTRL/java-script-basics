let price =
[ '$', '$$', '$$$', '$$$$'];

function cheap() {
  $: 'inexpensive',
  $$: 'moderate',
  $$$: 'pricey',
  $$$$: 'expensive',

}

// correction
let pricerange = [
  {label: '$', tootip: 'inexpensive', minPerPerson: 0, maxPerPerson: 10 },
  {label: '$$', tootip: 'moderate', minPerPerson: 11, maxPerPerson: 20 },
  {label: '$$$', tootip: 'pricey', minPerPerson: 21, maxPerPerson: 50 },

];

let restuarants = [
  { averagePerPerson: 5 }
]
