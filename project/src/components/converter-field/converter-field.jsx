import React from 'react';
import PropTypes from 'prop-types';
import styles from './converter-field.module.scss';
import {Currency} from '../../const';

const MAX_INPUT_NUMBER_LENGTH = 10;

export default function ConverterField({label, type, value, onInputChange, onSelectChange, currentCurrency, inputId}){
  return (
    <fieldset className={styles.fieldset}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>
      <input
        className={styles.input}
        type='text'
        inputMode={'numeric'}
        id={inputId}
        maxLength={MAX_INPUT_NUMBER_LENGTH}
        value={value}
        onChange={(evt) => onInputChange(evt, type)}
      />
      <select
        className={styles.select}
        name='Currency'
        value={currentCurrency}
        onChange={(evt) => onSelectChange(evt, type)}
        aria-label='Выберити валюту'
      >
        {
          Object.values(Currency).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))
        }
      </select>
    </fieldset>
  );
}

ConverterField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  currentCurrency: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
};
