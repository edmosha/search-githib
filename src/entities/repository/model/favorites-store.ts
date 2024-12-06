import { action, autorun, makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import { FavoritesListSortValues, Repository } from '../types.ts';

class FavoritesStore {
  favorites: Repository[] = [];
  sort: FavoritesListSortValues = FavoritesListSortValues.StarsDesc;

  constructor() {
    makeAutoObservable(this, {
      sortFavorites: action,
    });
    makePersistable(this, {
      name: 'favoritesStore',
      properties: ['favorites', 'sort'],
      storage: window.localStorage,
    });
    autorun(() => this.sortFavorites(this.sort));
  }

  addFavorite(repository: Repository) {
    if (!this.favorites.find((fav) => fav.id === repository.id)) {
      this.favorites.push(repository);
    }
  }

  removeFavorite(repoId: Repository['id']) {
    this.favorites = this.favorites.filter((fav) => fav.id !== repoId);
  }

  setSort(sort: FavoritesListSortValues) {
    this.sort = sort;
  }

  sortFavorites(sort: FavoritesListSortValues) {
    if (sort === FavoritesListSortValues.StarsDesc) {
      return this.favorites.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );
    }

    if (sort === FavoritesListSortValues.StarsAsc) {
      return this.favorites.sort(
        (a, b) => a.stargazers_count - b.stargazers_count
      );
    }
  }
}

export const favoritesStore = new FavoritesStore();
