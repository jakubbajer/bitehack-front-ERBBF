import { ReactNode } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { Navigate } from "react-router";

export const EnsureLoggedIn = ({ children }: { children: ReactNode }) => {
  const {
    data: { loggedIn },
  } = useUserContext();

  if (!loggedIn) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
