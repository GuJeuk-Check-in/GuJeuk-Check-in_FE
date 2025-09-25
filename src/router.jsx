import { Routes, Route } from 'react-router-dom';
import EnterAdminPassword from './pages/EnterAdminPassword';
import UpdatePassword from './pages/UpdateAdminPassword';
import UseList from './pages/ UseList';
import UserDetail from './pages/UserDetail';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<EnterAdminPassword />} />
      <Route path="/update-password" element={<UpdatePassword />} />
      <Route path="/use-list" element={<UseList />} />
      <Route path="/user-detail" element={<UserDetail />} />
    </Routes>
  );
};

export default Router;
