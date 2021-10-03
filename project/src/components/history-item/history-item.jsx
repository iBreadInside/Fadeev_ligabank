import React from 'react';
import PropTypes from 'prop-types';
import styles from './history-item.module.scss';
import {adaptDate} from '../../utils/date';
import {DateType} from '../../const';

export default function HistoryItem({data}) {
  const {date, sellValue, currencySellValue, buyValue, currencyBuyValue} = data;
  return (
    <li className={styles.item}>
      <span
        className={styles.date}
      >
        {adaptDate(date, DateType.HISTORY)}
      </span>
      <span
        className={styles.from}
      >
        {sellValue.toString().replace('.', ',')} {currencySellValue}
      </span>
      <span
        className={styles.to}
      >
        {buyValue.toString().replace('.', ',')} {currencyBuyValue}
      </span>
    </li>
  );
}

HistoryItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    sellValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    buyValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    sellCurrency: PropTypes.string.isRequired,
    buyCurrency: PropTypes.string.isRequired,
  }).isRequired,
};
