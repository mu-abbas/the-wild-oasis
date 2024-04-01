function TableRow({ cols, children }) {
  return (
    <figure
      className={`grid ${cols} py-1 place-content-center font-medium bg-grey-0 gap-4 place-items-center`}
      role="row"
    >
      {children}
    </figure>
  );
}

export default TableRow;
