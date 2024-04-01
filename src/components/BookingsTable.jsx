import BookingsTableRow from './BookingsTableRow';
import Table from './Table';
import TableHeader from './TableHeader';

function BookingsTable() {
  return (
    <Table>
      <TableHeader cols={'grid-cols-[0.5fr_1fr_1fr_0.5fr_0.5fr_0.5fr]'}>
        <span role="columnheader">cabin</span>
        <span role="columnheader">guest</span>
        <span role="columnheader">dates</span>
        <span role="columnheader">status</span>
        <span role="columnheader">amount</span>
        <span role="columnheader" className="mx-2">
          actions
        </span>
      </TableHeader>
      <BookingsTableRow />
    </Table>
  );
}

export default BookingsTable;
