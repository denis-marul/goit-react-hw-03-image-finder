import css from './Modal.module.css';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {
     componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown); 
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown); 
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose(); 
    }
  };
     handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose(); 
    }
  };

    render(){
    return createPortal(<div onClick={this.handleBackdropClick} className={css.Overlay}>
  <div  className={css.Modal}>
    <img src={this.props.largeImageURL} alt={this.props.alt} />
  </div>
</div>, modalRoot,)}
}

Modal.protoTypes = {
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    handleBackdropClick: PropTypes.func.isRequired,
}
