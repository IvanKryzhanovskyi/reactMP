import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export const Button = ({ clickHandler, buttonText, isDisabled }) => (
  <button
    className={styles.Button}
    disabled={isDisabled}
    onClick={clickHandler}
  >
    {buttonText}
  </button>
);

Button.defaultProps = {
  isDisabled: false
};

Button.propTypes = {
  clickHandler: PropTypes.func,
  buttonText: PropTypes.string
};


