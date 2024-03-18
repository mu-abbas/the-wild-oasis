import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { createCabin } from '../services/apiCabins';
import toast from 'react-hot-toast';
import CabinInput from './CabinInput';

function CabinForm({ setIsFormOpen }) {
  const { register, handleSubmit, formState, getValues } = useForm();
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
  const { errors } = formState;
  return (
    <form
      className="flex flex-col px-20 py-8 mt-8 divide-y rounded-md px-112 bg-grey-0 divide-grey-100"
      onSubmit={handleSubmit(data => mutate({ ...data, image: data.image[0] }))}
    >
      <CabinInput
        type="text"
        name="name"
        register={register('name', {
          required: 'This field is rquired!',
        })}
        error={errors?.name?.message}
        disabled={isPending}
      >
        Cabin Name
      </CabinInput>

      <CabinInput
        type="number"
        name="maxCapacity"
        register={register('maxCapacity', {
          required: 'This field is rquired!',
          min: {
            value: 1,
            message: 'The maximum capacity should be at least 1!',
          },
        })}
        error={errors?.maxCapacity?.message}
        disabled={isPending}
      >
        Max Capacity
      </CabinInput>

      <CabinInput
        type="number"
        name="regularPrice"
        register={register('regularPrice', {
          required: 'This field is rquired!',
          min: {
            value: 100,
            message: `The price shouldn't be less than 100!`,
          },
        })}
        error={errors?.regularPrice?.message}
        disabled={isPending}
      >
        Regular Price
      </CabinInput>

      <CabinInput
        type="number"
        name="discount"
        register={register('discount', {
          required: 'This field is rquired!',
          validate: value => value < getValues().regularPrice,
        })}
        error={errors?.discount?.message || (errors?.discount && 'Discount should be less than the regular price!')}
        disabled={isPending}
      >
        Discount
      </CabinInput>

      <label className="flex items-center gap-4 py-4">
        <span className="font-medium basis-1/3">Description</span>
        <textarea
          name="description"
          className="w-1/5 h-32 px-4 py-2 border-2 rounded-md resize-none border-grey-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-200"
          {...register('description', {
            required: 'This field is required!',
          })}
          disabled={isPending}
        />
        {errors?.description && <p className="text-red-700 ">{errors?.description?.message}</p>}
      </label>

      <CabinInput
        type="file"
        name="image"
        register={register('image', {
          required: 'This field is rquired!',
        })}
        accept="image/*"
        disabled={isPending}
      >
        Image
      </CabinInput>

      <div className="flex justify-end gap-4 pt-8">
        <button
          type="reset"
          className="px-6 py-3 uppercase transition duration-300 border rounded-md text-brand-600 bg-grey-0 min-w-32 border-brand-600 active:scale-[0.98] hover:bg-brand-50"
        >
          Clear
        </button>
        <button
          type="submit"
          className="px-6 py-3 uppercase rounded-md hover:opacity-90 active:scale-[0.98] bg-brand-600 text-grey-0 min-w-32 transition duration-300"
          disabled={isPending}
        >
          {isPending ? 'Wait...' : 'Create'}
        </button>
      </div>
    </form>
  );
}

export default CabinForm;
