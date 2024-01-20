import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ReactNode } from "react";

export const EnsureLoggedIn = ({ children }: { children: ReactNode }) => {
  const [loggedIn] = useLocalStorage("loggedIn", false);

  if (!loggedIn) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
