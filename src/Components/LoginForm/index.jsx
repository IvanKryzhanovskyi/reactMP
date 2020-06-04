import React, { useState } from 'react';

import { ErrorBanner, AuthInput, Button } from '../';
import { validateInput, validateCredentials } from '../../utils';

import styles from './styles.module.scss';

export const LoginForm = () => {
  const [formData, setFormData] = useState({
      nameFiled: {
        fieldValue: '',
        isFieldTouched: false,
        isFieldCorrect: false,
        isFieldEmpty: true,
        invalidCredentialsError: false
      },
      passwordField: {
        fieldValue: '',
        isFieldTouched: false,
        isFieldCorrect: false,
        isFieldEmpty: true,
        isFieldPassValidation: false
      },
      invalidCredentialsError: false
    }
  );

  const handleLoginChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      nameFiled: {
        ...prevState.nameFiled,
        fieldValue: value
      },
      invalidCredentialsError: false
    }));
  };

  const handlePasswordChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      passwordField: {
        ...prevState.passwordField,
        fieldValue: value
      },
      invalidCredentialsError: false
    }));

  };

  const handleNameValidation = (value) => {
    const {
      correct,
      empty,
      valid
    } = validateInput(value, 'name');

    setFormData(prevState => ({
      ...prevState,
      nameFiled: {
        ...prevState.nameFiled,
        fieldValue: value,
        isFieldTouched: true,
        isFieldCorrect: correct,
        isFieldEmpty: empty,
        isFieldPassValidation: valid
      }
    }));
  };

  const handlePasswordValidation = (value) => {
    const {
      correct,
      empty,
      valid
    } = validateInput(value, 'password');
    setFormData(prevState => ({
      ...prevState,
      passwordField: {
        ...prevState.passwordField,
        fieldValue: value,
        isFieldTouched: true,
        isFieldCorrect: correct,
        isFieldEmpty: empty,
        isFieldPassValidation: valid
      }
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateCredentials(formData.nameFiled.fieldValue, formData.passwordField.fieldValue)) {
      return alert('welcome Admin');
    }
    setFormData(prevState => ({
      ...prevState,
      passwordField: {
        ...prevState.passwordField,
        fieldValue: '',
        isFieldTouched: false
      },
      invalidCredentialsError: true
    }));
  };

  const isButtonDisabled = () => {
    const nameFieldCheck = !formData.nameFiled.isFieldEmpty && formData.nameFiled.isFieldTouched;
    const passwordFieldCheck = !formData.passwordField.isFieldEmpty && formData.passwordField.isFieldTouched;
    return !(nameFieldCheck && passwordFieldCheck);
  };

  const { nameFiled, passwordField, invalidCredentialsError } = formData;

  return (
    <div className={styles.FormWrapper}>
      {invalidCredentialsError && <div className={styles.ErrorBanner}>
        <ErrorBanner errorText="Wrong login or Password" />
      </div>
      }
      <form className={styles.Form}>
        <div>
          <div className={styles.FormInput}>
            <AuthInput
              inputName='Login'
              onChangeHandler={handleLoginChange}
              blurEventHandler={handleNameValidation}
              inputData={nameFiled}
            />
            <AuthInput
              inputType='password'
              inputName='Password'
              onChangeHandler={handlePasswordChange}
              blurEventHandler={handlePasswordValidation}
              inputData={passwordField}
            />
          </div>
          <Button
            isDisabled={isButtonDisabled()}
            clickHandler={handleFormSubmit}
            buttonText='Login'
          />
        </div>
      </form>
    </div>
  );
};


