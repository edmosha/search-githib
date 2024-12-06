import { ChangeEvent, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { RepositoryListSortValues } from '@/widgets/repository-list/types.ts';

import { Input, Select } from '@/shared/ui';

import { repositoryListStore } from '../model/repository-list-store.ts';
import styles from './repository-list.module.css';

type RepositoryListHeaderProps = {
  totalCount: number;
};

const sortOptions = [
  {
    value: RepositoryListSortValues.StarsDesc,
    label: 'More stars',
  },
  {
    value: RepositoryListSortValues.StarsAsc,
    label: 'Less stars',
  },
  {
    value: RepositoryListSortValues.UpdatedDesc,
    label: 'Latest updated',
  },
  {
    value: RepositoryListSortValues.UpdatedAsc,
    label: 'Oldest updated',
  },
];

export const RepositoryListHeader = observer(
  ({ totalCount }: RepositoryListHeaderProps) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
      const timer = setTimeout(() => {
        repositoryListStore.setSearchQuery(query);
      }, 500);

      return () => clearTimeout(timer);
    }, [query]);

    const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
      repositoryListStore.setSort(e.target.value as RepositoryListSortValues);
    };

    return (
      <div className={styles.headerContainer}>
        <Input
          placeholder={'Search'}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className={styles.sortContainer}>
          <h1 className={styles.title}>Result: {totalCount} repositories</h1>
          <Select
            options={sortOptions}
            value={repositoryListStore.sort}
            onChange={handleChangeSort}
          />
        </div>
      </div>
    );
  }
);
