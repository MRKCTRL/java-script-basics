// the object that is excuting the current function

// method -> obj

// function -> global(window, global)


const video = {
  title: 'a',
  play() {
    console.log(this);
  }
};

video.play();


video.stop= function() {
  console.log(this);
};

// function global

function Video(title) {
  this.title = title
  console.log(this);
}

const v = new Video('a');



const video = {
  title: 'a',
  tag: ['a', 'b', 'c'],
    showTags() {
      this.tags.forEach(function(tag) {
        console.log(tag)
      })
  }
};

video.showTags();






const video = {
  title: 'a',
  tag: ['a', 'b', 'c'],
    showTags() {
      this.tags.forEach(function(tag) {
        console.log(this.title, tag)
      }, this);
  }
};

video.showTags();
