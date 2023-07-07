import css from './Loader.module.css';
import React from 'react';
import { FallingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <FallingLines
        color="#3f51b5"
        width="150"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
};

FallingLines.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};
