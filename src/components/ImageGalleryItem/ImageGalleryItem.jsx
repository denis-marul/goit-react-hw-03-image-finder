import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
    showModal: !showModal,
  }))
}
  
  render(){
  return <>
    <>{this.state.showModal && <Modal
      onClose={this.toggleModal}
      largeImageURL={this.props.image.largeImageURL}
    alt={this.props.image.tags}
    />}</>
    <li className={css.ImageGalleryItem} onClick={this.toggleModal}>
  <img className={css.ImageGalleryImage} src={this.props.image.webformatURL} alt={this.props.image.tags} />
</li></>}
}

ImageGalleryItem.protoTypes = {
  toggleModal: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
}

