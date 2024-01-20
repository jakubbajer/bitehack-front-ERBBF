import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useUserContext } from "../../contexts/UserContext";

export const EnsureLoggedIn = ({ children }: { children: ReactNode }) => {
  const {
    data: { loggedIn },
  } = useUserContext();

  if (!loggedIn) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
