function CabinInput({ type, name, register, accept, error, disabled, children }) {
  return (
    <label className="flex items-center gap-4 py-4">
      <span className="font-medium basis-1/3">{children}</span>
      <input
        type={type}
        name={name}
        className={`w-1/4 px-4 py-2 border-2 rounded-md border-grey-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-200 file:bg-brand-600 file:border-none file:py-2 file:px-3 file:rounded-md file:text-grey-50 file:mr-3 file:hover:cursor-pointer file:duration-300 file:transition file:hover:opacity-90 file:active:scale-[0.98] ${
          type === 'file' ? 'px-0 py-0 border-none text-grey-500' : ''
        }`}
        {...register}
        accept={accept}
        disabled={disabled}
      />
      {error && <p className="text-red-700 ">{error}</p>}
    </label>
  );
}

export default CabinInput;
