import CabinsTable from '../components/CabinsTable';
import CircleButton from '../components/CircleButton';
import CabinForm from '../components/CabinForm';
import Modal from '../components/Modal';
import Filter from '../components/Filter';
import Sorter from '../components/Sorter';

function Cabins() {
  return (
    <section className="container relative min-h-full mx-auto">
      <header className="flex items-center justify-between gap-4 pb-8">
        <h1 className="mr-auto text-3xl font-semibold">All Cabins</h1>
        <Filter
          field="discount"
          options={[
            { value: 'all', label: 'All' },
            { value: 'discount', label: 'With discount' },
            { value: 'no-discount', label: 'No discount' },
          ]}
        />
        <Sorter
          options={[
            { value: 'name-asc', label: 'Sort by name (A-Z)' },
            { value: 'name-des', label: 'Sort by name (Z-A)' },
            { value: 'maxCapacity-asc', label: 'Sort by capacity (Low)' },
            { value: 'maxCapacity-des', label: 'Sort by capacity (High)' },
            { value: 'regularPrice-asc', label: 'Sort by price (Low)' },
            { value: 'regularPrice-des', label: 'Sort by price (High)' },
            { value: 'discount-asc', label: 'Sort by discount (Low)' },
            { value: 'discount-des', label: 'Sort by discount (High)' },
          ]}
        />
      </header>
      <CabinsTable />
      <Modal>
        <Modal.Open name="cabinForm">
          <CircleButton>Create new cabin</CircleButton>
        </Modal.Open>
        <Modal.Window name="cabinForm">
          <CabinForm />
        </Modal.Window>
      </Modal>
    </section>
  );
}

export default Cabins;
