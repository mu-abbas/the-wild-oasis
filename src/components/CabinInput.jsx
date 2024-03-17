function CabinInput({ type, name, register, children }) {
  return (
    <label className="flex items-center py-4">
      <span className="font-semibold uppercase basis-1/3">{children}</span>
      <input
        type={type}
        name={name}
        className="px-4 py-2 border-2 rounded-md border-grey-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-200"
        {...register(name)}
      />
    </label>
  );
}

export default CabinInput;
