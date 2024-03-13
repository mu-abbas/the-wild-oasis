import Nav from '../components/Nav';

function Sidebar() {
  return (
    <aside className="row-span-2 row-start-1 px-8 py-6 space-y-12 min-w-80">
      <div>
        <img src="./logo-light.png" alt="logo" className="w-36 mx-auto" />
      </div>
      <Nav />
    </aside>
  );
}

export default Sidebar;
