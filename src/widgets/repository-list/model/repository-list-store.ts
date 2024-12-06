import { makeAutoObservable } from 'mobx';

import { RepositoryListSortValues } from '../types.ts';

class RepositoryListStore {
  sort: RepositoryListSortValues = RepositoryListSortValues.StarsDesc;
  searchQuery: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setSort(sort: RepositoryListSortValues) {
    this.sort = sort;
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
  }
}

export const repositoryListStore = new RepositoryListStore();
