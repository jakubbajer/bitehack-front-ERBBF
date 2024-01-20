import { ReactNode, createContext, useContext, useState } from "react";

type ModalContextData = {
  openModal: (newContent: ReactNode) => void;
  closeModal: () => void;
  visible: boolean;
  content: ReactNode;
};

const ModalContext = createContext<ModalContextData | null>(null);

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.code === "Escape") {
      event.preventDefault();
      closeModal();
    }
  };

  const openModal = (newContent: ReactNode) => {
    window.addEventListener("keydown", keydownHandler);
    setContent(newContent);
    setVisible(true);
  };

  const closeModal = () => {
    window.removeEventListener("keydown", keydownHandler);
    setVisible(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ visible, content, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "useModalContext must be used within a ModalContextProvider"
    );
  }

  return context;
};
