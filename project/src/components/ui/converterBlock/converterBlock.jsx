import React from 'react';
import { Currency } from '../../../const';
import styles from './converterBlock.module.scss';

function ConverterBlock() {
  return(
    <section className={`${styles.converterBlock} wrapper`}>
      <h2 className={styles.title}>Конвертер валют</h2>

      <form className={styles.form}>
        <fieldset>
          <label for='money-have'>У меня есть</label>
          <input type='text' inputMode='numeric' name='value' id='money-have' />
          <select name='currency'>
            {
              Object.values(Currency).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))
            }
          </select>

          <label for='money-have'>Хочу приобрести</label>
          <input type='text' inputMode='numeric' name='value' id='money-have' />
          <select name='currency'>
            {
              Object.values(Currency).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))
            }
          </select>
        </fieldset>
      </form>
    </section>
  );
};

export default ConverterBlock;
