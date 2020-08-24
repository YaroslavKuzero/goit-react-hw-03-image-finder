import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  //onCardClick this is my props coming from main app = handlerModalContent

  render() {
    const { photos } = this.props
    return (
      <>{photos.map(({ id, webformatURL, tags }) => <li key={id} className="ImageGalleryItem">
        <img onClick={() => this.props.onCardClick(id)} src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
      </li>)}
      </>
    )
  }
}

ImageGalleryItem.PropTypes = {
  photos: PropTypes.array.isRequired,
  omCardClick: PropTypes.func.isRequired,
}

export default ImageGalleryItem;