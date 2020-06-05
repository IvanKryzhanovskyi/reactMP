import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { AuthContext } from '../../utils/index';

export const AuthStatus = () => {

  const {isUserAuthorized, setAuthStatus} = useContext(AuthContext);

  return (
    <div className={styles.AuthStatus}>
      <span className={styles.UserName}>user1</span>
      <a
        href='./login'
        onClick={() => setAuthStatus(!isUserAuthorized)}
      >logoff</a>
    </div>
  );
};

