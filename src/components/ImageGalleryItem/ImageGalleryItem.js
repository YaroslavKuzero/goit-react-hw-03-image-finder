import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {

  static propTypes = {
    photos: PropTypes.array.isRequired,
    onCardClick: PropTypes.func.isRequired,
  }

  render() {
    const { photos } = this.props
    return photos.map(({ id, webformatURL, tags }) => <li key={id} className="ImageGalleryItem"> <img onClick={() => this.props.onCardClick(id)} src={webformatURL} alt={tags} className="ImageGalleryItem-image" /></li>)
  }
}

export default ImageGalleryItem;
