import { ReactNode } from 'react';

import { Link } from 'react-router-dom';

import { Repository } from '@/entities/repository';

import { BranchIcon, StarIcon } from '@/shared/assets';
import { pathKeys } from '@/shared/router';
import { Button, Chip } from '@/shared/ui';

import styles from './repository-card.module.css';

type RepositoryCardProps = {
  repository: Repository;
  actions?: ReactNode;
};

export const RepositoryCard = ({
  repository,
  actions,
}: RepositoryCardProps) => {
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <img
          className={styles.avatar}
          alt={'avatar'}
          src={repository.owner.avatar_url}
        />

        <div className={styles.chipContainer}>
          <Chip>
            <StarIcon />
            {repository.stargazers_count}
          </Chip>
          <Chip>
            <BranchIcon />
            {repository.forks_count}
          </Chip>
        </div>
      </div>

      <div className={styles.body}>
        <h2 className={styles.username}>@{repository.owner.login}</h2>
        <a className={styles.repository}>{repository.full_name}</a>
      </div>

      {actions && (
        <div className={styles.footer}>
          <div className={styles.footerButtonsContainer}>{actions}</div>

          <Button
            component={Link}
            to={pathKeys.repository(repository.owner.login, repository.name)}
          >
            Подробнее
          </Button>
        </div>
      )}
    </article>
  );
};
