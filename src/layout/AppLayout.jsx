import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

function AppLayout() {
  return (
    <div className="relative h-screen bg-grey-50 grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] overflow-hidden">
      <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full uppercase bg-brand-900 text-grey-100 lg:hidden">
        <p className="px-4 text-center">This app is designed for desktop screens only</p>
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
