import { NavLink } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from 'react-icons/hi2';

function Nav() {
  return (
    <ul className="space-y-4">
      <li>
        <NavLink className="nav-item" to="dashboard">
          <HiOutlineHome size="36" />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-item" to="bookings">
          <HiOutlineCalendarDays size="36" />
          <span>Bookings</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-item" to="cabins">
          <HiOutlineHomeModern size="36" />
          <span>Cabins</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-item" to="users">
          <HiOutlineUsers size="36" />
          <span>Users</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-item" to="setting">
          <HiOutlineCog6Tooth size="36" />
          <span>Settings</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
