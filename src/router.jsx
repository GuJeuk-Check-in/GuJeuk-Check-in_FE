import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import EnterAdminPassword from './pages/EnterAdminPassword';
import UpdatePassword from './pages/UpdateAdminPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <EnterAdminPassword />,
      },
      {
        path: 'change-password',
        element: <UpdatePassword />,
      },
    ],
  },
]);

export default router;
