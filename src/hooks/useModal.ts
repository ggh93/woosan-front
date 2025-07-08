import { useCallback, useState } from 'react';

export type UseModalType = {
  isOpen: (modalId: string) => boolean;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
};

const useModal = () => {
  const [modals, setModals] = useState<Record<string, boolean>>({});

  const openModal = useCallback((modalId: string) => {
    setModals((prevModals) => ({ ...prevModals, [modalId]: true }));
  }, []);

  const closeModal = useCallback((modalId: string) => {
    setModals((prevModals) => ({ ...prevModals, [modalId]: false }));
  }, []);

  const isOpen = useCallback(
    (modalId: string) => {
      return !!modals[modalId];
    },
    [modals],
  );

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
