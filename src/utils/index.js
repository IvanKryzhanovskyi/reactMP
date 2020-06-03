import classNames from 'classnames';

const nameFieldPatternRegEx = /^[a-zA-Z]+$/;
const passwordFieldPatternRegEx = /^[a-zA-Z0-9\s]+$/;

const validCredentials = {
  validLogin: 'admin',
  validPassword: 'admin'
};

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
    valid = nameFieldPatternRegEx.test(value);
  } else {
    valid = passwordFieldPatternRegEx.test(value);
  }
  return {
    correct: (!isEmpty && valid),
    empty: isEmpty,
    valid
  };
};

export const validateCredentials = (login, password) => {
  const { validLogin, validPassword } = validCredentials;

  return (login === validLogin) && (password === validPassword);

};
