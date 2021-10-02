import React from 'react';
import BankLogo from '../logo/logo';
import NavList from '../navList/navList';
import SocialList from '../social/social';
import styles from './footer.module.scss';

function Footer() {
  return(
    <footer className={styles.pageFooter}>
      <section className={`${styles.container} wrapper`}>

        <section className={styles.logo}>
          <BankLogo />
          <p className={styles.text}>150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 &copy; Лига Банк, 2019</p>
        </section>

        <NavList isFooter={true} />

        <section className={styles.contacts}>
          <div className={styles.call}>
            <a
              className={styles.tel}
              href='tel:*0904'
              aria-label='Наш мобильный номер'>
                *0904
            </a>
            <p className={styles.text}>Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
          </div>
          <div className={`${styles.call} ${styles.phone}`}>
            <a
              className={styles.tel}
              href='tel:+78001112233'
              aria-label='Наш городской номер'>
                8 800 111 22 33
            </a>
            <p className={styles.text}>Бесплатный для всех городов России</p>
          </div>

          <SocialList />
        </section>

      </section>
    </footer>
  );
};

export default Footer;
