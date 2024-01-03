import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { createPortal } from "react-dom";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal (
    <>


      {isOpen && (
        <> 
        <div className=' min-h-[200px] max-w-[80%] bg-white relative z-50 m-auto p-4'>
          <div className=' flex justify-end'>
          <RxCross1 onClick= {onClose} className=' text-2xl cursor-pointer'/>
          </div>
          {children}
        </div>
        <div className=' h-screen w-screen backdrop-blur absolute z-40 top-0 ' onClick= {onClose}/>
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
