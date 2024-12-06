import { ReactNode } from 'react';

import styles from './repository-profile.module.css';

type RepositoryInfoBlockProps = {
  icon: ReactNode;
  title?: string | number | null;
  description: string;
};

export const RepositoryProfileInfoBlock = ({
  icon,
  title,
  description,
}: RepositoryInfoBlockProps) => {
  return (
    <div className={styles.infoBlock}>
      <div className={styles.infoBlockIcon}>{icon}</div>

      <div className={styles.infoBlockTextContainer}>
        <h3 className={styles.infoBlockTitle}>{title ?? '-'}</h3>
        <p className={styles.infoBlockText}>{description}</p>
      </div>
    </div>
  );
};
