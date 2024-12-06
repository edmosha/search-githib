import { ChangeEvent } from 'react';

import { observer } from 'mobx-react-lite';

import { FavoritesListSortValues, favoritesStore } from '@/entities/repository';

import { Select } from '@/shared/ui';

import styles from './favorites-list.module.css';

const sortOptions = [
  {
    value: FavoritesListSortValues.StarsDesc,
    label: 'More stars',
  },
  {
    value: FavoritesListSortValues.StarsAsc,
    label: 'Less stars',
  },
];

export const FavoritesListHeader = observer(() => {
  const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    favoritesStore.setSort(e.target.value as FavoritesListSortValues);
  };

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.title}>
        Favorites: {favoritesStore.favorites.length}
      </h1>
      <Select
        options={sortOptions}
        value={favoritesStore.sort}
        onChange={handleChangeSort}
      />
    </div>
  );
});
