import React from 'react';
import { NavLinks } from '../../../../const';
import PropTypes from 'prop-types';
import NavItem from './navItem/navItem';
import styles from './navList.module.scss';

NavList.propTypes = {
  isFooter: PropTypes.bool,
}

function NavList({isFooter = false}) {
  return(
    <ul className={styles.list}>
      {NavLinks.map(
        ({text, route}) => (
          <NavItem
            linkPath={route}
            itemName={text}
            isFooter={isFooter}
            key={text}
          />
        )
      )}
    </ul>
  )
}

export default NavList;
