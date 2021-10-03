import React from 'react';
import {useSelector} from 'react-redux';
import styles from './history-list.module.scss';
import HistoryItem from '../history-item/history-item';
import {getHistory} from '../../store/selectors';


export default function HistoryList() {
  const history = useSelector(getHistory);

  return (
    <ul className={styles.container}>
      {
        history.map((item) => (
          <HistoryItem key={item.id} data={item}/>
        ))
      }
    </ul>
  );
}
