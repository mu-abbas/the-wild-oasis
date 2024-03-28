import CabinsTable from '../components/CabinsTable';
import CircleButton from '../components/CircleButton';
import CabinForm from '../components/CabinForm';
import Modal from '../components/Modal';
import Filter from '../components/Filter';

function Cabins() {
  // const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="container relative min-h-full mx-auto">
      <header className="flex items-center justify-between px-4 pb-8">
        <h1 className="mr-auto text-3xl font-semibold">All Cabins</h1>
        <Filter
          field="discount"
          options={[
            { value: 'all', label: 'All' },
            { value: 'discount', label: 'With discount' },
            { value: 'no-discount', label: 'No discount' },
          ]}
        />
      </header>
      <CabinsTable />
      <Modal>
        <Modal.Open name="cabinForm">
          <CircleButton>+</CircleButton>
        </Modal.Open>
        <Modal.Window name="cabinForm" closeBtn={true}>
          <CabinForm />
        </Modal.Window>
      </Modal>
    </section>
  );
}

export default Cabins;
