function Table({ children }) {
  return (
    <div
      role="table"
      aria-label="Semantic Elements"
      aria-describedby="semantic_elements_table_desc"
      className="font-mono border divide-y border-grey-200 divide-grey-200 text-grey-600"
    >
      {children}
    </div>
  );
}

export default Table;
