import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Users from './pages/Users';
import Cabins from './pages/Cabins';
import Settings from './pages/Settings';
import Bookings from './pages/Bookings';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="account" element={<Account />} />
          <Route path="users" element={<Users />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="settings" element={<Settings />} />
          <Route path="bookings" element={<Bookings />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
