import { currencyFormat } from '../helpers/helpers';

function TableRow({ item }) {
  const { id, name, image, regularPrice, maxCapacity, discount } = item;

  return (
    <figure
      className="grid grid-cols-[0.5fr_0.5fr_1fr_1fr_1fr_1fr] py-1 place-content-center font-medium bg-grey-0 gap-4 place-items-center"
      role="row"
    >
      <img src={image} alt="cabin" className="w-20" />
      <span role="cell">{name}</span>
      <span role="cell" className="font-normal tracking-tighter">
        {maxCapacity} Guests
      </span>
      <span role="cell">{currencyFormat(regularPrice)}</span>
      <span role="cell" className="text-green-700">
        {currencyFormat(discount)}
      </span>
      <button
        id={id}
        className="text-sm border max-w-min py-0.5 px-4 capitalize rounded-sm bg-grey-100 border-grey-300 hover:bg-grey-50 active:bg-grey-200 active:scale-[0.995] duration-300 transition hover:shadow-sm active:shadow-none mx-auto"
      >
        delete
      </button>
    </figure>
  );
}

export default TableRow;
