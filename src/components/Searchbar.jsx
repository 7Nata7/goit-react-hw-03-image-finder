
import css from './Searchbar.module.css'
import React from 'react';
// import PropTypes from "prop-types";



// export const Searchbar = ({ onSubmit }) => {
export const Searchbar = () => {


 return (
  <header className={css.searchbar}>
  <form className={css.form}>
    <button type="submit" className={css.submit_button}>
      <span className={css.label}>Search</span>
    </button>

    <input
      className={css.input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
 )
}

// Searchbar.propTypes = {
//  onSubmit: PropTypes.func.isRequired
// } 
