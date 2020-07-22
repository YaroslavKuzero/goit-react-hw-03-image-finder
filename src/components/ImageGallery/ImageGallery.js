import React, { Component } from 'react';
class ImageGallery extends Component {

  handlerRenderModal = event => {
    if (event.target !== event.currentTarget) {
      this.props.onImageClick();
    }
  }

  render() {
    return (
      <ul className="ImageGallery" onClick={this.handlerRenderModal}>{this.props.children}</ul>
    )
  }
}

export default ImageGallery;