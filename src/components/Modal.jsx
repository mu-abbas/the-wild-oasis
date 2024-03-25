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

function Window({ name, children }) {
  const { openWindow, close } = useContext(ModalContext);
  if (openWindow !== name) return null;

  return createPortal(
    <div className="absolute top-0 left-0 z-50 flex items-center w-full h-full p-24 backdrop-blur-sm animate-bubble">
      <div className="relative flex-1 ">
        <button onClick={close} className="absolute text-3xl top-10 right-2 icon">
          <IoMdClose size={36} />
        </button>
        {cloneElement(children, { close: close })}
      </div>
    </div>,
    document.body
  );
}

Modal.Open = TriggerOpen;
Modal.Window = Window;

export default Modal;
