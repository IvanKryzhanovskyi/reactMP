import React from 'react';
import { Header, LoginForm } from '../../components';
import styles from './styles.module.scss';

export const LoginPage = () => (
  <>
    <div className={styles.HeaderWrapper}>
      <Header />
    </div>
    <LoginForm />
  </>
);


