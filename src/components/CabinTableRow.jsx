import { useMutation, useQueryClient } from '@tanstack/react-query';
import { currencyFormat } from '../helpers/helpers';
import { deleteCabin } from '../services/apiCabins';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import CellEditInput from './CellEditInput';
import Modal from './Modal';
import DeleteModal from './DeleteModal';
import TableRow from './TableRow';

function CabinTableRow({ item }) {
  const { id, name, image, regularPrice, maxCapacity, discount } = item;
  const [isEditable, setIsEditable] = useState(false);
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
    <TableRow cols={'grid-cols-[0.5fr_0.5fr_1fr_1fr_1fr_1fr]'}>
      <img src={image} role="cell" alt="cabin" className="w-20" />

      {isEditable ? (
        <CellEditInput name="name" id={id} defaultValue={name} setIsEditable={setIsEditable} type="text" />
      ) : (
        <span role="cell" className="py-4">
          {name}
        </span>
      )}

      {isEditable ? (
        <CellEditInput
          name="maxCapacity"
          id={id}
          defaultValue={maxCapacity}
          setIsEditable={setIsEditable}
          type="number"
        />
      ) : (
        <span role="cell" className="py-4 font-normal tracking-tighter">
          {maxCapacity} Guests
        </span>
      )}

      {isEditable ? (
        <CellEditInput
          name="regularPrice"
          id={id}
          defaultValue={regularPrice}
          setIsEditable={setIsEditable}
          type="number"
        />
      ) : (
        <span role="cell" className="py-4">
          {currencyFormat(regularPrice)}
        </span>
      )}

      {isEditable ? (
        <CellEditInput name="discount" id={id} defaultValue={discount} setIsEditable={setIsEditable} type="number" />
      ) : (
        <span role="cell" className={`py-4 ${discount ? 'text-green-700' : ' text-red-700'}`}>
          {discount ? currencyFormat(discount) : '-'}
        </span>
      )}

      <div className="flex space-x-2">
        <Modal>
          <Modal.Open name="deleteCabin">
            <button className="text-sm border max-w-min py-0.5 px-4 capitalize rounded-sm bg-grey-100 border-grey-300 hover:bg-grey-50 active:bg-grey-200 active:scale-[0.995] duration-300 transition hover:shadow-sm active:shadow-none disabled:cursor-not-allowed disabled:bg-grey-200">
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name="deleteCabin">
            <DeleteModal onClick={() => mutate(id)} disabled={isPending} />
          </Modal.Window>
        </Modal>

        <button
          className="text-sm border max-w-min py-0.5 px-4 capitalize rounded-sm bg-grey-100 border-grey-300 hover:bg-grey-50 active:bg-grey-200 active:scale-[0.995] duration-300 transition hover:shadow-sm active:shadow-none disabled:cursor-not-allowed disabled:bg-grey-200"
          disabled={isPending}
          onClick={() => setIsEditable(true)}
        >
          <HiPencil />
        </button>
      </div>
    </TableRow>
  );
}

export default CabinTableRow;
