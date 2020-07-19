import React, { Component } from 'react';
import Searchbar from './Searchbar'
import Loader from './Loader'
import photoApi from './photoApi'
import Error from './Error'
import ImageGalleryItem from './ImageGalleryItem'
import Button from './Button';



class FetchFotoApp extends Component {
  state = {
    page: 1,
    photos: [],
    keyWord: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.keyWord !== this.state.keyWord) {
      this.fetch();
    }
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



  render() {
    const { photos, isLoading, error } = this.state

    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <Error />}
        <ul>
          {photos.map(photo => <ImageGalleryItem id={photo.id} src={photo.webformatURL} alt={photo.largeImageURL} />)}
        </ul>
        {isLoading && <Loader />}
        {photos.length > 0 && !isLoading && <Button onClick={this.fetch} />}
      </div >
    )
  }
}

export default FetchFotoApp;


// - `id` - уникальный идентификатор
// - `webformatURL` - ссылка на маленькое изображение для списка карточек
// - `largeImageURL` - ссылка на большое изображение для модального окна