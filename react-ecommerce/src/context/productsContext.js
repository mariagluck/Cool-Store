import React, { createContext, useState } from 'react';
import {shopData} from '../shop_data/shop_data.js';

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {
  const [products] = useState(shopData);

  return (
    <ProductsContext.Provider value={{ products }}>
      { children }
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;