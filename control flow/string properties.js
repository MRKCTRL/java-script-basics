const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    let txt = "";
    for (let x in movie)
    txt += movie[x] + " ";
}

movie.title = 'a';
movie.releaseYear = 2018;
movie.rating = 4.5;
movie.director = 'b'

solution 

function showProp(obi) {
    for (let key in obi)
     if (typeof obi[key] === 'string')
        console.log(key,obi[key]);
    // console.log(key)
}
