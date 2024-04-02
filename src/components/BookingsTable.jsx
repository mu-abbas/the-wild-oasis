import { useQuery } from '@tanstack/react-query';
import BookingsTableRow from './BookingsTableRow';
import Table from './Table';
import TableHeader from './TableHeader';
import { getBookings } from '../services/apiBookings';
import Spinner from './Spinner';
import Error from './Error';
import { useSearchParams } from 'react-router-dom';

function BookingsTable() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['bookings'],
    queryFn: getBookings,
  });

  const [searchParams] = useSearchParams();
  const filteredBy = searchParams.get('status') || 'all';
  const [sortBy, sortDirection] = searchParams.get('sortby')?.split('-') || [];

  const filteredData = filteredBy === 'all' ? data : data?.filter(item => item.status === filteredBy) || [];

  const sortModifier = sortDirection === 'asc' ? 1 : -1;
  const sortedData = sortBy
    ? filteredData?.sort(
        (a, b) =>
          (sortBy === 'startDate' ? new Date(a[sortBy]) - new Date(b[sortBy]) : a[sortBy] - b[sortBy]) * sortModifier
      )
    : filteredData;

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error.message} />;

  return (
    <Table>
      <TableHeader cols={'grid-cols-[0.5fr_1fr_1fr_0.5fr_0.5fr_0.5fr]'}>
        <span role="columnheader">cabin</span>
        <span role="columnheader">guest</span>
        <span role="columnheader">dates</span>
        <span role="columnheader">status</span>
        <span role="columnheader">amount</span>
        <span role="columnheader" className="mx-2">
          actions
        </span>
      </TableHeader>
      {!!sortedData.length && sortedData.map(item => <BookingsTableRow item={item} key={item.id} />)}
      {!sortedData.length && <p className="p-4 text-center bg-grey-0">No available data to be shown!</p>}
    </Table>
  );
}

export default BookingsTable;
