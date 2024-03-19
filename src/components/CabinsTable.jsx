import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../services/apiCabins';
import TableRow from './TableRow';
import Spinner from './Spinner';
import Error from './Error';
import TableHeader from './TableHeader';

function CabinsTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error.message} />;

  return (
    <>
      {data.length > 0 && (
        <section
          role="table"
          aria-label="Semantic Elements"
          aria-describedby="semantic_elements_table_desc"
          className="font-mono border divide-y border-grey-200 divide-grey-200 text-grey-600"
        >
          <TableHeader />

          {/* Table cells */}
          {data.map(item => (
            <TableRow item={item} key={item.id} />
          ))}
        </section>
      )}
    </>
  );
}

export default CabinsTable;
