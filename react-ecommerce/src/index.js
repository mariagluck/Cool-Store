import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import ProductsContextProvider from './context/productsContext.js';
import './index.css';
import App from './App';
import "bulma/css/bulma.css";

ReactDOM.render(
  <BrowserRouter>
  <ProductsContextProvider>
  <App />
  </ProductsContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


