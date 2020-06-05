import classNames from 'classnames';
import { createContext } from 'react';

const nameCheckRegEx = /^[a-zA-Z]+$/;
const passwordCheckRegEx = /^[a-zA-Z0-9\s]+$/;


export const handleAuthInputStyles = ({ Input, Valid, Invalid }, isFieldCorrect, isFieldTouched) => {
  if (!isFieldTouched) {
    return classNames(Input);
  } else if (isFieldCorrect) {
    return classNames(Input, Valid);
  }
  return classNames(Input, Invalid);

};

export const validateInput = (value, type) => {
  const isEmpty = value === '';

  let valid;

  if (type === 'name') {
    valid = nameCheckRegEx.test(value);
  } else {
    valid = passwordCheckRegEx.test(value);
  }
  return {
    correct: (!isEmpty && valid),
    empty: isEmpty,
    valid
  };
};

// const correctCredentials = {
//   correctLogin: 'admin',
//   correctPassword: 'admin'
// };

// export const validateCredentials = (login, password) => {
//   const { correctLogin, correctPassword } = correctCredentials;
//
//   return (login === correctLogin) && (password === correctPassword);
//
// };

export const AuthContext = createContext(null);
