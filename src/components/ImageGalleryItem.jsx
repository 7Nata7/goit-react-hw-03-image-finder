import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, onOpenModal }) => {
  return (
    <li className={css.imageGalleryItem}    >
      <img
        className={css.imageGalleryItemImage}
        src={webformatURL}
        alt=''
        onClick={onOpenModal}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};