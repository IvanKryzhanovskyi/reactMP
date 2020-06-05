import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Course } from '../';

const mockCourses = [
  {
    id: 1,
    title: 'React Course',
    duration: '1 Hour 28 minutes',
    date: '05.02.2020',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' +
      ' the industrstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
    authors: ['ivan', 'masha']
  }, {
    id: 99,
    title: 'Another React Course',
    duration: '1 Hour 2 minutes',
    date: '18.11.2020',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' +
      ' the industrstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
    authors: ['ivan', 'alex']
  }
];


export const CoursesList = () => {
  const [courses] = useState(mockCourses);
  return (
    <ul className={styles.CoursesList}>
      {courses.map((course) =>
        <li key={course.id}>
          <Course
            courseData={course}
          />
        </li>)}
    </ul>
  );
};


