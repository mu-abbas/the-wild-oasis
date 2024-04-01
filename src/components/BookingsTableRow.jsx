import { currencyFormat } from '../helpers/helpers';
import TableRow from './TableRow';

function BookingsTableRow() {
  return (
    <TableRow cols={'grid-cols-[0.5fr_1fr_1fr_0.5fr_0.5fr_0.5fr]'}>
      <span role="cell" className="py-4">
        001
      </span>
      <div role="cell" className="py-4">
        <span>Muhammad Abbas</span>
        <br />
        <span className="text-sm text-grey-400">mohamed_abass21@yahoo.com</span>
      </div>
      <div role="cell" className="py-4">
        <span>7 days ago &rarr; 4 nights stay</span>
        <br />
        <span className="text-sm text-grey-400">May 08 2023 - May 12 2023</span>
      </div>
      <span role="cell" className={`bg-green-100 py-1 px-3 rounded-full text-green-700 font-semibold uppercase`}>
        checked in
      </span>
      <span role="cell" className="py-4">
        {currencyFormat(420)}
      </span>
    </TableRow>
  );
}

export default BookingsTableRow;
