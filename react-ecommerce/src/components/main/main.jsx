import React from 'react';
import { withRouter } from 'react-router-dom';
import ImageOne from '../../images/studio-media-unsplash .jpg';
import FeaturedCollection from './featured_collection';
import './main_styles.scss';

const Main = ({ history }) => {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={ImageOne} alt='main section' />
        </div>
        <div className='ms-m-description'>
          <h2>Special Reads. Crafted for the main.</h2>
          <p>Independent publisher of award-winning books on the visual arts, arts, literature and critical studies, working with some of the world's most pioneering creative thinkers and institutions. It represents an innovative and open-minded approach to publishing. the basic principles we care about: making new, consolidated, and largely unavailable books accessible to everyone.</p>
            <button 
            className="button is-black" id='shop-now' onClick={() => history.push('/product/1')}>
              ARTIST BOOK
          </button>
        </div> 
      </div>
      <FeaturedCollection />
    </div>
  );
}

export default withRouter(Main);