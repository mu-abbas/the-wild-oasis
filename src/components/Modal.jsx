import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';

const ModalContext = createContext();

function Modal({ children }) {
  const [openWindow, setOpenWindow] = useState('');

  function open(name) {
    setOpenWindow(name);
  }
  function close() {
    setOpenWindow('');
  }

  return <ModalContext.Provider value={{ openWindow, open, close }}>{children}</ModalContext.Provider>;
}

function TriggerOpen({ name, children }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(name) });
}

function Window({ name, children, closeBtn }) {
  const { openWindow, close } = useContext(ModalContext);
  if (openWindow !== name) return null;

  return createPortal(
    <div className="absolute top-0 left-0 z-40 flex items-center justify-center w-full h-full p-24 backdrop-blur-[2px] animate-bubble">
      <div className="relative w-2/3 h-full overflow-hidden rounded-lg ">
        {closeBtn && (
          <button onClick={close} className="absolute text-3xl top-5 right-5 icon">
            <IoMdClose size={36} />
          </button>
        )}

        <div className="h-full overflow-scroll no-scrollbar">{cloneElement(children, { close: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = TriggerOpen;
Modal.Window = Window;

export default Modal;
