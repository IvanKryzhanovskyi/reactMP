import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { AuthStatus, ReactIcon } from '../';
import { BreadCrumbs } from '../';

export const Header = ({ addBreadCrumbs, addAuthStatus }) => (
  <div className={styles.Logo}>
    <div className={styles.LogoWrapper}>
      <ReactIcon />
      <h1>Logo</h1>
    </div>
    {addBreadCrumbs &&
    <div className={styles.BreadCrumbWrapper}>
      <BreadCrumbs page={'New Course'} />
    </div>
    }
    {addAuthStatus &&
    <AuthStatus />
    }
  </div>
);

Header.propTypes = {
  addBreadCrumbs: PropTypes.bool,
  addAuthStatus: PropTypes.bool
};
