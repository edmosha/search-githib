import { RepositoryList } from '@/widgets/repository-list';

import styles from './home.module.css';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <RepositoryList />
    </div>
  );
};
