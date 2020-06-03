import React from 'react';
import styles from './styles.module.scss';

export const AuthStatus = () => (
  <div className={styles.AuthStatus}>
    <span className={styles.UserName}>user1</span>
    <a href="./logooff">logoff</a>
  </div>
);
