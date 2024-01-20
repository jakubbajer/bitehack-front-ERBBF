import { useModalContext } from "./ModalContext";

export const Modal = () => {
  const { visible, content } = useModalContext();

  if (!visible) {
    return null;
  }

  return (
    <div
      className="absolute w-screen h-screen left-0 top-0 bg-text bg-opacity-20 flex justify-center align-middle p-40"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-background rounded-lg p-10 w-full justify-center items-center flex flex-col">
        {content}
      </div>
    </div>
  );
};
