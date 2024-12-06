export const pathKeys = {
  root: '/',
  favorites: () => pathKeys.root.concat('favorites'),
  repository: (ownerName: string, repositoryName: string) =>
    pathKeys.root.concat(`repository/${ownerName}/${repositoryName}`),
};
