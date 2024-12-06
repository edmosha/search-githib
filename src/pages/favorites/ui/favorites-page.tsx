import { FavoritesList } from '@/widgets/favorites-list';

import { BackButton } from '@/shared/ui';

import styles from './favorites.module.css';

export const FavoritesPage = () => {
  return (
    <div className={styles.container}>
      <BackButton />
      <FavoritesList />
    </div>
  );
};
