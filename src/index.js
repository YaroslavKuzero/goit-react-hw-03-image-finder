import React from 'react';
import ReactDOM from 'react-dom';
import './css/body.css';
import './css/styles.css';
import FetchPhotoApp from './components/FetchPhotoApp';


ReactDOM.render(
  <React.StrictMode>
    <FetchPhotoApp />
  </React.StrictMode>,
  document.getElementById('root'),
);
