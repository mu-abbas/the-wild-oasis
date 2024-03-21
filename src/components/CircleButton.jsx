function CircleButton({ onClick, isOpen, children }) {
  return (
    <button
      className={`absolute bottom-0 left-0 flex items-center justify-center p-1 text-3xl leading-none transition duration-300 rounded-full text-grey-50 bg-brand-600 size-14 hover:opacity-90 active:scale-[0.98] ${
        isOpen ? 'hidden' : 'block'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CircleButton;
