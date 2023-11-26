// title
// body
// author
// views
// comments
//   (author, body)
// isLive(true or false)

let blogPost = {
  title: 'struggle',
  body: 'lorem epsum',
  author: 'Jabu mcgee',
  views: 2,
  comments: (author:'jan doe', comments:'hello' ),
  islive: true;
};

// correction

let post = {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 10,
  comments: [
    {
      author: 'a', body: 'b'
    },
    {author: 'c', body: 'd'},
  ]
  console.log(post);
};
