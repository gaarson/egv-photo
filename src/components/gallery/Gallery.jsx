import React from 'react';
import Photos from 'react-photo-gallery';

const arr = [
    {
        src: '/img/1.jpg',
        width: 600,
        height: 600,
    },
    {
        src: '/img/2.jpg',
        width: 600,
        height: 600,
    },
    {
        src: '/img/3.jpg',
        width: 600,
        height: 600,
    },
    {
        src: '/img/4.png',
        width: 600,
        height: 600,
    },
    {
        src: '/img/5.jpg',
        width: 600,
        height: 600,
    },
]

const Gallery = () => (
  <div>
    <Photos photos={arr} />
  </div>
);

export default Gallery;