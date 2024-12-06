import { CopyLinkButton } from '@/features/repositories/copy-link';
import { ToggleFavoriteButton } from '@/features/repositories/toggle-favorite';

import { Repository } from '@/entities/repository';

import {
  ArchiveIcon,
  BranchIcon,
  CreateIcon,
  FolderIcon,
  StarIcon,
  TerminalIcon,
} from '@/shared/assets';
import { getDateFromDateString } from '@/shared/lib/date';
import { Button } from '@/shared/ui';

import { RepositoryProfileInfoBlock } from './repository-profile-info-block.tsx';
import styles from './repository-profile.module.css';

type RepositoryProfileProps = {
  repository?: Repository;
};

export const RepositoryProfile = ({ repository }: RepositoryProfileProps) => {
  if (!repository) return 'Репозиторий не найден!';

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Профиль</h1>

      <div className={styles.aboutContainer}>
        <img
          src={repository.owner.avatar_url}
          alt={'profile avatar'}
          className={styles.avatar}
        />
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>{repository.full_name}</h2>
          <p className={styles.description}>{repository.description}</p>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <RepositoryProfileInfoBlock
          icon={<StarIcon />}
          title={repository.stargazers_count || 0}
          description={'Количество звезд'}
        />
        <RepositoryProfileInfoBlock
          icon={<BranchIcon />}
          title={repository.forks_count || 0}
          description={'Количестсво форков'}
        />
        <RepositoryProfileInfoBlock
          icon={<ArchiveIcon />}
          title={repository.archived ? 'Да' : 'Нет'}
          description={'В архиве'}
        />
        <RepositoryProfileInfoBlock
          icon={<TerminalIcon />}
          title={repository.language}
          description={'Язык'}
        />
        <RepositoryProfileInfoBlock
          icon={<FolderIcon />}
          title={getDateFromDateString(repository.created_at)}
          description={'Cоздано'}
        />
        <RepositoryProfileInfoBlock
          icon={<CreateIcon />}
          title={getDateFromDateString(repository.updated_at)}
          description={'Изменено'}
        />
      </div>

      <div className={styles.divider} />

      <div className={styles.footer}>
        <div className={styles.actions}>
          <ToggleFavoriteButton repository={repository} />
          <CopyLinkButton url={repository.html_url} />
        </div>

        <Button component={'a'} href={repository.html_url} target={'_blank'}>
          Открыть репозиторий
        </Button>
      </div>
    </div>
  );
};
