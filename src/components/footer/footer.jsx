import React from 'react';
import './footer_styles.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return(
    <div className='footer'>
      {year} © COOLStore
    </div>
  );
}

export default Footer;