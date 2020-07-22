import React, { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
class LoaderApp extends Component {
  render() {
    return (
      <Loader
        type="ThreeDots" color="#3f51b5" height={80} width={80} className='Loader'
      />
    );
  }
}

export default LoaderApp;