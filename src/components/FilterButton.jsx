function FilterButton({ active, onClick, children }) {
  return (
    <button
      className={`px-2 py-1  text-white transition duration-300 rounded-md   ${
        active ? 'bg-brand-600 text-grey-0' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default FilterButton;
