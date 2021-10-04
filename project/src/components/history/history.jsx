import React from 'react';
import {useDispatch} from 'react-redux';
import {clearHistory} from '../../store/action';
import HistoryList from '../history-list/history-list';
import Button from '../button/button';
import styles from './history.module.scss';

export default function History() {
  const dispatch = useDispatch();

  return (
    <section className={styles.history}>
      <div className={styles.container}>
        <h2 className={styles.title}>История конвертация</h2>
        <HistoryList/>
        <Button
          type={'button'}
          text={'Очистить историю'}
          isBig={false}
          isDisabled={false}
          onClick={() => dispatch(clearHistory())}
        />
      </div>
    </section>
  );
}
