import React from 'react';
import ReactDOM from 'react-dom/client';

import Post from './Post';
import Albums from './AlbumsApidata';
import Update from './Update';
import Delete from './Delete';
import Router1 from './Routers';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* Router component to provide path  */}
     <Router1 /> 
  </React.StrictMode>
);

reportWebVitals();
