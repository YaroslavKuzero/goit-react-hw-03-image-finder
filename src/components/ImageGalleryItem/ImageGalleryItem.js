import React, { Component } from 'react';
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

export default ImageGalleryItem;