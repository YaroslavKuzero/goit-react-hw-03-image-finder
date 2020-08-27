import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGallery extends Component {

  static propTypes = {
    onImageClick: PropTypes.func.isRequired,
    children: PropTypes.node,
  }

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