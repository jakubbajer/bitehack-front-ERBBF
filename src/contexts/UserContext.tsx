import { ReactNode, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router";

type UserContextData = {
  data: {
    userId: number | null;
    user: string | null;
    loggedIn: string | boolean;
  };
  handleUserLogin: ({ userId, user }: { userId: number; user: string }) => void;
  handleUserLogout: () => void;
};

export const UserContext = createContext<UserContextData | null>(null);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useLocalStorage<number | null>("userId", null);
  const [user, setUser] = useLocalStorage<string | null>("user", null);
  const [loggedIn, setLoggedIn] = useLocalStorage<boolean>("loggedIn", false);

  const handleUserLogin = ({
    userId,
    user,
  }: {
    userId: number;
    user: string;
  }) => {
    setUserId(userId);
    setUser(user);
    setLoggedIn(true);
    navigate("/dashboard");
  };

  const handleUserLogout = () => {
    setUserId(null);
    setUser(null);
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        data: { userId, user, loggedIn },
        handleUserLogin,
        handleUserLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
