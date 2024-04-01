function CircleButton({ onClick, isOpen, children }) {
  return (
    <button
      className={`flex my-2 mr-auto items-center justify-center py-4 px-8 leading-none transition duration-300 rounded-md text-grey-50 bg-brand-600 hover:opacity-90 active:scale-[0.98] ${
        isOpen ? 'hidden' : 'block'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CircleButton;
