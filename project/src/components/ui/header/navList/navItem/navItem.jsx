import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './navItem.module.scss';

NavItem.propTypes = {
  linkPath: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  isFooter: PropTypes.bool,
};

function NavItem({linkPath, itemName, isFooter}) {
  return (
    <li className={styles.navItem}>
      <NavLink
        className={styles.navLink}
        activeClassName={`${styles.active} ${isFooter ? 'visuallyHidden' : ''}`}
        to={linkPath}>
          {itemName}
      </NavLink>
    </li>
  );
}

export default NavItem;
