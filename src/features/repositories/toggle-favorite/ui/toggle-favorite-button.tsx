import { ButtonHTMLAttributes } from 'react';

import { observer } from 'mobx-react-lite';

import { Repository } from '@/entities/repository';
import { favoritesStore } from '@/entities/repository';

import { HeartIcon, HeartRedIcon } from '@/shared/assets';
import { IconButton } from '@/shared/ui';

type ToggleFavoriteButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  repository: Repository;
};

export const ToggleFavoriteButton = observer(
  ({ repository, ...props }: ToggleFavoriteButtonProps) => {
    const handleLikeClick = (repository: Repository) => {
      const favorite = favoritesStore.favorites.find(
        (repo) => repo.id === repository.id
      );

      if (favorite) {
        favoritesStore.removeFavorite(repository.id);
      } else {
        favoritesStore.addFavorite(repository);
      }
    };

    return (
      <IconButton {...props} onClick={() => handleLikeClick(repository)}>
        {favoritesStore.favorites.find((repo) => repo.id === repository.id) ? (
          <HeartRedIcon />
        ) : (
          <HeartIcon />
        )}
      </IconButton>
    );
  }
);
