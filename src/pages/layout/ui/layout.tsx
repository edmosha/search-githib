import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/header';

import styles from './layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentContainer}>
        <Outlet />
      </div>
    </div>
  );
};
