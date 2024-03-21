import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCabin } from '../services/apiCabins';
import toast from 'react-hot-toast';

function CellEditInput({ id, defaultValue, setIsEditable, type, name }) {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: updateCabin,
    onSuccess: () => {
      toast.success('Successfully edited');
      setIsEditable(false);
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: error => toast.error(error.message),
  });

  function handleSubmit(e) {
    if (!e.code || e.code === 'Enter') {
      const value = e.target.value;
      mutate({ id, name, value });
    }
  }
  return (
    <input
      onBlur={handleSubmit}
      onKeyDown={handleSubmit}
      disabled={isPending}
      type={type}
      name={name}
      className="w-1/2 p-1 text-center border rounded-md border-grey-200 focus:outline-none"
      defaultValue={defaultValue}
    />
  );
}

export default CellEditInput;
