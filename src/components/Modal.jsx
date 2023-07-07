  import React from 'react';
  import PropTypes from 'prop-types'
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
      const { imgURL, onCloseModal } = this.props;
      return (
        <div className={css.overlay} onClick={this.overlayClickverlayClick}>
          <div className={css.modal} onClick={onCloseModal}>
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