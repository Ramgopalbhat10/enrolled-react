import { useState } from "react";

const useModal = (initial) => {
  const [isOpen, setIsOpen] = useState(initial);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return [isOpen, { openModal, closeModal }];
};

export default useModal;
