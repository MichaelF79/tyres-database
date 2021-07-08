import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"

// BrowserRouter used instaed of react strict mode
// error message on app.jsx that Link can't be used outside of a Route

ReactDOM.render( 
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

