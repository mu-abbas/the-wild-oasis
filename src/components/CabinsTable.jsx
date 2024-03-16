import { useQuery } from '@tanstack/react-query';
import getCabin from '../services/apiCabins';
import TableRow from './TableRow';
import Spinner from './Spinner';
import Error from './Error';

function CabinsTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cabin'],
    queryFn: getCabin,
  });

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error.message} />;

  return (
    <section
      role="table"
      aria-label="Semantic Elements"
      aria-describedby="semantic_elements_table_desc"
      className="border border-grey-200 divide-y divide-grey-200  text-grey-600 font-mono"
    >
      <header
        role="row"
        className="grid grid-cols-[0.5fr_0.5fr_1fr_1fr_1fr_1fr] font-semibold uppercase py-4 gap-4 place-items-center place-content-center"
      >
        <span role="columnheader"></span>
        <span role="columnheader">Cabin</span>
        <span role="columnheader">Capacity</span>
        <span role="columnheader">Price</span>
        <span role="columnheader">Discount</span>
        <span role="columnheader" className="mx-2"></span>
      </header>

      {data.map(item => (
        <TableRow item={item} key={item.id} />
      ))}
    </section>
  );
}

export default CabinsTable;
