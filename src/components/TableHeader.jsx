function TableHeader({ cols, children }) {
  return (
    <header
      role="row"
      className={`grid ${cols} font-semibold uppercase py-4 gap-4 place-items-center place-content-center`}
    >
      {children}
    </header>
  );
}

export default TableHeader;
