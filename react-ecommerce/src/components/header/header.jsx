import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart/cart.jsx';
import './header_styles.scss';


const Header = () => {
    return (
        <nav className="nav-menu container">
        <div className='logo'>
          <Link to='/'>COOLSTORE</Link>
        </div>
        <ul className='links'>
          <li>
            <Link 
              to='/'
              className="" 
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/shop' 
              className=" " 
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to='/about' 
              className=" " 
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='/blog' 
              className=" " 
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to='/login' 
              className=" " 
            >
              Log In
            </Link>
          </li>
        </ul>
        <CartIcon />
      </nav>
    );
  }
  
  export default Header; 