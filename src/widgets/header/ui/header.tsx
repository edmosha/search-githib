import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import { favoritesStore } from '@/entities/repository';

import { AccountIcon, HeartIcon, Logo } from '@/shared/assets';
import { pathKeys } from '@/shared/router';

import styles from './header.module.css';

export const Header = observer(() => {
  return (
    <header className={styles.bgContainer}>
      <div className={styles.container}>
        <Link to={pathKeys.root}>
          <Logo />
        </Link>
        <div className={styles.linksContainer}>
          <Link to={pathKeys.favorites()} className={styles.favorites}>
            <HeartIcon />
            <span className={styles.favoritesCounter}>
              {favoritesStore.favorites.length}
            </span>
          </Link>
          <AccountIcon />
        </div>
      </div>
    </header>
  );
});
