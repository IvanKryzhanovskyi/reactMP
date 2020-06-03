import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export const Button = ({ clickHandler, buttonText }) => (
  <button
    className={styles.Button}
    onClick={(e) => clickHandler(e)}
  >
    {buttonText}
  </button>
);

Button.propTypes = {
  clickHandler: PropTypes.func,
  buttonText: PropTypes.string
};


