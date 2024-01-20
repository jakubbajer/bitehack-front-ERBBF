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

  const closeModal = () => {
    setVisible(false);
    setContent(null);
  };

  const openModal = (newContent: ReactNode) => {
    setContent(newContent);
    setVisible(true);
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
