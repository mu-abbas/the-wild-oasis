function TableHeader() {
  return (
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
        actions
      </span>
    </header>
  );
}

export default TableHeader;
