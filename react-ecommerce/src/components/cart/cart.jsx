import React from 'react';
import shoppingBag from '../../images/shopping_bag.png';
import './cart_styles.scss';

const CartIcon = ({ history }) => {
  return (
    <div className="cart-container" onClick={() => history.push('/cart')}>
      <img src={shoppingBag} alt='shopping-cart-icon' />
      <span className='cart-count' id='lblCartCount'> 5 </span>      
    </div>
  );
}

export default CartIcon; 