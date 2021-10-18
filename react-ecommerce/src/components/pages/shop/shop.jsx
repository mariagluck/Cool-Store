import React, { useContext } from 'react';
import Layout from '../../layout.jsx';
import FeaturedProduct from '../../../components/shared/featured_product.js';
import { ProductsContext } from '../../../context/productsContext.js';
import './shop_styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map(product => (
    <FeaturedProduct {...product} key={product.id} />
    ));
    
  return (
    <Layout>
      <div className='product-list-container'>
        <h2 className='product-list-title'>Shop</h2>
        <div className='products-list'>
          {
            allProducts
          }
        </div>
      </div>
    </Layout>
  );
}

export default Shop;