import React from 'react';
import './featured_product_styles.scss';

const FeaturedProduct = (product) => {
  const { title, author, imageUrl, price } = product;
  return (
    <div className='featured-product'>
      <div className='featured-image'>
        <img src={imageUrl} alt='product' className='imageProduct' />
        <p class="is-size-7">{author}</p>
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>${price}</p>
        <button className='button is-black nomad-btn'>ADD TO CART</button>
      </div>
    </div>
  );
}

export default FeaturedProduct;