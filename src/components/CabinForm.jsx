import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { createCabin } from '../services/apiCabins';
import toast from 'react-hot-toast';
import CabinInput from './CabinInput';

function CabinForm({ setIsFormOpen }) {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
      toast.success('Successfully added');
      setIsFormOpen(false);
    },
    onError: error => toast.error(error.message),
  });
  return (
    <form
      className="flex flex-col px-20 py-8 mt-8 divide-y rounded-md px-112 bg-grey-0 divide-grey-100"
      onSubmit={handleSubmit(data => mutate(data))}
    >
      <CabinInput type="text" name="name" register={register}>
        Cabin Name
      </CabinInput>

      <CabinInput type="number" name="maxCapacity" register={register}>
        Max Capacity
      </CabinInput>

      <CabinInput type="number" name="regularPrice" register={register}>
        Regular Price
      </CabinInput>

      <CabinInput type="number" name="discount" register={register}>
        Discount
      </CabinInput>

      <label className="flex items-center py-4">
        <span className="font-semibold uppercase basis-1/3">Description</span>
        <textarea
          name="description"
          className="px-4 py-2 border-2 rounded-md border-grey-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-200"
          {...register('description')}
        />
      </label>

      <CabinInput type="file" name="image" register={register}>
        Image
      </CabinInput>

      <div className="flex justify-end gap-4 pt-8">
        <button
          type="reset"
          className="px-6 py-3 uppercase border rounded-md text-brand-600 bg-grey-0 min-w-32 border-brand-600"
        >
          Clear
        </button>
        <button
          type="submit"
          className="px-6 py-3 uppercase rounded-md bg-brand-600 text-grey-0 min-w-32"
          disabled={isPending}
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default CabinForm;
