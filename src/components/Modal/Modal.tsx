import { useModal } from "../../hooks/useModal";

export const Modal = () => {
  const { visible, content } = useModal();

  if (!visible) {
    return null;
  }

  return (
    <div
      className="absolute w-screen h-screen left-0 top-0 bg-opacity-50 bg-slate-700 flex justify-center align-middle p-40"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-white rounded-lg p-10">{content || <></>}</div>
    </div>
  );
};
