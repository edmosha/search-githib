import { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { CopyLinkButton } from '@/features/repositories/copy-link';
import { ToggleFavoriteButton } from '@/features/repositories/toggle-favorite';

import { Repository, RepositoryCard } from '@/entities/repository';

import { repositoriesService } from '@/shared/api';
import { LoadingWrapper } from '@/shared/ui';

import { repositoryListStore } from '../model/repository-list-store.ts';
import { RepositoryListHeader } from './repository-list-header.tsx';
import styles from './repository-list.module.css';

export const RepositoryList = observer(() => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const data = await repositoriesService.getRepositories({
        query: repositoryListStore.searchQuery,
        sort: repositoryListStore.sort,
      });
      setRepositories(data.items);
      setTotalCount(data.total_count > 100 ? 100 : data.total_count);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [repositoryListStore.searchQuery, repositoryListStore.sort]);

  return (
    <div className={styles.container}>
      <RepositoryListHeader totalCount={totalCount} />

      <LoadingWrapper
        isError={isError}
        isLoading={isLoading}
        WrappedComponent={
          <div className={styles.scrollContainer}>
            <div className={styles.listContainer}>
              {repositories?.map((repository) => (
                <RepositoryCard
                  key={repository.id}
                  repository={repository}
                  actions={
                    <>
                      <ToggleFavoriteButton repository={repository} />
                      <CopyLinkButton url={repository.html_url} />
                    </>
                  }
                />
              ))}

              {!repositories.length && 'Список пуст!'}
            </div>
          </div>
        }
      />
    </div>
  );
});
