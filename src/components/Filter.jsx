import { useSearchParams } from 'react-router-dom';
import FilterButton from './FilterButton';

function Filter({ field, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentOption = searchParams.get(field) || options?.[0].value;

  function handleClick(value) {
    searchParams.set(field, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-1 p-1 border rounded-md shadow-sm bg-grey-50 border-grey-100">
      {options?.map(option => (
        <FilterButton
          key={option.value}
          active={currentOption === option.value}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </FilterButton>
      ))}
    </div>
  );
}

export default Filter;
