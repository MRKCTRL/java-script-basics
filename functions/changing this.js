const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    // const that = this;
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
    }.bind(this));
  }
};

video.showTags();


function playVideo() {
  console.log(this);
}

playVideo.call({ name: 'JOsh' }, 1, 2);
playVideo.apply({ name: 'JOsh' }, [1, 22]);
const fn = playVideo.bind({name: 'Josh'})
fn();


const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    // const that = this;
    this.tags.forEach(tag => {
      console.log(this.title, tag);
    });
  }
};
