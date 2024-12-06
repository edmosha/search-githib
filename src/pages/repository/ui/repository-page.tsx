import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { RepositoryProfile } from '@/widgets/repository-profile';

import { Repository } from '@/entities/repository';

import { repositoriesService } from '@/shared/api';
import { BackButton, LoadingWrapper } from '@/shared/ui';

import styles from './repository.module.css';

export const RepositoryPage = () => {
  const [repository, setRepository] = useState<Repository>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { ownerName, repositoryName } = useParams();

  const fetchData = async () => {
    try {
      setIsLoading(true);

      if (!ownerName || !repositoryName) throw new Error();

      const data = await repositoriesService.getRepositoryByNameAndOwner({
        ownerName,
        repositoryName,
      });
      setRepository(data);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <BackButton className={styles.backButton} />
      <LoadingWrapper
        isLoading={isLoading}
        isError={isError}
        WrappedComponent={<RepositoryProfile repository={repository} />}
      />
    </div>
  );
};
