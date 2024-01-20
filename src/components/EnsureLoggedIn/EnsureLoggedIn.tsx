import { useLocalStorage } from "../../hooks/useLocalStorage";

export const EnsureLoggedIn = () => {
  const login = useLocalStorage<object>("lala", {});
  return <div>EnsureLoggedIn</div>;
};
