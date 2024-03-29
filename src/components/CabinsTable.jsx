import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../services/apiCabins';
import TableRow from './TableRow';
import Spinner from './Spinner';
import Error from './Error';
import TableHeader from './TableHeader';
import { useSearchParams } from 'react-router-dom';

function CabinsTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  const [searchParams] = useSearchParams();
  const filteringOption = searchParams.get('discount') || 'all';
  console.log(filteringOption);

  const filteredData =
    data?.filter(item =>
      filteringOption === 'all'
        ? item
        : filteringOption === 'discount'
        ? Boolean(item.discount)
        : Boolean(!item.discount)
    ) || [];

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error.message} />;

  return (
    <div
      role="table"
      aria-label="Semantic Elements"
      aria-describedby="semantic_elements_table_desc"
      className="font-mono border divide-y border-grey-200 divide-grey-200 text-grey-600"
    >
      <TableHeader />
      {filteredData.length > 0 && filteredData.map(item => <TableRow item={item} key={item.id} />)}
      {!filteredData.length && <p className="p-4 text-center bg-grey-0">No available data to be shown!</p>}
    </div>
  );
}

export default CabinsTable;
