import React from 'react';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  // Define any props you need, such as navigation items
}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={styles.active}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics" activeClassName={styles.active}>
              Analytics
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName={styles.active}>
              Settings
            </NavLink>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
