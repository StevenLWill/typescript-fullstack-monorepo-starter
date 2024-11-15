import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  // Define any props if necessary
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} My Dashboard. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
