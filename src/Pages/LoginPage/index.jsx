import React from 'react';
import { Header, LoginForm } from '../../components';
import styles from './styles.module.scss';

export class LoginPage extends React.Component {
  render() {
    return (
      <div className={styles.LoginPage}>
        <div className={styles.HeaderWrapper}>
          <Header
            addBreadCrumbs={true}
            addAuthStatus={true}
          />
        </div>
        <LoginForm />
      </div>
    );
  }
}
