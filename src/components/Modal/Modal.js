import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handlerEscape)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerEscape)
  }

  handlerEscape = ({ code }) => {
    if (code === 'Escape') {
      this.props.onClose();
    }
  }

  handlerBackDrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  }

  render() {
    return createPortal(<div onClick={this.handlerBackDrop} className="Overlay" >
      <div className="Modal" >
        <img src={this.props.largeImage} alt='clickedImage' />
      </div>
    </div>, modalRoot)
  }
}

export default Modal;
