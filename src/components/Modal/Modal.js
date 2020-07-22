import React, { Component } from 'react';
import { createPortal } from 'react-dom'

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handlerEscape)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerEscape)
  }

  handlerEscape = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  }

  handlerBackDrop = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  }

  render() {
    return createPortal(<div onClick={this.handlerBackDrop} className="Overlay" >
      <div className="Modal" >
        <img src={this.props.largeImage} alt="" />
      </div>
    </div>, modalRoot)
  }
}

export default Modal;
