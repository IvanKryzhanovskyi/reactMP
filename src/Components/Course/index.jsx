import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { Button } from '../Button';

export const Course = ({
  courseData: {
    title,
    duration,
    date,
    description
  }
}) => (
  <div className={styles.Course}>
    <div className={styles.Info}>
      <div className={styles.MetaData}>
        <div>
          <strong className={styles.Title}>{title}</strong>
          <span className={styles.CourseLength}>{duration}</span>
        </div>
        <span className={styles.Date}>{date}</span>
      </div>
      <p className={styles.Description}>
        {description}
      </p>
    </div>
    <div className={styles.Controllers}>
      <Button
        clickHandler={() => {}}
        buttonText='Edit course' />
      <Button
        clickHandler={() => {}}
        buttonText='Delete course' />
    </div>
  </div>
);

Course.propTypes = {
  title: PropTypes.string,
  duration: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string
};
