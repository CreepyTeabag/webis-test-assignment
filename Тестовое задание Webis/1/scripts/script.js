'use strict';

const container = document.getElementById('myCarousel');

const options = {
  Images: {
    initialSize: 'fit',
  },
  infinite: false,
};
new Carousel(container, options);
