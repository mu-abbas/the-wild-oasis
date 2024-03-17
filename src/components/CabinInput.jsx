function CabinInput({ type, name, register, accept, error, children }) {
  return (
    <label className="flex items-center gap-4 py-4">
      <span className="font-medium basis-1/3">{children}</span>
      <input
        type={type}
        name={name}
        className="w-1/5 px-4 py-2 border-2 rounded-md border-grey-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-200"
        {...register}
        accept={accept}
      />
      {error && <p className="text-red-700 ">{error}</p>}
    </label>
  );
}

export default CabinInput;
