import { ReactNode, useState } from "react";

export const useModal = () => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  return { visible, setVisible, content, setContent };
};
