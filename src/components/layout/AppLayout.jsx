import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

function AppLayout() {
  return (
    <div className="h-screen bg-grey-50 grid grid-rows-[auto_1fr] grid-cols-[auto_1fr]">
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
