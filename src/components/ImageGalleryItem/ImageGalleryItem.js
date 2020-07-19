import React from 'react';

const ImageGalleryItem = ({ id, src, alt }) => (
  <li key={id} className="ImageGalleryItem">
    <img src={src} alt={alt} className="ImageGalleryItem-image" />
  </li>
)

export default ImageGalleryItem;