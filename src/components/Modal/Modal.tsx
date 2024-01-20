import { Button } from "../Button";
import { useModalContext } from "./ModalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const Modal = () => {
  const { visible, content, closeModal } = useModalContext();

  if (!visible) {
    return null;
  }

  return (
    <div
      className="absolute w-screen h-screen left-0 top-0 bg-text bg-opacity-20 flex justify-center align-middle p-40 z-50 isolate"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-background rounded-lg max-w-full py-4 px-40 justify-center items-center flex flex-col relative">
        {content}
        <Button
          kind="text"
          handleClick={closeModal}
          className="absolute right-4 top-4"
        >
          <FontAwesomeIcon icon={faClose} size="lg" />
        </Button>
      </div>
    </div>
  );
};
