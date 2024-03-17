import { useMutation, useQueryClient } from '@tanstack/react-query';
import { currencyFormat } from '../helpers/helpers';
import { deleteCabin } from '../services/apiCabins';
import toast from 'react-hot-toast';

function TableRow({ item }) {
  const { id, name, image, regularPrice, maxCapacity, discount } = item;
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success('Successfully deleted');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: error => toast.error(error.message),
  });

  return (
    <figure
      className="grid grid-cols-[0.5fr_0.5fr_1fr_1fr_1fr_1fr] py-1 place-content-center font-medium bg-grey-0 gap-4 place-items-center"
      role="row"
    >
      <img src={image} alt="cabin" className="w-20" />
      <span role="cell" className="py-4">
        {name}
      </span>
      <span role="cell" className="py-4 font-normal tracking-tighter">
        {maxCapacity} Guests
      </span>
      <span role="cell" className="py-4">
        {currencyFormat(regularPrice)}
      </span>
      <span role="cell" className="py-4 text-green-700">
        {currencyFormat(discount)}
      </span>
      <button
        className="text-sm border max-w-min py-0.5 px-4 capitalize rounded-sm bg-grey-100 border-grey-300 hover:bg-grey-50 active:bg-grey-200 active:scale-[0.995] duration-300 transition hover:shadow-sm active:shadow-none disabled:cursor-not-allowed disabled:bg-grey-200"
        disabled={isPending}
        onClick={() => mutate(id)}
      >
        {isPending ? 'wait...' : 'delete'}
      </button>
    </figure>
  );
}

export default TableRow;
