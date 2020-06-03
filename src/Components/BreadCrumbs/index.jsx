import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export const BreadCrumbs = ({ page }) => {
  return (
    <div className={styles.BreadCrumbs}>
      <a href="https://reactjs.org/"
         className={styles.CoursesLink}
      >Courses</a>
      <span>{page}</span>
    </div>
  );
};

BreadCrumbs.propTypes = {
  page: PropTypes.string
};
