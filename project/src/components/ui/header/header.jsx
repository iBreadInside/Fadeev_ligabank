import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import styles from './header.module.scss'
import BankLogo from './logo/logo';
import NavList from './navList/navList';

function Header() {
  return(
    <header className={styles.siteHeader}>
      <div className='wrapper'>
        <nav className={styles.siteNav}>
          <BankLogo />
          <NavList />
          <Link
            className={styles.login}
            to={AppRoute.LOGIN}>
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.22222 14.3H4.44444V19.8H17.7778V2.2H4.44444V7.7H2.22222V1.1C2.22222 0.808262 2.33929 0.528472 2.54766 0.322183C2.75603 0.115892 3.03865 0 3.33333 0H18.8889C19.1836 0 19.4662 0.115892 19.6746 0.322183C19.8829 0.528472 20 0.808262 20 1.1V20.9C20 21.1917 19.8829 21.4715 19.6746 21.6778C19.4662 21.8841 19.1836 22 18.8889 22H3.33333C3.03865 22 2.75603 21.8841 2.54766 21.6778C2.33929 21.4715 2.22222 21.1917 2.22222 20.9V14.3ZM8.88889 9.9V6.6L14.4444 11L8.88889 15.4V12.1H0V9.9H8.88889Z" fill="#1F1E25"/>
              </svg>
              Войти в Интернет-банк
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;