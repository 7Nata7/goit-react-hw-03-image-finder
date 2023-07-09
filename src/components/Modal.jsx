import PropTypes from 'prop-types'
import React from 'react';
import css from './Modal.module.css';

export class Modal extends React.Component {
  escapeClick = e => {
    if (e.key === 'Escape') {
      this.props.onCloseModal();
    }
  };

  overlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.escapeClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.escapeClick);
  }

  render() {
    const { imgURL } = this.props;
    return (
      <div className={css.overlay} onClick={this.overlayClick}>
        <div className={css.modal} >
          <img src={imgURL} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imgURL: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired
}