import React from 'react';
import styles from './styles.module.scss';
import { Button } from '../Button';

export const CourseSearch = () => (
  <div className={styles.CourseSearch}>
    <input
      className={styles.SearchInput}
      type="text"
      placeholder="Search by Title"
    />
    <Button
      buttonText="Search"
      clickHandler={() => {}}
    />
  </div>
);


