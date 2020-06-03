import React from 'react';

import { ErrorBanner, AuthInput, Button } from '../';
import { validateInput, validateCredentials } from '../../utils';

import styles from './styles.module.scss';

export class LoginForm extends React.PureComponent {
  state = {
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
  };

  handleLoginChange = (value) => {
    this.setState({
      ...this.state,
      nameFiled: {
        fieldValue: value
      },
      invalidCredentialsError: false
    });
  };

  handlePasswordChange = (value) => {
    this.setState({
      ...this.state,
      passwordField: {
        fieldValue: value
      },
      invalidCredentialsError: false
    });
  };

  handleNameValidation = (value) => {
    const {
      correct,
      empty,
      valid
    } = validateInput(value, 'name');

    this.setState({
      ...this.state,
      nameFiled: {
        fieldValue: value,
        isFieldTouched: true,
        isFieldCorrect: correct,
        isFieldEmpty: empty,
        isFieldPassValidation: valid
      }
    });
  };

  handlePasswordValidation = (value) => {
    const {
      correct,
      empty,
      valid
    } = validateInput(value, 'password');

    this.setState({
      ...this.state,
      passwordField: {
        fieldValue: value,
        isFieldTouched: true,
        isFieldCorrect: correct,
        isFieldEmpty: empty,
        isFieldPassValidation: valid
      }
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateCredentials(this.state.nameFiled.fieldValue, this.state.passwordField.fieldValue)) {
      return alert('welcome Admin');
    }
    this.setState({
      ...this.status,
      passwordField: {
        fieldValue: ''
      },
      invalidCredentialsError: true
    });
  };

  render() {

    const { nameFiled, passwordField, invalidCredentialsError } = this.state;

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
                onChangeHandler={this.handleLoginChange}
                blurEventHandler={this.handleNameValidation}
                inputData={nameFiled}
              />
              <AuthInput
                inputType='password'
                inputName='Password'
                onChangeHandler={this.handlePasswordChange}
                blurEventHandler={this.handlePasswordValidation}
                inputData={passwordField}
              />
            </div>
            <Button
              clickHandler={this.handleFormSubmit}
              buttonText='Login'
            />
          </div>
        </form>
      </div>
    );
  }
}
