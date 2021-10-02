import React from 'react';
import { Link } from 'react-router-dom';
import { Social } from '../../../const';
import styles from './social.module.scss';

function SocialList() {
  return(
    <ul className={styles.list}>
      {
        Object.values(Social).map((name) => (
          <li key={name} className={styles.item}>
            <Link
              to='#'
              aria-label={name}
              className={`${styles.link} ${styles[name]}`}
            />
          </li>
        ))
      }
    </ul>
  );
};

export default SocialList;
