import { useSearchParams } from 'react-router-dom';

function Sorter({ options }) {
  const [searchParams, setSearchParamas] = useSearchParams();
  function onChange(value) {
    searchParams.set('sortby', value);
    setSearchParamas(searchParams);
  }

  return (
    <select
      className="p-2 border rounded-md shadow-sm focus:outline-none bg-grey-50 border-grey-100"
      onChange={e => onChange(e.target.value)}
    >
      {!!options?.length &&
        options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
}

export default Sorter;
