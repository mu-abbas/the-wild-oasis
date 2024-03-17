import { useState } from 'react';
import CabinsTable from '../components/CabinsTable';
import CircleButton from '../utils/CircleButton';
import CabinForm from '../components/CabinForm';

function Cabins() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="container relative min-h-full mx-auto">
      <p>Cabins: TODO</p>
      <CabinsTable />
      {isFormOpen && <CabinForm setIsFormOpen={setIsFormOpen} />}
      <CircleButton onClick={() => setIsFormOpen(true)} isOpen={isFormOpen}>
        +
      </CircleButton>
    </div>
  );
}

export default Cabins;
