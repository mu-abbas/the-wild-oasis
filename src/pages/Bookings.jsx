import BookingsTable from '../components/BookingsTable';
import Filter from '../components/Filter';
import Sorter from '../components/Sorter';

function Bookings() {
  return (
    <section className="container relative min-h-full mx-auto">
      <header className="flex items-center justify-between gap-4 pb-8">
        <h1 className="mr-auto text-3xl font-semibold">All Bookings</h1>
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
      <BookingsTable />
    </section>
  );
}

export default Bookings;
