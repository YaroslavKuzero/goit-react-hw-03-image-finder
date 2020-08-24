import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

ImageGallery.PropTypes = {
  onImageClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default ImageGallery;