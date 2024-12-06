import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { FavoritesPage } from '@/pages/favorites';
import { HomePage } from '@/pages/home';
import { Layout } from '@/pages/layout';
import { RepositoryPage } from '@/pages/repository';

import { pathKeys } from '@/shared/router';

const browserRouter = createBrowserRouter([
  {
    children: [
      {
        path: pathKeys.root,
        element: <Layout />,
        children: [
          {
            path: pathKeys.root,
            element: <HomePage />,
          },
          {
            path: pathKeys.favorites(),
            element: <FavoritesPage />,
          },
          {
            path: pathKeys.repository(':ownerName', ':repositoryName'),
            element: <RepositoryPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
