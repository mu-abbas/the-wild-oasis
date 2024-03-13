import { NavLink } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from 'react-icons/hi2';

function Sidebar() {
  return (
    <aside className="row-span-2 row-start-1 px-8 py-6 space-y-12 min-w-80">
      <div>
        <img src="./logo-light.png" alt="logo" className="w-36 mx-auto" />
      </div>
      <ul className="space-y-4">
        <li>
          <NavLink
            className="text-lg font-medium px-6 py-4 hover:bg-grey-100 rounded-md duration-300 transition text-grey-600 hover:text-brand-700 flex gap-6 items-center"
            to="dashboard"
          >
            <HiOutlineHome size="36" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-lg font-medium px-6 py-4 hover:bg-grey-100 rounded-md duration-300 transition text-grey-600 hover:text-brand-700 flex gap-6 items-center"
            to="bookings"
          >
            <HiOutlineCalendarDays size="36" />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-lg font-medium px-6 py-4 hover:bg-grey-100 rounded-md duration-300 transition text-grey-600 hover:text-brand-700 flex gap-6 items-center"
            to="cabins"
          >
            <HiOutlineHomeModern size="36" />
            <span>Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-lg font-medium px-6 py-4 hover:bg-grey-100 rounded-md duration-300 transition text-grey-600 hover:text-brand-700 flex gap-6 items-center"
            to="users"
          >
            <HiOutlineUsers size="36" />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-lg font-medium px-6 py-4 hover:bg-grey-100 rounded-md duration-300 transition text-grey-600 hover:text-brand-700 flex gap-6 items-center"
            to="setting"
          >
            <HiOutlineCog6Tooth size="36" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
