import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      {/* Add more header elements like user profile, notifications, etc. */}
    </header>
  );
};

export default Header;
