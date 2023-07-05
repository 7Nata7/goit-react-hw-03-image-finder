// import css from './ImageGallery.module.css';
// import React from 'react';
// import PropTypes from 'prop-types';

// export const ImageGallery =({ images }) => {

//  return (
// <div>
// <ul className={css.gallery}>
//   {images.map(({ id, webformatURL, largeImageURL }) => (
//   <li 
//   key={id}
//   url={webformatURL}
//   className={css.galleryItem}>
//   <img src={ largeImageURL } alt="" />
// </li>
//   ))}
// </ul>
// </div>
//  )
// }

// ImageGallery.propTypes = {
//  images: PropTypes.arrayOf(
//   PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     webformatURL: PropTypes.string.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//   })
//  ).isRequired
// };

import css from './ImageGallery.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem'

export const ImageGallery = ({ images, onOpenModal }) => {
  return (
      <ul className={css.gallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          alt=''
          webformatURL={webformatURL}
          onOpenModal={() => onOpenModal(largeImageURL)}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;
