import { observer } from 'mobx-react-lite';

import { CopyLinkButton } from '@/features/repositories/copy-link';
import { ToggleFavoriteButton } from '@/features/repositories/toggle-favorite';

import { RepositoryCard, favoritesStore } from '@/entities/repository';

import { FavoritesListHeader } from './favorites-list-header.tsx';
import styles from './favorites-list.module.css';

export const FavoritesList = observer(() => {
  return (
    <div className={styles.container}>
      <FavoritesListHeader />

      <div className={styles.scrollContainer}>
        <div className={styles.listContainer}>
          {favoritesStore.favorites.map((repository) => (
            <RepositoryCard
              key={repository.id}
              repository={repository}
              actions={
                <>
                  <CopyLinkButton url={repository.html_url} />
                  <ToggleFavoriteButton repository={repository} />
                </>
              }
            />
          ))}

          {!favoritesStore.favorites.length && 'Список пуст!'}
        </div>
      </div>
    </div>
  );
});
