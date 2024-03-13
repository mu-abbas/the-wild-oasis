import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users';
import Account from './Pages/Account';
import Cabins from './Pages/Cabins';
import Setting from './Pages/Settings';
import Bookings from './Pages/Bookings';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';
import AppLayout from './Layout/AppLayout';

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
          <Route path="setting" element={<Setting />} />
          <Route path="bookings" element={<Bookings />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
