const movies = [
  {title: 'a', year: 2018, rating: 4.5},
  {title: 'd', year: 2017, rating: 4.5},,
  {title: 'c', year: 2018, ra ting: 3},,
  {title: 'b', year: 2018, rating: 4.7},,
]

array.sort(function (a.b) {return b.rating - a.rating});

// solution

movies
.filter(m => m.year === 2018 && m.rating >= 4)
.sort((a,b) => a.rating - b.rating)
.revers()
.map(m => m.title)

console.log(titles);
