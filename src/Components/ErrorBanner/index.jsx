import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export const ErrorBanner = ({ errorText }) => {
  return (
    <div className={styles.ErrorBanner}>
      <span>{errorText}</span>
    </div>
  );
};

ErrorBanner.propTypes = {
  errorText: PropTypes.string
};

