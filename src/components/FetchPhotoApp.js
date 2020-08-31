import React, { Component } from 'react';

import Searchbar from './Searchbar';
import Loader from './Loader';
import Error from './Error';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import ImageGalleryItem from './ImageGalleryItem';

import photoApi from './photoApi';

class FetchPhotoApp extends Component {
  state = {
    page: 1,
    photos: [],
    keyWord: '',
    isLoading: false,
    error: null,
    renderModal: false,
    modalContent: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.keyWord !== this.state.keyWord) {
      this.fetch();
    }

    if (prevState.page !== this.state.page && prevState.page !== 1) {
      this.scroll()
    }
  }

  handleRenderModal = () => {
    this.setState(({ renderModal }) => ({
      renderModal: !renderModal
    }))
  }

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  onChangeQuery = (query) => {
    this.setState({
      keyWord: query,
      page: 1,
      photos: [],
      error: null
    })
  }

  fetch = () => {
    const { keyWord, page } = this.state;
    const options = { keyWord, page };

    this.setState({ isLoading: true });

    photoApi.fetchPhotos(options).then(res => {
      this.setState(prevState => ({
        photos: [...prevState.photos, ...res],
        page: prevState.page + 1,
      }));
    }).catch(error => this.setState({ error: error })).finally(() => this.setState({ isLoading: false }))
  }

  handlerModalContent = id => {
    const bigsrc = this.state.photos.find(photo => id === photo.id)
    this.setState({ modalContent: bigsrc.largeImageURL })
  }


  render() {
    const { photos, isLoading, error, renderModal, modalContent } = this.state

    return (
      <div className='App'>
        {renderModal && <Modal largeImage={modalContent} onClose={this.handleRenderModal} />}
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <Error />}
        <ImageGallery onImageClick={this.handleRenderModal}><ImageGalleryItem photos={photos} onCardClick={this.handlerModalContent} /></ImageGallery>
        {isLoading && <Loader />}
        {photos.length > 0 && !isLoading &&
          <Button handler={this.fetch} />}
      </div >
    )
  }
}

export default FetchPhotoApp;
