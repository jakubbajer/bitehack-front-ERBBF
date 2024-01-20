import { ReactNode, useState } from "react";
import { LoginForm } from "../components/LoginForm";

export const useModal = () => {
  const [visible, setVisible] = useState(true);
  const [content, setContent] = useState<ReactNode | null>(LoginForm);

  return { visible, setVisible, content, setContent };
};
