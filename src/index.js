import React from 'react';
import ReactDOM from 'react-dom';

import FetchPhotoApp from './components/FetchPhotoApp';

import './css/body.css';
import './css/styles.css';


ReactDOM.render(
  <React.StrictMode>
    <FetchPhotoApp />
  </React.StrictMode>,
  document.getElementById('root'),
);
