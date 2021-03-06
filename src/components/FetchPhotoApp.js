import React, { Component } from 'react';

import Searchbar from './Searchbar';
import Loader from './Loader';
import Error from './Error';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import ImageGalleryItem from './ImageGalleryItem';

import photoApi from '../services/photoApi';

class FetchPhotoApp extends Component {
  state = {
    page: 1,
    photos: [],
    keyWord: '',
    isLoading: false,
    error: null,
    isShowModal: false,
    modalContent: '',
  };

  componentDidUpdate(_, prevState) {
    const { keyWord, page } = this.state
    if (prevState.keyWord !== keyWord) {
      this.fetch();
    }

    if (prevState.page !== page && prevState.page !== 1) {
      this.scroll()
    }
  }

  handleRenderModal = () => {
    this.setState(({ isShowModal }) => ({
      isShowModal: !isShowModal
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

  fetch = async () => {
    const { keyWord, page } = this.state;
    const options = { keyWord, page };

    this.setState({ isLoading: true });

    try {
      const res = await photoApi.fetchPhotos(options)
      this.setState(prevState => ({
        photos: [...prevState.photos, ...res],
        page: prevState.page + 1,
      }))
      this.setState({ isLoading: false })
    } catch (error) {
      this.setState({ error: error })
      this.setState({ isLoading: false })
    }

  }

  handlerModalContent = id => {
    const content = this.state.photos.find(photo => id === photo.id)
    this.setState({ modalContent: content.largeImageURL })
  }


  render() {
    const { photos, isLoading, error, isShowModal, modalContent } = this.state
    const isShowError = error;
    const isShowButtonLoadMore = photos.length > 0 && !isLoading
    return (
      <div className='App'>
        {isShowModal && <Modal largeImage={modalContent} onClose={this.handleRenderModal} />}
        <Searchbar onSubmit={this.onChangeQuery} />
        {isShowError && <Error />}
        <ImageGallery onImageClick={this.handleRenderModal}><ImageGalleryItem photos={photos} onCardClick={this.handlerModalContent} /></ImageGallery>
        {isLoading && <Loader />}
        {isShowButtonLoadMore &&
          <Button loadMore={this.fetch} />}
      </div >
    )
  }
}

export default FetchPhotoApp;
