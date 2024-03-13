import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Account from './pages/Account';
import Cabins from './pages/Cabins';
import Setting from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Login from './pages/Login';
import PageNotFound from './pages/Bookings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="account" element={<Account />} />
        <Route path="users" element={<Users />} />
        <Route path="cabins" element={<Cabins />} />
        <Route path="login" element={<Login />} />
        <Route path="setting" element={<Setting />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
