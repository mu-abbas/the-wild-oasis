import BookingsTable from '../components/BookingsTable';
import Filter from '../components/Filter';
import Sorter from '../components/Sorter';

function Bookings() {
  return (
    <section className="container relative min-h-full mx-auto">
      <header className="flex flex-wrap items-center justify-between gap-4 pb-8">
        <h1 className="mr-auto text-3xl font-semibold">All Bookings</h1>
        <Filter
          field="status"
          options={[
            { value: 'all', label: 'All' },
            { value: 'checked-in', label: 'Checked-In' },
            { value: 'checked-out', label: 'Checked-Out' },
            { value: 'unconfirmed', label: 'Unconfirmed' },
          ]}
        />
        <Sorter
          options={[
            { value: 'startDate-des', label: 'Sort by date (Recent)' },
            { value: 'startDate-asc', label: 'Sort by date (Earlier)' },
            { value: 'totalPrice-asc', label: 'Sort by amount (Low)' },
            { value: 'totalPrice-des', label: 'Sort by amount (High)' },
          ]}
        />
      </header>
      <BookingsTable />
    </section>
  );
}

export default Bookings;
