import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../services/apiCabins';
import TableRow from './TableRow';
import Spinner from './Spinner';
import Error from './Error';

function CabinsTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error.message} />;

  return (
    <section
      role="table"
      aria-label="Semantic Elements"
      aria-describedby="semantic_elements_table_desc"
      className="font-mono border divide-y border-grey-200 divide-grey-200 text-grey-600"
    >
      <header
        role="row"
        className="grid grid-cols-[0.5fr_0.5fr_1fr_1fr_1fr_1fr] font-semibold uppercase py-4 gap-4 place-items-center place-content-center"
      >
        <span role="columnheader">image</span>
        <span role="columnheader">cabin</span>
        <span role="columnheader">capacity</span>
        <span role="columnheader">price</span>
        <span role="columnheader">discount</span>
        <span role="columnheader" className="mx-2">
          action
        </span>
      </header>

      {data.map(item => (
        <TableRow item={item} key={item.id} />
      ))}
    </section>
  );
}

export default CabinsTable;
