import { instance } from '../api-instance.ts';

type getRepositoriesResponseDto = {
  query?: string;
  limit?: number;
  sort?: string;
};

type getRepositoryByNameAndOwnerDto = {
  ownerName: string;
  repositoryName: string;
};

export const getRepositories = ({
  query,
  limit = 100,
  sort = '',
}: getRepositoriesResponseDto) => {
  const notEmptyQuery = query || 'stars:>=0';
  const [sortBy, sortOrder] = sort?.split(' ');

  return instance
    .get(`/search/repositories`, {
      params: {
        q: notEmptyQuery,
        per_page: limit,
        sort: sortBy,
        order: sortOrder,
      },
    })
    .then((res) => res.data);
};

export const getRepositoryByNameAndOwner = ({
  ownerName,
  repositoryName,
}: getRepositoryByNameAndOwnerDto) => {
  return instance
    .get(`/repos/${ownerName}/${repositoryName}`)
    .then((res) => res.data);
};
