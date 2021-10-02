import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import styles from './sectionBanner.module.scss';

function SectionBanner() {
  return(
    <section className={styles.banner}>
      <div className='wrapper'>
        <h1 className={styles.title}>Лига Банк</h1>
        <p>Кредиты на любой случай</p>
        <Link to={AppRoute.CREDIT_CALCULATOR}>Рассчитать кредит</Link>
      </div>
    </section>
  );
};

export default SectionBanner;
