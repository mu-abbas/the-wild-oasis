import { currencyFormat, dateFormatter, getTimeDifference } from '../helpers/helpers';
import TableRow from './TableRow';

function BookingsTableRow({ item }) {
  return (
    <TableRow cols={'grid-cols-[0.5fr_1fr_1fr_0.5fr_0.5fr_0.5fr]'}>
      <span role="cell" className="py-4">
        {item.cabins.name}
      </span>
      <div role="cell" className="py-4">
        <span>{item.guests.fullName}</span>
        <br />
        <span className="text-sm text-grey-400">{item.guests.email}</span>
      </div>
      <div role="cell" className="py-4">
        <span>
          {getTimeDifference(item.created_at)} ago &rarr; {item.numNights} nights stay
        </span>
        <br />
        <span className="text-sm text-grey-400">
          {dateFormatter(item.startDate)} - {dateFormatter(item.endDate)}
        </span>
      </div>
      <span
        role="cell"
        className={`py-1 px-3 rounded-full  font-semibold uppercase ${
          item.status === 'checked-in'
            ? 'bg-green-100 text-green-700'
            : item.status === 'checked-out'
            ? 'bg-grey-100 text-grey-500'
            : 'bg-red-100 text-red-700'
        }`}
      >
        {item.status}
      </span>
      <span role="cell" className="py-4">
        {currencyFormat(item.totalPrice)}
      </span>
    </TableRow>
  );
}

export default BookingsTableRow;
