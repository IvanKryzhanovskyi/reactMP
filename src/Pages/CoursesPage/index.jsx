import React from 'react';
import { Button, CourseSearch, Header, CoursesList } from '../../components';
import styles from './styles.module.scss';

export const CoursesPage = () => (
  <>
    <div className={styles.HeaderWrapper}>
      <Header
        addAuthStatus={true}
      />
    </div>
    <div className={styles.CoursePanel}>
      <CourseSearch />
      <Button
        clickHandler={() => {}}
        buttonText='Add course'
      />
    </div>
    <CoursesList />
  </>
);


