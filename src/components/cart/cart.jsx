import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import shoppingBag from '../../images/shopping_bag.png';
import './cart_styles.scss';

const CartIcon = ({ history }) => {
  const { itemCount } = useContext(CartContext);

  return (
    <div className="cart-container" onClick={() => history.push('/cart')}>
      <img src={shoppingBag} alt='shopping-cart-icon' />
      {
        itemCount > 0 ? <span className='cart-count' id='lblCartCount'> { itemCount } </span> : null
      }
    </div>
  );
}

export default withRouter(CartIcon); 