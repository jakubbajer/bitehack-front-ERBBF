import { ReactNode, useEffect } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { useNavigate } from "react-router";

export const EnsureLoggedIn = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const {
    data: { loggedIn },
  } = useUserContext();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return <>{children}</>;
};
