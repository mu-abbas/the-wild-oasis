import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../services/apiCabins';
import CabinTableRow from './CabinTableRow';
import Spinner from './Spinner';
import Error from './Error';
import TableHeader from './TableHeader';
import { useSearchParams } from 'react-router-dom';
import Table from './Table';

function CabinsTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  const [searchParams] = useSearchParams();
  const filteringOption = searchParams.get('discount') || 'all';
  const [sortBy, sortDirection] = searchParams.get('sortby')?.split('-') || [];

  const filteredData =
    data?.filter(item =>
      filteringOption === 'all'
        ? item
        : filteringOption === 'discount'
        ? Boolean(item.discount)
        : Boolean(!item.discount)
    ) || [];

  const sortModifier = sortDirection === 'asc' ? 1 : -1;
  const sortedData = sortBy ? filteredData.sort((a, b) => (a[sortBy] - b[sortBy]) * sortModifier) : filteredData;

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error.message} />;

  return (
    <Table>
      <TableHeader cols={'grid-cols-[0.5fr_0.5fr_1fr_1fr_1fr_1fr]'}>
        <span role="columnheader">image</span>
        <span role="columnheader">cabin</span>
        <span role="columnheader">capacity</span>
        <span role="columnheader">price</span>
        <span role="columnheader">discount</span>
        <span role="columnheader" className="mx-2">
          actions
        </span>
      </TableHeader>
      {sortedData.length > 0 && sortedData.map(item => <CabinTableRow item={item} key={item.id} />)}
      {!sortedData.length && <p className="p-4 text-center bg-grey-0">No available data to be shown!</p>}
    </Table>
  );
}

export default CabinsTable;
