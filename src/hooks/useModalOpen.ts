import { useState } from "react";

export function useModalOpen() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return { isOpen, handleOpen, handleClose };
}
