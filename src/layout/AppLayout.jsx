import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

function AppLayout() {
  return (
    <div className="relative h-screen bg-grey-50 grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] overflow-hidden">
      <div className="flex justify-center items-center uppercase absolute top-0 left-0 w-full h-full bg-brand-900 text-grey-100 lg:hidden">
        <p className="text-center px-4">This app is designed for desktop screens only</p>
      </div>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
