import React from 'react';
import styles from './MainContent.module.css';
import ChartWidget from '../widgets/ChartWidget/ChartWidget';
import TableWidget from '../widgets/TableWidget/TableWidget';

interface MainContentProps {
  // Define any props if necessary
}

const MainContent: React.FC<MainContentProps> = () => {
  return (
    <main className={styles.mainContent}>
      <div className={styles.widgets}>
        <ChartWidget title="Sales Overview" />
        <TableWidget title="Recent Orders" />
        {/* Add more widgets as needed */}
      </div>
    </main>
  );
};

export default MainContent;
