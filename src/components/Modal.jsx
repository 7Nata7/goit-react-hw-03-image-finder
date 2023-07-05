
import PropTypes from 'prop-types'
import css from './Modal.module.css'

export const Modal = ({ img }) => {
<div className={css.overlay}>
  <div className={css.modal}>
    <img src="" alt="" />
  </div>
</div>
}

Modal.propTypes = {
 img: PropTypes.node.isRequared
}