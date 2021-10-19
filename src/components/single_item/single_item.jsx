import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { ProductsContext } from '../../context/productsContext';
import Layout from '../layout';
import './single_item_styles.scss';

const SingleProduct = ({ match, history }) => {
  const { push } = history;
  const { products } = useContext(ProductsContext);
  const { id }= match.params;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    // check to see if the id from the route param matches a product
    const product = products.find((item) => Number(item.id) === Number(id));
    
    // if the product does not exist, we redirect back to the shop
    if (!product) { 
      return push('/shop') 
    }
    // set the product as the state
    setProduct(product);
  }, [product, push, id, products]);

  // before using the product, we need to momentarily return null,
  // because the product will be null for a split second - in that time we'll
  // just return null - we could add a spinner here instead
  if (!product) { return null }
  // pull off the props from product
  const { imageUrl, title, price, description } = product;
  return (
    <Layout>
      <div className='single-product-container'>
        <div className='product-image'>
          <img src={imageUrl} alt='product' />
        </div>
        <div className='product-details'>
          <div className='name-price'>
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
          <div className='add-to-cart-btns'>
            <button 
              className="button is-white nomad-btn" 
              id='btn-white-outline'>
              ADD TO CART
            </button>
            <button 
              className="button is-black nomad-btn" 
              id='buy-it-now-btn' 
              onClick={() => history.push('/cart')}>
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className='product-description'>
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withRouter(SingleProduct);