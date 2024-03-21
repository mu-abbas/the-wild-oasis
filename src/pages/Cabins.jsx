import { useState } from 'react';
import CabinsTable from '../components/CabinsTable';
import CircleButton from '../components/CircleButton';
import CabinForm from '../components/CabinForm';

function Cabins() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="container relative min-h-full mx-auto">
      <header className="flex items-center justify-between px-4 pb-8">
        <h1 className="text-3xl font-semibold">All Cabins</h1>
        <p>Sort - Filter</p>
      </header>
      <CabinsTable />
      {isFormOpen && <CabinForm setIsFormOpen={setIsFormOpen} />}
      <CircleButton onClick={() => setIsFormOpen(true)} isOpen={isFormOpen}>
        +
      </CircleButton>
    </section>
  );
}

export default Cabins;
