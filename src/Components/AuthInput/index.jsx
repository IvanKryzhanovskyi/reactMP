import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { handleAuthInputStyles } from '../../utils';


export const AuthInput = ({
  inputName,
  inputType = 'text',
  blurEventHandler,
  onChangeHandler,
  inputData: {
    fieldValue,
    isFieldTouched,
    isFieldCorrect,
    isFieldEmpty,
    isFieldPassValidation
  }
}) => {

  const isEmptyError = isFieldEmpty && isFieldTouched;
  const isValidationError = !isEmptyError && (!isFieldPassValidation && isFieldTouched);

  return (
    <div className={styles.InputWrapper}>
      <span className={styles.InputTitle}>{inputName}</span>
      <input type={inputType}
             onBlur={({ target: { value } }) => blurEventHandler(value)}
             onChange={({ target: { value } }) => onChangeHandler(value)}
             className={handleAuthInputStyles(styles, isFieldCorrect, isFieldTouched)}
             value={fieldValue}
      />
      {isEmptyError && <span className={styles.Error}>* enter</span>}
      {isValidationError && <span className={styles.Error}>* incorrect</span>}
    </div>
  );

};

AuthInput.propTypes = {
  inputName: PropTypes.string,
  inputType: PropTypes.string,
  blurEventHandler: PropTypes.func,
  onChangeHandler: PropTypes.func,
  inputData: PropTypes.shape({
    fieldValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    isFieldTouched: PropTypes.bool,
    isFieldCorrect: PropTypes.bool,
    isFieldEmpty: PropTypes.bool,
    isFieldPassValidation: PropTypes.bool
  })
};

